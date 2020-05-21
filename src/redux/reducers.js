import uuid from "uuid-random";

const initialState = {

    staffList: [
        { name: "Shivansh Singh", email: "shivansh@gmail.com", phone: "2143254544", sales: 1000, key: uuid() },
        { name: "Sagar Kudu", email: "sagar@gmail.com", phone: "9143254544", sales: 1200, key: uuid() },
        { name: "Ankit Kumar", email: "Ankit@gmail.com", phone: "2143254544", sales: 1800, key: uuid() },
        { name: "Manish Sharma", email: "manish@gmail.com", phone: "2143254544", sales: 1100, key: uuid() },
        { name: "Lalit Sheoran", email: "lalit@gmail.com", phone: "2143254544", sales: 2000, key: uuid() },
        { name: "Siddharth Singh", email: "Siddharth@gmail.com", phone: "2143254544", sales: 1000, key: uuid() },
        { name: "Aditya Singh", email: "aditya@gmail.com", phone: "2143254544", sales: 2000, key: uuid() },
        { name: "Aditya Kudu", email: "aditya@gmail.com", phone: "9143254544", sales: 2200, key: uuid() },
        { name: "Ankit Sharma", email: "ankit@gmail.com", phone: "2143254544", sales: 2800, key: uuid() },
        { name: "Abhishek Sharma", email: "manish@gmail.com", phone: "2143254544", sales: 1100, key: uuid() },
        { name: "Dipanshu Singh", email: "dipanshu@gmail.com", phone: "9143254544", sales: 2000, key: uuid() },
        { name: "Gangi Reddy", email: "gangi@gmail.com", phone: "2143254544", sales: 1000, key: uuid() },
        { name: "Manish Singh", email: "manish@gmail.com", phone: "2143254544", sales: 1100, key: uuid() },
        { name: "Lalit Singh", email: "lalit@gmail.com", phone: "2143254544", sales: 2000, key: uuid() },
        { name: "Siddharth Singh", email: "Siddharth@gmail.com", phone: "2143254544", sales: 1000, key: uuid() },
        { name: "Aditya Singh", email: "aditya@gmail.com", phone: "2143254544", sales: 2000, key: uuid() },
        { name: "Chinmay Kudu", email: "chinmay@gmail.com", phone: "9143254544", sales: 2200, key: uuid() },
        { name: "Ankit Sharma", email: "ankit@gmail.com", phone: "2143254544", sales: 2800, key: uuid() },
        { name: "Abhishek Sharma", email: "abhishek@gmail.com", phone: "2143254544", sales: 1100, key: uuid() },
        { name: "Dipanshu Prajapati", email: "dipanshu@gmail.com", phone: "9143254544", sales: 2000, key: uuid() },
        { name: "Mihir Kumar", email: "mihir@gmail.com", phone: "2143254544", sales: 1000, key: uuid() },


    ],
    currentPage: 1,
    perPage: 5
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_STAFF":
            return {
                ...state,
                staffList: [...state.staffList, action.payload]
            }
        case "DELETE_STAFF":
            return {
                ...state,
                staffList: state.staffList.filter((ele) => ele.key !== action.payload)
            }
        case "UPDATE_STAFF":
            return {
                ...state,
                staffList: state.staffList.map((ele) => {
                    if (ele.key === action.id)
                        return action.payload
                    else
                        return ele
                })
            }
        case "SET_PER_PAGE":
            return {
                ...state,
                perPage: action.payload
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }
        case "SORT_ASCENDING":
            return {
                ...state,
                staffList: state.staffList.sort((a, b) => a.sales - b.sales)
            }
        case "SORT_DESCENDING":
            return {
                ...state,
                staffList: state.staffList.sort((a, b) => b.sales - a.sales)
            }
        default:
            return state;
    }
}


export default reducer;