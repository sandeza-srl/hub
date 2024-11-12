export interface IDocOperativi {
  _id: string;

  /** Reflected: __Dati_Numero001*/
  Uno: number;

  /** Reflected: __Dati_Testo001*/
  CodiceTipoDocOperativo: string;

  /** Reflected: __Dati_Testo002*/
  IdTipoDocOperativo: string;

  /** Reflected: __Dati_Testo003*/
  TxtTipoDocOperativo: string;

  /** Reflected: __Dati_Testo004*/
  IdDocOperativo: string;

  /** Reflected: __Dati_Testo005*/
  IdAccountCompagnia: string;

  /** Reflected: __Dati_Testo006*/
  IdAccountOperatore: string;

  /** Reflected: __Dati_DataOra001*/
  DataOraCreazione: Date;

  /** Reflected: __Dati_Testo007*/
  CodiceDocOperativo: string;

  /** Reflected: __Dati_Data001*/
  DataDocOperativo: Date;

  /** Reflected: __Dati_Testo008*/
  IdAccountEmittente: string;

  /** Reflected: __Dati_Testo009*/
  IdAccountPagatore: string;

  /** Reflected: __Dati_Testo010*/
  IdAccountTutti: string;

  /** Reflected: __Dati_Testo011*/
  IdDocumentoCollegato: string;

  /** Reflected: __Dati_Testo012*/
  IdOfferta_ListaVoci: string;

  /** Reflected: __Dati_Testo013*/
  IdProgetto_ListaVoci: string;

  /** Reflected: __Dati_Testo014*/
  IdItem_ListaVoci: string;

  /** Reflected: __Dati_Numero002*/
  AnnoMeseDocOperativo: number;

  /** Reflected: __Dati_Numero003*/
  AnnoSettimanaDocOperativo: number;

  /** Reflected: __Dati_Testo015*/
  TxtAccountCompagnia: string;

  /** Reflected: __Dati_Testo016*/
  TxtAccountDocOperativo: string;

  /** Reflected: __Dati_Testo017*/
  TxtFattore: string;

  /** Reflected: __Dati_Numero004*/
  FlagIn: number;

  /** Reflected: __Dati_Numero005*/
  FlagOut: number;

  /** Reflected: __Dati_Numero006*/
  Progressivo: number;

  /** Reflected: __Dati_Numero007*/
  AnnoDocOperativo: number;

  /** Reflected: __Dati_Numero008*/
  FlagBloccato: number;

  /** Reflected: __Dati_Testo018*/
  CodiceEsterno: string;

  /** Reflected: __Dati_Numero009*/
  FlagCondizioni_CodiceEsternoObbligatorio: number;

  /** Reflected: __Dati_Testo019*/
  SimboloValuta: string;

  /** Reflected: __Dati_Numero010*/
  ConversioneValutaSuPrincipale: number;

  /** Reflected: __Dati_Numero011*/
  VDaPagare_06: number;

  /** Reflected: __Dati_Numero012*/
  VDaPagareSegno_07: number;

  /** Reflected: __Dati_Numero013*/
  VDaPagareValuta_06: number;

  /** Reflected: __Dati_Numero014*/
  VEntrataImponibile_04: number;

  /** Reflected: __Dati_Numero015*/
  VEntrataTotale_06: number;

  /** Reflected: __Dati_Numero016*/
  VEntrataTotaleDaPagare_07: number;

  /** Reflected: __Dati_Numero017*/
  VImponibile_03: number;

  /** Reflected: __Dati_Numero018*/
  VImponibileSegno_04: number;

  /** Reflected: __Dati_Numero019*/
  VImponibileValuta_03: number;

  /** Reflected: __Dati_Numero020*/
  VImponibileSenzaVariazioni_03: number;

  /** Reflected: __Dati_Numero021*/
  VImponibileSenzaVariazioniSegno_04: number;

  /** Reflected: __Dati_Numero022*/
  VImponibileSenzaVariazioniValuta_03: number;

  /** Reflected: __Dati_Numero023*/
  VIva_03: number;

  /** Reflected: __Dati_Numero024*/
  VIvaSegno_04: number;

  /** Reflected: __Dati_Numero025*/
  VIvaValuta_03: number;

  /** Reflected: __Dati_Numero026*/
  VPagato_03: number;

  /** Reflected: __Dati_Numero027*/
  VPagatoSegno_04: number;

  /** Reflected: __Dati_Numero028*/
  VPagatoValuta_03: number;

  /** Reflected: __Dati_Numero029*/
  VSconto_04: number;

  /** Reflected: __Dati_Numero030*/
  VScontoSegno_06: number;

  /** Reflected: __Dati_Numero031*/
  VScontoValuta_04: number;

  /** Reflected: __Dati_Numero032*/
  VTotale_04: number;

  /** Reflected: __Dati_Numero033*/
  VTotaleSegno_06: number;

  /** Reflected: __Dati_Numero034*/
  VTotaleValuta_04: number;

  /** Reflected: __Dati_Numero035*/
  VUscitaImponibile_04: number;

  /** Reflected: __Dati_Numero036*/
  VUscitaTotale_06: number;

  /** Reflected: __Dati_Numero037*/
  VUscitaTotaleDaPagare_07: number;

  /** Reflected: __Dati_Numero038*/
  VUscitaTotaleSegno_07: number;

  /** Reflected: __Dati_Numero039*/
  FlagPagamentoPresente: number;

  /** Reflected: __Dati_Numero040*/
  FlagPagatoTutto: number;

  /** Reflected: __Dati_Testo020*/
  IdDocContabile_ListaVoci: string;

  /** Reflected: __Dati_Testo021*/
  TxtDocOperativo: string;

  /** Reflected: __Dati_Data002*/
  DataInserimentoDocContabiliPrevista: Date;

  /** Reflected: __Dati_Numero041*/
  FlagTipoRapportoLavoro: number;

  /** Reflected: __Dati_Numero042*/
  FlagTipoGenericoAcquisto: number;

  /** Reflected: __Dati_Numero043*/
  FlagTipoGenericoVendita: number;

  /** Reflected: __Dati_Numero044*/
  FlagTipoDdt: number;

  /** Reflected: __Dati_Testo022*/
  TxtAccountOperatore: string;

  /** Reflected: __Dati_Testo023*/
  CodiceDocOperativoEsternoAutomatico: string;

  /** Reflected: __Dati_Numero045*/
  FlagCondizioni_InseribileDocContabili: number;

  /** Reflected: __Dati_Numero046*/
  FlagRipetitizionePossibile: number;

  /** Reflected: __Dati_Numero047*/
  FlagTipoOrdineClienteInterno: number;

  /** Reflected: __Dati_Numero048*/
  FlagTipoOrdineAcquisto: number;

  /** Reflected: __Dati_Numero049*/
  FlagTipoRichiestaPreventivoApprovigionamento: number;

  /** Reflected: __Dati_Testo024*/
  IdAccountVettore: string;

  /** Reflected: __Dati_Testo025*/
  IdAccountDestinatario: string;

  /** Reflected: __Dati_Numero050*/
  FlagItemEntrata: number;

  /** Reflected: __Dati_Numero051*/
  FlagItemUscita: number;

  /** Reflected: __Dati_Numero052*/
  FlagItemFabbisogno: number;

  /** Reflected: __Dati_Numero053*/
  FlagItemOrdinato: number;

  /** Reflected: __Dati_Numero054*/
  FlagItemPrenotato: number;

  /** Reflected: __Dati_Numero055*/
  FlagItemRichiestoOrdineApprovigionamento: number;

  /** Reflected: __Dati_Testo026*/
  IdTipiDocOperativo_OrigineDatiTutti: string;

  /** Reflected: __Dati_Numero056*/
  FlagStato01_Provvisorio: number;

  /** Reflected: __Dati_Numero057*/
  FlagPerStati_ChiusoManuale: number;

  /** Reflected: __Dati_Testo027*/
  TxtStatoDocOperativo: string;

  /** Reflected: __Dati_Testo028*/
  IdAccountDocOperativo: string;

  /** Reflected: __Dati_Testo029*/
  LinguaPrincipale: string;

  /** Reflected: __Dati_Testo030*/
  IdDocOperativiOrigineDiretti_ListaVoci: string;

  /** Reflected: __Dati_Testo031*/
  TxtAutomaticoDocOperativo: string;

  /** Reflected: __Dati_Testo032*/
  TxtMagazzinoGestitoDestinazione: string;

  /** Reflected: __Dati_Testo033*/
  IdMagazzinoGestitoDestinazione: string;

  /** Reflected: __Dati_Testo034*/
  IdMagazzinoGestitoOrigine: string;

  /** Reflected: __Dati_Testo035*/
  TxtMagazzinoGestitoOrigine: string;

  /** Reflected: __Dati_Numero058*/
  FlagCondizioni_MovimentaMultiMagazzino: number;

  /** Reflected: __Dati_Numero059*/
  FlagTipoRichiestaApprovigionamento: number;

  /** Reflected: __Dati_Numero060*/
  FlagTipoDocumentoMagazzino: number;

  /** Reflected: __Dati_Numero061*/
  FlagRegoleStati_ProvvisorioPossibile: number;

  /** Reflected: __Dati_Testo036*/
  IdFaseProgetto_ListaVoci: string;

  /** Reflected: __Dati_Numero062*/
  FlagStato08_DaCompletareInserDocContabili: number;

  /** Reflected: __Dati_Numero063*/
  FlagStato06_DaCompletareScaricamento: number;

  /** Reflected: __Dati_Numero064*/
  FlagGiacenzaGeneraleIN: number;

  /** Reflected: __Dati_Numero065*/
  FlagGiacenzaGeneraleOUT: number;

  /** Reflected: __Dati_Numero066*/
  FlagStato03_DaMovimentareStock: number;

  /** Reflected: __Dati_Testo037*/
  IdIntervento_ListaVoci: string;

  /** Reflected: __Dati_Testo038*/
  IdSedeDestinatario: string;

  /** Reflected: __Dati_Numero067*/
  OrdineStatoDocOperativo: number;

  /** Reflected: __Dati_Testo039*/
  IdRubricaDestinatario: string;

  /** Reflected: __Dati_Testo040*/
  TxtAccountDestinatario: string;

  /** Reflected: __Dati_Testo041*/
  FlagTipo_TipoLista: string;

  /** Reflected: __Dati_Testo042*/
  IdRubricaVettore: string;

  /** Reflected: __Dati_Testo043*/
  TxtAccountVettore: string;

  /** Reflected: __Dati_Testo044*/
  IdAccountIntermediario: string;

  /** Reflected: __Dati_Testo045*/
  TxtAccountIntermediario: string;

  /** Reflected: __Dati_Testo046*/
  IdRubricaIntermediario: string;

  /** Reflected: __Dati_Testo047*/
  IdMagazziniGestitiOriginePossibili: string;

  /** Reflected: __Dati_Testo048*/
  IdMagazziniGestitiDestinazionePossibili: string;

  /** Reflected: __Dati_Numero068*/
  FlagStato04_DaConcludereMovimentazioneStock: number;

  /** Reflected: __Dati_Numero069*/
  FlagDocumentoDiCorrezioneMagazzino: number;

  /** Reflected: __Dati_Numero070*/
  InserimentoInDocContabili_VImponibileResiduo_03: number;

  /** Reflected: __Dati_Numero071*/
  InserimentoInDocContabili_VImponibileSegnoResiduo_03: number;

  /** Reflected: __Dati_Numero072*/
  ConversioneValutaAPrincipale: number;

  /** Reflected: __Dati_Testo049*/
  IdTipoDocOperativoPerCodice: string;

  /** Reflected: __Dati_Testo050*/
  IdDocOperativiOrigineTutti_ListaVoci: string;

  /** Reflected: __Dati_Numero073*/
  AnnoMeseInsDocContabili: number;

  /** Reflected: __Dati_Numero074*/
  AnnoSettimanaInsDocContabili: number;

  /** Reflected: __Dati_Testo051*/
  TxtSettAnnoDataInsDocContabiliPrevista: string;

  /** Reflected: __Dati_Numero075*/
  Zero: number;

  /** Reflected: __Dati_Numero076*/
  AnnoMeseRegistrazioneDocOperativo: number;

  /** Reflected: __Dati_Numero077*/
  AnnoRegistrazioneDocOperativo: number;

  /** Reflected: __Dati_DataOra002*/
  DataOraUltimaModifica: Date;

  /** Reflected: __Dati_Data003*/
  DataRegistrazioneDocOperativo: Date;

  /** Reflected: __Dati_Testo052*/
  IdPeriodoContabile: string;

  /** Reflected: __Dati_Testo053*/
  TxtPeriodoContabile: string;

  /** Reflected: __Dati_Data004*/
  DataValoreValuta: Date;

  /** Reflected: __Dati_Numero078*/
  FlagAggiorna03_ValoriDaVoci: number;

  /** Reflected: __Dati_Numero079*/
  FlagAggiorna02_ValoriRiferimento: number;

  /** Reflected: __Dati_Testo054*/
  IdValuta: string;

  /** Reflected: __Dati_Testo055*/
  SimboloRidottoValuta: string;

  /** Reflected: __Dati_Testo056*/
  TxtValuta: string;

  /** Reflected: __Dati_Testo057*/
  LinguaDocumento: string;

  /** Reflected: __Dati_Testo058*/
  IdRubricaDocOperativo: string;

  /** Reflected: __Dati_Testo059*/
  IdSedeAnagraficaDocOperativo: string;

  /** Reflected: __Dati_Numero080*/
  FlagRispettaProgressivo: number;

  /** Reflected: __Dati_Testo060*/
  IdImpianto_ListaVoci: string;

  /** Reflected: __Dati_Testo061*/
  IdDocOperativiOrigineDiretti_InseritiDoc: string;

  /** Reflected: __Dati_Testo062*/
  IdDocOperativiOrigineDiretti_Tutti: string;

  /** Reflected: __Dati_Testo063*/
  IdFaseProduzione_ListaVoci: string;

  /** Reflected: __Dati_Numero081*/
  FlagAggiorna01_ValoriDaTipiDocOperativi: number;

  /** Reflected: __Dati_Numero082*/
  FlagAggiorna05_Stati: number;

  /** Reflected: __Dati_Testo064*/
  IdDocContabile_InseritiDoc: string;

  /** Reflected: __Dati_Testo065*/
  IdDocContabile_Tutti: string;

  /** Reflected: __Dati_Numero083*/
  FlagAggiorna04_Totali: number;

  /** Reflected: __Dati_Testo066*/
  IdDocOperativiOrigineTutti_InseritiDoc: string;

  /** Reflected: __Dati_Testo067*/
  IdDocOperativiOrigineTutti_Tutti: string;

  /** Reflected: __Dati_Testo068*/
  IdRigaOrdineProduzione_ListaVoci: string;

  /** Reflected: __Dati_Testo069*/
  IdIntervento_InseritiDoc: string;

  /** Reflected: __Dati_Testo070*/
  IdIntervento_Tutti: string;

  /** Reflected: __Dati_Testo071*/
  IdImpianto_InseritiDoc: string;

  /** Reflected: __Dati_Testo072*/
  IdImpianto_Tutti: string;

  /** Reflected: __Dati_Testo073*/
  IdItem_InseritiDoc: string;

  /** Reflected: __Dati_Testo074*/
  IdItem_Tutti: string;

  /** Reflected: __Dati_Testo075*/
  IdFaseProduzione_InseritiDoc: string;

  /** Reflected: __Dati_Testo076*/
  IdFaseProduzione_Tutti: string;

  /** Reflected: __Dati_Testo077*/
  IdOfferta_InseritiDoc: string;

  /** Reflected: __Dati_Testo078*/
  IdOfferta_Tutti: string;

  /** Reflected: __Dati_Testo079*/
  IdProgetto_InseritiDoc: string;

  /** Reflected: __Dati_Testo080*/
  IdProgetto_Tutti: string;

  /** Reflected: __Dati_Testo081*/
  IdRigaOrdineProduzione_InseritiDoc: string;

  /** Reflected: __Dati_Testo082*/
  IdRigaOrdineProduzione_Tutti: string;

  /** Reflected: __Dati_Numero084*/
  FlagAggiorna06_Totali2: number;

  /** Reflected: __Dati_Numero085*/
  FlagAggiorna07_Totali3: number;

  /** Reflected: __Dati_Testo083*/
  TxtUtenteCreazione: string;

  /** Reflected: __Dati_Testo084*/
  IdRubricaCompagnia: string;

  /** Reflected: __Dati_Testo085*/
  IdSedeCompagnia: string;

  /** Reflected: __Dati_Testo086*/
  IdSedeIntermediario: string;

  /** Reflected: __Dati_Testo087*/
  IdSedeVettore: string;

  /** Reflected: __Dati_Numero086*/
  FlagInvioMail_ReferenteCompagnia: number;

  /** Reflected: __Dati_Numero087*/
  FlagInvioMail_ReferenteDestinatario: number;

  /** Reflected: __Dati_Numero088*/
  FlagInvioMail_ReferenteDocOperativo: number;

  /** Reflected: __Dati_Numero089*/
  FlagInvioMail_ReferenteIntermediario: number;

  /** Reflected: __Dati_Numero090*/
  FlagInvioMail_ReferenteVettore: number;

  /** Reflected: __Dati_Testo088*/
  NomeRubricaPosizioneCompagnia: string;

  /** Reflected: __Dati_Testo089*/
  NomeRubricaPosizioneDocOperativo: string;

  /** Reflected: __Dati_Testo090*/
  NomeRubricaPosizioneVettore: string;

  /** Reflected: __Dati_Testo091*/
  NomeRubricaPosizioneIntermediario: string;

  /** Reflected: __Dati_Testo092*/
  NomeRubricaPosizioneDestinatario: string;

  /** Reflected: __Dati_Testo093*/
  IdItemFaseProduzione_InseritiDoc: string;

  /** Reflected: __Dati_Testo094*/
  IdItemFaseProduzione_ListaVoci: string;

  /** Reflected: __Dati_Testo095*/
  IdItemFaseProduzione_Tutti: string;

  /** Reflected: __Dati_Numero091*/
  FlagTipoOrdineProduzione: number;

  /** Reflected: __Dati_Numero092*/
  FlagRegoleStati_ChiusuraAutomatica: number;

  /** Reflected: __Dati_Numero093*/
  FlagStato07_DaInserireDocContabili: number;

  /** Reflected: __Dati_Numero094*/
  FlagStato05_DaScaricare: number;

  /** Reflected: __Dati_Numero095*/
  FlagStato09_DaChiudere: number;

  /** Reflected: __Dati_Testo096*/
  FlagStatiFatturabiliTxt: string;

  /** Reflected: __Dati_Testo097*/
  FlagStatiSequenzaTxt: string;

  /** Reflected: __Dati_Numero096*/
  FlagStato10_ChiusoAutomatico: number;

  /** Reflected: __Dati_Numero097*/
  FlagStato02_Aperto: number;

  /** Reflected: __Dati_Numero098*/
  FlagDaInserireDocContabili: number;

  /** Reflected: __Dati_Numero099*/
  FlagDisponibilita_CreabileMobile: number;

  /** Reflected: __Dati_Testo098*/
  FlagStatiDaValidareTxt: string;

  /** Reflected: __Dati_Numero100*/
  FlagStatiDaValidarePresenti: number;

  /** Reflected: __Dati_Testo099*/
  StampValidazione: string;

  /** Reflected: __Dati_Numero101*/
  FlagValidazione_DocOperativoValidato: number;

  /** Reflected: __Dati_Testo100*/
  FlagStatiValidatiTxt: string;

  /** Reflected: __Dati_Numero102*/
  FlagValidazione_DaValidare: number;

  /** Reflected: __Dati_Numero103*/
  FlagValorizzaPreventivo: number;

  /** Reflected: __Dati_Numero104*/
  FlagValorizzaConsuntivo: number;

  /** Reflected: __Dati_Numero105*/
  PercentualeAvanzamentoScaricamento: number;

  /** Reflected: __Dati_Numero106*/
  Invio_FlagInviato: number;

  /** Reflected: __Dati_Testo101*/
  Invio_TxtInvio: string;

  /** Reflected: __Dati_Numero107*/
  FlagCreaProgetto: number;

  /** Reflected: __Dati_Numero108*/
  NumSettimanaDocOperativo: number;

  /** Reflected: __Dati_Numero109*/
  FlagTipoCassa: number;

  /** Reflected: __Dati_Testo102*/
  IdMetodoPagamento: string;

  /** Reflected: __Dati_Testo103*/
  IdRegolaScadenza: string;

  /** Reflected: __Dati_Testo104*/
  TxtMetodoPagamento: string;

  /** Reflected: __Dati_Testo105*/
  TxtRegolaScadenza: string;

  /** Reflected: __Dati_Numero110*/
  VImponibileResiduoPerDestinazione_03: number;

  /** Reflected: __Dati_Numero111*/
  VImponibileScaricatoDaDestinazione_03: number;

  /** Reflected: __Dati_Testo106*/
  FlagSelezionatoPerFatturazione: string;

  /** Reflected: __Dati_Testo107*/
  IdTemporaneoFatturazioneAutomatica: string;

  /** Reflected: __Dati_Testo108*/
  TxtMetodoRegola: string;

  /** Reflected: __Dati_Testo109*/
  IdAccountSecondoVettore: string;

  /** Reflected: __Dati_Testo110*/
  TxtAccountSecondoVettore: string;

  /** Reflected: __Dati_Testo111*/
  IdSedeSecondoVettore: string;

  /** Reflected: __Dati_Testo112*/
  LogParametro: string;

  /** Reflected: __Dati_Numero112*/
  FlagCodicePrimaNumeroSerie: number;

  /** Reflected: __Dati_Numero113*/
  FlagStatoApertoConcluso: number;

  /** Reflected: __Dati_Numero114*/
  InserimentoInDocContabili_VIvaSegnoResidua_03: number;

  /** Reflected: __Dati_Numero115*/
  InserimentoInDocContabili_VTotaleSegnoResiduo_03: number;

  /** Reflected: __Dati_Testo113*/
  IdCassaBancaEmittente: string;

  /** Reflected: __Dati_Testo114*/
  IdCassaBancaPagatore: string;

  /** Reflected: __Dati_Numero116*/
  NumeroDecimaliValutaDocumento: number;

  /** Reflected: __Dati_Numero117*/
  NumeroDecimaliValutaPrincipale: number;

  /** Reflected: __Dati_Testo115*/
  CodiceCUP: string;

  /** Reflected: __Dati_Testo116*/
  CodiceCIG: string;

  /** Reflected: __Dati_Numero118*/
  FlagCreatoDaMobile: number;

  /** Reflected: __Dati_Testo117*/
  IdLottiProduzione_InseritiDoc: string;

  /** Reflected: __Dati_Testo118*/
  IdLottiProduzione_ListaVoci: string;

  /** Reflected: __Dati_Testo119*/
  IdLottiProduzione_Tutti: string;

  /** Reflected: __Dati_Testo120*/
  IdInstallazione: string;

  /** Reflected: __Dati_Numero119*/
  FlagCondizioni_LancioProduzioneRichiesto: number;

  /** Reflected: __Dati_Numero120*/
  FlagRegoleStati_AnnullamentoPossibile: number;

  /** Reflected: __Dati_Numero121*/
  FlagCondizioni_RichiestoInvio: number;

  /** Reflected: __Dati_Numero122*/
  FlagCondizioni_ScaricatoDaDocOperativo: number;

  /** Reflected: __Dati_Numero123*/
  FlagPerStati_MovimentazioneTracciabilitaDaCompletare: number;

  /** Reflected: __Dati_Numero124*/
  FlagPerStati_MovimentazioneMultiMagazzinoDaCompletare: number;

  /** Reflected: __Dati_Numero125*/
  FlagPerStati_CreazioneRigheDaCompletare: number;

  /** Reflected: __Dati_Numero126*/
  FlagPerStati_CreazioneLottiDaCompletare: number;

  /** Reflected: __Dati_Numero127*/
  FlagPerStati_InserimentoDocContabiliDaCompletare: number;

  /** Reflected: __Dati_Numero128*/
  FlagPerStati_DocOperativoChiusoForzatamente: number;

  /** Reflected: __Dati_Numero129*/
  FlagPerStati_DocOperativoAnnullato: number;

  /** Reflected: __Dati_Numero130*/
  FlagPerStati_DocOperativoProvvisorio: number;

  /** Reflected: __Dati_Numero131*/
  FlagPerStati_NumeroStato: number;

  /** Reflected: __Dati_Numero132*/
  FlagPerStati_DocOperativoDaCompletare: number;

  /** Reflected: __Dati_Testo121*/
  FlagPerStati_TxtCondizioniDaCompletare: string;

  /** Reflected: __Dati_Numero133*/
  FlagPerStati_DocOperativoChiuso: number;

  /** Reflected: __Dati_Testo122*/
  FlagPerStati_TxtStato: string;

  /** Reflected: __Dati_Numero134*/
  FlagDisponibilita_VisibileMobile: number;

  /** Reflected: __Dati_Numero135*/
  FlagDisponibilita_VisibileInventario: number;

  /** Reflected: __Dati_Numero136*/
  FlagDisponibilita_VisibileRaccoltaDati: number;

  /** Reflected: __Dati_Numero137*/
  FlagDisponibilita_VisibileWeb: number;

  /** Reflected: __Dati_Numero138*/
  FlagPerStati_CodiceEsternoDaInserire: number;

  /** Reflected: __Dati_Numero139*/
  FlagPerStati_DaInviare: number;

  /** Reflected: __Dati_Testo123*/
  FlagPerStati_TxtStatoCondizioniDaCompletareAutomatico: string;

  /** Reflected: __Dati_Numero140*/
  FlagPerStati_ScaricoVociDaCompletare: number;

  /** Reflected: __Dati_Numero141*/
  FlagPerStati_SchedeAttivitaControlloDaCreare: number;

  /** Reflected: __Dati_DataOra003*/
  AnnullamentoDocumento_DataOra: Date;

  /** Reflected: __Dati_Testo124*/
  AnnullamentoDocumento_TxtUtente: string;

  /** Reflected: __Dati_Testo125*/
  AnnullamentoDocumento_Note: string;

  /** Reflected: __Dati_Testo126*/
  IdAliquotaAnagrafica: string;

  /** Reflected: __Dati_Testo127*/
  IdRubricaSecondoVettore: string;

  /** Reflected: __Dati_Testo128*/
  NomeRubricaPosizioneSecondoVettore: string;

  /** Reflected: __Dati_Testo129*/
  IdSedeEmittente: string;

  /** Reflected: __Dati_Numero142*/
  FlagOperazionale_DocOperativoInEliminazione: number;

  /** Reflected: __Dati_DataOra004*/
  ChiusuraForzataDocumento_DataOra: Date;

  /** Reflected: __Dati_Testo130*/
  ChiusuraForzataDocumento_Note: string;

  /** Reflected: __Dati_Testo131*/
  ChiusuraForzataDocumento_TxtUtente: string;

  /** Reflected: __Dati_Numero143*/
  FlagRegoleStati_ChiusuraForzataPossibile: number;

  /** Reflected: __Dati_Numero144*/
  FlagPerStati_DaChiudereManualmente: number;

  /** Reflected: __Dati_Testo132*/
  IdTipoDocOperativoOrigineDiretti_InseritiDoc: string;

  /** Reflected: __Dati_Numero145*/
  FlagFiltroMultirichiesta: number;

  /** Reflected: __Dati_Numero146*/
  VincoliStatiPerRuoli_Invio_FlagLimitato: number;

  /** Reflected: __Dati_Numero147*/
  VincoliStatiPerRuoli_Fatturazione_FlagLimitato: number;

  /** Reflected: __Dati_Numero148*/
  VincoliStatiPerRuoli_Chiusura_FlagLimitato: number;

  /** Reflected: __Dati_Numero149*/
  VincoliStatiPerRuoli_Invio_FlagFirmaRichiesta: number;

  /** Reflected: __Dati_Numero150*/
  VincoliStatiPerRuoli_Fatturazione_FlagFirmaRichiesta: number;

  /** Reflected: __Dati_Numero151*/
  VincoliStatiPerRuoli_Chiusura_FlagFirmaRichiesta: number;

  /** Reflected: __Dati_Numero152*/
  VincoliStatiPerRuoli_Invio_FlagFirmaNecessaria: number;

  /** Reflected: __Dati_Testo133*/
  VincoliStatiPerRuoli_Invio_EspressioneCondizioneFirma: string;

  /** Reflected: __Dati_Testo134*/
  VincoliStatiPerRuoli_Fatturazione_EspressioneCondizioneFirma: string;

  /** Reflected: __Dati_Numero153*/
  VincoliStatiPerRuoli_Fatturazione_FlagFirmaNecessaria: number;

  /** Reflected: __Dati_Numero154*/
  VincoliStatiPerRuoli_Chiusura_FlagFirmaNecessaria: number;

  /** Reflected: __Dati_Testo135*/
  VincoliStatiPerRuoli_Chiusura_EspressioneCondizioneFirma: string;

  /** Reflected: __Dati_Numero155*/
  VincoliStatiPerRuoli_Invio_FlagFirmaApposta: number;

  /** Reflected: __Dati_Numero156*/
  VincoliStatiPerRuoli_Fatturazione_FlagFirmaApposta: number;

  /** Reflected: __Dati_Numero157*/
  VincoliStatiPerRuoli_Chiusura_FlagFirmaApposta: number;

  /** Reflected: __Dati_Testo136*/
  VincoliStatiPerRuoli_Invio_IdAccountOperatoreFirma: string;

  /** Reflected: __Dati_Testo137*/
  VincoliStatiPerRuoli_Fatturazione_IdAccountOperatoreFirma: string;

  /** Reflected: __Dati_Testo138*/
  VincoliStatiPerRuoli_Chiusura_IdAccountOperatoreFirma: string;

  /** Reflected: __Dati_Testo139*/
  VincoliStatiPerRuoli_Chiusura_TxtAccountOperatoreFirma: string;

  /** Reflected: __Dati_Testo140*/
  VincoliStatiPerRuoli_Fatturazione_TxtAccountOperatoreFirma: string;

  /** Reflected: __Dati_Testo141*/
  VincoliStatiPerRuoli_Invio_TxtAccountOperatoreFirma: string;

  /** Reflected: __Dati_DataOra005*/
  VincoliStatiPerRuoli_Invio_DataOraFirma: Date;

  /** Reflected: __Dati_DataOra006*/
  VincoliStatiPerRuoli_Fatturazione_DataOraFirma: Date;

  /** Reflected: __Dati_DataOra007*/
  VincoliStatiPerRuoli_Chiusura_DataOraFirma: Date;

  /** Reflected: __Dati_Contenitore001*/
  VincoliStatiPerRuoli_Chiusura_ImgFirma: string;

  /** Reflected: __Dati_Contenitore002*/
  VincoliStatiPerRuoli_Fatturazione_ImgFirma: string;

  /** Reflected: __Dati_Contenitore003*/
  VincoliStatiPerRuoli_Invio_ImgFirma: string;

  /** Reflected: __Dati_Numero158*/
  VincoliStatiPerRuoli_Invio_FlagValidato: number;

  /** Reflected: __Dati_Numero159*/
  VincoliStatiPerRuoli_Fatturazione_FlagValidato: number;

  /** Reflected: __Dati_Numero160*/
  VincoliStatiPerRuoli_Chiusura_FlagValidato: number;

  /** Reflected: __Dati_DataOra008*/
  VincoliStatiPerRuoli_DaConfermareValori_DataOraFirma: Date;

  /** Reflected: __Dati_Testo142*/
  VincoliStatiPerRuoli_DaConfermareValori_EspressioneCondizioneFirma: string;

  /** Reflected: __Dati_Numero161*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaApposta: number;

  /** Reflected: __Dati_Numero162*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaNecessaria: number;

  /** Reflected: __Dati_Numero163*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRichiesta: number;

  /** Reflected: __Dati_Numero164*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagLimitato: number;

  /** Reflected: __Dati_Numero165*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagValidato: number;

  /** Reflected: __Dati_Testo143*/
  VincoliStatiPerRuoli_DaConfermareValori_IdAccountOperatoreFirma: string;

  /** Reflected: __Dati_Contenitore004*/
  VincoliStatiPerRuoli_DaConfermareValori_ImgFirma: string;

  /** Reflected: __Dati_Testo144*/
  VincoliStatiPerRuoli_DaConfermareValori_TxtAccountOperatoreFirma: string;

  /** Reflected: __Dati_DataOra009*/
  VincoliStatiPerRuoli_DaConfermareDate_DataOraFirma: Date;

  /** Reflected: __Dati_Testo145*/
  VincoliStatiPerRuoli_DaConfermareDate_EspressioneCondizioneFirma: string;

  /** Reflected: __Dati_Numero166*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaApposta: number;

  /** Reflected: __Dati_Numero167*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaNecessaria: number;

  /** Reflected: __Dati_Numero168*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRichiesta: number;

  /** Reflected: __Dati_Numero169*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagLimitato: number;

  /** Reflected: __Dati_Numero170*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagValidato: number;

  /** Reflected: __Dati_Testo146*/
  VincoliStatiPerRuoli_DaConfermareDate_IdAccountOperatoreFirma: string;

  /** Reflected: __Dati_Contenitore005*/
  VincoliStatiPerRuoli_DaConfermareDate_ImgFirma: string;

  /** Reflected: __Dati_Testo147*/
  VincoliStatiPerRuoli_DaConfermareDate_TxtAccountOperatoreFirma: string;

  /** Reflected: __Dati_Numero171*/
  FlagIdAliquotaAnagrafica_NuovaModalita: number;

  /** Reflected: __Dati_Testo148*/
  IdTipiDocOperativo_OrigineDatiTutti_ConScarico: string;

  /** Reflected: __Dati_Numero172*/
  VincoliStatiPerRuoli_Chiusura_FlagRichiediPsw: number;

  /** Reflected: __Dati_Numero173*/
  VincoliStatiPerRuoli_Invio_FlagRichiediPsw: number;

  /** Reflected: __Dati_Numero174*/
  VincoliStatiPerRuoli_Fatturazione_FlagRichiediPsw: number;

  /** Reflected: __Dati_Numero175*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagRichiediPsw: number;

  /** Reflected: __Dati_Numero176*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagRichiediPsw: number;

  /** Reflected: __Dati_Numero177*/
  VincoliStatiPerRuoli_Chiusura_FlagBloccaDocumento: number;

  /** Reflected: __Dati_Numero178*/
  VincoliStatiPerRuoli_Invio_FlagBloccaDocumento: number;

  /** Reflected: __Dati_Numero179*/
  VincoliStatiPerRuoli_DaConfermareValori_FlagBloccaDocumento: number;

  /** Reflected: __Dati_Numero180*/
  VincoliStatiPerRuoli_Fatturazione_FlagBloccaDocumento: number;

  /** Reflected: __Dati_Numero181*/
  VincoliStatiPerRuoli_DaConfermareDate_FlagBloccaDocumento: number;

  /** Reflected: __Dati_Testo149*/
  GruppoLavoro_IdTipoGruppoLavoro: string;

  /** Reflected: __Dati_Testo150*/
  GruppoLavoro_IdGruppoLavoro: string;

  /** Reflected: __Dati_Testo151*/
  GruppoLavoro_TxtGruppoLavoro01: string;

  /** Reflected: __Dati_Testo152*/
  GruppoLavoro_IdReferente: string;

  /** Reflected: __Dati_Testo153*/
  GruppoLavoro_IdOperatoriGruppoLavoro01: string;

  /** Reflected: __Dati_Numero182*/
  GruppoLavoro_FlagGruppoLavoroPresente: number;

  /** Reflected: __Dati_Numero183*/
  GruppoLavoro_FlagImpostazioniGruppoEreditateDaOrigine: number;

  /** Reflected: __Dati_Testo154*/
  TxtNoteDocOperativo: string;

  /** Reflected: __Dati_Numero184*/
  GruppoLavoro_FlagAggiornaDati01: number;

  /** Reflected: __Dati_Testo155*/
  GruppoLavoro_IdReferenteGruppoLavoro: string;

  /** Reflected: __Dati_Numero185*/
  FlagRegoleStati_AperturaForzataPossibile: number;

  /** Reflected: __Dati_Numero186*/
  FlagPerStati_DocOperativoApertoForzatamente: number;

  /** Reflected: __Dati_Numero187*/
  FlagItemMovimentaContenitori: number;

  /** Reflected: __Dati_Numero188*/
  AnnoPerDichiarazioneIntento: number;

  /** Reflected: __Dati_Numero189*/
  InterconnessioneMagazzino_FlagAttiva: number;

  /** Reflected: __Dati_Testo156*/
  CodiceAccountDocOperativo: string;

  /** Reflected: __Dati_Testo157*/
  Integrazione_DatiVariAC: string;
}
