import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "@pages/NotFound";
import Loading from "@pages/Loading";

export const Home = React.lazy(() => import("@pages/Home"));

export function App(): React.ReactElement {
    return (
        <React.Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}
