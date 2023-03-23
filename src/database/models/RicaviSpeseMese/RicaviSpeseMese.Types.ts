export interface IRicaviSpeseMese {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdRicavoSpesaMese: string;
  /** Reflected: __Dati_Testo002*/ 
  IdAccountEmittente: string;
  /** Reflected: __Dati_Testo003*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Numero002*/ 
  VImponibile: number;
  /** Reflected: __Dati_Numero003*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero004*/ 
  VIva: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagIn: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagOut: number;
  /** Reflected: __Dati_Testo004*/ 
  IdTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo006*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo007*/ 
  TxtFattore: string;
  /** Reflected: __Dati_Numero007*/ 
  VIvaSegno: number;
  /** Reflected: __Dati_Testo008*/ 
  IdAccountTutti: string;
  /** Reflected: __Dati_Numero008*/ 
  VImponibileSegno: number;
  /** Reflected: __Dati_Testo009*/ 
  ClasseTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo010*/ 
  SottoClasseTipoRicavoSpesa: string;
  /** Reflected: __Dati_Numero009*/ 
  VEntrataTotale: number;
  /** Reflected: __Dati_Numero010*/ 
  VUscitaTotale: number;
  /** Reflected: __Dati_Numero011*/ 
  VEntrataImponibile: number;
  /** Reflected: __Dati_Numero012*/ 
  VUscitaImponibile: number;
  /** Reflected: __Dati_Numero013*/ 
  VTotaleSegno: number;
  /** Reflected: __Dati_Testo011*/ 
  CodiceTipoRicavoSpesa: string;
  /** Reflected: __Dati_Testo012*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Numero014*/ 
  AnnoCompetenza: number;
  /** Reflected: __Dati_Numero015*/ 
  MeseCompetenza: number;
  /** Reflected: __Dati_Testo013*/ 
  AnnoMeseCompetenza: string;
  /** Reflected: __Dati_Testo014*/ 
  CodiceDocContabile: string;
  /** Reflected: __Dati_Testo015*/ 
  CodiceEsterno: string;
  /** Reflected: __Dati_Testo016*/ 
  CodiceVisualizza: string;
  /** Reflected: __Dati_Data001*/ 
  DataDocContabile: Date;
  /** Reflected: __Dati_Numero016*/ 
  FlagNonConteggiare: number;
  /** Reflected: __Dati_Data002*/ 
  DataRegistrazioneDocContabile: Date;
  /** Reflected: __Dati_Numero017*/ 
  FlagProvvisorio: number;
  /** Reflected: __Dati_Testo017*/ 
  IdRicavoSpesaPeriodo: string;
  /** Reflected: __Dati_Numero018*/ 
  FlagFisco: number;
  /** Reflected: __Dati_Testo018*/ 
  IdPeriodoContabile: string;
  /** Reflected: __Dati_Testo019*/ 
  TxtPeriodoContabile: string;
  /** Reflected: __Dati_Data003*/ 
  DataInizioMeseCompetenza: Date;
  /** Reflected: __Dati_Data004*/ 
  DataFineMeseCompetenza: Date;
  /** Reflected: __Dati_Numero019*/ 
  GiorniCompetenza: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero020*/ 
  Zero: number;
  /** Reflected: __Dati_Testo020*/ 
  IdAccountDocContabile: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtPeriodoMeseCompetenza: string;
  /** Reflected: __Dati_Testo022*/ 
  FlagResoconto: string;
  /** Reflected: __Dati_Testo023*/ 
  TxtAccountDocContabile: string;
  /** Reflected: __Dati_Numero021*/ 
  FlagFisso: number;
  /** Reflected: __Dati_Testo024*/ 
  FlagVariabile: string;
  /** Reflected: __Dati_Testo025*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Numero022*/ 
  PercentualeIVA: number;
  /** Reflected: __Dati_Numero023*/ 
  PercentualeIVADetraibile: number;
  /** Reflected: __Dati_Numero024*/ 
  PercentualeIVAIndetraibile: number;
  /** Reflected: __Dati_Numero025*/ 
  VIvaDetraibile: number;
  /** Reflected: __Dati_Numero026*/ 
  VIvaIndetraibile: number;
  /** Reflected: __Dati_Numero027*/ 
  VImponibileDefinitivo: number;
  /** Reflected: __Dati_Numero028*/ 
  VImponibileDefinitivoSegno: number;
  /** Reflected: __Dati_Numero029*/ 
  FlagReverseCharge: number;
  /** Reflected: __Dati_Numero030*/ 
  VImponibileReverseCharge: number;
  /** Reflected: __Dati_Testo026*/ 
  IdInstallazione: string
}