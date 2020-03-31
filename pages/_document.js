import Document, { Html, Main, NextScript ,Head} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { render } from 'react-dom'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(){
  return(
    <Html>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" href="/static/images/psu_icon.png"></link>
      <link rel="stylesheet" href="/static/styles/fonts.css"></link>
      <link rel='stylesheet'   href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.min.css' />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
}

