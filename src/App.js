import React, { Fragment, useEffect, useState } from 'react';
import Input from './Input';
import './App.css';

function HellWorld(props) {
    // stateful
    const [isTrue, setIsTrue] = useState(false)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }

    useEffect(() => {
        console.log("useEffect")
        let people = [
            {
                id: 1,
                name: "Bell",
                lastname: "ok",
            },
            {
                id: 2,
                name: "Jack",
                lastname: "oktoo",
            },
            {
                id: 3,
                name: "Cola",
                lastname: "okagain",
            },
        ]
        setCrowd(people)
    }, []);

    return (
        <>
        <hr />
        <h1 className='h1-green'>{props.msg}</h1>
        <hr />
        {isTrue && 
            <Fragment>
                <p>The current value of isTrue</p>
                <hr/>
            </Fragment>
        }
        <hr />
        {isTrue
        ? <p>Is True</p>
        : <p className='p-orange'>Is False</p>
        }
        <a href="#!" className='btn btn-outline-secondary' onClick={toggleTrue}>Toggle IsTrue</a>
        <hr />
        <form autoComplete='off'>

            <div className='mb-3'>
                <label className='form-label' htmlFor="first-name">
                    First Name
                </label>
                <input 
                type="text" 
                name="first-name" 
                id="first-name" 
                autoComplete='first-name-new' 
                className='form-control'
                onChange={(event) => setFirstName(event.target.value)}
                ></input>
            </div>

            <Input
                title="Last Name"
                type="text"
                name="last-name"
                autoComplete="last-name-new"
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
            ></Input>

            <Input
                title="DOB"
                type="date"
                name="dob"
                autoComplete="dob-new"
                className="form-control"
                onChange={(event) => setDob(event.target.value)}
            ></Input>

        </form>
        <div>
            First Name: {firstName} <br />
            Last Name: {lastName} <br />
            DOB: {dob} <br />
        </div>
        <hr />
        <h3>People</h3>
        <ul className='list-group'>
            {crowd.map((m) => (
                <li key={m.id} className='list-group-item'>{m.name}</li>
            ))}
        </ul>
        <hr />
        </>
    );
}

export default HellWorld;