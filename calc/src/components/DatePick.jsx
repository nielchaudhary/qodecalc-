//Date Picker Component 
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [selectedDate, setDate] = useState(new Date());

  useEffect(() => {
    // Set the selected date to today's date
    setDate(new Date());
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const customInputStyle = {
    padding: '7px',
    margin: '3px 0 8px 0',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '20px'
  };

  return (
    <div>
      <label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setDate(date)}
          customInput={<input style={customInputStyle} readOnly />}
        />
      </label>
    </div>
  );
};

export default DatePick;
