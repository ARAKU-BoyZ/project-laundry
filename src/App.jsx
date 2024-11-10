import { Table } from "@nextui-org/react"
import Loader from "./component/Loader"
import CreateCustomer from "./component/modals/CreateCustomerModal"
import CreateProductModal from './component/modals/CreateProductModal'
import CreateTransactionModal from "./component/modals/CreateTransactionModal"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import HomePage from './pages/HomePage'
import Tablee from "./component/Table"
import Footer from "./component/Footer"

function App() {

  return (
    <>
    <body className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex flex-col gap-4 mt-2 mr-8 p-2">
            <header className="flex items-center justify-between">
              <h1 className="ml-2 font-bold">Daftar Pelanggan</h1>
              <CreateCustomer /> 
            </header>
            <body className="flex ml-2">
              <Tablee />
            </body>
            <footer>
              <Footer />
            </footer>
            {/* <CreateProductModal />
            <CreateTransactionModal /> */}
          </div>
        </div>
    </body>
    </>
  )
}

export default App