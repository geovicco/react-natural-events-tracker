import Spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="Loading..." />
            <h2>Fetching Data....</h2>
        </div>
    )
}

export default Loader
