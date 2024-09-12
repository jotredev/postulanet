import { ReactNode } from "react";

import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full">
        <Header />
        <main className="h-[93dvh] xl:h-[90dvh] p-5">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
