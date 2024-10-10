import './Controls.css';

export default function Controls() {
  return (
    <div className='controls'>
      <input
        type='text'
        className='input'
        placeholder='할 일을 추가해보세요!'
      />
      <button className='button'>추가</button>
      <select className='select' name='' id=''>
        <option value='all'>전체</option>
        <option value='continue'>할 일</option>
        <option value=''>완료</option>
      </select>
    </div>
  );
}
