export interface IListinoItem {
  _id: string;

  /** Reflected: __Dati_Numero001*/
  Uno: number;

  /** Reflected: __Dati_Testo001*/
  IdItem: string;

  /** Reflected: __Dati_Numero002*/
  FlagVendita: number;

  /** Reflected: __Dati_Testo002*/
  FlagVenditaVedi: string;

  /** Reflected: __Dati_Numero003*/
  VVenditaUnitario: number;

  /** Reflected: __Dati_Numero004*/
  QtMinima: number;

  /** Reflected: __Dati_Testo003*/
  IdListinoItem: string;

  /** Reflected: __Dati_Numero005*/
  QtImpostata: number;

  /** Reflected: __Dati_Testo004*/
  TxtItem: string;

  /** Reflected: __Dati_Numero006*/
  Priorita: number;

  /** Reflected: __Dati_Testo005*/
  IdTipoListino: string;

  /** Reflected: __Dati_Testo006*/
  TxtTipoListino: string;

  /** Reflected: __Dati_Testo007*/
  TxtListinoItem: string;

  /** Reflected: __Dati_Numero007*/
  VVenditaUnitarioPrecedente: number;

  /** Reflected: __Dati_Data001*/
  DataPrezzoUnitario: Date;

  /** Reflected: __Dati_Data002*/
  DataPrezzoUnitarioPrecedente: Date;

  /** Reflected: __Dati_Numero008*/
  DifferenzaPrezzoPercentuale: number;

  /** Reflected: __Dati_Numero009*/
  FlagListinoPrincipale: number;

  /** Reflected: __Dati_Testo008*/
  IdTipoListinoRiferimento: string;

  /** Reflected: __Dati_Numero010*/
  VVenditaUnitarioCalcolato: number;

  /** Reflected: __Dati_Testo009*/
  IdAliquota: string;

  /** Reflected: __Dati_Data003*/
  DataFineValidita: Date;

  /** Reflected: __Dati_Data004*/
  DataInizioValidita: Date;

  /** Reflected: __Dati_Numero011*/
  FlagValiditaData: number;

  /** Reflected: __Dati_Numero012*/
  FlagValiditaFamiglia: number;

  /** Reflected: __Dati_Numero013*/
  FlagValiditaSottoFamiglia: number;

  /** Reflected: __Dati_Numero014*/
  FlagValidoSempre: number;

  /** Reflected: __Dati_Numero015*/
  FlagValoreFisso: number;

  /** Reflected: __Dati_Numero016*/
  FlagValoreRicarico: number;

  /** Reflected: __Dati_Testo010*/
  CodiceItem: string;

  /** Reflected: __Dati_Testo011*/
  IdAccountCompagnia: string;

  /** Reflected: __Dati_Testo012*/
  IdFamigliaItem: string;

  /** Reflected: __Dati_Testo013*/
  IdSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo014*/
  TxtSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo015*/
  TxtFamigliaItem: string;

  /** Reflected: __Dati_DataOra001*/
  DataOraUltimaModifica: Date;

  /** Reflected: __Dati_Numero017*/
  FlagManuale: number;

  /** Reflected: __Dati_Testo016*/
  IdTipoListinoOrigine: string;

  /** Reflected: __Dati_Testo017*/
  IdItemOrigine: string;

  /** Reflected: __Dati_Numero018*/
  FlagListinoIvato: number;

  /** Reflected: __Dati_Numero019*/
  PercentualeAliquota: number;

  /** Reflected: __Dati_Numero020*/
  VVenditaUnitarioIvato: number;

  /** Reflected: __Dati_Numero021*/
  VVenditaUnitarioPrecedenteIvato: number;

  /** Reflected: __Dati_Numero022*/
  Zero: number;

  /** Reflected: __Dati_DataOra002*/
  DataOraCreazione: Date;

  /** Reflected: __Dati_Testo018*/
  IdInstallazione: string;

  /** Reflected: __Dati_Numero023*/
  FlagAggiornaContenutiDaItems: number;

  /** Reflected: __Dati_Testo019*/
  CodiceTxtItemAutomatico: string;

  /** Reflected: __Dati_Testo020*/
  TxtListinoItemPrioritaAutomatico: string;

  /** Reflected: __Dati_Numero024*/
  VariazionePercentuale_Sconto1: number;

  /** Reflected: __Dati_Numero025*/
  VariazionePercentuale_Sconto2: number;

  /** Reflected: __Dati_Numero026*/
  VariazionePercentuale_Sconto3: number;

  /** Reflected: __Dati_Numero027*/
  FlagAttivo: number;

  /** Reflected: __Dati_Numero028*/
  FlagMobile: number;

  /** Reflected: __Dati_Numero029*/
  FlagWeb: number;
}
