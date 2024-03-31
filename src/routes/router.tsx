import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import { Area } from "../screens/Forms/Area/Area";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Area />
            }
        ]
    }
])