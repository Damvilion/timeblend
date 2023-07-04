'use client';
import { EventType, specificDate } from '@/types/event-model';
import React from 'react';
import { Calendar } from 'react-multi-date-picker';

interface sliderValue {
    setEventForm: React.Dispatch<React.SetStateAction<EventType>>;
}

const ReactCalendar = ({ setEventForm }: sliderValue) => {
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
                const newDate: specificDate = {
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
    };

    return (
        <div>
            <Calendar
                value={null}
                onChange={(e) => {
                    handleSelection(e);
                    setEventForm((prev) => ({
                        ...prev,
                        specificDays: info,
                    }));
                }}
                multiple
                range={false}
            />
        </div>
    );
};

export default ReactCalendar;
