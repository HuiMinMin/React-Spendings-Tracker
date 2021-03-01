import { createContext, useState } from "react";

export const TodoPageContext = createContext(null);

const { Provider } = TodoPageContext;

const TodoPageContextProvider = ({ children }) => {
    const [todoPageStates, setTodoPageStates] = useState();
    return (
        <Provider value={{ todoPageStates, setTodoPageStates }}>
        {children}
        </Provider>
    );
};

TodoPageContextProvider.context = TodoPageContext;

export default TodoPageContextProvider
