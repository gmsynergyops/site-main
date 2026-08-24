"use client"

import ReactLenis, { useLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis()
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!lenis) return

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    const onRefresh = () => lenis.resize()
    ScrollTrigger.addEventListener("refresh", onRefresh)

    // fonts load hone ke baad refresh
    document.fonts.ready.then(() => ScrollTrigger.refresh())

    // window "load" — saari images load hone ke baad final refresh
    const onWindowLoad = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }
    window.addEventListener("load", onWindowLoad)

    // Debounced ResizeObserver — prevents excessive layout thrashing during
    // initial page load when DOM elements are settling
    const debouncedResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      resizeTimerRef.current = setTimeout(() => {
        requestAnimationFrame(() => {
          lenis.resize()
          ScrollTrigger.refresh()
        })
      }, 350)
    }

    const ro = new ResizeObserver(debouncedResize)
    ro.observe(document.body)

    return () => {
      lenis.off("scroll", onScroll)
      ScrollTrigger.removeEventListener("refresh", onRefresh)
      window.removeEventListener("load", onWindowLoad)
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current)
      ro.disconnect()
      ScrollTrigger.clearScrollMemory()
    }
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        syncTouchLerp: 0.05,
        duration: 1.2,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}