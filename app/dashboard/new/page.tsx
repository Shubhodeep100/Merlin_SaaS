import { SubmitButton } from "@/app/components/Submitbutton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import prisma from "@/app/lib/db";
import { getUser } from "@kinde-oss/kinde-auth-nextjs/dist/types/session/getUser";
import { error } from "console";
import { redirect } from "next/navigation";


export default async function NewNoteRoute() {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    async function postData(formData: FormData) {
        "use server"
        if (!user) {
            throw new Error('Not authorized');
        }
        const title = formData.get("title") as string
        const description = formData.get("description") as string

        await prisma.note.create({
            data: {
                userId: user?.id,
                description: description,
                title: title,
            }
        })
        return redirect('/dashboard')
    }


    return (

        <Card>
            <form action={postData}>
                <CardHeader>
                    <CardTitle>
                        New Note
                    </CardTitle>
                    <CardDescription>
                        Right here you can create new note.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-5">
                    <div className="gap-y-2 flex flex-col">
                        <Label>Title</Label>
                        <Input required type="text" placeholder="Title for your Note." />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <Textarea name="description" placeholder="Describe your note as you want." required />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button asChild variant="destructive">
                        <Link href="/dashboard">cancel</Link>
                    </Button>

                    <SubmitButton />
                </CardFooter>
            </form>
        </Card>
    )
}