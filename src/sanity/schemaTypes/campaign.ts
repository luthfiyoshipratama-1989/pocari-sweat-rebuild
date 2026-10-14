import { defineType, defineField } from "sanity";

export const campaign = defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Judul Campaign", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Banner", type: "image", options: { hotspot: true } }),
    defineField({ name: "period", title: "Periode", type: "string" }),
    defineField({ name: "link", title: "Link", type: "url" }),
    defineField({ name: "active", title: "Aktif?", type: "boolean", initialValue: true }),
  ],
});
