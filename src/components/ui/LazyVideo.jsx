"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Performance-safe background video.
 * - Loads/mounts the <video> only when near the viewport (IntersectionObserver)
 * - Pauses when out of view or when the tab is hidden
 * - Respects prefers-reduced-motion (renders poster only)
 *
 * All styling props pass through to the wrapper, which is absolute-inset
 * inside a relatively positioned parent by default.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  overlayClass = "",
  imgClassName = "",
  position = "absolute inset-0",
  objectPosition = "center",
  ariaLabel,
}) {
  const holderRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = holderRef.current;
    if (!node || shouldLoad) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  // Pause when scrolled away or tab hidden; play when visible.
  useEffect(() => {
    const video = videoRef.current;
    const holder = holderRef.current;
    if (!video || !shouldLoad || reduceMotion) return;

    const play = () => video.play().catch(() => {});
    const pause = () => video.pause();

    let scrollObserver;
    if (typeof IntersectionObserver !== "undefined") {
      scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => (entry.isIntersecting ? play() : pause()));
        },
        { threshold: 0.15 }
      );
      scrollObserver.observe(holder);
    }

    const onVisibility = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (scrollObserver) scrollObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      pause();
    };
  }, [shouldLoad, reduceMotion]);

  return (
    <div ref={holderRef} className={`${position} overflow-hidden ${className}`}>
      {shouldLoad && !reduceMotion ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{ objectPosition }}
          src={src}
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label={ariaLabel}
          tabIndex={-1}
        />
      ) : (
        poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            className={`h-full w-full object-cover ${imgClassName}`}
            style={{ objectPosition }}
            loading="lazy"
          />
        )
      )}
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} aria-hidden="true" />}
    </div>
  );
}
