export interface IScarti {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Anno: number;
  /** Reflected: __Dati_Data001*/ 
  Data: Date;
  /** Reflected: __Dati_Numero002*/ 
  GiornoSettimana: number;
  /** Reflected: __Dati_Testo001*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo002*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdAccountCliente: string;
  /** Reflected: __Dati_Testo004*/ 
  IdFamigliaRisorsa: string;
  /** Reflected: __Dati_Testo005*/ 
  IdFase: string;
  /** Reflected: __Dati_Testo006*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo007*/ 
  IdTipoFase: string;
  /** Reflected: __Dati_Testo008*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo009*/ 
  IdOperatore: string;
  /** Reflected: __Dati_Testo010*/ 
  IdOpzioneProd: string;
  /** Reflected: __Dati_Testo011*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Testo012*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo013*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo014*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo015*/ 
  IdStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Numero003*/ 
  Mese: number;
  /** Reflected: __Dati_Testo016*/ 
  TxtTurnoData: string;
  /** Reflected: __Dati_Numero004*/ 
  Uno: number;
  /** Reflected: __Dati_Testo017*/ 
  IdTipoScarto: string;
  /** Reflected: __Dati_Testo018*/ 
  TxtTipoScartoProduzione: string;
  /** Reflected: __Dati_Numero005*/ 
  QtScarto: number;
  /** Reflected: __Dati_Ora001*/ 
  Ora: string;
  /** Reflected: __Dati_Numero006*/ 
  FlagPrePost: number;
  /** Reflected: __Dati_Testo019*/ 
  TxtOperatore: string;
  /** Reflected: __Dati_Testo020*/ 
  TxtArticolo: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtFase: string;
  /** Reflected: __Dati_Testo022*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Testo023*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Testo024*/ 
  TxtStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Testo025*/ 
  IdScarto: string;
  /** Reflected: __Dati_Testo026*/ 
  AnnoMese: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOra: Date;
  /** Reflected: __Dati_Numero007*/ 
  FlagAperto: number;
  /** Reflected: __Dati_Testo027*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo028*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo029*/ 
  TipologiaScartoProduzione: string;
  /** Reflected: __Dati_Testo030*/ 
  CodiceTipoScartoProduzione: string;
  /** Reflected: __Dati_Numero008*/ 
  FlagScartoMateriale: number;
  /** Reflected: __Dati_Testo031*/ 
  CodiceFase: string;
  /** Reflected: __Dati_Testo032*/ 
  CodiceDisegno: string;
  /** Reflected: __Dati_Numero009*/ 
  FlagRottamato: number;
  /** Reflected: __Dati_Testo033*/ 
  CodiceArticolo: string;
  /** Reflected: __Dati_Testo034*/ 
  CodiceCiclo: string;
  /** Reflected: __Dati_Testo035*/ 
  CodiceFaseProduzione: string;
  /** Reflected: __Dati_Testo036*/ 
  CodiceLotto: string;
  /** Reflected: __Dati_Testo037*/ 
  CodiceRigaOrdine: string;
  /** Reflected: __Dati_Testo038*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Testo039*/ 
  TxtCiclo: string;
  /** Reflected: __Dati_Testo040*/ 
  CodiceTipoTurno: string;
  /** Reflected: __Dati_Testo041*/ 
  IdLottoProduzioneRilavorazione: string;
  /** Reflected: __Dati_Testo042*/ 
  CodiceTxtRisorsaAutomatico: string;
  /** Reflected: __Dati_Testo043*/ 
  IdRegistrazioneFaseProduzione_Tutti: string;
  /** Reflected: __Dati_Testo044*/ 
  AnnoSettimana: string;
  /** Reflected: __Dati_Testo045*/ 
  TxtTipoTurno: string;
  /** Reflected: __Dati_Testo046*/ 
  FlagSelezione: string;
  /** Reflected: __Dati_Testo047*/ 
  IdDispositivoRaccoltaDati: string;
  /** Reflected: __Dati_Testo048*/ 
  IdDocumentoCollegato: string;
  /** Reflected: __Dati_Testo049*/ 
  IdTipoTurno: string;
  /** Reflected: __Dati_Numero010*/ 
  Zero: number;
  /** Reflected: __Dati_Testo050*/ 
  IdRegistrazioneRisorsa: string;
  /** Reflected: __Dati_Testo051*/ 
  IdFaseProduzioneCompetenza: string;
  /** Reflected: __Dati_Testo052*/ 
  IdRegistrazioneFaseProduzioneCompetenza: string;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo053*/ 
  CodiceTxtArticoloAutomatico: string;
  /** Reflected: __Dati_Testo054*/ 
  CodiceTxtDisegnoArticoloAutomatico: string;
  /** Reflected: __Dati_Testo055*/ 
  CodiceTxtFaseAutomatico: string;
  /** Reflected: __Dati_Testo056*/ 
  CodiceTxtFaseRisorsaAutomatico: string;
  /** Reflected: __Dati_Testo057*/ 
  CodiceTxtTipoScartoProduzioneAutomatico: string;
  /** Reflected: __Dati_Testo058*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo059*/ 
  IdNumeroSerieLottoProduzione: string
}