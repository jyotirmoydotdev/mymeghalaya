'use client'

import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"
import { Button } from "./ui/button";

const itineraryList: { title: string; href: string; description: string }[] = [
  {
    title: "7 Day Itineraries",
    href: "/",
    description:
      "The vibrant heart of Khasi Hills, rich in culture and scenery."
  },
  {
    title: "5 Day Itineraries",
    href: "/",
    description:
      "The vibrant heart of Khasi Hills, rich in culture and scenery."
  },
  {
    title: "1 Day Itineraries",
    href: "/",
    description:
      "The vibrant heart of Khasi Hills, rich in culture and scenery."
  },
]

const destinationList: { title: string; href: string; description: string }[] = [
  {
    title: "West Garo Hills",
    href: "/destinations?location=West+Garo+Hills",
    description:
      "Gateway to Garo Hills' natural beauty, culture, and adventure."
  },
  {
    title: "East Khasi Hills",
    href: "/destinations?location=East+Khasi+Hills",
    description:
      "The vibrant heart of Khasi Hills, rich in culture and scenery."
  },
]

const experienceList: { title: string; href: string; description: string }[] = [
  {
    title: "Festival",
    href: "/experiences",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Adventure",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Food",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  }
]

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem"

const ListItem2 = (({ href, title, children, ...props }: { href: string, title: string, children: React.ReactNode }) => {
  return (
    <>
      <a href={href} {...props} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </>
  )
})

const Navbar = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="py-5 px-5 md:px-12 lg:px-28 flex justify-between items-center  border-b">
          <Link href={'/'}>
            <div className="flex text-3xl items-start ">
              <div className="text-xs">
                MY
              </div>
              MEGHALAYA
              {/* <div className="flex  text-xs font-thin">
                <div>I</div>
                <div>N</div>
              </div> */}
            </div>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>

              {/* Home */}
              <NavigationMenuItem>
                <Link href={'/'} className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </Link>
              </NavigationMenuItem>

              {/* Itinerarys */}
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Itinerarys
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] md:grid-cols-1 ">
                    {itineraryList.map((itinerary) => (
                      <ListItem2
                        key={itinerary.title}
                        title={itinerary.title}
                        href={itinerary.href}
                      >
                        {itinerary.description}
                      </ListItem2>
                    ))}
                    <Link href={'/itineraries'}>
                      <Button className="w-full">
                        View All
                      </Button>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* Destinations */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-1 ">
                    {destinationList.map((destination) => (
                      <ListItem2
                        key={destination.title}
                        title={destination.title}
                        href={destination.href}
                      >
                        {destination.description}
                      </ListItem2>
                    ))}
                    <Link href={'/destinations'}>
                      <Button className="w-full">
                        View All
                      </Button>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Experiences */}
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger>Experiences</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] md:grid-cols-1 ">
                    {experienceList.map((experience) => (
                      <ListItem2
                        key={experience.title}
                        title={experience.title}
                        href={experience.href}
                      >
                        {experience.description}
                      </ListItem2>
                    ))}
                    <Link href={'/experiences'}>
                      <Button className="w-full">
                        View All
                      </Button>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* Gallery */}
              {/* <NavigationMenuItem>
                <Link href={'/gallery'} className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Gallery
                </Link>
              </NavigationMenuItem> */}

              {/* <NavigationMenuItem>
                <Button variant={'default'}>
                  Login
                </Button>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="py-5 px-5 md:px-12 lg:px-28 flex justify-between items-center border-b">
          <Link href={'/'}>
            <div className="flex items-start text-xl font-light text-right font-sans">
              <div className="text-xs">
                MY
              </div>
              MEGHALAYA
            </div>
          </Link>
          <Sheet>
            <SheetTrigger>
              <CiMenuBurger size={20} />
            </SheetTrigger>
            <SheetContent className="w-full" side={'left'}>
              <SheetHeader className="border-b">
                <SheetTitle className="text-left">
                  <Link href={'/'}>
                    <div className="flex items-start font-light">
                      <div className="text-xs">
                        MY
                      </div>
                      MEGHALAYA
                    </div>
                  </Link>
                </SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-2 py-2">
                <Link href={'/'} className="w-full">
                  <Button variant={'link'}>
                    Home
                  </Button>
                </Link>
                <Link href={'/destinations'} className="w-full">
                  <Button variant={'link'}>
                    Destinations
                  </Button>
                </Link>
                {/* <Link href={'/experiences'} className="w-full">
                  <Button variant={'link'} >
                    Experiences
                  </Button>
                </Link>
                <Link href={'/gallery'} className="w-full">
                  <Button variant={'link'}>
                    Gallery
                  </Button>
                </Link> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
