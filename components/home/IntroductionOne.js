const IntroductionOne = () => {
  return (
    <div className="introduction-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="introduction-one-image">
              <div className="introduction-one-image__detail">
                <img
                  src="/app/assets/images/introduction/IntroductionOne/img1.png"
                  alt="background"
                />
                <img
                  src="/app/assets/images/introduction/IntroductionOne/img2.png"
                  alt="background"
                />
              </div>
              <div className="introduction-one-image__background">
                <div className="background__item">
                  <div className="wrapper">
                    <img
                      data-depth="0.5"
                      src="/app/assets/images/introduction/IntroductionOne/bg1.png"
                      alt="background"
                    />
                  </div>
                </div>
                <div className="background__item">
                  <div className="wrapper">
                    <img
                      data-depth="0.3"
                      data-invert-x=""
                      data-invert-y=""
                      src="/app/assets/images/introduction/IntroductionOne/bg2.png"
                      alt="background"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="introduction-one-content">
              <h5>
                ABOUT<span> ELIAH</span>
              </h5>
              <div
                className="section-title "
                style={{ marginBottom: "1.875em" }}
              >
                <h2>
                  When You Look Good <br /> You Feel Good
                </h2>
                <img
                  src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
                  alt="Decoration"
                />
              </div>
              <p>
                The top three occupations in the Beauty salons Industry Group
                are Hairdressers, hairstylists, & cosmetologists, Manicurists
                and pedicurists, Receptionists & information clerks, Supervisors
                of personal care and service workers, and Skincare specialists.
              </p>
              <a className="btn -white" href="#">
                Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionOne;
