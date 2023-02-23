import {positions} from '../../templates/styles';
import {Position} from '../../utils/numbering';

type Props = {
  pos: Function
}
function SelectPositions({pos}: Props) {
  function changePosition(position: Position){
    pos(position)
  }
  return (
    <>
      <h2>Select Position</h2>
      <div>
        {positions.map((item: Position) => <div key={item}>
          <input type="radio" name="position" defaultChecked={item === Position.Start} value={item} onChange={()=>changePosition(item)}/>
          <label>Position <span className="capitalize">{item}</span></label>
        </div>)}

      </div>
    </>
  );
}


export default SelectPositions;