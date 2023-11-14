export interface Solutions {
  userRate: number;
  expertRate: number;
  solutionPopularty: number;
  uiux: number;
  featuresCoverage: number;
  security: number;
  performance: number;
  connectivity: number;
  internationnalBusiness: InternationnalBusiness;
  clientBusiness: ClientBusiness;
  hosting: any;
  dev: Dev;
  valueForMoney: number;
  software: Software;
  compatibility: Compatibility;
  connexion: boolean;
}

export interface ClientBusiness {
  b2b: boolean;
  b2c: boolean;
  both: boolean;
}

export interface InternationnalBusiness {
  national: boolean;
  international: boolean;
}

export interface Dev {
  low: boolean;
  high: boolean;
  none: boolean;
}

export interface Software {
  companyOldness: number;
  revenuePerClient: number;
  innovations: number;
  TerritoryMesh: number;
  userRate: number;
  siteWebQuality: number;
  partnershipEchoSystem: number;
  numberOfEmployes: number;
  SAV: number;
  RSE: number;
  eventOrganisation: number;
  ResourcesMadeAvailable: number;
}

export interface Compatibility {
  secteur: SecteurItem;
  fonctions: FonctionItem[];
  usersNumber: UsersNumber;
  size: Size;
  companySize: CompanySize;
  implemntation: Implemntation;
  position: number;
  reason: any;
  coefficients: Coefficients
}

export interface SecteurItem {
  title: string;
  value: boolean;
  codeSecteur: string
}

export interface FonctionItem {
  code: string
  title: string;
  value: boolean;
}

export interface Size {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
  E: boolean;
  F: boolean;
}

export interface CompanySize {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
  E: boolean;
  F: boolean;
}

export interface UsersNumber {
  A: boolean;
  B: boolean;
  C: boolean;
  D: boolean;
  E: boolean;
  F: boolean;
}

export interface Implemntation {
  M1: boolean;
  M6: boolean;
  A1: boolean;
  A100: boolean;
  any: boolean;
}

/* export interface Reason {
  sao: boolean;
  mf: boolean;
  pi: boolean;
  in: boolean;
  vt: boolean;
  other: boolean;
} */

export interface Coefficients {
  software:  number;
  price:  number;
  vendor: number;
  Compatibility: number;
  position: number;


}
