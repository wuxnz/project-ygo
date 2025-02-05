import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import NavBar from "./_components/navigation/NavBar";
import { WavyBackground } from "@/components/ui/wavy-background";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="relative h-full">
        <NavBar />
        <div className="bg-background flex h-[calc(100%-65px)] flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <WavyBackground>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                  Top Deck Community Circuit
                </h1>
                <div className="flex w-4/6 flex-col items-center justify-center gap-4">
                  <p className="line-clamp-2 text-center text-2xl">
                    Welcome to Top Deck Community Circuit, a platforn for
                    Yu-Gi-Oh tournaments, wagering, deckbuilding, and more!
                  </p>
                </div>
              </div>
            </WavyBackground>
            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">First Steps →</h3>
                <div className="text-lg">
                  Just the basics - Everything you need to know to set up your
                  database and authentication.
                </div>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
                href="https://create.t3.gg/en/introduction"
                target="_blank"
              >
                <h3 className="text-2xl font-bold">Documentation →</h3>
                <div className="text-lg">
                  Learn more about Create T3 App, the libraries it uses, and how
                  to deploy it.
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl text-white">
                {hello ? hello.greeting : "Loading tRPC query..."}
              </p>

              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-2xl text-white">
                  {session && <span>Logged in as {session.user?.name}</span>}
                </p>
                <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                  {session ? "Sign out" : "Sign in"}
                </Link>
              </div>
            </div>

            {session?.user && <LatestPost />} */}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
