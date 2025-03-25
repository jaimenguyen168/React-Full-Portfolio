import { defineType, defineField } from "sanity";

export default defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Skill Image",
            type: "image",
            description: "Upload an image for this skill",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "name",
            title: "Skill Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: ["Frontend", "Backend", "Full Stack", "Database", "Version Control", "Other"],
            },
        }),
        defineField({
            name: "path",
            title: "Documentation URL",
            type: "url",
            description: "Official documentation or reference link",
        }),
    ],
});
