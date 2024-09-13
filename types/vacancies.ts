import { z } from "zod";

export const formCreateVacancie = z.object({
  title: z.string().min(2, {
    message: "El título debe contener al menos 2 caracteres",
  }),
  shortDescription: z
    .string()
    .min(2, {
      message: "La descripción corta debe contener al menos 2 caracteres",
    })
    .max(100, {
      message: "La descripción corta debe contener menos de 100",
    }),
  description: z.string().min(2, {
    message: "La descripción debe contener al menos 2 caracteres",
  }),
  location: z.string().min(2, {
    message: "La ubicación debe contener al menos 2 caracteres",
  }),
  salary: z.coerce.number().min(1, {
    message: "El salario debe ser mayor a 0",
  }),
});
