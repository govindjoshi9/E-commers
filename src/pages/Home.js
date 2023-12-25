import ProductList from "../features/Product-list/ProductList";
import NavBar from "../features/navbar/NavBar";

function Home() {
    return (<div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>

    </div> );
}

export default Home;