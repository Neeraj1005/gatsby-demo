import * as React from "react";
import logo from "../images/logo.svg";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main className="antialiased font-primary">
      <Helmet>
        <title>Coming Soon Page</title>
        <script
          src="https://kit.fontawesome.com/de84253868.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className="bg-home px-8 w-full">
        <div
          className="
                    py-12
                    flex flex-col
                    justify-between
                    min-h-screen
                    md:max-w-2xl
                    lg:max-w-3xl
                    mx-auto
                "
        >
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="timer-circle">
                <div>
                  <span className="timer-count">0</span>
                  <span className="timer-type">Days</span>
                </div>
              </div>
              <div className="timer-circle">
                <div>
                  <span className="timer-count">0</span>
                  <span className="timer-type">Hours</span>
                </div>
              </div>
              <div className="timer-circle">
                <div>
                  <span className="timer-count">0</span>
                  <span className="timer-type">Minutes</span>
                </div>
              </div>
              <div className="timer-circle">
                <div>
                  <span className="timer-count">0</span>
                  <span className="timer-type">Seconds</span>
                </div>
              </div>
            </div>
            <div className="mt-12 text-white text-center">
              <h1 className="font-bold text-4xl md:text-5xl">
                Project Coming Soon
              </h1>
              <p className="pt-4 text-lg md:text-xl">
                We love to create dependable business solutions for companies of
                all sizes and any industry. Our goal is to improve accuracy and
                efficiency to reduce operational costs
              </p>
            </div>
            <form action="" className="mt-8 md:flex md:max-w-lg md:mx-auto">
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="
                                    peer
                                    px-8
                                    pt-5
                                    pb-3
                                    w-full
                                    placeholder-transparent
                                    rounded-full
                                    flex-grow
                                    md:rounded-r-none
                                "
                />
                <label
                  htmlFor="email"
                  className="
                                    absolute
                                    text-gray-700
                                    left-8
                                    top-2
                                    font-bold
                                    text-xs
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:font-normal
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-2
                                    peer-focus:font-bold
                                    peer-focus:text-xs
                                    cursor-text
                                    transition-all
                                "
                >
                  Email address
                </label>
              </div>
              <button
                type="submit"
                className="
                                mt-4
                                bg-pink-800
                                text-white
                                uppercase
                                font-bold
                                text-sm text-center
                                w-full
                                px-8
                                h-14
                                rounded-full
                                md:mt-0 md:rounded-l-none md:w-48
                            "
              >
                Sign up
              </button>
            </form>
          </div>
          <footer className="mt-8">
            <img src={logo} className="h-10 opacity-80 mx-auto" alt="" />
            <div
              className="
                            mt-4
                            mx-auto
                            text-pink-800 text-lg
                            space-x-2
                            text-center
                        "
            >
              <a href="#facebook" className="social-link">
                <i className="fab fa-facebook-f m-auto"></i>
              </a>
              <a href="#twitter" className="social-link">
                <i className="fab fa-twitter m-auto"></i>
              </a>
              <a href="#pinterest" className="social-link">
                <i className="fab fa-pinterest-p m-auto"></i>
              </a>
              <a href="#instagram" className="social-link">
                <i className="fab fa-instagram m-auto"></i>
              </a>
              <a href="#linkedin" className="social-link">
                <i className="fab fa-linkedin-in m-auto"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
