import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "v7wm4iz3", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is usually 'production' or your preferred dataset
  apiVersion: "2024-07-18", // use current date (YYYY-MM-DD) or specific API version
  //token: "yourAuthToken", // optional if you are using authenticated requests
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
