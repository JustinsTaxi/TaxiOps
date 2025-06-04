import { useState } from 'react';

export default function DispatchForm() {
  const [form, setForm] = useState({ driver: '', car: '' });

  return (
    <div style={{ padding: '2rem', color: 'white', background: '#222' }}>
      <h1>Justin's Taxi Dispatch</h1>
      <p>Driver: {form.driver || 'N/A'} | Car: {form.car || 'N/A'}</p>
    </div>
  );
}
