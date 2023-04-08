import { createContext, useMemo,useState} from "react";

export const initialState = { theme: "light", data: [] }

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState(initialState.theme)
  const [data, setData] = useState(initialState.data)

  const anotherData = useMemo(() => {
    const getDentist = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log("Esta es la respuesta", response)
          return response.json()
        })
      return (data)
    }
    localStorage.setItem("favoritesDentist",JSON.stringify(data))
    return {getDentist,theme,data,setTheme,setData}
  },[theme,data])


  
  return (
    <ContextGlobal.Provider value={anotherData}>
      {children}
    </ContextGlobal.Provider>
  );
};
