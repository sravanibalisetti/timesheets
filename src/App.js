import React, { useEffect, useState } from 'react'
import './App.css';
import Menu from './components/Menu';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const App = () => {

  const nav = useNavigate()
  const [selectedWeek, setSelectedWeek] = useState(new Date());

  const getFirstDayOfWeek = () => {
    const firstDay = selectedWeek.getDate() - selectedWeek.getDay();
    return new Date(selectedWeek.setDate(firstDay));
  };
  const getSecondDayOfWeek = () => {
    const secondDay = selectedWeek.getDate() - selectedWeek.getDay() + 1;
    return new Date(selectedWeek.setDate(secondDay));
  };
  const getThirdDayOfWeek = () => {
    const thirddDay = selectedWeek.getDate() - selectedWeek.getDay() + 2;
    return new Date(selectedWeek.setDate(thirddDay));
  };
  const getFourthDayOfWeek = () => {
    const fourthDay = selectedWeek.getDate() - selectedWeek.getDay() + 3;
    return new Date(selectedWeek.setDate(fourthDay));
  };
  const getFifthDayOfWeek = () => {
    const fifthDay = selectedWeek.getDate() - selectedWeek.getDay() + 4;
    return new Date(selectedWeek.setDate(fifthDay));
  };
  const getSixthDayOfWeek = () => {
    const sixthdDay = selectedWeek.getDate() - selectedWeek.getDay() + 5;
    return new Date(selectedWeek.setDate(sixthdDay));
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

  const [items, setItems] = useState([]);
  const [val, setVal] = useState(" ")
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
    }

  };

  const handleSubmit = (event) => {
    nav('Main')
    event.preventDefault();
    const { value1, value2, value3, value4, value5, value6, value7 } = values;
    const sum =
      parseInt(value1) +
      parseInt(value2) +
      parseInt(value3) +
      parseInt(value4) +
      parseInt(value5) +
      parseInt(value6) +
      parseInt(value7);
    setValues({
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
    })
    setValues((prevValues) => ({ ...prevValues, sum: sum.toString() }));
    // setValues(values.sum)
    // console.log(sum);
    // console.log(values);

    setItems({ "hours": sum,"startdate":getFirstDayOfWeek().toLocaleDateString(), 
     "lastdate":getLastDayOfWeek().toLocaleDateString() })


    let a = localStorage.getItem("items");
    if (a == null) {
      a = JSON.stringify([]);
    }
    let b = JSON.parse(a);
    b.push(items);
    localStorage.setItem("items", JSON.stringify(b))

  
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Menu
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          getFirstDayOfWeek={getFirstDayOfWeek}
          getSecondDayOfWeek={getSecondDayOfWeek}
          getThirdDayOfWeek={getThirdDayOfWeek}
          getFourthDayOfWeek={getFourthDayOfWeek}
          getFifthDayOfWeek={getFifthDayOfWeek}
          getSixthDayOfWeek={getSixthDayOfWeek}
         getLastDayOfWeek={getLastDayOfWeek}
          handleWeekChange={handleWeekChange}
          val={val}
          setVal={setVal}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          items={items}
          setItems={setItems}
        />} />

        <Route path='Main' element={<Main
          selectedWeek={selectedWeek}
          setSelectedWeek={setSelectedWeek}
          getFirstDayOfWeek={getFirstDayOfWeek}
          getSecondDayOfWeek={getSecondDayOfWeek}
          getThirdDayOfWeek={getThirdDayOfWeek}
          getFourthDayOfWeek={getFourthDayOfWeek}
          getFifthDayOfWeek={getFifthDayOfWeek}
          getSixthDayOfWeek={getSixthDayOfWeek}
          getLastDayOfWeek={getLastDayOfWeek}
          handleWeekChange={handleWeekChange}
          val={val}
          setVal={setVal}
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}

        />} />
      </Routes>



    </>
  )

}

export default App