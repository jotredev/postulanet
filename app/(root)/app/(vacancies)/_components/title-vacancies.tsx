"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

const frameworks = [
  {
    value: "more-recent",
    label: "Más recientes",
  },
  {
    value: "more-older",
    label: "Más antiguos",
  },
];

export const Title = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold inline-flex items-center gap-x-2">
          Resultados{" "}
          <p className="text-muted-foreground text-sm font-normal">(2,569)</p>
        </h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild className="mt-3">
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Selecciona el orden..."}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Buscar..." className="h-9" />
              <CommandList>
                <CommandEmpty>Sin resultados.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost">
          <i className="fi fi-rr-list"></i>
        </Button>
        <Button variant="secondary">
          <i className="fi fi-rr-apps"></i>
        </Button>
      </div>
    </div>
  );
};
