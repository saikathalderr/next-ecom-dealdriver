import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "~/components/common/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-3 py-3 md:py-10 lg:px-40">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
