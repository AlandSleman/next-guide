import React from "react";
import TreeRenderer from "@/components/file-trees/tree-renderer";
const folder = {
  name: "",
  children: [
    {
      name: "app",
      children: [
        {
          name: "blog",
          children: [
            {
              name: "[slug]",
              children: [
                {
                  name: "page.tsx",
                },
              ],
            },
            {
              name: "page.tsx",
            },
          ],
        },
        {
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
                        { name: "page.tsx" }
                      ]
                    },
                    {
                      name: "profile", children: [
                        { name: "page.tsx" }
                      ]
                    },
                  ],
                },
                {
                  name: "analytics", children: [
                    { name: "page.tsx << analytics page" }
                  ]
                },
                {
                  name: "page.tsx",
                },
              ],
            },
            { name: "page.tsx" },
          ],
        },
        {
          name: "about",
          children: [
            {
              name: "page.tsx",
            },
          ],
        },
      ],
    },
  ],
};

let expanded = [1, 2, 6, 17]
const AppFileTree = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default AppFileTree
