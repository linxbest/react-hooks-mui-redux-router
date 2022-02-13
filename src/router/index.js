import React from 'react'
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom'

import Main from '../pages/main' // 首页
import Search from '../pages/search' // 搜索页
import Error404 from '../pages/errors/404' // 404错误页面

export default function route() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/search/:searchWord" component={Search} />
                <Route exact path="*" component={Error404} />
            </Switch>
        </Router>
    )
}
