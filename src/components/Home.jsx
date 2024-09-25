function HomePage() {
  return (
    <div className="homepage">
      <p className="text-xl text-serika_text">
        Welcome to my portfolio! I am a 4/4 at Stevens Institute of Technology studying Computer
        Science. I have a strong passion in developing web applications and have a background in
        both frontend and backend development. I am currently looking for any internship
        opportunities to leverage the skills I've acquired during my studies. In addition, I am an
        NCAA DIII wrestler at
        <a className="text-blue-400" href="https://stevensducks.com/">
          {" "}
          Stevens Athletics
        </a>
        , and I have a strong passions for{" "}
        <a className="text-blue-400" href="https://bbulataophoto.myportfolio.com/home">
          {" "}
          photography
        </a>
        , surfing, traveling, and some video games.
      </p>
    </div>
  );
}

export default HomePage;
