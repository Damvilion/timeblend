'use client';
import React from 'react';
import { Calendar } from 'react-multi-date-picker';

const ReactCalendar = () => {
    let info: any = [];
    const handleSelection = (value: any) => {
        // Gets the data from the calendar and makes it into an array
        const fullValue: string[] = value.toString().split(',');
        // Sorts the data
        const sortedDates: string[] = fullValue.sort((a, b) => {
            const dateA: Date = new Date(a);
            const dateB: Date = new Date(b);
            return dateA.getTime() - dateB.getTime();
        });

        // Sorts the value of all the dates into an object
        const formated = () => {
            for (const date of sortedDates) {
                const [year, month, day] = date.split('/');
                const newDate = {
                    year: year,
                    month: month,
                    day: day,
                };

                info.push(newDate);
            }
        };
        //  Resets the array then Sorts the value of all the dates into an object
        info = [];
        formated();
        console.log(info);
    };

    return (
        <div>
            <Calendar value={null} onChange={handleSelection} multiple range={false} />
        </div>
    );
};

export default ReactCalendar;
