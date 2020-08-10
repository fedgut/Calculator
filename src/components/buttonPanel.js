import React from 'react';
import Button from './button';

const g1 = ['AC', '+/-', '%', '÷'];
const g2 = ['7', '8', '9', 'x'];
const g3 = ['4', '5', '6', '-'];
const g4 = ['1', '2', '3', '+'];
const g5 = ['0', '.', '='];

const ButtonPanel = props => {
  const handleClick = { props };

  return (
    <div className="ButtonPanel">
      <div className="group-one ButtonRow">
        <Button handleClick={handleClick} buttonName={g1[0]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g1[1]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g1[2]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g1[3]} />
      </div>
      <div className="group-two ButtonRow">
        <Button handleClick={handleClick} buttonName={g2[0]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g2[1]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g2[2]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g2[3]} />
      </div>
      <div className="group-three ButtonRow">
        <Button handleClick={handleClick} buttonName={g3[0]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g3[1]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g3[2]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g3[3]} />
      </div>
      <div className="group-four ButtonRow">
        <Button handleClick={handleClick} buttonName={g4[0]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g4[1]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g4[2]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g4[3]} />
      </div>
      <div className="group-five ButtonRow">
        <Button
          handleClick={handleClick}
          buttonName={g5[0]}
          color="#e0e0e0"
          wide
        />
        <Button handleClick={handleClick} buttonName={g5[1]} color="#e0e0e0" />
        <Button handleClick={handleClick} buttonName={g5[2]} />
      </div>
    </div>
  );
};

export default ButtonPanel;
