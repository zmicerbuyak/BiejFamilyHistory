
import 'react-photo-view/dist/react-photo-view.css';
import React from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router";


export function HomeButton() {
    let navigate = useNavigate();
  return (//style={{position: 'absolute', left: '-46px', zIndex: 999999}}
    <div >
        <IconButton onClick={() => navigate('/')}>
            <HomeIcon />
        </IconButton>
    </div>
  );
};
