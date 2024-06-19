import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage"
import ContactUsPage from "../pages/03-ContactUsPage"
import ServicesPage from "../pages/02-ServicesPage"

function ConditionalRoute() {
return(
<>
<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Services' element={<ServicesPage/>} />
    <Route path='/contact-us' element={<ContactUsPage/>} />
</Routes>
</>);

}

export default ConditionalRoute