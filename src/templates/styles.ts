import {Position, style} from '../utils/numbering';

export const styles: style[] = [
  {},
  {
    nominator: 1,
    separator: '/'
  },
  {
    nominator: 1,
    separator: ')'
  },
  {
    nominator: 1,
    separator: ':'
  },
  {
    nominator: 1,
    separator: '/',
    denominator: 2
  },
  {
    nominator: 1,
    separator: '/',
    denominator: 2,
    openParenthesis: '[',
    closeParenthesis: ']'
  },
  {
    nominator: 1,
    separator: '/',
    denominator: 2,
    openParenthesis: '(',
    closeParenthesis: ')'
  }
];

export const positions: Position[] = [
  Position.Start, Position.End
];

