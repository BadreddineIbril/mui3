import COMPONENT_GROUPS from "@/components/examples";
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
