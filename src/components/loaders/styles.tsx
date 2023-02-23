import {Position, style} from '../../utils/numbering';

type tweetTemplate = {
  position: Position,
  numberingStyle: style
}

function NumberingStylePreview({position, numberingStyle: item}: tweetTemplate) {
  return (
    <div>
      <h2>Preview</h2>
      <div className="animate-pulse  border p-3 shadow flex-col ">
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-4">
            <div className={`flex ${position === Position.End ? 'order-2 ' : ''} items-center w-100`}>
              <div className={`w-fit ${position === Position.End ? 'order-2 ' : ''}`}>
                {item.openParenthesis && <span>{item.openParenthesis}</span>}
                {item.nominator && <span>{item.nominator}</span>}
                {item.separator && <span>{item.separator}</span>}
                {item.denominator && <span>{item.denominator}</span>}
                {item.closeParenthesis && <span>{item.closeParenthesis}</span>}
              </div>
              <div className="h-4  bg-blue-400 rounded-full flex-grow col-span-1"/>
            </div>
            <div className="h-4 bg-blue-400  rounded-full col-span-1"/>
          </div>
        </div>
      </div>
    </div>

  );
}


export default NumberingStylePreview;