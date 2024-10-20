import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

interface RangeDatePickerProps {
  onStartDate: (startDate: string) => void;
  onEndDate: (endDate: string) => void;
}

export default function RangeDatePickerComponent({ onStartDate, onEndDate }: RangeDatePickerProps) {
  const onRangeChange = (dates: null | (Dayjs | null)[]) => {
    if (dates) {
      onStartDate(String(dates[0]?.toISOString().split('T')[0]));
      onEndDate(String(dates[1]?.toISOString().split('T')[0]));
    } else {
      onStartDate('');
      onEndDate('');
    }
  };

  return (
    <div>
      <RangePicker
        id={{
          start: 'startInput',
          end: 'endInput',
        }}
        onChange={onRangeChange}
      />
    </div>
  );
}
