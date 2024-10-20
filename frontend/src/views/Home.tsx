import { useState } from 'react';
import ListComponent from '../components/ListComponent';
import RangeDatePickerComponent from '../components/RangeDatePickerComponent';

export default function Home() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#4a90e2',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          background: 'linear-gradient(to right, #1c1c1c, #4a90e2)',
          borderRadius: '10px',
        }}
      >
        <span role="img" aria-label="asteroid" style={{ marginRight: '10px' }}>
          ☄️
        </span>
        Asteroids Information
      </div>
      <div style={{ padding: '10px' }}>
        <RangeDatePickerComponent onStartDate={setStartDate} onEndDate={setEndDate} />
      </div>
      <div>
        <ListComponent startDate={startDate} endDate={endDate} />
      </div>
    </>
  );
}
