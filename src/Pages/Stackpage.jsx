import LayoutI from '../Layout/LayoutI';
import StackContext from '../Context/StackContext';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useContext } from 'react';

export default function StackPage() {

const { instack, setInStack } = useContext(StackContext);

const topElementLabel =
instack.length === 0 ? (
<span className="text-muted fst-italic">Empty</span>) : 
(instack[instack.length - 1].type.name === "MammothSVG"
? "Mamaoth"
: instack[instack.length - 1].type.name === "PandaSVG"
? "Panda"
: "Dinosaur");


const leftInfoBox = (
  <section
    className="p-4 rounded-3 shadow-sm"
    style={{ backgroundColor: '#fff', border: '1px solid #E2E8F0' }}
    aria-label="Stack information"
  >
    <h4 className="mb-1 text-dark" style={{ fontWeight: '600' }}>
      Stack Data Structure
    </h4>

    <p className="text-secondary mb-2" style={{ lineHeight: 1.6, fontSize: '1rem' }}>
      A Stack is a <strong><abbr title="Last In, First Out">LIFO</abbr></strong> data structure.
      Elements are added and removed from the top. But what’s it used for?
    </p>

    <ol className="mb-3 text-secondary" style={{ fontSize: '1rem', paddingLeft: '20px' }}>
      <li><kbd>Ctrl + Z</kbd> → Stack.</li>
      <li>Browser history navigation → Stack.</li>
      <li>Function runtime sequencing → Stack.</li>
    </ol>

    <p className="text-secondary fst-italic mb-4" style={{ fontSize: '1rem' }}>
      You’re probably using it every day without even realizing it.
    </p>

    <div
      className="d-flex justify-content-between align-items-center text-secondary mb-3"
      style={{ fontSize: '0.9rem' }}
    >
      <div>
        Stack Size: <span className="fw-semibold text-primary">{instack.length}</span>
      </div>
      <div>
        Top Element: <span className="fw-semibold text-success"><small>{topElementLabel}</small></span>
      </div>
    </div>

    <hr />

    <h5 className="mb-2 text-dark" style={{ fontWeight: 500 }}>Basic Operations</h5>
    <div className="d-flex flex-wrap gap-2">
      {[
        { name: 'Push', tip: 'Add an element to the top of the stack' },
        { name: 'Pop', tip: 'Remove the top element of the stack' },
        { name: 'Peek', tip: 'View the top element without removing it' },
        { name: 'isEmpty', tip: 'Check if the stack is empty' },
        { name: 'Size', tip: 'Get total number of elements in the stack' },
      ].map(({ name, tip }) => (
        <OverlayTrigger key={name} placement="top" overlay={<Tooltip>{tip}</Tooltip>}>
          <span className="badge bg-light text-dark border shadow-sm px-3 py-2">{name}</span>
        </OverlayTrigger>
      ))}
    </div>
  </section>
);

const rightPanel = (
  <div className="d-flex flex-column align-items-center w-100">
    <button
      type="button"
      style={{ marginLeft: '200px', marginTop: '52px', marginBottom: '15px' }}
      className="btn btn-outline-danger btn-sm"
      onClick={() => setInStack((prev) => prev.slice(0, prev.length - 1))}
    >
      Pop element 🎈
    </button>

    <div
      className="rounded-bottom d-flex flex-column-reverse overflow-auto"
      style={{
        height: '400px',
        maxWidth: '360px',
        marginTop: '30px',
        width: '100%',
        borderLeft: '3px dotted #6366F1',
        borderRight: '3px dotted #6366F1',
        borderBottom: '3px dotted #6366F1',
        borderTop: 'none',
        borderRadius: '0 0 16px 16px',
        padding: '16px 20px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#CBD5E0 transparent',
      }}
      role="list"
      aria-label="Stack elements"
    >
      {instack.length === 0 && (
        <p className="text-muted fst-italic text-center my-3">Stack is empty.</p>
      )}

      {instack.map((item, index) => (
        <div
          key={index}
          className="w-100 d-flex flex-column align-items-center"
          role="listitem"
        >
          <hr className="w-100 m-0 border-secondary" />
          <div
            className="py-3 text-center"
            style={{
              width: '100%',
              fontWeight: '500',
              fontSize: '1.1rem',
              userSelect: 'none',
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  </div>
);

return <LayoutI LeftInfoBox={leftInfoBox} RightPanel={rightPanel} setInStack={setInStack} />;
}
//Rename setInStack to be a more neutral name for all other pages
//make it into smaller chunks 
// also, since we have made the context wrap around whole app just rename it suit gloabal context name
// redo the order of DSA.. array should come before trees and all that
// okay thats all for tommorow.. wait rule: context lai individual page mai aacess garne instead of making it as a prop and sending  
// Queue and array tommorow