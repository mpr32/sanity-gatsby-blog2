export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61a4ec9ba8fdcd1fa0ef05b5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-9upp64rh",
                  apiId: "812f8a09-2e1e-46c8-b7a2-8235e603fe40",
                },
                {
                  buildHookId: "61a4ec9bf72ab92027fbe849",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-pe34wo3j",
                  apiId: "b72ec4cd-5cb7-4c77-b269-a45f3f25681a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mpr32/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-pe34wo3j.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
