import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import {Link} from 'react-router-dom';

export default function IconLabelButtons({title}) {

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        // startIcon={<SaveIcon />}
      >
        {title}
      </Button>
    </div>
  );
}
