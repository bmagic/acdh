// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage()
        const styles = flush()
        return {html, head, errorHtml, chunks, styles}
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css"/>
                <link rel="stylesheet" href="/static/css/main.css" />
            </Head>
            <body>
            {this.props.customValue}
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}