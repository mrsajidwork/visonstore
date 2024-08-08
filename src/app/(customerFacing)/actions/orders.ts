"use server";

import db from "@/db/db";

export async function userOrderExists(email: string, productId: string) {
  return (
    (await db.order.findFirst({
      where: { User: { email }, productId },
      select: { id: true },
    })) != null
  )
}
