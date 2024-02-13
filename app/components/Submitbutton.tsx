"use client"
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom"

export function SubmitButton() {

    const { pending } = useFormStatus();
    return (
        <div>
            {pending ? (
                <Button disabled className="w-fit"> <Loader2Icon className="mr-2 w-4 h-4 animate-spin" />Please Wait</Button>
            ) : (
                <Button type="submit" className="w-fit">Save Now</Button>
            )}
        </div>
    )
}