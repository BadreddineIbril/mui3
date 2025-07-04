import COMPONENT_GROUPS from "@/components/examples";
import GET_STARTED_LINKS from "@/components/get-started";
import type { GetStartedId, GetStartedLinkId } from "@/types/common";
import type { ComponentIdDefinition } from "@/types/demo";

export function toKebab(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export async function copy(content: string, onSuccess?: () => void) {
  if (!content) return;

  try {
    await navigator.clipboard.writeText(content);

    if (onSuccess) onSuccess();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

export function findComponent(id: ComponentIdDefinition) {
  return (
    COMPONENT_GROUPS.flatMap((group) => group.components).find(
      (comp) => comp.id === id
    ) || COMPONENT_GROUPS[0].components[0]
  );
}

export function paginatedComponents(
  section: GetStartedId | "components",
  component: ComponentIdDefinition
) {
  const isComponent = section === "components";
  const items = isComponent
    ? COMPONENT_GROUPS.flatMap((g) => g.components)
    : GET_STARTED_LINKS.flatMap((g) => g.links);

  const id = isComponent ? component : section || "";
  const index = items.findIndex((item) => item.id === id);

  const navigation = (item: (typeof items)[number] | null) =>
    item
      ? {
          label: item.label,
          href: `${
            COMPONENT_GROUPS.some((group) =>
              group.components.some((c) => c.id === item.id)
            )
              ? "/docs/components"
              : "/docs"
          }/${item.id}`,
        }
      : null;

  return {
    previous: navigation(
      items[index - 1] ??
        (isComponent ? GET_STARTED_LINKS.at(-1)?.links.at(-1) : null)
    ),
    next: navigation(
      items[index + 1] ??
        (!isComponent ? COMPONENT_GROUPS[0]?.components[0] : null)
    ),
  };
}

export function findGetStartedLink(id: GetStartedLinkId) {
  return (
    GET_STARTED_LINKS.flatMap((group) => group.links).find(
      (link) => link.id === id
    ) || GET_STARTED_LINKS[0].links[0]
  );
}

export function getFavicon() {
  const doc = document.documentElement;

  const color = getComputedStyle(doc).getPropertyValue("--color-on-primary");
  const bgColor = getComputedStyle(doc).getPropertyValue("--color-primary");
  const theme = getComputedStyle(doc).colorScheme;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 500 500" fill="none" color="${color}" style="color-scheme: ${theme};">
    <circle cx="250" cy="250" r="250" fill="${bgColor}"/>
    <path d="M116 366.498C165.5 214.998 247.5 124.717 261 133.607C274.5 142.498 236.5 292.998 235 312.608C233.5 332.217 340 150.217 342 173.607C344 196.998 314.5 324.498 317 333.608C319.5 342.717 385 290.608 385 290.608" stroke="currentColor" stroke-width="30"/>
    <rect x="106.727" y="347.05" width="29.9919" height="30" rx="14.996" transform="rotate(18.6232 106.727 347.05)" fill="currentColor"/>
    <path d="M372.145 300.614C367.07 294.082 368.267 284.658 374.799 279.583C381.331 274.507 390.758 275.674 395.834 282.206C400.91 288.738 399.712 298.161 393.18 303.237C386.648 308.313 377.221 307.146 372.145 300.614Z" fill="currentColor"/>
  </svg>`;
}

export function setFavicon() {
  const href = `data:image/svg+xml;base64,${btoa(
    unescape(encodeURIComponent(getFavicon()))
  )}`;
  const link =
    document.querySelector<HTMLLinkElement>("link[rel*='icon']") ??
    Object.assign(document.createElement("link"), { rel: "icon" });

  link.type = "image/svg+xml";
  link.href = href;

  if (!link.parentNode) document.head.appendChild(link);
}
