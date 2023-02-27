import React, {useEffect, useState} from 'react';
import NumberingStylePreview from '../components/loaders/styles';
import TweetComp from '../components/tweet';
import {defaultStyle, Numbering, Position, style} from '../utils/numbering';
import Thread from '../utils/thread';
import SelectPositions from '../components/selectors/positions';
import SelectNumbering from '../components/selectors/numbering';
import {TbSettingsOff, TbSettings} from 'react-icons/tb';
import {AiFillEye} from 'react-icons/ai';


function Main() {
  const [text, setText] = useState<string>('');
  const [thread, setThread] = useState<string[]>([]);
  const [pos, setPos] = useState<Position>(Position.Start);
  const [numStyle, setNumStyle] = useState<style>(defaultStyle());
  const [showSettings, toggleVisibility] = useState<boolean>(true);
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

  function toggle() {
    toggleVisibility(!showSettings);
  }

  return (
    <main className="container mx-10/12 mx-auto lg:p-4 px-3 pt-1 border shadow-lg  bg-white  flex-grow">
      <div className="fixed z-10 -right-1 top-1 lg:hidden">
        <button
          className="bg-white shadow-lg   border-2 border text-dark hover:bg-blue-400 mr-2 text-2xl rounded-full p-2"
          onClick={toggle}>
          {showSettings ? <TbSettingsOff/> : <TbSettings/>}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 flex-shrink h-full">
        <div id="settings"
             className={`lg:w-2/12 lg:mt-0 mt-6 sm-settings-box lg:lg-settings-box  ${showSettings ? '' : 'hidden'}`}>
          <div className="flex flex-col w-100 gap-2">
            <div className="border p-2">
              <h2 className="title">Tweet Max Characters / FREE ACCOUNT</h2>
              <div className="flex flex-wrap gap-4 ">
                <div className=" p-2 ">
                  <h4 className="text-4xl text-center text-blue-600">{Thread.MaxTweetChars}</h4>
                </div>
              </div>
            </div>
            <SelectPositions pos={updatePosition}/>
            <SelectNumbering numStyle={updateStyle}/>
            <NumberingStylePreview position={pos} numberingStyle={numStyle}/>
          </div>
        </div>
        <div className=" flex flex-col  min-h-full lg:w-10/12 m-1 relative">
          <div className="flex">
            <h4 className="title text-sm flex-grow ">Type/paste to make a numbered {showSettings ? '' : <br/>} Twitter
              thread!</h4>
            <div className="lg:hidden w-fit">
              <a href="#preview"
                className=" text-blue-400 font-bold shadow-lg  border-1 w-fit flex items-center border border-blue-400 text-dark hover:bg-blue-400 mr-2 text-sm rounded-full p-1 px-2"
                >
               <AiFillEye/> Preview
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row  flex-grow">
            <div className="flex-grow">
          <textarea name="text" placeholder="Enter your text " onChange={(e) => setText(e.target.value)}
                    className="border w-full focus:border-blue-400 lg:h-full min-50-vh border-2 focus:outline-none mx-auto p-3 "
                    defaultValue={text} autoFocus={false}>

          </textarea>
            </div>
            <div className=" lg:w-4/12 mb-8 lg:mb-0 bg-gray-100 px-2 h-full  overflow-auto max-70-vh py-2">
              <div>
                <h2 className="title text-2xl mt-1"> Preview <span className="text-sm ">contains <span
                  className="text-blue-600 text-2xl">{text.length > 0 ? Thread.CountTweets : 0}</span> tweet(s).</span>
                </h2>
                <p className="text-small text-gray-600">Note: Tweets are separated by space</p>
              </div>
              <div id="preview">
                {thread.map((item, i) => <TweetComp key={'tweet' + i} text={Thread.applyNumbering(item, i)}/>)}
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
