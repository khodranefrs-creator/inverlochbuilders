"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { navigation, ctaLabel } from "@/lib/data/nav";
import { brandConfig } from "@/lib/data/brand";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled && !menuOpen;
  const tone = transparent ? "light" : "dark";

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line bg-ivory/92 backdrop-blur-sm"
        )}
        style={transparent ? undefined : { boxShadow: "0 1px 0 0 var(--color-line)" }}
      >
        <div
          className={cn(
            "container-site flex items-center justify-between transition-all duration-500",
            scrolled ? "py-3.5" : "py-5"
          )}
        >
          <Logo tone={tone} />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              if (item.cta) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-2 border px-6 py-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
                      tone === "light"
                        ? "border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
                        : "border-ink text-ink hover:bg-ink hover:text-ivory"
                    )}
                  >
                    {ctaLabel}
                  </Link>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "line-link pb-0.5 font-sans text-[0.74rem] font-medium uppercase tracking-[0.18em] transition-colors",
                    tone === "light"
                      ? "text-ivory/85 hover:text-ivory"
                      : "text-ash hover:text-ink",
                    pathname === item.href && (tone === "light" ? "text-ivory" : "text-ink")
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "relative z-[60] flex h-11 w-11 items-center justify-center lg:hidden",
              tone === "light" ? "text-ivory" : "text-ink"
            )}
          >
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-all duration-300",
                  menuOpen && "top-1/2 -translate-y-1/2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-all duration-300",
                  menuOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ivory transition-[opacity,visibility] duration-400 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="container-site flex h-full flex-col justify-between pb-10 pt-28">
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                className={cn(
                  "display-sm border-b border-line py-4 font-display tracking-tight transition-transform duration-300",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
                style={{ transitionDelay: menuOpen ? `${90 + i * 45}ms` : "0ms" }}
              >
                {item.cta ? ctaLabel : item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-6">
            <Link
              href={brandConfig.emailHref}
              className="font-sans text-sm text-ash"
            >
              {brandConfig.email}
            </Link>
            <Link href={brandConfig.phoneHref} className="display-sm text-ink">
              {brandConfig.phone}
            </Link>
            <p className="eyebrow-label-muted">{brandConfig.addressLine2}</p>
          </div>
        </div>
      </div>
    </>
  );
}