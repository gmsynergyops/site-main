import { CONTACT_INFO, SOCIAL_LINKS, ContactLocation as Location, SocialLink } from "@/data/contactData";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FaWhatsapp } from "react-icons/fa6";
import { MdLocationOn, MdOutlineAlternateEmail, MdPhone } from "react-icons/md";

const HOSPITAL_NAME = CONTACT_INFO.hospitalName;
const email = CONTACT_INFO.email;
const phone1 = CONTACT_INFO.phoneNumbers.primary;
const phone2 = CONTACT_INFO.phoneNumbers.secondary;
const phone3 = CONTACT_INFO.phoneNumbers.admissionDesk;
const whatsappUrl = CONTACT_INFO.whatsapp.url;
const locations: Location[] = CONTACT_INFO.locations;
const socialLinks: SocialLink[] = SOCIAL_LINKS;

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ContactPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

/** Signature element: a quiet EKG pulse line used as a section divider — a hospital's own visual vocabulary, not a generic rule. */
const PulseDivider = () => (
  <div className="w-full flex justify-center py-2" aria-hidden="true">
    <svg
      width="100%"
      height="28"
      viewBox="0 0 800 28"
      preserveAspectRatio="none"
      className="max-w-5xl px-6"
    >
      <polyline
        points="0,14 300,14 330,14 345,2 360,26 375,6 390,14 420,14 800,14"
        fill="none"
        stroke="#C9D6CE"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default async function ContactPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return (
    <main
      className="min-h-screen bg-[#F6F8F6]"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Hero */}
      <section className="border-b border-[#E2E1E8]">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-14">
          <span
            className="inline-block text-xs tracking-[0.18em] uppercase text-synergy-blue/70 mb-5"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {t("hero.tag")}
          </span>

          <h1
            className="text-4xl sm:text-5xl leading-[1.1] text-synergy-blue mb-5 max-w-3xl"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
          >
            {t("hero.title")}
          </h1>

          <p className="text-synergy-blue/80 text-base sm:text-lg max-w-2xl mb-8">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phone1}`}
              className="inline-flex items-center gap-2 rounded-full bg-synergy-blue px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <MdPhone size={16} />
              {t("hero.callHospital")}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25d366] px-5 py-3 text-sm font-medium text-[#25d366] transition hover:bg-synergy-pink/10"
            >
              <FaWhatsapp size={16} />
              {t("hero.whatsapp")}
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E1E8] px-5 py-3 text-sm font-medium text-synergy-blue transition hover:border-synergy-blue"
            >
              <MdOutlineAlternateEmail size={16} />
              {t("hero.emailUs")}
            </a>
          </div>
        </div>
      </section>

      <PulseDivider />

      {/* Quick Contact */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2
          className="text-2xl sm:text-3xl text-synergy-blue mb-8"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
          }}
        >
          {t("quickContact.title")}
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: MdPhone,
              title: t("quickContact.reception"),
              values: [phone3],
              hrefs: [`tel:${phone3}`],
            },
            {
              icon: MdPhone,
              title: t("quickContact.appointments"),
              values: [phone1, phone2],
              hrefs: [`tel:${phone1}`, `tel:${phone2}`],
            },
            {
              icon: MdOutlineAlternateEmail,
              title: t("quickContact.email"),
              values: [email],
              hrefs: [`mailto:${email}`],
            },
          ].map(({ icon: Icon, title, values, hrefs }, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={title}
                className={`rounded-2xl bg-white border border-[#E2E1E8] border-l-4 flex flex-col gap-4 p-5 transition hover:shadow-md ${
                  isOdd ? "border-l-synergy-blue" : "border-l-synergy-pink"
                }`}
              >
                <div className="flex gap-4">
                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                      isOdd ? "bg-synergy-blue/15" : "bg-synergy-pink/15"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={
                        isOdd ? "text-synergy-blue" : "text-synergy-pink"
                      }
                    />
                  </span>

                  <div>
                    <p
                      className={`text-xs uppercase tracking-wide mb-1 ${
                        isOdd ? "text-synergy-blue/70" : "text-synergy-pink/70"
                      }`}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {title}
                    </p>

                    {values.length > 1 ? (
                      <div className="space-y-2">
                        {values.map((value, valueIndex) => (
                          <a
                            key={value}
                            href={hrefs[valueIndex]}
                            className={`block font-semibold break-all ${
                              isOdd ? "text-synergy-blue" : "text-synergy-pink"
                            } hover:underline`}
                          >
                            {value}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={hrefs[0]}
                        className={`font-semibold break-all ${
                          isOdd ? "text-synergy-blue" : "text-synergy-pink"
                        } hover:underline`}
                      >
                        {values[0]}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2
          className="text-2xl sm:text-3xl text-synergy-blue mb-3"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
          }}
        >
          {t("locations.title")}
        </h2>

        <p className="text-synergy-blue/80 max-w-2xl mb-8">
          {t("locations.subtitle")}
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {locations.map((loc, index) => {
            const isOdd = index % 2 !== 0;
            const locTag = t.has(`locations.items.${loc.id}.tag`)
              ? t(`locations.items.${loc.id}.tag`)
              : loc.tag;
            const locLabel = t.has(`locations.items.${loc.id}.label`)
              ? t(`locations.items.${loc.id}.label`)
              : loc.label;
            const locAddress = t.has(`locations.items.${loc.id}.address`)
              ? t(`locations.items.${loc.id}.address`)
              : loc.address;

            return (
              <div
                key={loc.label}
                className={`rounded-3xl overflow-hidden bg-white border border-[#E2E1E8] border-l-4 shadow-sm hover:shadow-lg transition-all ${
                  isOdd ? "border-l-synergy-blue" : "border-l-synergy-pink"
                }`}
              >
                {/* Top */}

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                        isOdd ? "bg-synergy-blue/15" : "bg-synergy-pink/15"
                      }`}
                    >
                      <MdLocationOn
                        size={22}
                        className={
                          isOdd ? "text-synergy-blue" : "text-synergy-pink"
                        }
                      />
                    </span>

                    <div>
                      <p
                        className={`text-xs uppercase tracking-[0.18em] mb-2 ${
                          isOdd
                            ? "text-synergy-blue/70"
                            : "text-synergy-pink/70"
                        }`}
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {locTag}
                      </p>

                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          isOdd ? "text-synergy-blue" : "text-synergy-pink"
                        }`}
                        style={{
                          fontFamily: "'Fraunces', serif",
                        }}
                      >
                        {locLabel}
                      </h3>

                      <p className="text-sm text-synergy-blue/80 leading-relaxed">
                        {locAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}

                <div className="h-64 border-y border-[#E2E1E8]">
                  <iframe
                    src={loc.mapURL}
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    title={loc.label}
                  />
                </div>

                {/* CTA */}

                <div className="p-5 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      isOdd ? "text-synergy-blue" : "text-synergy-pink"
                    }`}
                  >
                    {t("locations.openInMaps")}
                  </span>

                  <a
                    href={loc.mapURL}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                      isOdd
                        ? "bg-synergy-blue text-white hover:opacity-90"
                        : "bg-synergy-pink text-white hover:opacity-90"
                    }`}
                  >
                    {t("locations.getDirections")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PulseDivider />

      {/* Social */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl text-synergy-blue mb-3"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
          }}
        >
          {t("social.title")}
        </h2>

        <p className="text-synergy-blue/80 max-w-2xl mb-8">
          {t("social.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {socialLinks.map(({ name, url, icon: Icon, description, color }, index) => {
            const isOdd = index % 2 !== 0;
            const socialName = t.has(`social.items.${name}.name`)
              ? t(`social.items.${name}.name`)
              : name;
            const socialDesc = t.has(`social.items.${name}.description`)
              ? t(`social.items.${name}.description`)
              : description;

            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-2xl bg-white border border-[#E2E1E8] border-l-4 flex gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isOdd ? "border-l-synergy-blue" : "border-l-synergy-pink"
                }`}
              >
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition`}
                  style={{
                    backgroundColor: `${color}20`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: color,
                    }}
                  />
                </span>

                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      isOdd ? "text-synergy-blue" : "text-synergy-pink"
                    }`}
                  >
                    {socialName}
                  </h3>

                  <p className="text-sm text-synergy-blue/80 leading-relaxed">
                    {socialDesc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl bg-linear-to-r from-synergy-blue to-synergy-pink p-px">
          <div className="rounded-3xl bg-white px-8 py-10 text-center">
            <p
              className="uppercase tracking-[0.2em] text-xs text-synergy-blue/70 mb-4"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {t("cta.tag")}
            </p>

            <h3
              className="text-3xl text-synergy-blue mb-4"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
              }}
            >
              {t("cta.title")}
            </h3>

            <p className="text-synergy-blue/80 max-w-xl mx-auto mb-8">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${phone1}`}
                className="px-6 py-3 rounded-full bg-synergy-blue text-white font-medium hover:opacity-90 transition"
              >
                {t("cta.callHospital")}
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-synergy-pink text-synergy-pink font-medium hover:bg-synergy-pink/10 transition"
              >
                {t("cta.whatsappUs")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-[#E2E1E8] py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4
              className="text-lg text-synergy-blue font-semibold"
              style={{
                fontFamily: "'Fraunces', serif",
              }}
            >
              {t.has("footer.hospitalName") ? t("footer.hospitalName") : HOSPITAL_NAME}
            </h4>

            <p className="text-sm text-synergy-blue/70">
              {t("footer.location")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone1}`}
              className="text-sm text-synergy-blue hover:text-synergy-pink transition"
            >
              {phone1}
            </a>

            <span className="text-synergy-blue/30">•</span>

            <a
              href={`mailto:${email}`}
              className="text-sm text-synergy-blue hover:text-synergy-pink transition"
            >
              {email}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
