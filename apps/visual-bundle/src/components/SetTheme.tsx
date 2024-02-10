import * as React from 'react';
// import setTheme from '@mui/material/styles/setTheme'
import createTheme from '@mui/material/styles/createTheme';

// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
// When using TypeScript 3.x and below
import '@mui/lab/themeAugmentation';
import Button from '@mui/material-next/Button';

import blueTheme from '../styles/blue-theme.json';
import greenTheme from '../styles/green-theme.json';
import purpleTheme from '../styles/purple-theme.json';
import redTheme from '../styles/red-theme.json';
import yellowTheme from '../styles/yellow-theme.json';

type themesTypes = typeof blueTheme
| typeof greenTheme
| typeof purpleTheme
| typeof redTheme
| typeof yellowTheme

const palettes = [blueTheme, greenTheme, purpleTheme, redTheme, yellowTheme]



function createThemeMUI(theme: themesTypes){
    
}

export 




function ThemeSelector(){
    const [index, setIndex] = React.useState(0);
    const [theme, setTheme] = React.useState();

    const clickHandler = () => {
        let newIndex = index + 1;
        setIndex(newIndex % palettes.length);   
    }


    return (
        <Button
            color="primary"
            onClick={() => {
                const newTheme = createTheme();
             
            }}
            >
                {theme}
            </Button>
    )
}