import React, {Component} from 'react';
import {WebView} from 'react-native';

class MyWeb extends Component {
  render() {
      return (
          <WebView
              source={{uri: 'http://10.0.2.2:3000/index'}}
        />
      );
  }
}

export default MyWeb;