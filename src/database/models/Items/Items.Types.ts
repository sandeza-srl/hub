export interface IItems {
  _id: string;

  /** Reflected: __Dati_Numero001*/
  Uno: number;

  /** Reflected: __Dati_Testo001*/
  IdItem: string;

  /** Reflected: __Dati_Testo002*/
  TxtItem: string;

  /** Reflected: __Dati_Testo003*/
  TxtItemEsteso: string;

  /** Reflected: __Dati_Testo004*/
  TxtFamigliaItem: string;

  /** Reflected: __Dati_Testo005*/
  IdSottoFamigliaItem: string;

  /** Reflected: __Dati_Contenitore001*/
  ImgItem: string;

  /** Reflected: __Dati_Numero002*/
  ScortaMinima: number;

  /** Reflected: __Dati_Numero003*/
  QtGiacenza_Maga: number;

  /** Reflected: __Dati_Numero004*/
  QtEntrata_Maga: number;

  /** Reflected: __Dati_Numero005*/
  QtUscita_Maga: number;

  /** Reflected: __Dati_Numero006*/
  QtFabbisognoTotale_DOp: number;

  /** Reflected: __Dati_Numero007*/
  QtInArrivo_DOp: number;

  /** Reflected: __Dati_Numero008*/
  QtPrevisioneGiacenza_DOp: number;

  /** Reflected: __Dati_Numero009*/
  QtDaOttenereCumulato_DOp: number;

  /** Reflected: __Dati_Testo006*/
  ClassePosizioneMagazzino: string;

  /** Reflected: __Dati_Testo007*/
  UnitaMisura: string;

  /** Reflected: __Dati_Numero010*/
  ProgCodiceItem: number;

  /** Reflected: __Dati_Numero011*/
  QtRichiestoApprovigionamento_DOp: number;

  /** Reflected: __Dati_Testo008*/
  IdFamigliaItem: string;

  /** Reflected: __Dati_Numero012*/
  FlagDistintaBase: number;

  /** Reflected: __Dati_Testo010*/
  LetteraIniziale: string;

  /** Reflected: __Dati_Numero013*/
  AnnoSettimana10: number;

  /** Reflected: __Dati_Numero014*/
  QtPrenotata_DOp_Sett10: number;

  /** Reflected: __Dati_Testo011*/
  IdDocumentoImgItem: string;

  /** Reflected: __Dati_Testo012*/
  LettereTxtItem: string;

  /** Reflected: __Dati_Numero015*/
  QtGiacenzaNonDisponibile_Maga: number;

  /** Reflected: __Dati_Numero016*/
  QtPrenotata_DOp: number;

  /** Reflected: __Dati_Numero017*/
  QtGiacenzaDisponibile_DOp: number;

  /** Reflected: __Dati_Numero018*/
  FlagListinoIvato: number;

  /** Reflected: __Dati_Numero019*/
  FlagVendita: number;

  /** Reflected: __Dati_Testo013*/
  GeneraCodiceSeriale_CodiceComposto: string;

  /** Reflected: __Dati_Numero020*/
  QtInArrivo_DOp_Sett09: number;

  /** Reflected: __Dati_Testo014*/
  Master_IdItemMaster: string;

  /** Reflected: __Dati_Numero021*/
  FlagMagazzino: number;

  /** Reflected: __Dati_Numero022*/
  QtDaOttenereCumulato_DOp_Sett12: number;

  /** Reflected: __Dati_Numero023*/
  FlagTipoBene: number;

  /** Reflected: __Dati_Numero024*/
  FlagTipoAzione: number;

  /** Reflected: __Dati_Testo015*/
  TxtSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo016*/
  IdAccountOperatoreRespCommerciale: string;

  /** Reflected: __Dati_Testo017*/
  IdAccountOperatoreRespTecnico: string;

  /** Reflected: __Dati_Testo018*/
  IdRubricaOperatoreRespCommerciale: string;

  /** Reflected: __Dati_Testo019*/
  IdRubricaOperatoreRespTecnico: string;

  /** Reflected: __Dati_Testo020*/
  NomeRubricaOperatoreRespCommerciale: string;

  /** Reflected: __Dati_Testo021*/
  NomeRubricaOperatoreRespTecnico: string;

  /** Reflected: __Dati_Testo022*/
  Note: string;

  /** Reflected: __Dati_Testo023*/
  IdAccountCompagnia: string;

  /** Reflected: __Dati_Testo024*/
  TxtAccountCompagnia: string;

  /** Reflected: __Dati_Numero025*/
  FornituraStandard_VAcquistoUnitario: number;

  /** Reflected: __Dati_Numero026*/
  Appuntamenti_NumeroMaxPartecipanti: number;

  /** Reflected: __Dati_Numero027*/
  Appuntamenti_NumeroMinPartecipanti: number;

  /** Reflected: __Dati_Ora001*/
  Appuntamenti_TempoOperazione: string;

  /** Reflected: __Dati_Testo025*/
  GeneraCodiceSeriale_Testo: string;

  /** Reflected: __Dati_Numero028*/
  Appuntamenti_NumeroOperatori: number;

  /** Reflected: __Dati_Numero029*/
  Appuntamenti_MinutiDiOraPossibili: number;

  /** Reflected: __Dati_Numero030*/
  FlagTipoContratto: number;

  /** Reflected: __Dati_Numero031*/
  GeneraCodiceSeriale_ProgressivoSeriale: number;

  /** Reflected: __Dati_Numero032*/
  DurataSottoscrizioneMesi: number;

  /** Reflected: __Dati_Numero033*/
  FlagProduttoreVincolato: number;

  /** Reflected: __Dati_Testo026*/
  IdAccountProduttoreVincolato: string;

  /** Reflected: __Dati_Testo027*/
  InformazioniAggiuntive_Lista: string;

  /** Reflected: __Dati_Numero034*/
  AnnoSettimana09: number;

  /** Reflected: __Dati_Testo028*/
  IdFamigliaItemOrigine: string;

  /** Reflected: __Dati_Numero035*/
  FlagRegistraTaglia: number;

  /** Reflected: __Dati_Testo029*/
  IdItemOrigine: string;

  /** Reflected: __Dati_Numero036*/
  FlagRegistraInfoExtra: number;

  /** Reflected: __Dati_Numero037*/
  GeneraCodiceSeriale_OrdineNumero: number;

  /** Reflected: __Dati_Testo030*/
  FormatoStampa: string;

  /** Reflected: __Dati_Numero038*/
  DurataGaranziaMesi: number;

  /** Reflected: __Dati_Testo031*/
  IdAliquotaIN: string;

  /** Reflected: __Dati_Testo032*/
  TxtAliquota: string;

  /** Reflected: __Dati_Testo033*/
  IdSottoFamigliaItemOrigine: string;

  /** Reflected: __Dati_Numero039*/
  FlagRegistraColore: number;

  /** Reflected: __Dati_Numero040*/
  FlagAcquisto: number;

  /** Reflected: __Dati_Numero041*/
  InformazioniAggiuntive_FlagRicalcolaLista: number;

  /** Reflected: __Dati_Numero042*/
  FlagTipoLavorazione: number;

  /** Reflected: __Dati_Numero043*/
  FlagRegistraNumeroSerie: number;

  /** Reflected: __Dati_Numero044*/
  QtInArrivo_DOp_Sett12: number;

  /** Reflected: __Dati_Numero045*/
  FlagTipoOraLavoro: number;

  /** Reflected: __Dati_Testo034*/
  CodiceCommercialeItem: string;

  /** Reflected: __Dati_Numero046*/
  FlagNonAttivo: number;

  /** Reflected: __Dati_Numero047*/
  QtInArrivo_DOp_Sett10: number;

  /** Reflected: __Dati_Numero048*/
  QtMovimentiControllo: number;

  /** Reflected: __Dati_Numero049*/
  QtGiacenza_DOp: number;

  /** Reflected: __Dati_Numero050*/
  QtIngressoDaUltimoInv_DOp: number;

  /** Reflected: __Dati_Data001*/
  DataUltimoInventario: Date;

  /** Reflected: __Dati_Numero051*/
  QtUltimoInventario: number;

  /** Reflected: __Dati_Testo035*/
  CodiceItem: string;

  /** Reflected: __Dati_Numero052*/
  VVenditaUnitarioStandardIvato: number;

  /** Reflected: __Dati_Testo036*/
  IdAliquotaINOrigine: string;

  /** Reflected: __Dati_Numero053*/
  PercentualeAliquota: number;

  /** Reflected: __Dati_Numero054*/
  QtPrevisioneGiacenza_Maga: number;

  /** Reflected: __Dati_Numero055*/
  QtOrdinata_DOp: number;

  /** Reflected: __Dati_Numero056*/
  QtEntrata_DOp: number;

  /** Reflected: __Dati_Numero057*/
  QtUscita_DOp: number;

  /** Reflected: __Dati_Numero058*/
  QtUscitaDaUltimoInv_DOp: number;

  /** Reflected: __Dati_Numero059*/
  QtGiacenzaUltimoInv_DOp: number;

  /** Reflected: __Dati_Testo037*/
  IdArticolo: string;

  /** Reflected: __Dati_Numero060*/
  FlagLinkArticoloProduzione: number;

  /** Reflected: __Dati_Testo038*/
  IdTipoUtensile: string;

  /** Reflected: __Dati_Testo039*/
  IdRisorsa: string;

  /** Reflected: __Dati_Testo040*/
  IdTipoFase: string;

  /** Reflected: __Dati_Numero061*/
  FlagLinkTipoUtensile: number;

  /** Reflected: __Dati_Numero062*/
  FlagLinkFaseStandard: number;

  /** Reflected: __Dati_Testo041*/
  IdTipoStrumento: string;

  /** Reflected: __Dati_Testo042*/
  CodiceSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo043*/
  CodiceFamigliaItem: string;

  /** Reflected: __Dati_Testo044*/
  CodiceAmministrativo: string;

  /** Reflected: __Dati_Numero063*/
  QtPrenotata_Maga: number;

  /** Reflected: __Dati_Testo045*/
  FornituraStandard_TxtFornitura: string;

  /** Reflected: __Dati_Numero064*/
  VVenditaUnitarioStandard: number;

  /** Reflected: __Dati_Numero065*/
  FlagRegistraLotto: number;

  /** Reflected: __Dati_Numero066*/
  QtInArrivo_DOp_Sett11: number;

  /** Reflected: __Dati_Numero067*/
  FlagRegistraScadenza: number;

  /** Reflected: __Dati_Numero068*/
  QtPrenotata_DOp_Sett09: number;

  /** Reflected: __Dati_Numero069*/
  QtFabbisognoAttivo_DOp_Sett09: number;

  /** Reflected: __Dati_Numero070*/
  QtFabbisognoAttivo_DOp_Sett10: number;

  /** Reflected: __Dati_Numero071*/
  QtGiacenzaDisponibileInternamente_Maga: number;

  /** Reflected: __Dati_Numero072*/
  QtGiacenzaDisponibileAltrove_Maga: number;

  /** Reflected: __Dati_Numero073*/
  QtGiacenzaDisponibile_Maga: number;

  /** Reflected: __Dati_Numero074*/
  QtPrevisioneGiacenzaDisponibile_DOp: number;

  /** Reflected: __Dati_Numero075*/
  QtPrevisioneGiacenzaDisponibile_Maga: number;

  /** Reflected: __Dati_Numero076*/
  QtDaOttenereCumulato_Maga: number;

  /** Reflected: __Dati_Numero077*/
  DistintaItem_VVenditaTotale: number;

  /** Reflected: __Dati_Numero078*/
  DistintaItem_VAcquistoTotale: number;

  /** Reflected: __Dati_Numero079*/
  FlagGeneraPacchi: number;

  /** Reflected: __Dati_Numero080*/
  AnnoSettimana11: number;

  /** Reflected: __Dati_DataOra001*/
  DataOraUltimaModifica: Date;

  /** Reflected: __Dati_Testo046*/
  CodiceTxtItemAutomatico: string;

  /** Reflected: __Dati_Numero081*/
  VAcquistoUnitarioUltimo: number;

  /** Reflected: __Dati_Numero082*/
  FlagAggiornaValori01: number;

  /** Reflected: __Dati_Numero083*/
  VVenditaUnitarioUltimo: number;

  /** Reflected: __Dati_Numero084*/
  VGiacenza_UltimoConsolidato: number;

  /** Reflected: __Dati_Numero085*/
  FlagLinkTipoStrumento: number;

  /** Reflected: __Dati_Numero086*/
  FlagLinkRisorsa: number;

  /** Reflected: __Dati_Numero087*/
  FlagLinkTipoImpianto: number;

  /** Reflected: __Dati_Testo047*/
  IdTipoImpianto: string;

  /** Reflected: __Dati_Numero088*/
  FlagMagaCespite: number;

  /** Reflected: __Dati_Numero089*/
  QtFabbisognoAttivo_DOp_Sett11: number;

  /** Reflected: __Dati_Numero090*/
  FlagMagaMateriaPrima: number;

  /** Reflected: __Dati_Numero091*/
  QtFabbisognoAttivo_DOp_Sett12: number;

  /** Reflected: __Dati_Numero092*/
  FlagMagaProdottoFinito: number;

  /** Reflected: __Dati_Numero093*/
  QtDaOttenereCumulato_DOp_Sett09: number;

  /** Reflected: __Dati_Numero094*/
  FlagMagaSemilavorato: number;

  /** Reflected: __Dati_Numero095*/
  QtPrevisioneGiacenza_DOp_Sett09: number;

  /** Reflected: __Dati_Numero096*/
  FlagMagaValorizzaCosto: number;

  /** Reflected: __Dati_Numero097*/
  QtDaOttenereCumulato_DOp_Sett10: number;

  /** Reflected: __Dati_Numero098*/
  FlagMagaValorizzaPrezzo: number;

  /** Reflected: __Dati_Numero099*/
  QtDaOttenereCumulato_DOp_Sett11: number;

  /** Reflected: __Dati_Data002*/
  DataCorrente: Date;

  /** Reflected: __Dati_Numero100*/
  GeneraCodice_FlagCreazioneSeriali: number;

  /** Reflected: __Dati_Numero101*/
  AnnoSettimana01: number;

  /** Reflected: __Dati_Numero102*/
  AnnoSettimana02: number;

  /** Reflected: __Dati_Numero103*/
  AnnoSettimana03: number;

  /** Reflected: __Dati_Numero104*/
  AnnoSettimana04: number;

  /** Reflected: __Dati_Numero105*/
  AnnoSettimana05: number;

  /** Reflected: __Dati_Numero106*/
  AnnoSettimana06: number;

  /** Reflected: __Dati_Numero107*/
  AnnoSettimana07: number;

  /** Reflected: __Dati_Numero108*/
  AnnoSettimana08: number;

  /** Reflected: __Dati_Numero109*/
  DurataGaranziaGiorni: number;

  /** Reflected: __Dati_Numero110*/
  DurataSottoscrizioneGiorni: number;

  /** Reflected: __Dati_Numero111*/
  FlagAggiornaQuantita01: number;

  /** Reflected: __Dati_Numero112*/
  FlagAggiornaQuantita02: number;

  /** Reflected: __Dati_Numero113*/
  FlagAggiornaValori02: number;

  /** Reflected: __Dati_DataOra002*/
  DataOraCreazione: Date;

  /** Reflected: __Dati_Numero114*/
  Zero: number;

  /** Reflected: __Dati_Numero115*/
  FlagProduzione: number;

  /** Reflected: __Dati_Numero116*/
  FlagWeb: number;

  /** Reflected: __Dati_Numero117*/
  QtDaOttenereCumulato_DOp_Sett00: number;

  /** Reflected: __Dati_Numero118*/
  QtFabbisognoAttivo_DOp_Sett01: number;

  /** Reflected: __Dati_Numero119*/
  QtFabbisognoAttivo_DOp_Sett02: number;

  /** Reflected: __Dati_Numero120*/
  QtFabbisognoAttivo_DOp_Sett03: number;

  /** Reflected: __Dati_Numero121*/
  QtFabbisognoAttivo_DOp_Sett04: number;

  /** Reflected: __Dati_Numero122*/
  QtFabbisognoAttivo_DOp_Sett05: number;

  /** Reflected: __Dati_Numero123*/
  QtFabbisognoAttivo_DOp_Sett06: number;

  /** Reflected: __Dati_Numero124*/
  QtFabbisognoAttivo_DOp_Sett07: number;

  /** Reflected: __Dati_Numero125*/
  QtFabbisognoAttivo_DOp_Sett08: number;

  /** Reflected: __Dati_Numero126*/
  QtFabbisognoAttivo_DOp_Sett00: number;

  /** Reflected: __Dati_Numero127*/
  QtFabbisognoAttivo_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero128*/
  FlagGestisciPosizioneMagazzino: number;

  /** Reflected: __Dati_Numero129*/
  QtInArrivo_DOp_Sett00: number;

  /** Reflected: __Dati_Numero130*/
  QtInArrivo_DOp_Sett01: number;

  /** Reflected: __Dati_Numero131*/
  QtInArrivo_DOp_Sett02: number;

  /** Reflected: __Dati_Numero132*/
  QtInArrivo_DOp_Sett03: number;

  /** Reflected: __Dati_Numero133*/
  QtInArrivo_DOp_Sett04: number;

  /** Reflected: __Dati_Numero134*/
  QtInArrivo_DOp_Sett05: number;

  /** Reflected: __Dati_Numero135*/
  QtInArrivo_DOp_Sett06: number;

  /** Reflected: __Dati_Numero136*/
  QtInArrivo_DOp_Sett07: number;

  /** Reflected: __Dati_Numero137*/
  QtInArrivo_DOp_Sett08: number;

  /** Reflected: __Dati_Numero138*/
  QtInArrivo_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero139*/
  QtPrevisioneGiacenza_DOp_Sett00: number;

  /** Reflected: __Dati_Numero140*/
  QtPrevisioneGiacenza_DOp_Sett01: number;

  /** Reflected: __Dati_Numero141*/
  QtPrevisioneGiacenza_DOp_Sett02: number;

  /** Reflected: __Dati_Numero142*/
  QtPrevisioneGiacenza_DOp_Sett03: number;

  /** Reflected: __Dati_Numero143*/
  QtPrevisioneGiacenza_DOp_Sett04: number;

  /** Reflected: __Dati_Numero144*/
  QtPrevisioneGiacenza_DOp_Sett05: number;

  /** Reflected: __Dati_Numero145*/
  QtPrevisioneGiacenza_DOp_Sett06: number;

  /** Reflected: __Dati_Numero146*/
  QtPrevisioneGiacenza_DOp_Sett07: number;

  /** Reflected: __Dati_Numero147*/
  QtPrevisioneGiacenza_DOp_Sett08: number;

  /** Reflected: __Dati_Numero148*/
  QtPrevisioneGiacenza_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero149*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett00: number;

  /** Reflected: __Dati_Numero150*/
  QtPrenotata_DOp_Sett00: number;

  /** Reflected: __Dati_Numero151*/
  QtPrenotata_DOp_Sett01: number;

  /** Reflected: __Dati_Numero152*/
  QtPrenotata_DOp_Sett02: number;

  /** Reflected: __Dati_Numero153*/
  QtPrenotata_DOp_Sett03: number;

  /** Reflected: __Dati_Numero154*/
  QtPrenotata_DOp_Sett04: number;

  /** Reflected: __Dati_Numero155*/
  QtPrenotata_DOp_Sett05: number;

  /** Reflected: __Dati_Numero156*/
  QtPrenotata_DOp_Sett06: number;

  /** Reflected: __Dati_Numero157*/
  QtPrenotata_DOp_Sett07: number;

  /** Reflected: __Dati_Numero158*/
  QtPrenotata_DOp_Sett08: number;

  /** Reflected: __Dati_Numero159*/
  QtPrenotata_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero160*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett01: number;

  /** Reflected: __Dati_Numero161*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett02: number;

  /** Reflected: __Dati_Numero162*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett03: number;

  /** Reflected: __Dati_Numero163*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett04: number;

  /** Reflected: __Dati_Numero164*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett05: number;

  /** Reflected: __Dati_Numero165*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett06: number;

  /** Reflected: __Dati_Numero166*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett07: number;

  /** Reflected: __Dati_Numero167*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett08: number;

  /** Reflected: __Dati_Numero168*/
  QtPrevisioneGiacenzaDisponibile_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero169*/
  QtDaOttenereCumulato_DOp_Sett01: number;

  /** Reflected: __Dati_Numero170*/
  QtDaOttenereCumulato_DOp_Sett02: number;

  /** Reflected: __Dati_Numero171*/
  QtDaOttenereCumulato_DOp_Sett03: number;

  /** Reflected: __Dati_Numero172*/
  QtDaOttenereCumulato_DOp_Sett04: number;

  /** Reflected: __Dati_Numero173*/
  QtDaOttenereCumulato_DOp_Sett05: number;

  /** Reflected: __Dati_Numero174*/
  QtDaOttenereCumulato_DOp_Sett06: number;

  /** Reflected: __Dati_Numero175*/
  QtDaOttenereCumulato_DOp_Sett07: number;

  /** Reflected: __Dati_Numero176*/
  QtDaOttenereCumulato_DOp_Sett08: number;

  /** Reflected: __Dati_Numero177*/
  QtDaOttenereCumulato_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero178*/
  FlagAggiornaDistinta: number;

  /** Reflected: __Dati_Numero179*/
  AnnoSettimana12: number;

  /** Reflected: __Dati_Numero180*/
  NumeroDecimaliQuantita: number;

  /** Reflected: __Dati_Numero181*/
  NumeroDecimaliValori: number;

  /** Reflected: __Dati_Numero182*/
  QtFabbisognoAttivo_DOp: number;

  /** Reflected: __Dati_Numero183*/
  GiorniApprovigionamentoStandard: number;

  /** Reflected: __Dati_Numero184*/
  FlagAggiornaDaFornitureeListini: number;

  /** Reflected: __Dati_Numero185*/
  SettimaneApprovigionamentoStandard: number;

  /** Reflected: __Dati_Numero186*/
  QtPropostaOrdineApprov_Sett00: number;

  /** Reflected: __Dati_Numero187*/
  QtPropostaOrdineApprov_Sett01: number;

  /** Reflected: __Dati_Numero188*/
  QtPropostaOrdineApprov_Sett02: number;

  /** Reflected: __Dati_Numero189*/
  QtPropostaOrdineApprov_Sett03: number;

  /** Reflected: __Dati_Numero190*/
  QtPropostaOrdineApprov_Sett04: number;

  /** Reflected: __Dati_Numero191*/
  QtPropostaOrdineApprov_Sett05: number;

  /** Reflected: __Dati_Numero192*/
  QtPropostaOrdineApprov_Sett06: number;

  /** Reflected: __Dati_Numero193*/
  QtPropostaOrdineApprov_Sett07: number;

  /** Reflected: __Dati_Numero194*/
  QtPropostaOrdineApprov_Sett08: number;

  /** Reflected: __Dati_Testo048*/
  IdTipoContenitore: string;

  /** Reflected: __Dati_Numero195*/
  FlagLinkTipoContenitore: number;

  /** Reflected: __Dati_Numero196*/
  GeneraCodiceSeriale_Anno: number;

  /** Reflected: __Dati_Numero197*/
  GeneraCodiceSeriale_UsaAnno: number;

  /** Reflected: __Dati_Testo049*/
  GeneraCodiceSeriale_Separatore: string;

  /** Reflected: __Dati_Numero198*/
  GeneraCodiceSeriale_OrdineAnno: number;

  /** Reflected: __Dati_Numero199*/
  GeneraCodiceSeriale_OrdineTesto: number;

  /** Reflected: __Dati_Numero200*/
  GeneraCodiceSeriale_CifreProgressivo: number;

  /** Reflected: __Dati_Numero201*/
  GeneraCodiceSeriale_Numero: number;

  /** Reflected: __Dati_Numero202*/
  GeneraCodiceSeriale_AnnoDueCifre: number;

  /** Reflected: __Dati_Numero203*/
  GeneraCodiceSeriale_AnnoVisibile: number;

  /** Reflected: __Dati_Numero204*/
  QtPrenotata_DOp_Sett11: number;

  /** Reflected: __Dati_Numero205*/
  QtPrenotata_DOp_Sett12: number;

  /** Reflected: __Dati_Numero206*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett09: number;

  /** Reflected: __Dati_Numero207*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett10: number;

  /** Reflected: __Dati_Numero208*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett11: number;

  /** Reflected: __Dati_Numero209*/
  QtPrevisioneGiacenzaDisponibile_DOp_Sett12: number;

  /** Reflected: __Dati_Numero210*/
  QtPrevisioneGiacenza_DOp_Sett10: number;

  /** Reflected: __Dati_Numero211*/
  QtPrevisioneGiacenza_DOp_Sett11: number;

  /** Reflected: __Dati_Numero212*/
  QtPrevisioneGiacenza_DOp_Sett12: number;

  /** Reflected: __Dati_Numero213*/
  QtPropostaOrdineApprov_Sett09: number;

  /** Reflected: __Dati_Numero214*/
  QtPropostaOrdineApprov_Sett10: number;

  /** Reflected: __Dati_Numero215*/
  QtPropostaOrdineApprov_Sett11: number;

  /** Reflected: __Dati_Numero216*/
  QtPropostaOrdineApprov_Sett12: number;

  /** Reflected: __Dati_Testo050*/
  TxtAnnoSettimana01: string;

  /** Reflected: __Dati_Testo051*/
  TxtAnnoSettimana02: string;

  /** Reflected: __Dati_Testo052*/
  TxtAnnoSettimana03: string;

  /** Reflected: __Dati_Testo053*/
  TxtAnnoSettimana04: string;

  /** Reflected: __Dati_Testo054*/
  TxtAnnoSettimana05: string;

  /** Reflected: __Dati_Testo055*/
  TxtAnnoSettimana06: string;

  /** Reflected: __Dati_Testo056*/
  TxtAnnoSettimana07: string;

  /** Reflected: __Dati_Testo057*/
  TxtAnnoSettimana08: string;

  /** Reflected: __Dati_Testo058*/
  TxtAnnoSettimana09: string;

  /** Reflected: __Dati_Testo059*/
  TxtAnnoSettimana10: string;

  /** Reflected: __Dati_Testo060*/
  TxtAnnoSettimana11: string;

  /** Reflected: __Dati_Testo061*/
  TxtAnnoSettimana12: string;

  /** Reflected: __Dati_Numero217*/
  SettimaneTrasportoStandard: number;

  /** Reflected: __Dati_Numero218*/
  SettimaneProduzioneStandard: number;

  /** Reflected: __Dati_Numero219*/
  SettimaneApprovigionamento10: number;

  /** Reflected: __Dati_Numero220*/
  SettimaneApprovigionamento01: number;

  /** Reflected: __Dati_Numero221*/
  SettimaneApprovigionamento02: number;

  /** Reflected: __Dati_Numero222*/
  SettimaneApprovigionamento03: number;

  /** Reflected: __Dati_Numero223*/
  SettimaneApprovigionamento04: number;

  /** Reflected: __Dati_Numero224*/
  SettimaneApprovigionamento05: number;

  /** Reflected: __Dati_Numero225*/
  SettimaneApprovigionamento06: number;

  /** Reflected: __Dati_Numero226*/
  SettimaneApprovigionamento07: number;

  /** Reflected: __Dati_Numero227*/
  SettimaneApprovigionamento08: number;

  /** Reflected: __Dati_Numero228*/
  SettimaneApprovigionamento09: number;

  /** Reflected: __Dati_Numero229*/
  SettimaneApprovigionamento11: number;

  /** Reflected: __Dati_Numero230*/
  SettimaneApprovigionamento12: number;

  /** Reflected: __Dati_Testo062*/
  FornituraStandard_IdSede: string;

  /** Reflected: __Dati_Numero231*/
  QtDaOttenere_DOp_Sett00: number;

  /** Reflected: __Dati_Numero232*/
  QtDaOttenere_DOp_Sett01: number;

  /** Reflected: __Dati_Numero233*/
  QtDaOttenere_DOp_Sett02: number;

  /** Reflected: __Dati_Numero234*/
  QtDaOttenere_DOp_Sett03: number;

  /** Reflected: __Dati_Numero235*/
  QtDaOttenere_DOp_Sett04: number;

  /** Reflected: __Dati_Numero236*/
  QtDaOttenere_DOp_Sett05: number;

  /** Reflected: __Dati_Numero237*/
  QtDaOttenere_DOp_Sett06: number;

  /** Reflected: __Dati_Numero238*/
  QtDaOttenere_DOp_Sett07: number;

  /** Reflected: __Dati_Numero239*/
  QtDaOttenere_DOp_Sett08: number;

  /** Reflected: __Dati_Numero240*/
  QtDaOttenere_DOp_Sett09: number;

  /** Reflected: __Dati_Numero241*/
  QtDaOttenere_DOp_Sett10: number;

  /** Reflected: __Dati_Numero242*/
  QtDaOttenere_DOp_Sett11: number;

  /** Reflected: __Dati_Numero243*/
  QtDaOttenere_DOp_Sett12: number;

  /** Reflected: __Dati_Numero244*/
  QtDaOttenere_DOp_SettOltre12: number;

  /** Reflected: __Dati_Numero245*/
  FlagAggiornaQuantitaDaSelezioni: number;

  /** Reflected: __Dati_Numero246*/
  QtDaSelezioniApprovigionamento_Sett00: number;

  /** Reflected: __Dati_Numero247*/
  QtDaSelezioniApprovigionamento_Sett01: number;

  /** Reflected: __Dati_Numero248*/
  QtDaSelezioniApprovigionamento_Sett02: number;

  /** Reflected: __Dati_Numero249*/
  QtDaSelezioniApprovigionamento_Sett03: number;

  /** Reflected: __Dati_Numero250*/
  QtDaSelezioniApprovigionamento_Sett04: number;

  /** Reflected: __Dati_Numero251*/
  QtDaSelezioniApprovigionamento_Sett05: number;

  /** Reflected: __Dati_Numero252*/
  QtDaSelezioniApprovigionamento_Sett06: number;

  /** Reflected: __Dati_Numero253*/
  QtDaSelezioniApprovigionamento_Sett07: number;

  /** Reflected: __Dati_Numero254*/
  QtDaSelezioniApprovigionamento_Sett08: number;

  /** Reflected: __Dati_Numero255*/
  QtDaSelezioniApprovigionamento_Sett09: number;

  /** Reflected: __Dati_Numero256*/
  QtDaSelezioniApprovigionamento_Sett10: number;

  /** Reflected: __Dati_Numero257*/
  QtDaSelezioniApprovigionamento_Sett11: number;

  /** Reflected: __Dati_Numero258*/
  QtDaSelezioniApprovigionamento_Sett12: number;

  /** Reflected: __Dati_Numero259*/
  QtDaSelezioniApprovigionamento_SettOltre12: number;

  /** Reflected: __Dati_Numero260*/
  QtSimulazionePrevisioneGiacenza_Sett00: number;

  /** Reflected: __Dati_Numero261*/
  QtSimulazionePrevisioneGiacenza_Sett01: number;

  /** Reflected: __Dati_Numero262*/
  QtSimulazionePrevisioneGiacenza_Sett02: number;

  /** Reflected: __Dati_Numero263*/
  QtSimulazionePrevisioneGiacenza_Sett03: number;

  /** Reflected: __Dati_Numero264*/
  QtSimulazionePrevisioneGiacenza_Sett04: number;

  /** Reflected: __Dati_Numero265*/
  QtSimulazionePrevisioneGiacenza_Sett05: number;

  /** Reflected: __Dati_Numero266*/
  QtSimulazionePrevisioneGiacenza_Sett06: number;

  /** Reflected: __Dati_Numero267*/
  QtSimulazionePrevisioneGiacenza_Sett07: number;

  /** Reflected: __Dati_Numero268*/
  QtSimulazionePrevisioneGiacenza_Sett08: number;

  /** Reflected: __Dati_Numero269*/
  QtSimulazionePrevisioneGiacenza_Sett09: number;

  /** Reflected: __Dati_Numero270*/
  QtSimulazionePrevisioneGiacenza_Sett10: number;

  /** Reflected: __Dati_Numero271*/
  QtSimulazionePrevisioneGiacenza_Sett11: number;

  /** Reflected: __Dati_Numero272*/
  QtSimulazionePrevisioneGiacenza_Sett12: number;

  /** Reflected: __Dati_Numero273*/
  QtSimulazionePrevisioneGiacenza_SettOltre12: number;

  /** Reflected: __Dati_Numero274*/
  QtSimulazionePrevisioneGiacenza: number;

  /** Reflected: __Dati_Numero275*/
  QtDaOttenere_DOp: number;

  /** Reflected: __Dati_Numero276*/
  FlagScaricoProduzione_DeduzioneAutomatica: number;

  /** Reflected: __Dati_Numero277*/
  FlagScaricoProduzione_QtProposta: number;

  /** Reflected: __Dati_Numero278*/
  FlagItemSelezionato: number;

  /** Reflected: __Dati_Numero279*/
  VItemUnitario_UltimoConsolidato: number;

  /** Reflected: __Dati_Data003*/
  DataVUltimoConsolidato: Date;

  /** Reflected: __Dati_Numero280*/
  VItemUnitario_Rolling: number;

  /** Reflected: __Dati_Numero281*/
  VGiacenza_Rolling: number;

  /** Reflected: __Dati_Numero282*/
  VPrevisioneGiacenza_Sett00_Rolling: number;

  /** Reflected: __Dati_Numero283*/
  VPrevisioneGiacenza_Sett01_Rolling: number;

  /** Reflected: __Dati_Numero284*/
  VPrevisioneGiacenza_Sett02_Rolling: number;

  /** Reflected: __Dati_Numero285*/
  VPrevisioneGiacenza_Sett03_Rolling: number;

  /** Reflected: __Dati_Numero286*/
  VPrevisioneGiacenza_Sett04_Rolling: number;

  /** Reflected: __Dati_Numero287*/
  VPrevisioneGiacenza_Sett05_Rolling: number;

  /** Reflected: __Dati_Numero288*/
  VPrevisioneGiacenza_Sett06_Rolling: number;

  /** Reflected: __Dati_Numero289*/
  VPrevisioneGiacenza_Sett07_Rolling: number;

  /** Reflected: __Dati_Numero290*/
  VPrevisioneGiacenza_Sett08_Rolling: number;

  /** Reflected: __Dati_Numero291*/
  VPrevisioneGiacenza_Sett09_Rolling: number;

  /** Reflected: __Dati_Numero292*/
  VPrevisioneGiacenza_Sett10_Rolling: number;

  /** Reflected: __Dati_Numero293*/
  VPrevisioneGiacenza_Sett11_Rolling: number;

  /** Reflected: __Dati_Numero294*/
  VPrevisioneGiacenza_Sett12_Rolling: number;

  /** Reflected: __Dati_Numero295*/
  VPrevisioneGiacenza_SettOltre12_Rolling: number;

  /** Reflected: __Dati_Data004*/
  DataVGiacenzaRolling: Date;

  /** Reflected: __Dati_Testo063*/
  IdInstallazione: string;

  /** Reflected: __Dati_Testo064*/
  FornituraStandard_IdFornitura: string;

  /** Reflected: __Dati_Numero296*/
  FlagTracciabilitaNecessaria: number;

  /** Reflected: __Dati_Numero297*/
  QtTracciabilita: number;

  /** Reflected: __Dati_Numero298*/
  DiffQtTracciabilitaQtGiacenza: number;

  /** Reflected: __Dati_Numero299*/
  GeneraCodiceSeriale_FlagGeneraAlCaricoFiniti: number;

  /** Reflected: __Dati_Numero300*/
  GeneraCodiceSeriale_FlagUsaSerialeLotto: number;

  /** Reflected: __Dati_Testo065*/
  GeneraSeriale_CodiceEsempio: string;

  /** Reflected: __Dati_Testo066*/
  GeneraSeriale_Espressione: string;

  /** Reflected: __Dati_Numero301*/
  AnnoCreazione: number;

  /** Reflected: __Dati_Numero302*/
  AnnoMeseCreazione: number;

  /** Reflected: __Dati_Testo067*/
  GeneraCodiceItem_AltroIdSottoFamigliaItemPerCodice: string;

  /** Reflected: __Dati_Numero303*/
  GeneraCodiceItem_FlagTipoCodice_Standard: number;

  /** Reflected: __Dati_Testo068*/
  GeneraCodiceItem_AltroIdFamigliaItemPerCodice: string;

  /** Reflected: __Dati_Numero304*/
  FlagAggiornaLink: number;

  /** Reflected: __Dati_Testo069*/
  CodificaClienteItemPrincipale_CodiceItemCliente: string;

  /** Reflected: __Dati_Testo070*/
  CodificaClienteItemPrincipale_DescrizioneItemCliente: string;

  /** Reflected: __Dati_Testo071*/
  CodificaClienteItemPrincipale_NumeroRevisione: string;

  /** Reflected: __Dati_Testo072*/
  CodificaClienteItemPrincipale_TxtAccountCliente: string;

  /** Reflected: __Dati_Testo073*/
  IdItemSostitutivo: string;

  /** Reflected: __Dati_Testo074*/
  TxtUtenteCreazione: string;

  /** Reflected: __Dati_Numero305*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp: number;

  /** Reflected: __Dati_Numero306*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett00: number;

  /** Reflected: __Dati_Numero307*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett01: number;

  /** Reflected: __Dati_Numero308*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett02: number;

  /** Reflected: __Dati_Numero309*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett03: number;

  /** Reflected: __Dati_Numero310*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett04: number;

  /** Reflected: __Dati_Numero311*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett05: number;

  /** Reflected: __Dati_Numero312*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett06: number;

  /** Reflected: __Dati_Numero313*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett07: number;

  /** Reflected: __Dati_Numero314*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett08: number;

  /** Reflected: __Dati_Numero315*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett09: number;

  /** Reflected: __Dati_Numero316*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett10: number;

  /** Reflected: __Dati_Numero317*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett11: number;

  /** Reflected: __Dati_Numero318*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_Sett12: number;

  /** Reflected: __Dati_Numero319*/
  QtPrevisioneGiacenzaSenzaFabbisogni_DOp_SettOltre12: number;

  /** Reflected: __Dati_Testo075*/
  IdDocumentoPrincipaleItem: string;

  /** Reflected: __Dati_Numero320*/
  FornituraStandard_FlagAcquisto: number;

  /** Reflected: __Dati_Numero321*/
  FornituraStandard_FlagProduzione: number;

  /** Reflected: __Dati_Testo076*/
  FornituraStandard_CodiceRiferimentoFornitore: string;

  /** Reflected: __Dati_Testo077*/
  TxtAccountProduttoreVincolato: string;

  /** Reflected: __Dati_Testo078*/
  JSON_ImpostazioniItem: string;

  /** Reflected: __Dati_Numero322*/
  FlagDifferenzeImpostazioniItemSottoFamiglia: number;

  /** Reflected: __Dati_Numero323*/
  ControlloEliminazione_FlagItemEliminabile: number;

  /** Reflected: __Dati_Numero324*/
  ControlloEliminazione_FlagAggiornaItemEliminabile: number;

  /** Reflected: __Dati_Numero325*/
  Cruscotto_FlagEscludi: number;

  /** Reflected: __Dati_Testo079*/
  InformazioniAggiuntive_ListaAStringa: string;

  /** Reflected: __Dati_Testo080*/
  IdTipoImballo: string;

  /** Reflected: __Dati_Testo081*/
  TxtTipoImballo: string;

  /** Reflected: __Dati_Numero326*/
  PaginaCatalogo: number;

  /** Reflected: __Dati_Data005*/
  DataAttivazione: Date;

  /** Reflected: __Dati_Data006*/
  DataDisattivazione: Date;

  /** Reflected: __Dati_Numero327*/
  GiorniDiAttivazione: number;

  /** Reflected: __Dati_Testo082*/
  CodiceTipoImballo: string;

  /** Reflected: __Dati_Testo083*/
  IdStatoItems: string;

  /** Reflected: __Dati_Numero328*/
  FlagItemOrdinato: number;

  /** Reflected: __Dati_Numero329*/
  FlagItemFabbisogno: number;

  /** Reflected: __Dati_Numero330*/
  FlagItemEntrata: number;

  /** Reflected: __Dati_Numero331*/
  FlagItemUscita: number;

  /** Reflected: __Dati_Numero332*/
  FlagItemRichiestoOrdineApprovvigionamento: number;

  /** Reflected: __Dati_Numero333*/
  FlagNovita: number;

  /** Reflected: __Dati_Numero334*/
  FlagRevisione: number;

  /** Reflected: __Dati_Data007*/
  StatiItems_DataCambioStatoSucccessivoAutomatico: Date;

  /** Reflected: __Dati_Numero335*/
  FlagAggiornaDaStatoItems: number;

  /** Reflected: __Dati_Testo084*/
  IdStatoItemsSuccessivo: string;

  /** Reflected: __Dati_Testo085*/
  StatiItems_IdStatoItemsESuccessivo: string;

  /** Reflected: __Dati_Numero336*/
  Master_FlagPossibileItemMaster: number;

  /** Reflected: __Dati_Numero337*/
  Master_FlagQuestoItemMaster: number;

  /** Reflected: __Dati_Numero338*/
  Master_FlagItemCorrelatoAMaster: number;

  /** Reflected: __Dati_Numero339*/
  BloccoImpostazioni_ImpostazioniGenerali: number;

  /** Reflected: __Dati_Numero340*/
  BloccoImpostazioni_FlagTipo: number;

  /** Reflected: __Dati_Numero341*/
  BloccoImpostazioni_Multimaga: number;

  /** Reflected: __Dati_Numero342*/
  BloccoImpostazioni_ScaricoProduzione: number;

  /** Reflected: __Dati_Numero343*/
  BloccoImpostazioni_TipiInfoAggiuntive: number;

  /** Reflected: __Dati_Numero344*/
  BloccoImpostazioni_Tracciabilita: number;

  /** Reflected: __Dati_Numero345*/
  BloccoImpostazioni_Controlli: number;

  /** Reflected: __Dati_Numero346*/
  BloccoImpostazioni_Valorizzazione: number;

  /** Reflected: __Dati_Numero347*/
  BloccoImpostazioni_TipiRicaviSpese: number;

  /** Reflected: __Dati_Numero348*/
  FlagDescrizioneDaInfoAggiuntive: number;

  /** Reflected: __Dati_Numero349*/
  FlagDescrizioneNonModificabile: number;

  /** Reflected: __Dati_Data008*/
  WIP_DataValorizzazione: Date;

  /** Reflected: __Dati_Numero350*/
  WIP_Valore: number;

  /** Reflected: __Dati_Numero351*/
  FlagAggiornaWIP: number;

  /** Reflected: __Dati_Testo088*/
  Catalogo_Gamma: string;

  /** Reflected: __Dati_Testo089*/
  TxtTipoProdotto: string;
}
