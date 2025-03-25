import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
  projectId: "ez6224cu", // Your Sanity project ID
  dataset: "my-portfolio", // Default dataset
  useCdn: true, // Set to false if you need fresh data (e.g., for admin dashboards)
  apiVersion: "2023-08-08", // Use the latest API version
  token: process.env.VITE_APP_SANITY_TOKEN!,
});

const builder = createImageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => builder.image(source);

export const fetchSkills = async () => {
  return await sanityClient.fetch(`*[_type == "skill"]`);
};

export const fetchExperience = async () => {
  return await sanityClient.fetch(`*[_type == "experience"]`);
};

export const fetchSocialLinks = async () => {
  return await sanityClient.fetch(`*[_type == "socialLinks"]`);
};

export const fetchProjectsWithSkills = async () => {
  return await sanityClient.fetch(`
    *[_type == "project"] {
      ...,
      tech[]->{name, path},
    }
  `);
};
