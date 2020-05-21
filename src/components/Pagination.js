import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../redux/actions'

export class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { perPage, currentPage, staffList, setCurrentPage } = this.props
        let length = staffList.length
        let totalPages = length / perPage
        const pageList = []
        for (let i = 1; i <= totalPages + 1; i++) {

            pageList.push(<button key={i} onClick={() => setCurrentPage(i)} type="button" className={`ml-1  btn ${currentPage === i ? 'btn-primary' : 'btn-secondary'}`}>{i}</button>)
        }
        console.log(pageList)
        return (
            <>

                <div className="text-center">
                    {totalPages !== 0 && pageList}
                </div>

            </>
        )
    }
}
const mapStateToProps = state => ({
    perPage: state.perPage,
    currentPage: state.currentPage,
    staffList: state.staffList
})

const mapDispatchToProps = dispatch => ({
    setCurrentPage: (payload) => dispatch(setCurrentPage(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)