import Navbar from "../component/Navbar"

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <Navbar />
        {/* Hero Section */}
        <section className="w-full bg-blue-600 text-white text-center py-20">
          <h2 className="text-4xl font-extrabold">Selamat Datang Di Aplikasi <br />Laundry Enigma</h2>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-6 bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-blue-200">
            Get Started
          </button>
        </section>
  
        {/* Features Section */}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-semibold">Our Features</h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">Feature 1</h4>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">Feature 2</h4>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="w-full bg-gray-800 text-white text-center py-4">
          <p>&copy; 2024 My Homepage. All rights reserved.</p>
        </footer>
      </div>
    )
}

export default HomePage