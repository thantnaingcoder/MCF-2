import PageLayout from "../../features/public/components/PageLayout";
import AchievementContainer from "./AchievementContainer";

const AchievementSection = () => {
  return (
    <section className="pb-10 md:pb-20 xl:pb-32">
      <PageLayout>
        <AchievementContainer />
      </PageLayout>
    </section>
  );
};

export default AchievementSection;
