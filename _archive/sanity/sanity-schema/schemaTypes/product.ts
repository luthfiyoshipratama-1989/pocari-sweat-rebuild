import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nama Produk", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "category", title: "Kategori", type: "string",
      options: { list: [
        { title: "Pocari Sweat", value: "pocari-sweat" },
        { title: "Ion Water", value: "ion-water" },
        { title: "Jelly", value: "jelly" },
      ]},
    }),
    defineField({ name: "description", title: "Deskripsi", type: "text", rows: 4 }),
    defineField({ name: "image", title: "Gambar Produk", type: "image", options: { hotspot: true } }),
    defineField({ name: "variants", title: "Varian Rasa", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "nutrition", title: "Info Nutrisi", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "name", subtitle: "category", media: "image" } },
});
