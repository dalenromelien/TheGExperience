import { SanityClient } from "@sanity/client";

export const client = SanityClient({
  projectId: "yourProjectId", // find this at manage.sanity.io or in your sanity.json
  dataset: "yourDataset", // this is usually 'production' or your preferred dataset
  apiVersion: "2023-06-15", // use current date (YYYY-MM-DD) or specific API version
  token: "yourAuthToken", // optional if you are using authenticated requests
  useCdn: true, // `false` if you want to ensure fresh data
});
