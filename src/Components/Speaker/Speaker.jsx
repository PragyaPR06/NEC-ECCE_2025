import React from "react"

const Speaker = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Heading */}
      <div className="text-center py-8 bg-white shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Anek+Tamil:wght@100..800&display=swap" rel="stylesheet"></link>
        <h1 className="text-center font-['Anek_Tamil'] text-5xl font-black text-blue-600">Speakers</h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Keynote Speaker Section */}
          <div>
            <div className="bg-green-600 rounded-lg p-6 h-full">
              <h2 className="text-3xl font-bold text-white mb-6">Keynote Speaker</h2>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="object-cover md:object-fill lg:object-contain relative ">
                  <img
                    src="/speaker/speak2.jpeg"
                    alt="Keynote Speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
            </div>
          </div>

          {/* Tutorial Speaker Section */}
          <div>
            <div className="bg-blue-600 rounded-lg p-6 h-full">
              <h2 className="text-3xl font-bold text-white mb-6">Tutorial Speaker</h2>
              <div className="bg-white rounded-lg p-4 shadow-lg">
                <div className="relative w-full rounded-lg object-cover md:object-fill lg:object-contain mb-4">
                  <img
                    src="/speaker/speak1.jpeg"
                    alt="Tutorial Speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker

