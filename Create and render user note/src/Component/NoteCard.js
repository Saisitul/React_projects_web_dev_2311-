import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {  IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyle= makeStyles ({
    test: {
       border: (notee) => {
           if(notee.Category == 'work' ){
               return '1px solid red';
           }
       } 
    }
})
const NoteCard = (props) => {
const classes= useStyle(props.note)
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={()=> {props.handleDelete(props.note.id)}}>
              <DeleteOutlined />
            </IconButton>
          }
          title={props.note.Title}
          subheader={props.note.Category}
        />
        <CardContent>
         <Typography variant="body2" color="textSecondary">
             {props.note.Details}
         </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
