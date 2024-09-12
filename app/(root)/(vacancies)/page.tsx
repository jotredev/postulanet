import { Title } from "./_components/title-vacancies";
import { CardVacancie } from "@/components/ui/card-vacancie";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-20">
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
        <CardVacancie />
      </div>
    </div>
  );
};

export default HomePage;
