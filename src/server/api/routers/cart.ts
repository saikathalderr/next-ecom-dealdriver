import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cartRouter = createTRPCRouter({
  getAll: publicProcedure.query(async (opts) => {
    const cart = await opts.ctx.prisma.cart.findMany({
      include: {
        product: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    const totalCartItem = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return { cart, totalCartItem };
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
      const hasProduct = await opts.ctx.prisma.cart.findFirst({
        where: {
          productId,
        },
      });
      if (hasProduct) {
        const cart = await opts.ctx.prisma.cart.update({
          where: {
            id: hasProduct.id,
          },
          data: {
            quantity: hasProduct.quantity + quantity,
          },
        });
        return cart;
      }
      const cart = await opts.ctx.prisma.cart.create({
        data: {
          productId,
          quantity,
        },
      });
      return cart;
    }),
  updateCart: publicProcedure
    .input(
      z.object({
        id: z.number(),
        quantity: z.number().positive(),
      })
    )
    .mutation(async (opts) => {
      const { id, quantity } = opts.input;
      const cart = await opts.ctx.prisma.cart.update({
        where: {
          id,
        },
        data: {
          quantity,
        },
      });
      return cart;
    }),
  deleteFromCart: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async (opts) => {
      const { id } = opts.input;
      const cart = await opts.ctx.prisma.cart.delete({
        where: {
          id,
        },
      });
      return cart;
    }),
});
