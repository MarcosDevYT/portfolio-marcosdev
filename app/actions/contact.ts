"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  lookingFor: z.string().min(5, "Por favor describe qué buscas"),
});

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    lookingFor: formData.get("lookingFor"),
  });

  if (!validatedFields.success) {
    return {
      error: "Datos inválidos",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const contact = await prisma.contact.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        lookingFor: validatedFields.data.lookingFor,
      },
    });

    return { success: true, id: contact.id };
  } catch (error) {
    console.error("Error creating contact:", error);
    return { error: "Error al guardar el mensaje" };
  }
}
