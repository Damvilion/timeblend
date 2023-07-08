export type weekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type monthDay = {
    year: string;
    month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
    day: string;
};

interface weeklyDate {
    weekDay: weekDay;
    startTime: string;
    endTime: string;
}

export interface specificDate {
    month: string;
    day: string;
    year: string;
}

interface personAvailability {
    personName: string;
    weeklyDateTimes: weeklyDate[];
    specificDateTimes: specificDate[];
}

// blend matrix
// timedResponses length = Endtime-Starttime hours * 4 15 minute intervals
//  [weeklyDateMatrix: [{weekDay: true, timedResponses: [{numTimeResponses: 1, names: 'matt},1,1,1,0,0,1,1,0,0,1,2,2,0,0]},[false, timedResponses: []],[false, timedResponses: []],[true,[]],[false],[false],[]]
//
//

export interface weeklyDateMatrixDayResponse {
    names: string[],
    numTimeResponses: number;
}

export interface weeklyDateMatrixDay {
    weekDay: boolean;
    timedResponses: weeklyDateMatrixDayResponse[];
}

export interface EventType {
    id: string;
    title: string;
    type: 'weekly' | 'specific';
    specificDays?: monthDay[];
    beginTime: string;
    endTime: string;
    blendMatrix: personAvailability[];
    weeklyDateMatrix: weeklyDateMatrixDay[];
    names: string[];
    labelArray: string[];
}

//

// {
//     id: spadesession
//     title: Spade Session
//     type: 'weekly'
//     weeklyDays: ['Monday', 'Wednesday']
//     beginTime: '5PM'
//     endTime: '9PM'
//     timeZone: 'EST'
//     blendMatrix: [
//         {
//             personName: 'spade'
//             weeklyDateTimes: [
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//             ]
//         }
//         {
//             personName: 'spade'
//             weeklyDateTimes: [
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//             ]
//         }
//         {
//             personName: 'spade'
//             weeklyDateTimes: [
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//                 {
//                     weekDay: 'Monday'
//                     startTime: '5:30PM'
//                     endTime: '6:30PM'
//                 }
//             ]
//         }
//     ]
// }
