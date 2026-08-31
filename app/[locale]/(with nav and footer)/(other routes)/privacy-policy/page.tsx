import React from 'react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { CONTACT_INFO } from '@/data/contactData';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PrivacyPolicy(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });
  const renderEmailLink = (chunks: React.ReactNode) => (
    <a
      href={`mailto:${CONTACT_INFO.email}`}
      className="text-synergy-blue hover:underline font-medium"
    >
      {chunks}
    </a>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-gray-800 font-sans">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-synergy-blue mb-3">
        {t('title')}
      </h1>
      <p className="text-sm text-gray-500 mb-8 border-b border-gray-200 pb-4">
        <strong className="text-gray-700">{t('publishedOn')}</strong> {t('publishedDate')}
      </p>

      <section className="space-y-4 text-base leading-relaxed text-gray-700 mb-10">
        <p>{t('introP1', { hospitalName: CONTACT_INFO.hospitalName })}</p>
        <p>{t('introP2')}</p>
      </section>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.access.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.rich('sections.access.p1', {
              email: CONTACT_INFO.email,
              emailLink: renderEmailLink,
            })}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.consent.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.consent.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.control.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.rich('sections.control.p1', {
              email: CONTACT_INFO.email,
              emailLink: renderEmailLink,
            })}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.changes.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.changes.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.collected.title')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            {(t.raw('sections.collected.items') as string[]).map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.howWeCollect.title')}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            {(t.raw('sections.howWeCollect.items') as string[]).map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.use.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.use.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.sharing.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.sharing.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.cookies.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.cookies.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.security.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.security.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.thirdParty.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.thirdParty.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.rectification.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.rich('sections.rectification.p1', {
              email: CONTACT_INFO.email,
              emailLink: renderEmailLink,
            })}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.compliance.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.compliance.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.storage.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t('sections.storage.p1')}
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
            {t('sections.grievance.title')}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.rich('sections.grievance.p1', {
              email: CONTACT_INFO.email,
              emailLink: renderEmailLink,
            })}
          </p>
        </section>
      </div>
    </div>
  );
}
