export interface IFileZProduction {
  _id: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo001*/ 
  NomeFile: string;
  /** Reflected: __Dati_Testo002*/ 
  StrutturaTabelle: string;
  /** Reflected: __Dati_Testo003*/ 
  NomiChiavi: string;
  /** Reflected: __Dati_Testo004*/ 
  AccountCreazione: string;
  /** Reflected: __Dati_Testo005*/ 
  AccountUltimaModifica: string;
  /** Reflected: __Dati_Numero001*/ 
  FlagJSONStrutturaTabelleValido: number;
  /** Reflected: __Dati_Numero002*/ 
  FlagJSONNomiChiaviValido: number;
  /** Reflected: __Dati_Testo006*/ 
  IdRicorrenzaRecord: string;
  /** Reflected: __Dati_Testo007*/ 
  IdUtente: string;
  /** Reflected: __Dati_Testo008*/ 
  TxtUtente: string
}