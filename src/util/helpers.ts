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
