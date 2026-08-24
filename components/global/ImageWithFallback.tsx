// app/components/ImageWithFallback.tsx
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
  const [prevSrc, setPrevSrc] = useState(src);
  const [imgSrc, setImgSrc] = useState(() => normalizeSrc(src as string));

  if (prevSrc !== src) {
    setPrevSrc(src);
    setImgSrc(normalizeSrc(src as string));
  }

  return (
    <Image
      {...props}
      src={imgSrc || fallbackSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
