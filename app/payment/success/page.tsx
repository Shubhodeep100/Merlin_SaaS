import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center">
            <Card className="w-[350px]">

                <div className="p-6">
                    <div className="w-full flex justify-center">
                        <Check className="cursor-pointer rounded-full bg-green-500/30 text-green-500 w-12 h-12" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5 w-full">
                        <h3 className="text-lg leading-6 font-medium">
                            Payment Successfull.
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-muted-foreground">
                                Congrats on your subscription, please check your email fofr futher instructions.
                            </p>
                        </div>
                        <div className="mt-5 sm:mt-6 w-full">
                            <Button className="w-full hover:bg-gray-500" asChild>
                                <Link href="/">
                                    Go back to Dashboard
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </Card>
        </div>
    )
}