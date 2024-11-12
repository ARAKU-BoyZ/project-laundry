import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import Table from '../component/Table'




const Dashboard = () => {
    return (
        <div className='flex h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className='flex flex-col p-10'>
                    <h1 className='text-5xl font-bold'>Enigma Laundry</h1>
                    <h2 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat quia sed enim quibusdam doloribus quis, impedit, fugiat aperiam alias adipisci id architecto cumque harum beatae accusamus sit non explicabo?</h2>
                </div>
                <div className='p-14'>
                    <Table />
                </div>
            </div>
        </div>
  )
}

export default Dashboard