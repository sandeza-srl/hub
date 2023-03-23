export interface IMovimenti {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  ClassePosizioneMagazzino: string;
  /** Reflected: __Dati_Testo002*/ 
  CodiceRiferimentoFornitore: string;
  /** Reflected: __Dati_Data001*/ 
  DataEsecuzione: Date;
  /** Reflected: __Dati_Testo003*/ 
  CodiceDocOperativo: string;
  /** Reflected: __Dati_Testo004*/ 
  IdAccountFornitore: string;
  /** Reflected: __Dati_Testo005*/ 
  IdItem: string;
  /** Reflected: __Dati_Testo006*/ 
  IdPacco: string;
  /** Reflected: __Dati_Testo007*/ 
  IdPosizione: string;
  /** Reflected: __Dati_Testo008*/ 
  IdDocOperativo: string;
  /** Reflected: __Dati_Numero001*/ 
  QuantitaTemporanea: number;
  /** Reflected: __Dati_Testo009*/ 
  FattoreCalcolo: string;
  /** Reflected: __Dati_Testo010*/ 
  TxtFattoreMovimento: string;
  /** Reflected: __Dati_Testo011*/ 
  IdMovimento: string;
  /** Reflected: __Dati_Testo012*/ 
  NoteCorrezione: string;
  /** Reflected: __Dati_Testo013*/ 
  IdTipoMagazzino: string;
  /** Reflected: __Dati_Testo014*/ 
  IdStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Numero002*/ 
  QuantitaEffettivaSegno: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagIN: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagOUT: number;
  /** Reflected: __Dati_Testo015*/ 
  UnitaMisura: string;
  /** Reflected: __Dati_Numero005*/ 
  AnnoMeseEsecuzione: number;
  /** Reflected: __Dati_Testo016*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo017*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo018*/ 
  IdRegistrazioneRisorsa: string;
  /** Reflected: __Dati_Testo019*/ 
  IdProgetto: string;
  /** Reflected: __Dati_Testo020*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Numero006*/ 
  Uno: number;
  /** Reflected: __Dati_Testo021*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo022*/ 
  TxtItem: string;
  /** Reflected: __Dati_Numero007*/ 
  FlagMovimentoEffettivo: number;
  /** Reflected: __Dati_Testo023*/ 
  CodicePacco: string;
  /** Reflected: __Dati_Numero008*/ 
  QuantitaEffettiva: number;
  /** Reflected: __Dati_Testo024*/ 
  TxtAccountFornitore: string;
  /** Reflected: __Dati_Testo025*/ 
  IdCollo: string;
  /** Reflected: __Dati_Testo026*/ 
  IdFornituraItem: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraEsecuzione: Date;
  /** Reflected: __Dati_Testo027*/ 
  Tracciabilita_NumeroSerie: string;
  /** Reflected: __Dati_Numero009*/ 
  VUnitario: number;
  /** Reflected: __Dati_Numero010*/ 
  VTotale: number;
  /** Reflected: __Dati_Testo028*/ 
  IdSedeDestinazione: string;
  /** Reflected: __Dati_Testo029*/ 
  TxtAccountOperatore: string;
  /** Reflected: __Dati_Testo030*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo031*/ 
  IdVoceProgetto: string;
  /** Reflected: __Dati_Numero011*/ 
  AnnoSettimanaEsecuzione: number;
  /** Reflected: __Dati_Testo032*/ 
  IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo033*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Data002*/ 
  DataRegistrazione: Date;
  /** Reflected: __Dati_Ora001*/ 
  OraEsecuzione: string;
  /** Reflected: __Dati_Ora002*/ 
  OraRegistrazione: string;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraRegistrazione: Date;
  /** Reflected: __Dati_Testo034*/ 
  CodiceTipoMagazzino: string;
  /** Reflected: __Dati_Testo035*/ 
  CodiceMagazzinoFisico: string;
  /** Reflected: __Dati_Testo036*/ 
  CodiceItem: string;
  /** Reflected: __Dati_Testo037*/ 
  CodicePosizione: string;
  /** Reflected: __Dati_Testo038*/ 
  Tracciabilita_CodiceLotto: string;
  /** Reflected: __Dati_Data003*/ 
  Tracciabilita_DataScadenza: Date;
  /** Reflected: __Dati_Testo039*/ 
  TxtTipoMagazzino: string;
  /** Reflected: __Dati_Testo040*/ 
  TxtMagazzinoFisico: string;
  /** Reflected: __Dati_Testo041*/ 
  IdAssociazioneMovimento: string;
  /** Reflected: __Dati_Testo042*/ 
  IdVoceDocOperativo: string;
  /** Reflected: __Dati_Numero012*/ 
  VTotaleSegno: number;
  /** Reflected: __Dati_Numero013*/ 
  FlagCorrezione: number;
  /** Reflected: __Dati_Numero014*/ 
  FlagDisponibileAltrove: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagDisponibileInternamente: number;
  /** Reflected: __Dati_Numero016*/ 
  FlagNonDisponibile: number;
  /** Reflected: __Dati_Numero017*/ 
  FlagPrenotato: number;
  /** Reflected: __Dati_Testo043*/ 
  IdMagazzinoGestito: string;
  /** Reflected: __Dati_Numero018*/ 
  QuantitaProgressivaMagazzino: number;
  /** Reflected: __Dati_Numero019*/ 
  FlagGiacenzaGenerale: number;
  /** Reflected: __Dati_Testo044*/ 
  TxtAutomaticoDocOperativo: string;
  /** Reflected: __Dati_Testo045*/ 
  TxtMagazzinoGestito: string;
  /** Reflected: __Dati_Numero020*/ 
  QuantitaProgressivaGenerale: number;
  /** Reflected: __Dati_Testo046*/ 
  TxtUtente: string;
  /** Reflected: __Dati_Numero021*/ 
  Zero: number;
  /** Reflected: __Dati_Testo047*/ 
  iBeacon_Id: string;
  /** Reflected: __Dati_Testo048*/ 
  iBeacon_Major: string;
  /** Reflected: __Dati_Testo049*/ 
  iBeacon_Minor: string;
  /** Reflected: __Dati_Numero022*/ 
  MillisecondiCreazione: number;
  /** Reflected: __Dati_Testo050*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo051*/ 
  Tracciabilita_Taglia: string;
  /** Reflected: __Dati_Testo052*/ 
  Tracciabilita_Colore: string;
  /** Reflected: __Dati_Testo053*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Testo054*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo055*/ 
  IdTracciabilitaItem: string;
  /** Reflected: __Dati_Testo056*/ 
  IdMovimentoTracciabilita: string;
  /** Reflected: __Dati_Testo057*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo058*/ 
  IdUtente: string;
  /** Reflected: __Dati_Numero023*/ 
  AnnoEsecuzione: number;
  /** Reflected: __Dati_Testo059*/ 
  Tracciabilita_CodiceAutomatico: string;
  /** Reflected: __Dati_Numero024*/ 
  FlagAggiornaDaTracciabilita: number;
  /** Reflected: __Dati_Testo060*/ 
  Tracciabilita_TxtAutomatico: string;
  /** Reflected: __Dati_Testo061*/ 
  Tracciabilita_InfoExtra: string;
  /** Reflected: __Dati_Testo062*/ 
  Tracciabilita_CodiceTxtAutomatico: string;
  /** Reflected: __Dati_Numero025*/ 
  FlagAggiornaMovimento: number
}