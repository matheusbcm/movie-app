import Carousel from "../components/Carousel";

const IntroApp = () => {
    return (  
        <>
            <Carousel />
            <section>
                <h1>Intro App</h1>
                <p>Welcome message</p>
            </section>
            <div>
                <button className="btn">Sign In</button>
                <button className="btn">Sign Up</button>
            </div>
        </>
    );
}

export default IntroApp;