import React from "react";
import { useState } from "react";
import { default as MuiCard } from '@mui/material/Card'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactCardFlip from 'react-card-flip';


export default function Card() {
  const [isFlipped, setIsFlipped] = useState(true)
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  const frontCard = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          This is a word
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Click to flip</Button>
      </CardActions>
    </React.Fragment>
  );

  const backCard = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          This is a different word
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Click to flip</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        {/* https://mui.com/material-ui/react-card/ */}
        <Box sx={{ minWidth: 275 }}>
          <MuiCard variant="outlined">{frontCard}</MuiCard>
        </Box>


        <Box sx={{ minWidth: 275 }}>
          <MuiCard variant="outlined">{backCard}</MuiCard>
        </Box>
      </ReactCardFlip>
    </div>
  );
}