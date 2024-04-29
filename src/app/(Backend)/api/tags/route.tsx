import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Helper function to validate Bearer token
function validateBearerToken(request: NextRequest) {
  const authorizationHeader = request.headers.get("Authorization");
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return {
      valid: false,
      message: "Unauthorized: Bearer token missing or invalid",
    };
  }

  const bearerToken = authorizationHeader.substring(7); // Remove "Bearer " prefix

  // TODO: Implement token validation logic, for example, using a JWT library or checking against a database.

  // Example of a simple check
  if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
    return { valid: false, message: "Unauthorized: Invalid Bearer token" };
  }

  return { valid: true, token: bearerToken };
}

export async function GET(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { error: tokenValidation.message },
        { status: 401 }
      );
    }

    const tags = await db.tags.findMany(); // Retrieve all tags from the database.
    return NextResponse.json(
      {
        tags,
        success: "Tags retrieved successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<any> {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { error: tokenValidation?.message || "not valid token" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const title = body.tag;
    if (!title) return { error: `Tag Can Not Be Empty` };
    // const capitalize_value = data.charAt(0).toUpperCase() + data.slice(1);

    const tag = await db.tags.create({
      data: {
        title,
      },
    });

    return NextResponse.json(
      {
        tag: tag,
        success: "Tag created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { message: tokenValidation.message },
        { status: 401 }
      );
    }

    // Now you can use the 'tokenValidation.token' in your API logic

    const body = await request.json();
    const existingItem = await db.tags.findUnique({
      where: {
        id: body.id,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ message: "ID not matched" }, { status: 404 });
    }

    const updatedItem = await db.tags.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
      },
    });

    return NextResponse.json(
      {
        tag: updatedItem,
        message: "Tag updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { error: tokenValidation.message },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    // Check if the tags with the specified ID exists
    const existingTagItems = await db.tags.findUnique({
      where: {
        id,
      },
    });

    if (!existingTagItems) {
      return NextResponse.json({ error: "Tags not found" }, { status: 404 });
    }

    // Delete the tags with the specified ID
    await db.tags.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        success: "Item deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
