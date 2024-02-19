import { SubmitButton } from "@/app/components/Submitbutton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import prisma from "@/app/lib/db"

async function getData({userId, noteId} : {userId: string, noteId: string}) {
    const data = await prisma.note.findUnique({
        where: {
            id: '',
            userId: '',
        }
    })
}
export default function DynamicRoute() {
    return (
        <Card>
            <form>
                <CardHeader>
                    <CardTitle>Edit Note</CardTitle>
                    <CardDescription>
                        Right here you can now edit your notes
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-5">
                    <div className="gap-y-2 flex flex-col">
                        <Label>Title</Label>
                        <Input
                            required
                            type="text"
                            name="title"
                            placeholder="Title for your note"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            placeholder="Describe your note as you want"
                            required
                        />
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button asChild variant="destructive">
                        <Link href="/dashboard">Cancel</Link>
                    </Button>
                    <SubmitButton />
                </CardFooter>
            </form>
        </Card>
    )
}