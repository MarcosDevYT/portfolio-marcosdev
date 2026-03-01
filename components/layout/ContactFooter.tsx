"use client";

import { footerItems, socialLinks } from "@/lib/constans/const";
import { useCursorHover } from "@/lib/hooks/useCursorProvider";
import RevealText from "../animate-components/RevealText";
import Container from "./Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  lookingFor: z.string().min(5, "Por favor describe qué buscas"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactFooter = () => {
  const { handleDesapearMouseEnter, handleDesapearMouseLeave } =
    useCursorHover();
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsPending(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("lookingFor", data.lookingFor);

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert(result.error || "Ocurrió un error");
    }
    setIsPending(false);
  };

  return (
    <footer
      id="contact"
      className="w-full flex items-center justify-center py-24 px-4 md:px-8 lg:px-12 2xl:px-16 text-center flex-col pb-4"
    >
      <div className="w-full flex justify-end">
        <h2 className="md:text-start text-3xl italic border-t-2 border-light-gray w-full md:w-[60%] pt-8">
          Contáctame
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start pt-12"
      >
        <div className="w-full h-9 sm:h-16 md:h-18 lg:h-20 xl:h-26 2xl:h-32 relative">
          <span className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl absolute top-0 left-[32%] sm:left-[36%] md:left-[40%] xl:left-[40%]">
            Hola,
          </span>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex w-full">
            <label
              className=" text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap leading-none"
              htmlFor="name"
            >
              MI NOMBRE ES
            </label>
            <input
              className={`border-b-2 ${
                errors.name ? "border-red-500" : "border-light-gray"
              } w-full mb-0 2xl:mb-4 ml-2 lg:text-xl 2xl:text-2xl outline-none text-center 2xl:pt-16 bg-transparent`}
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-sm self-end">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex w-full">
            <label
              className=" text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap leading-none"
              htmlFor="email"
            >
              ESTE ES MI EMAIL
            </label>
            <input
              className={`border-b-2 ${
                errors.email ? "border-red-500" : "border-light-gray"
              } w-full mb-0 2xl:mb-4 ml-2 lg:text-xl 2xl:text-2xl outline-none text-center 2xl:pt-16 bg-transparent`}
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm self-end">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex w-full">
            <label
              className=" text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-nowrap leading-none"
              htmlFor="lookingFor"
            >
              ESTOY BUSCANDO
            </label>
            <input
              className={`border-b-2 ${
                errors.lookingFor ? "border-red-500" : "border-light-gray"
              } w-full mb-0 2xl:mb-4 ml-2 lg:text-xl 2xl:text-2xl outline-none text-center 2xl:pt-16 bg-transparent`}
              type="text"
              id="lookingFor"
              {...register("lookingFor")}
            />
          </div>
          {errors.lookingFor && (
            <span className="text-red-500 text-sm self-end">
              {errors.lookingFor.message}
            </span>
          )}
        </div>

        <div className="flex flex-wrap w-full justify-end gap-36 pt-16">
          <button
            type="submit"
            disabled={isPending}
            className="size-32 md:size-48 xl:size-64 flex flex-col items-center justify-center text-2xl md:text-3xl font-satoshi italic font-medium bg-foreground hover:bg-foreground/80 rounded-full text-background cursor-pointer disabled:opacity-50 transition-all"
            onMouseEnter={handleDesapearMouseEnter}
            onMouseLeave={handleDesapearMouseLeave}
          >
            {isPending ? (
              <Loader2 className="size-12 animate-spin" />
            ) : submitted ? (
              <span className="text-xl">¡Enviado!</span>
            ) : (
              "Enviar"
            )}
          </button>
          <ul className="flex flex-col gap-4 items-start justify-start w-72 md:w-80">
            {footerItems.map((item) => (
              <li
                className="text-3xl lg:text-5xl h-10 lg:h-14 overflow-clip border-b-4"
                key={item.text}
              >
                <RevealText
                  text={item.text}
                  to={item.link}
                  delayPerLetter={12}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 items-start justify-start w-72 md:w-80">
            {socialLinks.map((link) => (
              <li
                className="text-3xl lg:text-5xl h-10 lg:h-14 overflow-clip border-b-4"
                key={link.title}
              >
                <RevealText
                  text={link.title}
                  to={link.href}
                  delayPerLetter={12}
                />
              </li>
            ))}
          </ul>
        </div>
      </form>

      <div className="w-full flex justify-center pt-32">
        <p className="text-lg md:text-xl lg:text-2xl font-satoshi italic">
          Hecho por Marcos Morua 2026
        </p>
      </div>
    </footer>
  );
};
