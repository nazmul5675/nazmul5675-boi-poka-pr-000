import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaAngleDown } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredReadList, getStoredWishList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList().map(id => parseInt(id));
        const storedWishList = getStoredWishList().map(id => parseInt(id));

        setReadList(allBooks.filter(book => storedReadList.includes(book.bookId)));
        setWishList(allBooks.filter(book => storedWishList.includes(book.bookId)));
    }, [allBooks]);

    // Sorting function
    const handleSort = (sortType) => {
        setSort(sortType);

        const sortBooks = (books) => {
            return [...books].sort((a, b) => {
                if (sortType === 'Rating') return b.rating - a.rating;
                if (sortType === 'Number Of Pages') return b.totalPages - a.totalPages;
                if (sortType === 'Publisher Year') return b.yearOfPublishing - a.yearOfPublishing;
                return 0;
            });
        };

        setReadList(sortBooks(readList));
        setWishList(sortBooks(wishList));
    };

    return (
        <div>
            <h1 className="text-xl font-bold bg-gray-200 w-full py-5 text-center rounded-xl my-5">
                Books
            </h1>

            <div className="dropdown flex justify-center">
                <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
                    {sort ? `Sort by ${sort}` : 'Sort By'}
                    <FaAngleDown />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('Rating')}>
                        <a>Rating</a>
                    </li>
                    <li onClick={() => handleSort('Number Of Pages')}>
                        <a>Number Of Pages</a>
                    </li>
                    <li onClick={() => handleSort('Publisher Year')}>
                        <a>Publisher Year</a>
                    </li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab><span className="font-semibold">Read Books</span></Tab>
                    <Tab><span className="font-semibold">Wishlist Books</span></Tab>
                </TabList>

                <TabPanel>
                    {readList.length > 0 ? (
                        readList.map(book => <Book key={book.bookId} book={book} />)
                    ) : (
                        <p>No books in your read list.</p>
                    )}
                </TabPanel>
                <TabPanel>
                    {wishList.length > 0 ? (
                        wishList.map(book => <Book key={book.bookId} book={book} />)
                    ) : (
                        <p>No books in your wishlist.</p>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
