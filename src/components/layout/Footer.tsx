import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import {
  footerCompanyLinks,
  footerServiceLinks,
  ctaLabel,
} from "@/lib/data/nav";
import { brandConfig } from "@/lib/data/brand";
import { locations } from "@/lib/data/locations";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="pt-20 pb-10">
        {/* Statement row */}
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo tone="light" />
            <p className="display-md mt-8 max-w-lg text-ivory/95">
              {brandConfig.tagline}
            </p>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ivory/55">
              {brandConfig.legalName} designs and builds custom homes,
              renovations and extensions across {brandConfig.region} — guided
              by Early Builder Involvement and finished to last.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contactus" variant="outline-light">
                {ctaLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
            <div>
              <p className="eyebrow-label-muted mb-6">Explore</p>
              <ul className="space-y-3">
                {footerCompanyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="line-link text-sm text-ivory/75 hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow-label-muted mb-6">Services</p>
              <ul className="space-y-3">
                {footerServiceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="line-link text-sm text-ivory/75 hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow-label-muted mb-6">Locations</p>
              <ul className="space-y-3">
                {locations.slice(0, 8).map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/${l.slug}`}
                      className="line-link text-sm text-ivory/75 hover:text-ivory"
                    >
                      {l.area}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="line-link text-sm font-semibold text-bronze"
                  >
                    View all →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line-dark pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            <Link
              href={brandConfig.phoneHref}
              className="font-display text-lg text-ivory hover:text-bronze"
            >
              {brandConfig.phone}
            </Link>
            <Link
              href={brandConfig.emailHref}
              className="font-display text-lg text-ivory hover:text-bronze"
            >
              {brandConfig.email}
            </Link>
            <span className="text-sm text-ivory/50">
              {brandConfig.addressLine1} · {brandConfig.addressLine2}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href={brandConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="line-link font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 hover:text-ivory"
            >
              Instagram
            </Link>
            <Link
              href={brandConfig.facebook}
              target="_blank"
              rel="noreferrer"
              className="line-link font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 hover:text-ivory"
            >
              Facebook
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line-dark pt-8 text-[0.78rem] text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brandConfig.legalName}. Build Better.
          </p>
          <p>
            Registered builder · Inverloch, Victoria · Serving{" "}
            {brandConfig.region}
          </p>
        </div>
      </Container>
    </footer>
  );
}