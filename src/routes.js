import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AddConnection from './Components/Connection/AddConnection'

export default <Switch>
    <Route path='/connections/add' component={AddConnection} />
</Switch>