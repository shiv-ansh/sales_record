import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateStaff } from "../redux/actions";
import { Link } from "react-router-dom";
import uuid from 'uuid-random'
class Edit extends Component {

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

    handleClick = () => {

        let staffDetail = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            sales: this.state.sales,
            key: this.state.key
        }


        this.props.update(staffDetail, this.props.match.params.id);

        alert("Staff Details Updated");
    }


    //reset functions
    reset = () => {
        alert("Job Updated");
        this.setState({
            name: "",
            email: "",
            phone: "",
            sales: 0,
            uuid: ""
        })
    }

    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id);
        console.log(this.props.staffList);
        let data = this.props.staffList.find((ele) => ele.key === id);
        console.log("data", data);

        this.setState({
            name: data.name,
            email: data.email,
            phone: data.phone,
            sales: data.sales,
            key: data.key
        })
    }
    render() {
        console.log("props", this.props);
        return (
            <>

                <div className="container border border-dark mt-5">
                    <div className="p-2 mr-auto"><Link to="/dashboard" className="btn btn-primary btn-lg">Go Back</Link></div>
                    <h1 className="text-center mt-5 text-danger">Update Staff Details</h1>
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

const mapStateToProps = (state) => {
    return {

        staffList: state.staffList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (staff, id) => dispatch(updateStaff(staff, id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
