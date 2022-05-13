import React from "react";

const FixedIcons = () => {
  return (
    <div>
      <div id="desktop-fix" className="position-realtive d-none d-md-block">
        <div className="container">
          <div className="d-flex=column justify-content-end mb-2 position-fixed custom">
            <div className="my-5">
              <a
                href="tel:080959990000"
                className="bg-primary p-3 rounded-circle m-2"
              >
                <i
                  className="fa fa-volume-control-phone text-white fs-5"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">Call</span>
              </a>
            </div>
            <div className="my-5">
              <a
                href="https://wa.me/918095999000?text='Hi! I'm Interested In Prsetige City Projects, Bangalore. Please Share Details.'"
                target="_blank"
                className="bg-primary p-3 rounded-circle m-2"
              >
                <i
                  className="fab fa-whatsapp text-white fs-5"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-fix" className="d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-6 bg-primary p-3">
              <div className="text-center">
                <a href="tel:08095999000" className="bg-primary rounded-circle p-3">
                  <i
                    className="fa fa-volume-control-phone text-white fs-2"
                    aria-hidden="true"
                  ></i>
                  <span className="d-none d-md-none">Call</span>
                </a>
              </div>
            </div>
            <div className="col-6 bg-primary p-3">
              <div className="text-center">
                <a
                  href="https://wa.me/918095999000?text='Hi! I'm Interested In Prsetige City Projects, Bangalore. Please Share Details.'"
                  target="_blank"
                  className="bg-primary rounded-circle p-3"
                >
                  <i
                    className="fab fa-whatsapp text-white fs-2"
                    aria-hidden="true"
                  ></i>
                  <span className="d-none d-md-none">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedIcons;
