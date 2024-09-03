import { useState } from 'react';
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getMonthDays = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getPreviousMonthDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const previousDays = getMonthDays(year, month - 1);
    return Array.from({length: firstDay}, (_, i) => previousDays - firstDay + i + 1)
}

export default function Calendar() {
    const [year] = useState<number>(new Date().getFullYear());

    return(
        <div className={''}>
            {months.map((month, monthIndex) => (
                <div key={month} className={''}>
                    <h2 className={'text-xl font-bold'}>{month} {year}</h2>
                    <div className={'grid grid-cols-7 gap-2 text-center'}>
                        {days.map((day) => (
                            <div key={day} className={''}>{day}</div>
                        ))}

                        {getPreviousMonthDays(year, monthIndex).map((day) => (
                            <div key={day} className={''}>{day}</div>
                        ))}

                        {Array.from({length: getMonthDays(year, monthIndex)}, (_, dayIndex) => {
                            const formatedDate = new Date(year, monthIndex, dayIndex +1).toLocaleDateString('de-DE');
                            return(
                                <div key={dayIndex} className={'bg-gray-800 rounded-lg shadow min-h-14'}>
                                    <div className={''}>{formatedDate}</div>
                                    <div className={''}></div>
                                    <div className={''}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}