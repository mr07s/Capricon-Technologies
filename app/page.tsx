import AchievementComp from "@/components/achievement_comp";
import BlogComp from "@/components/blog_com";
import Card from "@/components/card";
import LandinComp from "@/components/landing_comp";
import ServeiceComp from "@/components/serveice_providing_comp";

export default function Home() {
  return (
    <div>
      <LandinComp />
      <ServeiceComp />
      <AchievementComp />
      <BlogComp />
    </div>
  );
}
