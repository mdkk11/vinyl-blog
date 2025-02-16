// Notion プロパティの型定義
type TitleProperty = { type: 'title'; title: { plain_text: string }[] }
type RichTextProperty = {
  type: 'rich_text'
  rich_text: { plain_text: string }[]
}
type MultiSelectProperty = {
  type: 'multi_select'
  multi_select: { name: string }[]
}
type DateProperty = { type: 'date'; date: { start: string } | null }
type SelectProperty = { type: 'select'; select: { name: string } | null }
type UrlProperty = { type: 'url'; url: string | null }

export type NotionProperty =
  | TitleProperty
  | RichTextProperty
  | MultiSelectProperty
  | DateProperty
  | SelectProperty
  | UrlProperty
