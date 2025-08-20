import React, { useState, useRef, useEffect } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  priority?: boolean
  sizes?: string
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true)
      return
    }

    if (!imgRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    )

    observerRef.current.observe(imgRef.current)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [priority, loading])

  // Generate WebP source if supported
  const getWebPSrc = (originalSrc: string): string => {
    if (originalSrc.endsWith('.svg')) return originalSrc
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  }

  // Generate responsive sizes
  const getResponsiveSizes = (): string => {
    if (sizes) return sizes
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  }

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Placeholder while loading
  const renderPlaceholder = () => (
    <div
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '200px',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
      aria-label={`Loading ${alt}`}
    />
  )

  // Error fallback
  const renderError = () => (
    <div
      className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '200px',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      <span className="text-sm">Failed to load image</span>
    </div>
  )

  if (hasError) {
    return renderError()
  }

  if (!isInView) {
    return (
      <div ref={imgRef}>
        {renderPlaceholder()}
      </div>
    )
  }

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {!src.endsWith('.svg') && (
        <source
          srcSet={getWebPSrc(src)}
          type="image/webp"
          sizes={getResponsiveSizes()}
        />
      )}
      
      {/* Fallback image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        width={width}
        height={height}
        loading={loading}
        sizes={getResponsiveSizes()}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
      
      {/* Loading placeholder overlay */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
    </picture>
  )
}

export default OptimizedImage