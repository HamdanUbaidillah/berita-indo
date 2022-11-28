import axios from "axios";

import { useState } from "react";

const Navbar = ({ setIsError, setDataNews, setIsLoad, fetchNews }) => {
  const [showNav, setShowNav] = useState(false);
  const Navs = ["nasional", "internasional", "ekonomi", "olahraga", "teknologi", "hiburan", "gaya-hidup"];
  const getListNav = (e) => {
    setShowNav(!showNav);
    setIsLoad(true);
    axios
      .get(`https://berita-indo-api.vercel.app/v1/cnn-news/${e.target.innerHTML}`)
      .then((res) => {
        console.log(res.data.code);
        setDataNews(res.data.data);
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          setIsError(true);
        }
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  return (
    <nav className="bg-green-500 fixed w-full z-20  text-white h-14 flex items-center">
      <section className="w-[80%] m-auto flex justify-between items-center ">
        <div>
          <h1 className="text-2xl font-semibold hover:cursor-pointer" onClick={fetchNews}>
            Berita Indo
          </h1>
        </div>
        <div className="md:hidden flex items-center active:bg-green-200 rounded-sm px-1">
          <span className="material-symbols-outlined text-[30px]" onClick={() => setShowNav(!showNav)}>
            menu
          </span>
        </div>
        <ul
          className={`flex gap-5 max-md:flex-col max-md:fixed right-0 bottom-0 top-14 max-md:w-[240px]  max-md:h-screen max-md:pb-48 max-md:bg-green-400 max-md:gap-0 max-sm:items-start 
            ${showNav ? "right-0" : "right-[-500px]"} transition-all duration-300`}
        >
          {Navs.map((list, i) => {
            return (
              <li key={i} className="max-md:m-auto">
                <button className="hover:underline font-semibold max-md:text-md" onClick={getListNav}>
                  {list}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
