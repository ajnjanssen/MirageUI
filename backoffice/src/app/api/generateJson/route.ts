import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Field {
  id: number;
  propertyType: string;
  identifier: string;
}

export async function POST(req: NextRequest) {
  try {
    const { documentName, fields }: { documentName: string; fields: Field[] } =
      await req.json();
    const jsonContent = JSON.stringify(fields, null, 2);
    const dirPath = path.join(process.cwd(), "src/app/data/types");
    const filePath = path.join(dirPath, `${documentName}.json`);

    console.log("Directory Path:", dirPath);
    console.log("File Path:", filePath);

    // Ensure the directory exists
    if (!fs.existsSync(dirPath)) {
      console.log("Directory does not exist. Creating...");
      fs.mkdirSync(dirPath, { recursive: true });
    } else {
      console.log("Directory exists.");
    }

    await new Promise<void>((resolve, reject) => {
      fs.writeFile(filePath, jsonContent, "utf8", (err) => {
        if (err) {
          console.error(
            "An error occurred while writing JSON Object to File.",
            err
          );
          reject(err);
        } else {
          console.log("JSON file has been saved.");
          resolve();
        }
      });
    });

    return NextResponse.json(
      { message: "JSON file has been saved" },
      { status: 200 }
    );
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "An unexpected error occurred", details: errorMessage },
      { status: 500 }
    );
  }
}
