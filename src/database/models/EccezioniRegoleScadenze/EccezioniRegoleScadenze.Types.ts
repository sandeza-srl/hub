export interface IEccezioniRegoleScadenze {
  _id: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Data001*/ 
  DataScadenza: Date;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo002*/ 
  IdEccezioneRegoleScadenze: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  Zero: number;
  /** Reflected: __Dati_Data002*/ 
  DataInizio: Date;
  /** Reflected: __Dati_Data003*/ 
  DataFine: Date;
  /** Reflected: __Dati_Testo003*/ 
  IdRegolaScadenza: string;
  /** Reflected: __Dati_Numero003*/ 
  MeseGiornoDataInizio: number;
  /** Reflected: __Dati_Numero004*/ 
  MeseGiornoDataFine: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagScalaAnno: number;
  /** Reflected: __Dati_Testo004*/ 
  DataEccezioneLista: string;
  /** Reflected: __Dati_Testo005*/ 
  DataEccFlagScalaAnno: string;
  /** Reflected: __Dati_Testo006*/ 
  IdInstallazione: string
}