import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Body from "../components/Body.jsx";
import ContactUs from "../components/ContactUs.jsx";
import ProductDetail from "../components/ProductDetail.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
                path: "/",
                Component: Body
            },
            {
                path: "/contact",
                Component: ContactUs
            },
            {
                path: "/:id",
                Component: ProductDetail
            }
        ]
    }
]);

export default appRouter;