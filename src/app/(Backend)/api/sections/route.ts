import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

  // Example of a simple check
  if (bearerToken !== "uKkBUm36l8U=w2C_v!@") {
    return { valid: false, message: "Unauthorized: Invalid Bearer token" };
  }

  return { valid: true, message: "Authorized: Valid Bearer token" };
}

export async function GET(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { info: tokenValidation.message },
        { status: 401 }
      );
    }

    // Now you can use the 'tokenValidation.token' in your API logic

    // Assuming you have a 'db' object for database access.
    const sections = await db.sections.findMany({
      include: {
        categories: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    }); // Retrieve all sections from the database.
    return NextResponse.json(
      {
        sections,
        success: "Sections retrieved successfully",
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

export async function PUT(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { info: tokenValidation.message },
        { status: 401 }
      );
    }

    // Now you can use the 'tokenValidation.token' in your API logic

    const formData = await request.formData();
    const id = formData.get("id") as string;
    if (!id) {
      return NextResponse.json({ info: "ID is required" }, { status: 404 });
    }

    const existingItem = await db.sections.findUnique({
      where: {
        id,
      },
    });

    if (!existingItem) {
      return NextResponse.json({ info: "ID not matched" }, { status: 404 });
    }

    const validatedData = await sectionSchema.safeParseAsync({
      title: formData.get("section"),
      description: formData.get("description"),
    });

    if (!validatedData.success) {
      const err: string[] = [];
      validatedData.error.errors.forEach((i) => {
        err.push(i.message);
      });
      console.log(err);
      return NextResponse.json({ message: err }, { status: 400 });
    }

    const updatedItem = await db.sections.update({
      where: {
        id,
      },
      data: validatedData.data,
    });

    return NextResponse.json(
      {
        section: updatedItem,
        success: "Section updated successfully",
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

export async function DELETE(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { info: tokenValidation.message },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    const existingSectionItems = await db.sections.findUnique({
      where: {
        id,
      },
    });

    if (!existingSectionItems) {
      return NextResponse.json({ info: "Sections not found" }, { status: 404 });
    }

    // Delete the sections with the specified ID
    await db.sections.delete({
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

///////////////formData/////////////////////

const sectionSchema = z.object({
  title: z.string().nonempty({
    message: "Section can not be empty",
  }),
  description: z.string().nonempty({
    message: "Desription can not be empty",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const tokenValidation = validateBearerToken(request);

    if (!tokenValidation.valid) {
      return NextResponse.json(
        { info: tokenValidation.message },
        { status: 401 }
      );
    }

    // Zod validation
    const formData = await request.formData();
    const validatedData = await sectionSchema.safeParseAsync({
      title: formData.get("section"),
      description: formData.get("description"),
    });

    if (!validatedData.success) {
      const err: string[] = [];
      validatedData.error.errors.forEach((i) => {
        err.push(i.message);
      });
      console.log(err);
      return NextResponse.json({ message: err }, { status: 400 });
    }

    const section = await db.sections.create({
      data: validatedData.data,
    });

    return NextResponse.json(
      {
        section: section,
        success: "Section created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
