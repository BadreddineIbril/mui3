import { toKebab } from "@/util/helpers";
import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  Scheme,
} from "@material/material-color-utilities";

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

export function useTheme(primaryHex: string): void {
  const {
    schemes: { light, dark },
    palettes: { neutral },
  } = themeFromSourceColor(argbFromHex(primaryHex));

  const variables = [
    ...SCHEME_KEYS.map(
      (k) =>
        `--color-${toKebab(k)}: light-dark(
          ${hexFromArgb(light[k] as number)},
          ${hexFromArgb(dark[k] as number)})
        ;`
    ),
    ...Object.entries(SURFACE_TONES).map(
      ([k, { light: l, dark: d }]) =>
        `--color-${k}: light-dark(
          ${hexFromArgb(neutral.tone(l))}, 
          ${hexFromArgb(neutral.tone(d))})
        ;`
    ),
  ];

  const style = document.querySelector('style[data-vite-dev-id*="colors.css"]');
  if (!style) return;

  style.textContent = `:root { ${variables.join(" ")} }`;

  document.head.appendChild(
    Object.assign(document.createElement("style"), {
      textContent: `:root { ${variables.join(" ")} }`,
    })
  );
}
