import { store } from '../../core/store';

export type IRootState = ReturnType<typeof store.getState>

export type IAppDispatch = typeof store.dispatch
