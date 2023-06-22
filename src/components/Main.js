import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Main({
    
    getFirstDayOfWeek,
    getSecondDayOfWeek,
    getThirdDayOfWeek,
    getFourthDayOfWeek,
    getFifthDayOfWeek,
    getSixthDayOfWeek,
    getLastDayOfWeek,
    val,
    setVal,
    values,
    setValues,
    handleChange,
    handleSubmit

}) {

    const nav = useNavigate()
    const backbutton = () => {
        nav('/')
    }

    return (
        <div style={{ height: "100vh" }}>
            <div>
                <Card>
                    <CardContent>
                        <div>
                            <AppBar position="static" style={{ backgroundColor: "#00aae7" }}>
                                <Container maxWidth="xl" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <div>
                                        <IconButton sx={{ p: 2.5 }}>
                                            <Avatar style={{ height: "60px", width: "60px" }} alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <h3>Month</h3>
                                        <h6>June</h6>
                                    </div>
                                    <span style={{ borderLeft: "1px solid white", marginLeft: "2%" }}>
                                        <div style={{ marginLeft: "20%" }}>
                                            <h3>Week</h3>
                                            <h6>Week_of_04</h6>
                                        </div>
                                    </span>
                                    <span style={{ borderLeft: "1px solid white", marginLeft: "3%" }}>
                                        <div style={{ marginLeft: "20%" }}>
                                            <h3>Created_By</h3>
                                            <h6>Sravani_Balisetti</h6>
                                        </div>
                                    </span>
                                </Container>
                            </AppBar>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div style={{ marginTop: "3%" }}>
                <Card style={{ width: "100%" }}>
                    <CardContent >
                        <div>
                            <button
                                style={{ backgroundColor: "#00aae7" }}
                                onClick={backbutton}><ArrowBackIcon /></button>
                        </div>
                        <br /><br />
                        <div >
                            <Table
                                style={{ height: "4cm", top: "2px", left: "0.2px" }}
                            >
                                <thead style={{ textAlign: "center" }}>
                                    <tr>
                                        <th style={{ color: "#00aae7" }}>CATEGROY</th>
                                        <th><span>{getFirstDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Sunday</th>
                                        <th><span>{getSecondDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Monday</th>
                                        <th><span>{getThirdDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Tuesday</th>
                                        <th><span>{getFourthDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Wednesday</th>
                                        <th><span>{getFifthDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Thursday</th>
                                        <th><span>{getSixthDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Friday</th>
                                        <th><span>{getLastDayOfWeek().toLocaleDateString()}</span><br></br>
                                            Saturday</th>
                                    </tr>
                                </thead>
                                <tbody style={{ height: "4cm", backgroundColor: "#00aae73b" }}>
                                    <tr
                                        style={{ textAlign: "center" }}
                                    >
                                        <td style={{ fontWeight: "bold" }}>
                                            Total(Hrs)</td>
                                        <td>
                                            <input style={{ width: "160px" }}
                                                type="text"
                                                name="value1"
                                                value={values.value1}
                                                onChange={handleChange}
                                                values={val}
                                                Type="number"
                                            /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value2"
                                            value={values.value2}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value3"
                                            value={values.value3}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value4"
                                            value={values.value4}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value5"
                                            value={values.value5}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value6"
                                            value={values.value6}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                        <td> <input style={{ width: "160px" }}
                                            type="text"
                                            name="value7"
                                            value={values.value7}
                                            onChange={handleChange}
                                            values={val}
                                            Type="number"
                                        /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <br />
                        <div style={{ textAlign: "right" }}>
                            <Button variant="contained" style={{ backgroundColor: "#00aae7" }}
                                onClick={handleSubmit} >


                                submit
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

    )
}
export default Main





















