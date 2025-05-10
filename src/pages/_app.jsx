import { CommonProvider } from '../contexts/common/commonContext';
import { CartProvider } from '../contexts/cart/cartContext';
import { FiltersProvider } from '../contexts/filters/filtersContext';
import '../scss/index.scss';
import 'remixicon/fonts/remixicon.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
    return <CommonProvider>
        <FiltersProvider>
            <CartProvider>
                <Component {...pageProps} />
                <ToastContainer />
            </CartProvider>
        </FiltersProvider>
    </CommonProvider>
}

export default MyApp;
