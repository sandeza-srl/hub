export interface IProcessi {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdProcesso: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo002*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo003*/ 
  IdTipoProcesso: string;
  /** Reflected: __Dati_Testo004*/ 
  Note: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtProcesso: string;
  /** Reflected: __Dati_Data001*/ 
  DataFineRichiesta: Date;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraPrimoStepCompletato: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimoStepCompletato: Date;
  /** Reflected: __Dati_Numero002*/ 
  NumeroStepProcesso: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagCompletato: number;
  /** Reflected: __Dati_Data002*/ 
  DataCompletato: Date;
  /** Reflected: __Dati_Testo006*/ 
  IdAccountCollegato: string;
  /** Reflected: __Dati_Testo007*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Testo008*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo009*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Testo010*/ 
  IdDocOperativo: string;
  /** Reflected: __Dati_Testo011*/ 
  IdIntervento: string;
  /** Reflected: __Dati_Testo012*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo013*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo014*/ 
  IdItem: string;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraCompletato: Date;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra005*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo015*/ 
  TxtUtenteCompletato: string;
  /** Reflected: __Dati_Testo016*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Testo017*/ 
  TxtUtenteModifica: string;
  /** Reflected: __Dati_Testo018*/ 
  TxtAccountCollegato: string;
  /** Reflected: __Dati_Testo019*/ 
  IdTipoAttivitaControllo: string;
  /** Reflected: __Dati_Data003*/ 
  DataPrimoStepCompletato: Date;
  /** Reflected: __Dati_Data004*/ 
  DataPrimoStepPianificato: Date;
  /** Reflected: __Dati_Data005*/ 
  DataUltimoStepCompletato: Date;
  /** Reflected: __Dati_Data006*/ 
  DataUltimoStepPianificato: Date;
  /** Reflected: __Dati_Numero004*/ 
  AnnoInizio: number;
  /** Reflected: __Dati_Testo020*/ 
  AnnoMeseInizio: string;
  /** Reflected: __Dati_Testo021*/ 
  AnnoSettimanaInizio: string;
  /** Reflected: __Dati_Numero005*/ 
  AnnoFine: number;
  /** Reflected: __Dati_Testo022*/ 
  AnnoMeseFine: string;
  /** Reflected: __Dati_Testo023*/ 
  AnnoSettimanaFine: string;
  /** Reflected: __Dati_Numero006*/ 
  FlagCompletatoManuale: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagAggiornaDaStepProcesso: number;
  /** Reflected: __Dati_Testo024*/ 
  TxtTipoProcesso: string;
  /** Reflected: __Dati_Testo025*/ 
  Argomento: string;
  /** Reflected: __Dati_Testo026*/ 
  CodiceRiferimento: string;
  /** Reflected: __Dati_Testo027*/ 
  CodiceTipoProcesso: string;
  /** Reflected: __Dati_Numero008*/ 
  Zero: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagAggiornaTotali: number;
  /** Reflected: __Dati_Ora001*/ 
  DurataEffettivaOre: string;
  /** Reflected: __Dati_Numero010*/ 
  DurataEffettivaGiorni: number;
  /** Reflected: __Dati_Numero011*/ 
  DurataPrevistaGiorni: number;
  /** Reflected: __Dati_Ora002*/ 
  DurataPrevistaOre: string;
  /** Reflected: __Dati_Numero012*/ 
  DiffDurataGiorni: number;
  /** Reflected: __Dati_Ora003*/ 
  DiffDurataOre: string;
  /** Reflected: __Dati_Testo028*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo029*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo030*/ 
  IdAttivitaControllo: string;
  /** Reflected: __Dati_Testo031*/ 
  IdSchedaAttivitaControllo: string;
  /** Reflected: __Dati_Testo032*/ 
  IdImpianto: string;
  /** Reflected: __Dati_Testo033*/ 
  IdProgetto: string;
  /** Reflected: __Dati_Testo034*/ 
  IdTipoUtensile: string;
  /** Reflected: __Dati_Testo035*/ 
  IdTipoImpianto: string;
  /** Reflected: __Dati_Testo036*/ 
  IdTipoStrumento: string;
  /** Reflected: __Dati_Testo037*/ 
  IdStrumento: string;
  /** Reflected: __Dati_Testo038*/ 
  IdUtensile: string;
  /** Reflected: __Dati_Testo039*/ 
  TxtStatoAutomatico: string;
  /** Reflected: __Dati_Numero013*/ 
  PercAvanzamento: number;
  /** Reflected: __Dati_Testo040*/ 
  TxtProcessoAccountAutomatico: string;
  /** Reflected: __Dati_Testo041*/ 
  IdProtocollo: string;
  /** Reflected: __Dati_Testo042*/ 
  IdDocumento: string;
  /** Reflected: __Dati_Numero014*/ 
  DurataPianificataGiorni: number;
  /** Reflected: __Dati_Ora004*/ 
  DurataPianificataOre: string;
  /** Reflected: __Dati_DataOra006*/ 
  DataOraPrimoStepPianificato: Date;
  /** Reflected: __Dati_DataOra007*/ 
  DataOraUltimoStepPianificato: Date;
  /** Reflected: __Dati_Numero015*/ 
  FlagSoloFeriali: number;
  /** Reflected: __Dati_Numero016*/ 
  Progressivo: number;
  /** Reflected: __Dati_Testo043*/ 
  CodiceProcesso: string;
  /** Reflected: __Dati_Testo044*/ 
  IdTipoProcessoPerCodifica: string;
  /** Reflected: __Dati_Numero017*/ 
  AnnoCreazione: number;
  /** Reflected: __Dati_Testo045*/ 
  CodiceTxtProcessoAutomatico: string;
  /** Reflected: __Dati_Testo046*/ 
  CodiceTxtProcessoAccountAutomatico: string;
  /** Reflected: __Dati_Testo047*/ 
  IdVoceDocOperativo: string;
  /** Reflected: __Dati_Testo048*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo049*/ 
  IdDocumentoPrincipaleProcesso: string
}