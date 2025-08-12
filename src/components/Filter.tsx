import { ChangeEvent } from 'react';

interface FilterProps {
  data: Record<number, string>;
  type: 'Area' | 'Type' | 'Lights' | 'Courts';
  onChange: (value: number | null) => void;
}

function Filter({ data, type, onChange }: FilterProps) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'all') {
      onChange(null);
      return;
    }
    onChange(selectedValue === '' ? null : parseInt(selectedValue, 10));
  };

  return (
    <select className='filter' id={'filter-' + type} onChange={handleSelect}>
      <option value='all'>{type}</option>
      {Object.entries(data).map(([key, value]) => (
        <option value={key} key={key}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default Filter;