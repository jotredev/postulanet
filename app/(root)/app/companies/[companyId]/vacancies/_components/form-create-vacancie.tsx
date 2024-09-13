"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";

import { formCreateVacancie } from "@/types/vacancies";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormCreateVacancie = () => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const form = useForm<z.infer<typeof formCreateVacancie>>({
    resolver: zodResolver(formCreateVacancie),
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      location: "",
      salary: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formCreateVacancie>) => {
    try {
      setIsLoading(true);
      await axios.post(`/api/${params.companyId}/vacancies`, values);
      toast.success("Vacante creada");
      // TODO: Redirect to vacancies page
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Desarrollador web" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shortDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción corta</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                La descripción corta debe contener menos de 100 caracteres
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ubicación</FormLabel>
              <FormControl>
                <Input placeholder="Chihuahua, México" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salario</FormLabel>
              <FormControl>
                <Input placeholder="10,000" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid}>
          {isLoading ? (
            <>
              <i className="w-5 h-5 mr-3 fi fi-rr-loading animate-spin"></i>
              Creando vacante...
            </>
          ) : (
            <>
              <p>Crear vacante</p>
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default FormCreateVacancie;
