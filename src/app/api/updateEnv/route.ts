import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  const envData = await req.json();
  console.log("Received data: ", envData); // Log the data received from frontend

  const envFilePath = path.resolve(process.cwd(), ".env");

  const envContent = `
  # General
  PROJECT_NAME=${envData.projectName || ""}
  LOG_LEVEL=${envData.logLevel || ""}
  SESSION_TIMEOUT=${envData.sessionTimeout || ""}
  MAX_UPLOAD_SIZE=${envData.maxUploadSize || ""}
  ALLOWED_ORIGIN=${envData.allowedOrigins || ""}
  NODE_ENV=${envData.NODE_ENV || "development"}
  PORT=${envData.PORT || "3000"}
  
  # Firebase
  NEXT_PUBLIC_FIREBASE_API_KEY=${envData.NEXT_PUBLIC_FIREBASE_API_KEY || ""}
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${
    envData.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || ""
  }
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=${
    envData.NEXT_PUBLIC_FIREBASE_PROJECT_ID || ""
  }
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=${
    envData.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || ""
  }
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=${
    envData.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || ""
  }
  NEXT_PUBLIC_FIREBASE_APP_ID=${envData.NEXT_PUBLIC_FIREBASE_APP_ID || ""}
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=${
    envData.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || ""
  }
  
  # Supabase
  NEXT_PUBLIC_SUPABASE_URL=${envData.NEXT_PUBLIC_SUPABASE_URL || ""}
  NEXT_PUBLIC_SUPABASE_ANON_KEY=${envData.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""}
  
  # AWS
  AWS_ACCESS_KEY_ID=${envData.AWS_ACCESS_KEY_ID || ""}
  AWS_SECRET_ACCESS_KEY=${envData.AWS_SECRET_ACCESS_KEY || ""}
  AWS_REGION=${envData.AWS_REGION || ""}
  AWS_S3_BUCKET=${envData.AWS_S3_BUCKET || ""}
  
  # Database
  DATABASE_URL=${envData.DATABASE_URL || ""}
  
  # Authentication
  NEXT_PUBLIC_AUTH0_DOMAIN=${envData.NEXT_PUBLIC_AUTH0_DOMAIN || ""}
  NEXT_PUBLIC_AUTH0_CLIENT_ID=${envData.NEXT_PUBLIC_AUTH0_CLIENT_ID || ""}
  NEXT_PUBLIC_AUTH0_CLIENT_SECRET=${
    envData.NEXT_PUBLIC_AUTH0_CLIENT_SECRET || ""
  }
  
  # API Keys
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${
    envData.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  }
  NEXT_PUBLIC_STRIPE_API_KEY=${envData.NEXT_PUBLIC_STRIPE_API_KEY || ""}
  
  # Analytics
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=${
    envData.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""
  }
  
  # Other
  NEXT_PUBLIC_API_BASE_URL=${envData.NEXT_PUBLIC_API_BASE_URL || ""}
  NEXT_PUBLIC_SENTRY_DSN=${envData.NEXT_PUBLIC_SENTRY_DSN || ""}
  `;

  try {
    console.log("Writing to .env file: ", envContent); // Log the content to be written to the file

    fs.writeFileSync(envFilePath, envContent.trim());

    return NextResponse.json({
      message: "Environment variables updated successfully",
    });
  } catch (error) {
    console.error("Error writing to .env: ", error); // Log any errors
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "Failed to update environment variables",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
