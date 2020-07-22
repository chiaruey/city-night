interface PostalCode {
  Part1: string;
}
interface Address {
  Line1: string;
  City: string;
  State: string;
  PostalCode: PostalCode;
}

interface Location {
  Address: Address;
  Distance: string;
  TwentyFourHourInd: string;
  HomeDeliveryInd: string;
  HomeServiceInd: string;
  IvsCode: string;
  IndianTribeUrbanInd: string;
  LongTermCareInd: string;
  NinetyDaysServiceInd: string;
  ConvenienceCareClinicInd: string;
}

interface Name {
  LastName: string;
}

export interface MapSearchResult {
  Type: string;
  Name: Name;
  InNetworkInd: string;
  Locations: Location[];
  PreferredInd: string;
  PreferredSeqno: string;
  NpnLabel: string;
  CountyName: string;
  LicenseNumber: string;
  TtyNumber: string;
  Website: string;
}

export interface MapSearchResponseData {
  Providers: MapSearchResult[];
  NetworkId: string;
}

export interface MapSearchResponse {
  response: MapSearchResponseData;
}
