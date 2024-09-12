import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchVacancie = () => {
  return (
    <div className="flex items-center gap-1">
      <section className="flex-1">
        <Input placeholder="Buscar..." />
      </section>
      <section>
        <Button>Buscar vacantes</Button>
      </section>
    </div>
  );
};
