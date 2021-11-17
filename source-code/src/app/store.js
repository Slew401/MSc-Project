import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'
import { srAPI } from '../services/sr.api'
import { data_nba } from '../services/data.nba'

export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        [srAPI.reducerPath]: srAPI.reducer,
        [data_nba.reducerPath]:data_nba.reducer, 
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(data_nba.middleware)
})