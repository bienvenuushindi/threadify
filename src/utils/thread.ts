import {Numbering, Position} from './numbering';

class Thread {
  static MaxTweetChars = 280;

  static CountTweets = 0;

  static numbering: Numbering;

  static strLength(tweet: string) {
    return tweet.length;
  }

  static countTweet(tweet: string): number {
    return Math.ceil(Thread.strLength(tweet) / Thread.MaxTweetChars);
  }

  static setNumbering(numbering: Numbering) {
    Thread.numbering = numbering;
  }

  static applyNumbering(tweet: string, i: number): string {
    Thread.numbering.style.nominator = i + 1;
    Thread.numbering.style.denominator = Thread.CountTweets;
    // console.log(Thread.numbering.style.denominator);
    if (Thread.numbering.position === Position.Start) return Thread.numbering.toString() + ' ' + tweet;
    else return tweet + ' ' + Thread.numbering.toString();
  }

  static extractTweetText(text: string, start: number, end: number, option: number): string {
    let separator: string = ' ';
    // get substr
    let reference = option;
    let tweet: string = (end === 0) ? text.substring(start) : text.substring(start, end);
    // get last tab space in the substring
    // console.log('= ' + (Thread.MaxTweetChars - (end - start)));
    if ((Thread.MaxTweetChars - (end - start)) >= reference) return tweet;
    else {
      let lastSpace: number = tweet.lastIndexOf(separator);
      if (lastSpace === -1 || (end - lastSpace) > 15) return Thread.extractTweetText(text, start, end - reference - 1, option);
      return Thread.extractTweetText(text, start, start + lastSpace - reference, option);
    }
  }

// static countDigit(num: number) {
//   let count = 0;
//   while (num !== 0) {
//     num = Math.floor(num / 10);
//     ++count;
//   }
//   return count;
// }

  static makeThread(text: string): string[] {
    let thread: string[] = [];
    let threadLength = Thread.countTweet(text);
    if (threadLength === 1) return [text];
    let charInThread: number = 0;
    for (let i = 0; i < threadLength; i++) {
      // static reference = countDigit(i) + countDigit(threadLength);
      // console.log(i);
      let tweet: string = '';
      let end: number = (i + 1 === threadLength) ? 0 : charInThread + Thread.MaxTweetChars;
      // console.log("CharinThread "+ charInThread);
      // console.log("end "+ end);
      tweet = Thread.extractTweetText(text, charInThread, end, 5);

      thread.push(tweet);
      if (threadLength !== Thread.CountTweets) {
        Thread.CountTweets = threadLength;
      }
      charInThread += tweet.length;
    }

    return thread;
  }
}


export default Thread;