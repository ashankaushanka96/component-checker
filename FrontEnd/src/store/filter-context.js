import React, { useState } from "react";

const FilterContext = React.createContext({
    selectedMenu: 'analyzers',
    setSelectedMenu: () => { }
});


export const FilterContextProvider = (props) => {
    const [selectedMenu, setSelectedMenu] = useState('analyzers');

    return <FilterContext.Provider value={{ selectedMenu: selectedMenu, setSelectedMenu: setSelectedMenu, }}>{props.children}</FilterContext.Provider>;
}

export default FilterContext;