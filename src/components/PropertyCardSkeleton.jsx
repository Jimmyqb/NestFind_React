function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
      
      {/* Image */}
      <div className="h-52 bg-gray-200" />

      {/* Info */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded-full w-1/2" />
        <div className="h-4 bg-gray-200 rounded-full w-3/4" />
        <div className="h-3 bg-gray-200 rounded-full w-1/3" />

        {/* Details */}
        <div className="flex gap-3 pt-3 border-t border-gray-100">
          <div className="h-3 bg-gray-200 rounded-full w-16" />
          <div className="h-3 bg-gray-200 rounded-full w-16" />
          <div className="h-3 bg-gray-200 rounded-full w-16" />
        </div>
      </div>

    </div>
  )
}

export default PropertyCardSkeleton