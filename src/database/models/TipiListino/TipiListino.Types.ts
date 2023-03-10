export interface ITipiListino {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdTipoListino: string;
  /** Reflected: __Dati_Testo002*/ 
  TxtTipoListino: string;
  /** Reflected: __Dati_Numero002*/ 
  FlagVendita: number;
  /** Reflected: __Dati_Numero003*/ 
  Priorita: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagListinoPrincipale: number;
  /** Reflected: __Dati_Numero005*/ 
  VariazionePercentuale: number;
  /** Reflected: __Dati_Numero006*/ 
  VariazioneUnitaria: number;
  /** Reflected: __Dati_Testo003*/ 
  IdTipoListinoDiRiferimento: string;
  /** Reflected: __Dati_Testo004*/ 
  TxtTipoListinoDiRiferimento: string;
  /** Reflected: __Dati_Testo005*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo006*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Data001*/ 
  DataInizioValidita: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFineValidita: Date;
  /** Reflected: __Dati_Numero007*/ 
  FlagValidoSempre: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagValiditaData: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagValiditaFamiglia: number;
  /** Reflected: __Dati_Numero010*/ 
  FlagValiditaSottoFamiglia: number;
  /** Reflected: __Dati_Numero011*/ 
  FlagValoreRicarico: number;
  /** Reflected: __Dati_Numero012*/ 
  FlagValoreFisso: number;
  /** Reflected: __Dati_Numero013*/ 
  PercentualeRicarico: number;
  /** Reflected: __Dati_Testo007*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo008*/ 
  IdTipoListinoOrigine: string;
  /** Reflected: __Dati_Numero014*/ 
  FlagDaEsportare: number;
  /** Reflected: __Dati_Testo009*/ 
  IdFamigliaItemOrigine: string;
  /** Reflected: __Dati_Testo010*/ 
  IdSottoFamigliaItemOrigine: string;
  /** Reflected: __Dati_Numero015*/ 
  FlagListinoIvato: number;
  /** Reflected: __Dati_Numero016*/ 
  QuantitaMinima: number;
  /** Reflected: __Dati_Numero017*/ 
  Zero: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo011*/ 
  IdInstallazione: string
}