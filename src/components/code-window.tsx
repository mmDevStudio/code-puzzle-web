import { CodeBlock } from '@/types/post'

// TODO: style code blocks
function CodeWindow({ data }: { data: CodeBlock }) {
  return (
    <div>
      {data.map(({ languageId, code, filename }) => (
        <pre className={`language-[${languageId}]`}>
          <div>{filename}</div>
          <code>{code}</code>
        </pre>
      ))}
    </div>
  )
}

export default CodeWindow
