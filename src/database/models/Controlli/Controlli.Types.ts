export interface IControlli {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo002*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdFase: string;
  /** Reflected: __Dati_Testo004*/ 
  IdControlloOpzione: string;
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
  IdStrumento: string;
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
  /** Reflected: __Dati_Testo015*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Data001*/ 
  Data: Date;
  /** Reflected: __Dati_Ora001*/ 
  Ora: string;
  /** Reflected: __Dati_Testo016*/ 
  IdOperatore: string;
  /** Reflected: __Dati_Testo017*/ 
  TxtOperatore: string;
  /** Reflected: __Dati_Testo018*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo019*/ 
  IdStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Testo020*/ 
  Esito: string;
  /** Reflected: __Dati_Numero008*/ 
  FlagCalcoloMatematico: number;
  /** Reflected: __Dati_Numero009*/ 
  ValoreRaccolto: number;
  /** Reflected: __Dati_Numero010*/ 
  FlagEsitoPositivo: number;
  /** Reflected: __Dati_Testo021*/ 
  TxtArticolo: string;
  /** Reflected: __Dati_Testo022*/ 
  TxtFase: string;
  /** Reflected: __Dati_Testo023*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Testo024*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Testo025*/ 
  TxtStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Testo026*/ 
  IdControlloFaseProduzione: string;
  /** Reflected: __Dati_Testo027*/ 
  IdControlloArticolo: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOra: Date;
  /** Reflected: __Dati_Numero011*/ 
  FlagAperto: number;
  /** Reflected: __Dati_Testo028*/ 
  IdControlloRegistrazione: string;
  /** Reflected: __Dati_Testo029*/ 
  CodiceTipoControllo: string;
  /** Reflected: __Dati_Testo030*/ 
  CodiceTipoStrumento: string;
  /** Reflected: __Dati_Testo031*/ 
  IdDispositivoRaccoltaDati: string;
  /** Reflected: __Dati_Testo032*/ 
  IdTipoTurno: string;
  /** Reflected: __Dati_Testo033*/ 
  TxtTipoTurno: string;
  /** Reflected: __Dati_Testo034*/ 
  IdTipoFase: string;
  /** Reflected: __Dati_Testo035*/ 
  IdAccountCliente: string;
  /** Reflected: __Dati_Testo036*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo037*/ 
  IdTipoStrumento: string;
  /** Reflected: __Dati_Testo038*/ 
  IdTipoControllo: string;
  /** Reflected: __Dati_Testo039*/ 
  CodiceFase: string;
  /** Reflected: __Dati_Testo040*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero012*/ 
  NumeroControlliFatti: number;
  /** Reflected: __Dati_Testo041*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo042*/ 
  TxtTurnoData: string;
  /** Reflected: __Dati_Testo043*/ 
  CodiceTipoTurno: string;
  /** Reflected: __Dati_Testo044*/ 
  CodiceArticolo: string;
  /** Reflected: __Dati_Testo045*/ 
  CodiceCiclo: string;
  /** Reflected: __Dati_Testo046*/ 
  CodiceDisegno: string;
  /** Reflected: __Dati_Testo047*/ 
  CodiceFaseProduzione: string;
  /** Reflected: __Dati_Testo048*/ 
  CodiceLottoProduzione: string;
  /** Reflected: __Dati_Testo049*/ 
  CodiceRigaOrdine: string;
  /** Reflected: __Dati_Testo050*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Testo051*/ 
  CodiceTxtTipoControlloAutomatico: string;
  /** Reflected: __Dati_Testo052*/ 
  TxtCiclo: string;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraRevisione: Date;
  /** Reflected: __Dati_Testo053*/ 
  TxtUtenteRevisione: string;
  /** Reflected: __Dati_Testo054*/ 
  NotaRevisione: string;
  /** Reflected: __Dati_Testo055*/ 
  NoteControllo: string;
  /** Reflected: __Dati_Testo056*/ 
  IdTipoPianoCampionamento: string;
  /** Reflected: __Dati_Testo057*/ 
  TxtTipoPianoCampionamento: string;
  /** Reflected: __Dati_Testo058*/ 
  CodiceTxtStrumentoNumeroSerie: string;
  /** Reflected: __Dati_Data002*/ 
  DataRevisionata: Date;
  /** Reflected: __Dati_Ora002*/ 
  OraRevisionata: string;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraRevisionata: Date;
  /** Reflected: __Dati_Testo059*/ 
  FlagSelezione: string;
  /** Reflected: __Dati_Numero013*/ 
  Zero: number;
  /** Reflected: __Dati_Numero014*/ 
  Anno: number;
  /** Reflected: __Dati_Testo060*/ 
  AnnoMese: string;
  /** Reflected: __Dati_Testo061*/ 
  AnnoSettimana: string;
  /** Reflected: __Dati_Testo062*/ 
  RevisioneArticolo: string;
  /** Reflected: __Dati_Testo063*/ 
  RevisioneDisegno: string;
  /** Reflected: __Dati_Testo064*/ 
  CodiceTipoNormativa: string;
  /** Reflected: __Dati_Testo065*/ 
  CodiceTxtTipoStrumentoAutomatico: string;
  /** Reflected: __Dati_Testo066*/ 
  CodiceTxtTipoNormativaAutomatico: string;
  /** Reflected: __Dati_Testo067*/ 
  IdRegistrazioneRisorsa: string;
  /** Reflected: __Dati_Testo068*/ 
  CodiceStrumento: string;
  /** Reflected: __Dati_Testo069*/ 
  NumeroSerieStrumento: string;
  /** Reflected: __Dati_Numero015*/ 
  QtRegistrazioneAlControllo: number;
  /** Reflected: __Dati_Numero016*/ 
  GiornoSettimana: number;
  /** Reflected: __Dati_Numero017*/ 
  Mese: number;
  /** Reflected: __Dati_Numero018*/ 
  Settimana: number;
  /** Reflected: __Dati_Testo070*/ 
  IdOpzioneProd: string;
  /** Reflected: __Dati_Testo071*/ 
  IdTipoResponsabile: string;
  /** Reflected: __Dati_Testo072*/ 
  IdTipoNormativa: string;
  /** Reflected: __Dati_Testo073*/ 
  TxtTipoNormativa: string;
  /** Reflected: __Dati_Testo074*/ 
  IdDocumentoCollegato: string;
  /** Reflected: __Dati_Numero019*/ 
  CUQ_T: number;
  /** Reflected: __Dati_Numero020*/ 
  CUQ_T_UmOpzione: number;
  /** Reflected: __Dati_Numero021*/ 
  ValoreRevisionato: number;
  /** Reflected: __Dati_Numero022*/ 
  FlagFrequenzaStandard: number;
  /** Reflected: __Dati_Numero023*/ 
  FlagFrequenzaPianiCampionamento: number;
  /** Reflected: __Dati_Testo075*/ 
  Gruppo: string;
  /** Reflected: __Dati_Testo076*/ 
  CodiceTxtArticoloAutomatico: string;
  /** Reflected: __Dati_Testo077*/ 
  CodiceTxtDisegnoArticoloAutomatico: string;
  /** Reflected: __Dati_Testo078*/ 
  CodiceTxtFaseAutomatico: string;
  /** Reflected: __Dati_Testo079*/ 
  CodiceTxtFaseRisorsaAutomatico: string;
  /** Reflected: __Dati_Testo080*/ 
  CodiceTxtRisorsaAutomatico: string;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra005*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo081*/ 
  CodiceTipoResponsabile: string;
  /** Reflected: __Dati_Testo082*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo083*/ 
  IdNumeroSerieLottoProduzione: string;
  /** Reflected: __Dati_Testo084*/ 
  TxtTipoControlloPosizione: string;
  /** Reflected: __Dati_Testo085*/ 
  IdControllo: string;
  /** Reflected: __Dati_Testo086*/ 
  IdTipoContenitore: string;
  /** Reflected: __Dati_Testo087*/ 
  IdContenitore: string;
  /** Reflected: __Dati_Testo088*/ 
  TxtTipoContenitore: string;
  /** Reflected: __Dati_Testo089*/ 
  CodiceContenitore: string;
  /** Reflected: __Dati_Testo090*/ 
  CodiceTipoContenitore: string;
  /** Reflected: __Dati_Testo091*/ 
  CodiceTxtContenitoreNumeroSerie: string;
  /** Reflected: __Dati_Testo092*/ 
  CodiceTxtTipoContenitoreAutomatico: string;
  /** Reflected: __Dati_Testo093*/ 
  NumeroSerieContenitore: string
}