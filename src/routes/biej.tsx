import Typography from '@mui/joy/Typography';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import image1 from 'images/BE1-1795_Bieie.jpg';
import image2 from 'images/BE2.jpg';
import image3 from 'images/BE3-1795_Jan_Misiewicz.jpg';
import image4 from 'images/BE4.jpg';
import image5 from 'images/BE5.jpg';
import image6 from 'images/BE6.jpg';
import image7 from 'images/BE7.jpg';
import image8 from 'images/BE8.jpg';
import image9 from 'images/BE9.jpg';
import image10 from 'images/BE10.jpg';
import image11 from 'images/BE11.jpg';
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
    
    <Typography className={styles.textBlock}>
        Маёнткам Дворышчы з 1578 году валодалі манахі-езуіты. У 1773 годзе, пры скасаваньні Ордэну езуітаў, Распарадчая камісія прадала маёнтак трокскаму судзьдзі Міхалу Ромэру.  Хутка гэтая маёмасць была падзелена паміж арандатарамі другой і трэцяй рукі. Згодна з люстрацыяй 1796 г. Дворышча з фальваркамі Уладзіславовым, Тракелямі і Гурынамі знаходзілася ў дзедзічнай пацэсіі слонімскага земскага пісара Ігнацыя Шукевіча, ад якога Дворышча і Уладзіславова трымала Пузыніна.
<br></br>
У маёнтак Дворышча з фальваркам Владзіславава ўваходзіць вёска <span></span>
            <PhotoView src={image1}>
                <span className={styles.link}>Bieie</span>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>Вёска складаецца з 2-х дымоў, у якіх пражываюць  5 і 7 чалавек адпаведна мужчынскага і жаночага полу.
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
    <Typography className={styles.textBlock}>Адкрытае пытаньне — ці быў гэта бацька і сын. Верагодна, узросты былі “акруглены”, але розьніца вельмі малая, да таго ж у дыме Яна пазначана “матка Малгожата”.
<br/>
У вёсцы Юрэвічах таго ж фальварку ў адным з дымоў значацца:<br/>
Казімір сын Казіміра Вайтовіча;<br/>
Яго сястра Катажына (удава) 45 гадоў;<br/>
Яе сын Ян сын Міхала ўзростам 19 гадоў.

    </Typography>
    <Typography className={styles.textBlock}>
        Адпаведна дзед Яна — Казімір Войтовіч. А прозвішча яго мы пакуль не ведаем.
Для чаго гэта нам? Пазьней спатрэбіцца :)

            <PhotoView src={image3}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>

    <Typography level='h3' className={styles.textBlock}>
1811 год
    </Typography>
    <Typography className={styles.textBlock}>
        Перапіс ужо на рускай мове. Якубы сталі Якавамі, Казімір — Кузьмой, а Wawrżyniec, зьдзек нейкі, нармальнае ж імя было – Лаврентием.
    </Typography>
    <Typography className={styles.textBlock}>
        Жаночы пол не перапісваецца. Можа, часу не было і трэба было хутчэй мужчын перапісаць, бо за Нёманам ужо Напалеон гусеніцамі шаблямі лязгаў? :)

    </Typography>
    <Typography className={styles.textBlock}>
        У вёсцы Бей да 1811 году застаўся адзін дым.

    </Typography>
    <Typography className={styles.textBlock}>
        Ян Якуба сын перамешчаны ў Дворышча на месца вызваліўшагася гаспадарства. Тут і далей ужываю «перамешчаны», бо часта так пішацца ў самым перапісе, а мы дакладна не ведаем, можа пан перасяляў па ўласным меркаванні, а можа самі па якіх прычынах.

    </Typography>
    <Typography className={styles.textBlock}>
        Разам з ім сыны Яна: Юрый — 1797 г.н., Антон — 1800, Марцін — 1803 
            <PhotoView src={image4}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        Якуб Анджэй жыў да 1805 году, у Людвіка да таго часу нарадзіліся дзеці: 
Андрэй 1802, Антон 1806, Іван 1809.

    </Typography>
    <Typography className={styles.textBlock}>
        У Пятра сына Якуба ў 1810 годзе нарадзіўся сын Лаўрынь. 
            <PhotoView src={image5}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        У вёсцы Юрэвічах у адным дыме з Казімірам сынам Казіміра Вайтовіча далей пражывае Іван Міхайла сын Місевіч, дзякуй Богу, ужо 31 год, можна і з прозвіўам запісаць.
            <PhotoView src={image6}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        Каля 1815 году «Паезуіцкі маёнтак Дварышча з фальваркамі Тракелі, Гураў і ўсімі належнасьцямі, закуплены ад казны, перайшоў у вечнае валоданьне Дзейнага Статскага Радцы і Кавалера Войцеха Пуслоўскага»
    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1816 год
    </Typography>
    <Typography className={styles.textBlock}>
        Ян Якуб памёр у 1811 годзе, яго сын Антон — у 1812 годзе, Юрыя ў 1815 годзе забіраюць у рэкруты, а да 1816-га года Марціна Яна разам з сястрой Ганнай (15 гадоў) пераводзяць у дым да Марціна Міхайлава Кавальчука, які пражывае з жонкай Кацярынай і дачкой Магдаленай.
        <PhotoView src={image7}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        Цікава, што ў сказы 1816 года прозвішча на рускай мове напісана як Буй, магчыма, таму што так можна было прачытаць напісанае ад рукі на лацінцы Biey.
    </Typography>
    <Typography className={styles.textBlock}>
        У гэтую перапісь зноў заносіцца жаночая частка сям’і, але асобна ад мужчын — на правай старонцы кнігі. Мо адсюль пайшло выказванне "хлопчыкі налева, дзяўчынкі направа"? :)
    </Typography>
    <Typography className={styles.textBlock}>
        Вёска Бей у колькасці аднаго дыму яшчэ існуе. Нават прозвішча напісана правільна. Усе жывыя, акрамя Лаўрыня. У Людвіка жонка Кацярына 30 гадоў, у Пятра — Язэфата 22 гады.
У вёсцы Юрэвічах таксама жывы-здаровы Іван Міхайла Місевіч разам з жонкай Марыянай і дачкой Язэфатай 6 гадоў.
У Тракельскім касцёле ёсць запіс аб яе нараджэнні ад 1808 года.
<PhotoView src={image8}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        Наступны перапіс быў не хутка, таму Язэфата нават паспела выйсці замуж.

    </Typography>
    <Typography className={styles.textBlock}>
        29 чэрвеня 1831 года ў Трокельскім касцёле адбылося вянчанне:
Pracowitych Marcina Buia syna Jana i Kunegundy Buiow z Jozefą Drabowna córkę Jana i Mariany Misiewiczow.
<PhotoView src={image9}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
            Хто ведае, чаму Язэфа стала Драбаўна — падзяліцеся :)
    </Typography>
    <Typography level='h3' className={styles.textBlock}>
        1834 год
    </Typography>
    <Typography className={styles.textBlock}>
        Паізуіцкі маёнтак Дворышча належыць Пуслоўскім сынам Войцеха Пуслоўскага, статскага саветніка.
    </Typography>
    <Typography className={styles.textBlock}>
        Марцін Іванавіч сын Бей (зноў), пераехаўшы з Дворышча ў вёску Юрэвічы, жыве там разам з жонкай і дачкой Агнешкай (1 год).
Іван Міхайла сын Місевіч жыў да 1821 года.

    </Typography>
    <Typography className={styles.textBlock}>
        Да 1834-га ад вёскі Бейе ніводнага не засталося.
Івана Людвіка забралі ў 1828 годзе ў рэкруты, Антон Людвік ва ўзросце 28 гадоў жыве ў вёсцы Кабыльнікі ў сям’і Лаўрэнція Матвеева Залога. Далей гэта галіна пакуль страчана.

    </Typography>
    <Typography className={styles.textBlock}>
        Розныя перапісы праводзіліся ў наступныя гады — 1850-1858, але па Дворышчах пакуль нічога  з таго часу я не знайшоў.

    </Typography>
    
    <Typography className={styles.textBlock}>
У рэвізскіх сказках 1795-1834 гадоў прозвішча Бей сустракалася толькі ў фальварку Дворышча, у Вярх-Лідзе і найбліжэйшых вёсках амаль ніхто не адзначаны. У весцы Плашевічы у 1816 запісаны батрак Якуб Іосіф Бей, 10 гадоў, які пазней пераведзены ў веску Сангайлы. Ў 1827 у веску Брындзеняты пераведзены Томаш Бей.
    </Typography>
    <Typography className={styles.textBlock}>
        У метрычных кнігах Лідскага касцёла запісы з прозвішчам Бей захаваліся з 1829 года. І да 1878 года запісы ў асноўным тычацца вёсак Плашэвіч і Брындзенята з вышэй адзначанымі сем’ямі. Нейкія сувязі с нашымі не прагледжваюцца.
    </Typography>
    <Typography className={styles.textBlock}>
        Першы запіс адносна вёскі Вярх-Ліда — гэта запіс аб нараджэнні ў 1878 годзе дачкі ў сям’і Антона і Марыяны Баран Беевых. У сям’і бацькоў з такімі ж імёнамі ў 1883 годзе нарадзіўся Канстанцін Бей, наш прадзед.

    </Typography>
    <Typography className={styles.textBlock}>
        Можна меркаваць, што Антон пасля жаніцьбы перабраўся ў Вярх-Ліду ў прымы, альбо змена месца жыхарства магла быць звязана з вызваленнем сялян і зямельнымі рэформамі пасля адмены прыгоннага права. Не, няхай будзе ў прымы, а то права, рэформы нейкія …

    </Typography>
    <Typography className={styles.textBlock}>
        Запіс у кнізе Тракельскага касцёла ад 1852 года:
13.06.1852 года ў вёсцы Юрэвічы Тракельскага прыходу нарадзіўся Антоній, сын сялян Марціна і Язэфаты з Місевічаў Бееў. (Біеевъ)
<PhotoView src={image10}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView>
    </Typography>
    <Typography className={styles.textBlock}>
        Няма запісаў пра бацькоў Антона Бея з Вярх- Ліды, але з вялікай верагоднасцю мяркую, што гэта Антон Бей з Юрэвіч, ланцуг наступных падзей дае нейкую ўпэўненасць.

    </Typography>
    <Typography className={styles.textBlock}>
        1858 год — Міхал Бей з вёскі Юрэвічы, сын Марціна і Язэфаты Місевіч, ва ўзросце 25 гадоў ажаніўся з Кацярынай Некраш.
1859 год — у бацькоў Міхала і Кацярыны Некраш Беевых нарадзілася дачка Марыяна.
У 1879 годзе Марыяна Беева ва ўзросце 19 гадоў хрысціла сына Антона і Марыяны Баран.

    </Typography>
    <Typography className={styles.textBlock}>
        Будзем прытрымлівацца варыянту, што Антон нарадзіўся ў сям’і з Юрэвіч, бо хроснымі часта запрашалі блізкіх сваякоў. Ну быў там нейкі яшчэ Антон с Брындзянятаў, сын Томаша з Брындзянят, але ён знік потым недзе..
    </Typography>
    <Typography className={styles.textBlock}>
        14.10.1859 ва ўзросце 55 гадоў ад сухотаў памёр Марцін Бей, пакінуўшы ўдавою Язэфату і сыноў Міхала, Марціна, Якуба і Антона. Пахаваны на Дворышчанскіх могілках. Вось так, амаль усе жыцце міма хадзіў…
    </Typography>
    <Typography className={styles.textBlock}>
        Існуюць запісы пра нараджэнне дзяцей у Антона і Марыяны Баран Беевых:

    </Typography>
    <Typography className={styles.textBlock}>
        19.10.1876 — Пауліна, дачка Антона і Марыі з Бараноў Бееў з Вярх- Ліды. Хросныя: Станіслаў Гаврон і Ганна Алексе...?<br></br>
14.02.1878 - 13.01.1879 — Іосіф, сын Антонія і Марыяны з Бараноў Бееў з Вярх-Ліды. Хросныя: Станіслаў Гаўрон і Марыяна Беева.<br></br>
28.09.1879 - 01.10.1881 — Міхал, сын Антона і Марыяны з Бараноў Бееў. Хросныя: Пётр Вайтовіч (імаверна бацька дзеда Нікадзіма Вайтовіча) і Маргарыта Сарэлава<br></br>
20.05.1881 - 30.07.1882 — Вікенцій, сын Антона і Марыяны з Бараноў Бееў. Хросныя: Вікенцій Звержынскі і Антоніна Гаўронаўна (магчыма народжаная ў 1864 г. Ганна Гаўрон, дачка Лаўрэнція і Уршулі Баран).
<br></br>

        07.08.1883 у Лідскім рымска-каталіцкім касцёле ахрышчаны немаўля па імені Канстанцін.
Бацькі: сяляне Лідскай воласці Антоній і Марыяна з Бараноўскіх Беевы, законны шлюбны сын, народжаны 22 ліпеня ў вёсцы Вярх-Ліда. <br></br>
Хросныя: Осіп Некраш і Антоніна Гаўронава (?).
(Магчыма, народжаная ў 1864 г. Ганна Гаўрон, дачка Лаўрэнція і Уршулі Баран)
<PhotoView src={image11}>
                <img src={thumbnail} className={styles.thumbnail}></img>
            </PhotoView><br></br>
            05.01.1886 Уршуля, дачка Антона і Марыі з Бараноў Бееў.
Хросныя: Станіслаў Гаўрон і Людвіка Буркоўска.
05.01.1890 у Лідскім рымска-каталіцкім  касцёле ахрышчаны немаўля па імені Балеслаў.
Бацькі: сяляне Лідскай воласці Антон і Марыяна з Бараноў Бееў, законны шлюбны сын, народжаны 1-га гэтага месяца і года ў вёсцы Вярх- Ліда.
Хросныя: Іван Бей і Людвіка (20 гадоў, бацькі Вікенцій і Кацярына Мешкоў Бараноў), жонка Іосіфа Клебана (24 гады, бацькі Матвей і Алена Зайко Клебаны).

    </Typography>
    <Typography className={styles.textBlock}>
        12.09.1910 Канстанцін Бей бярэ шлюб з Анастасіяй Янкоўскай (24 гады). Бацькі Анастасіі – Ян Янкоўскі і Эмілія Круповіч са Споркаўшчыны. 
    </Typography>
    <Typography className={styles.textBlock}>
        Сястра Анастасіі Янкоўскай Агата Сівіц (Agata Siwic) у 1929 годзе ў 29 гадоў эмігравала ў ЗША разам з мужам Балеславам Сівіцам. Як сваячку, якая засталася на Радзіме, яна ўказала сястру Анастасію Бей з Вярх-Ліды.
    </Typography>
    <Typography className={styles.textBlock}>
        14.08.1911 у весцы Вярх-Ліда нарадзіўся Браніслаў Бей.
        </Typography>
    <Typography className={styles.textBlock}>
        Казку пра тое, чые даляры спаліў дзед Бронюсь, можна прачытаць у асобнай спасылцы. 
Калі чытаеце с Беларусі, карыстайцеся VPN, бо мова будзе пра недружалюбную краіну.

    </Typography>
    
    </PhotoProvider>
    </>
  );
};
