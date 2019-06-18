import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import moment from "moment";

export class View extends Component {
  render() {
    const date = new Date(this.props.selectedEmail.date);

    const calendar = moment(date).format("ll");

    const time = moment(date).format("LT");

    const when = moment(date)
      .startOf("hour")
      .fromNow();

    const avatarStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#3f51b5",
      fontSize: "16px",
      fontWeight: 300,
      color: "#fff",
      letterSpacing: "1px"
    };

    const signature = {
      splitLet: this.props.selectedEmail.name
        .match(/\b(\w)/g)
        .join("")
        .split("", 2)
    };

    return (
      <Paper style={{ width: "85%", margin: "auto", padding: "15px" }}>
        <Typography variant="h3" gutterBottom>
          {this.props.selectedEmail.subject}
        </Typography>
        <Divider variant="middle" />
        <ListItem
          style={{
            display: "flex",
            fleDirection: "row",
            height: "100%",
            justifyContent: "center",
            aligItems: "center"
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp">
              <span style={avatarStyle}>{signature.splitLet}</span>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {this.props.selectedEmail.email}
                </Typography>
              </Fragment>
            }
            secondary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {this.props.selectedEmail.name}
                </Typography>
              </Fragment>
            }
          />
          <ListItemText
            primary={
              <Fragment>
                <Typography component="span" variant="body2" color="textPrimary">
                  {`${calendar} at ${time} (${when})`}
                </Typography>
              </Fragment>
            }
            style={{
              display: "flex",
              flexDirection: "row-reverse"
            }}
          />
        </ListItem>
        <ListItemText primary={this.props.selectedEmail.body} />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  selectedEmail: state.SelectedEmail
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
