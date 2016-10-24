/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

export default class raisevest extends Component {
  constructor(props) {
    super(props)
    // var data = fetch('https://api.github.com/users/kuntau', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // });
    this.state = {
      // url: 'https://api.github.com/users/kuntau',
      url: 'http://www.papsb.com.my/data/routes.json',
      // url: 'https://facebook.github.io/react-native/movies.json'
      // data: data
      dummy: 'RR'
    }
    var data = this.getGithubData(this.state.url);
    this.state.data = data
  };

  getGithubData = (url) => {
    return fetch(url)
      .then((response) => {
        // var temp = JSON.parse(response);
        // console.log(response)
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        // debugger
        return responseJson
      })
      .catch((error) => console.error(error))
  };

  _onPressButton = () => {
    console.log('_onPressButton()')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          XHR Experiment!
        </Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={styles.button}>
            Load!
          </Text>
        </TouchableHighlight>
      <Text style={styles.instructions}>
          Double tap {this.state.dummy} on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
  // render() {
  //   return (
  //     <WebView source={{uri: 'http://www.papsb.com.my'}} />
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#222222'
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15,
    borderWidth: 2,
    borderRadius: 5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('raisevest', () => raisevest);
