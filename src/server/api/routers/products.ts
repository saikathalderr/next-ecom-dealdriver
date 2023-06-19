import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { decodeSlug } from "~/utils";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        page: z.number().optional().default(1),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      const { page } = input;
      const limit = 20;
      const skip = (page - 1) * limit;

      const products = await opts.ctx.prisma.product.findMany({
        skip,
        take: limit,
      });
      const total = await opts.ctx.prisma.product.count();
      const totalPages = Math.ceil(total / limit);
      const pagination = {
        page,
        totalPages,
        total,
      };
      return {
        products,
        pagination,
      };
    }),
  getOne: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async (opts) => {
      const { input } = opts;
      const product = await opts.ctx.prisma.product.findFirst({
        where: {
          title: decodeSlug(input.slug),
        },
      });
      return product;
    }),
});
