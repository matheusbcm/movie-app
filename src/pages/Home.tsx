import AuthButtons from "../components/AuthButtons";
import CarouselComponent from "../components/CarouselComponent";
import WelcomeMessage from "../components/WelcomeMessage";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <CarouselComponent />
      <WelcomeMessage />
      <AuthButtons />
    </>
  );
};

export default Home;
