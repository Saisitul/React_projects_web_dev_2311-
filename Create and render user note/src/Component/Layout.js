import { Drawer, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";

const drawerwidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#fefefe",
      width: "100%",
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerwidth,
    },
    drawerPaper: {
      width: drawerwidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#e65100",
    },
    title: {
        padding: theme.spacing(2)
    }
  };
});

const Layout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>Ninja Notes</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={() => history.push(item.path)}
              key={item.text}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>{props.children}</div>
    </div>
  );
};

export default Layout;
