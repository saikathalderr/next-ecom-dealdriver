import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import Header from "~/components/common/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-40 py-10">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
