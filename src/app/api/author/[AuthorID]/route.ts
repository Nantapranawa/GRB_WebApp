import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { author } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (request: Request, {params}: {params: {AuthorID: string}}) =>{

    const author = await prisma.author.delete({
        where: {
            AuthorID: Number(params.AuthorID)
        }
    });
    return NextResponse.json(author);
}

export const PATCH = async (request: Request, {params}: {params: {AuthorID: string}}) =>{
    const body: author = await request.json();

    const author = await prisma.author.update({
        where: {
            AuthorID: Number(params.AuthorID)
        },
        data: {
            authorName: body.authorName,
            yearBorn: body.yearBorn,
            yearDied: body.yearDied
        }
    });
    return NextResponse.json(author);
}
