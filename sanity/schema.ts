import { defineArrayMember, defineField, type SchemaTypeDefinition } from 'sanity'

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
    },
    {
      name: "blockContent",
      title: "Block Content",
      type: "array",
      of: [
        defineArrayMember({
          title: "Block",
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
        }),
      ],
    },
    {
      name: "product",
      title: "Product",
      type: "document",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: "Keep the title relative to product",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 96,
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "string",
        }),
    
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "category",
          title: "Category",
          type: "array",
          of: [{ type: "reference", to: { type: "category" } }],
          validation: (rule) => rule.required(),
        }),
    
        defineField({
          name: "price",
          title: "Price",
          type: "number",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "rowprice",
          title: "Row Price",
          type: "number",
        }),
        defineField({
          name: "ratings",
          title: "Ratings",
          type: "number",
          description: "Ratings must be equal or below 5",
        }),
        defineField({
          name: "isnew",
          title: "New Arrival",
          type: "boolean",
        }),
        defineField({
          name: "body",
          title: "Body",
          type: "blockContent",
        }),
        defineField({
          name: "position",
          title: "Position",
          type: "string",
        }),
        defineField({
          name: "brand",
          title: "Brand",
          type: "string",
        }),
        defineField({
          name: "quantity",
          title: "Quantity",
          type: "number",
        }),
      ],
      preview: {
        select: {
          title: "title",
          media: "image",
          position: "position",
        },
      },
    }
  ],
}
