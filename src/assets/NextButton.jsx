import { useLocation, useNavigate } from "react-router-dom";

export default function NextButton({setInStack}) {
const location = useLocation();
const navigate = useNavigate();

const routeOrder = [
"/stack",
"/queue",
"/linkedlist",
"/binarytree",
"/graph",
"/hashtable",
"/heap",
"/trie",
"/array",
"/set",
"/map",
"/",
];

if (location.pathname === "/") return null;

const currentIndex = routeOrder.indexOf(location.pathname);
const nextRoute = routeOrder[currentIndex + 1];

const handleNext = () => {
if (nextRoute) {
setInStack([]);    
navigate(nextRoute);
}
};

return (
<button
onClick={handleNext}
disabled={!nextRoute}
className="btn btn-primary shadow-lg rounded-pill"
style={{
position: "fixed",
bottom: "20px",
right: "20px",
zIndex: 9999,
padding: "12px 20px",
fontSize: "16px",
fontWeight: "bold",
}}
title={nextRoute ? "Go to next" : "End"}
>
Next
</button>
);
}
