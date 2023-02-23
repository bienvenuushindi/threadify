import {styles} from '../../templates/styles';
import {style} from '../../utils/numbering';
import {isEmptyObject} from '../../helper';

type Props = {
  numStyle: Function
}

function SelectNumbering({numStyle}: Props) {
  function changeStyle(style: style) {
    numStyle(style);
  }

  return (
    <>
      <h2>Select Numbering</h2>
      <div>
        {styles.map((item: style, index) => <div key={'style' + index}>
          <input type="radio" name="numbering" defaultChecked={isEmptyObject(item)} value={index}
                 onChange={() => changeStyle(item)}/>
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
    </>
  );

}

export default SelectNumbering;