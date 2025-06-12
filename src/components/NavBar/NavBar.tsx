import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export function NavBar() {
  return (
    <AppBar sx={{backgroundColor: "#2c4c6b"}} position="static">
      <Container sx={{maxHeight: 64}}  maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="./"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Family History
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}