import {Numbering, Position} from './numbering';

class Thread {
  static MaxTweetChars = 280;
  static MaxTweetBlueChars = 4000;

  static CountTweets = 0;

  static numbering: Numbering = Numbering.getInstance();

  static strLength(tweet: string) {
    return tweet.length;
  }

  static countTweets(textLength: number, option: number = 0): number {
    const length: number = Math.ceil((textLength + 1) / Thread.MaxTweetChars);
    if (option < 1 || length < 2) return length;
    return Math.ceil(((length * option) + textLength + 1) / Thread.MaxTweetChars);
  }

  static setNumbering(numbering: Numbering) {
    Thread.numbering = numbering;
  }

  static applyNumbering(tweet: string, i: number): string {
    if (Thread.CountTweets < 2) return tweet;
    if (Thread.numbering.style.nominator) Thread.numbering.style.nominator = i + 1;
    if (Thread.numbering.style.denominator) Thread.numbering.style.denominator = Thread.CountTweets;
    if (Thread.numbering.position === Position.Start) return Thread.numbering.toString() + ' ' + tweet;
    else return tweet + ' ' + Thread.numbering.toString();
  }

  static extractTweetText(text: string, start: number, end: number): string {
    const separator: string = ' ';
    const tweet: string = text.substring(start, end);
    let lastSpace: number = tweet.lastIndexOf(separator);
    let tweetLength: number = end - start;
    if (tweetLength - lastSpace < 8) return tweet.substring(0, lastSpace);
    return tweet;
  }

  static makeThread(text: string): string[] {
    let textLength: number = Thread.strLength(text);
    let option: number = Thread.numbering.toString().length;
    let threadLength: number = Thread.countTweets(textLength, option);
    Thread.CountTweets = threadLength;
    if (threadLength === 1) return [text];

    let thread: string[] = [];
    let charInThread: number = 0;
    for (let i = 0; i < threadLength; i++) {
      let tweet: string = '';
      let end: number = ((textLength - charInThread) < Thread.MaxTweetChars) ? textLength : (charInThread + Thread.MaxTweetChars - 1 - option);
      tweet = Thread.extractTweetText(text, charInThread, end);
      thread.push(tweet);
      charInThread += tweet.length;
      if (i === threadLength - 1 && charInThread < textLength) {
        thread.push(text.substring(charInThread, textLength));
      }
    }
    Thread.CountTweets = thread.length;
    return thread;
  }
}


export default Thread;