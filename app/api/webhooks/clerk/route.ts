import { Webhook } from "svix";
import { headers } from "next/headers";
import { auth, WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Funcion que deseamos hacer al registrarse un usuario nuevo con Clerk
  const eventType = evt.type;

  if (eventType === "user.created" || eventType === "user.updated") {
    try {
      const {
        id,
        first_name,
        last_name,
        username,
        email_addresses,
        image_url,
      } = evt.data;

      await db.user.upsert({
        where: { userId: id },
        update: {
          firstName: first_name ?? "",
          lastName: last_name ?? "",
          email: email_addresses[0].email_address,
          photo: image_url ?? "",
        },
        create: {
          userId: id,
          firstName: first_name ?? "",
          lastName: last_name ?? "",
          username: username ?? "",
          email: email_addresses[0].email_address,
          photo: image_url ?? "",
        },
      });

      // const user = await db.user.findFirst({
      //   where: {
      //     userId: id,
      //   },
      // });

      // if (!user) {
      //   await db.user.create({
      //     data: {
      //       userId: id,
      //       firstName: first_name ?? "",
      //       lastName: last_name ?? "",
      //       username: username ?? "",
      //       email: email_addresses[0].email_address,
      //       photo: image_url ?? "",
      //     },
      //   });
      // }

      // TODO: SI EL USUARIO EXISTE DEBEMOS ACTUALIZAR SU INFORMACIÓN

      return new Response("Usuario creado", { status: 200 });
    } catch (error) {
      console.log("ERROR_WEBHOOK_CREATE_USER", error);
      return new Response("Error del servidor", { status: 500 });
    }
  }

  if (eventType === "user.deleted") {
    try {
      const { id } = evt.data;

      await db.user.delete({
        where: {
          userId: id,
        },
      });

      return new Response("Usuario eliminado", { status: 200 });
    } catch (error) {
      console.log("ERROR_WEBHOOK_DELETE_USER", error);
      return new Response("Error del servidor", { status: 500 });
    }
  }

  if (
    eventType === "organization.created" ||
    eventType === "organization.updated"
  ) {
    try {
      const { userId } = auth();
      const { id, name, image_url, slug } = evt.data;

      if (!userId) {
        return new NextResponse("Sin autorización", { status: 403 });
      }

      await db.organization.upsert({
        where: { orgId: id },
        update: {
          name: name ?? "",
          image: image_url ?? "",
          slug: slug ?? "",
        },
        create: {
          orgId: id,
          userId,
          name: name ?? "",
          image: image_url ?? "",
          slug: slug ?? "",
        },
      });

      return new Response("Organización creada", { status: 200 });
    } catch (error) {
      console.log("ERROR_WEBHOOK_CREATE_ORGANIZATION", error);
      return new Response("Error del servidor", { status: 500 });
    }
  }
}
