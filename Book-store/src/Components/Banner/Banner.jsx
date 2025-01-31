import bannerImg from '../../../images/books.jpg';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl py-10 my-4">
                <div className="hero-content flex-col lg:flex-row-reverse gap-48">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1><br /><br />
                        <button className="btn bg-[#23BE0A] text-white rounded-lg">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;