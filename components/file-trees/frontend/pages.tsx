import React from "react";
import TreeRenderer from "@/components/file-trees/tree-renderer";
const folder = {
  name: "",
  children: [
    {
      name: "pages", children: [
        {
          name: "blog",
          children: [
            {
              name: "[slug]",
              children: [
                {
                  name: "index.tsx",
                },
              ],
            },
            {
              name: "index.tsx",
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
                    { name: "password.tsx" },
                    { name: "profile.tsx" },
                  ],
                },
                { name: "analytics.tsx" },
                {
                  name: "index.tsx",
                },
              ],
            },
            { name: "index.tsx" },
          ],
        },
        { name: "about.tsx" },
      ]
    },
  ],
};

let expanded = [1, 2, 6]
const PagesFileTree = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default PagesFileTree
