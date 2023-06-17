export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function decodeSlug(slug: string): string {
  return slug.replace(/-/g, " ");
}
