import React from 'react';
import './template.css'

// children: 내부 컴포넌트
const Template = ({ children, todoLength }) => {
  return (
    <div className='template'>
      <h1 className='title'>오늘의 할 일 ({todoLength}) </h1>
      <div>{children}</div>
    </div>
  )
};

export default Template;