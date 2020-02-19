import React, { Component } from "react";
import { Layout } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAction } from "../../actions/simpleAction";
import { Simple } from "../../components/simple/Simple";
import "./Page.scss";

const SOME_CONSTANT = 10;

/**
 * Page
 */
class Page extends Component {
  /**
   * constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      someData: 0
    };
    this.bindMethods();
  }

  /**
   * bindMethods
   */
  bindMethods() {
    this.clickHandler = this.clickHandler.bind(this);
  }

  /**
   * clickHandler
   */
  clickHandler(e) {
    this.setState({ someData: SOME_CONSTANT });
    this.props.getAction({ someData: SOME_CONSTANT });
  }

  /**
   * render
   */
  render() {
    const { data } = this.props;
    return (
      <Layout className="page">
        <Simple data={data} clickHandler={this.clickHandler} />
      </Layout>
    );
  }
}

/**
 * mapStateToProps
 */
const mapStateToProps = state => ({
  data: state.simple.data,
});

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAction: getAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);