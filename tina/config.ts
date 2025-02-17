import { defineConfig } from "tinacms";

export default defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      {
        name: "profile",
        label: "Profile",
        path: "src/content/index.json",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "profile",
            label: "Profile",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
              },
              {
                type: "string",
                name: "image",
                label: "Profile Image",
              },
              {
                type: "string",
                name: "Bio",
                label: "Biography",
                list: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "development",
        label: "Development",
        path: "src/content/development.json",
        format: "json",
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "link",
                label: "Project Link",
              },
            ],
          },
        ],
      },
      {
        name: "writing",
        label: "Writing",
        path: "src/content/writing.json",
        format: "json",
        fields: [
          {
            type: "object",
            name: "writings",
            label: "Writings",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "position",
                label: "Position",
              },
              {
                type: "string",
                name: "link",
                label: "Link",
              },
              {
                type: "string",
                name: "image",
                label: "Image",
              },
            ],
          },
        ],
      },
      {
        name: "filmmaking",
        label: "Filmmaking",
        path: "src/content/filmmaking.json",
        format: "json",
        fields: [
          {
            type: "object",
            name: "films",
            label: "Films",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "position",
                label: "Position",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "link",
                label: "Link",
              },
              {
                type: "string",
                name: "watchLink",
                label: "Watch Link",
              },
              {
                type: "string",
                name: "image",
                label: "Image",
              },
            ],
          },
        ],
      },
    ],
  },
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  branch:
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main", // default branch
  token: process.env.TINA_TOKEN || "",
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || "",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
}); 