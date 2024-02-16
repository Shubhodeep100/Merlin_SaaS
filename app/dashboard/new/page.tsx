import { SubmitButton } from "@/app/components/Submitbutton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function NewNoteRoute() {

    async function postData(formData: FormData) {
        "use server"
        const title = formData.get("title") as string
        const description = formData.get("description") as string
    }


    return (

        <Card>
            <form>
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