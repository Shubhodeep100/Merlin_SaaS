import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewNoteRoute() {
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
                        
                    </div>
                </CardContent>
            </form>
        </Card>
    )
}