export interface ITipiDocOperativi {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Testo002*/ 
  TxtTipoDocOperativo: string;
  /** Reflected: __Dati_Numero002*/ 
  FlagIn: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagOut: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagTipoGenericoAcquisto: number;
  /** Reflected: __Dati_Numero005*/ 
  PercResiduaPiu: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagTipoDdt: number;
  /** Reflected: __Dati_Numero007*/ 
  PercResiduaMeno: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagTipoCassa: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagTipoGenericoVendita: number;
  /** Reflected: __Dati_Testo003*/ 
  CodiceTipoDocOperativo: string;
  /** Reflected: __Dati_Testo004*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero010*/ 
  FlagGeneraCodice: number;
  /** Reflected: __Dati_Testo005*/ 
  GeneraCodice_Testo: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtFattore: string;
  /** Reflected: __Dati_Numero011*/ 
  GeneraCodice_Progressivo: number;
  /** Reflected: __Dati_Numero012*/ 
  GeneraCodice_CifreProgressivo: number;
  /** Reflected: __Dati_Testo007*/ 
  GeneraCodice_ProssimoCodice: string;
  /** Reflected: __Dati_Numero013*/ 
  FlagTipoRapportoLavoro: number;
  /** Reflected: __Dati_Numero014*/ 
  FlagCondizioni_CodiceEsternoObbligatorio: number;
  /** Reflected: __Dati_Numero015*/ 
  FlagRipetizionePossibile: number;
  /** Reflected: __Dati_Numero016*/ 
  FlagCondizioni_InseribileDocContabili: number;
  /** Reflected: __Dati_Numero017*/ 
  FlagTipoOrdineAcquisto: number;
  /** Reflected: __Dati_Numero018*/ 
  FlagTipoOrdineClienteInterno: number;
  /** Reflected: __Dati_Numero019*/ 
  FlagTipoRichiestaPreventivoApprovigionamento: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagItemFabbisogno: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagItemRichiestoOrdineApprovigionamento: number;
  /** Reflected: __Dati_Numero022*/ 
  FlagItemOrdinato: number;
  /** Reflected: __Dati_Numero023*/ 
  FlagItemEntrata: number;
  /** Reflected: __Dati_Numero024*/ 
  FlagItemPrenotato: number;
  /** Reflected: __Dati_Testo008*/ 
  NomeFormatoStampa: string;
  /** Reflected: __Dati_Testo009*/ 
  IdTipoDocOperativo_OrigineDati: string;
  /** Reflected: __Dati_Numero025*/ 
  FlagItemUscita: number;
  /** Reflected: __Dati_Numero026*/ 
  FlagCondizioni_MovimentaMultiMagazzino: number;
  /** Reflected: __Dati_Numero027*/ 
  FlagTipoRichiestaApprovigionamento: number;
  /** Reflected: __Dati_Numero028*/ 
  FlagTipoDocumentoMagazzino: number;
  /** Reflected: __Dati_Numero029*/ 
  FlagRegoleStati_ProvvisorioPossibile: number;
  /** Reflected: __Dati_Numero030*/ 
  Multimagazzino_FlagGiacenzaGeneraleIN: number;
  /** Reflected: __Dati_Numero031*/ 
  Multimagazzino_FlagGiacenzaGeneraleOUT: number;
  /** Reflected: __Dati_Testo010*/ 
  Multimagazzino_IdMagazzinoGestitoOrigine: string;
  /** Reflected: __Dati_Testo011*/ 
  Multimagazzino_IdMagazzinoGestitoDestinazione: string;
  /** Reflected: __Dati_Numero032*/ 
  FlagDocumentoDiCorrezioneMagazzino: number;
  /** Reflected: __Dati_Testo012*/ 
  IdTipoDocumento: string;
  /** Reflected: __Dati_Testo013*/ 
  IdSottotipoDocumento: string;
  /** Reflected: __Dati_Testo014*/ 
  GeneraCodice_AltroIdTipoDocPerCodice: string;
  /** Reflected: __Dati_Numero033*/ 
  GeneraCodice_FlagUsaCodiceAltro: number;
  /** Reflected: __Dati_Testo015*/ 
  GeneraCodice_IdTipoDocOperativoPerCodice: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero034*/ 
  FlagErroriValori: number;
  /** Reflected: __Dati_Numero035*/ 
  FlagErroriValoriTxt: number;
  /** Reflected: __Dati_Numero036*/ 
  GeneraCodice_FlagTxtPeriodoContabileVisibile: number;
  /** Reflected: __Dati_Testo016*/ 
  GeneraCodice_IdPeriodoContabileTest: string;
  /** Reflected: __Dati_Numero037*/ 
  GeneraCodice_OrdineProgressivo: number;
  /** Reflected: __Dati_Numero038*/ 
  GeneraCodice_OrdineTesto: number;
  /** Reflected: __Dati_Numero039*/ 
  GeneraCodice_OrdineTxtPeriodoContabile: number;
  /** Reflected: __Dati_Testo017*/ 
  GeneraCodice_Separatore: string;
  /** Reflected: __Dati_Testo018*/ 
  GeneraCodice_TxtPeriodoContabileTest: string;
  /** Reflected: __Dati_Numero040*/ 
  Zero: number;
  /** Reflected: __Dati_Numero041*/ 
  FlagRispettaProgressivo: number;
  /** Reflected: __Dati_Numero042*/ 
  FlagInvioMail_ReferenteDocOperativo: number;
  /** Reflected: __Dati_Numero043*/ 
  FlagInvioMail_ReferenteDestinatario: number;
  /** Reflected: __Dati_Numero044*/ 
  FlagInvioMail_ReferenteCompagnia: number;
  /** Reflected: __Dati_Numero045*/ 
  FlagInvioMail_ReferenteVettore: number;
  /** Reflected: __Dati_Numero046*/ 
  FlagInvioMail_ReferenteIntermediario: number;
  /** Reflected: __Dati_Numero047*/ 
  FlagTipoOrdineProduzione: number;
  /** Reflected: __Dati_Testo019*/ 
  FlagTipo_TipoLista: string;
  /** Reflected: __Dati_Numero048*/ 
  FlagRegoleStati_ChiusuraAutomatica: number;
  /** Reflected: __Dati_Testo020*/ 
  FlagStatiFatturabiliTxt: string;
  /** Reflected: __Dati_Testo021*/ 
  FlagStatiSequenzaTxt: string;
  /** Reflected: __Dati_Numero049*/ 
  FlagDisponibilita_CreabileMobile: number;
  /** Reflected: __Dati_Testo022*/ 
  FlagStatiDaValidareTxt: string;
  /** Reflected: __Dati_Numero050*/ 
  FlagStatiDaValidarePresenti: number;
  /** Reflected: __Dati_Numero051*/ 
  FlagValorizzaPreventivo: number;
  /** Reflected: __Dati_Numero052*/ 
  FlagValorizzaConsuntivo: number;
  /** Reflected: __Dati_Numero053*/ 
  FlagCreaProgetto: number;
  /** Reflected: __Dati_Numero054*/ 
  FlagAggiorna_GeneraCodice: number;
  /** Reflected: __Dati_Numero055*/ 
  FlagDisponibilita_CreabileRaccoltaDati: number;
  /** Reflected: __Dati_Numero056*/ 
  FlagCondizioni_RichiestoInvio: number;
  /** Reflected: __Dati_Numero057*/ 
  FlagCondizioni_LancioProduzioneRichiesto: number;
  /** Reflected: __Dati_Numero058*/ 
  FlagRegoleStati_AnnullamentoPossibile: number;
  /** Reflected: __Dati_Numero059*/ 
  FlagCondizioni_ScaricatoDaDocOperativo: number;
  /** Reflected: __Dati_Numero060*/ 
  FlagAggiorna: number;
  /** Reflected: __Dati_Numero061*/ 
  FlagDisponibilita_VisibileInventario: number;
  /** Reflected: __Dati_Numero062*/ 
  FlagDisponibilita_VisibileWeb: number;
  /** Reflected: __Dati_Numero063*/ 
  FlagDisponibilita_CreabileCruscottoApprovigionamento: number;
  /** Reflected: __Dati_Testo023*/ 
  NuoviStati_IdTipoAttivita: string;
  /** Reflected: __Dati_Testo024*/ 
  NuoviStati_HelpIdMailTipoDocOperativo: string;
  /** Reflected: __Dati_Numero064*/ 
  FlagStampaVerticale: number;
  /** Reflected: __Dati_Numero065*/ 
  FlagStampaOrizzontale: number;
  /** Reflected: __Dati_Testo025*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Numero066*/ 
  Multimagazzino_FlagVincolaMovimentazioneSedeIN: number;
  /** Reflected: __Dati_Numero067*/ 
  Multimagazzino_FlagVincolaMovimentazioneSedeOUT: number;
  /** Reflected: __Dati_Numero068*/ 
  FlagUtilizzaNuovaScheda012022: number;
  /** Reflected: __Dati_Numero069*/ 
  FlagDisponibilita_CreabileWeb: number;
  /** Reflected: __Dati_Numero070*/ 
  FlagDisponibilita_VisibileRaccoltaDati: number;
  /** Reflected: __Dati_Numero071*/ 
  FlagDisponibilita_VisibileMobile: number;
  /** Reflected: __Dati_Numero072*/ 
  FlagDisponibilita_CreabileInventario: number;
  /** Reflected: __Dati_Testo026*/ 
  NomeScriptStampa: string;
  /** Reflected: __Dati_Numero073*/ 
  DataFatturazione_FlagUsaDataDocumento: number;
  /** Reflected: __Dati_Numero074*/ 
  DataFatturazione_FlagUsaDataRegistrazione: number;
  /** Reflected: __Dati_Numero075*/ 
  DataFatturazione_FlagUltimoGiornoMese: number;
  /** Reflected: __Dati_Numero076*/ 
  DataFatturazione_FlagNGiorniDopoData: number;
  /** Reflected: __Dati_Numero077*/ 
  DataFatturazione_NGiorniDopoData: number;
  /** Reflected: __Dati_Numero078*/ 
  FlagDocumentoInterno: number;
  /** Reflected: __Dati_Testo027*/ 
  NomeScriptSetup: string;
  /** Reflected: __Dati_Numero079*/ 
  FlagRegoleStati_ChiusuraForzataPossibile: number;
  /** Reflected: __Dati_Numero080*/ 
  DataEffettivaVoce_FlagUsaDataCorrente: number;
  /** Reflected: __Dati_Numero081*/ 
  DataEffettivaVoce_FlagUsaDataDocumento: number;
  /** Reflected: __Dati_Numero082*/ 
  DataEffettivaVoce_FlagUsaDataRegistrazione: number;
  /** Reflected: __Dati_Numero083*/ 
  ValoreVoci_ValoreUnitario_DaValorizzazioneMagazzino: number;
  /** Reflected: __Dati_Numero084*/ 
  FlagCondizioni_UtilizzaFatturazioneElettronica: number;
  /** Reflected: __Dati_Testo028*/ 
  NoteInterne: string;
  /** Reflected: __Dati_Numero085*/ 
  VincoliStatiPerRuoli_Invio_FlagLimitato: number;
  /** Reflected: __Dati_Testo029*/ 
  VincoliStatiPerRuoli_Invio_IdTipiRuoliAbilitati: string;
  /** Reflected: __Dati_Numero086*/ 
  VincoliStatiPerRuoli_Invio_FlagFirmaRichiesta: number;
  /** Reflected: __Dati_Testo030*/ 
  VincoliStatiPerRuoli_Invio_IdTipiRuoliAbilitatiPerFirma: string;
  /** Reflected: __Dati_Testo031*/ 
  VincoliStatiPerRuoli_Invio_EspressionePerCondizioniFirma: string;
  /** Reflected: __Dati_Numero087*/ 
  VincoliStatiPerRuoli_Invio_FlagCondizioniFirmaValidate: number;
  /** Reflected: __Dati_Numero088*/ 
  VincoliStatiPerRuoli_Invio_FlagFirmaRimuovibile: number;
  /** Reflected: __Dati_Numero089*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagLimitato: number;
  /** Reflected: __Dati_Testo032*/ 
  VincoliStatiPerRuoli_Fatturazione_IdTipiRuoliAbilitati: string;
  /** Reflected: __Dati_Numero090*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagFirmaRichiesta: number;
  /** Reflected: __Dati_Testo033*/ 
  VincoliStatiPerRuoli_Fatturazione_IdTipiRuoliAbilitatiPerFirma: string;
  /** Reflected: __Dati_Testo034*/ 
  VincoliStatiPerRuoli_Fatturazione_EspressionePerCondizioniFirma: string;
  /** Reflected: __Dati_Numero091*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagCondizioniFirmaValidate: number;
  /** Reflected: __Dati_Numero092*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagFirmaRimuovibile: number;
  /** Reflected: __Dati_Numero093*/ 
  VincoliStatiPerRuoli_Chiusura_FlagLimitato: number;
  /** Reflected: __Dati_Testo035*/ 
  VincoliStatiPerRuoli_Chiusura_IdTipiRuoliAbilitati: string;
  /** Reflected: __Dati_Numero094*/ 
  VincoliStatiPerRuoli_Chiusura_FlagFirmaRichiesta: number;
  /** Reflected: __Dati_Testo036*/ 
  VincoliStatiPerRuoli_Chiusura_IdTipiRuoliAbilitatiPerFirma: string;
  /** Reflected: __Dati_Testo037*/ 
  VincoliStatiPerRuoli_Chiusura_EspressionePerCondizioniFirma: string;
  /** Reflected: __Dati_Numero095*/ 
  VincoliStatiPerRuoli_Chiusura_FlagCondizioniFirmaValidate: number;
  /** Reflected: __Dati_Numero096*/ 
  VincoliStatiPerRuoli_Chiusura_FlagFirmaRimuovibile: number;
  /** Reflected: __Dati_Testo038*/ 
  VincoliStatiPerRuoli_DaConfermareValori_EspressionePerCondizioniFirma: string;
  /** Reflected: __Dati_Numero097*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagCondizioniFirmaValidate: number;
  /** Reflected: __Dati_Numero098*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRichiesta: number;
  /** Reflected: __Dati_Numero099*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagFirmaRimuovibile: number;
  /** Reflected: __Dati_Numero100*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagLimitato: number;
  /** Reflected: __Dati_Testo039*/ 
  VincoliStatiPerRuoli_DaConfermareValori_IdTipiRuoliAbilitati: string;
  /** Reflected: __Dati_Testo040*/ 
  VincoliStatiPerRuoli_DaConfermareValori_IdTipiRuoliAbilitatiPerFirma: string;
  /** Reflected: __Dati_Testo041*/ 
  VincoliStatiPerRuoli_DaConfermareDate_EspressionePerCondizioniFirma: string;
  /** Reflected: __Dati_Numero101*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagCondizioniFirmaValidate: number;
  /** Reflected: __Dati_Numero102*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRichiesta: number;
  /** Reflected: __Dati_Numero103*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagFirmaRimuovibile: number;
  /** Reflected: __Dati_Numero104*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagLimitato: number;
  /** Reflected: __Dati_Testo042*/ 
  VincoliStatiPerRuoli_DaConfermareDate_IdTipiRuoliAbilitati: string;
  /** Reflected: __Dati_Testo043*/ 
  VincoliStatiPerRuoli_DaConfermareDate_IdTipiRuoliAbilitatiPerFirma: string;
  /** Reflected: __Dati_Testo044*/ 
  IdTipoDocOperativo_OrigineDati_ConScarico: string;
  /** Reflected: __Dati_Numero105*/ 
  VincoliStatiPerRuoli_Chiusura_FlagRichiediPsw: number;
  /** Reflected: __Dati_Numero106*/ 
  VincoliStatiPerRuoli_Invio_FlagRichiediPsw: number;
  /** Reflected: __Dati_Numero107*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagRichiediPsw: number;
  /** Reflected: __Dati_Numero108*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagRichiediPsw: number;
  /** Reflected: __Dati_Numero109*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagRichiediPsw: number;
  /** Reflected: __Dati_Numero110*/ 
  VincoliStatiPerRuoli_Chiusura_FlagBloccaDocumento: number;
  /** Reflected: __Dati_Numero111*/ 
  VincoliStatiPerRuoli_DaConfermareDate_FlagBloccaDocumento: number;
  /** Reflected: __Dati_Numero112*/ 
  VincoliStatiPerRuoli_DaConfermareValori_FlagBloccaDocumento: number;
  /** Reflected: __Dati_Numero113*/ 
  VincoliStatiPerRuoli_Fatturazione_FlagBloccaDocumento: number;
  /** Reflected: __Dati_Numero114*/ 
  VincoliStatiPerRuoli_Invio_FlagBloccaDocumento: number;
  /** Reflected: __Dati_Testo045*/ 
  GruppoLavoro_IdTipoGruppoLavoro: string;
  /** Reflected: __Dati_Testo046*/ 
  GruppoLavoro_IdTipiRuoliTipoGruppoLavoro: string;
  /** Reflected: __Dati_Numero115*/ 
  GruppoLavoro_FlagGruppoLavoroRichiesto: number;
  /** Reflected: __Dati_Testo047*/ 
  TipiRuoli_IdTipiRuoli_Tutti: string;
  /** Reflected: __Dati_Numero116*/ 
  FlagRegoleStati_AperturaForzataPossibile: number;
  /** Reflected: __Dati_Numero117*/ 
  LucchettoDocumento_FlagBloccoParziale: number;
  /** Reflected: __Dati_Numero118*/ 
  LucchettoDocumento_EsclusiBlocco_CodiceEsterno: number;
  /** Reflected: __Dati_Numero119*/ 
  LucchettoDocumento_EsclusiBlocco_Descrizione: number;
  /** Reflected: __Dati_Numero120*/ 
  FlagItemMovimentaContenitori: number;
  /** Reflected: __Dati_Numero121*/ 
  InterconnessioneMagazzino_FlagAttivo: number
}