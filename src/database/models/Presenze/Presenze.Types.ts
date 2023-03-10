export interface IPresenze {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo002*/ 
  IdLuogo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo004*/ 
  TxtLuogo: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  Zero: number;
  /** Reflected: __Dati_Numero003*/ 
  OreStraordinario: number;
  /** Reflected: __Dati_Numero004*/ 
  OreLavoro: number;
  /** Reflected: __Dati_Numero005*/ 
  OrePausa: number;
  /** Reflected: __Dati_Numero006*/ 
  OreFerie: number;
  /** Reflected: __Dati_Numero007*/ 
  OreMutua: number;
  /** Reflected: __Dati_Numero008*/ 
  OrePermesso: number;
  /** Reflected: __Dati_Numero009*/ 
  OreFestivo: number;
  /** Reflected: __Dati_Testo006*/ 
  IdPresenza: string;
  /** Reflected: __Dati_Data001*/ 
  DataInizio: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFine: Date;
  /** Reflected: __Dati_Ora001*/ 
  OraInizio: string;
  /** Reflected: __Dati_Ora002*/ 
  OraFine: string;
  /** Reflected: __Dati_Testo007*/ 
  IdDipendente: string;
  /** Reflected: __Dati_Testo008*/ 
  TxtOperatore: string;
  /** Reflected: __Dati_Testo009*/ 
  IdCausale: string;
  /** Reflected: __Dati_Testo010*/ 
  TxtCausale: string;
  /** Reflected: __Dati_Numero010*/ 
  FlagAggiorna: number;
  /** Reflected: __Dati_Numero011*/ 
  Anno: number;
  /** Reflected: __Dati_Numero012*/ 
  Mese: number;
  /** Reflected: __Dati_Numero013*/ 
  CostoGiornata: number;
  /** Reflected: __Dati_Testo011*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date
}