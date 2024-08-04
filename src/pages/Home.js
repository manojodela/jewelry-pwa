import HomePage from "../Components/HomePage";
import Navbar from "../Components/Navbar";
import { useCart } from "../store";
import ProductModal from "../Components/ProductModal";
import BounceLoader from "react-spinners/BounceLoader";

const Home = () => {
    const { showModal, loading } = useCart();

    return (<>
        <Navbar />
        <HomePage />
        {loading && <BounceLoader color={"#000"} />}
        {showModal && <ProductModal />}
    </>)
}

export default Home;