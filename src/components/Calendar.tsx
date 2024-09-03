import { useState } from 'react';
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getMonthDays = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

export default function Calendar() {

    return(
        <div className={''}></div>
    )
}