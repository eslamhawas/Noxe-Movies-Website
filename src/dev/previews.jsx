import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Navbar from "../components/Navbar";
import App from "../App";
import Login from "../components/Login";


const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/Navbar">
                <Navbar />
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App />
            </ComponentPreview>
            <ComponentPreview path="/Login">
                <Login />
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews