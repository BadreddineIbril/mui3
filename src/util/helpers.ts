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
