import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getLocalizedPressReleaseById,
  getLocalizedPressReleases,
  PressReleaseItem,
  pressReleasesDataEn,
} from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { Link } from "@/i18n/navigation";
import {
  Calendar,
  MapPin,
  Building2,
  ArrowLeft,
  Share2,
  FileText,
  CheckCircle2,
  Tag,
  ArrowRight,
} from "lucide-react";
import ShareButton from "@/components/global/ShareButton";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const release = getLocalizedPressReleaseById(awaitedParams.id, awaitedParams.locale || "en");

  if (!release) {
    return {
      title: "Press Release Not Found - Synergy Hospital",
    };
  }

  return {
    title: `${release.title} | Synergy Super Speciality Hospital`,
    description: release.summary,
    openGraph: {
      title: release.title,
      description: release.summary,
      images: [{ url: release.image }],
    },
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return pressReleasesDataEn.map((release) => ({
    id: release.id,
  }));
}

export default async function PressReleaseDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const locale = awaitedParams.locale || "en";
  const release = getLocalizedPressReleaseById(awaitedParams.id, locale);

  if (!release) return notFound();

  const t = await getTranslations({ locale, namespace: "mediaCenter.PressReleases" });

  const typeColorMap: Record<
    PressReleaseItem["type"],
    { bg: string; text: string; border: string; label: string }
  > = {
    innovation: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      label: t("filterButtons.Innovation"),
    },
    award: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      label: t("filterButtons.Awards"),
    },
    research: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      label: t("filterButtons.Research"),
    },
    partnership: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      label: t("filterButtons.Partnership"),
    },
    community: {
      bg: "bg-pink-50",
      text: "text-pink-700",
      border: "border-pink-200",
      label: t("filterButtons.Community"),
    },
  };

  const badge = typeColorMap[release.type] || typeColorMap.innovation;
  const allReleases = getLocalizedPressReleases(locale);
  const otherReleases = allReleases
    .filter((r) => r.id !== release.id)
    .slice(0, 3);

  return (
    <main className="bg-accent/30 min-h-screen py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex items-center justify-between">
          <Link
            href="/media-center#press-releases"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-synergy-blue hover:text-synergy-pink transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t("backToMediaCenter")}</span>
          </Link>

          <span className="text-xs text-gray-500 hidden sm:inline">
            {t("officialPressRelease")}
          </span>
        </div>

        {/* Hero Article Card */}
        <article className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden space-y-8">
          {/* Banner with Responsive Aspect Ratio */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 overflow-hidden">
            <ImageWithFallback
              src={release.image}
              fallbackSrc="/fallback-image.webp"
              alt={release.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Banner Overlay Meta */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-3">
              <span
                className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} border ${badge.border} shadow-sm backdrop-blur-md`}
              >
                {badge.label}
              </span>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                {release.title}
              </h1>
            </div>
          </div>

          {/* Article Body */}
          <div className="px-5 sm:px-10 pb-10 space-y-8">
            {/* Metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 text-xs sm:text-sm text-gray-500">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-synergy-blue" />
                  <span className="font-medium text-gray-700">
                    {new Date(release.date).toLocaleDateString(
                      locale === "hi" ? "hi-IN" : "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-4 text-synergy-pink" />
                  <span>{release.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="size-4 text-gray-400" />
                  <span>{release.author}</span>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center gap-2">
                <ShareButton
                  shareText={`${release.title} - Synergy Super Speciality Hospital`}
                  shareUrl={`https://synergy-website-alpha.vercel.app/press-releases/${release.id}`}
                  className="text-xs px-3.5 py-1.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Share2 className="size-3.5" />
                  <span>{t("share")}</span>
                </ShareButton>
              </div>
            </div>

            {/* Key Highlights */}
            {release.keyHighlights && release.keyHighlights.length > 0 && (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border border-blue-100 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-synergy-blue font-bold text-sm sm:text-base">
                  <FileText className="size-5" />
                  <span>{t("executiveSummary")}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                  {release.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-synergy-blue shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Full Story Content */}
            <div className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
              {release.content}
            </div>

            {/* Tags */}
            {release.tags && release.tags.length > 0 && (
              <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Tag className="size-3.5" />
                  {t("categorizedTags")}:
                </span>
                {release.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl text-xs bg-gray-100 text-gray-600 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Other Press Releases Recommendations */}
        {otherReleases.length > 0 && (
          <div className="pt-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {t("morePressReleases")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherReleases.map((item) => (
                <Link
                  key={item.id}
                  href={`/press-releases/${item.id}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] w-full bg-gray-100 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      fallbackSrc="/fallback-image.webp"
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-[11px] text-gray-400">
                        {new Date(item.date).toLocaleDateString(
                          locale === "hi" ? "hi-IN" : "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-synergy-blue transition-colors line-clamp-2 mt-1">
                        {item.title}
                      </h4>
                    </div>
                    <div className="pt-2 text-xs font-semibold text-synergy-blue flex items-center gap-1">
                      <span>{t("readMore")}</span>
                      <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
