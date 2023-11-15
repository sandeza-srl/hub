export interface IRisorse {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo002*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Testo003*/ 
  IdFamigliaRisorsa: string;
  /** Reflected: __Dati_Testo004*/ 
  IdAccountFornitore: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtAccountFornitore: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtRisorsaEstesa: string;
  /** Reflected: __Dati_Numero002*/ 
  NumeroAddetti: number;
  /** Reflected: __Dati_Numero003*/ 
  CostoOrarioTotaleAttrezzaggio: number;
  /** Reflected: __Dati_Numero004*/ 
  CostoOrarioTotaleProduzione: number;
  /** Reflected: __Dati_Numero005*/ 
  CostoOrarioTotaleFermoMacchina: number;
  /** Reflected: __Dati_Numero006*/ 
  CostoOrarioAddettoAggiuntivo: number;
  /** Reflected: __Dati_Numero007*/ 
  ResaT: number;
  /** Reflected: __Dati_Data001*/ 
  DataAcquisto: Date;
  /** Reflected: __Dati_Numero008*/ 
  GaranziaGg: number;
  /** Reflected: __Dati_Data002*/ 
  DataScadenzaGaranzia: Date;
  /** Reflected: __Dati_Numero009*/ 
  FlagLavInternaPianificabile: number;
  /** Reflected: __Dati_Testo007*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo008*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Data003*/ 
  DataCalcoloImpegno: Date;
  /** Reflected: __Dati_Testo009*/ 
  FlagHDisponibili: string;
  /** Reflected: __Dati_Testo010*/ 
  FlagHLibere: string;
  /** Reflected: __Dati_Numero010*/ 
  PercImpegno: number;
  /** Reflected: __Dati_Testo011*/ 
  ColoreImpegno: string;
  /** Reflected: __Dati_Testo012*/ 
  Modello: string;
  /** Reflected: __Dati_Testo013*/ 
  IdAccountCostruttore: string;
  /** Reflected: __Dati_Testo014*/ 
  IdRubricaRefTecFornitore: string;
  /** Reflected: __Dati_Testo015*/ 
  IdRubricaRefCommFornitore: string;
  /** Reflected: __Dati_Testo016*/ 
  NomeRefCommFornitore: string;
  /** Reflected: __Dati_Testo017*/ 
  NomeRefTecnicoFornitore: string;
  /** Reflected: __Dati_Testo018*/ 
  IdRubricaOperatore: string;
  /** Reflected: __Dati_Testo019*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo020*/ 
  TxtOperatore: string;
  /** Reflected: __Dati_Numero011*/ 
  GgPercImpegno: number;
  /** Reflected: __Dati_Testo021*/ 
  TxtFamigliaRisorsa: string;
  /** Reflected: __Dati_Numero012*/ 
  FlagImballoFinale: number;
  /** Reflected: __Dati_Testo022*/ 
  TxtAccountCostruttore: string;
  /** Reflected: __Dati_Testo023*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Testo024*/ 
  CodiceTxtRisorsa: string;
  /** Reflected: __Dati_Numero013*/ 
  FlagLavEsterna: number;
  /** Reflected: __Dati_Numero014*/ 
  FlagImballoParziale: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagLavInternaNonPianificabile: number;
  /** Reflected: __Dati_Testo025*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo026*/ 
  IdItem: string;
  /** Reflected: __Dati_Numero016*/ 
  Zero: number;
  /** Reflected: __Dati_Testo027*/ 
  iBeacon_Id: string;
  /** Reflected: __Dati_Testo028*/ 
  iBeacon_Major: string;
  /** Reflected: __Dati_Testo029*/ 
  iBeacon_Minor: string;
  /** Reflected: __Dati_Testo030*/ 
  CollegamentoMacchine_PathCartellaOut: string;
  /** Reflected: __Dati_Testo031*/ 
  CollegamentoMacchine_PathCartellaIn: string;
  /** Reflected: __Dati_Testo032*/ 
  CollegamentoMacchine_IdRisorsaEsterno: string;
  /** Reflected: __Dati_Ora001*/ 
  TA_T: string;
  /** Reflected: __Dati_Ora002*/ 
  TD_T: string;
  /** Reflected: __Dati_Ora003*/ 
  TAttraversamentoLinea_T: string;
  /** Reflected: __Dati_Numero017*/ 
  NUmOpzColpo_T: number;
  /** Reflected: __Dati_Numero018*/ 
  ProdUmOpzHP_T: number;
  /** Reflected: __Dati_Numero019*/ 
  CostoOrarioAddettoAttrezzaggio: number;
  /** Reflected: __Dati_Numero020*/ 
  CostoOrarioAddettoFermoMacchina: number;
  /** Reflected: __Dati_Numero021*/ 
  CostoOrarioAddettoProduzione: number;
  /** Reflected: __Dati_Numero022*/ 
  CostoOrarioMacchinaAttrezzaggio: number;
  /** Reflected: __Dati_Numero023*/ 
  CostoOrarioMacchinaFermoMacchina: number;
  /** Reflected: __Dati_Numero024*/ 
  CostoOrarioMacchinaProduzione: number;
  /** Reflected: __Dati_Numero025*/ 
  QuotaAddettoProduzione: number;
  /** Reflected: __Dati_Numero026*/ 
  QuotaAddettoAttrezzaggio: number;
  /** Reflected: __Dati_Numero027*/ 
  QuotaAddettoFermoMacchina: number;
  /** Reflected: __Dati_Testo033*/ 
  Note: string;
  /** Reflected: __Dati_Numero028*/ 
  AnnoInstallazione: number;
  /** Reflected: __Dati_Testo034*/ 
  AnnoMeseInstallazione: string;
  /** Reflected: __Dati_Testo035*/ 
  AnnoMeseStartUp: string;
  /** Reflected: __Dati_Numero029*/ 
  AnnoStartUp: number;
  /** Reflected: __Dati_Numero030*/ 
  AnnoVendita: number;
  /** Reflected: __Dati_Data004*/ 
  DataCorrente: Date;
  /** Reflected: __Dati_Data005*/ 
  DataInstallazione: Date;
  /** Reflected: __Dati_Data006*/ 
  DataStartUp: Date;
  /** Reflected: __Dati_Numero031*/ 
  FlagAggiornaValori01: number;
  /** Reflected: __Dati_Numero032*/ 
  GgEsercizio: number;
  /** Reflected: __Dati_Testo036*/ 
  NumeroSerie: string;
  /** Reflected: __Dati_Numero033*/ 
  QP: number;
  /** Reflected: __Dati_Numero034*/ 
  QS: number;
  /** Reflected: __Dati_Ora004*/ 
  TPR: string;
  /** Reflected: __Dati_Ora005*/ 
  TFR: string;
  /** Reflected: __Dati_Ora006*/ 
  TAR: string;
  /** Reflected: __Dati_Ora007*/ 
  TInattivaR: string;
  /** Reflected: __Dati_Ora008*/ 
  TTR: string;
  /** Reflected: __Dati_Numero035*/ 
  QT: number;
  /** Reflected: __Dati_Ora009*/ 
  TImpegnoT: string;
  /** Reflected: __Dati_Numero036*/ 
  FlagAttiva: number;
  /** Reflected: __Dati_Ora010*/ 
  TDR: string;
  /** Reflected: __Dati_Numero037*/ 
  ResaR: number;
  /** Reflected: __Dati_Numero038*/ 
  PercImpiego: number;
  /** Reflected: __Dati_Numero039*/ 
  FlagAggiornaValori02: number;
  /** Reflected: __Dati_Numero040*/ 
  ValoreFrazionamentoTempo: number;
  /** Reflected: __Dati_Ora011*/ 
  TT_Tt_Restante: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo037*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo038*/ 
  CollegamentoMacchine_LinkVisualizzatore: string;
  /** Reflected: __Dati_Testo039*/ 
  MultiMagazzino_Materiale_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Testo040*/ 
  MultiMagazzino_CaricoFiniti_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Testo041*/ 
  MultiMagazzino_ScartoMateriale_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Testo042*/ 
  MultiMagazzino_Utensili_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Testo043*/ 
  MultiMagazzino_RottamazioneUtensili_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Numero041*/ 
  CollegamentoMacchine_FlagAttivo: number;
  /** Reflected: __Dati_Testo044*/ 
  IdDocumentoPrincipale: string;
  /** Reflected: __Dati_Numero042*/ 
  FlagTempoProduzioneProposto: number;
  /** Reflected: __Dati_Testo045*/ 
  id: string;
  /** Reflected: __Dati_Testo046*/ 
  title: string;
  /** Reflected: __Dati_Numero043*/ 
  CollegamentoMacchine_FlagInvioProgrammaMacchina: number;
  /** Reflected: __Dati_Numero044*/ 
  CollegamentoMacchine_FlagInvioAutomaticoProgrammaMacchina: number;
  /** Reflected: __Dati_Numero045*/ 
  MultiMagazzino_FlagAggiornaDaMagazziniGestiti: number;
  /** Reflected: __Dati_Testo047*/ 
  MultiMagazzino_Tutti_IdMagazzinoGestito: string;
  /** Reflected: __Dati_Testo048*/ 
  MultiMagazzino_Utensili_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo049*/ 
  MultiMagazzino_RottamazioneUtensili_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo050*/ 
  MultiMagazzino_ScartoMateriale_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo051*/ 
  MultiMagazzino_Materiale_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo052*/ 
  MultiMagazzino_CaricoFiniti_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Testo053*/ 
  MultiMagazzino_Tutti_IdMagazzinoFisico: string;
  /** Reflected: __Dati_Numero046*/ 
  MultiMagazzino_FlagMultiMagazzinoAttivo: number;
  /** Reflected: __Dati_Testo054*/ 
  IdSedeRisorsa: string;
  /** Reflected: __Dati_Testo055*/ 
  NomeSedeRisorsa: string;
  /** Reflected: __Dati_Testo056*/ 
  MultiMagazzino_CaricoFiniti_TxtMagazzinoGestito: string;
  /** Reflected: __Dati_Testo057*/ 
  MultiMagazzino_Materiale_TxtMagazzinoGestito: string;
  /** Reflected: __Dati_Testo058*/ 
  MultiMagazzino_RottamazioneUtensili_TxtMagazzinoGestito: string;
  /** Reflected: __Dati_Testo059*/ 
  MultiMagazzino_Utensili_TxtMagazzinoGestito: string;
  /** Reflected: __Dati_Testo060*/ 
  Gruppo: string
}