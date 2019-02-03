import React from 'react'
import {Switch, Route} from 'react-router-dom'

import AddConnection from './Components/Connection/AddConnection'
import Connections from './Components/Connection/Connections'
import Companies from './Components/Company/Companies'

export default <Switch>
    <Route path='/connections/add' component={AddConnection} />
    <Route path='/connections' component={Connections} />
    <Route path='/companies' component={Companies} />
    
</Switch>