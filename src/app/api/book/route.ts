import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { book } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: book = await request.json();
    const book = await prisma.book.create({
        data: {
            bookName: body.bookName,
            publicationYear: body.publicationYear,
            publisherName: body.publisherName
        }
    });
    return NextResponse.json(book, {status: 200});
}


