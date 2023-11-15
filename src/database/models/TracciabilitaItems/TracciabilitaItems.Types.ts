export interface ITracciabilitaItems {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo002*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo003*/ 
  IdItem: string;
  /** Reflected: __Dati_Testo004*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Numero001*/ 
  QuantitaResidua: number;
  /** Reflected: __Dati_Numero002*/ 
  Uno: number;
  /** Reflected: __Dati_Numero003*/ 
  Zero: number;
  /** Reflected: __Dati_Testo005*/ 
  Tracciabilita_Taglia: string;
  /** Reflected: __Dati_Testo006*/ 
  Tracciabilita_Colore: string;
  /** Reflected: __Dati_Testo007*/ 
  Tracciabilita_InfoExtra: string;
  /** Reflected: __Dati_Testo008*/ 
  IdScarto: string;
  /** Reflected: __Dati_Numero004*/ 
  FlagSerialeUtilizzato: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagTracciabilitaAutomatica: number;
  /** Reflected: __Dati_Testo009*/ 
  Tracciabilita_CodiceLotto: string;
  /** Reflected: __Dati_Data001*/ 
  Tracciabilita_DataScadenza: Date;
  /** Reflected: __Dati_Testo010*/ 
  Tracciabilita_NumeroSerie: string;
  /** Reflected: __Dati_Data002*/ 
  DataMinEntrata: Date;
  /** Reflected: __Dati_Data003*/ 
  DataMaxUscita: Date;
  /** Reflected: __Dati_Numero006*/ 
  QuantitaEntrata: number;
  /** Reflected: __Dati_Numero007*/ 
  AnnoMeseEntrata: number;
  /** Reflected: __Dati_Numero008*/ 
  AnnoSettimanaEntrata: number;
  /** Reflected: __Dati_Numero009*/ 
  AnnoMeseScadenza: number;
  /** Reflected: __Dati_Numero010*/ 
  AnnoSettimanaScadenza: number;
  /** Reflected: __Dati_Numero011*/ 
  AnnoMeseUscita: number;
  /** Reflected: __Dati_Numero012*/ 
  AnnoSettimanaUscita: number;
  /** Reflected: __Dati_Numero013*/ 
  GiorniPermanenza: number;
  /** Reflected: __Dati_Data004*/ 
  DataCorrente: Date;
  /** Reflected: __Dati_Numero014*/ 
  FlagScaduto: number;
  /** Reflected: __Dati_Testo011*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo012*/ 
  IdTracciabilitaItem: string;
  /** Reflected: __Dati_Numero015*/ 
  QuantitaUscita: number;
  /** Reflected: __Dati_Numero016*/ 
  FlagAggiornaDaMovimenti: number;
  /** Reflected: __Dati_Testo013*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Testo014*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo015*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Numero017*/ 
  FlagEsaurito: number;
  /** Reflected: __Dati_Testo016*/ 
  Tracciabilita_TxtAutomatico: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo017*/ 
  Tracciabilita_CodiceAutomatico: string;
  /** Reflected: __Dati_Testo018*/ 
  StringaControllo: string;
  /** Reflected: __Dati_Numero018*/ 
  Progressivo: number;
  /** Reflected: __Dati_Testo019*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo020*/ 
  IdDocumentoTracciabilita: string;
  /** Reflected: __Dati_Testo021*/ 
  Tracciabilita_CodiceTxtAutomatico: string;
  /** Reflected: __Dati_Numero019*/ 
  FlagAggiornaContenutiDaItems: number;
  /** Reflected: __Dati_Testo022*/ 
  IdDocumentoRiferimento: string
}