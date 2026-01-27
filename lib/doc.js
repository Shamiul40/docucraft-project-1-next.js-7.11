import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "docs");

export const getDocuments = () => {
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");

    const fulPath = path.join(postDirectory, fileName);

    const fileContents = fs.readFileSync(fulPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
      // content: matterResult.content
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
};
