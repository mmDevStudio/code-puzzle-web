interface CodeboxTabProps {
  tabName: string
}

function CodeboxTab({ tabName }: CodeboxTabProps) {
  return <div className="flex items-center justify-center py-5 pt-1 border-slate-200 border-t-2 border-x-2">
    {tabName}
  </div>
}

export default CodeboxTab
