import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (opts) => {
    const orders = await opts.ctx.prisma.order.findMany();
    return orders;
  }),
  checkout: publicProcedure
    .input(
      z.object({
        items: z.array(
          z.object({
            productId: z.number(),
            quantity: z.number(),
          })
        ),
      })
    )
    .mutation(async (opts) => {
      const { items } = opts.input;
      const orders = await opts.ctx.prisma.order.createMany({
        data: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
      });
      return orders;
    }),
});
