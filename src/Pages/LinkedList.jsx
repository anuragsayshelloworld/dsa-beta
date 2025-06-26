import { useState } from "react";

export default function LinkedList() {
  const [nodelist, setNodeList] = useState([]);
  const [node, setNode] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");
  const [updateValue, setUpdateValue] = useState("");

  function createNodeData() {
    const value = Math.floor(Math.random() * 99) + 1;
    const address = "0x" + Math.floor(Math.random() * 0xffff).toString(16).padStart(4, "0").toUpperCase();
    return { value, address };
  }

  function deleteNodeAtIndex() {
    const idx = parseInt(deleteIndex, 10);
    if (isNaN(idx) || idx < 0 || idx >= nodelist.length) {
      alert("Invalid index. Enter 0 to " + (nodelist.length - 1));
      return;
    }
    setNodeList((prev) => prev.filter((_, i) => i !== idx));
    setDeleteIndex("");
  }

  function updateNodeAtIndex() {
    const idx = parseInt(updateIndex, 10);
    const val = parseInt(updateValue, 10);
    if (isNaN(idx) || idx < 0 || idx >= nodelist.length || isNaN(val) || val < 1) {
      alert("Invalid input. Check index and value.");
      return;
    }
    setNodeList((prev) =>
      prev.map((n, i) => (i === idx ? { ...n, value: val } : n))
    );
    setUpdateIndex("");
    setUpdateValue("");
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Linked List Visualizer</h1>
      </div>

      {/* List Display */}
      <div style={listSectionStyle}>
        <div style={listContainerStyle}>
          {nodelist.length === 0 ? (
            <div style={emptyStateStyle}>Empty List</div>
          ) : (
            <div style={nodesStyle}>
              {nodelist.map((nodeData, index) => (
                <Node
                  key={index}
                  value={nodeData.value}
                  address={nodeData.address}
                  nextAddress={index < nodelist.length - 1 ? nodelist[index + 1].address : null}
                  isLast={index === nodelist.length - 1}
                />
              ))}
            </div>
          )}
        </div>
        {nodelist.length > 0 && (
          <div style={statsStyle}>Length: {nodelist.length}</div>
        )}
      </div>

      {/* Action Buttons Row */}
      <div style={buttonRowStyle}>
        <button 
          onClick={() => setNode(createNodeData())} 
          style={buttonStyle}
        >
          Create
        </button>
        
        <button
          onClick={() => {
            setNodeList((prev) => [...prev, node]);
            setNode(null);
          }}
          disabled={!node}
          style={node ? buttonStyle : disabledButtonStyle}
        >
          Insert
        </button>

        <div style={inputGroupStyle}>
          <input
            type="number"
            placeholder="Index"
            value={deleteIndex}
            onChange={(e) => setDeleteIndex(e.target.value)}
            style={inputStyle}
            min={0}
          />
          <button 
            onClick={deleteNodeAtIndex} 
            style={deleteButtonStyle}
            disabled={nodelist.length === 0}
          >
            Delete
          </button>
        </div>

        <div style={inputGroupStyle}>
          <input
            type="number"
            placeholder="Index"
            value={updateIndex}
            onChange={(e) => setUpdateIndex(e.target.value)}
            style={{...inputStyle, width: '60px'}}
            min={0}
          />
          <input
            type="number"
            placeholder="Value"
            value={updateValue}
            onChange={(e) => setUpdateValue(e.target.value)}
            style={{...inputStyle, width: '60px'}}
            min={1}
          />
          <button 
            onClick={updateNodeAtIndex} 
            style={updateButtonStyle}
            disabled={nodelist.length === 0}
          >
            Update
          </button>
        </div>
      </div>

      {/* New Node Preview */}
      <div style={previewSectionStyle}>
        <h3 style={sectionTitleStyle}>New Node</h3>
        <div style={previewContainerStyle}>
          {node ? (
            <Node
              value={node.value}
              address={node.address}
              nextAddress={null}
              isPreview={true}
            />
          ) : (
            <div style={previewEmptyStyle}>Click "Create" to generate a node</div>
          )}
        </div>
      </div>

      {/* Explanation */}
      <div style={explanationSectionStyle}>
        <h3 style={sectionTitleStyle}>Operations</h3>
        <div style={explanationGridStyle}>
          <div><strong>Create:</strong> Generate a new node with random value</div>
          <div><strong>Insert:</strong> Add the created node to end of list</div>
          <div><strong>Delete:</strong> Remove node at specified index</div>
          <div><strong>Update:</strong> Change value of node at index</div>
          <div><strong>Search:</strong> Find nodes by value (not implemented)</div>
          <div><strong>Traverse:</strong> Visit all nodes in sequence</div>
          <div><strong>Reverse:</strong> Reverse the entire list order</div>
          <div><strong>Length:</strong> Count total nodes in the list</div>
        </div>
      </div>
    </div>
  );
}

function Node({ value, address, nextAddress, isLast, isPreview }) {
  return (
    <div style={nodeContainerStyle}>
      <div style={isPreview ? previewNodeStyle : nodeStyle}>
        <div style={nodeValueStyle}>{value}</div>
        <div style={nodeAddressStyle}>{address}</div>
        <div style={nodePointerStyle}>
          → {nextAddress ? nextAddress : (isLast ? "NULL" : "—")}
        </div>
      </div>
      {!isPreview && !isLast && <div style={arrowStyle}>→</div>}
    </div>
  );
}

// Styles
const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '40px 20px',
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: '1.5',
  color: '#1a1a1a'
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px'
};

const titleStyle = {
  margin: '0',
  fontSize: '2rem',
  fontWeight: '600',
  color: '#2563eb'
};

const listSectionStyle = {
  marginBottom: '30px'
};

const listContainerStyle = {
  minHeight: '100px',
  padding: '30px',
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const emptyStateStyle = {
  color: '#64748b',
  fontSize: '1rem',
  fontStyle: 'italic'
};

const nodesStyle = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px'
};

const statsStyle = {
  textAlign: 'center',
  marginTop: '10px',
  fontSize: '0.9rem',
  color: '#64748b'
};

const buttonRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '30px',
  padding: '20px',
  backgroundColor: 'white',
  border: '1px solid #e2e8f0',
  borderRadius: '8px'
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '0.9rem',
  fontWeight: '500',
  border: '1px solid #2563eb',
  borderRadius: '6px',
  backgroundColor: '#2563eb',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const disabledButtonStyle = {
  padding: '10px 20px',
  fontSize: '0.9rem',
  fontWeight: '500',
  border: '1px solid #cbd5e0',
  borderRadius: '6px',
  backgroundColor: '#f1f5f9',
  color: '#94a3b8',
  cursor: 'not-allowed'
};

const deleteButtonStyle = {
  padding: '10px 16px',
  fontSize: '0.9rem',
  fontWeight: '500',
  border: '1px solid #dc2626',
  borderRadius: '6px',
  backgroundColor: '#dc2626',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const updateButtonStyle = {
  padding: '10px 16px',
  fontSize: '0.9rem',
  fontWeight: '500',
  border: '1px solid #059669',
  borderRadius: '6px',
  backgroundColor: '#059669',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const inputGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const inputStyle = {
  padding: '8px 12px',
  fontSize: '0.9rem',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  width: '80px',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};

const previewSectionStyle = {
  marginBottom: '30px'
};

const sectionTitleStyle = {
  margin: '0 0 15px 0',
  fontSize: '1.1rem',
  fontWeight: '600',
  color: '#374151'
};

const previewContainerStyle = {
  padding: '20px',
  backgroundColor: 'white',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80px'
};

const previewEmptyStyle = {
  color: '#9ca3af',
  fontSize: '0.9rem',
  fontStyle: 'italic'
};

const explanationSectionStyle = {
  marginBottom: '30px'
};

const explanationGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '12px',
  padding: '20px',
  backgroundColor: 'white',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '0.9rem'
};

const nodeContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const nodeStyle = {
  padding: '12px 16px',
  backgroundColor: 'white',
  border: '2px solid #2563eb',
  borderRadius: '8px',
  textAlign: 'center',
  minWidth: '120px'
};

const previewNodeStyle = {
  padding: '12px 16px',
  backgroundColor: 'white',
  border: '2px solid #059669',
  borderRadius: '8px',
  textAlign: 'center',
  minWidth: '120px'
};

const nodeValueStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#1f2937',
  marginBottom: '4px'
};

const nodeAddressStyle = {
  fontSize: '0.75rem',
  fontFamily: 'monospace',
  color: '#6b7280',
  marginBottom: '4px'
};

const nodePointerStyle = {
  fontSize: '0.75rem',
  color: '#6b7280',
  fontFamily: 'monospace'
};

const arrowStyle = {
  fontSize: '1.2rem',
  color: '#6b7280',
  margin: '0 8px',
  fontWeight: 'bold'
};