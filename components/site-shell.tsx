"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

type Language = "pt" | "en";
type Theme = "light" | "dark" | "system";

const languageEvent = "portfolio-language-change";
const themeEvent = "portfolio-theme-change";

function subscribeLanguage(callback: () => void) {
  window.addEventListener(languageEvent, callback);
  return () => window.removeEventListener(languageEvent, callback);
}

function getLanguageSnapshot(): Language {
  return document.documentElement.dataset.language === "en" ? "en" : "pt";
}

function getServerLanguageSnapshot(): Language {
  return "pt";
}

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

export function SiteShell() {
  const language = useSyncExternalStore(subscribeLanguage, getLanguageSnapshot, getServerLanguageSnapshot);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const content = language === "en" ? en : pt;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (document.documentElement.dataset.themePreference === "system") applyTheme("system");
    };
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const next: Language = language === "pt" ? "en" : "pt";
    localStorage.setItem("portfolio-language", next);
    document.documentElement.dataset.language = next;
    document.documentElement.lang = next === "en" ? "en" : "pt-BR";
    window.dispatchEvent(new Event(languageEvent));
  }, [language]);

  const changeTheme = useCallback((next: Theme) => {
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
    window.dispatchEvent(new Event(themeEvent));
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">{language === "pt" ? "Pular para o conteúdo" : "Skip to content"}</a>
      <Header content={content} onLanguageToggle={toggleLanguage} theme={theme} onThemeChange={changeTheme} />
      <main id="main-content">
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <Certifications content={content} />
        <Contact content={content} />
      </main>
      <footer className="site-footer">
        <div className="container"><p>© {new Date().getFullYear()} {content.footer}</p><a href="#top">↑ Top</a></div>
      </footer>
    </>
  );
}
