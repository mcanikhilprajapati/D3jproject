import React, {Component} from 'react'

class Table extends Component {

    render() {
        const {formData} = this.props;

        return (
            <table id="customers">
                <tbody>
                {
                    formData && formData.length > 0 &&
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {/*<th>Email</th>*/}
                        {/*<th>Number</th>*/}
                        <th>Gender</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Address</th>
                    </tr>
                }
                {
                    formData && formData.length > 0 &&
                    formData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                {/*<td>{data.email}</td>*/}
                                {/*<td>{data.number}</td>*/}
                                <td>{data.selectedGender}</td>
                                <td>{data.age}</td>
                                <td>{data.city}</td>
                                <td>{data.country}</td>
                                <td>{data.address}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default Table
