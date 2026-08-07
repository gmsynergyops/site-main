/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiFillYoutube } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { MdLocationOn, MdOutlineAlternateEmail, MdPhone } from "react-icons/md";

/**
 * Fonts (add once, e.g. in app/layout.tsx or a global <link>):
 * Fraunces (display, weights 500/600) — carries the warmth/gravitas
 * Inter (body, weights 400/500/600) — clinical clarity, high legibility
 * IBM Plex Mono (labels/data, weight 500) — phone numbers, eyebrows
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
 */

const HOSPITAL_NAME = "Synergy Superspeciality Hospital & Cancer Institute";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  description: string;
  color: string;
}

interface Location {
  label: string;
  tag: string;
  address: string;
  mapURL: string;
  accent: string;
  bg: string;
  text: string;
  border: string;
}

const email = "synergycancer1@gmail.com";
const phone1 = "+917234006595";
const phone2 = "+917234006597";
const whatsappUrl = "https://wa.me/917234006595";

const locations: Location[] = [
  {
    label: "Synergy Superspeciality Hospital & Cancer Institute",
    tag: "OPD · IPD · Surgery",
    address: "Chhatrasangh Chauraha, Gorakhpur, 273001",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.804128672125!2d83.37676587624873!3d26.745450367257032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b0d013cef1%3A0xc7d8e7bab401f8fe!2sSynergy%20Superspeciality%20Hospital%20and%20Cancer%20Institute!5e1!3m2!1sen!2sin!4v1785839951905!5m2!1sen!2sin",
    accent: "synergy-blue",
    bg: "bg-synergy-blue/15",
    text: "text-synergy-blue",
    border: "border-l-synergy-blue",
  },
  {
    label: "Synergy Cancer Care - Radiation Center & Day Care",
    tag: "GNFT Tower · 1st Floor",
    address: "Khajanchi Chauraha, Gorakhpur, 273001",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604.753588999132!2d83.38487609678955!3d26.796013099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145006280f7e9%3A0xae494a8b47b69ad3!2sSynergy%20Cancer%20Care!5e1!3m2!1sen!2sin!4v1785840069439!5m2!1sen!2sin",
    accent: "synergy-pink",
    bg: "bg-synergy-pink/15",
    text: "text-synergy-pink",
    border: "border-l-synergy-pink",
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/synergycancergkp/",
    icon: FaInstagram,
    description: "Behind the scenes, projects & creative inspiration.",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@SynergyCancerHospital",
    icon: AiFillYoutube,
    description: "Case studies, tutorials & creative showcases.",
    color: "#FF0000",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/synergysuperspecialityhospital",
    icon: FaFacebookSquare,
    description: "Follow our community and latest announcements.",
    color: "#1877F2",
  },
  {
    name: "WhatsApp",
    url: whatsappUrl,
    icon: FaWhatsapp,
    description: "Chat with our team for a quick consultation.",
    color: "#25D366",
  },
  {
    name: "Email",
    url: `mailto:${email}`,
    icon: MdOutlineAlternateEmail,
    description: "Reach us for business enquiries and collaborations.",
    color: "#777777",
  },
];

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

const ContactPage = () => {
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
            Contact Us
          </span>

          <h1
            className="text-4xl sm:text-5xl leading-[1.1] text-synergy-blue mb-5 max-w-3xl"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
            }}
          >
            We&apos;re here whenever you need us.
          </h1>

          <p className="text-synergy-blue/80 text-base sm:text-lg max-w-2xl mb-8">
            Reach out for appointments, enquiries, emergency assistance or
            directions to any of our centres in Gorakhpur.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phone1}`}
              className="inline-flex items-center gap-2 rounded-full bg-synergy-blue px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <MdPhone size={16} />
              Call Hospital
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#25d366] px-5 py-3 text-sm font-medium text-[#25d366] transition hover:bg-synergy-pink/10"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E1E8] px-5 py-3 text-sm font-medium text-synergy-blue transition hover:border-synergy-blue"
            >
              <MdOutlineAlternateEmail size={16} />
              Email Us
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
          Contact Information
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: MdPhone,
              title: "Reception",
              values: [phone1],
              hrefs: [`tel:${phone1}`],
            },
            {
              icon: MdPhone,
              title: "Appointments",
              values: [phone1, phone2],
              hrefs: [`tel:${phone1}`, `tel:${phone2}`],
            },
            {
              icon: MdOutlineAlternateEmail,
              title: "Email",
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
          Visit Our Centres
        </h2>

        <p className="text-synergy-blue/80 max-w-2xl mb-8">
          Whether you&apos;re visiting our main hospital or radiation centre,
          you&apos;ll receive the same compassionate care and expert guidance.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {locations.map((loc, index) => {
            const isOdd = index % 2 !== 0;

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
                        {loc.tag}
                      </p>

                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          isOdd ? "text-synergy-blue" : "text-synergy-pink"
                        }`}
                        style={{
                          fontFamily: "'Fraunces', serif",
                        }}
                      >
                        {loc.label}
                      </h3>

                      <p className="text-sm text-synergy-blue/80 leading-relaxed">
                        {loc.address}
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
                    Open in Google Maps
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
                    Get Directions →
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
          Stay Connected
        </h2>

        <p className="text-synergy-blue/80 max-w-2xl mb-8">
          Follow our latest updates, patient stories and health awareness
          initiatives, or reach out directly through your preferred platform.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {socialLinks.map(({ name, url, icon: Icon, description, color }, index) => {
            const isOdd = index % 2 !== 0;

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
                      backgroundColor: `${color}20`
                    }}
                >
                  <Icon
                    size={20}
                    style={{
                      color: color
                    }}
                  />
                </span>

                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      isOdd ? "text-synergy-blue" : "text-synergy-pink"
                    }`}
                  >
                    {name}
                  </h3>

                  <p className="text-sm text-synergy-blue/80 leading-relaxed">
                    {description}
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
              Need Immediate Assistance?
            </p>

            <h3
              className="text-3xl text-synergy-blue mb-4"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
              }}
            >
              We&apos;re only a phone call away.
            </h3>

            <p className="text-synergy-blue/80 max-w-xl mx-auto mb-8">
              Whether it&apos;s booking an appointment, asking a question or finding
              the right specialist, our team is ready to help.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${phone1}`}
                className="px-6 py-3 rounded-full bg-synergy-blue text-white font-medium hover:opacity-90 transition"
              >
                Call Hospital
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-synergy-pink text-synergy-pink font-medium hover:bg-synergy-pink/10 transition"
              >
                WhatsApp Us
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
              {HOSPITAL_NAME}
            </h4>

            <p className="text-sm text-synergy-blue/70">
              Gorakhpur, Uttar Pradesh · 273001
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
};

export default ContactPage;
