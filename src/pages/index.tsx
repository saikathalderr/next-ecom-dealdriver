import { createServerSideHelpers } from "@trpc/react-query/server";
import { useRouter } from "next/router";
import Products from "~/components/Product/Products";
import Head from "next/head";
import SuperJSON from "superjson";
import type { NextPageContext, InferGetServerSidePropsType } from "next";

import { api } from "~/utils/api";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import ProductsSkeleton from "~/components/skeleton/ProductsSkeleton";
import Pagination from "~/components/common/Pagination";
import { Suspense } from "react";
import Error from "next/error";

export async function getServerSideProps(context: NextPageContext) {
  const ssrPage = Number(context?.query?.page) || 1;
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: {
      prisma,
    },
    transformer: SuperJSON,
  });
  await helpers.product.getAll.prefetch({
    page: ssrPage,
  });
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
}

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const { data, isLoading, isError, error, refetch } =
    api.product.getAll.useQuery({ page });
  if (isError) return <Error statusCode={500} title={error.message} />;
  if (isLoading) {
    return <ProductsSkeleton />;
  }

  function handlePageChange(page: number) {
    void router.replace({
      query: { ...router.query, page },
    });
    void refetch();
  }

  const { products, pagination } = data;
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
        <Pagination data={pagination} onPageChange={handlePageChange} />
      </main>
    </>
  );
}
