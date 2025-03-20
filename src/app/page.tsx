import HeroSection from "@/components/landingPage/heroSection";
import MeghalayaSection from "@/components/landingPage/meghalayaSection";
import Footer from "@/components/layout/footer";
import { createClient } from "@/utils/supabase/server";
import Logo from "@/components/layout/logo";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { NavBarDesktopData as data } from "@/staticData/layout/navBarData";

export default async function page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return redirect('/home')
  }
  return (
    <main>
      <div className='flex min-h-screen flex-col relative'>
        <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
          {/* <Navbar /> */}
          <div className=" static sm:sticky top-0 z-20">
            {/* Nav Bar Desktop */}
            <div className="h-14 items-center px-4 sm:px-8 hidden md:block w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border" >
              <div className={"pt-3 flex justify-between items-center"}>
                <Logo />
                <div className="flex gap-3 items-center">
                  {
                    data.links?.map((item, i) => (
                      <Link href={item.link} key={i}>
                        <Button variant={'ghost'} >
                          {item.name}
                        </Button>
                      </Link>
                    ))
                  }
                  <Button size={'sm'} className="text-black" asChild>
                    <Link href={'/login'}>
                      Login
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Nav Bar Mobile */}
            <div className=" md:hidden relative">
              <div className="py-3 px-5 md:px-12 lg:px-28 flex h-[72px] justify-between items-center border-b">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/logo.svg"}
                    width={500}
                    height={500}
                    alt="MyMeghalaya Logo"
                    priority
                    className="h-full w-16"
                  />
                </div>
                <Link href={'/login'}>
                  <Button size={'sm'}>Login</Button>
                </Link>
              </div>
            </div>
          </div>
          <HeroSection />
          <MeghalayaSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}