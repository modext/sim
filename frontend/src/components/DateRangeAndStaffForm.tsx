"use client";
import React, { useCallback, useState } from "react";
import { DatePicker, TextField } from "@shopify/polaris";

const DateRangeAndStaffForm: React.FC = () => {
    const [{month, year}, setDate] = useState({month: 1, year: 2018});

  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  });
  const handleMonthChange = useCallback(
    (month: number, year: number) => setDate({month, year}),
    [],
  );
  return (
    <div>
      <h2>Date Range and Staff Form</h2>
      <DatePicker
            month={selectedDates.start.getMonth()}
            year={selectedDates.start.getFullYear()}
            onChange={setSelectedDates}
            onMonthChange={handleMonthChange}
          />
      <TextField label="Staff Member Name" autoComplete="off" />
    </div>
  );
};

export default DateRangeAndStaffForm;
// "use client"
// import { useCallback, useState } from 'react';
// import { Page, Card, DatePicker, Button, FormLayout } from '@shopify/polaris';

// export default function Simulate() {
// //   const [startDate, setStartDate] = useState(new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'));
// //   const [endDate, setEndDate] = useState(new Date());
// const [{month, year}, setDate] = useState({month: 1, year: 2018});

//   const [selectedDates, setSelectedDates] = useState({
//     start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
//     end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
//   });
//   const handleMonthChange = useCallback(
//     (month: number, year: number) => setDate({month, year}),
//     [],
//   );
//   const handleSubmit = () => {
//     console.log(selectedDates.start, selectedDates.end);
//   };

//   return (
//     <Page fullWidth>
//       <Card >
//         <FormLayout>
//           <DatePicker
//             month={selectedDates.start.getMonth()}
//             year={selectedDates.start.getFullYear()}
//             onChange={setSelectedDates}
//             onMonthChange={handleMonthChange}
//           />
          
//           <Button onClick={handleSubmit}>Simulate Commissions</Button>
//         </FormLayout>
//       </Card>
//     </Page>
//   );
// }