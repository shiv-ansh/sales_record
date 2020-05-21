import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <h1 className="display-4 text-info mt-5 text-center">Sales Number</h1>
            <div className="row mt-5 text-center ">
                <div className="col-12 col-md-6 ">
                    <Link to="/add-staff" className="btn btn-primary btn-lg">Add New Staff</Link>
                </div>
                <div className="col-12 col-md-6 ">
                    <Link to="/dashboard" className="btn btn-primary btn-lg">View All Staff</Link>
                </div>

            </div>
        </div>
    )
}

export default Home
