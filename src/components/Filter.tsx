// import { ProductFilters } from '@/api/products';
import { ChangeEvent } from 'react';

const AREAS: Record<number, string> = {
  0: 'Downtown',
  1: 'East York',
  2: 'Scarborough',
  3: 'North York',
  4: 'West',
  5: 'Etobicoke'
};

function Filter({ onChange }: any) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'all') {
      onChange(null);
      return;
    }
    onChange(selectedValue === '' ? null : parseInt(selectedValue, 10));
  };

  return (
    <select className='area-filter' onChange={handleSelect}>
      <option value='all'>Area</option>
      {Object.entries(AREAS).map(([key, value]) => (
        <option value={key} key={key}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default Filter;