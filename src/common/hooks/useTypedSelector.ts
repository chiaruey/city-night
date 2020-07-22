import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {ExplorerState} from '../../redux/ExplorerState';

export const useTypedSelector: TypedUseSelectorHook<ExplorerState> = useSelector;
