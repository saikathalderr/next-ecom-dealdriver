import { productRouter } from "~/server/api/routers/products";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  product: productRouter,
});

export type AppRouter = typeof appRouter;
