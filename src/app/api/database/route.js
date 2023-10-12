
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    // 1. create:
    /*        i) insert one
              ii) insert many
              iii) relational insert      */
    // 2. read/find:
    // 3. update:
    // 4. delete:

    try {
        const prisma = new PrismaClient()
        // insert one
        const createUser = await prisma.user.create({
            data: {
                firstName: "Md.",
                middleName: "Nayem",
                lastName: "Hossain",
                mobile: "01677863720",
                email: "nayem.hossain7298@gmail.com",
                passwordHash: "ABCD-1234",
                intro: "hello!",
                profile: "Nayem Hossain",
            },
        })
        // const result = await prisma.tag.create({
        //     data: {
        //         title: "Learn Prisma",
        //         metaTitle: "migration",
        //         slug: "any",
        //         content: "tutorial",
        //     },
        // })
        return NextResponse.json({ status: "success", data: createUser });
    } catch (error) {
        return NextResponse.json({ status: "faild to create data", data: error });
    }
}

export async function GET(req, res) {

}