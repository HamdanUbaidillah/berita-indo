import axios from "axios";
import React, { useState, useEffect } from "react";

import "../css/App.css";

// import components
import ErrorMsg from "./utils/404";
import Loading from "./utils/loading";
import Navbar from "./nav";
import Cards from "./cards";

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [dataNews, setDataNews] = useState([]);

  const fetchNews = () => {
    setIsLoad(true);
    axios
      .get("https://berita-indo-api.vercel.app/v1/cnn-news")
      .then((res) => {
        setDataNews(res.data.data);
      })
      .catch((err) => {
        if (err) setIsError(true);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  const forwardTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main>
      <Navbar isError={isError} setIsError={setIsError} setDataNews={setDataNews} setIsLoad={setIsLoad} fetchNews={fetchNews} />
      <section className="max-md:w-[100%] md:w-[45%] m-auto ">
        {isError ? (
          <ErrorMsg />
        ) : (
          <section className="pt-20 flex flex-col items-center text-black ">
            {isLoad ? <Loading /> : <Cards dataNews={dataNews} />}

            <div
              onClick={forwardTop}
              className="fixed bottom-10 right-10 bg-blue-500 w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]  rounded-full grid place-content-center z-10 hover:cursor-pointer hover:bg-blue-400 max-sm:right-5 max-sm:bottom-16"
            >
              <span class="material-symbols-outlined text-white font-semibold  ">arrow_upward</span>
            </div>
          </section>
        )}
        <footer className=" fixed bottom-0 w-full right-0 text-center h-[40px] leading-10 backdrop-blur-sm bg-white/50">
          <h1 className="font-semibold">
            Created by{" "}
            <a className="text-blue-500" href="https://www.instagram.com/hmdnubaidillah/" target="_blank" rel="noopener noreferrer">
              hmdnubaidillah
            </a>
          </h1>
        </footer>
      </section>
    </main>
  );
}

export default App;
