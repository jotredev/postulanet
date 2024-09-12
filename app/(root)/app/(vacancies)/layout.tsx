import { ReactNode } from "react";
import { SearchVacancie } from "./_components/search-vacancie";
import { NavFilters } from "./_components/nav-filters";

const VacanciesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <SearchVacancie />
      <div className="mt-5 flex items-start gap-4 h-full">
        <NavFilters />
        <div className="flex-1 h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default VacanciesLayout;
