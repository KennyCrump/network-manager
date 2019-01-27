import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AddConnection from './Components/Connection/AddConnection'
import Connections from './Components/Connection/Connections'

export default <Switch>
    <Route path='/connections/add' component={AddConnection} />
    <Route path='/connections' component={Connections} />
</Switch>