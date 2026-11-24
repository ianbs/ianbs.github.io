export type Content = {
  readonly languageName: string;
  readonly languageCode: "pt" | "en";
  readonly switchLanguage: string;
  readonly alternatePath: string;
  readonly meta: {
    readonly htmlLang: string;
    readonly path: string;
    readonly ogLocale: string;
    readonly alternateOgLocale: string;
    readonly title: string;
    readonly description: string;
    readonly ogImageAlt: string;
  };
  readonly a11y: {
    readonly skipLink: string;
    readonly home: string;
    readonly primaryNav: string;
    readonly mobileNav: string;
    readonly socialLinks: string;
    readonly backToTop: string;
  };
  readonly theme: {
    readonly label: string;
    readonly light: string;
    readonly dark: string;
    readonly system: string;
  };
  readonly nav: {
    readonly menu: string;
    readonly about: string;
    readonly skills: string;
    readonly projects: string;
    readonly certifications: string;
    readonly contact: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly role: string;
    readonly description: string;
    readonly primaryCta: string;
    readonly contactCta: string;
    readonly profileAlt: string;
    readonly lensLabel: string;
    readonly lens: readonly string[];
  };
  readonly about: {
    readonly eyebrow: string;
    readonly title: string;
    readonly paragraphs: readonly [string, string];
  };
  readonly skills: {
    readonly eyebrow: string;
    readonly title: string;
    readonly groups: readonly {
      readonly title: string;
      readonly items: readonly string[];
    }[];
  };
  readonly projects: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly featuredLabel: string;
    readonly engineeringLabel: string;
    readonly selectedTitle: string;
    readonly repository: string;
    readonly demo: string;
  };
  readonly certifications: {
    readonly eyebrow: string;
    readonly title: string;
    readonly item: string;
    readonly description: string;
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly email: string;
  };
  readonly footer: string;
};
