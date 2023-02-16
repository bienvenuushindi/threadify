import React, {useEffect, useState} from 'react';
import makeThread from '../helper';
import Tweet from '../components/tweet';


function Main() {
  const [text, setText] = useState<string>('There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.\n' +
    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many websites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n');
  const [thread, setThread] = useState<string[]>([]);
  useEffect(() => {
    setThread([...makeThread(text)]);
  }, [text]);

  return (
    <main className="container mx-10/12 mx-auto">
      <div className="flex gap-2">
        <div className="left w-1/2">
          <textarea name="text" placeholder="Enter your text " onChange={(e) => setText(e.target.value)}
                    className="border w-11/12 mx-auto p-3 " rows={30}
                    cols={10} defaultValue={text}></textarea>
        </div>
        <div className="right w-1/2 bg-gray-100 px-2 h-full overflow-auto max-80-vh">
          {thread.map((item, i) => <Tweet key={'tweet' + i} text={item}/>)}
        </div>
      </div>
    </main>
  );
}

export default Main;
