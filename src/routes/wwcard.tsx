import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/WW1.png';
import image2 from 'images/WW2.png';
import image3 from 'images/WW3.png';
import image4 from 'images/WW4.png';
import image5 from 'images/WW5.png';
import image6 from 'images/WW6.png';
import image7 from 'images/WW7.png';
import image8 from 'images/WW8.png';
import image9 from 'images/WW9.png';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function WWRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">Дзьве жоўтыя карткі з часоў Першай сусьветнай вайны</Typography>
            </div>

            
    <Typography className={styles.textBlock}>
        30 ліпеня (17-га па старому стылю) 1914 году Расейская імпэрыя абвясьціла ўсеагульную мабілізацыю. У Лідзе ў палку атрымалі тэлеграму аб мабілізацыі якую ўвечары зачыталі перад афіцэрамі. З наступнага дня і да 5 жніўня ішла мабалізацыя, мэдычны агляд запаснікоў праводзіўся ў гарадзкім парку — сёньня гэта раён кінатэатру «Юбілейны».

      </Typography>
    
    <Typography className={styles.textBlock}>
<PhotoView src={image1}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
<PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
У чацьвер, 6 жніўня, 172-гі Лідзкі пяхотны полк у поўным паходным рыштунку выстраіўся на пляцы казармаў. Палкавы сьвятар адслужыў малебен, камандзір палка палкоўнік Раманаў выступіў перад жаўнерамі, пажадаў хуткай перамогі і вяртаньня дахаты. Полк побатальонно с музыкой прошел от казарм Северного городка к вокзалу, погрузился в эшелоны и отбыл на фронт

      </Typography>
    <Typography className={styles.textBlock}>
У складзе каля 4000 штыкоў полк ўваходзіў у 43-ю пяхотную дывізію 2-га армейскага корпусу Расейскай імпэратарскай арміі. Паводле ўспамінаў капітана Шмідта, камандзіра 9-й роты, ягоная частка ўдзельнічала ў баявых дзеяньнях з 27 жніўня па 1 верасьня 1914 году. У гэтыя дні адбывалася Бітва пад Танэнбергам у Усходняй Прусіі — адна з самых катастрафічных паразаў расейскіх войскаў, калі 2-ая армія была амаль цалкам зьнішчаная.

      </Typography>
    <Typography className={styles.textBlock}>
Паводле архіўных зьвестак , 172-гі Лідзкі полк вёў баі на гэтым участку фронту і быў пастаўлены ў заслон на Мазурскіх азёрах недалека ад Летцэна (сёньня Гіжыцка). З таго першага складу палка, з 4000 жаўнераў, дадому ў Ліду вярнуліся каля пятай часткі шарагоўцаў і толькі некалькі афіцэраў. 
<PhotoView src={image3}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
      </Typography>
    <Typography level="h3" className={styles.textBlock}>
Асабістае: 

      </Typography>
    <Typography className={styles.textBlock}>
Менавіта ў гэтых трагічных падзеях удзельнічалі прадзеды Канстанцін Бей і Нікадзім Вайтовіч, абодва  служылі ў 172-м Лідзкім палку і трапілі ў нямецкі палон у жніўні 1914 году. Адзін быў узяты пад Летцэнам, другі — у раёне Сувалак. Абодва месцы непасрэдна зьвязаныя з маршрутам руху палка і зонамі баявых дзеяньняў 2-га армейскага корпусу.
      </Typography>
    <Typography className={styles.textBlock}>
У картатэце бюро ўліку страт у Першай сусветнай захаваліся карткі з надпісамі пра палон і назвамі лагераў. 
<PhotoView src={image4}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
            <PhotoView src={image5}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
            <PhotoView src={image6}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
            <PhotoView src={image7}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
      </Typography>
    <Typography className={styles.textBlock}>
Bergerdamm-Lager — лягер, дзе ўтрымліваліся тысячы палонных. Там вязьні працавалі на добраўпарадкаваньні тэрыторыі, капалі дрэнажныя канавы, вырошчвалі каноплі для мясцовага арандатара Артура Шурыгі і апрацоўвалі іх на канаплянай фабрыцы. Гэтае месца пасьля стала жылым раёнам, на інтэрнэт старонцы якога напісана, што адпачываць на возера прыходзяць з усей ваколіцы.

      </Typography>
    <Typography className={styles.textBlock}>
<a href='https://maps.app.goo.gl/EXDAt9oc5roG7c7C8
'>https://maps.app.goo.gl/EXDAt9oc5roG7c7C8</a>
      </Typography>
    <Typography className={styles.textBlock}>
Выявы лагероў у Губене і Коттбусе

            <PhotoView src={image8}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
            <PhotoView src={image9}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
      </Typography>
    </PhotoProvider>
    </>
  );
};
