import { Link } from "react-router-dom";
import {
  UserIcon,
  AlertTriangleIcon,
  ShoppingCartIcon,
  ShieldCheckIcon,
  RocketIcon,
  GraduationCapIcon,
} from "lucide-react";

const categories = [
  {
    title: "My account",
    description: "Create and manage your pathway academy account",
    href: "#",
    icon: <UserIcon className="mx-auto h-8 w-8" />,
  },
  {
    title: "Troubleshooting",
    description: "Experiencing a technical issue? Check Here",
    href: "#",
    icon: <AlertTriangleIcon className="mx-auto h-8 w-8" />,
  },
  {
    title: "Purchase/Refund",
    description:
      "Learn about purchasing courses, how to send gifts and refunds",
    href: "#",
    icon: <ShoppingCartIcon className="mx-auto h-8 w-8" />,
  },
  {
    title: "Enrollment",
    description: "Find courses to take and learn about enrollment options",
    href: "#",
    icon: <GraduationCapIcon className="mx-auto h-8 w-8" />,
  },
  {
    title: "Trust & Safety",
    description: "Trust & safety information and reporting",
    href: "#",
    icon: <ShieldCheckIcon className="mx-auto h-8 w-8" />,
  },
  {
    title: "Getting Start",
    description: "Learn how our education works and how to start learning",
    href: "#",
    icon: <RocketIcon className="mx-auto h-8 w-8" />,
  },
];

const HelpCategories = () => {
  return (
    <div>
      {/* Help Categories */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-lg bg-emerald-50 p-6 transition-colors hover:bg-emerald-100"
              >
                <div className="mb-4 text-center">{category.icon}</div>
                <h2 className="mb-2 text-center text-xl font-semibold">
                  {category.title}
                </h2>
                <p className="text-center text-sm text-gray-600">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCategories;
