export type style = {
  nominator: number,
  separator?: string,
  denominator?: number
}
export const defaultStyle = (nominator?: number): style => ({
  nominator: nominator || 0,
  separator: '/',
});

export enum Position {
  Start,
  End,

}

export class Numbering {
  private static instance: Numbering;
  private _position: Position = Position.Start;
  private _style: style = defaultStyle();

  private constructor(position?: Position, style?: style) {
    this._position = position || Position.Start;
    this._style = style || defaultStyle();
  }

  set position(position: Position) {
    this._position = position;
  }

  public static getInstance(): Numbering {
    if (!Numbering.instance) {
      Numbering.instance = new Numbering();
    }

    return Numbering.instance;
  }

  set style(style: style) {
    this._style = style;
  }

  get style() {
    return this._style;
  }

  toString(): string {
    let output = '';
    if (this.style.nominator) output += this.style.nominator.toString(10);
    if (this.style.separator) output += this.style.separator;
    if (this.style.denominator) output += this.style.denominator.toString(10);
    return output;
  }
}