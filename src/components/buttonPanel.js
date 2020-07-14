import React from 'react';
import Button from './button';

const g1 = ['AC', '+/-', '%', '÷'];
const g2 = ['7', '8', '9', 'X'];
const g3 = ['4', '5', '6', '-'];
const g4 = ['1', '2', '3', '+'];
const g5 = ['0', '.', '='];

const ButtonPanel = () => (
  <div>
    <div className="group-one">
      <Button buttonName={g1[0]} />
      <Button buttonName={g1[1]} />
      <Button buttonName={g1[2]} />
      <Button buttonName={g1[3]} />
    </div>
    <div className="group-two">
      <Button buttonName={g2[0]} />
      <Button buttonName={g2[1]} />
      <Button buttonName={g2[2]} />
      <Button buttonName={g2[3]} />
    </div>
    <div className="group-three">
      <Button buttonName={g3[0]} />
      <Button buttonName={g3[1]} />
      <Button buttonName={g3[2]} />
      <Button buttonName={g3[3]} />
    </div>
    <div className="group-four">
      <Button buttonName={g4[0]} />
      <Button buttonName={g4[1]} />
      <Button buttonName={g4[2]} />
      <Button buttonName={g4[3]} />
    </div>
    <div className="group-five">
      <Button buttonName={g5[0]} />
      <Button buttonName={g5[1]} />
      <Button buttonName={g5[2]} />
    </div>
  </div>
);

export default ButtonPanel;
