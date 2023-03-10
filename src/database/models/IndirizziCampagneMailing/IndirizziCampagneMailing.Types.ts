export interface IIndirizziCampagneMailing {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Testo001*/ 
  Cognome: string;
  /** Reflected: __Dati_Testo002*/ 
  IdRubrica: string;
  /** Reflected: __Dati_Testo003*/ 
  Nome: string;
  /** Reflected: __Dati_Testo004*/ 
  NomeRubrica: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraInvio: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraRicezione: Date;
  /** Reflected: __Dati_Numero002*/ 
  FlagSpam: number;
  /** Reflected: __Dati_Testo005*/ 
  IdCampagnaMailing: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtCampagnaMailing: string;
  /** Reflected: __Dati_Testo007*/ 
  IdEstrazioneContatti: string;
  /** Reflected: __Dati_Numero003*/ 
  Zero: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagBounce: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagRicevuta: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagClick: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagInviata: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagDisiscritto: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagAperta: number;
  /** Reflected: __Dati_Testo008*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo009*/ 
  IdInstallazione: string
}