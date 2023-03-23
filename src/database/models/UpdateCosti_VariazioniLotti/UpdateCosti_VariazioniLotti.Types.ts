export interface IUpdateCosti_VariazioniLotti {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  CodiceArticolo: string;
  /** Reflected: __Dati_Testo002*/ 
  CodiceLottoProduzione: string;
  /** Reflected: __Dati_Testo003*/ 
  CodiceRigaOrdine: string;
  /** Reflected: __Dati_Testo004*/ 
  CodiceTxtArticoloAutomatico: string;
  /** Reflected: __Dati_Numero001*/ 
  CTAD_PostEsecuzione: number;
  /** Reflected: __Dati_Numero002*/ 
  CTB_PostEsecuzione: number;
  /** Reflected: __Dati_Numero003*/ 
  CTF_PostEsecuzione: number;
  /** Reflected: __Dati_Numero004*/ 
  CTL_PostEsecuzione: number;
  /** Reflected: __Dati_Numero005*/ 
  CTLE_PostEsecuzione: number;
  /** Reflected: __Dati_Numero006*/ 
  CTM_PostEsecuzione: number;
  /** Reflected: __Dati_Numero007*/ 
  CTP_PostEsecuzione: number;
  /** Reflected: __Dati_Numero008*/ 
  CTQ_PostEsecuzione: number;
  /** Reflected: __Dati_Numero009*/ 
  CTS_PostEsecuzione: number;
  /** Reflected: __Dati_Numero010*/ 
  CTT_PostEsecuzione: number;
  /** Reflected: __Dati_Numero011*/ 
  CTT_Ricarico_PostEsecuzione: number;
  /** Reflected: __Dati_Numero012*/ 
  CTTRA_PreEsecuzione: number;
  /** Reflected: __Dati_Numero013*/ 
  CTUt_PostEsecuzione: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo005*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo006*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo007*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo008*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo009*/ 
  IdTipoRigaOrdine: string;
  /** Reflected: __Dati_Testo010*/ 
  TxtArticolo: string;
  /** Reflected: __Dati_Numero014*/ 
  Uno: number;
  /** Reflected: __Dati_Numero015*/ 
  Zero: number;
  /** Reflected: __Dati_Testo011*/ 
  IdSessioneUpdateCosti: string;
  /** Reflected: __Dati_Testo012*/ 
  IdVariazioneLottoUpdateCosti: string;
  /** Reflected: __Dati_Testo013*/ 
  IdDocOperativoOrigine: string;
  /** Reflected: __Dati_Testo014*/ 
  IdDocOperativoCaricoFiniti: string;
  /** Reflected: __Dati_Numero016*/ 
  LivelloMassimoDistinta: number;
  /** Reflected: __Dati_Testo015*/ 
  IdItemArticolo: string;
  /** Reflected: __Dati_Numero017*/ 
  CTAD_PreEsecuzione: number;
  /** Reflected: __Dati_Numero018*/ 
  CTB_PreEsecuzione: number;
  /** Reflected: __Dati_Numero019*/ 
  CTF_PreEsecuzione: number;
  /** Reflected: __Dati_Numero020*/ 
  CTL_PreEsecuzione: number;
  /** Reflected: __Dati_Numero021*/ 
  CTLE_PreEsecuzione: number;
  /** Reflected: __Dati_Numero022*/ 
  CTM_PreEsecuzione: number;
  /** Reflected: __Dati_Numero023*/ 
  CTP_PreEsecuzione: number;
  /** Reflected: __Dati_Numero024*/ 
  CTQ_PreEsecuzione: number;
  /** Reflected: __Dati_Numero025*/ 
  CTS_PreEsecuzione: number;
  /** Reflected: __Dati_Numero026*/ 
  CTT_PreEsecuzione: number;
  /** Reflected: __Dati_Numero027*/ 
  CTT_Ricarico_PreEsecuzione: number;
  /** Reflected: __Dati_Numero028*/ 
  CTUt_PreEsecuzione: number;
  /** Reflected: __Dati_Numero029*/ 
  DiffCTAD: number;
  /** Reflected: __Dati_Numero030*/ 
  DiffCTB: number;
  /** Reflected: __Dati_Numero031*/ 
  DiffCTF: number;
  /** Reflected: __Dati_Numero032*/ 
  DiffCTL: number;
  /** Reflected: __Dati_Numero033*/ 
  DiffCTLE: number;
  /** Reflected: __Dati_Numero034*/ 
  DiffCTM: number;
  /** Reflected: __Dati_Numero035*/ 
  DiffCTP: number;
  /** Reflected: __Dati_Numero036*/ 
  DiffCTQ: number;
  /** Reflected: __Dati_Numero037*/ 
  DiffCTS: number;
  /** Reflected: __Dati_Numero038*/ 
  DiffCTT: number;
  /** Reflected: __Dati_Numero039*/ 
  DiffCTT_Ricarico: number;
  /** Reflected: __Dati_Numero040*/ 
  DiffCTTRA: number;
  /** Reflected: __Dati_Numero041*/ 
  CTTRA_PostEsecuzione: number;
  /** Reflected: __Dati_Numero042*/ 
  DiffCTUt: number;
  /** Reflected: __Dati_Numero043*/ 
  PercDiffCTAD: number;
  /** Reflected: __Dati_Numero044*/ 
  PercDiffCTB: number;
  /** Reflected: __Dati_Numero045*/ 
  PercDiffCTF: number;
  /** Reflected: __Dati_Numero046*/ 
  PercDiffCTL: number;
  /** Reflected: __Dati_Numero047*/ 
  PercDiffCTLE: number;
  /** Reflected: __Dati_Numero048*/ 
  PercDiffCTM: number;
  /** Reflected: __Dati_Numero049*/ 
  PercDiffCTP: number;
  /** Reflected: __Dati_Numero050*/ 
  PercDiffCTQ: number;
  /** Reflected: __Dati_Numero051*/ 
  PercDiffCTS: number;
  /** Reflected: __Dati_Numero052*/ 
  PercDiffCTT: number;
  /** Reflected: __Dati_Numero053*/ 
  PercDiffCTT_Ricarico: number;
  /** Reflected: __Dati_Numero054*/ 
  PercDiffCTTRA: number;
  /** Reflected: __Dati_Numero055*/ 
  PercDiffCTUt: number;
  /** Reflected: __Dati_Testo016*/ 
  IdVoceDocOperativoOrigine: string;
  /** Reflected: __Dati_Numero056*/ 
  FlagStato04Saldato: number;
  /** Reflected: __Dati_Testo017*/ 
  TxtStatoLottoProduzione: string;
  /** Reflected: __Dati_Numero057*/ 
  PercentualeAvanzamento: number
}