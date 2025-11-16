export default function PostLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="h-6 bg-slate-200 rounded w-32 mb-6 animate-pulse"></div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="h-6 bg-slate-200 rounded w-24 mb-4 animate-pulse"></div>
          <div className="h-8 bg-slate-200 rounded w-3/4 mb-6 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="h-6 bg-slate-200 rounded w-48 mb-6 animate-pulse"></div>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-l-4 border-slate-200 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-1 animate-pulse"></div>
                    <div className="h-3 bg-slate-200 rounded w-1/4 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-2 ml-10">
                  <div className="h-3 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-3 bg-slate-200 rounded w-4/5 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}