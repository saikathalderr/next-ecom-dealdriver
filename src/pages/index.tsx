import { createServerSideHelpers } from "@trpc/react-query/server";
import Products from "~/components/Product/Products";
import Head from "next/head";
import SuperJSON from "superjson";
import type { InferGetServerSidePropsType } from "next";

import { api } from "~/utils/api";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import ProductsSkeleton from "~/components/Product/ProductsSkeleton";
import { Suspense } from "react";

export async function getServerSideProps() {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {
      prisma,
    },
    transformer: SuperJSON,
  });
  await helpers.product.getAll.prefetch();
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
}

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data: products, isError } = api.product.getAll.useQuery();
  if (isError || !products) {
    return <div>error</div>;
  }
  return (
    <>
      <Head>
        <title>shopee - find electronics at best price</title>
        <meta name="description" content="find electronics at best price" />
      </Head>
      <main>
        <Suspense fallback={<ProductsSkeleton />}>
          <Products products={products} />
        </Suspense>
      </main>
    </>
  );
}
