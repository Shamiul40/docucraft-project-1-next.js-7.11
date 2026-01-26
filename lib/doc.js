import fs from "fs";
import matter from "gray-matter";
import path from "path"

const postDirectory = path.join(process.cwd(), "docs")


export const getDocuments =()=>{
    console.log(postDirectory)

    const fileNames = fs.readdirSync(postDirectory);

    const allDocuments = fileNames.map(fileName=>{
        const id = fileName.replace(".md", "")

        const fulPath = path.join(postDirectory, fileName);

        const fileContents = fs.readFileSync(fulPath, "utf-8")

        const matterResult = matter(fileContents)
        console.log(matterResult)

        return {
            id,
            ...matterResult.data,
            content: matterResult.content
        }
    })

    return allDocuments
}