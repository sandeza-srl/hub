export interface IRicaviSpesePeriodo {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdRicavoSpesaPeriodo: string;
  /** Reflected: __Dati_Numero002*/ 
  AnnoFineCompetenza: number;
  /** Reflected: __Dati_Data001*/ 
  DataFineCompetenza: Date;
  /** Reflected: __Dati_Numero003*/ 
  MeseFineCompetenza: number;
  /** Reflected: __Dati_Numero004*/ 
  SettimanaFineCompetenza: number;
  /** Reflected: __Dati_Testo002*/ 
  IdAccountEmittente: string;
  /** Reflected: __Dati_Testo003*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Numero005*/ 
  VImponibile: number;
  /** Reflected: __Dati_Numero006*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero007*/ 
  VIva: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagIn: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagOut: number;
  /** Reflected: __Dati_Testo004*/ 
  IdTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo006*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo007*/ 
  TxtFattore: string;
  /** Reflected: __Dati_Data002*/ 
  DataInizioCompetenza: Date;
  /** Reflected: __Dati_Numero010*/ 
  VIvaSegno: number;
  /** Reflected: __Dati_Testo008*/ 
  IdAccountTutti: string;
  /** Reflected: __Dati_Numero011*/ 
  VImponibileSegno: number;
  /** Reflected: __Dati_Testo009*/ 
  ClasseTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo010*/ 
  AnnoMeseFineCompetenza: string;
  /** Reflected: __Dati_Numero012*/ 
  AnnoInizioCompetenza: number;
  /** Reflected: __Dati_Testo011*/ 
  AnnoMeseInizioCompetenza: string;
  /** Reflected: __Dati_Numero013*/ 
  MeseInizioCompetenza: number;
  /** Reflected: __Dati_Numero014*/ 
  SettimanaInizioCompetenza: number;
  /** Reflected: __Dati_Testo012*/ 
  SottoClasseTipoRicavoSpesa: string;
  /** Reflected: __Dati_Numero015*/ 
  VEntrataTotale: number;
  /** Reflected: __Dati_Numero016*/ 
  VUscitaTotale: number;
  /** Reflected: __Dati_Numero017*/ 
  VEntrataImponibile: number;
  /** Reflected: __Dati_Numero018*/ 
  VUscitaImponibile: number;
  /** Reflected: __Dati_Numero019*/ 
  VTotaleSegno: number;
  /** Reflected: __Dati_Testo013*/ 
  CodiceTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo014*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Testo015*/ 
  CodiceDocContabile: string;
  /** Reflected: __Dati_Testo016*/ 
  CodiceEsterno: string;
  /** Reflected: __Dati_Testo017*/ 
  CodiceVisualizza: string;
  /** Reflected: __Dati_Data003*/ 
  DataDocContabile: Date;
  /** Reflected: __Dati_Data004*/ 
  DataRegistrazioneDocContabile: Date;
  /** Reflected: __Dati_Numero020*/ 
  FlagProvvisorio: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagNonConteggiare: number;
  /** Reflected: __Dati_Numero022*/ 
  FlagFisco: number;
  /** Reflected: __Dati_Testo018*/ 
  IdPeriodoContabile: string;
  /** Reflected: __Dati_Testo019*/ 
  TxtPeriodoContabile: string;
  /** Reflected: __Dati_Numero023*/ 
  GiorniCompetenza_Numero: number;
  /** Reflected: __Dati_Numero024*/ 
  GiorniCompetenza_Imponibile: number;
  /** Reflected: __Dati_Numero025*/ 
  GiorniCompetenza_Iva: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero026*/ 
  Zero: number;
  /** Reflected: __Dati_Testo020*/ 
  IdAccountDocContabile: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtAccountDocContabile: string;
  /** Reflected: __Dati_Numero027*/ 
  FlagFisso: number;
  /** Reflected: __Dati_Numero028*/ 
  FlagVariabile: number;
  /** Reflected: __Dati_Testo022*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Numero029*/ 
  PercentualeIVA: number;
  /** Reflected: __Dati_Numero030*/ 
  PercentualeIVADetraibile: number;
  /** Reflected: __Dati_Numero031*/ 
  PercentualeIVAIndetraibile: number;
  /** Reflected: __Dati_Numero032*/ 
  VIvaDetraibile: number;
  /** Reflected: __Dati_Numero033*/ 
  VIvaIndetraibile: number;
  /** Reflected: __Dati_Numero034*/ 
  VImponibileDefinitivo: number;
  /** Reflected: __Dati_Numero035*/ 
  VImponibileDefinitivoSegno: number;
  /** Reflected: __Dati_Numero036*/ 
  GiorniCompetenza_IvaDetraibile: number;
  /** Reflected: __Dati_Numero037*/ 
  FlagReverseCharge: number;
  /** Reflected: __Dati_Numero038*/ 
  VImponibileReverseCharge: number;
  /** Reflected: __Dati_Testo023*/ 
  IdInstallazione: string
}