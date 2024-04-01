import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import { Area } from "../screens/Forms/Area/Area";
import { Production } from "../screens/Forms/Production/Production";
import { Type } from "../screens/Forms/Type/Type";
import { LandingPage } from "../screens/LandingPage/LandingPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
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