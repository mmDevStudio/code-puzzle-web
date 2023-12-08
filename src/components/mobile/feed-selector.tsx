function FeedSelector() {
  return (
    <div className="h-fit-content fixed left-0 top-0 flex w-full border-b border-slate-300 text-lg font-semibold">
      <div className="flex w-1/2 items-center justify-center py-3">
        <div className="flex items-center justify-center border-b-2 border-slate-500 px-6 pb-1  pt-2 ">
          Explore
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center py-3 ">
        <div className="flex items-center justify-center px-6 pb-1 pt-2 ">
          Followed
        </div>
      </div>
    </div>
  )
}

export default FeedSelector
