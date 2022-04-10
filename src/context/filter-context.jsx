import { createContext, useContext, useReducer } from 'react'
import { filterReducer } from 'reducer/filterReducer'
const filterContext = createContext()
const useFilter = () => useContext(filterContext)

const FilterContextProvider = ({ children }) => {
  const [filters, filterDispatch] = useReducer(filterReducer, { sortBy: null })

  return (
    <filterContext.Provider value={{ filters, filterDispatch }}>
      {children}
    </filterContext.Provider>
  )
}

export { FilterContextProvider, useFilter }