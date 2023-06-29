type weekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type monthDay = {
    year: string;
    month: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December'
    day: string;
};

interface weeklyDate {
    weekDay: weekDay;
    startTime: string;
    endTime: string;
}

interface specificDate {
    month: string;
    day: string;
    year: string;
    startTime: string;
    endTime: string;
}

interface personAvailability {
    personName: string;
    weeklyDateTimes: weeklyDate[];
    specificDateTimes: specificDate[];
}

interface eventType {
    id: string;
    title: string;
    type: 'weekly' | 'specific';
    weeklyDays?: weekDay[];
    specificDays?: monthDay[];
    beginTime: string;
    endTime: string;
    timeZone: string;
    blendMatrix: personAvailability[];
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
