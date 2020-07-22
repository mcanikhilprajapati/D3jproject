import React, {Component} from 'react'
import {toastAlert, toastAlertType} from "../../CommonComponents/Toast/Toast.js";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            selectedGender: 'Male',
            city: 'London',
            country: 'australia',
            termandcondChkbx: false,
            age: '18',
            number: "",
            address: ""
        }
    }

    handleFirstName = (e) => {
        this.setState({
            fname: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleGenderChange = (e) => {
        this.setState({
            selectedGender: e.target.value
        })
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleCountryChange = (e) => {
        this.setState({
            country: e.target.value
        })
    }

    handleChangeTermandcondChkbx = (e) => {
        this.setState({
            termandcondChkbx: e.target.checked
        })
    }

    handleLastName = (e) => {
        this.setState({
            lname: e.target.value
        })
    }

    handleNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleSubmit = () => {
        const {fname, lname, email, selectedGender, city, country, termandcondChkbx, age, number, address} = this.state;
        const data = {
            fname: fname,
            lname: lname,
            email: email,
            selectedGender: selectedGender,
            city: city,
            country: country,
            termandcondChkbx: termandcondChkbx,
            age: age,
            number: number,
            address: address
        }

            this.props.handleSubmitForm(data)


    }

    render() {
        const {fname, lname, email, selectedGender, city, country, age, number, address} = this.state;
        return (
            <div>
                <div className="left">
                    <label htmlFor="fname">First Name</label>
                    <br/>
                    <input type="text" id="fname" value={fname} onChange={this.handleFirstName} name="firstname"
                           placeholder="Your name.."/>
                    <br/>
                    {/*<label htmlFor="country">Email</label>*/}
                    {/*<br/>*/}
                    {/*<input type="email" id="fname" name="email" value={email} onChange={this.handleEmail}*/}
                    {/*       placeholder="Email.."/>*/}
                    <br/>
                    <label htmlFor="country">Gender</label>
                    <br/>
                    <select id="Gender" name="Gender" value={selectedGender} onChange={this.handleGenderChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="transgender">transgender</option>
                    </select>
                    <br/>
                    <label htmlFor="city">City</label>
                    <br/>
                    <select id="country" name="country" value={city} onChange={this.handleCityChange}>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="Bangkok">Bangkok</option>
                        <option value="Pattaya">Pattaya</option>
                        <option value="Osaka ">Osaka</option>
                        <option value="Mecca">Mecca</option>
                    </select>
                    <br/>

                    <label htmlFor="country">Country</label>
                    <br/>
                    <select id="country" name="country" value={country} onChange={this.handleCountryChange}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="india">India</option>
                        <option value="russia">Russia</option>
                        <option value="brazil">Brazil</option>
                    </select>
                    <br/>

                    
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                </div>
                <div className="right">
                    <label htmlFor="lname">Last Name</label>
                    <br/>
                    <input type="text" id="lname" name="lastname" value={lname} onChange={this.handleLastName}
                           placeholder="Your last name.."/>
                    <br/>
                    {/*<label htmlFor="number">Number</label>*/}
                    {/*<br/>*/}
                    {/*<input type="number" id="fname" value={number} onChange={this.handleNumber} name="number"*/}
                    {/*       placeholder="Number.."/>*/}
                    <br/>
                    <label htmlFor="Age">Age</label>
                    <br/>
                    <select id="Age" name="Age" value={age} onChange={this.handleAgeChange}>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                    <br/>
                    <label htmlFor="address">Address</label>
                    <br/>
                    <textarea value={address} onChange={this.handleAddress}>Address...</textarea>
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

export default Form
