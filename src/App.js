import React, { Fragment, useEffect, useRef, useState } from 'react';
import Input from './Input';
import './App.css';

function HellWorld(props) {
    // stateful
    const [isTrue, setIsTrue] = useState(false)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    
    // refs
    const firstNameRef = useRef();
    const lastNameRef = useRef(null); // forward ref use 'null'
    const dobRef = useRef(null);

    const toggleTrue = () => {
        if (isTrue) {
            setIsTrue(false)
            return
        }
        setIsTrue(true)
    }

    // This is a Hook that allows component's side effect
    useEffect(() => {
        console.log("useEffect")
        let people = [
            {
                id: 1,
                firstName: "Bell",
                lastName: "aok",
                dob: "1999-02-01",
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "zoktoo",
                dob: "1999-02-02",
            },
            {
                id: 3,
                firstName: "Cola",
                lastName: "bokagain",
                dob: "1999-02-03",
            },
        ]
        setCrowd(people)
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (lastName !== "") {
            addPerson(firstName, lastName, dob)
        }
    }

    const addPerson = (newFirst, newLast, newDOB) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,
        }

        const newList = crowd.concat(newPerson)
        const sortedCrowd = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowd(sortedCrowd);
        setFirstName("")
        setLastName("")
        setDob("")

        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        dobRef.current.value = "";
    }

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
        <form autoComplete='off' onSubmit={handleSubmit}>

            <div className='mb-3'>
                <label className='form-label' htmlFor="first-name">
                    First Name
                </label>
                <input 
                type="text" 
                name="first-name" 
                id="first-name"
                ref={firstNameRef}
                autoComplete='first-name-new' 
                className='form-control'
                onChange={(event) => setFirstName(event.target.value)}
                ></input>
            </div>

            <Input
                title="Last Name"
                type="text"
                name="last-name"
                ref={lastNameRef}
                autoComplete="last-name-new"
                className="form-control"
                onChange={(event) => setLastName(event.target.value)}
            ></Input>

            <Input
                title="DOB"
                type="date"
                name="dob"
                ref={dobRef}
                autoComplete="dob-new"
                className="form-control"
                onChange={(event) => setDob(event.target.value)}
            ></Input>

            <input type="submit" value="Submit" className='btn btn-primary'></input>

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
                <li key={m.id} className='list-group-item'>
                    {m.firstName} {m.lastName} {m.dob}
                </li>
            ))}
        </ul>
        <hr />
        </>
    );
}

export default HellWorld;