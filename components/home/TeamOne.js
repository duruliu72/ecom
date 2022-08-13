const TeamOne = () => {
  return (
    <div className="team-one">
      <div className="container">
        <div
          className="section-title -center"
          style={{ marginBottom: "1.875em" }}
        >
          <h2>Professional team</h2>
          <img
            src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
            alt="Decoration"
          />
        </div>
        <div className="team-one-slider">
          <div className="slider__item">
            <div className="team-card">
              <div className="team-card__avatar">
                <img
                  src="/app/assets/images/team/teamOne/1.png"
                  alt="Danielle Welling"
                />
              </div>
              <div className="team-card__content">
                <h3>Danielle Welling</h3>
                <h5>Nail master</h5>
                <p>
                  Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.
                </p>
                {/* <socialicons></socialicons> */}
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="team-card">
              <div className="team-card__avatar">
                <img
                  src="/app/assets/images/team/teamOne/2.png"
                  alt="Cali Lees"
                />
              </div>
              <div className="team-card__content">
                <h3>Cali Lees</h3>
                <h5>Administrator</h5>
                <p>
                  Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.
                </p>
                <socialicons></socialicons>
              </div>
            </div>
          </div>
          <div className="slider__item">
            <div className="team-card">
              <div className="team-card__avatar">
                <img
                  src="/app/assets/images/team/teamOne/3.png"
                  alt="Danielle Welling"
                />
              </div>
              <div className="team-card__content">
                <h3>Danielle Welling</h3>
                <h5>Hair stylish</h5>
                <p>
                  Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.
                </p>
                <socialicons></socialicons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
