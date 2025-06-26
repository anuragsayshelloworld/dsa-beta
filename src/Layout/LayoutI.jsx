import { PandaSVG, DinosaurSVG, MammothSVG} from '../assets/SVG';
import { useLocation } from 'react-router-dom';
export default function LayoutI({ LeftInfoBox, RightPanel, setInStack }) {  
 const currentLocation = useLocation();
 console.log(currentLocation.pathname);   
return (
<div className="container py-1">
<div className="row justify-content-center">
{/* Left Side */}
<div className="col-6">
<div className="row mb-3">
<div className="col-12">
<div className="row text-center g-3">
<div className="col-4">
<PandaSVG />
<PushButton currentLocation={currentLocation} onClick={() => setInStack((prev) => [...prev, <PandaSVG key={prev.length} />])} />
</div>
<div className="col-4">
<MammothSVG />
<PushButton currentLocation={currentLocation} onClick={() => setInStack((prev) => [...prev, <MammothSVG key={prev.length} />])} />
</div>
<div className="col-4">
<DinosaurSVG />
<PushButton currentLocation={currentLocation} onClick={() => setInStack((prev) => [...prev, <DinosaurSVG key={prev.length} />])} />
</div>
</div>
</div>
</div>

{/* Left Info Box injected from props */}
<div className="row">
<div className="col-12">
{LeftInfoBox}
</div>
</div>
</div>

{/* Right Side Panel injected from props */}
<div className="col-6 d-flex flex-column justify-content-center align-items-center">
{RightPanel}
</div>
</div>
</div>
);
}

function PushButton({onClick, currentLocation}) {
return (
<div className="mt-2">
<button className="btn btn-outline-primary btn-sm" onClick={onClick}>
{currentLocation.pathname === "/queue" ? 'Enqueue' : 'Push'}
</button>
</div>
);
}
