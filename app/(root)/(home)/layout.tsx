import { ReactNode } from "react";
import { HeaderHome } from "./_components/header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderHome />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
