'use client'
const page = () => {

    const pathname = window.location.pathname;

    const app = pathname && pathname.match(/\/pages\/test.*/)

    if(app) {
        const matchedPath = app[0]
        console.log('Matchning:', matchedPath)
    }

  return (
    <div>
    <h1 className="text-5xl text-center mt-20">Test</h1>


    </div>
  )
}

export default page
