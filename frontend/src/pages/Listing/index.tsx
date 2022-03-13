import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {

    return (
        <>
            <Pagination />

            <div className="container"></div>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
                <div className="col-sm-6 col-lg-4 col col-xl-3 mg-4">
                    <MovieCard />
                </div>
            </div>
        </>
    );
}

export default Listing;
