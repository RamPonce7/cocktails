
import { useSelector } from 'react-redux'
import { type RootState, type AppDispatch, store } from './store'


export const useStoreApp = () => {
    const appDispatch = store.dispatch as AppDispatch
    const appSelector = useSelector.withTypes<RootState>()
    return {
        appDispatch,
        appSelector
    }
}
