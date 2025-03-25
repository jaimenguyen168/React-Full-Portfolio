import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "iconUrl",
      title: "Project Icon",
      type: "image",
      description: "Icon representing the project",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      description: "CSS class for the project's button style (e.g., 'btn-back-orange')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
      description: "A brief description of the project",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tech",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }], // Reference to the 'skill' document type
        },
      ],
      description: "Technologies used in the project",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Project GitHub Link",
      type: "url",
      description: "GitHub repository link for the project",
      validation: (Rule) => Rule.uri({ allowRelative: true }).required(),
    }),
    defineField({
      name: "website",
      title: "Project Website Link",
      type: "url",
      description: "Optional website link for the project",
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "Mobile", value: "mobile" },
          { title: "Other", value: "other" },
        ],
      },
      description: "Select the project type",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
