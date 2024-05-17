import './App.css'
import Button from "./Components/Button.jsx";
import Product from "./Components/Product.jsx";
// import Bag1 from '../src/assets/bag_1.png';

function App() {
    return (<>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    type='button'
                    buttonText='To the collections'
                    disabled={false}
                    onClick={() => {
                        console.log('To the collections')
                    }}
                />
                <Button
                    type='button'
                    buttonText='Shop all bags'
                    disabled={false}
                    onClick={() => {
                        console.log('Shop all bags')
                    }}
                />
                <Button
                    type='button'
                    buttonText='Pre-orders'
                    disabled={true}
                    onClick={() => {
                        console.log('Pre-orders')
                    }}
                />
            </nav>

            <main>
                <Product
                span='Best seller'
                img src={'../src/assets/bag_1.png'}
                alt='Tasjes 1'
                p='The handy bag'
                h4='€400'
               />

                <Product
                    span='Best seller'
                    img src={'../src/assets/bag_2.png'}
                    alt='Tasjes 2'
                    p='The stylish bag'
                    h4='€250'
                />

                <Product
                    span='New collection'
                    img src={'../src/assets/bag_3.png'}
                    alt='Tasjes 3'
                    p='The simple bag'
                    h4='€300'
                />

                <Product
                    span='New collection'
                    img src={'../src/assets/bag_4.png'}
                    alt='Tasjes 4'
                    p='The trendy bag'
                    h4='€150'
                />

            </main>

        </>
    )
}

export default App
