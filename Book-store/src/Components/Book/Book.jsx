import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/books/${bookId}`}><div className=" bg-base-100 w-96 border border-gray-200  rounded-xl  mb-10 p-7">
            <figure className=" bg-gray-400 rounded-xl flex justify-center ">
                <img
                    src={image}
                    className="w-1/2 h-[200px] p-5 " />
            </figure>
            <div className="flex gap-3 m-3 text-sm"><p className="text-green-400 bg-gray-100 gap-3 rounded-full px-2">{tags[0]}</p><p className="text-green-400 bg-gray-100 gap-3 rounded-full px-2">{tags[1]}</p></div>
            <div className="card gap-y-4 ">
                <h2 className="card-title">{bookName}</h2>
                <p>By {author}</p>
                <span className="border border-dashed border-gray-200 "></span>
                <div className="card-actions justify-between font-semibold">
                    <h1>{category}</h1>
                    <div className="flex items-center gap-2"> <h1>{rating}</h1>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div></div>
                </div>
            </div>
        </div></Link>
    );
};

export default Book;
/**
 * "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
    "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
    "totalPages": 192,
    "rating": 4.5,
    "category": "Classic",
    "tags": ["Fiction", "Romance"],
    "publisher": "Scribner",
    "yearOfPublishing": 1925
 */