"use server"

import { prisma } from "@repo/db";

export async function getData() {
  const user = await prisma.user.findFirst({
    select: {
      name: true,
      id: true,
    },
  });

  console.log(user?.id);

  return user;
}
