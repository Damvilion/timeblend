import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

const CalendarPage = () => {
    const today = dayjs();
    const twoPM = dayjs().set('hour', 14).startOf('hour');
    const threePM = dayjs().set('hour', 15).startOf('hour');

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container columns={{ xs: 1, lg: 2 }} spacing={4} alignItems='center' justifyContent='center'>
                    <Grid item>
                        <DateCalendar defaultValue={today} disableFuture />
                    </Grid>
                    <Grid item>
                        <TimeClock defaultValue={twoPM} maxTime={threePM} />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export default CalendarPage;
