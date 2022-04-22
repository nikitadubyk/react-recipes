import { createGlobalStyle, css } from 'styled-components'

interface Props {
    theme: string
}

export const GlobalStyle = createGlobalStyle(
    (props: Props) => css`
        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: ${({ theme }) => theme.body};
            color: ${({ theme }) => theme.text};
            transition: background 0.2s ease-in, color 0.2s ease-in;
        }

        a,
        a p {
            color: ${({ theme }) => theme.text};
        }

        svg {
            fill: ${({ theme }) => theme.text};
        }

        * {
            box-sizing: border-box;
        }

        p,
        h2 {
            margin: 0;
            padding: 0;
        }

        code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
        }
    `
)

export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620',
    loader: '#000',
    textForm: '#000',
    formColor: 'rgb(57, 255, 189)',
    backgroundStar: 'rgb(19, 163, 0)',
}
export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1',
    loader: '#fff',
    textForm: '#000',
    formColor: 'rgb(151, 83, 241)',
    backgroundStar: 'rgb(151, 83, 241)',
}
