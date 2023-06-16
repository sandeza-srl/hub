export interface IVociDocOperativi {
  _id: string;

  /** Reflected: __Dati_Testo001*/
  IdDocOperativo: string;

  /** Reflected: __Dati_Numero001*/
  Uno: number;

  /** Reflected: __Dati_Testo002*/
  IdVoceDocOperativo: string;

  /** Reflected: __Dati_Testo003*/
  TxtItem: string;

  /** Reflected: __Dati_Numero002*/
  OrdineVoce: number;

  /** Reflected: __Dati_Testo004*/
  NoteInterne: string;

  /** Reflected: __Dati_Numero003*/
  PercentualeIva: number;

  /** Reflected: __Dati_Numero004*/
  QuantitaItem: number;

  /** Reflected: __Dati_Numero005*/
  QuantitaDefinitivoItem: number;

  /** Reflected: __Dati_Numero006*/
  QuantitaVariazioneItem: number;

  /** Reflected: __Dati_Numero007*/
  VIvaValuta: number;

  /** Reflected: __Dati_Numero008*/
  VUnitarioItemValuta: number;

  /** Reflected: __Dati_Numero009*/
  VTotaleValuta: number;

  /** Reflected: __Dati_Numero010*/
  VImponibileValuta: number;

  /** Reflected: __Dati_Data001*/
  DataEffettiva: Date;

  /** Reflected: __Dati_Testo005*/
  UnitaMisuraItem: string;

  /** Reflected: __Dati_Testo006*/
  SimboloValuta: string;

  /** Reflected: __Dati_Testo007*/
  IdAliquota: string;

  /** Reflected: __Dati_Testo008*/
  TxtAliquota: string;

  /** Reflected: __Dati_Testo009*/
  IdItem: string;

  /** Reflected: __Dati_Numero011*/
  VTotale: number;

  /** Reflected: __Dati_Numero012*/
  VImponibile: number;

  /** Reflected: __Dati_Numero013*/
  VIva: number;

  /** Reflected: __Dati_Numero014*/
  ConversioneValutaAPrincipale: number;

  /** Reflected: __Dati_Testo010*/
  LinguaPrincipale: string;

  /** Reflected: __Dati_Numero015*/
  FlagItem: number;

  /** Reflected: __Dati_Numero016*/
  VPercVariazioneUnitario: number;

  /** Reflected: __Dati_Numero017*/
  VPercVariazioniTotale: number;

  /** Reflected: __Dati_Numero018*/
  VUnitarioDefinitivoItemValuta: number;

  /** Reflected: __Dati_Numero019*/
  VUnitarioDefinitivoItem: number;

  /** Reflected: __Dati_Numero020*/
  VUnitarioItem: number;

  /** Reflected: __Dati_Numero021*/
  FlagIn: number;

  /** Reflected: __Dati_Numero022*/
  FlagOut: number;

  /** Reflected: __Dati_Testo011*/
  IdAccountEmittente: string;

  /** Reflected: __Dati_Testo012*/
  IdAccountPagatore: string;

  /** Reflected: __Dati_Testo013*/
  IdProgetto: string;

  /** Reflected: __Dati_Testo014*/
  IdFaseProgetto: string;

  /** Reflected: __Dati_Testo015*/
  IdTipoListino: string;

  /** Reflected: __Dati_Numero023*/
  ConversioneUmDaItemAFornitura: number;

  /** Reflected: __Dati_Testo016*/
  IdFornituraItem: string;

  /** Reflected: __Dati_Numero024*/
  VUnitarioFornituraValuta: number;

  /** Reflected: __Dati_Numero025*/
  VUnitarioDefinitivoFornituraValuta: number;

  /** Reflected: __Dati_Numero026*/
  VUnitarioDefinitivoFornitura: number;

  /** Reflected: __Dati_Numero027*/
  QuantitaFornitura: number;

  /** Reflected: __Dati_Testo017*/
  UnitaMisuraFornitura: string;

  /** Reflected: __Dati_Numero028*/
  FlagVoceLibera: number;

  /** Reflected: __Dati_Testo018*/
  IdVoceProgetto: string;

  /** Reflected: __Dati_Testo019*/
  CodiceItem: string;

  /** Reflected: __Dati_Testo020*/
  IdFamigliaItem: string;

  /** Reflected: __Dati_Testo021*/
  IdSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo022*/
  TxtFamigliaItem: string;

  /** Reflected: __Dati_Testo023*/
  TxtSottoFamigliaItem: string;

  /** Reflected: __Dati_Numero029*/
  QuantitaVariazioneFornitura: number;

  /** Reflected: __Dati_Numero030*/
  FlagUmDiverse: number;

  /** Reflected: __Dati_Testo024*/
  CodiceRiferimentoFornitore: string;

  /** Reflected: __Dati_Numero031*/
  QuantitaDefinitivoFornitura: number;

  /** Reflected: __Dati_Numero032*/
  VUnitarioFornitura: number;

  /** Reflected: __Dati_Numero033*/
  VImportoPreVariazioni: number;

  /** Reflected: __Dati_Numero034*/
  VVariazioniTotale: number;

  /** Reflected: __Dati_Numero035*/
  FlagTipoOrdineProduzione: number;

  /** Reflected: __Dati_Numero036*/
  FlagTipoDdt: number;

  /** Reflected: __Dati_Numero037*/
  FlagTipoGenericoAcquisto: number;

  /** Reflected: __Dati_Numero038*/
  FlagTipoGenericoVendita: number;

  /** Reflected: __Dati_Numero039*/
  FlagTipoRapportoLavoro: number;

  /** Reflected: __Dati_Numero040*/
  FlagCondizioni_InseribileDocContabili: number;

  /** Reflected: __Dati_Testo025*/
  IdIntervento: string;

  /** Reflected: __Dati_Testo026*/
  IdAccountOperatore: string;

  /** Reflected: __Dati_Testo027*/
  TxtAccountOperatore: string;

  /** Reflected: __Dati_Numero041*/
  FlagItemEntrata: number;

  /** Reflected: __Dati_Numero042*/
  FlagItemUscita: number;

  /** Reflected: __Dati_Numero043*/
  FlagItemFabbisogno: number;

  /** Reflected: __Dati_Numero044*/
  FlagItemOrdinato: number;

  /** Reflected: __Dati_Numero045*/
  FlagItemPrenotato: number;

  /** Reflected: __Dati_Numero046*/
  FlagItemRichiestoOrdineApprovigionamento: number;

  /** Reflected: __Dati_Testo028*/
  CodiceSottoFamigliaItem: string;

  /** Reflected: __Dati_Testo029*/
  CodiceFamigliaItem: string;

  /** Reflected: __Dati_Testo030*/
  IdVoceDocOperativoOrigineDiretti: string;

  /** Reflected: __Dati_Testo031*/
  IdMagazzinoGestitoOrigine: string;

  /** Reflected: __Dati_Testo032*/
  IdDocOperativoOrigineDiretti: string;

  /** Reflected: __Dati_Numero047*/
  FlagTipoOrdineCliente: number;

  /** Reflected: __Dati_Numero048*/
  FlagTipoOrdineAcquisto: number;

  /** Reflected: __Dati_Numero049*/
  FlagTipoRichiestaApprovigionamento: number;

  /** Reflected: __Dati_Numero050*/
  FlagTipoDocumentoMagazzino: number;

  /** Reflected: __Dati_Numero051*/
  FlagTipoRichiestaPreventivoApprovigionamento: number;

  /** Reflected: __Dati_Numero052*/
  FlagCondizioni_MovimentaMultiMagazzino: number;

  /** Reflected: __Dati_Numero053*/
  FlagStatoDocOperativo_Provvisorio: number;

  /** Reflected: __Dati_Testo033*/
  IdOfferta: string;

  /** Reflected: __Dati_Testo034*/
  IdVoceOfferta: string;

  /** Reflected: __Dati_Testo035*/
  IdTipoDocOperativo: string;

  /** Reflected: __Dati_Testo036*/
  IdTipoDocOperativoOrigine: string;

  /** Reflected: __Dati_Numero054*/
  FlagScaricaQtDocOrigine: number;

  /** Reflected: __Dati_Numero055*/
  ScaricoDaVociDestinazione_QuantitaItemScaricata: number;

  /** Reflected: __Dati_Numero056*/
  ScaricoDaVociDestinazione_QuantitaItemResidua: number;

  /** Reflected: __Dati_Numero057*/
  FlagVoceVisibile: number;

  /** Reflected: __Dati_Testo037*/
  IdAccountCompagnia: string;

  /** Reflected: __Dati_Numero058*/
  FlagVariazioneManuale: number;

  /** Reflected: __Dati_Testo038*/
  TxtTipoListinoItem: string;

  /** Reflected: __Dati_Testo039*/
  TxtFornituraItem: string;

  /** Reflected: __Dati_Testo040*/
  IdFaseProduzione: string;

  /** Reflected: __Dati_Testo041*/
  IdLottoProduzione: string;

  /** Reflected: __Dati_Testo042*/
  IdRigaOrdineProduzione: string;

  /** Reflected: __Dati_Testo043*/
  IdDocContabile: string;

  /** Reflected: __Dati_Testo044*/
  IdVociDocContabili: string;

  /** Reflected: __Dati_Numero059*/
  InserimentoInDocContabili_QuantitaItemResidua: number;

  /** Reflected: __Dati_Numero060*/
  FlagMagazzino: number;

  /** Reflected: __Dati_Numero061*/
  MultiMagazzino_QuantitaItemResiduaPerMovimenti: number;

  /** Reflected: __Dati_Numero062*/
  FlagStatoDocOperativo_Chiuso: number;

  /** Reflected: __Dati_Numero063*/
  FlagDocumentoDiCorrezioneMagazzino: number;

  /** Reflected: __Dati_DataOra001*/
  DataOraCreazione: Date;

  /** Reflected: __Dati_Numero064*/
  InserimentoInDocContabili_QuantitaItemScaricata: number;

  /** Reflected: __Dati_Numero065*/
  InserimentoInDocContabili_VImponibileValutaResiduo: number;

  /** Reflected: __Dati_Numero066*/
  InserimentoInDocContabili_VImponibileResiduo: number;

  /** Reflected: __Dati_Numero067*/
  InserimentoInDocContabili_QuantitaFornituraResidua: number;

  /** Reflected: __Dati_Testo045*/
  IdDocOperativoOrigineTutti: string;

  /** Reflected: __Dati_Testo046*/
  FlagSelezionatoTxt: string;

  /** Reflected: __Dati_DataOra002*/
  DataOraUltimaModifica: Date;

  /** Reflected: __Dati_Numero068*/
  Zero: number;

  /** Reflected: __Dati_Numero069*/
  FlagAggiornaValori01_ImpostazioneDaDocOperativo: number;

  /** Reflected: __Dati_Numero070*/
  FlagAggiornaValori07_Descrittivi: number;

  /** Reflected: __Dati_Numero071*/
  ConversioneValutaSuPrincipale: number;

  /** Reflected: __Dati_Numero072*/
  FlagAggiornaValori03_Quantita: number;

  /** Reflected: __Dati_Testo047*/
  IdAccountDestinatario: string;

  /** Reflected: __Dati_Testo048*/
  TxtAccountDocOperativo: string;

  /** Reflected: __Dati_Testo049*/
  TxtAccountDestinatario: string;

  /** Reflected: __Dati_Testo050*/
  LinguaDocumento: string;

  /** Reflected: __Dati_Testo051*/
  LinguaDocumento_DescrizioneAliquota: string;

  /** Reflected: __Dati_Testo052*/
  LinguaDocumento_DescrizioneItem: string;

  /** Reflected: __Dati_Testo053*/
  LinguaDocumento_NoteItem: string;

  /** Reflected: __Dati_Testo054*/
  LinguaPrincipale_DescrizioneAliquota: string;

  /** Reflected: __Dati_Testo055*/
  LinguaPrincipale_DescrizioneItem: string;

  /** Reflected: __Dati_Testo056*/
  LinguaPrincipale_NoteItem: string;

  /** Reflected: __Dati_Testo057*/
  IdValuta: string;

  /** Reflected: __Dati_Testo058*/
  SimboloValutaRidotto: string;

  /** Reflected: __Dati_Numero073*/
  VImportoPreVariazioniValuta: number;

  /** Reflected: __Dati_Testo059*/
  CodiceTxtItemAutomatico: string;

  /** Reflected: __Dati_Testo060*/
  LinguaDocumento_DescrizioneFamiglia: string;

  /** Reflected: __Dati_Testo061*/
  LinguaDocumento_DescrizioneSottoFamiglia: string;

  /** Reflected: __Dati_Testo062*/
  LinguaPrincipale_DescrizioneFamiglia: string;

  /** Reflected: __Dati_Testo063*/
  LinguaPrincipale_DescrizioneSottoFamiglia: string;

  /** Reflected: __Dati_Testo064*/
  IdImpianto: string;

  /** Reflected: __Dati_Testo065*/
  IdArticolo: string;

  /** Reflected: __Dati_Data002*/
  DataPrevista: Date;

  /** Reflected: __Dati_Data003*/
  DataRichiesta: Date;

  /** Reflected: __Dati_Numero074*/
  FlagScaricaImportoDocOrigine: number;

  /** Reflected: __Dati_Testo066*/
  IdAccountDocOperativo: string;

  /** Reflected: __Dati_Testo067*/
  IdAccountIntermediario: string;

  /** Reflected: __Dati_Numero075*/
  FlagMagaCespite: number;

  /** Reflected: __Dati_Numero076*/
  FlagMagaMateriaPrima: number;

  /** Reflected: __Dati_Numero077*/
  FlagMagaProdottoFinito: number;

  /** Reflected: __Dati_Numero078*/
  FlagMagaSemilavorato: number;

  /** Reflected: __Dati_Numero079*/
  FlagMagaValorizzaCosto: number;

  /** Reflected: __Dati_Numero080*/
  FlagMagaValorizzaPrezzo: number;

  /** Reflected: __Dati_Testo068*/
  IdVoceIntervento: string;

  /** Reflected: __Dati_Testo069*/
  IdVoceDocOperativoOrigineTutti: string;

  /** Reflected: __Dati_Testo070*/
  TxtAccountIntermediario: string;

  /** Reflected: __Dati_Numero081*/
  FlagAggiornaValori02_RiferimentiAltreTabelle: number;

  /** Reflected: __Dati_Numero082*/
  FlagAggiornaValori04_ValoriEconomici: number;

  /** Reflected: __Dati_Numero083*/
  FlagAggiornaValori06_Totali: number;

  /** Reflected: __Dati_Numero084*/
  FlagAggiornaValori05_IdRiferimento: number;

  /** Reflected: __Dati_Testo071*/
  TxtUtenteCreazione: string;

  /** Reflected: __Dati_Numero085*/
  AnnoSettimanaPrevista: number;

  /** Reflected: __Dati_Numero086*/
  AnnoSettimanaRichiesta: number;

  /** Reflected: __Dati_Numero087*/
  AnnoSettimanaEffettiva: number;

  /** Reflected: __Dati_Testo072*/
  IdItemFaseProduzione: string;

  /** Reflected: __Dati_Numero088*/
  ScaricoDaVociDestinazione_VImponibileResiduo: number;

  /** Reflected: __Dati_Numero089*/
  ScaricoDaVociDestinazione_VImponibileScaricato: number;

  /** Reflected: __Dati_Numero090*/
  ScaricoDaVociDestinazione_FlagSaldoManuale: number;

  /** Reflected: __Dati_Numero091*/
  MultiMagazzino_FlagSaldoManuale: number;

  /** Reflected: __Dati_Numero092*/
  InserimentoInDocContabili_FlagSaldoManuale: number;

  /** Reflected: __Dati_Numero093*/
  MultiMagazzino_FlagSaldoAutomatico: number;

  /** Reflected: __Dati_Numero094*/
  ScaricoDaVociDestinazione_FlagSaldoAutomatico: number;

  /** Reflected: __Dati_Numero095*/
  InserimentoInDocContabili_FlagSaldoAutomatico: number;

  /** Reflected: __Dati_Testo073*/
  GiorniApprovigionamento: string;

  /** Reflected: __Dati_Numero096*/
  FlagValorizzaPreventivo: number;

  /** Reflected: __Dati_Numero097*/
  FlagValorizzaConsuntivo: number;

  /** Reflected: __Dati_Numero098*/
  ScaricoDaVociDestinazione_PercAvanzamento: number;

  /** Reflected: __Dati_Testo074*/
  TxtSettimanaAnnoRichiesta: string;

  /** Reflected: __Dati_Numero099*/
  ConversioneUmDaFornituraAItem: number;

  /** Reflected: __Dati_Testo075*/
  Tracciabilita_Taglia: string;

  /** Reflected: __Dati_Testo076*/
  Tracciabilita_Colore: string;

  /** Reflected: __Dati_Testo077*/
  Tracciabilita_InfoExtra: string;

  /** Reflected: __Dati_Testo078*/
  Tracciabilita_Quantita: string;

  /** Reflected: __Dati_Numero100*/
  AnnoMeseEffettiva: number;

  /** Reflected: __Dati_Numero101*/
  AnnoMesePrevista: number;

  /** Reflected: __Dati_Numero102*/
  AnnoMeseRichiesta: number;

  /** Reflected: __Dati_Numero103*/
  NumSettimanaEffettiva: number;

  /** Reflected: __Dati_Numero104*/
  NumSettimanaPrevista: number;

  /** Reflected: __Dati_Numero105*/
  NumSettimanaRichiesta: number;

  /** Reflected: __Dati_Testo079*/
  IdTracciabilitaCollegato: string;

  /** Reflected: __Dati_Testo080*/
  IdItemOpzioneProd: string;

  /** Reflected: __Dati_Numero106*/
  ScaricoDaVociDestinazione_LimiteQtResiduaPiu: number;

  /** Reflected: __Dati_Numero107*/
  ScaricoDaVociDestinazione_LimiteQtResiduaMeno: number;

  /** Reflected: __Dati_Numero108*/
  ScaricoDaVociDestinazione_LimiteVImponibileResiduaPiu: number;

  /** Reflected: __Dati_Numero109*/
  ScaricoDaVociDestinazione_LimiteVImponibileResiduaMeno: number;

  /** Reflected: __Dati_Numero110*/
  FlagUtilizzatoMateriale: number;

  /** Reflected: __Dati_Testo081*/
  FlagTipoCassa: string;

  /** Reflected: __Dati_Testo082*/
  NumeroRevisioneCodiceItemCliente: string;

  /** Reflected: __Dati_Data004*/
  DataRevisioneCodiceItemCliente: Date;

  /** Reflected: __Dati_Testo083*/
  CodiceItemCliente: string;

  /** Reflected: __Dati_Testo084*/
  DescrizioneItemCliente: string;

  /** Reflected: __Dati_Testo085*/
  CodiceItemClienteRevisioneAutomatico: string;

  /** Reflected: __Dati_Numero111*/
  FlagListinoIvato: number;

  /** Reflected: __Dati_Numero112*/
  QuantitaSelezione: number;

  /** Reflected: __Dati_Testo086*/
  IdDocOperativoTemporaneoPerSelezione: string;

  /** Reflected: __Dati_Testo087*/
  Tracciabilita_CodiceLotto: string;

  /** Reflected: __Dati_Data005*/
  Tracciabilita_DataScadenza: Date;

  /** Reflected: __Dati_Testo088*/
  Tracciabilita_NumeroSerie: string;

  /** Reflected: __Dati_Numero113*/
  InserimentoInDocContabili_VIVaResiduo: number;

  /** Reflected: __Dati_Numero114*/
  InserimentoInDocContabili_VTotaleResiduo: number;

  /** Reflected: __Dati_Numero115*/
  NumeroDecimaliQuantita: number;

  /** Reflected: __Dati_Numero116*/
  NumeroDecimaliValori: number;

  /** Reflected: __Dati_Testo089*/
  IdRegistrazioneFaseProduzione: string;

  /** Reflected: __Dati_Numero117*/
  FlagInvioGestionale: number;

  /** Reflected: __Dati_Testo090*/
  StringaConfrontoInvioGestionale: string;

  /** Reflected: __Dati_Numero118*/
  VAppoggioValore1: number;

  /** Reflected: __Dati_Numero119*/
  VAppoggioValore2: number;

  /** Reflected: __Dati_Numero120*/
  VAppoggioValore3: number;

  /** Reflected: __Dati_Testo091*/
  DescrizioneCommercialeFornitura: string;

  /** Reflected: __Dati_Numero121*/
  FlagConversioneUmNonStandard: number;

  /** Reflected: __Dati_Numero122*/
  ScaricoDaVociDestinazione_PercResiduaPiu: number;

  /** Reflected: __Dati_Numero123*/
  ScaricoDaVociDestinazione_PercResiduaMeno: number;

  /** Reflected: __Dati_Testo092*/
  IdContenitore: string;

  /** Reflected: __Dati_Testo093*/
  IdSelezioneItem: string;

  /** Reflected: __Dati_Numero124*/
  QuantitaItemSegno: number;

  /** Reflected: __Dati_Numero125*/
  ScaricoDaVociDestinazione_QuantitaItemResiduaSegno: number;

  /** Reflected: __Dati_Testo094*/
  IdUtenteTemporaneoPerSelezione: string;

  /** Reflected: __Dati_Data006*/
  DataConfermata: Date;

  /** Reflected: __Dati_Testo095*/
  IdTemporaneoFatturazioneAutomatica: string;

  /** Reflected: __Dati_Numero126*/
  QtPerUmOpzioneProd: number;

  /** Reflected: __Dati_Testo096*/
  IdSchedaAttivitaControllo: string;

  /** Reflected: __Dati_Numero127*/
  AnnoMeseConfermata: number;

  /** Reflected: __Dati_Numero128*/
  AnnoSettimanaConfermata: number;

  /** Reflected: __Dati_Numero129*/
  FlagScaricoProduzione_DeduzioneAutomatica: number;

  /** Reflected: __Dati_Numero130*/
  FlagScaricoProduzione_QtProposta: number;

  /** Reflected: __Dati_Testo097*/
  IdInstallazione: string;

  /** Reflected: __Dati_Testo098*/
  IdNumeroSerieLottoProduzione: string;

  /** Reflected: __Dati_Numero131*/
  FlagAggiornaDaAttivitaControllo: number;

  /** Reflected: __Dati_Numero132*/
  SchedeAttivitaControllo_FlagCreazioneSchedeRichiesta: number;

  /** Reflected: __Dati_Numero133*/
  SchedeAttivitaControllo_FlagSchedeDaCreare: number;

  /** Reflected: __Dati_Numero134*/
  SchedeAttivitaControllo_FlagSchedeCreateAperte: number;

  /** Reflected: __Dati_Numero135*/
  SchedeAttivitaControllo_FlagSchedeCreateChiuse: number;

  /** Reflected: __Dati_Numero136*/
  SchedeAttivitaControllo_FlagMaxNumeroSchede: number;

  /** Reflected: __Dati_Testo099*/
  SchedeAttivitaControllo_TxtStatoScheda: string;

  /** Reflected: __Dati_Numero137*/
  QuantitaMinimaOrdineUmItem: number;

  /** Reflected: __Dati_Numero138*/
  MultipliVincolantiQuantitaFornitura: number;

  /** Reflected: __Dati_Numero139*/
  MultipliVincolantiQuantitaItem: number;

  /** Reflected: __Dati_Numero140*/
  QuantitaMinimaOrdineUmFornitura: number;

  /** Reflected: __Dati_Testo100*/
  IdVariazioneListinoApplicata: string;

  /** Reflected: __Dati_Testo101*/
  IdListinoItem: string;

  /** Reflected: __Dati_Numero141*/
  Tracciabilita_TracciabilitaNecessaria: number;

  /** Reflected: __Dati_Numero142*/
  FlagAggiornaTracciabilita: number;

  /** Reflected: __Dati_Numero143*/
  FlagAggiornaMovimentazioneMagazzino: number;

  /** Reflected: __Dati_Numero144*/
  Tracciabilita_MovimentazioneCompletata: number;

  /** Reflected: __Dati_Numero145*/
  MultiMagazzino_FlagMovimentazioneNecessaria: number;

  /** Reflected: __Dati_Numero146*/
  FlagCondizioni_LancioProduzioneRichiesto: number;

  /** Reflected: __Dati_Numero147*/
  FlagCondizioni_ScaricatoDaDocOperativo: number;

  /** Reflected: __Dati_Numero148*/
  LancioProduzione_FlagLancioNecessario: number;

  /** Reflected: __Dati_Numero149*/
  LancioProduzione_FlagCreazioneLottoCompletata: number;

  /** Reflected: __Dati_Numero150*/
  FlagAggiornaLancioProduzione: number;

  /** Reflected: __Dati_Numero151*/
  LancioProduzione_FlagCreazioneRigaCompletata: number;

  /** Reflected: __Dati_Numero152*/
  Tracciabilita_SaldoManuale: number;

  /** Reflected: __Dati_Numero153*/
  FlagAggiornaValori08_StatiDocOperativo: number;

  /** Reflected: __Dati_Numero154*/
  SchedeAttivitaControllo_FlagCreazioneSchedeCompletata: number;

  /** Reflected: __Dati_Numero155*/
  SchedeAttivitaControllo_FlagSaldoManuale: number;

  /** Reflected: __Dati_Numero156*/
  InserimentoInDocContabili_QuantitaFornituraScaricata: number;

  /** Reflected: __Dati_Numero157*/
  LancioProduzione_FlagSaldoManuale: number;

  /** Reflected: __Dati_Testo102*/
  CodiceCommercialeItem: string;

  /** Reflected: __Dati_Testo103*/
  CodificaClienteItemPrincipale_CodiceItemCliente: string;

  /** Reflected: __Dati_Testo104*/
  CodificaClienteItemPrincipale_DescrizioneItemCliente: string;

  /** Reflected: __Dati_Testo105*/
  CodificaClienteItemPrincipale_NumeroRevisione: string;

  /** Reflected: __Dati_Testo106*/
  CodificaClienteItemPrincipale_TxtAccountCliente: string;

  /** Reflected: __Dati_Testo107*/
  CodiceAmministrativoItem: string;

  /** Reflected: __Dati_Testo108*/
  CodiceRiferimentoEsternoVoce: string;

  /** Reflected: __Dati_Data007*/
  FE_DataInizioPeriodo: Date;

  /** Reflected: __Dati_Data008*/
  FE_DataFinePeriodo: Date;

  /** Reflected: __Dati_Testo109*/
  FE_TipoDato: string;

  /** Reflected: __Dati_Testo110*/
  FE_RiferimentoTesto: string;

  /** Reflected: __Dati_Testo111*/
  FE_CodiceCIG: string;

  /** Reflected: __Dati_Testo112*/
  FE_CodiceCUP: string;

  /** Reflected: __Dati_Testo113*/
  FE_NumeroOrdine: string;

  /** Reflected: __Dati_Data009*/
  FE_DataOrdine: Date;

  /** Reflected: __Dati_Testo114*/
  FE_FatturaCollegataCodice: string;

  /** Reflected: __Dati_Data010*/
  FE_FatturaCollegataData: Date;

  /** Reflected: __Dati_Testo115*/
  FE_RiferimentoAmministrazione: string;

  /** Reflected: __Dati_Numero158*/
  VItemUnitario_Rolling: number;

  /** Reflected: __Dati_Testo116*/
  Contenitori_IdVociProdottiContenuti: string;

  /** Reflected: __Dati_Numero159*/
  Contenitori_FlagAggiorna: number;

  /** Reflected: __Dati_Numero160*/
  Contenitori_VoceProdotto_FlagVoceContenitoreNecessaria: number;

  /** Reflected: __Dati_Testo117*/
  Contenitori_VoceProdotto_IdVoceContenitore: string;

  /** Reflected: __Dati_Numero161*/
  Contenitori_VoceProdotto_FlagVoceContenitoreOk: number;

  /** Reflected: __Dati_Numero162*/
  Contenitori_FlagVoceContenitore: number;

  /** Reflected: __Dati_Numero163*/
  FlagItemMovimentaContenitori: number;

  /** Reflected: __Dati_Numero164*/
  Contenitori_FlagVoceContenitoreOk: number;
}
