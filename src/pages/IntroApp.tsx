import AuthButtons from "../components/AuthButtons";
import CarouselComponent from "../components/CarouselComponent";
import WelcomeMessage from "../components/WelcomeMessage";

const IntroApp = () => {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex flex-col  items-center">
        {/* <h1>IntroApp</h1> */}
        <CarouselComponent />
        <WelcomeMessage />
        <AuthButtons />
      </div>
    </>
  );
};

export default IntroApp;
