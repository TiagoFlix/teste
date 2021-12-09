import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from "next/head";
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/fonts.css';

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <>
            <Head>
                <title>Lean Work Tiago Dias Maciel Teste</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Meu app de cadastro no LocalStorage" />
                <meta name="viewport" content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui" />
                <meta name="robots" content="index, follow" />
                <meta name="referrer" content="origin" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="author" content="Tiago Maciel" />
                <link rel="canonical" href="base.com.br" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App;