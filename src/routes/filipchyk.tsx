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


export function FilipchykRoute() {
  return (
    <>
    
        <PhotoProvider>
            <div style = {{display: 'flex'}}>
            <HomeButton/>
    <Typography level="h2">Філіпчыкі і Хвайніцкія</Typography>
            </div>
            
            {/* <PhotoView src={image2}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView> */}
    
    <Typography className={styles.textBlock}>
Казіміра Філіпчык -  дачка Марціна і Марыянны з Аленчукоў(?) Філіпчыкаў, на момант шлюбу з Якубам-III Бацяноўским жыла ў Цябах. Прыкладны год нараджэння – 1861 
    </Typography>
    <Typography className={styles.textBlock}>
03.07.1889 у Цябах ва ўзросте 52 гады ад запалення памірае Марцін Філіпчык, пакінушы жонку Мар’яну, сыноў Стэфана, Вікенція і Юрыя, а таксама дачок Крысьціну і Казіміру.

    </Typography>
    <Typography className={styles.textBlock}>
Запісаў пра нараджэнне Казіміры не знайшоў. Але калі адштурхнуцца ад згаданых у некралогу дзяцей Марціна, то можна заўважыць, што ўсе дзеці з такімі імёнамі нарадзіліся ў адной пары.

    </Typography>

<table>
  <tr>
    <th>год </th>
    <th>імя</th>
    <th>імя бацькi</th>
    <th>імя маткі</th>
    <th>радавое імя маткi</th>
    <th>вёска</th>
    <th>Хросны бацька</th>
    <th>Хросная матка</th>
  </tr>
  <tr>
    <th>1842 </th>
    <th>Stefan</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th>Chwojnicka</th>
    <th>Барава</th>
    <th>Стэфан Хвайніцкі</th>
    <th>Эва Багдзевічова</th>
  </tr>
  <tr>
    <th>1845 </th>
    <th>Wincenty</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th> </th>
    <th>Барава</th>
    <th>Адам Скорб</th>
    <th>Анна Урублеўска</th>
  </tr>
  <tr>
    <th>1849 </th>
    <th>Юры</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th>Хвайніцка</th>
    <th>Барава</th>
    <th>Юрий Бутрымовіч</th>
    <th>Эва Багдзевічова</th>
  </tr>
  <tr>
    <th>1852 </th>
    <th>Крысьціна</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th>з Хвойнаў</th>
    <th>Цябы</th>
    <th>Игнацій Баран
</th>
    <th>Хелена Рыпоўскі</th>
  </tr>
  <tr>
    <th>1855 </th>
    <th>Антоній</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th>з Хвайніцкіх</th>
    <th>Цябы</th>
    <th>Юры Круповіч</th>
    <th>Крысьціна Тежукоўна</th>
  </tr>
  <tr>
    <th>1866 </th>
    <th>Кацярына</th>
    <th>Marcin</th>
    <th>Marianna</th>
    <th>з Хвайніцкіх</th>
    <th>Цябы</th>
    <th>Тамаш Якуць</th>
    <th>Юлия Мацевічоўна</th>
  </tr>
</table>

    <Typography className={styles.textBlock}>
Усе практычна саўпадае по імёнам. Тут хіба што запіс пра Казіміру па нейкім прычынам не знаходзіцца, ці Кацярына і Казіміра розные імя аднаго і таго ж человека, але тады яе аддалі замуж у гадоў 15. 
    </Typography>
    <Typography className={styles.textBlock}>
Вынікае, што Філіпчыкі перабраліся ў Цябы паміж 1849-м і 1852-м годам з-пад Васілішак, дзе знаходзілася веска Барава. Зараз на тым месцы засталося пару хат.

    </Typography>
    <Typography className={styles.textBlock}>
<a href='https://maps.app.goo.gl/57A67wR3ti8yUQC69'></a>
    </Typography>
    <Typography className={styles.textBlock}>
У 1795 годзе вёска адносілася да фальварка Каплуны Васілішскай парафіі і ў ёй пражывалі:<br/>
Ежы Мікалая сын Піліпчык, 45 гадоў, і яго жонка Катажына, 45 гадоў.<br/>
Былі у яго тры сыны: Кшыштаф, Міхал і Ян. Сярэдняму сыну Міхалу было 8 год. <PhotoView src={image7}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>


    </Typography>
    <Typography className={styles.textBlock}>
У 1834 годзе Міхалу Ежы Філіпчыку 47 гадоў,  яго жонцы Марціяне 45, сыну Марціну – 9 гадоў.
<PhotoView src={image8}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
19.10.1841 у Васілішскаўскім касцёле Марцін Філіпчык, 23 гадоў, сын Міхала і Мар’яны з Мацевічаў Філіпчыкаў з Баравых Навадворскай парафіі павянчаўся з Мар’янай Хвайніцкай, 22 гадоў, дачкой Йозэфа і Крыціны з Багуслаўскіх Хвайніцкіх з Бакштаў Васілішскай парафіі.
<PhotoView src={image9}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
У 1795 годзе Эжы Марціну Багуслаўскаму з Дварчанаў, бацьку Крысьціны Багуслаўскай, было каля 40 гадоў, яго жонцы Магдалене — каля 43 гадоў, дачцэ Крысьціне – 3 гады. 
<PhotoView src={image11}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
У 1811 годзе ў вёсцы Бакшты Ёзэф, сын Івана Хойніцкага, пражываў у адным дыме з Кузьмам, сынам Аляксея Хойніцкага, і быў пазначаны як яго пляменьнік. Належалі яны да маёнтку Глінкоўшчына памешчыкаў Ліпніцкіх.
<PhotoView src={image10}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
18.06.1816 году ў Васілішках быў зарэгістраваны шлюб Ёзэфа Хвайніцкага і Крысьціны Багуслаўскай з вёскі Дварчаны.
<PhotoView src={image12}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
У 1831 годзе мясцовасьць выкасіла эпідэмія халеры; Ёзэф і Крысьціна пакінулі пасьля сябе сына Мікалая і дачок Мар’яну і Антаніну.

    </Typography>
    <Typography className={styles.textBlock}>
Маёнтак Дейнараўшчына Леона Ваеводскага, вёска Барава <br/>
У 1850 годзе Марціну Філіпчыку – 25 гадоў, Мар’яне Иосіфаўне - 28<br/>
Сыны: Стэфан, Вікенцій, Юры (8,4,1)<br/>
Усяго ў дыме пражывала 12 чалавек рознай радні.
<PhotoView src={image13}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
Далей Філіпчыкі, як было напісана вышэй, згадваюцца ў Цябах.

    </Typography>
    </PhotoProvider>
    </>
  );
};
