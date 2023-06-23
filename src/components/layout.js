import Footer from "./footer";
import Head from "next/head";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mandalorian</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
