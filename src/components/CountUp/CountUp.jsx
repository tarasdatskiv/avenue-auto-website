import { useEffect, useRef, useState } from 'react'

function CountUp({ end, duration = 1500, suffix = '' }) {
  const [value, setValue] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    let animationFrameId

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        observer.disconnect()

        const startTime = performance.now()

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime
          const progress = Math.min(elapsedTime / duration, 1)

          const easedProgress = 1 - Math.pow(1 - progress, 3)

          setValue(Math.round(end * easedProgress))

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate)
          }
        }

        animationFrameId = requestAnimationFrame(animate)
      },
      {
        threshold: 0.4,
      },
    )

    const element = elementRef.current

    if (element) {
      observer.observe(element)
    }

    return () => {
      observer.disconnect()

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [end, duration])

  return (
    <span ref={elementRef}>
      {value}
      {suffix}
    </span>
  )
}

export default CountUp