import '../styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import useTheme from '../lib/themes/index';
import { Session } from 'next-auth';
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";


export default function App({ Component, pageProps: {  ...pageProps } }: AppProps<{ session: Session }>) {
    const theme = useTheme()
    return <>
            <AppProvider i18n={en}>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme >
                        <Component {...pageProps} />
                    </CssBaseline>
                </ThemeProvider>
            </AppProvider>
    </>
}
