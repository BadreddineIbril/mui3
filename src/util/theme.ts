import { toKebab } from "@/util/helpers";
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  Scheme,
} from "@material/material-color-utilities";
import type { HexColor, Theme } from "@/types/context";

const SEED_COLOR: string = "#9f86ff";

const SCHEME_KEYS: (keyof Scheme)[] = [
  "background",
  "onBackground",
  "primary",
  "onPrimary",
  "primaryContainer",
  "onPrimaryContainer",
  "inversePrimary",
  "secondary",
  "onSecondary",
  "secondaryContainer",
  "onSecondaryContainer",
  "tertiary",
  "onTertiary",
  "tertiaryContainer",
  "onTertiaryContainer",
  "error",
  "onError",
  "errorContainer",
  "onErrorContainer",
  "surface",
  "onSurface",
  "surfaceVariant",
  "onSurfaceVariant",
  "inverseSurface",
  "inverseOnSurface",
  "outline",
  "outlineVariant",
];

const SURFACE_TONES: Record<string, { light: number; dark: number }> = {
  "surface-container-lowest": { light: 100, dark: 4 },
  "surface-container-low": { light: 96, dark: 10 },
  "surface-container": { light: 94, dark: 12 },
  "surface-container-high": { light: 92, dark: 17 },
  "surface-container-highest": { light: 90, dark: 22 },
};

function applyTheme(color: HexColor, theme: Theme = getTheme()): void {
  const {
    schemes: { light, dark },
    palettes: { neutral },
  } = themeFromSourceColor(argbFromHex(color));

  const variables = [
    ...SCHEME_KEYS.map(
      (k) =>
        `--color-${toKebab(k)}: light-dark(${hexFromArgb(
          light[k] as number
        ).toLocaleUpperCase()}, ${hexFromArgb(
          dark[k] as number
        ).toLocaleUpperCase()});`
    ),
    ...Object.entries(SURFACE_TONES).map(
      ([k, { light: l, dark: d }]) =>
        `--color-${k}: light-dark(${hexFromArgb(
          neutral.tone(l)
        ).toLocaleUpperCase()}, ${hexFromArgb(
          neutral.tone(d)
        ).toLocaleUpperCase()});`
    ),
  ];

  const style = getColorScheme();
  if (!style) return;

  style.textContent = `:root {\n  color-scheme: ${theme};\n \n  ${variables.join(
    "\n  "
  )};\n}`;
  localStorage.setItem("mui-primary", color);
  localStorage.setItem("mui-theme", theme);
}

function getPrimary() {
  return (localStorage.getItem("mui-primary") || SEED_COLOR) as HexColor;
}

function getTheme() {
  return (localStorage.getItem("mui-theme") || "dark") as Theme;
}

function getColorScheme() {
  let style = document.querySelector("[mui-theme]") as HTMLStyleElement | null;

  if (!style) {
    style = document.createElement("style");
    style.setAttribute("mui-theme", "");
    document.head.appendChild(style);
  }

  return style;
}

function getTokens() {
  return getColorScheme().textContent?.slice(0, -1) + TOKENS;
}

export { applyTheme, getTheme, getPrimary, getColorScheme, getTokens };

const TOKENS =
  "  --color-overlay: rgba(0, 0, 0, 0.3);\n \n  --spacing-0: 0;\n  --spacing-2: 2px;\n  --spacing-4: 4px;\n  --spacing-6: 6px;\n  --spacing-8: 8px;\n  --spacing-10: 10px;\n  --spacing-12: 12px;\n  --spacing-14: 14px;\n  --spacing-16: 16px;\n  --spacing-24: 24px;\n  --spacing-48: 48px;\n  --spacing-64: 64px;\n \n  --radius-none: 0px;\n  --radius-xs: 4px;\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 16px;\n  --radius-lg-inc: 20px;\n  --radius-xl: 28px;\n  --radius-xl-inc: 32px;\n  --radius-xxl: 48px;\n  --radius-rounded: 999px;\n  --radius-circled: 50%;\n \n  --shadow-1: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15);\n  --shadow-2: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px rgba(0, 0, 0, 0.15);\n  --shadow-3: 0px 1px 3px rgba(0, 0, 0, 0.3), 0px 4px 8px rgba(0, 0, 0, 0.15);\n  --shadow-4: 0px 2px 3px rgba(0, 0, 0, 0.3), 0px 6px 10px rgba(0, 0, 0, 0.15);\n  --shadow-5: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.15);\n \n  --font-family: Roboto, sans-serif;\n \n  --font-display-lg: 400 57px/64px var(--font-family);\n  --font-display-md: 400 45px/52px var(--font-family);\n  --font-display-sm: 400 36px/44px var(--font-family);\n \n  --font-headline-lg: 400 32px/40px var(--font-family);\n  --font-headline-md: 400 28px/36px var(--font-family);\n  --font-headline-sm: 400 24px/32px var(--font-family);\n \n  --font-title-lg: 400 22px/28px var(--font-family);\n  --font-title-md: 500 16px/24px var(--font-family);\n  --font-title-sm: 500 14px/20px var(--font-family);\n \n  --font-body-lg: 400 16px/24px var(--font-family);\n  --font-body-md: 400 14px/20px var(--font-family);\n  --font-body-sm: 400 12px/16px var(--font-family);\n \n  --font-label-lg: 400 14px/20px var(--font-family);\n  --font-label-md: 400 12px/16px var(--font-family);\n  --font-label-sm: 500 11px/16px var(--font-family);\n \n  --transition-expressive-fast-spatial: 350ms\n    cubic-bezier(0.42, 1.67, 0.21, 0.9);\n  --transition-expressive-default-spatial: 500ms\n    cubic-bezier(0.38, 1.21, 0.22, 1);\n  --transition-expressive-slow-spatial: 650ms\n    cubic-bezier(0.39, 1.29, 0.35, 0.98);\n \n  --transition-expressive-fast-effects: 150ms\n    cubic-bezier(0.31, 0.94, 0.34, 1);\n  --transition-expressive-default-effects: 200ms\n    cubic-bezier(0.34, 0.8, 0.34, 1);\n  --transition-expressive-slow-effects: 300ms\n    cubic-bezier(0.34, 0.88, 0.34, 1);\n \n  --transition-standard-fast-spatial: 350ms cubic-bezier(0.27, 1.06, 0.18, 1);\n  --transition-standard-default-spatial: 500ms\n    cubic-bezier(0.27, 1.06, 0.18, 1);\n  --transition-standard-slow-spatial: 750ms cubic-bezier(0.27, 1.06, 0.18, 1);\n \n  --transition-standard-fast-effects: 150ms cubic-bezier(0.31, 0.94, 0.34, 1);\n  --transition-standard-default-effects: 200ms\n    cubic-bezier(0.34, 0.8, 0.34, 1);\n  --transition-standard-slow-effects: 300ms cubic-bezier(0.34, 0.88, 0.34, 1);\n \n  --ripple-circle: radial-gradient(\n     circle,\n     color-mix(in srgb, currentColor 12%, transparent) 40%,\n     transparent 41%\n  );\n  --ripple-full: radial-gradient(\n     circle,\n     color-mix(in srgb, currentColor 12%, transparent) 100%,\n     transparent 41%\n  );\n}\n \n@keyframes button-ripple {\n    from {\n        background-size: 150%;\n    }\n    to {\n        background-size: 250%;\n    }\n}\n \n@keyframes input-ripple {\n    to {\n        opacity: 1;\n    }\n}\n \n@keyframes focus {\n    to {\n        outline-width: 3px;\n        outline-color: var(--color-on-secondary-container);\n    }\n}";
