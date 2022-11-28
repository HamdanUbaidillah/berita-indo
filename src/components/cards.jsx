const Cards = ({ dataNews }) => {
  return (
    <main className="bg-slate-400 max-md:w-[90%] rounded-md lg:p-10 p-5 font-['Varela_Round']">
      {dataNews.map((news, i) => {
        return (
          <section key={i} className="bg-white p-4 rounded-md mb-3">
            <div>
              <img className="rounded-md" src={news.image.large} alt="" />
            </div>
            <div className="mt-2">
              <h1 className="text-2xl max-sm:text-[20px] font-bold">{news.title}.</h1>
              <p className="max-sm:text-sm">{news.contentSnippet}</p>
              <a href={news.link} className="text-blue-600 font-bold hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                Lihat selengkapnya...
              </a>
            </div>
          </section>
        );
      })}
    </main>
  );
};
export default Cards;
