import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { book } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (request: Request, {params}: {params: {BookID: string}}) =>{

    const book = await prisma.book.delete({
        where: {
            BookID: Number(params.BookID)
        }
    });
    return NextResponse.json(book, {status: 201});
}

export const PATCH = async (request: Request, {params}: {params: {BookID: string}}) =>{
    const body: book = await request.json();

    const book = await prisma.book.update({
        where: {
            BookID: Number(params.BookID)
        },
        data: {
            bookName: body.bookName,
            publicationYear: body.publicationYear,
            publisherName: body.publisherName
        }
    });
    return NextResponse.json(book, {status: 202});
}

