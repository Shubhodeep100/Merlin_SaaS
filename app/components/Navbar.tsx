// "use client"
import Link from "next/link";
import { Themetoggle } from "./Themetoggle";
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserNav } from "./UserNav";
import saas from "@/public/assets/saas.png"
import Image from "next/image";
export async function Navbar() {

    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <div className="flex flex-row gap-1">
                        <Image src={saas} width={50} height={40} alt="logo" className="transition duration-500 hover:scale-110"/>
                        <h1 className="font-bold text-3xl font-signature mt-1">Merlin<span className="text-primary">SaaS</span></h1>
                    </div>
                </Link>

                <div className="flex items-center gap-x-5">
                    <Themetoggle />

                    {(await isAuthenticated()) ? (
                        <UserNav email={user?.email as string} image={user?.picture as string} name={user?.given_name as string} />
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Sign In</Button>
                            </LoginLink>

                            <RegisterLink>
                                <Button variant="secondary">Sign Up</Button>
                            </RegisterLink>
                        </div>)}
                </div>
            </div>
        </nav>
    )
}