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
        name: "filmmaking",
        label: "Filmmaking",
        path: "src/content",
        format: "json",
        match: {
          include: "filmmaking",
        },
        fields: [
          {
            type: "object",
            name: "films",
            label: "Films",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title }
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
      {
        name: "writing",
        label: "Writing",
        path: "src/content",
        format: "json",
        match: {
          include: "writing",
        },
        fields: [
          {
            type: "object",
            name: "writings",
            label: "Writings",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title }
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
        name: "development",
        label: "Development",
        path: "src/content",
        format: "json",
        match: {
          include: "development",
        },
        fields: [
          {
            type: "object",
            name: "projects",
            label: "Projects",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title }
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
                label: "Link",
              },
              {
                type: "object",
                name: "technologies",
                label: "Technologies",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name }
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Name",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "logo",
                    label: "Logo Path",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "index",
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
                label: "Image",
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
  search: {
    tina: {
      indexerToken: 'ae4d4c468fc82b4398d3980a54b279d96647a176',
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
