// components/global/ImageWithFallback.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends React.ComponentProps<typeof Image> {
  fallbackSrc: string;
}

function normalizeSrc(src: string | { src: string }) {
  if (!src) return '';
  const s = typeof src === 'object' ? src.src : src;
  if (s.startsWith('/') || s.startsWith('http://') || s.startsWith('https://') || s.startsWith('data:')) {
    return s;
  }
  return `/${s}`;
}

export function ImageWithFallback({ src, fallbackSrc, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setError(false);
  }

  const normalized = normalizeSrc(src as string) || fallbackSrc;

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : normalized}
      alt={alt}
      onError={() => {
        setError(true);
      }}
    />
  );
}
