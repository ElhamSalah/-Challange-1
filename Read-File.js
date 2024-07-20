const { error } = require("console");
const fs = require("fs");
const path = require("path");

const folderPath = "MyFolder/";

// function to read folder

function readFolderContent() {
  try {
    const files = fs.readdirSync(folderPath);

    const textFiles = files.filter(
      (files) => path.extname(files).toLocaleLowerCase() === ".txt"
    );

    if (textFiles.length > 0) {
      for (const file of textFiles) {
        const fileContent = fs.readFileSync(
          path.join(folderPath, file),
          "utf8"
        );
        console.log(`Contents of ${file}:\n${fileContent}\n`);
      }
    } else {
      console.log("There is not text  files  in the folder.");
    }
  } catch (error) {
    console.error("Error reading folder contents:", error);
  }
}
readFolderContent();
