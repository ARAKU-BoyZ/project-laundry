// MEMBUAT INPUT MENGGUNAKAN CONTROL ELEMENT
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from 'sonner'


const WishlistPage = () => {
    // Set hasil inputan
    const [wishlistInput, setWishlistInput] = useState("")
    const [wishListItems, setWishListItems] = useState([])


    // Fungsi get axios mengambil data
    const fetchWishlistItems = async () => {
        try {
            const response = await axiosInstance.get("/wishlist-items")
            setWishListItems(response.data)
        } catch (error) {
            toast.error("Server Error")
        }
    }

    useEffect(() => {
        fetchWishlistItems()
    }, [])


    // Fungsi menambah List ke server
    const addWishList = async () => {
        try {
            await axiosInstance.post("/wishlist-items", {
                name: wishlistInput,
            })
            fetchWishlistItems()
            setWishlistInput("")
            toast.success("You have added an item")
        } catch (error) {
            toast.error("Server error")
        }
    }
    
    // Fungsi menambah List lokal
    // const addWishList = () => {
    //     setWishListItems([...wishListItems, wishlistInput])
    //     setWishlistInput("")
    // }

    return (
        <>
            <div className="flex items-center p-4 gap-4">
                 <Input
                  value={wishlistInput}
                  onChange={(event) => {
                    setWishlistInput(event.target.value)
                 }} label="Wishlist Item" color="secondary" />
                 <Button onClick={addWishList} color="primary">Add</Button>
            </div>

            {/* render list */}
            <ul className="list-decimal list-inside text-center">
               {wishListItems.map((item) => {
                return <li>{item.name}</li>
               })} 
            </ul>
        </>
    )
}

export default WishlistPage









// // MEMBUAT INPUT MENGGUNAKAN UNCONTROL ELEMENT
// import { Button, Input } from "@nextui-org/react";
// import { useRef, useState } from "react";


// const WishlistPage = () => {
//     //Membuat referensi yang nyambung ke salah satu element input HTML
//     const inputRef = useRef()

//     // Set hasil inputan
//     const [wishListItems, setWishListItems] = useState([])

//     // Fungsi menambah List
//     const addWishList = () => {
//         const whislistInputValue = inputRef.current.value;
//         setWishListItems([...wishListItems, whislistInputValue])
//     }

//     return (
//         <>
//             <div className="flex items-center p-4 gap-4">
//                  <Input ref={inputRef} label="Wishlist Item" color="secondary" />
//                  <Button onClick={addWishList} color="primary">Add</Button>
//             </div>

//             {/* render list */}
//             <ul className="list-decimal list-inside text-center">
//                {wishListItems.map((item) => {
//                 return <li>{item}</li>
//                })} 
//             </ul>
//         </>
//     )
// }

// export default WishlistPage