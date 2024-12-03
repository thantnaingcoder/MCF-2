import React, { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col h-screen">
      <Header />
      <Suspense fallback={<PageLoading />}>
      <ScrollRestoration/>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </main>
  );
};

export default PublicLayout;
