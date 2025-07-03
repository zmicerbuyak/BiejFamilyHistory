import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image13 from 'images/WO13.png';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function GavronRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">ГАЎРОНЫ</Typography>
            </div>
            
            {/* <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> */}
    
    <Typography className={styles.textBlock}>
Гаўроны таксама ўзгадваюцца ў спісах вёскі Вярх-Ліда ў сказках 1795 і 1811 гадоў, ў сям’і Казіміра Алешкевіча запісаны яго пляменнікі, браты Матэуш и Міхал.
    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1816
    </Typography>
    <Typography className={styles.textBlock}>
        Матэуш, сын Міхала, Гаўрон – 39 гадоў (нарадзіўся прыблізна ў 1775 г.) <br></br>
Сын Матэуша – Лаўрэнцій – 17 гадоў<br></br>
Жонка Матэуша – Роза – 49 гадоў<br></br>
Дачка Матэуша – Марыяна – 4 гады<br></br>
Брат Матэуша – Міхайла – 31 год<br></br>

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1834
    </Typography>
    <Typography className={styles.textBlock}>
        Матэуш Міхалаў Гаўрон – 57 гадоў<br></br>
Сын Матэуш –  Вавжынец (Лаўрэнцій) – 35 гадоў<br></br>
Жонка Лаўрэнція – Крысьціна – 40 гадоў (1794 г.)<br></br>
Сын Лаўрэнція – Лаўрэнцій – 3 гады (1831)<br></br>
Дачка – Ганна – 6 гадоў<br></br>
Брат Матэуша – Міхал – 49 гадоў <br></br>
Сястра Матэуша – Соф’я – 60 гадоў<br></br>

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1850
    </Typography>
    <Typography className={styles.textBlock}>
        Матеуш Міхалаў Гаўрон памёр у 1835 годзе згодна з запісам у сказцы (але ў касцёле запіс ад 1842 г.)<br></br>
Яшчэ жылі:<br></br>
Лаўрэнцій Матэўшеў – 51 год<br></br>
Яго жонка Крысьціна Іванава – 56 гадоў. <br></br>
Сын Лаўрэнцій – 19 гадоў<br></br>
Адам – 8 гадоў<br></br>
Дачка Ганна – 19 гадоў<br></br>
Агата – 4 гады<br></br>

    </Typography>
    <Typography className={styles.textBlock}>
        01.09.1846 – нарадзілася  Агата, дачка «pracowitych Wawryna i Krystyny z Misaylow Gawronow» <PhotoView src={image13}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> 
    </Typography>
    <Typography className={styles.textBlock}>
        1867 – памёр Лаўрэнцій Гаўрон ва ўзросце 80 гадоў, пакінуўшы жонку Крысціну і сына Лаўрэнція.

    </Typography>
    
    </PhotoProvider>
    </>
  );
};
