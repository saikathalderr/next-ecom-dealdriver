import Head from "next/head";
import Products from "~/components/Product/Products";
import { api } from "~/utils/api";

export default function Home() {
  const { data: products, isLoading, isError } = api.product.getAll.useQuery();

  return (
    <>
      <Head>
        <title>shopee - find electronics at best price</title>
        <meta name="description" content="find electronics at best price" />
      </Head>
      <main>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error</p>
        ) : (
          <Products products={products} />
        )}
      </main>
    </>
  );
}
