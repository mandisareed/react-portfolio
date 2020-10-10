import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
// import '../components/Resume/MReedWDResume.pdf';
import pdf from '../components/Resume/MReedWDResume.pdf';

export default () => {
  return <div>{pdf}</div>;
};
