import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui'
const useStyles = makeStyles()((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      margin: 'auto',
      maxWidth: 800,
      padding: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  };
});

export default useStyles;