import './App.css'
import Button from "./Components/Button.jsx";
import Product from "./Components/Product.jsx";
import Tile from "./Components/Tile.jsx";

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
                    promotion='Best seller'
                    img picture={'../src/assets/bag_1.png'}
                    pictureName='Tasjes 1'
                    productName='The handy bag'
                    productPrice='€400'
                />

                <Product
                    promotion='Best seller'
                    img picture={'../src/assets/bag_2.png'}
                    pictureName='Tasjes 2'
                    productName='The stylish bag'
                    productPrice='€250'
                />

                <Product
                    promotion='New collection'
                    img picture={'../src/assets/bag_3.png'}
                    pictureName='Tasjes 3'
                    productName='The simple bag'
                    productPrice='€300'
                />

                <Product
                    promotion='New collection'
                    img picture={'../src/assets/bag_4.png'}
                    pictureName='Tasjes 4'
                    productName='The trendy bag'
                    productPrice='€150'
                />

            </main>


            <footer>


                <Tile
                    title='The brand'
                >
                    <p>Lorem ipsum dolor sit amet. Eos quia eligendi ut libero impedit eum doloribus itaque et ducimus
                        rerum. Et placeat molestiae ut quis Quis est natus excepturi?
                    </p>
                    <p>Et similique culpa eos eveniet omnis id natus galisum ut perferendis libero. Rem dolorem beatae
                        ea expedita quod eos aliquam dolorum qui nostrum sunt quo sapiente quia sed soluta quia vel
                        possimus velit.
                    </p></Tile>


                <Tile>

                    <img src="../src/assets/brand.png" alt=""/>

                </Tile>

                <Tile>

                    <img src="../src/assets/our_story.png" alt=""/>

                </Tile>


                <Tile title='Our story'>
                    <p>Lorem ipsum dolor sit amet. Eos quia eligendi ut libero impedit eum doloribus itaque et ducimus
                        rerum. Et placeat molestiae ut quis Quis est natus excepturi?
                    </p>

                    <p>Et similique culpa eos eveniet omnis id natus galisum ut perferendis libero. Rem dolorem beatae
                        ea expedita quod eos aliquam dolorum qui nostrum sunt quo sapiente quia sed soluta quia vel
                        possimus velit.
                    </p>

                </Tile>


            </footer>


        </>
    )
}

export default App
