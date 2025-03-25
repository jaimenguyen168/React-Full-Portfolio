import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "company_name",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Company Icon",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "iconBg",
      title: "Icon Background Color",
      type: "string",
      description: "Hex code for the background color of the icon",
    }),
    defineField({
      name: "borderBg",
      title: "Border Background Color",
      type: "string",
      description: "Hex code for the border color",
    }),
    defineField({
      name: "date",
      title: "Employment Date",
      type: "string",
      description: "E.g., Sep 2023 - Present",
    }),
    defineField({
      name: "points",
      title: "Key Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
