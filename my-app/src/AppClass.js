import React, {Component, Fragment} from 'react';
import './AppClass.css';
import Input from './Input';

export default class AppClass extends Component {
    constructor(props) {
        super(props);

        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef(null);
        this.dobRef = React.createRef(null);

        this.state = {
            isTrue: false,
            crowd: [],
        };
    }

    componentDidMount() {
        this.setState({
            firstName: "",
            lastName: "",
            dob: "",
            crowd: [
            {
                id: 1,
                firstName: "BellClass",
                lastName: "aok",
                dob: "1999-02-01",
            },
            {
                id: 2,
                firstName: "JackClass",
                lastName: "zoktoo",
                dob: "1999-02-02",
            },
            {
                id: 3,
                firstName: "ColaClass",
                lastName: "bokagain",
                dob: "1999-02-03",
            },
            ]
        })
    }

    toggleTrue = () => {
        if (this.state.isTrue) {
            this.setState({
                isTrue: false,
            });
            return
        }
        this.setState({
            isTrue: true
        })
    }

    setFirstName(newName) {
        this.setState({firstName: newName})
    }

    addPerson(newFirst, newLast, newDOB) {
        let newPerson = {
            id: this.state.crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDOB,
        }

        const newList = this.state.crowd.concat(newPerson)
        const sortedCrowd = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        this.setState({crowd: sortedCrowd})
        this.setState({firstName: "", lastName: "", dob: ""})
        
        this.firstNameRef.current.value = "";
        this.lastNameRef.current.value = "";
        this.dobRef.current.value = "";
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.firstName !== "") {
            this.addPerson(this.state.firstName, this.state.lastName, this.state.dob)
        }
    }

    render (){
        return (
            <>
            <hr />
            <h1 className='h1-green'>{this.props.msg}</h1>
            <hr />
            {this.state.isTrue && 
                <Fragment>
                    <p>The current value of isTrue</p>
                    <hr/>
                </Fragment>
            }
            <hr />
            {this.state.isTrue
            ? <p>Is True</p>
            : <p className='p-orange'> Is False</p>
            }
            <a href="#!" className='btn btn-outline-secondary' onClick={this.toggleTrue}>
                Toggle IsTrue</a>
            
            <hr />
            <form autoComplete='off' onSubmit={this.handleSubmit}>

                <div className='mb-3'>
                    <label className='form-label' htmlFor="first-name">
                        First Name
                    </label>
                    <input 
                    type="text" 
                    name="first-name" 
                    id="first-name"
                    ref={this.firstNameRef}
                    autoComplete='first-name-new' 
                    className='form-control'
                    onChange={(event) => this.setFirstName(event.target.value)}
                    ></input>
                </div>

                <Input
                    title="Last Name"
                    type="text"
                    name="last-name"
                    ref={this.lastNameRef}
                    autoComplete="last-name-new"
                    className="form-control"
                    onChange={(event) => this.setState({lastName: event.target.value})}
                ></Input>

                <Input
                    title="DOB"
                    type="date"
                    name="dob"
                    ref={this.dobRef}
                    autoComplete="dob-new"
                    className="form-control"
                    onChange={(event) => this.setState({dob: event.target.value})}
                ></Input>

                <input type="submit" value="Submit" className='btn btn-primary'></input>
            </form>

            <div>
                First Name: {this.state.firstName} <br />
                Last Name: {this.state.lastName} <br />
                DOB: {this.state.dob} <br />
            </div>
            <hr />
            <h3>People</h3>
            <ul className='list-group'>
                {this.state.crowd.map((m) => (
                    <li key={m.id} className='list-group-item'>
                        {m.firstName} {m.lastName} {m.dob}
                    </li>
                ))}
            </ul>
            <hr />
            </>
        );
    }
}