import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ChatBot from 'react-native-chatbot';
import DynamicSteps from './DynamicSteps';

const steps = [
  {
    id: 'welcome',
    message: 'Welcome User!!!',
    trigger: 'intro',
  },
  {
    id: 'intro',
    message: 'I am a Dynamic Chat Bot',
    trigger: 'options1',
  },
  {
    id: 'options1',
    message: 'How can I help you today?',
    trigger: 'options1-menu',
  },
  {
    id: 'options1-menu',
    options: [
      { value: 1, label: 'Weather', trigger: 'weather' }, 
      { value: 2, label: 'News', trigger: 'news' }, 
      { value: 3, label: 'Appointments', trigger: 'appointments' }, 
      { value: 4, label: 'Dynamic Steps', trigger: 'custom' }, 
      { value: 5, label: 'End', trigger: 'end' }, 
    ],
  },
  {
    id: 'weather',
    message: 'Check your Weather App! What else?',
    trigger: 'options1-menu',
  },
  {
    id: 'news',
    message: 'For news, check CNN News website. What else?',
    trigger: 'options1-menu',
  },
  {
    id: 'appointments',
    message: 'There are no appointments available. What else?',
    trigger: 'options1-menu',
  },
  {
    id: 'custom',
    component: <DynamicSteps/>,
    replace: true,
    asMessage: true, 
    trigger: 'end',
  },
  {
    id: 'end',
    message: 'Thank You',
    end: true,
  },
];

class App extends Component {
  render() {
    return (
      <View>
      <ChatBot steps={steps} />
      </View>
    );
  }
}

export default App;