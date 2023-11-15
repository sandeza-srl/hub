export interface ITipiListino {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdTipoListino: string;
  /** Reflected: __Dati_Testo002*/ 
  TxtTipoListino: string;
  /** Reflected: __Dati_Numero002*/ 
  FlagVendita: number;
  /** Reflected: __Dati_Numero003*/ 
  Priorita: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagListinoPrincipale: number;
  /** Reflected: __Dati_Numero005*/ 
  VariazionePercentuale: number;
  /** Reflected: __Dati_Numero006*/ 
  VariazioneUnitaria: number;
  /** Reflected: __Dati_Testo003*/ 
  IdTipoListinoDiRiferimento: string;
  /** Reflected: __Dati_Testo004*/ 
  TxtTipoListinoDiRiferimento: string;
  /** Reflected: __Dati_Testo005*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo006*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Data001*/ 
  DataInizioValidita: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFineValidita: Date;
  /** Reflected: __Dati_Numero007*/ 
  FlagValidoSempre: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagValiditaData: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagValiditaFamiglia: number;
  /** Reflected: __Dati_Numero010*/ 
  FlagValiditaSottoFamiglia: number;
  /** Reflected: __Dati_Numero011*/ 
  FlagValoreRicarico: number;
  /** Reflected: __Dati_Numero012*/ 
  FlagValoreFisso: number;
  /** Reflected: __Dati_Numero013*/ 
  PercentualeRicarico: number;
  /** Reflected: __Dati_Testo007*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo008*/ 
  IdTipoListinoOrigine: string;
  /** Reflected: __Dati_Numero014*/ 
  FlagDaEsportare: number;
  /** Reflected: __Dati_Testo009*/ 
  IdFamigliaItemOrigine: string;
  /** Reflected: __Dati_Testo010*/ 
  IdSottoFamigliaItemOrigine: string;
  /** Reflected: __Dati_Numero015*/ 
  FlagListinoIvato: number;
  /** Reflected: __Dati_Numero016*/ 
  QuantitaMinima: number;
  /** Reflected: __Dati_Numero017*/ 
  Zero: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo011*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo012*/ 
  IdTipologiaAnagrafica: string;
  /** Reflected: __Dati_Numero018*/ 
  FlagCondizioniGlobali: number;
  /** Reflected: __Dati_Testo013*/ 
  CodiceTipoListino: string;
  /** Reflected: __Dati_Numero021*/ 
  VariazionePercentuale_Sconto1: number;
  /** Reflected: __Dati_Numero022*/ 
  VariazionePercentuale_Sconto2: number;
  /** Reflected: __Dati_Numero023*/ 
  VariazionePercentuale_Sconto3: number;
  /** Reflected: __Dati_Testo014*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Testo015*/ 
  IdTipoDocContabile: string;
  /** Reflected: __Dati_Testo016*/ 
  IdTipoOfferta: string;
  /** Reflected: __Dati_Numero024*/ 
  ValoreMinimo: number;
  /** Reflected: __Dati_Numero025*/ 
  FlagAnnullaVariazioni: number;
  /** Reflected: __Dati_Numero026*/ 
  VariazionePercentuale_PrezzoIniziale: number;
  /** Reflected: __Dati_Numero027*/ 
  VariazioneUnitaria_PrezzoIniziale: number;
  /** Reflected: __Dati_Testo017*/ 
  IdAccountProduttore: string;
  /** Reflected: __Dati_Numero028*/ 
  VariazionePercentuale_PrezzoIniziale_Sconto1: number;
  /** Reflected: __Dati_Numero029*/ 
  VariazionePercentuale_PrezzoIniziale_Sconto2: number;
  /** Reflected: __Dati_Numero030*/ 
  VariazionePercentuale_PrezzoIniziale_Sconto3: number;
  /** Reflected: __Dati_Numero031*/ 
  VariazioneUnitaria_PrezzoIniziale_Sconto1: number;
  /** Reflected: __Dati_Numero032*/ 
  VariazioneUnitaria_PrezzoIniziale_Sconto2: number;
  /** Reflected: __Dati_Numero033*/ 
  VariazioneUnitaria_PrezzoIniziale_Sconto3: number;
  /** Reflected: __Dati_Numero034*/ 
  FlagAggiornaContenutiDaItems: number;
  /** Reflected: __Dati_Testo018*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo019*/ 
  IdItem: string;
  /** Reflected: __Dati_Numero035*/ 
  FlagWeb: number;
  /** Reflected: __Dati_Numero036*/ 
  FlagMobile: number;
  /** Reflected: __Dati_Numero037*/ 
  FlagPrezzoFissoComeValoreDiPartenza: number
}