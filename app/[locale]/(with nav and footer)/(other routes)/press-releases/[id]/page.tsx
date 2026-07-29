import { pressReleases } from '@/data';
import { PressRelease } from '@/types';
import { notFound } from 'next/navigation';

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
   const awaitedParams = await params
  const release = pressReleases.find((r: PressRelease) => r.id === awaitedParams.id);

  if (!release) return notFound();

  return (
    <div className="container mx-auto py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-sm text-gray-500">
            {new Date(release.date).toLocaleDateString()}
          </span>
          <h1 className="text-3xl font-bold mt-2">{release.title}</h1>
          <p className="text-lg mt-4">{release.summary}</p>
        </header>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: release.content }} />

        {release.videoPreview && (
          <div className="mt-8 aspect-video">
            <iframe
              src={release.videoPreview}
              className="w-full h-full"
              title="Patient Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {release.downloads && release.downloads?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Downloads</h3>
            <div className="flex flex-wrap gap-4">
              {release.downloads.map((download) => (
                <a
                  key={download.name}
                  href={download.url}
                  download
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  {download.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

// Correct generateStaticParams implementation
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return pressReleases.map((release) => ({
    id: release.id,
  }));
}
