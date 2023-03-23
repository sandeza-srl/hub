export interface IValorizzazioniMagazzino {
  _id: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero001*/ 
  FlagValorizzaCostoMedioPonderato: number;
  /** Reflected: __Dati_Numero002*/ 
  FlagValorizzaFifo: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagValorizzaLifo: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagValorizzaUltimoCosto: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagValorizzaWipConsuntivo: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagValorizzaWipPreventivo: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagWipQuantita: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagWipTotale: number;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero009*/ 
  Uno: number;
  /** Reflected: __Dati_Numero010*/ 
  Zero: number;
  /** Reflected: __Dati_Testo002*/ 
  IdValorizzazioneMagazzino: string;
  /** Reflected: __Dati_Data001*/ 
  DataValorizzazione: Date;
  /** Reflected: __Dati_Numero011*/ 
  VGiacenza: number;
  /** Reflected: __Dati_Numero012*/ 
  VWip: number;
  /** Reflected: __Dati_Numero013*/ 
  VGiacenza_Cespiti: number;
  /** Reflected: __Dati_Numero014*/ 
  VGiacenza_MateriaPrima: number;
  /** Reflected: __Dati_Numero015*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero016*/ 
  VGiacenza_Semilavorati: number;
  /** Reflected: __Dati_Numero017*/ 
  VGiacenza_ProdottiFiniti: number;
  /** Reflected: __Dati_Numero018*/ 
  AnnoMeseValorizzazione: number;
  /** Reflected: __Dati_Numero019*/ 
  AnnoSettimanaValorizzazione: number;
  /** Reflected: __Dati_Numero020*/ 
  AnnoValorizzazione: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagValorizzazioneConsolidata: number;
  /** Reflected: __Dati_Testo003*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Testo004*/ 
  IdUtenteCreazione: string;
  /** Reflected: __Dati_Testo005*/ 
  IdUtenteModifica: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtUtenteModifica: string;
  /** Reflected: __Dati_Numero022*/ 
  PercVGiacenza: number;
  /** Reflected: __Dati_Numero023*/ 
  PercVGiacenza_Cespiti: number;
  /** Reflected: __Dati_Numero024*/ 
  PercVGiacenza_MateriaPrima: number;
  /** Reflected: __Dati_Numero025*/ 
  PercVGiacenza_ProdottiFiniti: number;
  /** Reflected: __Dati_Numero026*/ 
  PercVGiacenza_Semilavorati: number;
  /** Reflected: __Dati_Numero027*/ 
  PercVWip: number;
  /** Reflected: __Dati_Numero028*/ 
  FlagAggiornaTotali: number;
  /** Reflected: __Dati_Testo007*/ 
  IdInstallazione: string
}