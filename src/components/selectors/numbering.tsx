import React from 'react';
import {styles} from '../../templates/styles';
import {style} from '../../utils/numbering';
import {isEmptyObject} from '../../helper';


type Props = {
  numStyle: Function
}

function SelectNumbering({numStyle}: Props) {
  function changeStyle(e: React.ChangeEvent, style: style) {
    numStyle(style);
    document.querySelector('.numbering.selectedOption')?.classList.remove('selectedOption')
    e.target.parentElement?.classList.add('selectedOption');
  }

  return (
    <div className="border p-2 ">
      <h2 className="title  mt-1 mb-2">Select Numbering</h2>
      <div className="grid grid-cols-2 gap-3">
        {styles.map((item: style, index) => <div key={'style' + index} className={`flex gap-2 numbering p-1  ${isEmptyObject(item)? 'selectedOption':''}`}>
          <input type="radio" name="numbering" defaultChecked={isEmptyObject(item)} value={index}
                 onChange={(e) => changeStyle(e, item)}/>
          <label>
            {isEmptyObject(item) ? 'None' : ''}
            {item.openParenthesis && <span>{item.openParenthesis}</span>}
            {item.nominator && <span>{item.nominator}</span>}
            {item.separator && <span>{item.separator}</span>}
            {item.denominator && <span>{item.denominator}</span>}
            {item.closeParenthesis && <span>{item.closeParenthesis}</span>}
          </label>
        </div>)}
      </div>
    </div>
  );

}

export default SelectNumbering;