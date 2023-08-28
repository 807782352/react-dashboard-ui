import { createContext, useReducer } from "react";
import reducer from '../reducer/sidebarReducer'
import PropTypes from 'prop-types'

const initState = {
    isSidebarOpen: false
}

// Context 主要是用于 父孙传递中解决 props drilling问题
// 创建一个SidebarContext，内含其Provider和Consumer
export const SidebarContext = createContext({});
export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const toggleSidebar = () => {
        dispatch({
            type: "TOGGLE_SIDEBAR"
        })
    }

    return (
        <SidebarContext.Provider value={{
            ...state,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

SidebarProvider.propTypes = {
    children: PropTypes.node
}
