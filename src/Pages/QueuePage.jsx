import LayoutI from '../Layout/LayoutI';
import StackContext from '../Context/StackContext';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useContext } from 'react';

export default function QueuePage() {
  const { instack: inqueue, setInStack: setInQueue } = useContext(StackContext);

  const frontElementLabel =
    inqueue.length === 0 ? (
      <span className="text-muted fst-italic">Empty</span>
    ) : (
      inqueue[0].type.name === "MammothSVG"
        ? "Mammoth"
        : inqueue[0].type.name === "PandaSVG"
        ? "Panda"
        : "Dinosaur"
    );

  const leftInfoBox = (
    <section
  className="p-4 rounded-3 shadow-sm"
  style={{ backgroundColor: '#fff', border: '1px solid #E2E8F0' }}
  aria-label="Queue information"
>
  <h4 className="mb-1 text-dark" style={{ fontWeight: '600' }}>Queue Data Structure</h4>

  <p className="mb-2 text-secondary" style={{ lineHeight: 1.6, fontSize: '1rem' }}>
    A Queue is a <strong><abbr title="First In, First Out">FIFO</abbr></strong> data structure.
    Elements are added at the end and removed from the front. Where do we see this?
  </p>

  <ol className="mb-3 text-secondary" style={{ fontSize: '1rem', paddingLeft: '20px' }}>
    <li>Printer task queue → Queue.</li>
    <li>Customer service line → Queue.</li>
    <li>OS process scheduling → Queue.</li>
  </ol>

  <p className="mb-4 text-secondary fst-italic" style={{ lineHeight: 1.6, fontSize: '1rem' }}>
    You’ve already waited in one today — maybe in traffic or a YouTube buffer.
  </p>

      <div
        className="d-flex justify-content-between align-items-center text-secondary mb-3"
        style={{ fontSize: '0.9rem' }}
      >
        <div>Queue Size: <span className="fw-semibold text-primary">{inqueue.length}</span></div>
        <div>Front Element: <span className="fw-semibold text-success"><small>{frontElementLabel}</small></span></div>
      </div>

      <hr />

      <h5 className="mb-2 text-dark" style={{ fontWeight: 500 }}>Basic Operations</h5>
      <div className="d-flex flex-wrap gap-2">
        {[
          { name: 'Enqueue', tip: 'Add an element to the end of the queue' },
          { name: 'Dequeue', tip: 'Remove the front element of the queue' },
          { name: 'Peek', tip: 'View the front element without removing it' },
          { name: 'isEmpty', tip: 'Check if the queue is empty' },
          { name: 'Size', tip: 'Get total number of elements in the queue' },
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
      className="btn btn-outline-danger btn-sm mt-5 mb-3"
      onClick={() => setInQueue((prev) => prev.slice(0, -1))} // Remove oldest (rightmost)
    >
      Dequeue element 🚌
    </button>

    <div
      className="d-flex flex-row overflow-auto"
      style={{
        height: '120px',
        maxWidth: '100%',
        width: '100%',
        borderTop: '3px dotted #6366F1',
        borderBottom: '3px dotted #6366F1',
        padding: '16px 20px',
        marginTop: '10px',
        marginBottom: '20px',
        scrollbarWidth: 'thin',
        scrollbarColor: '#CBD5E0 transparent',
        backgroundColor: '#fdfdfd',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: '0',
      }}
      role="list"
      aria-label="Queue elements"
    >
      {inqueue.length === 0 && (
        <div className="text-muted fst-italic d-flex align-items-center justify-content-center w-100">
          Queue is empty.
        </div>
      )}

      {inqueue.map((item, index) => (
        <div
          key={index}
          className="d-flex flex-column align-items-center mx-2"
          role="listitem"
        >
          <div
            className="px-3"
            style={{
              fontWeight: '500',
              fontSize: '1.1rem',
              userSelect: 'none',
              minWidth: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  </div>
);


  return <LayoutI LeftInfoBox={leftInfoBox} RightPanel={rightPanel} setInStack={setInQueue} />;
}
