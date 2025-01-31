import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../../Utility/addToDb";


const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookID, image, review, bookName, totalPages, publisher, author, rating, category, tags, yearOfPublishing } = book;

    const handleMarkAsRead = () => {
        /**
         * 1.understand what to store or save : => bookId
         * 2. Where to store : database
         * 3. array or list or collection : 
         * 4. check : if the book is already iin the readList . 
         * 5. if not , then add the book to the list 
         * 6. if yes , do not add the book
         * 
         */

        addToStoredReadList(id)

    }

    const handleMarkAsWishList = () => {
        addToWishList(id)
    }

    return (
        <div className="my-10 ">
            <div className=" bg-base-200 rounded-xl ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="ml-4">
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">
                            <strong> by</strong> {author}
                        </p>
                        <hr />
                        <p className="my-2 text-xl font-semibold">{category}</p>
                        <hr />
                        <p className="py-6">
                            <strong>Review :</strong> {review}
                        </p>
                        <hr />

                        <div className="flex gap-3 m-3 text-sm"><p className="text-green-400 bg-gray-100 gap-3 rounded-full px-2">{tags[0]}</p><p className="text-green-400 bg-gray-100 gap-3 rounded-full px-2">{tags[1]}</p></div>

                        <div className="flex gap-20 mb-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-gray-500">Number of pages:</p>
                                <p className="text-sm text-gray-500">Publisher:</p>
                                <p className="text-sm text-gray-500">Year of Publisher:</p>
                                <p className="text-sm text-gray-500">Rating:</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-black font-semibold">{totalPages}</p>
                                <p className="text-sm text-black font-semibold">{publisher}</p>
                                <p className="text-sm text-black font-semibold">{yearOfPublishing}</p>
                                <p className="text-sm text-black font-semibold">{rating}</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <button onClick={() => handleMarkAsRead(bookId)} className="btn ">Read</button>
                            <button onClick={() => handleMarkAsWishList(bookId)} className="btn bg-cyan-500 text-white font-semibold">Wish List</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetail;