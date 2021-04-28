import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Todo({ todo, toggleComplete, handleDelete }) {
  const classes = useStyles();
  const handleCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    handleDelete(todo.id);
  };


  console.log('hdhgd', todo.id);

  return (
    <div key={todo.id}  style={{ display: "flex", justifyContent: "space-around", margin:20 }}>
      <Card   className={classes.root}>
        <CardActionArea >
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
              Note 
            </Typography>
            <Typography
              style={{
                textDecoration: todo.completed ? "line-through" : null,
                textAlign: "center",
                margin: 10,
              }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {todo.task}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{color:'green'}} onClick={handleCheckBoxClick} size="small" color="primary">
           mark as completed
          </Button>
          <Button style={{color:'red'}} onClick={handleRemoveClick} size="small" color="primary">
            Remove note
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
