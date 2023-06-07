import React from "react";
import TreeRenderer from "@/components/file-trees/tree-renderer";
const folder = {
  name: "",
  children: [
    {
      name: "app",
      children: [
        {
          id: 111,
          name: "blog",
          children: [
            {
              name: "[slug]",
              children: [
                {
                  name: "page.tsx < /blog/...",
                },
              ],
            },
            {
              name: "page.tsx < /blog",
            },
          ],
        },

        {
          name: "about",
          children: [
            {
              name: "page.tsx < /about",
            },
          ],
        },
        {
          id: 222,
          name: "dashboard",
          children: [
            {
              name: "user",
              children: [
                {
                  name: "settings",
                  children: [
                    {
                      name: "password", children: [
                        { name: "page.tsx < /dashboard/user/settings/password" }
                      ]
                    },
                    {
                      name: "profile", children: [
                        { name: "page.tsx < /dashboard/user/settings/profile" }
                      ]
                    },
                    { name: "page.tsx  < /dashboard/user/settings" }
                  ],
                },
                {
                  name: "analytics", children: [
                    { name: "page.tsx  < /dashboard/user/analytics" }
                  ]
                },
                {
                  name: "page.tsx  < /dashboard/user",
                },
              ],
            },
            { name: "page.tsx < /dashboard" },
          ],
        },
        { name: "layout.tsx < RootLayout (Required)" },
        {
          name: "page.tsx < /",
        },
      ],
    },
  ],
};

let expanded = [1, 111]
const AppFileTree = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default AppFileTree
