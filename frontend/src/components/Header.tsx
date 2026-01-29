

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="/" className="flex items-center gap-2">
                        <div className="bg-white rounded-lg p-2">
                            <span className="text-2xl font-bold text-blue-600">📅</span>
                        </div>
                        <span className="text-3xl font-bold tracking-tight hover:text-blue-100 transition-colors duration-300">
                            Booking App
                        </span>
                    </a>
                    
                    <nav className="flex gap-6 items-center">
                        <a href="/" className="hover:text-blue-100 transition-colors duration-300 font-semibold">
                            Home
                        </a>
                        <a href="/bookings" className="hover:text-blue-100 transition-colors duration-300 font-semibold">
                            My Bookings
                        </a>
                        <button className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-all duration-300 shadow-md hover:shadow-lg">
                            Login
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;