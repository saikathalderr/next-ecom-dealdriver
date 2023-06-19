import { createTRPCRouter } from "~/server/api/trpc";

import { cartRouter } from "./routers/cart";
import { productRouter } from "./routers/products";
import { orderRouter } from "./routers/order";

export const appRouter = createTRPCRouter({
  product: productRouter,
  order: orderRouter,
  cart: cartRouter,
});

export type AppRouter = typeof appRouter;
