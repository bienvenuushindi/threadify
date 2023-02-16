const characterLimit = 280;


function strLength(tweet: string) {
  return tweet.length;
}

function countTweet(tweet: string) {
  return Math.ceil(strLength(tweet) / 280);
}

function extractTweet(text: string, start: number, end: number, option: number): string {
  const separator: string = ' ';
  // get substr
  const reference = option;
  let tweet: string = (end === 0) ? text.substring(start) : text.substring(start, end);
  // get last tab space in the substring
  if ((characterLimit - (end - start)) >= reference) return tweet;
  else {
    let lastTabSpace: number = tweet.lastIndexOf(separator);
    if (lastTabSpace === -1 || (end - lastTabSpace) > 15) return extractTweet(text, start, end - reference, option);
    return extractTweet(text, start, start + lastTabSpace - reference-1, option);
  }
}

// function countDigit(num: number) {
//   let count = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     ++count;
//   }
//   return count;
// }

function makeThread(text: string): string[] {
  const thread: string[] = [];
  const threadLength = countTweet(text);
  if (threadLength === 1) return [text];
  let charInThread: number = 0;
  for (let i = 0; i < threadLength; i++) {
    // const reference = countDigit(i) + countDigit(threadLength);
    console.log(i)
    let tweet: string = '';
    let end: number = (i + 1 === threadLength) ? 0 : charInThread + characterLimit;
    tweet = extractTweet(text, charInThread, end, 5);

    thread.push(tweet);
    charInThread += tweet.length;
  }

  return thread;
}


export default makeThread;