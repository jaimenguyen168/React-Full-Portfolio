import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ez6224cu", // Your Sanity project ID
  dataset: "my-portfolio", // Default dataset
  useCdn: true, // Set to false if you need fresh data (e.g., for admin dashboards)
  apiVersion: "2023-08-08", // Use the latest API version
  token:
    "skaZyPBmRcvuc0mUoEg4GHNZcRqtox0DUwj8V9br0pdhqVUrDf7k2AJzJwLyNOVsFELZecla8pswJfyKfbHUgrWkTKZ9vto616kT9fhNpYLxkd1uaxQMdR5w3hwNDfuUjxjb7nFNDDNdmUrWjYygpQrnSY9MCmtSvv8yBZYBXjPHSAFa3y1o",
});

export const fetchSkills = async () => {
  return await sanityClient.fetch(`*[_type == "skill"]`);
};
