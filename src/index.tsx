import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./pages/MainPage/mainPage";
import Explore from "./pages/ExplorePage/explorePage";
import Showroom from "./pages/ShowroomPage/showroomPage";
import CreditSimulation from "./pages/CreditSimulationPage/creditSimulationPage";
import "./style.scss";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/rootReducer";
import "swiper/swiper-bundle.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/DetailPage/detailPage";
import ScrollToTop from "./Component/ScrollToTop/scrollToTop";
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <ScrollToTop />
            <Switch>
                <Route path="/explore" component={Explore} />
                <Route path="/details/:id" component={Detail} />
                <Route path="/showroom" component={Showroom} />
                <Route path="/creditSimulation" component={CreditSimulation} />
                <Route path="/" component={Main} />
            </Switch>
        </Provider>
    </Router>,

    document.getElementById("root")
);
