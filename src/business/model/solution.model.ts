export interface Solutions {
    solutionName: string
    brandImg: string
    email: string
    urlCompany: string
    userRate: number
    expertRate: number
    solutionPopularty: number
    uiux: number
    featuresCoverage: number
    security: number
    performance: number
    connectivity: number
    internationnalBusiness: InternationnalBusiness
    clientBusiness: ClientBusiness
    hosting: Hosting
    dev: Dev
    valueForMoney: number
    software: Software
    compatibility: Compatibility
  }

  export interface ClientBusiness {
    b2b: boolean
    b2c: boolean
    both: boolean
  }
  
  export interface InternationnalBusiness {
    national: boolean
    international: boolean
    both: boolean
  }
  
  export interface Hosting {
    cloud: boolean
    onPremise: boolean
    hybrid: boolean
    saas: boolean
    any: boolean
  }
  
  export interface Dev {
    low: boolean
    high: boolean
    none: boolean
  }
  
  export interface Software {
    companyOldness: number
    revenuePerClient: number
    innovations: number
    TerritoryMesh: number
    userRate: number
    siteWebQuality: number
    partnershipEchoSystem: number
    numberOfEmployes: number
    SAV: number
    RSE: number
    eventOrganisation: number
    ResourcesMadeAvailable: number
  }
  
  export interface Compatibility {
    secteur: SecteurItem[]
    size: Size
    implemntation: Implemntation
    position: number
  }
  
  export interface SecteurItem {
      title: string
      value: boolean
  }
  
  export interface Size {
    A: number
    B: number
    C: number
    D: number
    E: number
    F: number
  }
  
  export interface Implemntation {
    M1: boolean
    M6: boolean
    A1: boolean
    A100: boolean
    any: boolean
  }