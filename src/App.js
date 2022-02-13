import './App.scss';
import Main from './Main'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#5d1049',
      light: '#8d3f74',
      dark: '#310021'
    },
    secondary: {
      main: '#105d25',
      light: '#458b4f',
      dark: '#003200'
    },
    error: {
      main: '#b00020'
    },
    background: {
      default: '#fafafa',
      paper: '#fff'
    }
  },
});

function App() {
  // console.log('key: ', process.env.REACT_APP_API_KEY)
  // console.log('public: ', process.env)
  return (
    <ThemeProvider theme={theme}>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      < div >

        <Main />
      </ div>
    </ThemeProvider>
  );
}

export default App;
