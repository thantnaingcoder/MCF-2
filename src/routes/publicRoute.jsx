import { lazy } from "react";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const CoursesPage = lazy(() => import("../features/public/pages/CoursesPage"));
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));


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
    element: <CoursesPage />
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  }
  
];

export default publicRoute;
