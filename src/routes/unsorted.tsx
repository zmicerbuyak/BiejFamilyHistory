import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/US1.jpg';
import image2 from 'images/US2.jpg';
import image3 from 'images/US3.jpg';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function UnsortedRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">Unsorted</Typography>
            </div>


<div style={{display: 'Flex'}}>
            <PhotoView src={image1}>
                <img src={image1} className={styles.preview}></img>
            </PhotoView>
            <PhotoView src={image2}>
                <img src={image2} className={styles.preview}></img>
            </PhotoView>
            <PhotoView src={image3}>
                <img src={image3} className={styles.preview}></img>
            </PhotoView>
</div>
    
    </PhotoProvider>
    </>
  );
};
