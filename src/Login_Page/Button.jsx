import React from 'react';
import Button from '@material-ui/core/Button';

export default function IconLabelButtons({title}) {

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
      >
        {title}
      </Button>
    </div>
  );
}
