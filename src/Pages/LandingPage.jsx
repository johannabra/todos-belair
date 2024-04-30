import Gify from "../components/Gify";

const LandingPage = () => {
  return (
    <main>
      <div className="home-main-container">
        <h1>Welcome to Todo</h1>
        <p className="home-p">
          Yo, yo, yo! Welcome to our Todo-list, the ultimate tool to organize
          your tasks and maximize your productivity! With our easy-peasy
          interface, you can breeze through your to-dos, marking them off as
          done, adding new ones, and tossing out the oldies with just a few
          clicks. So, what are you waiting for? Let's get jiggy with it and
          start organizing your day to conquer those goals with our Todo-list
          today!
        </p>
        <div className="container-gify">
          <Gify />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
