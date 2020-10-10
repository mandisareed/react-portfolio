import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../components/Resume/MReedWDResume.pdf';

export default () => {
  const resume = '../components.Resume.MReedWDResume.pdf';

  return (
    <div>
      <h1>Hello World!</h1>
      {resume}/{' '}
    </div>
  );
};
