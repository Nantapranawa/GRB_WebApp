import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import type { author } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: author = await request.json();
    const author = await prisma.author.create({
        data: {
            authorName: body.authorName,
            yearBorn: body.yearBorn,
            yearDied: body.yearDied
        }
    });
    return NextResponse.json(author);
}

