import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
export default createMuiTheme({
  palette: {
    primary: {
      main: '#C2185B',
    },
    secondary: {
      main: '#1565C0',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
