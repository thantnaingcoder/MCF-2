import { Link } from "react-router-dom";

const services = [
  "Business Strategy",
  "Development",
  "Web Design",
  "Digital Marketing",
  "Content Writing",
  "Language",
];
const quickLinks = [
  "About Us",
  "Contact us",
  "Blog",
  "Privacy policy",
  "Terms & condition",
];
const community = ["Supports", "Sign up student", "Sign up instructor", "Faqs"];

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Our Service</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Community</h3>
              <ul className="space-y-2">
                {community.map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-300 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">App available on</h3>
              <div className="flex space-x-4">
                <Link href="#">
                  <img
                    src="/placeholder.svg?height=40&width=120"
                    alt="Play Store"
                    className="h-10"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/placeholder.svg?height=40&width=120"
                    alt="App Store"
                    className="h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
