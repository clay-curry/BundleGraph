import * as React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

// ===================
// this module was directly 

declare module '@mui/material/styles' {
  interface Components {
    MuiStat: {
      styleOverrides: {
        root: {},
        value: {},
        unit: {},
      },
    };
  }
}


// ===================
// Use the styled API with name and slot parameters to create the slots, as shown below:

const StatRoot = styled('div', {
  name: 'MuiStat', // The component name
  slot: 'root', // The slot name
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  letterSpacing: '-0.025em',
  fontWeight: 600,
}));

const StatValue = styled('div', {
  name: 'MuiStat',
  slot: 'value',
})(({ theme }) => ({
  ...theme.typography.h3,
}));

const StatUnit = styled('div', {
  name: 'MuiStat',
  slot: 'unit',
})(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));



// ===================
// 2. Create the component
// Assemble the component using the slots created in the previous step:
interface Props {
  value: string;
  unit: string;
}


const Stat = React.forwardRef<HTMLDivElement, Props>(
    // render: The render function for your component. React calls this function with 
    // the 'props' and 'ref' that your component received from its parent. 
    // 
    /// The JSX you return will be the output of your component.
    (function Stat(props, ref): React.ReactNode {
        const { value, unit, ...other } = props;

        
        // React.forwardRef returns a React component that you can render in JSX.
        // Unlike React components (defined as plain functions), a component returned 
        // by forwardRef is also able to receive a ref prop.
        return (
            <StatRoot ref={ref} {...other}>
            <StatValue>{value}</StatValue>
            <StatUnit>{unit}</StatUnit>
            </StatRoot>
        );
    })


);

export default Stat;



// 3. At this point, you'll be able to apply the theme to the Stat component like this:

const theme = createTheme({
  components: {
    // the component name defined in the `name` parameter
    // of the `styled` API
    MuiStat: {
      styleOverrides: {
        // the slot name defined in the `slot` and `overridesResolver` parameters
        // of the `styled` API
        root: {
          backgroundColor: '#121212',
        },
        value: {
          color: '#fff',
        },
        unit: {
          color: '#888',
        },
      },
    },
  },
});
