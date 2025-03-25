import { defineType, defineField } from "sanity";

export default defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Social Link Name",
      type: "string",
      description: "Name of the social link (e.g., GitHub, LinkedIn)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconUrl",
      title: "Icon URL",
      type: "image",
      description: "Icon for the social link",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "The URL of the social link (e.g., GitHub profile URL)",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
