import { defineType, defineField } from "sanity";

export default defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        defineField({
            name: "imageUrl",
            title: "Image URL",
            type: "url",
            description: "Link to the skill's image or icon",
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
                list: ["Frontend", "Backend", "Full Stack", "Other"],
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
