import { defineField, type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "banner",
      title: "Banner",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          description: "Banner Image",
          validation: (rule) => rule.required(),
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: "asset.url",
              title: "caption",
            },
          },
        }),
      ],
      preview: {
        select: {
          title: "title",
          media: "image",
        },
      },
    }
  ],
}
