import Typography from '@mui/joy/Typography';
import { Link } from 'react-router';

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
    </ul>
    
    <Typography sx={{padding: '0.125em'}}>
        Навигация также возможна выбором соответствующего узла в дереве, если связанная с ним статья существует
    </Typography>

    </>
  );
};
