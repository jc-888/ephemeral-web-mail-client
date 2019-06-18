import React, { Component } from "react";
import { connect } from "react-redux";

import Mail from "./containers/mail";

import selectMenuActions from "./redux/actions/selectEmail.action";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Mail currentMenu={this.props.currentMenu} changeMenu={this.props.changeMenu} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenu: state.SelectedMenu.menu
});

const mapDispatchToProps = {
  changeMenu: selectMenuActions.selectMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
