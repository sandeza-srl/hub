export interface IAliquote {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  PercentualeIva: number;
  /** Reflected: __Dati_Testo001*/ 
  TxtAliquota: string;
  /** Reflected: __Dati_Testo002*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Numero003*/ 
  FlagImponibile: number;
  /** Reflected: __Dati_Testo003*/ 
  FlagImponibileVedi: string;
  /** Reflected: __Dati_Testo004*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo005*/ 
  CodiceAliquota: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_Numero004*/ 
  Zero: number;
  /** Reflected: __Dati_Numero005*/ 
  PercentualeIVADetraibile: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagAliquotaPrincipale_DASOSTITUIRE: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagAliquotaPrincipale: number;
  /** Reflected: __Dati_Testo006*/ 
  IdCodificaNaturaEsenzione: string;
  /** Reflected: __Dati_Testo007*/ 
  CodiceCodifica: string;
  /** Reflected: __Dati_Testo008*/ 
  IdAliquotaOrigine: string;
  /** Reflected: __Dati_Testo009*/ 
  CodiceRegistroIVA: string;
  /** Reflected: __Dati_Numero008*/ 
  FlagReverseCharge: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagMarcaBolloRichiesta: number;
  /** Reflected: __Dati_Numero010*/ 
  ValoreMarcaBollo: number;
  /** Reflected: __Dati_Testo010*/ 
  IdItemBolloIN: string;
  /** Reflected: __Dati_Testo011*/ 
  IdItemBolloOUT: string;
  /** Reflected: __Dati_Numero011*/ 
  FlagDichiarazioneIntento: number;
  /** Reflected: __Dati_Testo012*/ 
  IdInstallazione: string
}