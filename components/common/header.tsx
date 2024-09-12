import { ButtonToggleTheme } from "@/components/ui/button-toggle-theme";
import { UserNav } from "@/components/ui/user-nav";

export const Header = () => {
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
            <p className="font-medium">
              Credits: <span className="font-bold">0</span>
            </p>
          </li>
          <li>
            <UserNav />
          </li>
        </ul>
      </section>
    </header>
  );
};
