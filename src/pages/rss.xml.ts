import rss from "@astrojs/rss";
import { getAllPublishedEntries } from "@/utils/getMultiCollectionEntries";
import config from "@/config";

export async function GET() {
  const entries = await getAllPublishedEntries();

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: entries.map(entry => ({
      link: `${entry.section}/${entry.id}/`,
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDatetime,
    })),
  });
}
