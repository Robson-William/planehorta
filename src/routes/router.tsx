import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import { Area } from "../screens/Forms/Area/Area";
import { Production } from "../screens/Forms/Production/Production";
import { Type } from "../screens/Forms/Type/Type";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/planejar/area",
                element: <Area />
            },
            {
                path: "/planejar/producao",
                element: <Production />
            },
            {
                path: "/planejar/tipo",
                element: <Type />
            }
        ]
    }
])