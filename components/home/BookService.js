const BookService = () => {
  return (
    <div
      className="cta -style-1"
      style={{
        backgroundImage: 'url("/app/assets/images/cta/CTAOne/1.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <div className="cta__form">
              <div
                className="section-title "
                style={{ marginBottom: "1.875em" }}
              >
                <h2>Book Service</h2>
                <img
                  src="/app/assets/images/introduction/IntroductionOne/content-deco.png"
                  alt="Decoration"
                />
              </div>
              <form className="cta__form__detail validated-form" action="#">
                <div className="input-validator">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required="required"
                  />
                </div>
                <div className="input-validator">
                  <input
                    type="text"
                    placeholder="Your phone"
                    name="phone"
                    required="required"
                  />
                </div>
                <div className="input-validator">
                  <select className="customed-select required" name="service">
                    <option value="" hidden="hidden">
                      Choose a services
                    </option>
                    <option value="Spa">Spa</option>
                    <option value="Salon">Salon</option>
                    <option value="Nail">Nail</option>
                  </select>
                </div>
                <div className="input-validator">
                  <select className="customed-select required" name="date">
                    <option value="" hidden="hidden">
                      Choose a data
                    </option>
                    <option value="Yesterday">Yesterday</option>
                    <option value="Today">Today</option>
                    <option value="Tomorow">Tomorow</option>
                  </select>
                </div>
                <button className="btn -light-red">Appoitment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
