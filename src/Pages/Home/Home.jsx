import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import ComputerIcon from "@material-ui/icons/Computer";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

import { Footer } from "../../Components/Footer/Footer";
import {  Start_trial_button } from "../../Library/Custom_UI";
import { Carousel } from "./Carousel";
import style from "./Home.module.css";

export function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const action = logoutSuccess();
  //   dispatch(action)
  // },[])
  const history = useHistory();

  const signup = () => {
    history.replace("/Signup");
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Redirect to="/welcome" />;
  }

  return (
    <>
      <section className={style.front_section}>
        <div className={style.front_div}>
          <div className={style.title}>
            <br />
            <h1>Unlock the potential of time tracking</h1>
            <h2>
              Harvest is modern time tracking software – for less effort, more
              joy, and improved profitability.
            </h2>
          </div>
          <div className={style.title}>
            {/* eslint-disable-next-line */}
            <Start_trial_button onClick={signup} color="#3E3A63">
              Start Your Free Trial
            </Start_trial_button>
            <h3>Fully functional 30-day trial. No credit card required.</h3>
          </div>

          <div className={style.title_img}>
            <img
              src="https://f.hubspotusercontent10.net/hub/19495563/hubfs/homepage-hero.png?width=850&name=homepage-hero.png"
              alt="title img"
            />
          </div>
        </div>
      </section>

      <div className={style.companies}>
        <h3>
          <span>70,000+</span> COMPANIES TRACK TIME WITH HARVEST
        </h3>
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-vw-51c3fc513c16fde99676892d424629144585ff6db226254ed6a05fbfcd48101d.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-columbia-38af9030213b155efc3e5616622b4310a9dbfc47143e6685722ee415c9957575.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-dell-49d4876c86dfd952d55873444da37c8767157374774d8400fda1fa595aa8a3c6.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-conde-nast-19b4e7f7ce02a74c95960198f4d5583ace00a1a4e35579587b04ae3b77dd3caf.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-mcdonalds-f8c38ab6c098b8e65db859c61a0d47b8eeaa6d3a18a9ed04296ec4d3e3c8d64a.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-aclu-f3278dfb0882477eb54bbf625a53b2eac26aa47aa637764ebed9ebea5be148e2.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-lululemon-48638d7ea9a223b3b59cc478f0451b8be4b324d0cb2e239c8e10c1125c77f52e.png"
          alt=""
        />
        <img
          src="https://www.getharvest.com/assets/customers/featured/featured-amnesty-international-003ebcd35e65d07cd034709ff329a213f08ef8194e54585f60ae6aa32896e84a.png"
          alt=""
        />
      </div>
      <div className={style.feature}>
        <h2>FEATURE</h2>
        <h1>Everything to keep your team ticking</h1>
        <h3>
          Harvest is so much more than just a simple time tracking software. We
          help you take the pulse of your business and achieve your goals.
        </h3>
      </div>
      <div className={style.feature_card}>
        <div className={style.card}>
          <div className={style.feature_icon}>
            <i class="fas fa-stopwatch" style={{ fontSize: "36px" }}></i>
          </div>
          <h3>Track Time</h3>
          <h4>
            Intuitive,lightweight time tracking that's easy to learn and use
          </h4>
          <div className={style.learn}>
            <span>Learn More</span>
            <ArrowForwardIcon />
          </div>
        </div>

        <div className={style.card} style={{ backgroundColor: "#F18D2A" }}>
          <div
            className={style.feature_icon}
            style={{ backgroundColor: "#C07022" }}
          >
            <i class="fa fa-pie-chart" style={{ fontSize: "36px" }}></i>
          </div>
          <h3>Track Time</h3>
          <h4>
            Intuitive,lightweight time tracking that's easy to learn and use
          </h4>
          <div className={style.learn} style={{ border: "1px solid #C07022" }}>
            <span>Learn More</span>
            <ArrowForwardIcon />
          </div>
        </div>

        <div className={style.card} style={{ backgroundColor: "#21A5A0" }}>
          <div
            className={style.feature_icon}
            style={{ backgroundColor: "#197F7B" }}
          >
            <i class="fa fa-credit-card" style={{ fontSize: "36px" }}></i>
          </div>
          <h3>Track Time</h3>
          <h4>
            Intuitive,lightweight time tracking that's easy to learn and use
          </h4>
          <div className={style.learn} style={{ border: "1px solid #197F7B" }}>
            <span>Learn More</span>
            <ArrowForwardIcon />
          </div>
        </div>

        <div className={style.card} style={{ backgroundColor: "#CB5C5B" }}>
          <div
            className={style.feature_icon}
            style={{ backgroundColor: "#A24A49" }}
          >
            <i class="fa fa-share-alt" style={{ fontSize: "36px" }}></i>
          </div>
          <h3>Track Time</h3>
          <h4>
            Intuitive,lightweight time tracking that's easy to learn and use
          </h4>
          <div className={style.learn} style={{ border: "1px solid #A24A49" }}>
            <span>Learn More</span>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
      <div className={style.all_feature}>
        <span>Browse all feature </span>
        <ArrowForwardIcon style={{ color: "orange", margin: "0px" }} />
      </div>

      {/* customer spotlight */}
      <div className={style.customer_spotlight}>
        <div className={style.feature}>
          <h2>CUSTOMER SPOTLIGHT</h2>
          <h1>Time tracking that helps businesses thrive</h1>
          <h3>
            From consultancies to internal departments, and across industries,
            we help growth-minded organizations make the most of time.
          </h3>
        </div>
        <div>
          <Carousel />
        </div>
      </div>

      {/* Learning Resources */}

      <div className={style.learning_resources}>
        <div className={style.learning_title}>
          <h2>LEARNING RESOURCES</h2>
          <h1>Supporting you along the way</h1>
        </div>
        <div className={style.resource_card}>
          <div className={style.r_card}>
            <div className={style.icon}>
              <ImportContactsIcon style={{ color: "white", fontSize: "40" }} />
            </div>
            <div className={style.r_title}>
              <h2>Guide & Templete</h2>
              <h4>
                Learn how to introduce your team to time tracking and make the
                most of Harvest{" "}
              </h4>
            </div>
            <div className={style.arrow}>
              <ArrowForwardIcon style={{ color: "orange", fontSize: "35" }} />
            </div>
          </div>

          <div className={style.r_card}>
            <div className={style.icon} style={{ backgroundColor: "#21A5A0" }}>
              <ComputerIcon style={{ color: "white", fontSize: "40" }} />
            </div>
            <div className={style.r_title}>
              <h2>Guide & Templete</h2>
              <h4>
                Learn how to introduce your team to time tracking and make the
                most of Harvest{" "}
              </h4>
            </div>
            <div className={style.arrow}>
              <ArrowForwardIcon style={{ color: "orange", fontSize: "35" }} />
            </div>
          </div>

          <div className={style.r_card}>
            <div className={style.icon} style={{ backgroundColor: "#F18D2A" }}>
              <RecordVoiceOverIcon style={{ color: "white", fontSize: "40" }} />
            </div>
            <div className={style.r_title}>
              <h2>Guide & Templete</h2>
              <h4>
                Learn how to introduce your team to time tracking and make the
                most of Harvest{" "}
              </h4>
            </div>
            <div className={style.arrow}>
              <ArrowForwardIcon style={{ color: "orange", fontSize: "35" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Start tracking time for free */}
      <div style={{ backgroundColor: "#F8F5F1" }}>
        <div className={style.tracking}>
          <div className={style.t_title}>
            <h1>Start tracking time for free</h1>
            <h2>
              See if Harvest is right for you with a fully functional 30-day
              trial. No credit card required.
            </h2>
            {/* eslint-disable-next-line */}
            <Start_trial_button onClick={signup} color="#24A90C">
              Start Your Free Trial
            </Start_trial_button>
          </div>
          <div className={style.t_img}>
            <img
              src="https://www.getharvest.com/assets/illustrations/timesheets-medium-857db8f1310d74ce1a0d2ef066ce09f1a0354b7a9eb40e02449d8a18942734b1.png"
              alt="img"
            />
            {/* {
              https://f.hubspotusercontent10.net/hub/19495563/hubfs/illustrations/timesheets-medium.png?width=500&name=timesheets-medium.png
            } */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
