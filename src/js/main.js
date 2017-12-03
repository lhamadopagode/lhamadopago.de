import React from 'react';
import ReactDom from 'react-dom';
import Layout from './Layout';
import css from './style/main.css';

var render = document.querySelector('.app');

ReactDom.render(
  <Layout/> 
  ,
  render
);