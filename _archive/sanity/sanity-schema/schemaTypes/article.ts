import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "category", title: "Kategori", type: "string",
      options: { list: [
        { title: "Kesehatan", value: "kesehatan" },
        { title: "Event", value: "event" },
        { title: "Tips", value: "tips" },
      ]},
    }),
    defineField({ name: "excerpt", title: "Ringkasan", type: "text", rows: 2 }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Konten", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "publishedAt", title: "Tanggal Terbit", type: "datetime", initialValue: () => new Date().toISOString() }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "thumbnail" } },
});
