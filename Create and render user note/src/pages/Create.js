import React, { useState }from "react";
import { Typography, Button, Container, makeStyles, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@material-ui/core";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  field: {
    marginTop:20,
    marginBottom:20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  const history= useHistory();
  const [Title,setTitle]=useState();
  const [Details,setDetails]=useState();
  const [Category,setCategory]=useState();
  const [TitleError,setTitleError]=useState(false);
  const [DetailsError,setDetailsError]=useState(false);

  const handleSubmit= (e) =>{
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if(Title.trim() == ''){
      setTitleError(true )
    }

    if(Details.trim() == ''){
      setDetailsError(true)
    }

    if(Title && Details){
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({Title,Details,Category})
      }).then(()=> history.push('/'))
    }
  }
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="primary"
        align="left"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        onChange={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Name"
        variant="filled"
        fullWidth
        required
        error={TitleError}
        />
      
        <TextField
        onChange={(e)=>setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="filled"
        multiline
        rows= {4}
        fullWidth
        required
        error={DetailsError} 
        />
        
        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={Category} onChange={(e)=>setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />} label="Money"/>
          <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
          <FormControlLabel value="reminder" control={<Radio />} label="Reminder"/>
          <FormControlLabel value="work" control={<Radio />} label="Work"/>
        </RadioGroup>
        </FormControl>
        
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => {
          console.log("You clicked me");
        }}
        startIcon={<AcUnitOutlinedIcon />}
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
      </form>
    </Container>
  );
}
