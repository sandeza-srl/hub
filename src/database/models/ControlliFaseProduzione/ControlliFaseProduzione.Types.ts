export interface IControlliFaseProduzione {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo002*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdOpzione: string;
  /** Reflected: __Dati_Testo004*/ 
  IdControlloArticolo: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtTipoControllo: string;
  /** Reflected: __Dati_Numero002*/ 
  ValoreNominale: number;
  /** Reflected: __Dati_Numero003*/ 
  TolleranzaPiu: number;
  /** Reflected: __Dati_Numero004*/ 
  TolleranzaMeno: number;
  /** Reflected: __Dati_Numero005*/ 
  FrequenzaControllo: number;
  /** Reflected: __Dati_Numero006*/ 
  Criticita: number;
  /** Reflected: __Dati_Testo006*/ 
  TxtTipoResponsabile: string;
  /** Reflected: __Dati_Testo007*/ 
  TxtTipoStrumento: string;
  /** Reflected: __Dati_Testo008*/ 
  IdTipoStrumento: string;
  /** Reflected: __Dati_Testo009*/ 
  UM: string;
  /** Reflected: __Dati_Testo010*/ 
  PosizioneControllo: string;
  /** Reflected: __Dati_Testo011*/ 
  UmOpzione: string;
  /** Reflected: __Dati_Numero007*/ 
  FrequenzaControlloOpzione: number;
  /** Reflected: __Dati_Testo012*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo013*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo014*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Numero008*/ 
  NumeroControlliTotale: number;
  /** Reflected: __Dati_Numero009*/ 
  NumeroControlliFatti: number;
  /** Reflected: __Dati_Numero010*/ 
  NumeroControlliRestanti: number;
  /** Reflected: __Dati_Numero011*/ 
  FlagCalcoloMatematico: number;
  /** Reflected: __Dati_Testo015*/ 
  IdControlloOpzione: string;
  /** Reflected: __Dati_Testo016*/ 
  IdControlloFaseProduzione: string;
  /** Reflected: __Dati_Numero012*/ 
  FlagSelezione: number;
  /** Reflected: __Dati_Testo017*/ 
  CodiceTipoControllo: string;
  /** Reflected: __Dati_Testo018*/ 
  IdTipoControllo: string;
  /** Reflected: __Dati_Testo019*/ 
  CodiceTipoStrumento: string;
  /** Reflected: __Dati_Testo020*/ 
  IdTipoResponsabile: string;
  /** Reflected: __Dati_Testo021*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo022*/ 
  CodiceTipoNormativa: string;
  /** Reflected: __Dati_Testo023*/ 
  CodiceTxtTipoControlloAutomatico: string;
  /** Reflected: __Dati_Testo024*/ 
  CodiceTxtTipoNormativaAutomatico: string;
  /** Reflected: __Dati_Numero013*/ 
  FlagAggiornaDaControlloOpzione: number;
  /** Reflected: __Dati_Numero014*/ 
  FlagControlloMacchina: number;
  /** Reflected: __Dati_Testo025*/ 
  IdTipoNormativa: string;
  /** Reflected: __Dati_Numero015*/ 
  LimiteInferiore: number;
  /** Reflected: __Dati_Numero016*/ 
  LimiteSuperiore: number;
  /** Reflected: __Dati_Testo026*/ 
  Note: string;
  /** Reflected: __Dati_Numero017*/ 
  QuotaX: number;
  /** Reflected: __Dati_Numero018*/ 
  QuotaY: number;
  /** Reflected: __Dati_Numero019*/ 
  QuotaZ: number;
  /** Reflected: __Dati_Testo027*/ 
  TxtTipoNormativa: string;
  /** Reflected: __Dati_Numero020*/ 
  FlagAggiornaCalcoli: number;
  /** Reflected: __Dati_Testo028*/ 
  Gruppo: string;
  /** Reflected: __Dati_Testo029*/ 
  IdDocumentoPorzioneDisegno: string;
  /** Reflected: __Dati_Testo030*/ 
  IdTipoPianoCampionamento: string;
  /** Reflected: __Dati_Testo031*/ 
  TxtTipoPianoCampionamento: string;
  /** Reflected: __Dati_Numero021*/ 
  Zero: number;
  /** Reflected: __Dati_Testo032*/ 
  CodiceTxtTipoStrumentoAutomatico: string;
  /** Reflected: __Dati_Numero022*/ 
  CUQ_T_UmOpzione: number;
  /** Reflected: __Dati_Numero023*/ 
  CUQ_T: number;
  /** Reflected: __Dati_Numero024*/ 
  Ordine: number;
  /** Reflected: __Dati_Numero025*/ 
  FlagRegistraMatricola: number;
  /** Reflected: __Dati_Numero026*/ 
  FlagFrequenzaStandard: number;
  /** Reflected: __Dati_Numero027*/ 
  FlagFrequenzaPianiCampionamento: number;
  /** Reflected: __Dati_Numero028*/ 
  FlagTipoNumeroControlli: number;
  /** Reflected: __Dati_Numero029*/ 
  QDaProdurre_Opz: number;
  /** Reflected: __Dati_Testo033*/ 
  CodiceTipoResponsabile: string;
  /** Reflected: __Dati_Numero030*/ 
  FlagResponsabileProduzione: number;
  /** Reflected: __Dati_Testo034*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo035*/ 
  IdDocumentoNormativa: string;
  /** Reflected: __Dati_Numero031*/ 
  FlagCreatoAPosteriori: number
}