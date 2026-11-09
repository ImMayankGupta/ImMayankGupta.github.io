import { getCollection, type CollectionEntry } from "astro:content";
import { slugifyStr, slugifyAll } from "./slugify";

export type HubSection = "automation" | "interview" | "resources";

export type MultiCollectionEntry =
  | (CollectionEntry<"automation"> & { section: "automation" })
  | (CollectionEntry<"interview"> & { section: "interview" })
  | (CollectionEntry<"resources"> & { section: "resources" });

export type TagInfo = {
  tag: string;
  tagName: string;
  count: number;
};

/**
 * Retrieves all published entries across automation, interview, and resources collections,
 * sorted chronologically (newest first).
 */
export async function getAllPublishedEntries(): Promise<
  MultiCollectionEntry[]
> {
  const [automation, interview, resources] = await Promise.all([
    getCollection("automation", ({ data }) => !data.draft),
    getCollection("interview", ({ data }) => !data.draft),
    getCollection("resources", ({ data }) => !data.draft),
  ]);

  const all: MultiCollectionEntry[] = [
    ...automation.map(entry => ({ ...entry, section: "automation" as const })),
    ...interview.map(entry => ({ ...entry, section: "interview" as const })),
    ...resources.map(entry => ({ ...entry, section: "resources" as const })),
  ];

  return all.sort(
    (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
  );
}

/**
 * Extracts a deduplicated and counted list of tags across all published collection entries.
 * Sorted by post count descending, then alphabetical.
 */
export async function getUniqueTags(): Promise<TagInfo[]> {
  const entries = await getAllPublishedEntries();
  const tagMap = new Map<string, { tagName: string; count: number }>();

  for (const entry of entries) {
    for (const rawTag of entry.data.tags) {
      const slug = slugifyStr(rawTag);
      const existing = tagMap.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        tagMap.set(slug, { tagName: rawTag, count: 1 });
      }
    }
  }

  const tags: TagInfo[] = Array.from(tagMap.entries()).map(
    ([tag, { tagName, count }]) => ({
      tag,
      tagName,
      count,
    })
  );

  return tags.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.tag.localeCompare(b.tag);
  });
}

/**
 * Retrieves all entries that carry a specific tag (by slug).
 */
export async function getEntriesByTag(
  tagSlug: string
): Promise<MultiCollectionEntry[]> {
  const entries = await getAllPublishedEntries();
  return entries.filter(entry => slugifyAll(entry.data.tags).includes(tagSlug));
}
