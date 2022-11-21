import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Location from './Location'
import Reservation from './Reservation';
export const HomeRoute = "/";
export const ReservationRoute = "/projects/";
class Routing extends React.Component {
    render() {
        return (
            <Layout>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={ReservationRoute} component={Reservation} />
            </Layout >
        );
    }
}
export default withRouter(Routing);