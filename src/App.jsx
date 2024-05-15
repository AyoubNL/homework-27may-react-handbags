import './App.css'
import Button from "./Components/Button.jsx";

function App() {
    return (<>
            <h1>Handbags & Purses</h1>
        <nav>

            <Button
                type='button'
                buttonText='To the collections'
                disabled={false}
                onClick={()=> {
                    console.log('To the collections')}}
                />
                <Button
                    type='button'
                    buttonText='Shop all bags'
                    disabled={false}
                    onClick={()=> {
                        console.log('Shop all bags')}}
                />
                <Button
                    type='button'
                    buttonText='Pre-orders'
                    disabled={true}
                    onClick={()=> {
                        console.log('Pre-orders')}}
                />


        </nav>

    </>
)
}

export default App
