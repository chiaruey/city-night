export interface SubHeader {
  title?: string;
  weight?: string;
  id?: string;
  path?: string;
  type?: string;
  url?: string;
  target?: string;
  children?: SubHeader[];
}
