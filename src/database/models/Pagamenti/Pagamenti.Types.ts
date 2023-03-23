export interface IPagamenti {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Testo002*/ 
  SimboloValuta: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  AnnoEffettivo: number;
  /** Reflected: __Dati_Testo003*/ 
  AnnoMeseEffettivo: string;
  /** Reflected: __Dati_Numero003*/ 
  ConversioneValutaAPrincipale: number;
  /** Reflected: __Dati_Data001*/ 
  DataEffettivaPagamento: Date;
  /** Reflected: __Dati_Numero004*/ 
  MeseEffettivo: number;
  /** Reflected: __Dati_Numero005*/ 
  SettimanaEffettiva: number;
  /** Reflected: __Dati_Numero006*/ 
  VPagato: number;
  /** Reflected: __Dati_Numero007*/ 
  VPagatoSegno: number;
  /** Reflected: __Dati_Numero008*/ 
  VPagatoValuta: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagOut: number;
  /** Reflected: __Dati_Testo004*/ 
  IdCassaBancaEmittente: string;
  /** Reflected: __Dati_Testo005*/ 
  IdCassaBancaPagatore: string;
  /** Reflected: __Dati_Testo006*/ 
  IdCassaBancaTutti: string;
  /** Reflected: __Dati_Testo007*/ 
  TxtMetodoPagamento: string;
  /** Reflected: __Dati_Numero010*/ 
  FlagRiba: number;
  /** Reflected: __Dati_Numero011*/ 
  FlagIn: number;
  /** Reflected: __Dati_Numero012*/ 
  VEntrata: number;
  /** Reflected: __Dati_Numero013*/ 
  VUscita: number;
  /** Reflected: __Dati_Data002*/ 
  DataPrevistaPagamento: Date;
  /** Reflected: __Dati_Testo008*/ 
  IdPagamento: string;
  /** Reflected: __Dati_Testo009*/ 
  IdCassaBancaPagamento: string;
  /** Reflected: __Dati_Testo010*/ 
  AnnoMesePrevisto: string;
  /** Reflected: __Dati_Numero014*/ 
  AnnoPrevisto: number;
  /** Reflected: __Dati_Numero015*/ 
  MesePrevisto: number;
  /** Reflected: __Dati_Testo011*/ 
  IdScadenza: string;
  /** Reflected: __Dati_Testo012*/ 
  TxtCassaBancaPagamento: string;
  /** Reflected: __Dati_Testo013*/ 
  CodiceDocContabile: string;
  /** Reflected: __Dati_Testo014*/ 
  CodiceEsterno: string;
  /** Reflected: __Dati_Testo015*/ 
  CodiceVisualizza: string;
  /** Reflected: __Dati_Testo016*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo017*/ 
  IdAccountEmittente: string;
  /** Reflected: __Dati_Testo018*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo019*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Testo020*/ 
  IdAccountTutti: string;
  /** Reflected: __Dati_Numero016*/ 
  GiorniRitardo: number;
  /** Reflected: __Dati_Testo021*/ 
  IdDocOperativo: string;
  /** Reflected: __Dati_Testo022*/ 
  IdMovimentoCassa: string;
  /** Reflected: __Dati_Data003*/ 
  DataRegistrazioneDocContabile: Date;
  /** Reflected: __Dati_Data004*/ 
  DataDocContabile: Date;
  /** Reflected: __Dati_Data005*/ 
  DataValuta: Date;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero017*/ 
  ConversioneValutaSuPrincipale: number;
  /** Reflected: __Dati_Testo023*/ 
  IdMetodoPagamento: string;
  /** Reflected: __Dati_Testo024*/ 
  SimboloValutaRidotto: string;
  /** Reflected: __Dati_Testo025*/ 
  TxtValuta: string;
  /** Reflected: __Dati_Numero018*/ 
  Zero: number;
  /** Reflected: __Dati_Testo026*/ 
  IdPeriodoContabile: string;
  /** Reflected: __Dati_Testo027*/ 
  TxtPeriodoContabile: string;
  /** Reflected: __Dati_Testo028*/ 
  IdAccountDocContabile: string;
  /** Reflected: __Dati_Testo029*/ 
  FlagResoconto: string;
  /** Reflected: __Dati_Testo030*/ 
  IdValuta: string;
  /** Reflected: __Dati_Numero019*/ 
  FlagContabilizzabile: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagDaContabilizzare: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagContabilizzato: number;
  /** Reflected: __Dati_Testo031*/ 
  IdUtenteContabilizzazione: string;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraDaContabilizzare: Date;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraContabilizzato: Date;
  /** Reflected: __Dati_Numero022*/ 
  FlagRID: number;
  /** Reflected: __Dati_Testo032*/ 
  IdInstallazione: string
}