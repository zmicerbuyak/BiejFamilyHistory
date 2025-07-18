import Typography from '@mui/joy/Typography';
import { Link } from 'react-router';
import styles from "./styles.module.css"
import React from 'react';

export function RootRoute() {
  return (
    <>    
    <ul>
        <li>
            <Link to="/intro">З чаго ўсе пачалося</Link>
        </li>
        <li>
            <Link to="/biej">Беі</Link>
        </li>
        <li>
            <Link to="/vajtovichz">Вайтовічы</Link>
        </li>
        <li>
            <Link to="/gavron">Гаўроны</Link>
        </li>
        <li>
            <Link to="/bacianouski">Бацяноўскія</Link>
        </li>
        <li>
            <Link to="/biercewicz">Бярцевічы</Link>
        </li>
        <li>
            <Link to="/filipchyk">Філіпчыкі і Хвайніцкія</Link>
        </li>
        <li>
            <Link to="/transatlantic">Заакіянская радня</Link>
        </li>
        <li>
            <Link to="/ww-card">Дзьве жоўтыя карткі з часоў Першай сусьветнай вайны</Link>
        </li>
        <li>
            <Link to="/unsorted">Unsorted</Link>
        </li>
    </ul>
    
    <Typography className={styles.textBlock}>
        Навигация также возможна выбором соответствующего узла в дереве, если связанная с ним статья существует<br></br>
    </Typography>

    </>
  );
};
