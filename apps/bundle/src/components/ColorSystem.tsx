/*

Handful of components that afford  

**Dynamic color** - new feature of Material You in which colors 
are systemically formed algorithmically to facilitate scalable

- a user's wallpaper to be applied to their apps and system UI.

Luminance
Dynamic color is built to work across unpredictable contexts. 
To manage contrast ratios in various viewing contexts, luminance 
levels are the key attribute that allow colors to combine successfully 
even without the product team testing each specific color combination.
*/



import * as React from 'react';
// import setTheme from '@mui/material/styles/setTheme'
import createTheme from '@mui/material/styles/createTheme';

// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
// When using TypeScript 3.x and below
import '@mui/lab/themeAugmentation';
import Button from '@mui/material-next/Button';

import blueTheme from './colors/blue-theme.json';
import greenTheme from './colors/green-theme.json';
import redTheme from './colors/red-theme.json';
import yellowTheme from './colors/yellow-theme.json';

type themesTypes = 
typeof blueTheme
| typeof greenTheme
| typeof redTheme
| typeof yellowTheme

const palettes = [blueTheme, greenTheme, redTheme, yellowTheme]


export function ThemeSelector(){
    const [index, setIndex] = React.useState(0);
    const [theme, setTheme] = React.useState(palettes[0]);

    const clickHandler = () => {
        let newIndex = (index + 1) % palettes.length;
        let newTheme = palettes[newIndex];

        setIndex(newIndex);
        setTheme(newTheme);
    }

   
}