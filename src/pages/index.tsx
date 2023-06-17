import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  // const { data: products, isLoading } = api.product.getAll.useQuery();

  return (
    <>
      <Head>
        <title>shopee - find electronics at best price</title>
        <meta name="description" content="find electronics at best price" />
      </Head>
      <main className="container mx-auto"></main>
    </>
  );
}
