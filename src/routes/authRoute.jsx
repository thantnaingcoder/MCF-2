import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
import ApplyNowPage from "../features/auth/pages/ApplyNowPage";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));


const authRoute = [
  {
    path: "login",
    element: (
      <Suspense fallback={<PageLoading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "applynow",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ApplyNowPage />
      </Suspense>
    ),
  },
];

export default authRoute;
