"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Content } from "@/content/types";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/ui/icons";
import { languageStorageKey, themeStorageKey } from "@/lib/preferences";

type Theme = "light" | "dark" | "system";

const themes: readonly Theme[] = ["light", "dark", "system"];
const themeIcons = { light: SunIcon, dark: MoonIcon, system: MonitorIcon } as const;
const themeEvent = "portfolio-theme-change";

function subscribeTheme(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  return () => window.removeEventListener(themeEvent, callback);
}

function getThemeSnapshot(): Theme {
  const preference = document.documentElement.dataset.themePreference;
  return preference === "light" || preference === "dark" ? preference : "system";
}

function getServerThemeSnapshot(): Theme {
  return "system";
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = theme;
}

function storePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode, blocked site data); the choice still applies to this page.
  }
}

export function Header({ content }: { readonly content: Content }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const alternateLanguage = content.languageCode === "pt" ? "en" : "pt";

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (document.documentElement.dataset.themePreference === "system") applyTheme("system");
    };
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen]);

  const changeTheme = useCallback((next: Theme) => {
    storePreference(themeStorageKey, next);
    applyTheme(next);
    window.dispatchEvent(new Event(themeEvent));
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const links = [
    ["#about", content.nav.about],
    ["#skills", content.nav.skills],
    ["#projects", content.nav.projects],
    ["#certifications", content.nav.certifications],
    ["#contact", content.nav.contact],
  ] as const;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={content.a11y.home}>
          <span className="brand-mark" aria-hidden="true">IB</span>
          <span>Ian Barbosa Santos</span>
        </a>

        <nav className="desktop-nav" aria-label={content.a11y.primaryNav}>
          {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <a
            className="language-button"
            href={content.alternatePath}
            hrefLang={alternateLanguage === "en" ? "en" : "pt-BR"}
            lang={alternateLanguage === "en" ? "en" : "pt-BR"}
            aria-label={content.switchLanguage}
            onClick={() => storePreference(languageStorageKey, alternateLanguage)}
          >
            {alternateLanguage.toUpperCase()}
          </a>
          <div className="theme-picker" role="group" aria-label={content.theme.label}>
            {themes.map((item) => {
              const Icon = themeIcons[item];
              return (
                <button
                  key={item}
                  type="button"
                  className={theme === item ? "is-active" : undefined}
                  onClick={() => changeTheme(item)}
                  aria-label={content.theme[item]}
                  aria-pressed={theme === item}
                  title={content.theme[item]}
                >
                  <Icon />
                </button>
              );
            })}
          </div>
          <div className="mobile-nav" ref={menuRef}>
            <button
              ref={menuButtonRef}
              className="mobile-menu-button"
              type="button"
              aria-label={content.nav.menu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span /><span /><span />
            </button>
            {isMenuOpen && (
              <nav id="mobile-navigation" aria-label={content.a11y.mobileNav}>
                {links.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
