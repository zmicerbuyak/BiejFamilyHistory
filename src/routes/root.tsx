import Typography from '@mui/joy/Typography';
import { Link } from 'react-router';
import styles from "./styles.module.css"
import React from 'react';

export function RootRoute() {
  return (
    <>
    <Typography level="h2">Список статей</Typography>
    
    <ul>
        <li>
            <Link to="/intro">З чаго ўсе пачалося</Link>
        </li>
        <li>
            <Link to="/biej">Беи</Link>
        </li>
        <li>
            <Link to="/vajtovichz">Вайтовічы</Link>
        </li>
    </ul>
    
    <Typography className={styles.textBlock}>
        Навигация также возможна выбором соответствующего узла в дереве, если связанная с ним статья существует<br></br>mal
    </Typography>

    </>
  );
};
