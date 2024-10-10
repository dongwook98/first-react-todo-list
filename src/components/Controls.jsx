/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Controls.css';

export default function Controls({ addTodoItem, changeFilterType }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    addTodoItem(inputText);
    setInputText('');
  };

  const handleChangeFilterType = (event) => {
    changeFilterType(event.target.value);
  };

  return (
    <div className='controls'>
      <input
        type='text'
        className='input'
        placeholder='할 일을 추가해보세요!'
        value={inputText}
        onChange={handleChange}
      />
      <button className='button' onClick={handleClick}>
        추가
      </button>
      <select className='select' onChange={handleChangeFilterType}>
        <option value='ALL'>전체</option>
        <option value='TODO'>할 일</option>
        <option value='COMPLETED'>완료</option>
      </select>
    </div>
  );
}
