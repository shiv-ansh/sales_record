import React, { Component } from 'react'
import { connect } from "react-redux";
import { addStaff } from "../redux/actions";
import uuid from 'uuid-random'
export class AddStaff extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            sales: 0,
            key: uuid()
        }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }


    //handle form submissions
    handleClick = () => {

        let staff = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            sales: this.state.sales,
            key: this.state.key
        }

        this.props.add(staff);

        this.reset();
    }


    // reset function
    reset = () => {

        this.setState({
            ...this.state,
            name: "",
            email: "",
            phone: "",
            sales: 0

        })
    }
    render() {

        return (
            <>
                <div className="container border border-dark mt-5">
                    <h1 className="text-center mt-5 text-danger">Add Staff</h1>
                    <div className="p-5">

                        <div className="form-group">
                            <label htmlFor="jobTitle">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleChange}
                                name="name"
                                id="name"
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="jobQty">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                                id="email"
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Phone No.</label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                name="phone"
                                id="phone"
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Sales</label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.sales}
                                onChange={this.handleChange}
                                name="sales"
                                id="sales"
                            />

                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={() => this.handleClick()}
                            >Submit
                        </button>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        add: (staff) => dispatch(addStaff(staff))
    }

}

export default connect(null, mapDispatchToProps)(AddStaff)
