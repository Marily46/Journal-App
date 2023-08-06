import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { navyBlueTheme } from "./";

export const AppTheme = ( { children } ) => {
  return (
    <ThemeProvider theme={ navyBlueTheme }>
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
