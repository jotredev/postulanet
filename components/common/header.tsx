"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

import axios from "axios";

import { ButtonToggleTheme } from "@/components/ui/button-toggle-theme";
import { Loader } from "lucide-react";

export const Header = () => {
  const [credits, setCredits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/api/auth");
        setCredits(data.user.credits);
      } catch (error) {
        console.log("[ERROR_GET_AUTH]", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <header className="h-[7dvh] xl:h-[10dvh] flex items-center justify-between px-5">
      <section>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </section>
      <section>
        <ul className="inline-flex items-center gap-4">
          <li>
            <ButtonToggleTheme />
          </li>
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
            <UserButton />
          </li>
        </ul>
      </section>
    </header>
  );
};
