import {useDispatch} from 'react-redux';

// import {useTypedSelector} from '../../common/hooks';

import {MapSearchPayload} from './MapSearch/MapSearchPayload';
import {searchForMap} from './redux/actions';

const useMapState = () => {
  const dispatch = useDispatch();

  const findMap = (filters: MapSearchPayload) => {
    dispatch(searchForMap(filters));
  };

  // const mapState = useTypedSelector((state) => state.mapRoute.mapBase);

  // return {...mapState, findMap};
  return {findMap};
};

export {useMapState};
