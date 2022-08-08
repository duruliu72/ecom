const IntroductionTwo = () => {
  return (
    <div className="introduction-two">
      <div
        className="video-frame"
        style={{ height: "500px", width: "888.889px" }}
      >
        <div className="video-frame__poster">
          <img
            src="/app/assets/images/introduction/IntroductionTwo/4.png"
            alt="Video poster"
          />
        </div>
        <a
          className="btn -white -round"
          href="#"
          style={{
            height: "50px",
            width: "50px",
            lineHeight: "50px",
            padding: "0px",
          }}
        >
          <i className="fas fa-play"></i>
        </a>
      </div>
      <div className="introduction-two-content">
        <div className="container">
          <div
            className="introduction-two-content__item active"
            data-cover="assets/images/introduction/IntroductionTwo/1.png"
            data-src="https://www.youtube.com/embed/80e0QHPYRG4"
          >
            <span>01</span>
            <a href="#">Body treatment</a>
          </div>
          <div
            className="introduction-two-content__item"
            data-cover="assets/images/introduction/IntroductionTwo/2.png"
            data-src="https://www.youtube.com/embed/xn7jfVWWSio"
          >
            <span>02</span>
            <a href="#">Professinal makeup</a>
          </div>
          <div
            className="introduction-two-content__item"
            data-cover="assets/images/introduction/IntroductionTwo/3.png"
            data-src="https://www.youtube.com/embed/K3M-czGNUCg"
          >
            <span>03</span>
            <a href="#">Maincure &amp; pedicure</a>
          </div>
          <div
            className="introduction-two-content__item"
            data-cover="assets/images/introduction/IntroductionTwo/4.png"
            data-src="https://www.youtube.com/embed/hoPiGLf0ICA"
          >
            <span>04</span>
            <a href="#">Hair cut &amp; Coloring</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionTwo;
