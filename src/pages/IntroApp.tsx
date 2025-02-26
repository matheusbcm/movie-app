import AuthButtons from "../components/AuthButtons";
import CarouselComponent from "../components/CarouselComponent";
import WelcomeMessage from "../components/WelcomeMessage";

const IntroApp = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col  items-center p-1">
        {/* <h1>IntroApp</h1> */}
        <CarouselComponent />
        <WelcomeMessage />
        <AuthButtons />
      </div>
    </>
  );
};

export default IntroApp;
