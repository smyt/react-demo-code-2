import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ModalContent  from '../modal';
import { Layout } from 'antd';
import HeaderBlock from '../header'
import Greetings from '../greetings'
import './app.scss'

/* Using ant Layout */
const { Content } = Layout;

const App = () => {

  return (
      <main role="main">
        <Layout>
          <HeaderBlock />
          <Content>
            <Greetings />
            <ModalContent />
          </Content>
        </Layout>
      </main>
  )
};

export default App