import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import styles from './IconTextfield.module.css';

function IconTextField(props) {
  return (
    <Box className={styles.icon_text_field}>
      {props.icon}
      <TextField {...props}/>
    </Box>
  );
}

export default IconTextField;
