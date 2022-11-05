import * as React from "react";
import { Routes as RoutesReactRouterDom, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MoviesDetails from "../pages/MovieDetails";

export const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesReactRouterDom>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<MoviesDetails />} />
            </RoutesReactRouterDom>
        </BrowserRouter>

    );
}