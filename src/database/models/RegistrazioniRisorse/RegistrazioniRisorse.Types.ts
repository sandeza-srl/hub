export interface IRegistrazioniRisorse {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  FlagSelezione: number;
  /** Reflected: __Dati_Testo001*/ 
  IdFamigliaRisorsa: string;
  /** Reflected: __Dati_Testo002*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo003*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Numero002*/ 
  Uno: number;
  /** Reflected: __Dati_Data001*/ 
  DataInizio: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFine: Date;
  /** Reflected: __Dati_Ora001*/ 
  TA_R: string;
  /** Reflected: __Dati_Ora002*/ 
  TD_R: string;
  /** Reflected: __Dati_Ora003*/ 
  TF_R: string;
  /** Reflected: __Dati_Ora004*/ 
  TT_R: string;
  /** Reflected: __Dati_Testo004*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo005*/ 
  IdStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Numero003*/ 
  NumeroAddetti_R: number;
  /** Reflected: __Dati_Numero004*/ 
  Anno: number;
  /** Reflected: __Dati_Numero005*/ 
  GiornoSettimana: number;
  /** Reflected: __Dati_Testo006*/ 
  IdOperatoreProduzione: string;
  /** Reflected: __Dati_Numero006*/ 
  Mese: number;
  /** Reflected: __Dati_Testo007*/ 
  TxtTurnoData: string;
  /** Reflected: __Dati_Testo008*/ 
  TxtOperatoreProduzione: string;
  /** Reflected: __Dati_Ora005*/ 
  OraFine: string;
  /** Reflected: __Dati_Ora006*/ 
  OraInizio: string;
  /** Reflected: __Dati_Ora007*/ 
  TT_R_ConPausa: string;
  /** Reflected: __Dati_Ora008*/ 
  TPausa: string;
  /** Reflected: __Dati_Testo009*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Testo010*/ 
  TxtStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Testo011*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraFine: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraInizio: Date;
  /** Reflected: __Dati_Numero007*/ 
  FlagStatoRegistrazione: number;
  /** Reflected: __Dati_Testo012*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo013*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Numero008*/ 
  FlagRegistrazioneAperta: number;
  /** Reflected: __Dati_Testo014*/ 
  TxtStatoRegistrazione: string;
  /** Reflected: __Dati_Testo015*/ 
  AnnoMese: string;
  /** Reflected: __Dati_Testo016*/ 
  IdTipoTurno: string;
  /** Reflected: __Dati_Testo017*/ 
  CodiceTipoTurno: string;
  /** Reflected: __Dati_Testo018*/ 
  IdRegistrazioneRisorsa: string;
  /** Reflected: __Dati_Ora009*/ 
  TEffettivoLavoroMacchina: string;
  /** Reflected: __Dati_Numero009*/ 
  DistrTempi_SommaSecondiTeoriciQT_R: number;
  /** Reflected: __Dati_Testo019*/ 
  AnnoSettimana: string;
  /** Reflected: __Dati_Testo020*/ 
  CodiceTxtRisorsaAutomatico: string;
  /** Reflected: __Dati_Numero010*/ 
  FlagAggiornaDaCorrelate: number;
  /** Reflected: __Dati_Numero011*/ 
  FlagAggiornaTotali: number;
  /** Reflected: __Dati_Ora010*/ 
  TP_R: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtTipoTurno: string;
  /** Reflected: __Dati_Numero012*/ 
  Zero: number;
  /** Reflected: __Dati_Numero013*/ 
  FlagLavInternaPianificabile: number;
  /** Reflected: __Dati_Numero014*/ 
  FlagLavInternaNonPianificabile: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagLavEsterna: number;
  /** Reflected: __Dati_Numero016*/ 
  FlagImballoParziale: number;
  /** Reflected: __Dati_Numero017*/ 
  FlagImballoFinale: number;
  /** Reflected: __Dati_Numero018*/ 
  NumeroRegistrazioniFasiProduzione: number;
  /** Reflected: __Dati_Testo022*/ 
  IdDispositivoRaccoltaDati: string;
  /** Reflected: __Dati_Testo023*/ 
  CodiceContenitore: string;
  /** Reflected: __Dati_Testo024*/ 
  Contenitore_iBeacon_Id: string;
  /** Reflected: __Dati_Testo025*/ 
  Contenitore_iBeacon_Major: string;
  /** Reflected: __Dati_Testo026*/ 
  Contenitore_iBeacon_Minor: string;
  /** Reflected: __Dati_Ora011*/ 
  HAttraversamentoLinea_T: string;
  /** Reflected: __Dati_Ora012*/ 
  DistrTempi_SommaTA_T: string;
  /** Reflected: __Dati_Ora013*/ 
  DistrTempi_SommaTD_T: string;
  /** Reflected: __Dati_Testo027*/ 
  IdContenitore: string;
  /** Reflected: __Dati_Testo028*/ 
  IdTipoContenitore: string;
  /** Reflected: __Dati_Numero019*/ 
  PercTEffettivoLavoroMacchina: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagAggiornaDaMacchine: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagModificaTempi: number;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero022*/ 
  FlagRegistrazioneNested: number;
  /** Reflected: __Dati_Testo029*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo030*/ 
  IdNumeroSerieLottoProduzione_Tutti: string;
  /** Reflected: __Dati_Numero023*/ 
  FlagAggiornaContenutiDaRisorsa: number
}