"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion } from "framer-motion";

/**
 * Scroll-scrubbed cinematic video: scrolling drives playback frame-by-frame.
 *
 * The source is fetched fully and played from an in-memory blob, so every
 * frame is always buffered — seeking never stalls waiting on the network.
 * This is what keeps the scrub butter-smooth from the very first pixel.
 *
 * Usage: place inside a `sticky top-0 h-screen` wrapper within a taller
 * section (e.g. h-[280svh]), and pass the section's scrollYProgress
 * MotionValue as `progress`. Respects prefers-reduced-motion.
 */
export default function ScrollVideo({
  src,
  poster,
  progress,
  className = "",
  overlayClass = "",
  imgClassName = "",
  objectPosition = "center",
  ariaLabel,
}) {
  const videoRef = useRef(null);
  const durationRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();

  // Fetch the whole video into memory and swap in a blob URL.
  // Local assets are small (a few MB), so this is cheap and makes
  // scrubbing instanly responsive with zero seek stalls.
  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let objectUrl = null;

    const load = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        const video = videoRef.current;
        if (video) video.src = objectUrl;
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    load();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src, reduceMotion]);

  // Hydration-safe readiness polling: wait until duration is known and the
  // first frame is decodable, then park the video on frame one.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const id = window.setInterval(() => {
      if (video.error) {
        setFailed(true);
        window.clearInterval(id);
        return;
      }
      // HAVE_CURRENT_DATA or better: first frame available for painting.
      if (video.readyState >= 2 && video.duration) {
        durationRef.current = video.duration;
        video.pause();
        video.currentTime = Math.max(progress.get() * (video.duration - 0.05), 0.001);
        setReady(true);
        window.clearInterval(id);
      }
    }, 100);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  // Scrub: map scroll progress (0..1) to video time.
  useMotionValueEvent(progress, "change", (value) => {
    const video = videoRef.current;
    const duration = durationRef.current;
    if (!video || !ready || !duration) return;
    const target = Math.min(Math.max(value, 0), 1) * (duration - 0.05);
    if (Math.abs(video.currentTime - target) > 0.01) {
      video.currentTime = target;
    }
  });

  // Safety: never let the video run on its own — scrubbing only.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready) return;
    const stop = () => {
      if (!video.paused) video.pause();
    };
    video.addEventListener("play", stop);
    return () => video.removeEventListener("play", stop);
  }, [ready]);

  const showFallback = reduceMotion || failed;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {showFallback ? (
        poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            className={`h-full w-full object-cover ${imgClassName}`}
            style={{ objectPosition }}
            loading="eager"
          />
        )
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          poster={poster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          tabIndex={-1}
          aria-label={ariaLabel}
        />
      )}
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />}
    </div>
  );
}
