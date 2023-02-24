import copy from '../images/copy.svg';
import Thread from '../utils/thread';
import React from 'react';

type props = { text: string }

function TweetComp({text}: props) {
  function copyText(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, text: string) {
    // Get the source
    const target = e.target as HTMLInputElement;
    const parent = target.closest('div');
    // Copy the text
    navigator.clipboard.writeText(text);
    parent?.firstElementChild?.classList.remove('hidden');
    setTimeout(() => {
      parent?.firstElementChild?.classList.add('hidden');
    }, 1000);
  }

  return (
    <div className="my-6 px-3 py-2 border w-full bg-white rounded relative mt-10">
      <div className="absolute right-0 -top-9 p-1 border border-1 bg-white">
        <div className="flex items-center gap-2">
          <div className="msg text-blue-600 ml-auto flex-grow hidden ">Copied</div>
          <div className="order-">
            {text.length} / {Thread.MaxTweetChars}
          </div>
          <button className=" shadow-lg p-1 border border-1 bg-blue-400 z-10 rounded" onClick={(e) => copyText(e, text)}>
            <img src={copy} alt="copy icon" className="w-4 h-4"/>
          </button>

        </div>
      </div>
      <div style={{overflowWrap: 'break-word'}} className="text-gray-600 tweet">{text}</div>
    </div>
  );
}

export default TweetComp;