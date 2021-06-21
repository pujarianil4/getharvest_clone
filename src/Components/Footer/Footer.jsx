import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";


export function Footer() {
  return (
    <div className={style.Footer}>
      <div className={style.footer}>
        <div className={style.sitemap}>
          <div className={style.harvest}>
            <h4>Harvest</h4>
            <div>
              {" "}
              <Link>Home</Link>
            </div>
            <div>
              <Link>Why Harvest?</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Features</Link>
              <br />
            </div>
            <div>
              <Link>Pricing</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Integrations</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Apps</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Security</Link>
              <br />
            </div>
          </div>

          <div className={style.harvest}>
            <h4>Community</h4>
            <div>
              {" "}
              <Link>Customer Stories</Link>
            </div>
            <div>
              <Link>Resources</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Webinars</Link>
              <br />
            </div>
            <div>
              <Link>Help & Support</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Integrate with Harvest</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Time Well Spent</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Time in This Time</Link>
              <br />
            </div>
          </div>

          <div className={style.harvest}>
            <h4>Comapny</h4>
            <div>
              {" "}
              <Link>About Us</Link>
            </div>
            <div>
              <Link>Blogs</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Press</Link>
              <br />
            </div>
            <div>
              <Link>Careers</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Legal</Link>
              <br />
            </div>
            <div>
              {" "}
              <Link>Contact Us</Link>
              <br />
            </div>
          </div>

          <div className={style.forecast}>
            <h4>We also make: </h4>
            <div className={style.f_card}>
              <div className={style.f_title}>
                <h2>Harvest Forecast</h2>
                <h5>
                  The fast and simple way to schedule your team across
                  projects.Click here to learn more.
                </h5>
              </div>
              <div className={style.f_img}>
                <img
                  src="https://www.getharvest.com/assets/footer/forecast-screen-da4954256a26b39182bd6535834f6b605b3124c9352e372a8e577218e5b750dc.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.copyright}>
          <div>
            <Link>@2006-2021 Harvest</Link>
          </div>
          <div>
            <Link>Twitter</Link>
            <Link>LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
