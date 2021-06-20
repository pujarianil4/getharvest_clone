import React from 'react'
import styles from './VideoTutorial.module.css'

import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
  } from 'video-react';


export const VideoTutorial = () => {
    return (
        <div className={styles.videowrapper}>
          
       <div className={styles.video}>
       <Player src="https://masai-course.s3.ap-south-1.amazonaws.com/users/768/submissions/84078/218390/05408a678699dd875605a25b8f9780b7/Getharvest_Demo.mp4" poster="https://play-lh.googleusercontent.com/4zGNujuyCLpCWTTx_L7PmxVatkmStSUEx5L2GVD59zGyZ5mleKI_BRrB93I60rtNrDk" className={styles.players} >
        
       
  
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          <VolumeMenuButton disabled />
        </ControlBar>
      </Player>
       </div>
  
          
           

     </div>
    )
}
