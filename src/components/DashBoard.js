import React, { Component } from 'react'
import Table from "./Table";


export class Home extends Component {
    render() {
        return (
            <>

                <div className="container">
                    <h1 className="text-center my-5 display-4">Sales Record</h1>
                    <Table />
                </div>

            </>
        )
    }
}



export default Home
