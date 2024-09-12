"use client";

import Link from "next/link";

import { Logo } from "@/components/common/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-full bg-secondary dark:bg-background p-7 flex flex-col justify-between dark:border-r overflow-auto">
      <section>
        <div>
          <Logo />
        </div>
        <nav>
          <ul>
            <li className="my-5 text-xs uppercase font-medium text-muted-foreground">
              Menu
            </li>
            <li>
              <Link
                href="/app"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/" && "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-search"></i>
                <span>Explorar</span>
              </Link>
            </li>
            <li className="my-5 text-xs uppercase font-medium text-muted-foreground">
              Empresas
            </li>
            <li>
              <Link
                href="/vacancies"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/vacancies" &&
                    "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-employee-man"></i>
                <span>Vacantes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/applications"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/applications" &&
                    "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-users-alt"></i>
                <span>Postulaciones</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <Link
                href="/policies"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/policies" &&
                    "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-leadership-alt"></i>
                <span>Políticas</span>
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/help" && "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-interrogation"></i>
                <span>Ayuda</span>
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={cn(
                  "flex items-center gap-4 text-sm py-2 px-4 hover:bg-background dark:hover:bg-secondary/50 transition-colors duration-300 rounded-lg mb-1",
                  pathname === "/support" &&
                    "bg-background dark:bg-secondary/50"
                )}
              >
                <i className="fi fi-rr-user-headset"></i>
                <span>Soporte</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};
