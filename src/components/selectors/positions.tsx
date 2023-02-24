import React from 'react';
import {positions} from '../../templates/styles';
import {Position} from '../../utils/numbering';


type Props = {
  pos: Function
}
function SelectPositions({pos}: Props) {
  function changePosition(e: React.ChangeEvent,position: Position){
    pos(position)
    document.querySelector('.position.selectedOption')?.classList.remove('selectedOption')
    e.target.parentElement?.classList.add('selectedOption');
  }
  return (
    <div className="border p-2 ">
      <h2 className="title  mt-1 mb-2">Select Position</h2>
      <div className="flex flex-wrap gap-2">
        {positions.map((item: Position) => <div key={item} className={`flex gap-2 position p-1  ${item === Position.Start? 'selectedOption':''}`}>
          <input type="radio" name="position" defaultChecked={item === Position.Start} value={item} onChange={(e)=>changePosition(e,item)}/>
          <label>Position <span className="capitalize">{item}</span></label>
        </div>)}

      </div>
    </div>
  );
}


export default SelectPositions;