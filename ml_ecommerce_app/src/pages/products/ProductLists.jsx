import Hero from "../../components/Hero";
import { Link, NavLink} from 'react-router-dom';
import Blonde from "../../components/pics/Blonde";
//let products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let products = [
    {
        id: 1,
        name: 'Blonde',
        price: 55,
        description: 'Cerveza clara y ligera para el calor',
        // img: 'https://picsum.photos/200/150'
        img: url(components/pics/Blonde)
    },
    {
        id: 2,
        name: 'Porter',
        price: 60,
        description: 'Cerveza obscura, ideal con postres',
        img: 'https://picsum.photos/200/150'
        // img: url(src/components/pics/Porter)
    },
    {
        id: 3,
        name: 'Mole Porter',
        price: 90,
        description: 'Cerveza obscura, con preparado de mole dulce',
        img: 'https://picsum.photos/200/150'
    },
    {
        id: 4,
        name: 'Weenter',
        price: 120,
        description: 'Cerveza obscura, invernal',
        img: 'https://picsum.photos/200/150'
    },
];

const ProductLists = () => {
    return (
        <main>
<Hero />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <h5>Esto puede ser algun menu o anuncio</h5>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {products.map((product) => {
                                return (
                                    <div className="col-sm-6 col-md-4" key={product.id}>
                                        <div className="card mb-4">
                                            {/* <img src="https://picsum.photos/200/150" className="card-img-top" alt='test' /> */}
                                            <img className="card-img-top">{product.img}</img>

                                            <div className="card-body">
                                                <h4 className='card-title'>${product.price}</h4>
                                                <h4 className='card-title'>{product.name}</h4>
                                                <p className="card-text">{product.description}</p>
                                                <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Carrito</Link>
                                                <Link to="/detail-product" className="btn btn-warning btn-sm d-grid mt-2">Detalle</Link>
                                            </div>
                                        </div>
                                    </div>

                                )

                            })}
                        </div>
                    </div>
                </div>
            </div>

        </main>)


}

export default ProductLists;
    