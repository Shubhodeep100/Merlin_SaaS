import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "../lib/db";

async function getData(userId: string) {
    const data = await prisma.note.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    return data;
}

export default function DashboardPage() {
    return (
        <div className="grid items-start gap-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="text-3xl md:text:4xl">Your Notes</h1>
                    <p className="text-lg text-muted-foreground">
                        Here you can see and create notes.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/new">
                        Create a new note.
                    </Link>
                </Button>
            </div>
        </div>
    )
}