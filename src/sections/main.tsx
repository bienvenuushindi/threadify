import React, {useEffect, useState} from 'react';
import NumberingStylePreview from '../components/loaders/styles';
import TweetComp from '../components/tweet';
import {defaultStyle, Numbering, Position, style} from '../utils/numbering';
import Thread from '../utils/thread';
import SelectPositions from '../components/selectors/positions';
import SelectNumbering from '../components/selectors/numbering';


function Main() {
  const [text, setText] = useState<string>('There are many variations of passages of Lorem Ipsum available, ' +
    'but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. ' +
    'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the ' +
    'Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.Many ' +
    'desktop publishing packages and web page editors now use is Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many ' +
    'websites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the ' +
    'likebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' +
    'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssshhh' +
    'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhqqqqqqqqqqqqqqqqqqqqqqqqqqqqq).');
  const [thread, setThread] = useState<string[]>([]);
  const [pos, setPos] = useState<Position>(Position.Start);
  const [numStyle, setNumStyle] = useState<style>(defaultStyle());
  useEffect(() => {
    setThread(Thread.makeThread(text));
  }, [text, pos, numStyle]);

  function updatePosition(position: Position) {
    setPos(position);
    Numbering.getInstance().position = position;
  }

  function updateStyle(style: style) {
    setNumStyle(style);
    Numbering.getInstance().style = {...style};
  }

  return (
    <main className="container mx-10/12 mx-auto">

      <div className="flex gap-2">
        <div className="w-2/12">
          <div className="flex flex-col w-100 gap-2">
            <SelectPositions pos={updatePosition}/>
            <SelectNumbering numStyle={updateStyle}/>
            <NumberingStylePreview position={pos} numberingStyle={numStyle}/>
          </div>
        </div>
        <div className="left w-6/12">
          <textarea name="text" placeholder="Enter your text " onChange={(e) => setText(e.target.value)}
                    className="border w-11/12 mx-auto p-3 " rows={25}
                    cols={10} defaultValue={text}></textarea>
        </div>
        <div className="right w-4/12 bg-gray-100 px-2 h-full overflow-auto max-70-vh">
          <div>
            <h2> Preview</h2>
          </div>
          {thread.map((item, i) => <TweetComp key={'tweet' + i}
                                              text={Thread.applyNumbering(item, i)}/>)}
        </div>
      </div>
    </main>
  );
}

export default Main;
