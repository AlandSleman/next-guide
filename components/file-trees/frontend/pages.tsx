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
                  name: "index.tsx < /blog/...",
                },
              ],
            },
            {
              name: "index.tsx < /blog",
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
                    { name: "password.tsx < /dashboard/user/settings/password" },
                    { name: "profile.tsx < /dashboard/user/settings/profile" },
                  ],
                },
                { name: "analytics.tsx < /dashboard/analytics" },
                {
                  name: "index.tsx < /dashboard/user",
                },
              ],
            },
            { name: "index.tsx < /dashboard" },
          ],
        },
        { name: "_app.tsx < RootLayout (Optional)" },
        { name: "about.tsx < /about" },
        { name: "index.tsx < /" },
      ]
    },
  ],
};

let expanded = [1, 2]
const PagesFileTree = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default PagesFileTree
