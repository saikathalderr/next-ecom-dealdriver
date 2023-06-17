import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { decodeSlug } from "~/utils";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
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
