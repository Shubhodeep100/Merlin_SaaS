import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function Home() {

  const { isAuthenticated } = getKindeServerSession();

  if(await isAuthenticated()) {
    return redirect('/dashboard')
  }


  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort your notes easily
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">Create Notes with ease</h1>
            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Welcome to our note-taking platform! Whether you are a student, professional, or creative thinker, our intuitive interface is designed to make capturing and organizing your ideas a breeze. Lets get started on boosting your productivity!
            </p>
          </div>
          <div className="flex  justify-center max-w-sm mx-auto mt-10">
            <Button size="lg" className="w-full transition duration-500 hover:scale-110">
              <RegisterLink>
                Sign Up for free
              </RegisterLink>
            </Button>

          </div>
        </div>
      </div>
    </section >
  );
}
