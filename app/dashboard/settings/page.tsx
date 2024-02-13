import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
async function getData(userId: string) {
    const data = await prisma?.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            name: true,
            email: true,
            colorScheme: true,
        },
    })

    return data;
}
export default async function SettingPage() {

    const { getUser } = getKindeServerSession()
    const user = await getUser();
    const data = await getData(user?.id as string);


    return (
        <div className="grid items-start gap-8">
            <div className="flex items-center justify-between px-2">
                <div className="grid gap-1">
                    <h1 className="text-3xl md:text-4xl">Settings
                        <p className="text-lg text-muted-foreground">
                            Your Profile settings
                        </p>
                    </h1>
                </div>
            </div>
            <Card>
                <form>
                    <CardHeader>
                        <CardTitle>General data</CardTitle>
                        <CardDescription>
                            PLease provide a general information about yourself, Please dont forget to save.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label>
                                    Your Name
                                </Label>
                                <Input name="name" type="text" id="name" placeholder="Your Name" defaultValue={data?.name ?? undefined} />
                            </div>
                            <div className="space-y-1">
                                <Label>
                                    Your Email
                                </Label>
                                <Input name="name" type="email" id="email" placeholder="Your Email" disabled defaultValue={data?.email as string} />
                            </div>
                            <div className="space-y-1">
                                <Label>Color Scheme</Label>
                                <Select name="color" defaultValue={data?.colorScheme}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a color" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {/* <SelectLabel>
                                                Color
                                            </SelectLabel> */}
                                            <SelectItem value="theme-green">Green</SelectItem>
                                            <SelectItem value="theme-blue">Blue</SelectItem>
                                            <SelectItem value="theme-red">Green</SelectItem>
                                            <SelectItem value="theme-violet">Violet</SelectItem>
                                            <SelectItem value="theme-purple">Purple</SelectItem>
                                            <SelectItem value="theme-orange">Orange</SelectItem>
                                            <SelectItem value="theme-yellow">Yellow</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </form>
            </Card>
        </div>
    )
}