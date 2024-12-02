import { lazy } from "react";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const CoursesPage = lazy(() => import("../features/public/pages/CoursesPage"));
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const BlogDetailPage = lazy(() =>
  import("../features/public/pages/BlogDetailPage")
);
const CoursesDetailPage = lazy(() =>
  import("../features/public/pages/CoursesDetailPage")
);
const FaqPage = lazy(() => import("../features/public/pages/FaqPage"));
const SupportPage = lazy(() => import("../features/public/pages/SupportPage"));
const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/PrivacyPolicyPage")
);
const ApplyFormPage = lazy(() =>
  import("../features/public/pages/ApplyFormPage")
);
const TermsAndConditionPage = lazy(() =>
  import("../features/public/pages/TermsAndConditionPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "courses",
    element: <CoursesPage />,
  },
  {

    path: "courses-detail",
    element: <CoursesDetailPage />,

    path: "courses/course-detail/:slug",
    element: <CoursesDetailPage />

  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/:slug",
    element: <BlogDetailPage />,
  },

  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "faq",
    element: <FaqPage />,
  },
  {
    path: "support",
    element: <SupportPage />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "termsandcondition",
    element: <TermsAndConditionPage />,
  },
  {
    path: "applyform",
    element: <ApplyFormPage />,
  },
];

export default publicRoute;
