import axios from "axios";
import { prisma } from "~/server/db";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type ApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const noProductErrorMessage = "No product found to index";

async function getData({ skip, limit }: { skip?: number; limit?: number }) {
  try {
    let api = `https://dummyjson.com/products`;
    if (skip && skip > 0) api += `?skip=${skip}`;
    if (limit && limit > 0) api += `&limit=${limit}`;

    const resp = await axios.get<ApiResponse>(api);
    return resp;
  } catch (error) {
    console.error(error);
  }
}

async function indexProducts(products: Product[]) {
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
  }
}

async function run() {
  try {
    let totalProducts = 0;
    let indexed = 0;
    const resp = await getData({});
    if (!resp) throw new Error(noProductErrorMessage);

    const data = resp?.data;

    const { products, total } = data;
    totalProducts = total;

    await indexProducts(products);
    indexed += products.length;

    while (indexed < totalProducts) {
      const resp = await getData({ skip: indexed });
      if (!resp) throw new Error(noProductErrorMessage);
      const data = resp?.data;
      const { products } = data;
      await indexProducts(products);
      indexed += products.length;
    }

    return `Indexed ${indexed} products`;
  } catch (error) {
    throw error;
  }
}

async function cleanup() {
  await prisma.$disconnect();
}

run()
  .then(async (resp) => {
    console.log(resp);
    await cleanup();
  })
  .catch(async (e) => {
    console.error(e);
    await cleanup();
    process.exit(1);
  });
