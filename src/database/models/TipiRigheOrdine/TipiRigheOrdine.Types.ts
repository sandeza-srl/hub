export interface ITipiRigheOrdine {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  CodiceTipoRigaOrdine: string;
  /** Reflected: __Dati_Numero001*/ 
  FlagCodiceEsternoObbligatorio: number;
  /** Reflected: __Dati_Numero002*/ 
  GeneraCodiceRiga_AnnoTest: number;
  /** Reflected: __Dati_Numero003*/ 
  GeneraCodiceRiga_CifreProgressivo: number;
  /** Reflected: __Dati_Numero004*/ 
  GeneraCodiceRiga_FlagAnnoPrima: number;
  /** Reflected: __Dati_Numero005*/ 
  GeneraCodiceRiga_FlagAnnuale: number;
  /** Reflected: __Dati_Numero006*/ 
  GeneraCodiceRiga_Progressivo: number;
  /** Reflected: __Dati_Testo002*/ 
  GeneraCodiceRiga_ProssimoCodice: string;
  /** Reflected: __Dati_Testo003*/ 
  GeneraCodiceRiga_Testo: string;
  /** Reflected: __Dati_Testo004*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo005*/ 
  IdTipoRigaOrdine: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtTipoRigaOrdine: string;
  /** Reflected: __Dati_Numero007*/ 
  Uno: number;
  /** Reflected: __Dati_Numero008*/ 
  LT1OrdineConferma: number;
  /** Reflected: __Dati_Numero009*/ 
  LT2ConfermaCreazione: number;
  /** Reflected: __Dati_Numero010*/ 
  LT3CreazioneBenestare: number;
  /** Reflected: __Dati_Numero011*/ 
  LT4BenestareInizio: number;
  /** Reflected: __Dati_Testo007*/ 
  IdTipoDocOperativoOrigine: string;
  /** Reflected: __Dati_Numero012*/ 
  Zero: number;
  /** Reflected: __Dati_Testo008*/ 
  GeneraCodiceLotto_Txt: string;
  /** Reflected: __Dati_Testo009*/ 
  GeneraCodiceLotto_Separatore: string;
  /** Reflected: __Dati_Testo010*/ 
  GeneraCodiceLotto_IdAltroCodice: string;
  /** Reflected: __Dati_Testo011*/ 
  GeneraCodiceLotto_Codice: string;
  /** Reflected: __Dati_Testo012*/ 
  NomeFormatoStampa: string;
  /** Reflected: __Dati_Data001*/ 
  DataBenestareAutomatico: Date;
  /** Reflected: __Dati_Testo013*/ 
  TxtUtenteBenestare: string;
  /** Reflected: __Dati_Numero013*/ 
  FlagAggiorna_FlagSaldoFlagElimina: number;
  /** Reflected: __Dati_Testo014*/ 
  FlagSaldoAutomatico_ListaTipiDoc: string;
  /** Reflected: __Dati_Testo015*/ 
  FlagEliminaAutomatico_ListaTipiDoc: string;
  /** Reflected: __Dati_Testo016*/ 
  IdTipoDocOperativoOrdineFornitoreMateriale: string;
  /** Reflected: __Dati_Testo017*/ 
  CodiceTxtTipoRigaOrdineAutomatico: string;
  /** Reflected: __Dati_Testo018*/ 
  IdTipoDocOperativoFabbisognoMateriali: string;
  /** Reflected: __Dati_Testo019*/ 
  IdTipoDocOperativoFabbisognoLavorazioni: string;
  /** Reflected: __Dati_Testo020*/ 
  IdTipoDocOperativoScaricoMateriali: string;
  /** Reflected: __Dati_Testo021*/ 
  IdTipoDocOperativoCaricoFiniti: string;
  /** Reflected: __Dati_Testo022*/ 
  IdTipoDocOperativoOrdineFornitoreLavorazioni: string;
  /** Reflected: __Dati_Testo023*/ 
  IdTipoDocOperativoUscitaLavorazioni: string;
  /** Reflected: __Dati_Testo024*/ 
  IdTipoDocOperativoRientroLavorazioni: string;
  /** Reflected: __Dati_Numero014*/ 
  FlagEliminaAutomatico_OrdineFornitoreMateriale: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagSaldoAutomatico_OrdineFornitoreMateriale: number;
  /** Reflected: __Dati_Testo025*/ 
  IdTipoDocumentoRegistrazione: string;
  /** Reflected: __Dati_Testo026*/ 
  IdSottoTipoDocumentoRegistrazione: string;
  /** Reflected: __Dati_Testo027*/ 
  IdTipoDocOperativoScarto: string;
  /** Reflected: __Dati_Numero016*/ 
  FlagEsplodiDistinta_RigaOrdineSingola: number;
  /** Reflected: __Dati_Testo028*/ 
  IdTipoDocOperativoFabbisognoTrasporto: string;
  /** Reflected: __Dati_Testo029*/ 
  IdTipoDocOperativoOrdineFornitoreTrasporto: string;
  /** Reflected: __Dati_Testo030*/ 
  FormatoCartellinoProduzione: string;
  /** Reflected: __Dati_Testo031*/ 
  IdTipoDocumentoCartellinoProduzione: string;
  /** Reflected: __Dati_Testo032*/ 
  IdSottoTipoDocumentoCartellinoProduzione: string;
  /** Reflected: __Dati_Numero017*/ 
  GeneraCodiceLotto_Anno: number;
  /** Reflected: __Dati_Numero018*/ 
  GeneraCodiceLotto_Progressivo: number;
  /** Reflected: __Dati_Numero019*/ 
  GeneraCodiceLotto_OrdineAnno: number;
  /** Reflected: __Dati_Numero020*/ 
  GeneraCodiceLotto_OrdineTxt: number;
  /** Reflected: __Dati_Numero021*/ 
  GeneraCodiceLotto_OrdineProgressivo: number;
  /** Reflected: __Dati_Numero022*/ 
  GeneraCodiceLotto_CifreAnno: number;
  /** Reflected: __Dati_Numero023*/ 
  GeneraCodiceLotto_FlagUsaAltroCodice: number;
  /** Reflected: __Dati_Numero024*/ 
  GeneraCodiceLotto_FlagUsaAnno: number;
  /** Reflected: __Dati_Numero025*/ 
  GeneraCodiceLotto_CifreProgressivo: number;
  /** Reflected: __Dati_Numero026*/ 
  FlagBenestareAutomatico: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo033*/ 
  IdTipoDocOperativoFabbisognoUtensili: string;
  /** Reflected: __Dati_Testo034*/ 
  IdTipoDocOperativoPreparazioneMateriali: string;
  /** Reflected: __Dati_Numero027*/ 
  FlagPreparazioneMaterialiAutomatica: number;
  /** Reflected: __Dati_Testo035*/ 
  IdTipoDocOperativoSpedizioneMaterialeContoTrasformazione: string;
  /** Reflected: __Dati_Testo036*/ 
  IdTipoDocOperativoOrdineFornitoreContoTrasformazione: string;
  /** Reflected: __Dati_Testo037*/ 
  IdTipoDocOperativoRientroContoTrasformazione: string;
  /** Reflected: __Dati_Testo038*/ 
  IdTipoDocOperativoPreparazioneMaterialiContoTrasformazione: string;
  /** Reflected: __Dati_Testo039*/ 
  IdTipoDocOperativoChiusuraPrenotazioneContoTrasformazione: string;
  /** Reflected: __Dati_Testo040*/ 
  IdTipoDocOperativoFabbisognoContoTrasformazione: string;
  /** Reflected: __Dati_Numero028*/ 
  FlagDocOperitivoOrigineObbligatorio: number;
  /** Reflected: __Dati_Numero029*/ 
  FlagFabbisogniModificabili: number;
  /** Reflected: __Dati_Numero030*/ 
  FlagPreparazioneMaterialiRichiesta: number;
  /** Reflected: __Dati_Testo041*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Numero031*/ 
  FlagBloccaSaldoSeIncongruente: number;
  /** Reflected: __Dati_Numero032*/ 
  FlagSerialeModificabile: number;
  /** Reflected: __Dati_Testo042*/ 
  GeneraSeriale_CodiceEsempio: string;
  /** Reflected: __Dati_Testo043*/ 
  GeneraSeriale_Espressione: string;
  /** Reflected: __Dati_Testo044*/ 
  GeneraCodiceLotto_Espressione: string;
  /** Reflected: __Dati_Testo045*/ 
  GeneraCodiceRiga_Espressione: string;
  /** Reflected: __Dati_Numero033*/ 
  GeneraSeriale_FlagCodiceValidato: number;
  /** Reflected: __Dati_Numero034*/ 
  FlagBloccoModificaRegistrazioneSeSaldato: number;
  /** Reflected: __Dati_Testo046*/ 
  GeneraCodiceRiga_CodiceEsempio: string;
  /** Reflected: __Dati_Numero035*/ 
  GeneraCodiceRiga_FlagCodiceValidato: number;
  /** Reflected: __Dati_Testo047*/ 
  GeneraCodiceLotto_CodiceEsempio: string;
  /** Reflected: __Dati_Numero036*/ 
  GeneraCodiceLotto_FlagCodiceValidato: number;
  /** Reflected: __Dati_Numero037*/ 
  GeneraSeriale_FlagProgressivoAnnuale: number;
  /** Reflected: __Dati_Numero038*/ 
  GeneraSeriale_FlagProgressivoContinuo: number;
  /** Reflected: __Dati_Numero039*/ 
  GeneraSeriale_FlagProgressivoMensile: number;
  /** Reflected: __Dati_Numero040*/ 
  FlagSaldoAutomatico_ChiusuraPrenotazioneContoTrasformazione: number;
  /** Reflected: __Dati_Numero041*/ 
  FlagSaldoAutomatico_FabbisognoContoTrasformazione: number;
  /** Reflected: __Dati_Numero042*/ 
  FlagSaldoAutomatico_FabbisognoLavorazioni: number;
  /** Reflected: __Dati_Numero043*/ 
  FlagSaldoAutomatico_FabbisognoMateriali: number;
  /** Reflected: __Dati_Numero044*/ 
  FlagSaldoAutomatico_FabbisognoTrasporto: number;
  /** Reflected: __Dati_Numero045*/ 
  FlagSaldoAutomatico_FabbisognoUtensili: number;
  /** Reflected: __Dati_Numero046*/ 
  FlagSaldoAutomatico_OrdineFornitoreContoTrasformazione: number;
  /** Reflected: __Dati_Numero047*/ 
  FlagSaldoAutomatico_OrdineFornitoreLavorazioni: number;
  /** Reflected: __Dati_Numero048*/ 
  FlagSaldoAutomatico_OrdineFornitoreTrasporto: number;
  /** Reflected: __Dati_Numero049*/ 
  FlagSaldoAutomatico_PreparazioneMateriali: number;
  /** Reflected: __Dati_Numero050*/ 
  FlagSaldoAutomatico_PreparazioneMaterialiContoTrasformazione: number;
  /** Reflected: __Dati_Numero051*/ 
  FlagSaldoAutomatico_RientroContoTrasformazione: number;
  /** Reflected: __Dati_Numero052*/ 
  FlagSaldoAutomatico_RientroLavorazioni: number;
  /** Reflected: __Dati_Numero053*/ 
  FlagSaldoAutomatico_ScaricoMateriali: number;
  /** Reflected: __Dati_Numero054*/ 
  FlagSaldoAutomatico_Scarto: number;
  /** Reflected: __Dati_Numero055*/ 
  FlagSaldoAutomatico_SpedizioneMaterialeContoTrasformazione: number;
  /** Reflected: __Dati_Numero056*/ 
  FlagSaldoAutomatico_CaricoFiniti: number;
  /** Reflected: __Dati_Numero057*/ 
  FlagEliminaAutomatico_CaricoFiniti: number;
  /** Reflected: __Dati_Numero058*/ 
  FlagEliminaAutomatico_ChiusuraPrenotazioneContoTrasformazione: number;
  /** Reflected: __Dati_Numero059*/ 
  FlagEliminaAutomatico_FabbisognoContoTrasformazione: number;
  /** Reflected: __Dati_Numero060*/ 
  FlagEliminaAutomatico_FabbisognoLavorazioni: number;
  /** Reflected: __Dati_Numero061*/ 
  FlagEliminaAutomatico_FabbisognoMateriali: number;
  /** Reflected: __Dati_Numero062*/ 
  FlagEliminaAutomatico_FabbisognoTrasporto: number;
  /** Reflected: __Dati_Numero063*/ 
  FlagEliminaAutomatico_FabbisognoUtensili: number;
  /** Reflected: __Dati_Numero064*/ 
  FlagEliminaAutomatico_OrdineFornitoreContoTrasformazione: number;
  /** Reflected: __Dati_Numero065*/ 
  FlagEliminaAutomatico_OrdineFornitoreLavorazioni: number;
  /** Reflected: __Dati_Numero066*/ 
  FlagEliminaAutomatico_OrdineFornitoreTrasporto: number;
  /** Reflected: __Dati_Numero067*/ 
  FlagEliminaAutomatico_PreparazioneMateriali: number;
  /** Reflected: __Dati_Numero068*/ 
  FlagEliminaAutomatico_PreparazioneMaterialiContoTrasformazione: number;
  /** Reflected: __Dati_Numero069*/ 
  FlagEliminaAutomatico_RientroContoTrasformazione: number;
  /** Reflected: __Dati_Numero070*/ 
  FlagEliminaAutomatico_RientroLavorazioni: number;
  /** Reflected: __Dati_Numero071*/ 
  FlagEliminaAutomatico_ScaricoMateriali: number;
  /** Reflected: __Dati_Numero072*/ 
  FlagEliminaAutomatico_Scarto: number;
  /** Reflected: __Dati_Numero073*/ 
  FlagEliminaAutomatico_SpedizioneMaterialeContoTrasformazione: number;
  /** Reflected: __Dati_Numero074*/ 
  FlagSaldoAutomatico_UscitaLavorazioni: number;
  /** Reflected: __Dati_Numero075*/ 
  FlagEliminaAutomatico_UscitaLavorazioni: number;
  /** Reflected: __Dati_Numero076*/ 
  FlagSaldoAutomatico_DaUltimaFase: number;
  /** Reflected: __Dati_Numero077*/ 
  FlagEsplodiDistinta_RigheOrdiniSeparate: number;
  /** Reflected: __Dati_Numero078*/ 
  FlagEsplodiDistinta_Attivata: number;
  /** Reflected: __Dati_Numero079*/ 
  CopiaDocumentiArticolo_FlagAttivata: number;
  /** Reflected: __Dati_Numero080*/ 
  CopiaDocumentiArticolo_FlagCopiaDisegno: number;
  /** Reflected: __Dati_Numero081*/ 
  CopiaDocumentiArticolo_FlagCopiaDocumentiNote: number;
  /** Reflected: __Dati_Numero082*/ 
  CopiaDocumentiArticolo_FlagCopiaProgrammiMacchina: number;
  /** Reflected: __Dati_Numero083*/ 
  CopiaDocumentiArticolo_FlagCopiaDocumentiQualita: number;
  /** Reflected: __Dati_Numero084*/ 
  FlagEsplodiDistinta_UsaCostbreakDown: number;
  /** Reflected: __Dati_Numero085*/ 
  SceltaCiclo_UsaFornituraItem: number;
  /** Reflected: __Dati_Numero086*/ 
  LancioProduzione_FlagUsaFornitura: number;
  /** Reflected: __Dati_Numero087*/ 
  ValorizzazioneMagazzino_FlagEscludiDaWip: number
}