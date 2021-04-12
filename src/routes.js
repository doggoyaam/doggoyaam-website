import React from 'react';
import { Route } from 'react-router-dom';


import HomeView from './containers/HomeView';
import ShopView from './containers/ShopView';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/shop" component={ShopView} />

    </div>
);

export default BaseRouter;