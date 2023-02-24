export type style = {
  nominator?: number,
  separator?: string,
  denominator?: number,
  openParenthesis?: string
  closeParenthesis?: string
}
export const defaultStyle = (): style => ({});

export enum Position {
  Start = 'start',
  End = 'end',

}

export class Numbering {
  private static instance: Numbering;
  private _position: Position;
  private _style: style;

  private constructor(position?: Position, style?: style) {
    this._position = position || Position.Start;
    this._style = style || defaultStyle();
  }

  set position(position: Position) {
    this._position = position;
  }

  get position(): Position {
    return this._position;
  }

  public static getInstance(): Numbering {
    if (!Numbering.instance) {
      Numbering.instance = new Numbering();
    }

    return Numbering.instance;
  }

  updatePosition(position: Position): Numbering {
    this._position = position;
    return this;
  }

  set style(style: style) {
    this._style = style;
  }

  get style() {
    return this._style;
  }

  toString(): string {
    let output = '';
    output += this.style.openParenthesis || '';
    output += this.style.nominator?.toString(10) || '';
    output += this.style.separator || '';
    output += this.style.denominator?.toString(10) || '';
    output += this.style.closeParenthesis || '';
    return output;
  }
}