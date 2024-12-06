import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";
const SignInPage = lazy(() => import("../features/auth/pages/SignInPage"));
const SignUpPage = lazy(() => import("../features/auth/pages/SignUpPage"));

const ApplyFormPage = lazy(() =>
  import("../features/auth/pages/ApplyFormPage")
);

const authRoute = [
  {
    path: "signin",
    element: (
      <Suspense fallback={<PageLoading />}>
        <SignInPage />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<PageLoading />}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: "applynow",
    element: (
      <Suspense fallback={<PageLoading />}>
        <ApplyFormPage />
      </Suspense>
    ),
  },
];

export default authRoute;
