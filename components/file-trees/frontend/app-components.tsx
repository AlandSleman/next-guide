import React from "react";
import TreeRenderer from "@/components/file-trees/tree-renderer";
const folder = {
  name: "",
  children: [
    {
      name: "app",
      children: [
        {
          name: "about",
          children: [
            {
              name: "page.tsx",
            },
            {
              name: "component1.tsx",
            },
            {
              name: "component1-styles.module.css",
            },
          ],
        },
      ],
    },
  ],
};

let expanded = [1, 2, 5, 6]
const AppComponents = () => <TreeRenderer defaultExpanded={expanded} folder={folder} />
export default AppComponents
