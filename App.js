import {BackHandler, WebView} from 'react-native'
import React, {Component} from 'react';

class MyWeb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false
        }
    }

    render() {
        return (
            <WebView
                // source={{uri: 'http://10.0.2.2:3000/index'}}
                source={{uri: 'https://frozen-dawn-88842.herokuapp.com/index'}}
                style={{marginTop: 23}}
                ref={(myWeb) => this.refWeb = myWeb}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            />
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        if (this.state.canGoBack) {
            this.refWeb.goBack();
        } else {
            this.props.navigation.goBack(null)
        }
        return true;
    };

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }
}

export default MyWeb;