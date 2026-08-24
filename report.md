# 🚀 Synergy Super Speciality Hospital - Overall Site Performance Audit & Improvement Report

## 1. Executive Summary

This report provides a comprehensive performance audit and actionable optimization plan for the **Synergy Super Speciality Hospital** web application built with **Next.js 16 (App Router)** and **React 19**.

Our objective is to optimize **Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: Faster initial loading of hero media and images.
- **CLS (Cumulative Layout Shift)**: Eliminate layout shifts caused by client-side hydration media checks.
- **INP / FID (Interaction to Next Paint)**: Reduce initial JavaScript execution and main thread blocking.
- **FCP (First Contentful Paint)**: Speed up font loading, CSS parsing, and asset fetching.

---

## 2. Key Audit Findings & Identified Bottlenecks

### 📊 A. Build & Next.js Configuration (`next.config.ts`)
1. **Missing Modern Next Image Formats**:
   - Next.js default image optimization converts images to WebP by default, but **AVIF** is missing. AVIF provides **20-40% smaller file sizes** than WebP at identical visual quality.
2. **Missing Package Import Tree-Shaking**:
   - Heavy dependencies like `lucide-react`, `framer-motion`, `lodash`, `recharts`, `date-fns`, and Radix UI primitives are imported across the codebase.
   - Without `experimental.optimizePackageImports`, unused module exports can bloat client JavaScript chunks.
3. **Bundle Analyzer Integration**:
   - `@next/bundle-analyzer` is listed in `package.json` but not enabled in `next.config.ts`. Developers cannot currently measure chunk size distributions.
4. **Static Cache Control Headers**:
   - Static assets (`/images/*`, `/fonts/*`, videos, icons) lack HTTP Cache-Control headers (`public, max-age=31536000, immutable`), causing browsers to re-validate static files on navigation.

### 🔤 B. Font Loading Overhead (`app/[locale]/layout.tsx`)
1. **Duplicate Google Font Instantiation**:
   - `Kantumruy_Pro` from `next/font/google` is instantiated twice (`nunito` and `nunito_sans`) with identical parameters:
     ```tsx
     const nunito = Kantumruy_Pro({ subsets: ['latin'], display: 'swap', variable: '--font-nunito' })
     const nunito_sans = Kantumruy_Pro({ subsets: ['latin'], display: 'swap', variable: '--font-nunito-sans' })
     ```
   - This results in double font CSS imports and redundant network downloads.

### 🎥 C. Hero Section Media & Layout Shift (`homepage-video.tsx`)
1. **Hydration Mismatch & Double Render**:
   - `HomepageVideo` relies on `useIsMobile()` JS window hook to toggle between mobile and desktop video sources.
   - On SSR, `isMobile` evaluates to `false` (desktop), rendering the desktop video. On mobile devices, after JS hydration, `isMobile` changes to `true`, triggering a component re-render, replacing the poster and video source mid-stream. This causes **CLS layout shifts** and **double video network requests**.
2. **Video Preload Strategy**:
   - `preload="none"` delays video initialization until interaction/autoplay trigger. Changing hero video to `preload="metadata"` allows instant video playback without downloading the full stream up front.

### ⚡ D. Component Loading & Client Bundle Optimization
1. **Heavy Below-the-Fold Components**:
   - Several complex interactive sliders, carousels, and accordion components are rendered on pages without dynamic client loading boundaries.
2. **Image Sizing & Fallback Attributes**:
   - Responsive images with fill properties benefit from explicit `sizes` definitions (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`) to ensure mobile devices fetch smaller variants from Cloudinary/Next Image optimizer.

---

## 3. Actionable Implementation Plan & Performance Updates

| # | Component / File | Optimization Action | Expected Benefit |
|---|---|---|---|
| 1 | [next.config.ts](file:///d:/VIACAM-PRODUCTIONS/synergy-new-v3/next.config.ts) | Add AVIF format support, `optimizePackageImports`, `@next/bundle-analyzer`, & static caching headers | 20-30% image size reduction & smaller JS bundle |
| 2 | [layout.tsx](file:///d:/VIACAM-PRODUCTIONS/synergy-new-v3/app/[locale]/layout.tsx) | Single font instance for `Kantumruy_Pro` with shared CSS variables | Saves font request overhead & CSS parsing |
| 3 | [homepage-video.tsx](file:///d:/VIACAM-PRODUCTIONS/synergy-new-v3/app/[locale]/(with%20nav%20and%20footer)/(Home-Page)/_components/homepage-video.tsx) | Replace JS `useIsMobile()` hook with HTML5 native `<source media="...">` and `preload="metadata"` | Eliminates CLS layout shift & instant video start |
| 4 | [ImageWithFallback.tsx](file:///d:/VIACAM-PRODUCTIONS/synergy-new-v3/components/global/ImageWithFallback.tsx) | Add proper fallback loading strategy & optimize state update logic | Prevents unnecessary component re-renders |
| 5 | Global Pages | Ensure key hero images use `priority={true}` and lower images use `loading="lazy"` | Improves LCP & overall page score |

---

## 4. Immediate Code Updates Applied

The optimizations outlined above are being systematically implemented across the codebase to maximize site performance while retaining full functionality and visual design.
