import {Numbering, Position} from './numbering';

class Thread {
  static MaxTweetChars = 280;
  static MaxTweetBlueChars = 4000;

  static CountTweets = 0;

  static numbering: Numbering = Numbering.getInstance();

  static strLength(tweet: string) {
    return tweet.length;
  }

  static countTweet(tweet: string): number {
    return Math.ceil((Thread.strLength(tweet) + 1) / Thread.MaxTweetChars);
  }

  static setNumbering(numbering: Numbering) {
    Thread.numbering = numbering;
  }

  static applyNumbering(tweet: string, i: number): string {
    if (Thread.numbering.style.nominator) Thread.numbering.style.nominator = i + 1;
    if (Thread.numbering.style.denominator) Thread.numbering.style.denominator = Thread.CountTweets;
    if (Thread.numbering.position === Position.Start) return Thread.numbering.toString() + ' ' + tweet;
    else return tweet + ' ' + Thread.numbering.toString();
  }

  static extractTweetText(text: string, start: number, end: number, option: number): string {
    let separator: string = ' ';
    // get substr
    let tweet: string = (end === 0) ? text.substring(start) : text.substring(start, end);
    // get last tab space in the substring
    if ((Thread.MaxTweetChars - (end - start)) > option) return tweet;
    let lastSpace: number = tweet.lastIndexOf(separator);
    if (lastSpace === -1 || (end - lastSpace) > 15) return Thread.extractTweetText(text, start, end - option, option);
    return Thread.extractTweetText(text, start, start + lastSpace, option);
  }

  static makeThread(text: string): string[] {
    let thread: string[] = [];
    let threadLength = Thread.countTweet(text);
    if (threadLength === 1) return [text];
    let charInThread: number = 0;
    let option: number = Thread.numbering.toString().length;
    for (let i = 0; i < threadLength; i++) {
      let tweet: string = '';
      let end: number = (i + 1 === threadLength) ? 0 : (charInThread + Thread.MaxTweetChars - 1);
      tweet = Thread.extractTweetText(text, charInThread, end, option);
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