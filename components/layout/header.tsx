"use client";

import { useState } from "react";
import type { Content } from "@/content/types";
import { MonitorIcon, MoonIcon, SunIcon } from "@/components/ui/icons";

type Theme = "light" | "dark" | "system";

type HeaderProps = {
  readonly content: Content;
  readonly onLanguageToggle: () => void;
  readonly theme: Theme;
  readonly onThemeChange: (theme: Theme) => void;
};

const themes: readonly Theme[] = ["light", "dark", "system"];

export function Header({ content, onLanguageToggle, theme, onThemeChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = { light: SunIcon, dark: MoonIcon, system: MonitorIcon } as const;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Ian Barbosa Santos — início">
          <span className="brand-mark" aria-hidden="true">IB</span>
          <span>Ian Barbosa Santos</span>
        </a>

        <nav className="desktop-nav" aria-label="Principal">
          <a href="#about">{content.nav.about}</a>
          <a href="#skills">{content.nav.skills}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#certifications">{content.nav.certifications}</a>
          <a href="#contact">{content.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <button className="language-button" type="button" onClick={onLanguageToggle} aria-label={content.switchLanguage}>
            {content.languageCode === "pt" ? "EN" : "PT"}
          </button>
          <div className="theme-picker" role="group" aria-label={content.theme.label}>
            {themes.map((item) => {
              const Icon = icons[item];
              return (
                <button
                  key={item}
                  type="button"
                  className={theme === item ? "is-active" : undefined}
                  onClick={() => onThemeChange(item)}
                  aria-label={content.theme[item]}
                  aria-pressed={theme === item}
                  title={content.theme[item]}
                >
                  <Icon />
                </button>
              );
            })}
          </div>
          <div className="mobile-nav">
            <button
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
              <nav id="mobile-navigation" aria-label="Mobile">
                <a href="#about" onClick={closeMenu}>{content.nav.about}</a>
                <a href="#skills" onClick={closeMenu}>{content.nav.skills}</a>
                <a href="#projects" onClick={closeMenu}>{content.nav.projects}</a>
                <a href="#certifications" onClick={closeMenu}>{content.nav.certifications}</a>
                <a href="#contact" onClick={closeMenu}>{content.nav.contact}</a>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
