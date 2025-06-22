import COMPONENT_GROUPS from "@/components/examples";
import GET_STARTED_LINKS from "@/components/get-started";
import type { GetStartedLinkId } from "@/types/common";
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

export function paginatedComponents(id: ComponentIdDefinition) {
  const components = COMPONENT_GROUPS.flatMap((group) => group.components);
  const index = components.findIndex((comp) => comp.id === id);

  return {
    previous: components[index - 1] || null,
    next: components[index + 1] || null,
  };
}

export function findGetStartedLink(id: GetStartedLinkId) {
  return (
    GET_STARTED_LINKS.flatMap((group) => group.links).find(
      (link) => link.id === id
    ) || GET_STARTED_LINKS[0].links[0]
  );
}
