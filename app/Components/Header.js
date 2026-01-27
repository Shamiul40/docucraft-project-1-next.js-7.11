import React from "react";
import Logo from "./Logo";
import Search from "./Search";

export default function Header({ docs }) {
  // console.log(docs)

  const root = docs.filter((doc) => !doc.parent);
  // console.log("there is root console", root)

  const nonRoot = Object.groupBy(
    docs.filter((doc) => doc.parent),
    (doc) => {
      const parent = doc.parent;

      return parent;
    },
  );
  console.log(nonRoot);

  return (
    <div>
      <Logo></Logo>

      <div>
        <ul>
          {
            root && root.map(rootNode=>(
                <li key={rootNode.id}>{rootNode.title}</li>
            ))
          }
        </ul>
      </div>

      <Search></Search>
    </div>
  );
}
