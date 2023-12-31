import "@fortawesome/fontawesome-svg-core/styles.css";
import { type AppType } from "next/app";
import { Toaster } from "react-hot-toast";
import Header from "~/components/common/Header";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-3 py-3 md:py-10 lg:px-40">
        <Component {...pageProps} />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
};

export default api.withTRPC(MyApp);
