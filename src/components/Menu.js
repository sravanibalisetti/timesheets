import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function Menu() {

    const [selectedWeek, setSelectedWeek] = useState(new Date());
    const nav = useNavigate()

    const getFirstDayOfWeek = () => {
        const firstDay = selectedWeek.getDate() - selectedWeek.getDay();
        return new Date(selectedWeek.setDate(firstDay));
    };

    const getLastDayOfWeek = () => {
        const lastDay = selectedWeek.getDate() - selectedWeek.getDay() + 6;
        return new Date(selectedWeek.setDate(lastDay));
    };

    const handleWeekChange = (event) => {
        const [year, week] = event.target.value.split('-W');
        const selectedDate = new Date(year, 0, (week - 1) * 7 + 1);
        setSelectedWeek(selectedDate);
        
    };

    const getWeekNumber = (date) => {
        const oneJan = new Date(date.getFullYear(), 0, 1);
        const millisecondsInDay = 86400000;
        return Math.ceil(((date - oneJan) / millisecondsInDay + oneJan.getDay() + 1) / 7);
    };


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const backbutton = () => {
        nav('/Main')
    }
    const [selectedYear, setSelectedYear] = useState(null);
    const data = [2021, 2022, 2023, 2024];
    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
    };
    const data1 = [
        {
            value: 'month',
            label: 'January',

        },
        {
            value: 'month',
            label: 'February',
        },
        {
            value: 'month',
            label: 'March',
        },
        {
            value: 'month',
            label: 'April',
        },
        {
            value: 'month',
            label: 'May',
        },
        {
            value: 'month',
            label: 'June',
        },
        {
            value: 'month',
            label: 'July',
        },
        {
            value: 'month',
            label: 'August',
        },
        {
            value: 'month',
            label: 'September',
        },
        {
            value: 'month',
            label: 'October',
        },
        {
            value: 'month',
            label: 'November',
        },
        {
            value: 'month',
            label: 'December',
        },
        {
            value: 'month',
            label: 'All',
        },
    ];

    const [selectedWeeks, setSelectedWeeks] = useState(null);
    const data4 = ["All", "ThisWeek", "LastWeek"];
    const handleWeeksChange = (event) => {
        const selectedWeek = event.target.value;
        setSelectedWeek(selectedYear);
    };
    const data3 = [
        {
            value: 'status',
            label: 'All',

        },
        {
            value: 'status',
            label: 'Approved',
        },
        {
            value: 'status',
            label: 'Submitted',
        },
        {
            value: 'status',
            label: 'Rejected',
        },
        {
            value: 'status',
            label: 'Draft',
        },
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handletimesheetadd = () => {
        nav('/Main')
    }

    return (
        <div>
            <div style={{ width: "10%" }}
            >
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{ textAlign: "center" }}>
                            <h4 style={{ fontFamily: "sans-serif" }}>You are about add timesheets for</h4>
                            <h4 style={{ fontFamily: "sans-serif" }}> the week</h4>
                            <span>( {getFirstDayOfWeek().toLocaleDateString()}</span>-<span>{getLastDayOfWeek().toLocaleDateString()}</span>)
                            <br />
                            <span style={{ fontFamily: "revert" }}>
                                If you wish to change date, click here

                            </span>
                            <input type="week" value={`${selectedWeek.getFullYear()}-W${getWeekNumber(selectedWeek)}`} onChange={handleWeekChange} />
                            <br />
                            <Button variant="contained" style={{ backgroundColor: "#1dbb99" }} onClick={handletimesheetadd}>Proceed</Button>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
            <Card sx={{ minWidth: 275 }}>
                <Box
                    style={{ marginLeft: "0%" }}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '27ch' },
                    }}
                >
                    <div style={{ marginLeft: "3%" }}>
                        <Grid container spacing={0}>
                            <Grid xs={6} md={8}>
                                <div>
                                    <TextField
                                        id="year"
                                        select
                                        label="YEAR"
                                        defaultValue="2023"
                                    >
                                        {data.map((year) => (
                                            <MenuItem key={year} value={year}>
                                                {year}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField

                                        id="month"
                                        select
                                        label="MONTH"
                                        defaultValue="january"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="filled"
                                    >

                                        {data1.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="week"
                                        select
                                        label="WEEK"
                                        defaultValue="All"

                                    >
                                        {data4.map((weeks) => (
                                            <MenuItem key={weeks} value={weeks}>
                                                {weeks}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="status"
                                        select
                                        label="STATUS"
                                        defaultValue="All"
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="filled"
                                    >
                                        {data3.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                            </Grid>
                            <Grid xs={6} md={2}>
                                <div >
                                    <Card style={{ width: "85%", height: "1.5cm", marginTop: "3%", backgroundColor: "#00aae7" }}>
                                        <CardContent style={{ textAlign: "center" }} >
                                            <Typography sx={{ mb: 1.5 }} color="text.primary" style={{ color: "white" }}>
                                                <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                                                    <SearchIcon />
                                                    <span >Search</span>
                                                </div>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>

                            <Grid xs={6} md={2}>
                                <div style={{ marginLeft: "-6%" }}>
                                    <Card style={{ width: "85%", height: "1.5cm", marginTop: "3%", backgroundColor: "#0d416b" }}>
                                        <CardContent style={{ textAlign: "center" }}>
                                            <Button onClick={handleClickOpen}>
                                                <Typography sx={{ mb: 1.5 }} color="text.primary" style={{ color: "white" }}>
                                                    <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                                                        <AddIcon />
                                                        <span >Add</span>
                                                    </div>
                                                </Typography>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Card>
            <br />
            <br />
            <Table striped bordered hover style={{ marginLeft: "5%", width: "90%" }}>
                <thead style={{ textAlign: "center" }}>
                    <tr>

                        <th>START DATE</th>
                        <th>END DATE</th>
                        <th>HOURS</th>
                        <th>SUBMITTED DATE</th>
                        <th>STATUS</th>
                        <th>APPROVED DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>May 28,2023</td>
                        <td>Jun 3,2023</td>
                        <td>40</td>
                        <td>Jun2,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>May 21,2023</td>
                        <td>Jun 27,2023</td>
                        <td>40</td>
                        <td>Jun30,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>May 14,2023</td>
                        <td>Jun 20,2023</td>
                        <td>40</td>
                        <td>Jun30,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>May 7,2023</td>
                        <td>Jun 13,2023</td>
                        <td>40</td>
                        <td>Jun16,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Apr 30,2023</td>
                        <td>Jun 6,2023</td>
                        <td>40</td>
                        <td>Jun8,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>

                    <tr>
                        <td>Apr 23,2023</td>
                        <td>Apr 29,2023</td>
                        <td>40</td>
                        <td>Apr28,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Apr 16,2023</td>
                        <td>Apr 22,2023</td>
                        <td>40</td>
                        <td>Apr24,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Apr 9,2023</td>
                        <td>Apr 15,2023</td>
                        <td>40</td>
                        <td>Apr14,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>Apr 2,2023</td>
                        <td>Apr 8,2023</td>
                        <td>40</td>
                        <td>Apr 6,2023</td>
                        <td><button style={{ backgroundColor: "#00aae7", color: "white" }} onClick={backbutton}>Submitted</button></td>
                        <td>N/A</td>
                    </tr>


                </tbody>
            </Table>
            {/* </CardContent>
                </Card> */}

            {/* </div> */}


            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
        <DemoItem label="1 calendar">
          <DateRangeCalendar calendars={1} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}

        </div>
    )


}

export default Menu