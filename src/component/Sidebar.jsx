const Sidebar = () => {
    return (
      <div className="h-screen w-40 bg-gray-900 text-white flex flex-col p-4">
        <h1 className="text-medium font-bold mb-8">JHON LAUNDRY</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Produk</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Konsumen</span>
          </a>
          <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
            <span>Transaksi</span>
          </a>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;