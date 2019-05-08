import React from 'react';

const divStyle = {
  border: '1px solid black',
  width: '600px',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#F46AC3',
  borderRadius: '5px',
};

const popHeader = {
  textAlign: 'center',
};

const popHeaderColor = {
  color: '#F4D748',
};

const Popup = (props) => {
  const handleExit = () => {
    confirm("Are you sure you don't want to see Tay Sway?");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <div style={divStyle}>

      <i onClick={handleExit} className="fas fa-times" style={{ color: '#A74580', float: 'right' }} />

      <div style={Object.assign(popHeader, popHeaderColor, { fontSize: '28px' })}>
        You have won tickets to see Taylor Swift!!
        <div style={{ fontSize: '10px' }}>
          Please enter your email so we can send you the tickets
        </div>

        <form>
          <input type="text" placeholder="Type email here" />
          <input style={{ display: 'inline' }} onClick={handleSubmit} type="submit" value="claim your prize" />
        </form>

      </div>
    </div>
  );
};

export default Popup;
