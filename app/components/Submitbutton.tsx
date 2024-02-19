"use client"
import { Button } from "@/components/ui/button";
import { Loader2, Loader2Icon, Trash } from "lucide-react";
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

export function StripeSubscriptionCreationButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button disabled className="w-full"> <Loader2Icon className="mr-2 w-4 h-4 animate-spin" />Please Wait</Button>
            ) : (

                <Button className="w-full" type="submit">
                    Create Subscription
                </Button>

            )}
        </>
    )
}

export function StripePortal() {
    const { pending } = useFormStatus()
    return (
        <>
            {pending ? (<Button disabled className="w-fit">
                <Loader2Icon className="mr-2 w-4 h-4 animate-spin" />
            </Button>) : (<Button className="w-fit " type="submit">View Payment details</Button>)}
        </>
    )
}

export function TrashDelete() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (<Button variant="destructive" size="icon">
                <Loader2 className="h-4 w-4 animate-spin" />
            </Button>) : (<Button variant="destructive" size="icon">
                <Trash className="h-4 w-4" />
            </Button >)}
        </>
    )
}