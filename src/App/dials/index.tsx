import React from 'react';
interface DialProps{
  value:Object;
  onChange:Function;
}
const Dials = ({ value, onChange }:DialProps) => {
  return (
    <div>
      These dials allow you to adjust numbers
    </div>
  );
};

export default Dials;
