"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Avatar,
} from "@heroui/react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();

  return (
    <Navbar className="bg-background-light/50 isolate shadow-lg ring-1 ring-black/5">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">TDCC</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem isActive={pathName === "/"}>
          <Link
            href="/"
            aria-current={pathName === "/" ? "page" : undefined}
            color={pathName === "/" ? "primary" : "foreground"}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/tournaments"}>
          <Link
            aria-current={pathName === "/tournaments" ? "page" : undefined}
            color={pathName === "/tournaments" ? "primary" : "foreground"}
            href="/tournaments"
          >
            Tournaments
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/decks"}>
          <Link
            aria-current={pathName === "/decks" ? "page" : undefined}
            color={pathName === "/decks" ? "primary" : "foreground"}
            href="/decks"
          >
            Decks
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathName === "/wagers"}>
          <Link
            aria-current={pathName === "/wagers" ? "page" : undefined}
            color={pathName === "/wagers" ? "primary" : "foreground"}
            href="/wagers"
          >
            Wagers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => {
              if (session) {
                router.push("/api/auth/signout");
              } else {
                router.push("/api/auth/signin");
              }
            }}
          >
            {session ? "Logout" : "Sign In with Discord"}
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Avatar
            alt="Profile"
            name={session?.user?.name ?? ""}
            src={session?.user?.image ?? ""}
          />
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
