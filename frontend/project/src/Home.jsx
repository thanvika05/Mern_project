import { Link } from "react-router-dom"; // Add this import
import storeImage from './assetsone/chrismas.jpg';
export default function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to Our Store</h1>
            <p>Discover our wide range of products and enjoy shopping with us!</p>
            {/* image only */}

            <Link to="/Products">
                <img
                    src={storeImage} // Add your image URL here
                    alt="Store Items"
                    style={{ width: '100%', maxWidth: '600px', height: 'auto', marginTop: '20px' }}
                />
                <p>Click the image to explore products</p>
            </Link>
        </div>
    );
}
