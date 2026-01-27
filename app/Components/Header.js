import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Link from "next/link";

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
        <ul className="relative ">
          {root &&
            root.map((rootNode) => (
              <li key={rootNode.id}>
                <Link
                  href={`/docs/${rootNode.id}`}
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 transition"
                >
                  <span>{rootNode.title}</span>
                </Link>
                {
                nonRoot[rootNode.id] && (
                  <ul>
                    {nonRoot[rootNode.id].map((subNode) => (
                      <li key={subNode.id}>
                        <Link href={`/docs/${rootNode.id}/${subNode.id}`}>
                          <span>{subNode.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>

      <Search></Search>
    </div>
  );
}
