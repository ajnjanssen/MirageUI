import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

interface Field {
  id: number;
  propertyType: string;
  identifier: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { documentName, fields }: { documentName: string; fields: Field[] } =
      req.body;
    const jsonContent = JSON.stringify(fields, null, 2);
    const filePath = path.join(
      process.cwd(),
      "src/app/data/types",
      `${documentName}.json`
    );

    fs.writeFile(filePath, jsonContent, "utf8", (err) => {
      if (err) {
        console.error(
          "An error occurred while writing JSON Object to File.",
          err
        );
        res
          .status(500)
          .json({ error: "Failed to save JSON file", details: err.message });
      } else {
        console.log("JSON file has been saved.");
        res.status(200).json({ message: "JSON file has been saved" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
