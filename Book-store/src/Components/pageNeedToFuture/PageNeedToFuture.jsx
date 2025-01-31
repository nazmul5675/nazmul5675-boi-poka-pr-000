import { NavLink } from "react-router-dom";


const PageNeedToFuture = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            This page in under development
                        </p>
                        <NavLink to='/'> <button className="btn btn-primary">go back to home</button> </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNeedToFuture;