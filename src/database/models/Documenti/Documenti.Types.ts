export interface IDocumenti {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdDocumento: string;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Ora001*/ 
  OraCreazione: string;
  /** Reflected: __Dati_Testo002*/ 
  IdUtenteCreazione: string;
  /** Reflected: __Dati_Testo003*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Testo004*/ 
  IdUtenteModifica: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtUtenteModifica: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraModifica: Date;
  /** Reflected: __Dati_Ora002*/ 
  OraModifica: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtDocumento: string;
  /** Reflected: __Dati_Testo007*/ 
  PercorsoWebViewer: string;
  /** Reflected: __Dati_Testo008*/ 
  IdAccount: string;
  /** Reflected: __Dati_Testo009*/ 
  IdRubrica: string;
  /** Reflected: __Dati_Testo010*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo011*/ 
  IdItem: string;
  /** Reflected: __Dati_Testo012*/ 
  IdProgetto: string;
  /** Reflected: __Dati_Testo013*/ 
  IdChiamata: string;
  /** Reflected: __Dati_Testo014*/ 
  IdVoceProgetto: string;
  /** Reflected: __Dati_Testo015*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo016*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo017*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo018*/ 
  IdSessioneMagazzino: string;
  /** Reflected: __Dati_Testo019*/ 
  PercorsoReale: string;
  /** Reflected: __Dati_Testo020*/ 
  TxtSezioneDiCreazione: string;
  /** Reflected: __Dati_Numero002*/ 
  FlagCreatoAccount: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagCreatoItems: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagCreatoComunicazioni: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagCreatoRubrica: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagCreatoChiamata: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagCreatoArticoli: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagCreatoVociProgetto: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagCreatoSessioneMagazzino: number;
  /** Reflected: __Dati_Numero010*/ 
  FlagCreatoProgetti: number;
  /** Reflected: __Dati_Testo021*/ 
  File_Nome: string;
  /** Reflected: __Dati_Testo022*/ 
  Note: string;
  /** Reflected: __Dati_Testo023*/ 
  IdUtentiNoVisualizzazione: string;
  /** Reflected: __Dati_Testo024*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Numero011*/ 
  FlagCreatoDocContabile: number;
  /** Reflected: __Dati_Numero012*/ 
  Ordine: number;
  /** Reflected: __Dati_Numero013*/ 
  FlagCreatoOfferta: number;
  /** Reflected: __Dati_Testo025*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Numero014*/ 
  FlagCreatoComunicazioneProduzione: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagCreatoProtocolli: number;
  /** Reflected: __Dati_Testo026*/ 
  IdProtocollo: string;
  /** Reflected: __Dati_Numero016*/ 
  FlagCreatoStepProcesso: number;
  /** Reflected: __Dati_Testo027*/ 
  LettereTxtDocumento: string;
  /** Reflected: __Dati_Testo028*/ 
  TxtTipoDocumento: string;
  /** Reflected: __Dati_Testo029*/ 
  TxtSottoTipoDocumento: string;
  /** Reflected: __Dati_Numero017*/ 
  AnnoCreazione: number;
  /** Reflected: __Dati_Contenitore001*/ 
  ImgDocumento: string;
  /** Reflected: __Dati_Testo030*/ 
  IdOggettoCreazione: string;
  /** Reflected: __Dati_Testo031*/ 
  IdStepProcesso: string;
  /** Reflected: __Dati_Testo032*/ 
  IdComunicazione: string;
  /** Reflected: __Dati_Numero018*/ 
  FlagDocumentoConAssociazioneMultipla: number;
  /** Reflected: __Dati_Testo033*/ 
  IdCampagna: string;
  /** Reflected: __Dati_Testo034*/ 
  IdComunicazioneProduzione: string;
  /** Reflected: __Dati_Testo035*/ 
  IdSottoProgetto: string;
  /** Reflected: __Dati_Numero019*/ 
  FlagCreatoRisorse: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagCreatoUtensili: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagCreatoStrumenti: number;
  /** Reflected: __Dati_Numero022*/ 
  FlagCreatoRigaOrdineProduzione: number;
  /** Reflected: __Dati_Numero023*/ 
  FlagCreatoUtente: number;
  /** Reflected: __Dati_Numero024*/ 
  FlagCreatoChat: number;
  /** Reflected: __Dati_Testo036*/ 
  IdChat: string;
  /** Reflected: __Dati_Testo037*/ 
  IdUtente: string;
  /** Reflected: __Dati_Testo038*/ 
  IdUtensile: string;
  /** Reflected: __Dati_Testo039*/ 
  IdStrumento: string;
  /** Reflected: __Dati_Testo040*/ 
  IdRigaOrdineProduzione: string;
  /** Reflected: __Dati_Testo041*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Testo042*/ 
  IdSede: string;
  /** Reflected: __Dati_Numero025*/ 
  FlagCreatoSedi: number;
  /** Reflected: __Dati_Contenitore002*/ 
  ImgDocumentoProtetta: string;
  /** Reflected: __Dati_Numero026*/ 
  FlagDocumentoProtetto: number;
  /** Reflected: __Dati_Testo043*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero027*/ 
  FlagCreatoSessioneLavoro: number;
  /** Reflected: __Dati_Testo044*/ 
  IdSessioneLavoro: string;
  /** Reflected: __Dati_Numero028*/ 
  FlagCreatoDocOperativo: number;
  /** Reflected: __Dati_Testo045*/ 
  IdDocOperativo: string;
  /** Reflected: __Dati_Testo046*/ 
  IdIntervento: string;
  /** Reflected: __Dati_Numero029*/ 
  FlagCreatoInterventi: number;
  /** Reflected: __Dati_Data002*/ 
  DataScadenza: Date;
  /** Reflected: __Dati_Numero030*/ 
  FlagScaduto: number;
  /** Reflected: __Dati_Testo047*/ 
  IdSottoTipoDocumento: string;
  /** Reflected: __Dati_Testo048*/ 
  IdTipoDocumento: string;
  /** Reflected: __Dati_Numero031*/ 
  FlagPubblicabile: number;
  /** Reflected: __Dati_Testo049*/ 
  IdTipoAttivitaControllo: string;
  /** Reflected: __Dati_Testo050*/ 
  IdAttivitaControllo: string;
  /** Reflected: __Dati_Testo051*/ 
  IdTipoImpianto: string;
  /** Reflected: __Dati_Testo052*/ 
  IdTipoStrumento: string;
  /** Reflected: __Dati_Testo053*/ 
  IdTipoUtensile: string;
  /** Reflected: __Dati_Testo054*/ 
  IdImpianto: string;
  /** Reflected: __Dati_Numero032*/ 
  FlagCreatoTipoAttivitaControllo: number;
  /** Reflected: __Dati_Numero033*/ 
  FlagCreatoTipoStrumento: number;
  /** Reflected: __Dati_Numero034*/ 
  FlagCreatoTipoUtensile: number;
  /** Reflected: __Dati_Numero035*/ 
  FlagCreatoTipoImpianto: number;
  /** Reflected: __Dati_Numero036*/ 
  FlagCreatoImpianto: number;
  /** Reflected: __Dati_Numero037*/ 
  FlagCreatoAttivitaControllo: number;
  /** Reflected: __Dati_Testo055*/ 
  IdSchedaAttivitaControllo: string;
  /** Reflected: __Dati_Numero038*/ 
  FlagCreatoSchedaAttivitaControllo: number;
  /** Reflected: __Dati_Numero039*/ 
  Zero: number;
  /** Reflected: __Dati_Numero040*/ 
  FlagCreatoCampagna: number;
  /** Reflected: __Dati_Numero041*/ 
  FlagCreatoCiclo: number;
  /** Reflected: __Dati_Numero042*/ 
  FlagCreatoFaseProduzione: number;
  /** Reflected: __Dati_Numero043*/ 
  FlagCreatoLottoProduzione: number;
  /** Reflected: __Dati_Numero044*/ 
  FlagCreatoSottoProgetto: number;
  /** Reflected: __Dati_Testo056*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Numero045*/ 
  FlagCreatoRegistrazioneFaseProduzione: number;
  /** Reflected: __Dati_Testo057*/ 
  IdTipoNormativa: string;
  /** Reflected: __Dati_Numero046*/ 
  FlagCreatoTipoNormativa: number;
  /** Reflected: __Dati_Numero047*/ 
  FlagFirma: number;
  /** Reflected: __Dati_Testo058*/ 
  IdTipoStepProcesso: string;
  /** Reflected: __Dati_Numero048*/ 
  FlagCreatoTipoStepProcesso: number;
  /** Reflected: __Dati_Numero049*/ 
  FlagCreatoTracciabilita: number;
  /** Reflected: __Dati_Testo059*/ 
  IdTracciabilita: string;
  /** Reflected: __Dati_Testo060*/ 
  File_Estensione: string;
  /** Reflected: __Dati_Testo061*/ 
  IdViaggio: string;
  /** Reflected: __Dati_Numero050*/ 
  FlagFileDaPercorso: number;
  /** Reflected: __Dati_Testo062*/ 
  IdScartoProduzione: string;
  /** Reflected: __Dati_Numero051*/ 
  FlagCreatoScartoProduzione: number;
  /** Reflected: __Dati_Testo063*/ 
  IdTipoContenitore: string;
  /** Reflected: __Dati_Testo064*/ 
  IdContenitore: string;
  /** Reflected: __Dati_Numero052*/ 
  FlagCreatoContenitore: number;
  /** Reflected: __Dati_Numero053*/ 
  FlagCreatoTipoContenitore: number;
  /** Reflected: __Dati_Numero054*/ 
  FlagCreatoViaggi: number;
  /** Reflected: __Dati_Testo065*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo066*/ 
  File_AttributiContenitore: string;
  /** Reflected: __Dati_Numero055*/ 
  File_DimensioneEsterna: number;
  /** Reflected: __Dati_Numero056*/ 
  File_DimensioneSuDB: number;
  /** Reflected: __Dati_Numero057*/ 
  FlagAggiornaAttributiFile: number;
  /** Reflected: __Dati_Numero058*/ 
  FlagAggiornaCollegamenti: number;
  /** Reflected: __Dati_Numero059*/ 
  AnnoMeseCreazione: number;
  /** Reflected: __Dati_Numero060*/ 
  AnnoSettimanaCreazione: number;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_Testo067*/ 
  File_VerificaFile: string;
  /** Reflected: __Dati_Numero061*/ 
  FlagAggiornaDaSottotipo: number;
  /** Reflected: __Dati_Numero062*/ 
  AnnoScadenza: number;
  /** Reflected: __Dati_Numero063*/ 
  AnnoMeseScadenza: number;
  /** Reflected: __Dati_Numero064*/ 
  AnnoSettimanaScadenza: number;
  /** Reflected: __Dati_Numero065*/ 
  FlagSessioneCreazione: number;
  /** Reflected: __Dati_Testo068*/ 
  IdTipiRuoliPerEliminazioneDocumento: string;
  /** Reflected: __Dati_Testo069*/ 
  IdTipiRuoliPerModificaDocumento: string;
  /** Reflected: __Dati_Testo070*/ 
  IdTipiRuoliPerVisibilitaDocumento: string;
  /** Reflected: __Dati_Numero066*/ 
  FlagEstensioneFileCondizionata: number;
  /** Reflected: __Dati_Numero067*/ 
  FlagEliminazioneDocumentoLimitata: number;
  /** Reflected: __Dati_Numero068*/ 
  FlagModificaDocumentoLimitata: number;
  /** Reflected: __Dati_Numero069*/ 
  FlagVisibilitaDocumentoLimitata: number;
  /** Reflected: __Dati_Testo071*/ 
  LinkWeb: string;
  /** Reflected: __Dati_Numero070*/ 
  FlagFileDaLinkWeb: number;
  /** Reflected: __Dati_Testo072*/ 
  IdAnalisiCostoArticolo: string;
  /** Reflected: __Dati_Numero071*/ 
  FlagCreatoAnalisiCostoArticolo: number;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraUltimaRevisione: Date;
  /** Reflected: __Dati_Numero072*/ 
  FlagAggiornaDaRevisioni: number;
  /** Reflected: __Dati_Testo073*/ 
  TxtUtenteUltimaRevisione: string;
  /** Reflected: __Dati_Numero073*/ 
  Controllo_FlagCreatoNonUnivoco: number;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraCreazioneVersione: Date;
  /** Reflected: __Dati_Testo074*/ 
  IdDocumentoOriginale: string;
  /** Reflected: __Dati_Numero074*/ 
  FlagDocumentoDuplicato: number;
  /** Reflected: __Dati_Numero075*/ 
  FlagCreatoControlliFaseProduzione: number;
  /** Reflected: __Dati_Testo075*/ 
  IdControlloFaseProduzione: string;
  /** Reflected: __Dati_Numero076*/ 
  FlagCreatoProcessi: number;
  /** Reflected: __Dati_Testo076*/ 
  IdProcesso: string
}