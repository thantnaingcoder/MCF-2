import React, { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageLoading from "../../../components/PageLoading";
import BackToTop from "../../../components/customComponents/BackToTop";
import BackToTopButton from "../../../components/customComponents/BackToTopButton";

const PublicLayout = () => {
  return (
    <main className=" flex flex-col h-screen">
      <Header />
      <Suspense fallback={<PageLoading />}>
      <ScrollRestoration/>
        <Outlet />
         <BackToTop><BackToTopButton/></BackToTop>
      </Suspense>
      {/* <Footer /> */}
    </main>
  );
};

export default PublicLayout;
