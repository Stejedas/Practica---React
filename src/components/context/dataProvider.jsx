import { DataContext } from "./dataContext";
import { useEffect, useState } from 'react';



function DataProvider({ children }) {
   
    let lastSesion = localStorage.getItem('dataState')
  

    const [dataState, uploadDataState] = useState(lastSesion != null ? JSON.parse(lastSesion) : []);
    const [dataId, uploadDataID] = useState(0)

    

    useEffect( ()=> {
        
        localStorage.setItem('dataState', JSON.stringify(dataState));
    }, [dataState])


    return (
        <DataContext.Provider value={[dataState, uploadDataState, dataId, uploadDataID]}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
