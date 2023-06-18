import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (opts) => {
    const cart = await opts.ctx.prisma.cart.findMany();
    return cart;
  }),
  count: publicProcedure.query(async (opts) => {
    const total = await opts.ctx.prisma.cart.count();
    return total;
  }),
  addToCart: publicProcedure
    .input(
      z.object({
        productId: z.number(),
        quantity: z.number().positive(),
      })
    )
    .mutation(async (opts) => {
      const { productId, quantity } = opts.input;
      const cart = await opts.ctx.prisma.cart.create({
        data: {
          product: {
            connect: {
              id: productId,
            },
          },
          quantity,
        },
      });
      return cart;
    }),
});
