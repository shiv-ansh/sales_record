import React from 'react'
import { connect } from "react-redux";
import { deleteStaff, setPerPage, sortAscending, sortDescending } from "../redux/actions";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            display: "",
            staffList: [],
        }
    }

    //sorting salary in the ascending order
    handleSalesAsc = () => {
        this.setState({
            staffList: this.state.staffList.sort((a, b) => a.sales - b.sales)
        })
    }

    //sorting salary in the decending order
    handleSalesDsc = () => {
        this.setState({
            staffList: this.state.staffList.sort((a, b) => b.sales - a.sales)
        })
    }

    componentDidMount() {

        this.setState({
            staffList: this.props.staffList
        })
    }
    handleOnChange = (event) => {

        this.setState({
            display: event.target.value
        }, () => this.props.setPerPage(this.state.display))
    }




    render() {

        console.log(this.state);

        return (
            <>
                <div className="text-center">
                    <div className="btn-group  m-3">
                        <button type="button" class="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By Sales
                         </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" onClick={() => this.props.sortAscending()}>Low to High</button>
                            <button className="dropdown-item" onClick={() => this.props.sortDescending()}>High to low</button>
                        </div>
                    </div>
                    <div class="btn-group">
                        <label className="text-primary" for="limit">Items Per Page</label>
                        <select onChange={this.handleOnChange} class="custom-select" name="limit" id="limit">
                            <option selected>Per Page Limit</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>


                </div>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Sales</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.staffList !== undefined && (this.props.staffList.filter((a, i) => i >= this.props.perPage * (this.props.currentPage - 1) && i < this.props.perPage * (this.props.currentPage)).map((ele) => (
                            <tr key={ele.key}>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.sales}</td>

                                <td><Link to={`/edit/${ele.key}`} className="btn btn-success">Edit</Link></td>
                                <td><button className="btn btn-danger" onClick={() => this.props.delete(ele.key)}>Delete</button></td>
                            </tr>
                        )))}
                    </tbody>
                </table>
                <Pagination />
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    staffList: state.staffList,
    perPage: state.perPage,
    currentPage: state.currentPage
})

const mapDispatchToProps = (Dispatch) => {
    return {
        delete: (key) => Dispatch(deleteStaff(key)),
        setPerPage: (value) => Dispatch(setPerPage(value)),
        sortAscending: () => Dispatch(sortAscending()),
        sortDescending: () => Dispatch(sortDescending())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Table)
