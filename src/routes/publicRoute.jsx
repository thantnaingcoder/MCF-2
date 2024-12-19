

import AboutUsPage from "../features/public/pages/AboutUsPage";
import ContactUsPage from "../features/public/pages/ContactUsPage";
import HomePage from "../features/public/pages/HomePage";
import CoursesPage from "../features/public/pages/CoursesPage";
import BlogPage from "../features/public/pages/BlogPage";
import BlogDetailPage from "../features/public/pages/BlogDetailPage";
import CoursesDetailPage from "../features/public/pages/CoursesDetailPage";
import FaqPage from "../features/public/pages/FaqPage";
import SupportPage from "../features/public/pages/SupportPage";
import PrivacyPolicyPage from "../features/public/pages/PrivacyPolicyPage";
import ApplyFormPage from "../features/public/pages/ApplyFormPage";
import TermsAndConditionPage from "../features/public/pages/TermsAndConditionPage";
import ThankPage from "../features/public/pages/ThankPage";

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
    path: "courses/course-detail/:slug",
    element: <CoursesDetailPage />,
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
  {
    path: "thank-you",
    element: <ThankPage />,
  },
];

export default publicRoute;
