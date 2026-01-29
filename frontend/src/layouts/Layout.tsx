const Layout  = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Booking Application</h1>
        </header>
        <main className="flex-grow container mx-auto p-4">
            {children}
        </main>
        <footer className="bg-gray-200 text-center p-4">
            &copy; {new Date().getFullYear()} Booking Application. All rights reserved
        </footer>
    </div>
  );
}

export default Layout;