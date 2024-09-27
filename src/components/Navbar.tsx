"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Darkmodebutton } from "./ui/Darkmodebutton";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-row items-center gap-10 justify-between my-2 mx-10 ml-6">
      <div className="flex flex-row items-center justify-start gap-6">
        <Link href="/">
        <svg width="206" height="22" viewBox="0 0 206 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.5 4H38V11C38 14.86 34.86 18 31 18C27.14 18 24 14.86 24 11V4H26.5V11C26.5 13.48 28.52 15.5 31 15.5C33.48 15.5 35.5 13.48 35.5 11V4ZM51.4961 4L53.9961 4.02V18.02L51.4961 16.1L42.4961 9.16V18.02H39.9961V4.06L42.4961 5.98L51.4961 12.92V4ZM62.9922 4L62.9722 4.02C66.8322 4.02 69.9722 7.14 69.9722 11C69.9722 12.72 69.3522 14.3 68.3122 15.52C68.1922 15.66 68.0522 15.8 67.9122 15.94C66.6522 17.22 64.9122 18 62.9922 18H55.9922V4H62.9922ZM62.9722 15.52C65.4522 15.52 67.4722 13.5 67.4722 11.02C67.4722 8.54 65.4522 6.52 62.9722 6.52H58.4722V15.52H62.9722ZM75.7683 6.5C75.0683 6.5 74.4883 7.08 74.4883 7.78V9.08H83.4883V11.58H74.4883V14.22C74.4883 14.92 75.0683 15.5 75.7683 15.5H85.9883V18H75.7683C73.6883 18 72.0083 16.3 72.0083 14.22V7.78C72.0083 5.7 73.6883 4 75.7683 4H85.9883V6.5H75.7683ZM97.2844 11.54L99.2844 15.54L100.564 18.04H97.7644L96.4844 15.54L95.1444 12.92L95.0844 12.8C94.6444 12.08 93.8644 11.6 92.9644 11.6H90.4644V18.04H87.9644V4.04H96.8044C97.8444 4.04 98.7844 4.46 99.4644 5.14C100.144 5.82 100.564 6.76 100.564 7.8C100.564 9.32 99.6644 10.64 98.3644 11.24C98.0244 11.4 97.6644 11.5 97.2844 11.54ZM90.4644 9.12L96.8044 9.1C96.9844 9.1 97.1644 9.06 97.3244 8.98C97.7844 8.78 98.0844 8.32 98.0844 7.82C98.0844 7.36 97.8444 7.04 97.7044 6.9C97.5444 6.74 97.2444 6.54 96.8044 6.54H90.4644V9.12ZM119.275 4L115.995 14.98L115.095 18L113.255 15.44L110.475 11.62L107.715 15.44L105.875 17.98L104.975 14.98L101.715 4H104.315L106.835 12.44L108.955 9.5L109.355 8.94L110.495 7.38L111.635 8.94L112.035 9.5L114.155 12.44L116.675 4H119.275ZM130.566 11.54L132.566 15.54L133.846 18.04H131.046L129.766 15.54L128.426 12.92L128.366 12.8C127.926 12.08 127.146 11.6 126.246 11.6H123.746V18.04H121.246V4.04H130.086C131.126 4.04 132.066 4.46 132.746 5.14C133.426 5.82 133.846 6.76 133.846 7.8C133.846 9.32 132.946 10.64 131.646 11.24C131.306 11.4 130.946 11.5 130.566 11.54ZM123.746 9.12L130.086 9.1C130.266 9.1 130.446 9.06 130.606 8.98C131.066 8.78 131.366 8.32 131.366 7.82C131.366 7.36 131.126 7.04 130.986 6.9C130.826 6.74 130.526 6.54 130.086 6.54H123.746V9.12ZM138.375 18H135.875V4H138.375V18ZM140.367 4.02H154.347V6.52H148.607V18.02H146.107V6.52H140.367V4.02ZM160.143 6.5C159.443 6.5 158.863 7.08 158.863 7.78V9.08H167.863V11.58H158.863V14.22C158.863 14.92 159.443 15.5 160.143 15.5H170.363V18H160.143C158.063 18 156.383 16.3 156.383 14.22V7.78C156.383 5.7 158.063 4 160.143 4H170.363V6.5H160.143ZM194.325 15.5L195.605 18H192.805L191.525 15.5L188.465 9.5L185.405 15.5L184.125 18H181.325L182.605 15.5L188.465 4L194.325 15.5ZM199.313 18H196.813V4H199.313V18Z" fill="currentColor"/>
        <path d="M2.14302 13C1.39267 11.7712 0.997071 10.3588 1.00002 8.919C1.00002 4.545 4.58202 1 9.00002 1C13.418 1 17 4.545 17 8.919C17.003 10.3588 16.6074 11.7712 15.857 13M12 18L11.87 18.647C11.73 19.354 11.659 19.707 11.5 19.987C11.255 20.4186 10.8583 20.7436 10.387 20.899C10.082 21 9.72002 21 9.00002 21C8.28002 21 7.91802 21 7.61302 20.9C7.14155 20.7444 6.74483 20.4189 6.50002 19.987C6.34102 19.707 6.27002 19.354 6.13002 18.647L6.00002 18M4.38302 16.098C4.29102 15.822 4.24502 15.683 4.25002 15.571C4.25567 15.4552 4.29476 15.3435 4.36256 15.2494C4.43035 15.1554 4.52394 15.083 4.63202 15.041C4.73602 15 4.88202 15 5.17202 15H12.828C13.119 15 13.264 15 13.368 15.04C13.4762 15.0821 13.5699 15.1546 13.6377 15.2489C13.7055 15.3431 13.7445 15.455 13.75 15.571C13.755 15.683 13.709 15.821 13.617 16.098C13.447 16.609 13.362 16.865 13.231 17.072C12.957 17.5046 12.5275 17.8156 12.031 17.941C11.793 18 11.525 18 10.988 18H7.01202C6.47502 18 6.20602 18 5.96902 17.94C5.47268 17.8149 5.0432 17.5042 4.76902 17.072C4.63802 16.865 4.55302 16.609 4.38302 16.098Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.308 10.9999L7.847 6.4789C7.79642 6.3364 7.70225 6.21345 7.57787 6.12747C7.45348 6.04149 7.30518 5.99686 7.154 5.9999C7.00282 5.99686 6.85452 6.04149 6.73013 6.12747C6.60574 6.21345 6.51158 6.3364 6.461 6.4789L5 10.9999M12 5.9999V10.9999M5.538 9.4999H8.769" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>


        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-6">
            <NavigationMenuItem>
              <Link href="/" passHref>
                <span
                  className={`relative transition-all duration-300 ${
                    isActive("/")
                      ? "text-warning font-bold transform -translate-y-1 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-warning after:bottom-[-5px] after:left-0 after:shadow-[0px_4px_10px_rgba(242,201,73,0.5)]"
                      : "hover:text-warning hover:transform hover:-translate-y-1"
                  }`}
                >
                  Home
                </span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/report-history" passHref>
                <span
                  className={`relative transition-all duration-300 ${
                    isActive("/memo")
                      ? "text-warning font-bold transform -translate-y-1 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-warning after:bottom-[-5px] after:left-0 after:shadow-[0px_4px_10px_rgba(242,201,73,0.5)]"
                      : "hover:text-warning hover:transform hover:-translate-y-1"
                  }`}
                >
                  Reports
                </span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-4">
        {/* <Darkmodebutton /> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
