import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredReadList, getStoredWishList } from '../../Utility/addToDb';
import Book from '../Book/Book';
const ListedBooks = () => {
    // readlist

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBooks = useLoaderData();

    //ideally we will directly grt the read book list from the database
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        //worst way
        // console.log(storedReadList, storedReadListInt, allBooks);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
        // wishlist
        //ideally we will directly get the read book list from the database
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        //worst way
        // console.log(storedReadList, storedReadListInt, allBooks);

        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishBookList);
    }, [allBooks]);

    return (
        <div>
            <div><h1 className="text-xl font-bold bg-gray-200 w-full py-5 text-center rounded-xl my-5">Books</h1></div>
            <div className='flex justify-center'><button className='btn bg-green-500 text-white'>sort By <FaAngleDown /></button></div>
            <Tabs>
                <TabList>
                    <Tab ><span className='font-semibold'>Read Books</span></Tab>
                    <Tab ><span className='font-semibold'>Wishlist Book</span></Tab>
                </TabList>

                <TabPanel>
                    <div>

                        {
                            readList.map(book => <Book key={book.bookID} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>

                    {
                        wishList.map(book => <Book key={book.bookID} book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ListedBooks;