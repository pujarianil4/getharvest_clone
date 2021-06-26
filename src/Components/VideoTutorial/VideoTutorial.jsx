import React from "react";


import styles from "./VideoTutorial.module.css";

export const VideoTutorial = () => {
  return (
    <div className={styles.videowrapper}>
      <div className={styles.video}>
        {/* eslint-disable-next-line */}
        <iframe
          src="https://masai-course.s3.ap-south-1.amazonaws.com/users/768/submissions/84078/218390/05408a678699dd875605a25b8f9780b7/Getharvest_Demo.mp4"
          poster="https://play-lh.googleusercontent.com/4zGNujuyCLpCWTTx_L7PmxVatkmStSUEx5L2GVD59zGyZ5mleKI_BRrB93I60rtNrDk"
          frameborder="0"
          className={styles.players}
        ></iframe>
      </div>
    </div>
  );
};
