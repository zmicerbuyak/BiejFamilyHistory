import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/BO1.jpg';
import image2 from 'images/BO2.jpg';
import image3 from 'images/BO3.jpg';
import image4 from 'images/BO4.jpg';
import image5 from 'images/BO5.jpg';
import image6 from 'images/BO6.jpg';
import image7 from 'images/BO7.jpg';
import image8 from 'images/BO8.jpg';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function BacianRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">Бацяноўскія</Typography>
            </div>
            
            {/* <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> */}
    
    <Typography className={styles.textBlock}>Якуб Бацяноўскі з’яўляецца у Вярх-Лідзе ў 1809 годзе. Яго пераводзяць с вёскі Шчытнікі маёнтка Тарноўшчына, які на той момант, як і Вярх-Ліда, належаў Радзівілам. Запісаны ён як зяць, мабыць, ранейшага галавы дыму Томаша Вайтовіча. У Томаша па запісам 1795 года была дачка Ганна ўзростам 6 гадоў. 
<PhotoView src={image1}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        На 1816 год у дыме значацца Якуб Бацяноўскі-31 год, яго жонка Ганна, 23 гады, і дачка Агата, 2 гады. 
    </Typography>

    
    <Typography className={styles.textBlock}>
У 1820-м годзе у Якуба і Ганны нараджаецца сын Якуб. Тут будзем мець цэлую дынстыю Якубаў Бацяноўскіх, таму прыйдзецца абазначаць лічбамі, як каралеў.

    </Typography>
    <Typography className={styles.textBlock}>
        У 1834 Якуб Мацей Бацяноўскі пазначаны як зьбеглы у 1833-м годзе, а ў яго сына Якуба-II стаіць узрост 7 гадоў.
        <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        У 1850-м годзе Якуб-ІІ пазначаны у дыме разам з Леонам Круповічам як яго пляменнік.
<PhotoView src={image6}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        27.10.1957 Якуб Бацяноўскі, сын Якуба і Ганны Вайтовіч Бацяноўскіх, ва ўзросце 31 года, ажаніўся з Антанінай Бярцевічэўнай, дачкой Яна і Елізаветы (Эльжбеты) з Заблоцкіх Бярцевічаў, з вёскі Цябы.
        <PhotoView src={image3}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        02.01.1859 у Якуба-ІІ і Антаніны (запісана як Антаніна з Букреев) нарадзіўся сын Якуб-ІІІ.
<PhotoView src={image5}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        18.10.1881 Якуб-III, сын Якуба-II і Антаніны з Бярцевічаў Бацяноўскіх, кавалер 23-х гадоў з Вярх-Ліды ажаніўся з Казімірай Філіпчыкоўнай, дачкой Марціна і Марыянны з Аленчукоў(?) Філіпчыкаў, дзеўкай 20-ці гадоў з вёскі Цябы.
        <PhotoView src={image4}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        У сям’і нарадзіліся дзеці: Канстанцыя (1882), Марыя (1884), Якуб IV (1888), Станіслаў (1890).
2 верасьня 1886 году ў вёсцы Вярх-Ліда нарадзілася Францішка Бацяноўска
        <PhotoView src={image7}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>Якуб IV Бацяноўскі ў 1909 годзе эміграваў у ЗША, жыў у штаце Масачусэтс. Напрыканцы Першай сусьветнай вайны служыў у берагавой артылерыі ЗША і ў супрацьпаветранай абароне ў Эўропе. Быў халасты, памёр у Бронксе ў 1945 годзе і, як вэтэран Першай сусьветнай вайны, пахаваны ў Нью-Ёрку на Нацыянальных могілках Лонг-Айленду.
        <PhotoView src={image8}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    </PhotoProvider>
    </>
  );
};
