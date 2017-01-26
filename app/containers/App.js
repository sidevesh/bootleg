// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callWindowResize } from '../actions';

class AppComponent extends Component {
  props: {
    children: HTMLElement
  };

  updateDimensions(props_obj) {
    let timer;
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    props_obj.onWindowResize(width, height);
  }

  updateDimensionsSmooth(props_obj, instant) {
    let self = this;
    if(instant == true) {
      self.updateDimensions(props_obj);
    }
    else {
      if ( !self.resizeTimeout ) {
        self.resizeTimeout = setTimeout(function() {
          self.resizeTimeout = null;
          self.updateDimensions(props_obj);
        }, 66);
      }
    }
  }

  componentWillMount() {
    let self = this;
    this.updateDimensionsSmooth(self.props, true);
  }

  componentDidMount() {
    let self = this;
    self.resizeTimeout = null;
    window.addEventListener("resize", () => {self.updateDimensionsSmooth(self.props, false)});
  }

  componentWillUnmount() {
    let self = this;
    window.removeEventListener("resize", () => {self.updateDimensionsSmooth});
    clearTimeout(self.resizeTimeout);
  }

  render() {
    return (
      <div style={{'overflow':'hidden'}}>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    windowWidth: state.themeState.windowWidth,
    windowHeight: state.themeState.windowHeight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWindowResize: (width, height) => {
      dispatch(callWindowResize(width, height));
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App;