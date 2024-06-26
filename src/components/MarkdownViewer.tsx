import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

export interface MarkdownViewerProps {
  content: string;
  children?: string;
}

export default function MarkdownViewer({ content, children }: MarkdownViewerProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={"markdown-viewer"}>

      {children ?? content}

    </Markdown>
  )
}