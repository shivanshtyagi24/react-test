import { Theme } from "@mui/system";

export const useStyles = {
        form:(theme: Theme) => ({
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        }),
        button:(theme: Theme) => ({
          margin: theme.spacing(1),
        }),
};

export default useStyles;
