import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "articles",
        label: "Articles",
        path: "src/content",
        format: "json",
        match: {
          include: "articles",
        },
        fields: [
          {
            type: "object",
            name: "articles",
            label: "Articles",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item.title,
                };
              },
            },
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
                name: "image",
                label: "Image Path",
              },
            ],
          },
        ],
      },
      {
        name: "copywriting",
        label: "Copywriting",
        path: "src/content",
        format: "json",
        match: {
          include: "copywriting",
        },
        fields: [
          {
            type: "object",
            name: "copywriting",
            label: "Copywriting",
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item.title,
                };
              },
            },
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
                name: "image",
                label: "Image Path",
              },
            ],
          },
        ],
      },
      {
        name: "profile",
        label: "Profile",
        path: "src/content",
        format: "json",
        match: {
          include: "index",
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
                required: true,
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
    ],
  },
});
