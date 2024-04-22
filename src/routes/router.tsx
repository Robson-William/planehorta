import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App/App";
import { Area } from "../screens/Forms/Area/Area";
import { Production } from "../screens/Forms/Production/Production";
import { Type } from "../screens/Forms/Type/Type";
import { LandingPage } from "../screens/LandingPage/LandingPage";
import { Model } from "../screens/Model/Model";
import { Planning } from "../context/planning";

export const routes = (context:Planning) => createBrowserRouter([
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
                element: <Production />,
                loader: async () => {
                    const {type, measures} = context;

                    if(!type){
                        return redirect("/planejar/tipo")
                    }
                    if(!measures){
                        return redirect("/planejar/area")
                    }
                }
            },
            {
                path: "/planejar/tipo",
                element: <Type />,
                loader: async () => {
                    const {measures} = context;

                    if(!measures){
                        return redirect("/planejar/area")
                    }
                }
            },
            {
                path: "/planejar/modelo",
                element: <Model />,
                loader: async () => {
                    const {type, measures, production} = context;

                    if(!type || !measures || !production){
                        return redirect("/planejar/tipo")
                    }
                }
            }
        ]
    }
])