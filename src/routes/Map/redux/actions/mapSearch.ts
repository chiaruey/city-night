import {MapSearchResponseData} from '../../MapSearch/MapSearchResult';
import {MapSearchPayload} from '../../MapSearch/MapSearchPayload';

const searchForMapActionType = 'Map/searchForMap';

export function searchForMap(payload: MapSearchPayload) {
  return {
    type: searchForMapActionType,
    payload
  } as const;
}
searchForMap.toString = () => searchForMapActionType;

export function searchForMapResolved(results: MapSearchResponseData) {
  return {type: 'Map/searchForMapResolved', payload: results} as const;
}

export function searchForMapRejected(error: any) {
  return {type: 'Map/searchForMapRejected', payload: error} as const;
}

export function pharmacySearchFilter(filter: MapSearchPayload) {
  return {type: 'Map/pharmacySearchFilter', payload: filter} as const;
}
