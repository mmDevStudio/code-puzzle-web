import { CodeBlock as CodeBlockType } from '@/types/post'

// TODO: style code blocks
function Code({ data }: { data: CodeBlockType }) {
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

export default Code
