export interface IVociOfferte {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  ConversioneValuta: number;
  /** Reflected: __Dati_Numero003*/ 
  VCostiTotale: number;
  /** Reflected: __Dati_Numero004*/ 
  VCostoUnitario: number;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Testo001*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Testo002*/ 
  IdVoceOfferta: string;
  /** Reflected: __Dati_Testo003*/ 
  IdItem: string;
  /** Reflected: __Dati_Testo004*/ 
  IdValuta: string;
  /** Reflected: __Dati_Numero005*/ 
  MeseEsecuzione: number;
  /** Reflected: __Dati_Numero006*/ 
  VImponibile: number;
  /** Reflected: __Dati_Numero007*/ 
  VUnitario: number;
  /** Reflected: __Dati_Numero008*/ 
  QuantitaIniziale: number;
  /** Reflected: __Dati_Numero009*/ 
  VVariazioneUnitarioPercentuale: number;
  /** Reflected: __Dati_Testo005*/ 
  SimboloValuta: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtValuta: string;
  /** Reflected: __Dati_Testo007*/ 
  UnitaMisura: string;
  /** Reflected: __Dati_Numero010*/ 
  VIva: number;
  /** Reflected: __Dati_Numero011*/ 
  PercentualeIva: number;
  /** Reflected: __Dati_Numero012*/ 
  QuantitaVariazione: number;
  /** Reflected: __Dati_Numero013*/ 
  VPreVariazioni: number;
  /** Reflected: __Dati_Numero014*/ 
  VImponibileDefinitivo: number;
  /** Reflected: __Dati_Numero015*/ 
  VPreVariazioniDefinitivo: number;
  /** Reflected: __Dati_Numero016*/ 
  VTotaleDefinitivo: number;
  /** Reflected: __Dati_Numero017*/ 
  VVariazioniTotaleDefinitivo: number;
  /** Reflected: __Dati_Numero018*/ 
  VVariazioniTotale: number;
  /** Reflected: __Dati_Numero019*/ 
  QuantitaDefinitiva: number;
  /** Reflected: __Dati_Numero020*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero021*/ 
  VIvaDefinitivo: number;
  /** Reflected: __Dati_Testo008*/ 
  Ordine: string;
  /** Reflected: __Dati_Testo009*/ 
  IdCapitolo: string;
  /** Reflected: __Dati_Testo010*/ 
  Lingua: string;
  /** Reflected: __Dati_Numero022*/ 
  VMargine: number;
  /** Reflected: __Dati_Numero023*/ 
  VMarginePercentuale: number;
  /** Reflected: __Dati_Numero024*/ 
  FlagItem: number;
  /** Reflected: __Dati_Testo011*/ 
  IdListinoItem: string;
  /** Reflected: __Dati_Numero025*/ 
  QuantitaMinima: number;
  /** Reflected: __Dati_Testo012*/ 
  IdTipoFatturazione: string;
  /** Reflected: __Dati_Numero026*/ 
  FlagVendita: number;
  /** Reflected: __Dati_Testo013*/ 
  FlagVenditaVedi: string;
  /** Reflected: __Dati_Numero027*/ 
  FlagNoleggio: number;
  /** Reflected: __Dati_Testo014*/ 
  IdTipoListino: string;
  /** Reflected: __Dati_Numero028*/ 
  FlagContribuisceCosto: number;
  /** Reflected: __Dati_Testo015*/ 
  FlagContribuisceCostoVedi: string;
  /** Reflected: __Dati_Numero029*/ 
  FlagContribuiscePrezzo: number;
  /** Reflected: __Dati_Testo016*/ 
  FlagContribuiscePrezzoVedi: string;
  /** Reflected: __Dati_Numero030*/ 
  FlagIncluso: number;
  /** Reflected: __Dati_Testo017*/ 
  FlagInclusoOpzionaleVedi: string;
  /** Reflected: __Dati_Testo018*/ 
  FlagNoleggioVenditaVedi: string;
  /** Reflected: __Dati_Numero031*/ 
  Livello: number;
  /** Reflected: __Dati_Numero032*/ 
  OrdineVisualizzazione: number;
  /** Reflected: __Dati_Testo019*/ 
  LivelloConvertito: string;
  /** Reflected: __Dati_Testo020*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtAliquota: string;
  /** Reflected: __Dati_Data002*/ 
  DataEsecuzione: Date;
  /** Reflected: __Dati_Numero033*/ 
  VUnitarioDefinitivo: number;
  /** Reflected: __Dati_Numero034*/ 
  VVariazioneValore: number;
  /** Reflected: __Dati_Numero035*/ 
  VVariazioniTotalePerc: number;
  /** Reflected: __Dati_Numero036*/ 
  VCostiTotaleDefinitivo: number;
  /** Reflected: __Dati_Testo022*/ 
  TxInclusoOpzionale: string;
  /** Reflected: __Dati_Numero037*/ 
  FlagTitoloAuto: number;
  /** Reflected: __Dati_Testo023*/ 
  FlagTitoloAutoVedi: string;
  /** Reflected: __Dati_Numero038*/ 
  FlagNoteAuto: number;
  /** Reflected: __Dati_Testo024*/ 
  FlagNoteAutoVedi: string;
  /** Reflected: __Dati_Testo025*/ 
  TxtTitoloManuale: string;
  /** Reflected: __Dati_Testo026*/ 
  TxtTitoloItem: string;
  /** Reflected: __Dati_Testo027*/ 
  TxtTitoloCalcolato: string;
  /** Reflected: __Dati_Testo028*/ 
  IdVoceOffertaPadre: string;
  /** Reflected: __Dati_Testo029*/ 
  TxtNoteItem: string;
  /** Reflected: __Dati_Testo030*/ 
  TxtNoteCalcolato: string;
  /** Reflected: __Dati_Testo031*/ 
  TxtNoteManuale: string;
  /** Reflected: __Dati_Testo032*/ 
  CodiceOfferta: string;
  /** Reflected: __Dati_Testo033*/ 
  CodiceItem: string;
  /** Reflected: __Dati_Testo034*/ 
  IdFornituraItem: string;
  /** Reflected: __Dati_Testo035*/ 
  IdAccountClienteFinale: string;
  /** Reflected: __Dati_Testo036*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo037*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo038*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo039*/ 
  TxtSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo040*/ 
  TxtFamigliaItem: string;
  /** Reflected: __Dati_Numero039*/ 
  FlagRiassume: number;
  /** Reflected: __Dati_Testo041*/ 
  FlagRiassumeVedi: string;
  /** Reflected: __Dati_Testo042*/ 
  IdRiassuntoPadre: string;
  /** Reflected: __Dati_Numero040*/ 
  FlagRiassunto: number;
  /** Reflected: __Dati_Numero041*/ 
  FlagVariazioneManuale: number;
  /** Reflected: __Dati_Numero042*/ 
  FlagVariazioneManualeVedi: number;
  /** Reflected: __Dati_Numero043*/ 
  VRicaricoPercentuale: number;
  /** Reflected: __Dati_Testo043*/ 
  CodiceFamigliaItem: string;
  /** Reflected: __Dati_Testo044*/ 
  CodiceSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo045*/ 
  IdAccountDistributore: string;
  /** Reflected: __Dati_Numero044*/ 
  VProvvigioni: number;
  /** Reflected: __Dati_Numero045*/ 
  VProvvigioniPercentuale: number;
  /** Reflected: __Dati_Numero046*/ 
  FlagEscludiProvvigioni: number;
  /** Reflected: __Dati_Data003*/ 
  DataScadenza: Date;
  /** Reflected: __Dati_Numero047*/ 
  FlagInserisciDataConsegna: number;
  /** Reflected: __Dati_Testo046*/ 
  TestoLiberoVociOfferta: string;
  /** Reflected: __Dati_Numero048*/ 
  VTargetPrice: number;
  /** Reflected: __Dati_Numero049*/ 
  PercScostamentoTarget: number;
  /** Reflected: __Dati_Testo047*/ 
  IdRevisione: string;
  /** Reflected: __Dati_Testo048*/ 
  CampoStampaOffertaScaglioni: string;
  /** Reflected: __Dati_Testo049*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_Numero050*/ 
  Zero: number;
  /** Reflected: __Dati_Numero051*/ 
  Scaglione_FlagAggiornaDaCostBreakdown: number;
  /** Reflected: __Dati_Numero052*/ 
  Scaglione_CostoRiclassificato_CTADT: number;
  /** Reflected: __Dati_Numero053*/ 
  Scaglione_CostoRiclassificato_CTFT: number;
  /** Reflected: __Dati_Numero054*/ 
  Scaglione_CostoRiclassificato_CTIngT: number;
  /** Reflected: __Dati_Numero055*/ 
  Scaglione_CostoRiclassificato_CTLET: number;
  /** Reflected: __Dati_Numero056*/ 
  Scaglione_CostoRiclassificato_CTLT: number;
  /** Reflected: __Dati_Numero057*/ 
  Scaglione_CostoRiclassificato_CTMT_Buy: number;
  /** Reflected: __Dati_Numero058*/ 
  Scaglione_CostoRiclassificato_CTPnT: number;
  /** Reflected: __Dati_Numero059*/ 
  Scaglione_CostoRiclassificato_CTProgT: number;
  /** Reflected: __Dati_Numero060*/ 
  Scaglione_CostoRiclassificato_CTPT: number;
  /** Reflected: __Dati_Numero061*/ 
  Scaglione_CostoRiclassificato_CTQT: number;
  /** Reflected: __Dati_Numero062*/ 
  Scaglione_CostoRiclassificato_CTST: number;
  /** Reflected: __Dati_Numero063*/ 
  Scaglione_CostoRiclassificato_CTT: number;
  /** Reflected: __Dati_Numero064*/ 
  Scaglione_CostoRiclassificato_CTTRAT: number;
  /** Reflected: __Dati_Numero065*/ 
  Scaglione_CostoRiclassificato_CTUt_Buy: number;
  /** Reflected: __Dati_Numero066*/ 
  Scaglione_CostoRiclassificato_CUADT: number;
  /** Reflected: __Dati_Numero067*/ 
  Scaglione_CostoRiclassificato_CUFT: number;
  /** Reflected: __Dati_Numero068*/ 
  Scaglione_CostoRiclassificato_CUIngT: number;
  /** Reflected: __Dati_Numero069*/ 
  Scaglione_CostoRiclassificato_CULET: number;
  /** Reflected: __Dati_Numero070*/ 
  Scaglione_CostoRiclassificato_CULT: number;
  /** Reflected: __Dati_Numero071*/ 
  Scaglione_CostoRiclassificato_CUMT_Buy: number;
  /** Reflected: __Dati_Numero072*/ 
  Scaglione_CostoRiclassificato_CUPnT: number;
  /** Reflected: __Dati_Numero073*/ 
  Scaglione_CostoRiclassificato_CUProgT: number;
  /** Reflected: __Dati_Numero074*/ 
  Scaglione_CostoRiclassificato_CUPT: number;
  /** Reflected: __Dati_Numero075*/ 
  Scaglione_CostoRiclassificato_CUQT: number;
  /** Reflected: __Dati_Numero076*/ 
  Scaglione_CostoRiclassificato_CUST: number;
  /** Reflected: __Dati_Numero077*/ 
  Scaglione_CostoRiclassificato_CUT: number;
  /** Reflected: __Dati_Numero078*/ 
  Scaglione_CostoRiclassificato_CUTRAT: number;
  /** Reflected: __Dati_Numero079*/ 
  Scaglione_CostoRiclassificato_CUUt_Buy: number;
  /** Reflected: __Dati_Numero080*/ 
  Scaglione_CTADT: number;
  /** Reflected: __Dati_Numero081*/ 
  Scaglione_CTFT: number;
  /** Reflected: __Dati_Numero082*/ 
  Scaglione_CTIngT: number;
  /** Reflected: __Dati_Numero083*/ 
  Scaglione_CTLET: number;
  /** Reflected: __Dati_Numero084*/ 
  Scaglione_CTLT: number;
  /** Reflected: __Dati_Numero085*/ 
  Scaglione_CTMT: number;
  /** Reflected: __Dati_Numero086*/ 
  Scaglione_CTPnT: number;
  /** Reflected: __Dati_Numero087*/ 
  Scaglione_CTProgT: number;
  /** Reflected: __Dati_Numero088*/ 
  Scaglione_CTPT: number;
  /** Reflected: __Dati_Numero089*/ 
  Scaglione_CTQT: number;
  /** Reflected: __Dati_Numero090*/ 
  Scaglione_CTST: number;
  /** Reflected: __Dati_Numero091*/ 
  Scaglione_CTT: number;
  /** Reflected: __Dati_Numero092*/ 
  Scaglione_CTT_Ricarico: number;
  /** Reflected: __Dati_Numero093*/ 
  Scaglione_CTT_UnitaBuone: number;
  /** Reflected: __Dati_Numero094*/ 
  Scaglione_CTTRAT: number;
  /** Reflected: __Dati_Numero095*/ 
  Scaglione_CTUtT: number;
  /** Reflected: __Dati_Numero096*/ 
  Scaglione_CUADT: number;
  /** Reflected: __Dati_Numero097*/ 
  Scaglione_CUFT: number;
  /** Reflected: __Dati_Numero098*/ 
  Scaglione_CUIngT: number;
  /** Reflected: __Dati_Numero099*/ 
  Scaglione_CULET: number;
  /** Reflected: __Dati_Numero100*/ 
  Scaglione_CULT: number;
  /** Reflected: __Dati_Numero101*/ 
  Scaglione_CUMT: number;
  /** Reflected: __Dati_Numero102*/ 
  Scaglione_CUPnT: number;
  /** Reflected: __Dati_Numero103*/ 
  Scaglione_CUProgT: number;
  /** Reflected: __Dati_Numero104*/ 
  Scaglione_CUPT: number;
  /** Reflected: __Dati_Numero105*/ 
  Scaglione_CUQT: number;
  /** Reflected: __Dati_Numero106*/ 
  Scaglione_CUST: number;
  /** Reflected: __Dati_Numero107*/ 
  Scaglione_CUT: number;
  /** Reflected: __Dati_Numero108*/ 
  Scaglione_CUT_Ricarico: number;
  /** Reflected: __Dati_Numero109*/ 
  Scaglione_CUT_UnitaBuone: number;
  /** Reflected: __Dati_Numero110*/ 
  Scaglione_CUTRAT: number;
  /** Reflected: __Dati_Numero111*/ 
  Scaglione_CUUtT: number;
  /** Reflected: __Dati_Testo050*/ 
  IdScaglione: string;
  /** Reflected: __Dati_Testo051*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo052*/ 
  TxtItem: string;
  /** Reflected: __Dati_Data004*/ 
  Fornitura_DataCostoAcquisto: Date;
  /** Reflected: __Dati_Testo053*/ 
  Fornitura_DescrizioneCommerciale: string;
  /** Reflected: __Dati_Testo054*/ 
  Fornitura_Note: string;
  /** Reflected: __Dati_Numero112*/ 
  Fornitura_FlagAggiorna: number;
  /** Reflected: __Dati_Testo055*/ 
  Fornitura_CodiceRiferimentoFornitore: string;
  /** Reflected: __Dati_Numero113*/ 
  Scaglione_FlagCostBreakDownPresente: number;
  /** Reflected: __Dati_Numero114*/ 
  Fornitura_FlagAcquisto: number;
  /** Reflected: __Dati_Numero115*/ 
  Fornitura_FlagProduzione: number;
  /** Reflected: __Dati_Numero116*/ 
  Fornitura_Quantita: number;
  /** Reflected: __Dati_Testo056*/ 
  CodiceCommercialeItem: string;
  /** Reflected: __Dati_Testo057*/ 
  CodificaClienteItemPrincipale_CodiceItemCliente: string;
  /** Reflected: __Dati_Testo058*/ 
  CodificaClienteItemPrincipale_DescrizioneItemCliente: string;
  /** Reflected: __Dati_Testo059*/ 
  CodificaClienteItemPrincipale_NumeroRevisione: string;
  /** Reflected: __Dati_Testo060*/ 
  Fornitura_TxtFornituraItem: string;
  /** Reflected: __Dati_Testo061*/ 
  Fornitura_TxtFornituraItemDataAutomatico: string;
  /** Reflected: __Dati_Numero117*/ 
  FlagAccettataManuale: number;
  /** Reflected: __Dati_Numero118*/ 
  FlagAccettataAutomatica: number;
  /** Reflected: __Dati_Numero119*/ 
  QuantitaDefinitivaAccettata: number;
  /** Reflected: __Dati_Numero120*/ 
  VImponibileAccettato: number;
  /** Reflected: __Dati_Numero121*/ 
  VUnitarioDefinitivoAccettato: number;
  /** Reflected: __Dati_Numero122*/ 
  VIvaAccettata: number;
  /** Reflected: __Dati_Numero123*/ 
  VTotaleAccettato: number;
  /** Reflected: __Dati_Numero124*/ 
  FlagAggiorna01: number;
  /** Reflected: __Dati_Numero125*/ 
  VVariazioniTotaleAccettatoPerc: number;
  /** Reflected: __Dati_Numero126*/ 
  VVariazioniTotaleAccettato: number;
  /** Reflected: __Dati_Numero127*/ 
  VVariazioneUnitarioPercentualeAccettato: number;
  /** Reflected: __Dati_Numero128*/ 
  VMargineAccettato: number;
  /** Reflected: __Dati_Numero129*/ 
  VMarginePercentualeAccettato: number
}