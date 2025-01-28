const ErrorPage = () => {
    return (
        <div className=" flex justify-center my-36">
            <div role="alert" className="alert alert-error">

                <span>Error! You are in wrong page </span>
                <button className="btn bg-green-400 ">Back TO Pavilion</button>
            </div>
        </div>
    );
};

export default ErrorPage;