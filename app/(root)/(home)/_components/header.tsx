"use client";

import Link from "next/link";
import { SignOutButton, useSession } from "@clerk/nextjs";

export const HeaderHome = () => {
  const { isSignedIn } = useSession();

  return (
    <header className="flex items-center justify-between h-20 px-5">
      <section>LOGO</section>
      <section>
        {isSignedIn ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/sign-in">Iniciar sesión</Link>
            <Link href="/sign-up">Registrarme</Link>
          </div>
        )}
      </section>
    </header>
  );
};
