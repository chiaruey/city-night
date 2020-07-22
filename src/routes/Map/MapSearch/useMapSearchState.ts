// import {useDispatchEffect, useTypedSelector} from '../../../common/hooks';
// import {useMapState} from '../useMapState';

const useMapSearchState = () => {
  // const pharmacyState = useMapState();
  // const pharmacySearchState = useTypedSelector((state) => state.pharmacyRoute.pharmacySearch);

  return {
    // ...pharmacyState,
    // searchResults: pharmacyState.result,
    // isSearchInProgress: pharmacyState.isInProgress,
    // ...pharmacySearchState,
    // content: pharmacySearchState.result
  };
};

export {useMapSearchState};
