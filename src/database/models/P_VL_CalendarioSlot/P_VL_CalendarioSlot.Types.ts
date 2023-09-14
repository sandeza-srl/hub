export interface IP_VL_CalendarioSlot {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  AnnoMese: string;
  /** Reflected: __Dati_Testo002*/ 
  AnnoSettimana: string;
  /** Reflected: __Dati_Data001*/ 
  DataFine: Date;
  /** Reflected: __Dati_Data002*/ 
  DataInizio: Date;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraFine: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraInizio: Date;
  /** Reflected: __Dati_Numero001*/ 
  FlagAggiorna: number;
  /** Reflected: __Dati_Numero002*/ 
  GiornoSettimanaNumero: number;
  /** Reflected: __Dati_Testo003*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo004*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo005*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo006*/ 
  IdSettimanaStandard: string;
  /** Reflected: __Dati_Numero003*/ 
  NumeroSlot: number;
  /** Reflected: __Dati_Ora001*/ 
  OraFine: string;
  /** Reflected: __Dati_Ora002*/ 
  OraInizio: string;
  /** Reflected: __Dati_Numero004*/ 
  Uno: number;
  /** Reflected: __Dati_Numero005*/ 
  Zero: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagDaRimuovere: number;
  /** Reflected: __Dati_Testo007*/ 
  IdP_VL_CalendarioSlot: string
}