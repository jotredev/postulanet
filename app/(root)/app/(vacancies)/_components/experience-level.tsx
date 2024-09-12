import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ExperienceLevel = () => {
  return (
    <>
      <h3 className="font-bold mb-5">Nivel de experiencia</h3>
      <ul className="space-y-5">
        <li className="flex items-center gap-x-2">
          <Checkbox id="experience-any" />
          <Label htmlFor="experience-any">Sin experiencia</Label>
        </li>
        <li className="flex items-center gap-x-2">
          <Checkbox id="experience-basic" />
          <Label htmlFor="experience-basic">Básico</Label>
        </li>
        <li className="flex items-center gap-x-2">
          <Checkbox id="experience-medium" />
          <Label htmlFor="experience-medium">Intermedio</Label>
        </li>
        <li className="flex items-center gap-x-2">
          <Checkbox id="experience-expert" />
          <Label htmlFor="experience-expert">Experto</Label>
        </li>
      </ul>
    </>
  );
};

export default ExperienceLevel;
