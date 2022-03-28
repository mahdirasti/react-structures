import { StateType, persistor, store } from './createStore'
import { TypedUseSelectorHook, useSelector } from "react-redux"

/**
 * For typescript's sake, import this typed useAppSelector hook instead of default useSelector hook
 */
const useAppSelector: TypedUseSelectorHook<StateType> = useSelector

export type { StateType }
export { persistor, store, useAppSelector }
