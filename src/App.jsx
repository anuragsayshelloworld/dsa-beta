import Home from "./Pages/Home";
import Stack from "./Pages/Stackpage";
import QueuePage from "./Pages/QueuePage";
import LinkedList from "./Pages/LinkedList";
import BinaryTree from "./Pages/BinaryTree"
import NextButton from "./assets/NextButton";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import StackContext from "./Context/StackContext";
import { useContext } from "react";

// Placeholder components for other data structures
const Graph = () => <div className="container mt-5"><h2>Graph Implementation</h2><p>Coming Soon...</p></div>;
const HashTable = () => <div className="container mt-5"><h2>Hash Table Implementation</h2><p>Coming Soon...</p></div>;
const Heap = () => <div className="container mt-5"><h2>Heap Implementation</h2><p>Coming Soon...</p></div>;
const Trie = () => <div className="container mt-5"><h2>Trie Implementation</h2><p>Coming Soon...</p></div>;
const Array = () => <div className="container mt-5"><h2>Array Operations</h2><p>Coming Soon...</p></div>;
const Set = () => <div className="container mt-5"><h2>Set Implementation</h2><p>Coming Soon...</p></div>;
const Map = () => <div className="container mt-5"><h2>Map Implementation</h2><p>Coming Soon...</p></div>;

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
<div className="container-fluid px-4">
{/* Logo */}
<Link className="navbar-brand d-flex align-items-center" to="/">
<div 
className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
style={{ width: '40px', height: '40px' }}
>
<span className="text-white fw-bold">DS</span>
</div>
<span className="fw-bold text-dark">DataStruct Hub</span>
</Link>

{/* Toggle button for mobile */}
<button 
className="navbar-toggler" 
type="button" 
data-bs-toggle="collapse" 
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>

{/* Navigation items */}
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav me-auto">
<li className="nav-item dropdown">
<a 
className="nav-link dropdown-toggle fw-semibold" 
href="#" 
role="button" 
data-bs-toggle="dropdown"
>
Data Structures
</a>
<ul className="dropdown-menu">
<li><Link className="dropdown-item" to="/">Stack</Link></li>
<li><Link className="dropdown-item" to="/queue">Queue</Link></li>
<li><Link className="dropdown-item" to="/linkedlist">Linked List</Link></li>
<li><Link className="dropdown-item" to="/binarytree">Binary Tree</Link></li>
<li><Link className="dropdown-item" to="/graph">Graph</Link></li>
<li><hr className="dropdown-divider" /></li>
<li><Link className="dropdown-item" to="/hashtable">Hash Table</Link></li>
<li><Link className="dropdown-item" to="/heap">Heap</Link></li>
<li><Link className="dropdown-item" to="/trie">Trie</Link></li>
<li><Link className="dropdown-item" to="/array">Array</Link></li>
<li><Link className="dropdown-item" to="/set">Set</Link></li>
<li><Link className="dropdown-item" to="/map">Map</Link></li>
</ul>
</li>
</ul>

{/* User profile */}
<div className="d-flex align-items-center">
<div 
className="bg-secondary rounded-circle d-flex align-items-center justify-content-center"
style={{ width: '35px', height: '35px', cursor: 'pointer' }}
>
<span className="text-white fw-bold">U</span>
</div>
</div>
</div>
</div>
</nav>
);

export default function App(){
 const {setInStack} = useContext(StackContext);   
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/stack' element={<Stack/>} />
<Route path='/queue' element={<QueuePage />} />
<Route path='/linkedlist' element={<LinkedList />} />
<Route path='/binarytree' element={<BinaryTree />} />
<Route path='/graph' element={<Graph />} />
<Route path='/hashtable' element={<HashTable />} />
<Route path='/heap' element={<Heap />} />
<Route path='/trie' element={<Trie />} />
<Route path='/array' element={<Array />} />
<Route path='/set' element={<Set />} />
<Route path='/map' element={<Map />} />
</Routes>
<NextButton setInStack={setInStack}/>
</BrowserRouter>
);
}