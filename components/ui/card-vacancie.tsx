import {
  Bookmark,
  CircleDollarSign,
  Clock9Icon,
  Flag,
  MapPin,
  MoreVertical,
  Star,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./badge";

export const CardVacancie = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-xs">Nivel básico</p>
          <div className="flex items-center gap-x-2">
            <p className="text-muted-foreground text-xs">Hace 13 minutos</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-x-2">
                  <Star className="h-4 w-4" />
                  Favoritos
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-x-2">
                  <Bookmark className="h-4 w-4" />
                  Guardar
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-x-2">
                  <Flag className="h-4 w-4" />
                  Reportar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CardTitle className="line-clamp-1">
          Desarrollador frontend SR
        </CardTitle>
        <ul className="flex items-center mb-5">
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-muted-foreground text-xs">
              Chihuahua, México
            </span>
          </li>
          <li>
            <Separator orientation="vertical" className="mx-2 h-4" />
          </li>
          <li className="flex items-center gap-2">
            <Badge className="flex items-center gap-x-2" variant="success">
              <Clock9Icon className="h-4 w-4" />
              Aún seleccionando
            </Badge>
          </li>
        </ul>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui
          voluptas a quas? Laboriosam quo deleniti ipsum quod, nihil iusto ea
          atque porro mollitia ab eligendi sit, nam repellat, assumenda
          dignissimos quas dicta! Optio, harum atque fugiat ex aspernatur quia
          vel magni sit commodi nobis numquam laudantium recusandae, soluta
          ipsam.
        </CardDescription>
        <ul className="inline-flex flex-wrap items-center gap-1">
          <li>
            <Badge variant="outline">UI Design</Badge>
          </li>
          <li>
            <Badge variant="outline">Web Design</Badge>
          </li>
          <li>
            <Badge variant="outline">Desarrollo web</Badge>
          </li>
          <li>
            <Badge variant="outline">Frontend</Badge>
          </li>
          <li>
            <Badge variant="outline">React</Badge>
          </li>
          <li>
            <Badge variant="outline">Next.js</Badge>
          </li>
          <li>
            <Badge variant="outline">Tailwind CSS</Badge>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2">
            <CircleDollarSign className="w-6 h-6" />
            <span className="font-bold text-xl">$35,000</span>
            <sup className="text-muted-foreground">MXN</sup>
          </li>
          <li className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <span className="font-bold text-xl">200</span>
          </li>
        </ul>
        <div>
          <Button>Aplicar ahora</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
