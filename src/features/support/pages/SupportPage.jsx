import Header from "../../support/components/Header";
import HeroSection from "../../support/components/HeroSection";
import HelpCategories from "../../support/components/HelpCategories";
import FaqSection from "../../support/components/FaqSection";
import Footer from "../../support/components/Footer";

const SupportPage = () => {
  return (
    <main className=" min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Help Categories */}
      <HelpCategories />

      {/* FAQ Section */}

      <FaqSection />

      {/* Footer */}

      <Footer />
    </main>
  );
};

export default SupportPage;
