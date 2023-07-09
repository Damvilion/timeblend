'use client';
import { EventType } from '@/types/event-model';
import React from 'react';
import { Calendar } from 'react-multi-date-picker';

interface sliderValue {
    setEventForm: React.Dispatch<React.SetStateAction<EventType>>;
}

const ReactCalendar = ({ setEventForm }: sliderValue) => {
    let info: any = [];
    const handleSelection = (value: any) => {
        // Gets the data from the calendar and makes it into an array

        info = value.map((d: any) => {return {
                                        numberDay: d.day, 
                                        weekDay: d.weekDay.shortName,
                                        month: d.month.shortName,
                                        year: d.year,
                                        timedResponses: []
                                     }; });
        console.log(info);

        function compareYear( a: any, b: any ) {
            if ( a.year < b.year){
              return -1;
            }
            if ( a.year > b.year ){
              return 1;
            }
            // then check month
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            if ( months.indexOf(a.month) < months.indexOf(b.month)){
                return -1;
            }
            if ( months.indexOf(a.month) > months.indexOf(b.month) ){
                return 1;
            }

            if ( Number(a.numberDay) < Number(b.numberDay)) {
                return -1;
            }
            if (Number(a.numberDay) > Number(b.numberDay)) {
                return 1;
            }
            
            return 0;
          }

          info.sort(compareYear);

        setEventForm((prev) => ({
            ...prev,
            specificDateMatrix: info,
        }));
    };

    return (
        <div>
            <Calendar
                format="YYYY,MMMM,DDDD"
                value={null}
                highlightToday={false}
                onChange={(e) => {
                    handleSelection(e);
                }}
                multiple
                range={false}
            />
        </div>
    );
};

export default ReactCalendar;
