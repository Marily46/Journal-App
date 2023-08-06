import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { purpeTheme } from "./";

export const AppTheme = ( { children } ) => {
  return (
    <ThemeProvider theme={ purpeTheme }>
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
