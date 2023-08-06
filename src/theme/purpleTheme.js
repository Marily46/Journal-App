import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const navyBlueTheme = createTheme({
    palette: {
        primary: {
            main: '#000080'
        },
        secondary: {
            main: '#0000CD'
        },
        error: {
            main: red.A400        
        }
    }

})