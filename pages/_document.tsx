import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import {resetId} from 'react-id-generator';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="google" content="notranslate" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/unbound-method
CustomDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  // This function will reset the id counter. Main purpose of this function is to avoid warnings thrown by React durring server-side rendering
  resetId();

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => {
        return (props) => {
          return sheets.collect(<App {...props} />);
        };
      }
    });
  };

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [<React.Fragment key="styles">{sheets.getStyleElement()}</React.Fragment>]
  };
};
