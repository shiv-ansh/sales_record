
export const addStaff = (payload) => {
    return {
        type: "ADD_STAFF",
        payload
    }
}

export const deleteStaff = (payload) => {
    return {
        type: "DELETE_STAFF",
        payload
    }
}

export const updateStaff = (payload, id) => {
    return {
        type: "UPDATE_STAFF",
        payload,
        id
    }
}

export const setCurrentPage = (payload) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload
    }
}
export const setPerPage = (payload) => {
    return {
        type: "SET_PER_PAGE",
        payload
    }
}

export const sortAscending = () => {
    return {
        type: "SORT_ASCENDING"
    }
}
export const sortDescending = () => {
    return {
        type: "SORT_DESCENDING"
    }
}