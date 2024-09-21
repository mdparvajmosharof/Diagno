import React from 'react'
import { Link } from 'react-router-dom'

const SubBanner = () => {
  return (
    <div className="p-6 py-12 bg-indigo-500 dark:bg-indigo-950 text-gray-50 my-10 rounded-xl ">
    <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
                <br className="sm:hidden" />
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
                <span>Dive into our 'All Queries' section for a curated collection of captivating topics and diverse perspectives. Explore, learn, and discover!</span>
            </div>
            <Link to="/allTests"><button className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">ALL Tests</button></Link>
        </div>
    </div>
</div>
  )
}

export default SubBanner
