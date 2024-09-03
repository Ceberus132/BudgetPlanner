import { useState } from 'react';
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getMonthDays = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

export default function Calendar() {
    const [year] = useState<number>(new Date().getFullYear());

    return(
        <div className={''}>
            {months.map((month, monthIndex) => (
                <div key={month} className={''}>
                    <h2 className={''}>{month} {year}</h2>
                    <div className={'grid grid-cols-7 gap-2 text-center'}>
                        {days.map((day) => (
                            <div key={day} className={''}>{day}</div>
                        ))}

                        {Array.from({length: getMonthDays(year, monthIndex)}, (_, dayIndex) => {
                            const formatedDate = new Date(year, monthIndex, dayIndex +1).toLocaleDateString('de-DE');
                            return(
                                <div key={dayIndex}>
                                    <div className={''}>{formatedDate}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}