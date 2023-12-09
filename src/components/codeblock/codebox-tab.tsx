interface CodeboxTabProps {
  tabName: string
}

function CodeboxTab({ tabName }: CodeboxTabProps) {
  return (
    <div className="flex items-center justify-center border-x-2 border-t-2 border-slate-200 py-5 pt-1">
      {tabName}
    </div>
  )
}

export default CodeboxTab
