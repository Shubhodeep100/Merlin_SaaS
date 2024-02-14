import { Card } from "@/components/ui/card";
import { XIcon } from "lucide-react";

export default function CancelledRoute() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center">
            <Card className="w-[350px]">
                <div className="w-[350px]">
                    <div className="p-6">
                        <div className="w-full flex justify-center">
                            <XIcon className="cursor-pointer rounded-full bg-red-500/30 text-red-500 w-12 h-12" />
                        </div>
                        <div className="mt-3 text-center sm:mt-5 w-full">
                            <h3 className="text-lg leading-6 font-medium">
                                Payment failed!
                            </h3>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}