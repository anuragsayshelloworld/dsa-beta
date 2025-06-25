import { createContext, useState } from "react";

const StackContext = createContext();
StackContext.displayName = "StackContext";

export default StackContext;

export function StackProvider({ children }) {
const [instack, setInStack] = useState([]);

return (
<StackContext.Provider value={{ instack, setInStack }}>
{children}
</StackContext.Provider>
);
}

