import React from 'react';
import Typography from '@material-ui/core/Typography';

function Scoring(props) {
  const { wins, losses, target, current } = props;
  return (
    <div>
      <Typography variant="h6" color="inherit">
        Wins: {wins}
      </Typography>
      <Typography variant="h6" color="inherit">
        {current} / {target}
      </Typography>
      <Typography variant="h6" color="inherit">
        Losses: {losses}
      </Typography>
    </div>
  );
}
export default Scoring;
