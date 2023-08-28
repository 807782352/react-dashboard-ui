const sidebarReducer = (prevState, action) => {
    if (action.type === "TOGGLE_SIDEBAR"){
        return {
            ...prevState,
            isSidebarOpen: !prevState.isSidebarOpen
        }
    }

    throw new Error(`No Matching "${action.type} action type`);
}

export default sidebarReducer;