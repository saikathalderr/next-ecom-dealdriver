import { cartRouter } from "./routers/cart";
import { orderRouter } from "./routers/order";
import { productRouter } from "./routers/products";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  product: productRouter,
  order: orderRouter,
  cart: cartRouter,
});

export type AppRouter = typeof appRouter;
