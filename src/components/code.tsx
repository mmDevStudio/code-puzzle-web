import { CodeBlock as CodeBlockType } from '@/types/post'

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
