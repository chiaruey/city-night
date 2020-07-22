// import {ApiResult} from '@skyline/scl-redux';

import {MapSearchContent} from '../MapSearch/MapSearchContent';
import {MapSearchPayload} from '../MapSearch/MapSearchPayload';
import {MapSearchResponseData} from '../MapSearch/MapSearchResult';

export interface MapBase {
  searchResults?: MapSearchResponseData;
  filters: MapSearchPayload;
  isSearchInProgress: boolean;
}

export interface MapState {
  // pharmacyBase: ApiResult<MapSearchResponseData, MapSearchPayload>;
  // pharmacySearch: ApiResult<MapSearchContent>;
}
