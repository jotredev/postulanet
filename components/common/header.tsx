"use client";

import { useEffect, useState } from "react";
import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";
import { toast } from "sonner";

import { getCredits } from "@/actions/user";

import { ButtonToggleTheme } from "@/components/ui/button-toggle-theme";
import { Loader } from "lucide-react";

export const Header = () => {
  const [credits, setCredits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { response, credits } = await getCredits();
      if (response === "success") {
        setCredits(credits);
      } else {
        toast.error("Error al obtener los créditos");
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <header className="h-[7dvh] xl:h-[10dvh] flex items-center justify-between px-5">
      <section>
        <h2 className="text-2xl font-bold tracking-tight">
          Bienvenido, {user?.firstName} 👋
        </h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </section>
      <section>
        <ul className="inline-flex items-center gap-4">
          <li>
            <p className="inline-flex items-center gap-2 font-medium">
              Credits:{" "}
              <span className="font-bold">
                {isLoading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  credits
                )}
              </span>
            </p>
          </li>
          <li>
            <ButtonToggleTheme />
          </li>
          <li>
            <OrganizationSwitcher />
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </section>
    </header>
  );
};
