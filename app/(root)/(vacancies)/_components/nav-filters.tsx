import React from "react";

import { ComboboxCategories } from "./combo-categories";
import ExperienceLevel from "./experience-level";

import { Separator } from "@/components/ui/separator";

export const NavFilters = () => {
  return (
    <div className="w-64">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">Filtros</h1>
      </div>
      <ul className="space-y-8">
        <li>
          <ComboboxCategories />
        </li>
        <li>
          <Separator />
        </li>
        <li>
          <ExperienceLevel />
        </li>
      </ul>
    </div>
  );
};
