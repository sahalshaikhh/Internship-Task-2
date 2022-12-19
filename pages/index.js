import MainFooter from "@components/common/footer/mainFooter";
import LandingPage from "@components/pages/landingPage";

export default function LandingScreen() {
  return (
    <div className=" ec-w-screen ec-h-screen ec-flex ec-flex-col">
      <LandingPage />
      <MainFooter />
    </div>
  );
}
