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
          name: "(home)", children: [
            {
              name: "about",
              children: [
                {
                  name: "page.tsx < /about",
                },
              ],
            },
            {
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
            { name: "layout.tsx < RootLayout (Required)" },
            {
              name: "page.tsx < /",
            },
          ]
        },
        {
          id: 222,
          name: "(dashboard)", children: [
            {
              id: 333,
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
                { name: "layout.tsx < RootLayout (Required)" },
                { name: "page.tsx < /dashboard" },
              ],
            },
          ]
        },
      ],
    },
  ],
};

let expanded = [1, 111, 222, 333]
const MultipleRootLayouts = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default MultipleRootLayouts
