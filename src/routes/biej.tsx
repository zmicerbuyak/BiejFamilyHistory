import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/BE1-1795_Bieie.jpg';
import image2 from 'images/BE2.jpg';
import image3 from 'images/BE3-1795_Jan_Misiewicz.jpg';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function BiejRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">БЕІ</Typography>
            </div>
    
    <Typography sx={{padding: '0.125em'}}>
        Маёнткам Дворышчы з 1578 году валодалі манахі-езуіты. У 1773 годзе, пры скасаваньні Ордэну езуітаў, Распарадчая камісія прадала маёнтак трокскаму судзьдзі Міхалу Ромэру
Згодна з інвэнтарызацыяй 1795 года ў маёнтак Дворышча з фальваркам Владзіславава ўваходзіць вёска <span></span>
            <PhotoView src={image1}>
                <span className={styles.link}>Bieie</span>
            </PhotoView>
    </Typography>
    <Typography sx={{padding: '0.125em'}}>Вёска складаецца з 2-х дымоў, у якіх пражываюць  5 і 7 чалавек адпаведна мужчынскага і жаночага полу.
        <ol>
            <li>Якуб Анджэя сын Бей (Biey) — 54 гады (1741 г.н.);
        Жонка Ганна 50 гадоў, дзеці: Людвік 20 гадоў, Пётр — 8, Ганна — 17, Терэзія — 15, Катажына — 8.</li>
            <li>Ян Якуба сын Бей (Biey) — 40 гадоў (1755 г.н.);
        Жонка Кунегунда — 26, сын Матэуш — 3 гады.
        (BE2)
        
            <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
            </li>
        </ol>
    </Typography>
    <Typography sx={{padding: '0.125em'}}>Адкрытае пытаньне — ці быў гэта бацька і сын. Верагодна, узрост Яна быў “акруглены” да сарака гадоў.<br/>
У вёсцы Юрэвічах таго ж фальварку ў адным з дымоў значацца:<br/>
Казімір сын Казіміра Вайтовіча;<br/>
Яго сястра Катажына (удава) 45 гадоў;<br/>
Яе сын Ян сын Міхала ўзростам 19 гадоў.

    </Typography>
    <Typography sx={{padding: '0.125em'}}>
        Адпаведна дзед Яна — Казімір Войтовіч. А прозвішча яго мы пакуль не ведаем.
Для чаго гэта нам? Пазьней спатрэбіцца :)

            <PhotoView src={image3}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    </PhotoProvider>
    </>
  );
};
