import React from 'react'

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-[30%] ">
      <img className="w-full" src="/dead-lake-old-salt-logs-peep-out-water.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Relic of the past</div>
          <p className="text-gray-700 text-base text-left">
            This estuary photo gives us a glimpse into the past. It seems clear that some structure existed here at one time.
            Was it a jetty where boats could moor at journeys end? Was it a wharf where fishing vessels unloaded their catch?
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Card
