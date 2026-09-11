# Mobile Banner Implementation Guide

## Overview
All service pages (`/services/*`), institute pages, and survivor pages now support separate mobile and desktop banner images with a **fixed 5:3 aspect ratio** for consistent display across all devices.

## What Changed

### 1. Component Updates
- **SingleServicePage.tsx**: Services/department pages now use fixed aspect ratio banners
- **InstitutePage.tsx**: Institute pages use fixed aspect ratio banners
- **SurvivorPage.tsx**: Survivor pages use fixed aspect ratio banners
- **SupportServicePage.tsx**: Already using fixed aspect ratio (unchanged)

### 2. Type Definitions
Added optional `bannerImageMobile?: string` field to:
- `DepartmentData` (types/index.ts)
- `InstituteData` (data/instituteData.ts)
- `SurvivorData` (data/survivorsData.ts)

### 3. How It Works
- **All banners** now use a fixed **5:3 aspect ratio** (`aspect-5:3`)
- **Desktop (md and up)**: Shows `bannerImage` 
- **Mobile (below md)**: Shows `bannerImageMobile` if provided, otherwise falls back to `bannerImage`
- All images use `width={1200} height={500}` with `object-cover w-full h-auto`
- **Consistent appearance** across all devices and all page types

## Benefits

1. ✅ **Consistent aspect ratio** - All banners maintain 5:3 ratio across devices
2. ✅ **No cropping issues** - Predictable image display, no unexpected crops
3. ✅ **Unified design system** - All pages (services, institute, survivors, support) match
4. ✅ **Better performance** - Next.js can optimize images with explicit dimensions
5. ✅ **Simpler code** - No conditional object-fit logic needed

## Adding Mobile Banner Images

### Step 1: Prepare Your Images
- **Desktop banner**: Wide aspect ratio (e.g., 1920x600, 16:9, or similar)
- **Mobile banner**: Portrait or square aspect ratio (e.g., 800x1000, 4:5, or 1:1)

### Step 2: Add Images to Public Folder
Place your mobile images in `/public/department/` (or appropriate subfolder):
```
/public/department/
  ├── medical-oncology-banner.jpeg          (desktop)
  ├── medical-oncology-banner-mobile.jpeg   (mobile)
  ├── surgical-oncology-banner.jpeg         (desktop)
  └── surgical-oncology-banner-mobile.jpeg  (mobile)
```

### Step 3: Update Data Files

#### For Department/Service Pages
Edit `data/departmentData.ts`:

```typescript
{
  id: "medical-oncology",
  name: "Medical Oncology",
  slug: "medical-oncology",
  heroImage: "/department/medical-oncology.jpeg",
  bannerImage: "/department/medical-oncology-banner.jpeg",
  bannerImageMobile: "/department/medical-oncology-banner-mobile.jpeg", // Add this line
  heroTitle: "Advanced Medical Oncology",
  // ... rest of the data
}
```

#### For Institute Pages
Edit `data/instituteData.ts`:

```typescript
{
  slug: "cancer-care",
  name: "Cancer Care Institute",
  heroTitle: "Comprehensive Cancer Care",
  heroSubtitle: "Excellence in Oncology",
  bannerImage: "/institute/cancer-care-banner.jpeg",
  bannerImageMobile: "/institute/cancer-care-banner-mobile.jpeg", // Add this line
  // ... rest of the data
}
```

#### For Survivor Pages
Edit `data/survivorsData.ts`:

```typescript
const SURVIVORS_METADATA: Record<string, { bannerImage: string; bannerImageMobile?: string; themeBgClass?: string }> = {
  "survivor-story-1": {
    bannerImage: "/survivors/story-1-banner.jpeg",
    bannerImageMobile: "/survivors/story-1-banner-mobile.jpeg", // Add this line
    themeBgClass: "bg-linear-to-br from-blue-50 via-white to-sky-50"
  }
}
```

## Image Guidelines

### Desktop Banners
- **Aspect Ratio**: 16:9 or wider (e.g., 3:1)
- **Resolution**: 1920px width minimum
- **Content**: Can be landscape/wide compositions
- **Object Fit**: Uses `object-cover` or `object-contain` based on page configuration

### Mobile Banners
- **Aspect Ratio**: 4:5, 1:1, or portrait (e.g., 3:4)
- **Resolution**: 800px width minimum
- **Content**: Should focus on vertical/centered compositions
- **Object Fit**: Always uses `object-cover` for consistency

### Design Tips
1. **Mobile images should be square or portrait** to work well on phone screens
2. **Keep important content centered** in mobile banners (will be cropped to fit)
3. **Avoid placing text on extreme edges** of mobile banners
4. **Test on actual devices** to ensure banners look good

## Fallback Behavior
If `bannerImageMobile` is not provided:
- Mobile devices will display the desktop `bannerImage`
- May result in poor cropping on narrow screens
- Always provide a mobile version for pages with fixed-aspect desktop banners

## Example: Before and After

### Before (single image for all devices)
```typescript
bannerImage: "/department/surgical-oncology-banner.jpeg"
// Mobile shows same image, potentially cropped awkwardly
```

### After (responsive images)
```typescript
bannerImage: "/department/surgical-oncology-banner.jpeg"          // 1920x600, wide landscape
bannerImageMobile: "/department/surgical-oncology-banner-mobile.jpeg"  // 800x1000, portrait
// Mobile shows properly composed portrait image
```

## Testing
1. Open a service page in desktop browser
2. Open DevTools and toggle device toolbar (mobile view)
3. Verify different images load for mobile vs desktop
4. Check that both images render without distortion

## Notes
- The `bannerImageMobile` field is **optional** — pages work without it
- If not provided, desktop banner is used on all devices
- All three page types (services, institute, survivors) support this feature
- Changes are backward compatible with existing data
