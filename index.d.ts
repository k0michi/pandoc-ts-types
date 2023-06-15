// Based on https://github.com/jgm/pandoc-types/blob/8c0c60fd22f453136d456e301e68e397451e24dd/src/Text/Pandoc/Definition.hs

export type PandocJSON = {
  "pandoc-api-version": number[];
  meta: Record<string, MetaValue>;
  blocks: Block[];
};

// Meta

export type MetaMap = {
  t: 'MetaMap';
  c: Record<string, MetaValue>;
};

export type MetaList = {
  t: 'MetaList';
  c: MetaValue[];
};

export type MetaBool = {
  t: 'MetaBool';
  c: boolean;
};

export type MetaString = {
  t: 'MetaString';
  c: string;
};

export type MetaInlines = {
  t: 'MetaInlines';
  c: Inline[];
};

export type MetaBlocks = {
  t: 'MetaBlocks';
  c: Block[];
};

export type MetaValue = MetaMap
  | MetaList
  | MetaBool
  | MetaString
  | MetaInlines
  | MetaBlocks;

// Blocks

export type Attr = [string, [string], [string, string][]];

export type Format = string;

// Blocks - Captions

export type ShortCaption = Inline[];

export type Caption = {
  t: 'Caption';
  c: [ShortCaption | null, Block[]];
};

// Blocks - Tables

export type ColSpec = [Alignment, ColWidth | ColWidthDefault];

export type Alignment = AlignLeft
  | AlignRight
  | AlignCenter
  | AlignDefault;

export type AlignLeft = {
  t: 'AlignLeft';
};

export type AlignRight = {
  t: 'AlignRight';
};

export type AlignCenter = {
  t: 'AlignCenter';
};

export type AlignDefault = {
  t: 'AlignDefault';
};

export type ColWidth = {
  t: 'ColWidth';
  c: number;
};

export type ColWidthDefault = {
  t: 'ColWidthDefault';
};

export type TableHead = [Attr, Row[]];

export type Row = [Attr, Cell[]];

export type Cell = [Attr, Alignment, RowSpan, ColSpan, Block[]];

export type RowSpan = number;

export type ColSpan = number;

export type TableBody = [Attr, RowHeadColumns, Row[], Row[]];

export type RowHeadColumns = number;

export type TableFoot = [Attr, Row[]];

// Blocks - List

export type ListAttributes = [number, ListNumberStyle, ListNumberDelim];

export type ListNumberStyle = DefaultStyle
  | Example
  | Decimal
  | LowerRoman
  | UpperRoman
  | LowerAlpha
  | UpperAlpha;

export type DefaultStyle = {
  t: 'DefaultStyle';
};

export type Example = {
  t: 'Example';
};

export type Decimal = {
  t: 'Decimal';
};

export type LowerRoman = {
  t: 'LowerRoman';
};

export type UpperRoman = {
  t: 'UpperRoman';
};

export type LowerAlpha = {
  t: 'LowerAlpha';
};

export type UpperAlpha = {
  t: 'UpperAlpha';
};

export type ListNumberDelim = DefaultDelim
  | Period
  | OneParen
  | TwoParens;

export type DefaultDelim = {
  t: 'DefaultDelim';
};

export type Period = {
  t: 'Period';
};

export type OneParen = {
  t: 'OneParen';
};

export type TwoParens = {
  t: 'TwoParens';
};

export type Block = Plain
  | Para
  | LineBlock
  | CodeBlock
  | RawBlock
  | BlockQuote
  | OrderedList
  | BulletList
  | DefinitionList
  | Header
  | HorizontalRule
  | Table
  | Figure
  | Div;

export type Plain = {
  t: 'Plain';
  c: Inline[];
};

export type Para = {
  t: 'Para';
  c: Inline[];
};

export type LineBlock = {
  t: 'LineBlock';
  c: Inline[][];
};

export type CodeBlock = {
  t: 'CodeBlock';
  c: [Attr, string];
};

export type RawBlock = {
  t: 'RawBlock';
  c: [Format, string];
};

export type BlockQuote = {
  t: 'BlockQuote';
  c: Block[]
};

export type OrderedList = {
  t: 'OrderedList';
  c: [ListAttributes, Block[][]];
};

export type BulletList = {
  t: 'BulletList';
  c: Block[][];
};

export type DefinitionList = {
  t: 'DefinitionList';
  c: [Inline[], Block[][]][];
};

export type Header = {
  t: 'Header';
  c: [number, Attr, Inline[]];
};

export type HorizontalRule = {
  t: 'HorizontalRule';
};

export type Table = {
  t: 'Table';
  c: [Attr, Caption, ColSpec[], TableHead, TableBody[], TableFoot[]];
};

export type Figure = {
  t: 'Figure';
  c: [Attr, Caption, Block[]];
};

export type Div = {
  t: 'Div';
  c: [Attr, Block[]];
};

// Inlines

export type Target = [string, string];

// Inlines - Quote

export type QuoteType = SingleQuote | DoubleQuote;

export type SingleQuote = {
  t: 'SingleQuote';
};

export type DoubleQuote = {
  t: 'DoubleQuote';
};

// Inlines - Citation

export type Citation = {
  citationId: string;
  citationPrefix: Inline[];
  citationSuffix: Inline[];
  citationMode: CitationMode;
  citationNoteNum: number;
  citationHash: number;
};

export type CitationMode = AuthorInText | SuppressAuthor | NormalCitation;

export type AuthorInText = {
  t: 'AuthorInText';
};

export type SuppressAuthor = {
  t: 'SuppressAuthor';
};

export type NormalCitation = {
  t: 'NormalCitation';
};

// Inlines - Math

export type MathType = DisplayMath | InlineMath;

export type DisplayMath = {
  t: 'DisplayMath';
};

export type InlineMath = {
  t: 'InlineMath';
};

export type Inline = Str
  | Emph
  | Underline
  | Strong
  | Strikeout
  | Superscript
  | Subscript
  | SmallCaps
  | Quoted
  | Cite
  | Code
  | Space
  | SoftBreak
  | LineBreak
  | Math
  | RawInline
  | Link
  | Image
  | Note
  | Span;

export type Str = {
  t: 'Str';
  c: string;
};

export type Emph = {
  t: 'Emph';
  c: Inline[];
};

export type Underline = {
  t: 'Underline';
  c: Inline[];
};

export type Strong = {
  t: 'Strong';
  c: Inline[];
};
export type Strikeout = {
  t: 'Strikeout';
  c: Inline[];
};

export type Superscript = {
  t: 'Superscript';
  c: Inline[];
};

export type Subscript = {
  t: 'Subscript';
  c: Inline[];
};

export type SmallCaps = {
  t: 'SmallCaps';
  c: Inline[];
};

export type Quoted = {
  t: 'Quoted';
  c: [QuoteType, Inline[]];
};

export type Cite = {
  t: 'Cite';
  c: [Citation[], Inline[]];
};

export type Code = {
  t: 'Code';
  c: [Attr, string];
};

export type Space = {
  t: 'Space';
};

export type SoftBreak = {
  t: 'SoftBreak';
};

export type LineBreak = {
  t: 'LineBreak';
};

export type Math = {
  t: 'Math';
  c: [MathType, string];
};

export type RawInline = {
  t: 'RawInline';
  c: [Format, string];
};

export type Link = {
  t: 'Link';
  c: [Attr, Inline[], Target];
};

export type Image = {
  t: 'Image';
  c: [Attr, Inline[], Target];
};

export type Note = {
  t: 'Note';
  c: Block[];
};

export type Span = {
  t: 'Span';
  c: [Attr, Inline[]];
};