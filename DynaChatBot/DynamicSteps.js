import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ChatBot, { Loading } from 'react-native-chatbot';

class DynamicSteps extends Component {

  constructor (props) {
    super(props)
    this.state = {
      steps: [
        {
          id: 'customstep1',
          message: 'There is no details in custom step 1',
          trigger: 'options1-menu',
        },
      ],      
    }
    console.log("[DynamicSteps]..... constructor")
  }

  componentWillReceiveProps(newProps) {
    console.log("[DynamicSteps]..... componentWillReceiveProps")

    // need to make a fetch() REST API call and populate steps
    // the steps should be binded back to the chatbot
    
  }

  render() {
    return (
      null
    );
  }
}

export default DynamicSteps;