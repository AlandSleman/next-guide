import React from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { SiReact, SiTypescript } from "react-icons/si"
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";

const folder = {
  name: "",
  children: [
    {name:"pages",children:[
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
      ],
    },
    {
      name: "dashboard",
      children: [
        {
          name: "user",
          children: [
            {
              name: "analytics",
              children: [
                {
                  name: "index.tsx",
                },
              ],
            },
            {
              name: "settings",
              children: [
                {
                  name: "profile",
                  children: [
                    {
                      name: "index.tsx",
                    },
                  ],
                },
                {
                  name: "password",
                  children: [
                    {
                      name: "index.tsx",
                    },
                  ],
                },
              ],
            },
            {
              name: "index.tsx",
            },
          ],
        },
      ],
    },
    ]},
  ],
};

let expanded=[1,2,5,6]
const data = flattenTree(folder);
export default function PagesFileTree() {
  return (
    <div>
      <div className="ide">
        <TreeView
          data={data}
          aria-label="directory tree"
          togglableSelect
          clickAction="EXCLUSIVE_SELECT"
          defaultExpandedIds={expanded}
          multiSelect
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
            handleSelect,
          }) => (
            <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FileIcon filename={element.name} />
              )}
{element.name}-{element.id}
            </div>
          )}
        />
      </div>
    </div>
  );
}

const FolderIcon = ({ isOpen }) =>
  isOpen ? (
    <FaRegFolderOpen  color="e8a87c"  />
  ) : (
    <FaRegFolder color="e8a87c"  />
  );

const FileIcon = ({ filename }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow"  />;
    case "ts":
      return <SiTypescript color="#3174C1"  />;
    case "tsx":
      return <SiReact color="#5FD3F2"  />;
    case "css":
      return <DiCss3 color="turquoise"  />;
    case "json":
      return <FaList color="yellow"  />;
    case "npmignore":
      return <DiNpm color="red"  />;
    default:
      return null;
  }
};
