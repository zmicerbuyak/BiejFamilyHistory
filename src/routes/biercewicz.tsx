import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/FL1.jpg';
import image2 from 'images/FL2.jpg';
import image3 from 'images/FL3.jpg';
import image4 from 'images/FL4.jpg';
import image5 from 'images/FL5.jpg';
import image6 from 'images/FL6.jpg';
import image7 from 'images/FL7.jpg';
import image8 from 'images/FL8.jpg';
import image9 from 'images/FL9.jpg';
import image10 from 'images/FL10.jpg';
import image11 from 'images/FL11.jpg';
import image12 from 'images/FL12.jpg';
import image13 from 'images/FL13.png';
import thumbnail from 'images/image-thumbnail.svg';

import styles from "./styles.module.css"
import React from 'react';
import {HomeButton} from 'components/HomeButton/HomeButton.tsx'


export function BiercewiczRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">Бярцевічы (Biercewicz)</Typography>
            </div>
            
            {/* <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> */}
    
    <Typography className={styles.textBlock}>Цябы як и Вярх-Ліда ў той час адносіліся да маёнтка Жырмуны князя Мікалая Радзівілла. 

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1795 
    </Typography>
    <Typography className={styles.textBlock}>
Jacob Krzysztofa syn Bartoszewicz – 50 гадоў <br/>
Syn Jacoba Maciej – 23
<PhotoView src={image1}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> 

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1811 
    </Typography>
    <Typography className={styles.textBlock}>
        Іван Кшыштафа сын Барташэвіч – 66 <br/>
Сын Мацьвей – 39  <br/>
Сын Мацьвея Іван – 4 <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> 

    </Typography>
    <Typography className={styles.textBlock}>
        Невядома як, але Барташэвічы ў 1816 перароблены ў Бярцевічаў. Хаця людзі с прозвішчам Бярцевіч былі ў Цябах і раней. Нумар дыма, склад па імёнам і ўзрост супадаюць.

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1816 
    </Typography>
    <Typography className={styles.textBlock}>
        Якуб Кшыштафа сын Бярцевіч – пам. 1812 <br/>
Сын Якуба Мацьвей - 43 <br/>
Жонка Мацьвея Крысьціна – 40<br/>
Мацьвея сын Іван - 8 <br/>
Дачкі Мацьвея Эльжбета -14, Мар’яна – 10.
<PhotoView src={image3}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
29.01.1828 Ян Бярцевіч, сын Мацея и Крысьціны Бярцевічей, кавалер гадоў 23-х з Цябаў ажаніўся з Эльжбетай, Заблоцянкай, дачкой Шымона и Хелены Заблоцкіх, дзеўкай гадоў 20 (нарадзілася 24.05.1810) з той жа вескі. <br/> 
Увага! Шчыра папярэджваю: чытаньне гэтае запісы можа выклікаць сьлёзы, пякотку ў вачох. На уласную адказнасць!

<PhotoView src={image4}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>

    </Typography>
    <Typography className={styles.textBlock}>
Бацька Хелены, Шымон сын Ежы Заблоцкі, нарадзіўся прыкладна ў 1776 годзе. Склад сям’і Заблоцкіх ў 1795-м годзе.

<PhotoView src={image5}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        У 1831-32 гадах частка вёскі Цябы маёнтка Жырмуны князей Радзівілаў рашэннем суда, выдзелена ў маёнтак Чехаўцы памешчыка Банькоўскага, а частка - у маёнтак Колышкі памешчыка Блажееўскага. 

    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1834  
    </Typography>
    <Typography className={styles.textBlock}>
        Мацьвея Якаўлеў Бярцевіч 66 гадоў разам з сынамі Самуэлем, 29 гадоў (абодва пражылі да 1838 года)  і Карлам,19 год (у тым жа 1838 годзе забралі ў рэкруты) далучылі да маёнтка Колышкі.
Іван Бярцевіч, якога чамусьці запісалі як Марцінава, жонка Елізавета (28 гадоў), сын Іван (3 гады) і дачка без імя (4 гады) належаць да маёнтка Чэхаўцы. 

    </Typography>
    <Typography className={styles.textBlock}>
        28.12.1833  ў сям’і Яна і Эльжбеты з Заблоцкіх Бярцевічов нарадзілася дачка Антаніна, якая пазней выйшла замуж за Якуба-ІІ Бацяноўскага.
        <PhotoView src={image6}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    </PhotoProvider>
    </>
  );
};
