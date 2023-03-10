export interface IVociDocContabili {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdDocContabile: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo002*/ 
  IdVoceDocContabile: string;
  /** Reflected: __Dati_Testo003*/ 
  TxtItem: string;
  /** Reflected: __Dati_Testo004*/ 
  LinguaDocumento_NoteItem: string;
  /** Reflected: __Dati_Numero002*/ 
  Ordine: number;
  /** Reflected: __Dati_Testo005*/ 
  Note: string;
  /** Reflected: __Dati_Numero003*/ 
  FlagImponibile: number;
  /** Reflected: __Dati_Numero004*/ 
  PercentualeIva: number;
  /** Reflected: __Dati_Numero005*/ 
  QuantitaItem: number;
  /** Reflected: __Dati_Numero006*/ 
  QuantitaDefinitivoItem: number;
  /** Reflected: __Dati_Numero007*/ 
  QuantitaVariazioneItem: number;
  /** Reflected: __Dati_Numero008*/ 
  VIvaValuta: number;
  /** Reflected: __Dati_Numero009*/ 
  VUnitarioItemValuta: number;
  /** Reflected: __Dati_Numero010*/ 
  VTotaleValuta: number;
  /** Reflected: __Dati_Numero011*/ 
  VImponibileValuta: number;
  /** Reflected: __Dati_Data001*/ 
  DataDocContabile: Date;
  /** Reflected: __Dati_Testo006*/ 
  UnitaMisuraItem: string;
  /** Reflected: __Dati_Testo007*/ 
  SimboloValuta: string;
  /** Reflected: __Dati_Testo008*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Testo009*/ 
  LinguaDocumento_DescrizioneAliquota: string;
  /** Reflected: __Dati_Testo010*/ 
  IdItem: string;
  /** Reflected: __Dati_Numero012*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero013*/ 
  VImponibile: number;
  /** Reflected: __Dati_Numero014*/ 
  VIva: number;
  /** Reflected: __Dati_Numero015*/ 
  ConversioneValutaSuPrincipale: number;
  /** Reflected: __Dati_Testo011*/ 
  LinguaDocumento_DescrizioneItem: string;
  /** Reflected: __Dati_Testo012*/ 
  LinguaDocumento: string;
  /** Reflected: __Dati_Numero016*/ 
  FlagItem: number;
  /** Reflected: __Dati_Numero017*/ 
  VPercVariazioneUnitario: number;
  /** Reflected: __Dati_Numero018*/ 
  VPercVariazioniTotale: number;
  /** Reflected: __Dati_Numero019*/ 
  VUnitarioDefinitivoItemValuta: number;
  /** Reflected: __Dati_Numero020*/ 
  VUnitarioDefinitivoItem: number;
  /** Reflected: __Dati_Numero021*/ 
  VUnitarioItem: number;
  /** Reflected: __Dati_Numero022*/ 
  FlagIn: number;
  /** Reflected: __Dati_Numero023*/ 
  FlagOut: number;
  /** Reflected: __Dati_Testo013*/ 
  IdAccountEmittente: string;
  /** Reflected: __Dati_Testo014*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Testo015*/ 
  IdProgetto: string;
  /** Reflected: __Dati_Testo016*/ 
  IdFaseProgetto: string;
  /** Reflected: __Dati_Testo017*/ 
  IdListinoItem: string;
  /** Reflected: __Dati_Testo018*/ 
  IdTipoListino: string;
  /** Reflected: __Dati_Numero024*/ 
  ConversioneUmFornitura: number;
  /** Reflected: __Dati_Testo019*/ 
  IdFornituraItem: string;
  /** Reflected: __Dati_Numero025*/ 
  VUnitarioFornituraValuta: number;
  /** Reflected: __Dati_Numero026*/ 
  VUnitarioDefinitivoFornituraValuta: number;
  /** Reflected: __Dati_Numero027*/ 
  VUnitarioDefinitivoFornitura: number;
  /** Reflected: __Dati_Numero028*/ 
  QuantitaFornitura: number;
  /** Reflected: __Dati_Testo020*/ 
  UnitaMisuraFornitura: string;
  /** Reflected: __Dati_Numero029*/ 
  FlagVoceLibera: number;
  /** Reflected: __Dati_Testo021*/ 
  IdVoceProgetto: string;
  /** Reflected: __Dati_Testo022*/ 
  CodiceItem: string;
  /** Reflected: __Dati_Testo023*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo024*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo025*/ 
  TxtFamigliaItem: string;
  /** Reflected: __Dati_Testo026*/ 
  TxtSottoFamigliaItem: string;
  /** Reflected: __Dati_Numero030*/ 
  QuantitaVariazioneFornitura: number;
  /** Reflected: __Dati_Numero031*/ 
  FlagUmDiverse: number;
  /** Reflected: __Dati_Testo027*/ 
  CodiceRiferimentoFornitore: string;
  /** Reflected: __Dati_Numero032*/ 
  QuantitaDefinitivoFornitura: number;
  /** Reflected: __Dati_Numero033*/ 
  VUnitarioFornitura: number;
  /** Reflected: __Dati_Numero034*/ 
  VImportoPreVariazioni: number;
  /** Reflected: __Dati_Numero035*/ 
  VVariazioniTotale: number;
  /** Reflected: __Dati_Testo028*/ 
  CodiceDocContabile: string;
  /** Reflected: __Dati_Testo029*/ 
  CodiceEsterno: string;
  /** Reflected: __Dati_Testo030*/ 
  CodiceVisualizza: string;
  /** Reflected: __Dati_Testo031*/ 
  IdDocOperativo: string;
  /** Reflected: __Dati_Numero036*/ 
  Anno: number;
  /** Reflected: __Dati_Numero037*/ 
  AnnoMese: number;
  /** Reflected: __Dati_Numero038*/ 
  Mese: number;
  /** Reflected: __Dati_Numero039*/ 
  VImponibileSegno: number;
  /** Reflected: __Dati_Numero040*/ 
  VIvaSegno: number;
  /** Reflected: __Dati_Testo032*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo033*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo034*/ 
  CodiceFamigliaItem: string;
  /** Reflected: __Dati_Testo035*/ 
  CodiceSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo036*/ 
  IdVoceDocOperativo: string;
  /** Reflected: __Dati_Numero041*/ 
  ConversioneValutaAPrincipale: number;
  /** Reflected: __Dati_Testo037*/ 
  TxtAccountDocContabile: string;
  /** Reflected: __Dati_Testo038*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Numero042*/ 
  FlagAggiornaValoriAccessori: number;
  /** Reflected: __Dati_Numero043*/ 
  VImportoPreVariazioniValuta: number;
  /** Reflected: __Dati_Numero044*/ 
  VImportoPreVariazioniSegno: number;
  /** Reflected: __Dati_Numero045*/ 
  FlagAggiornaValoriSensibili_01: number;
  /** Reflected: __Dati_Numero046*/ 
  FlagAggiornaValoriSensibili_02: number;
  /** Reflected: __Dati_Testo039*/ 
  IdValuta: string;
  /** Reflected: __Dati_Testo040*/ 
  SimboloValutaRidotto: string;
  /** Reflected: __Dati_Testo041*/ 
  IdPeriodoContabile: string;
  /** Reflected: __Dati_Numero047*/ 
  Zero: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero048*/ 
  FlagVariazioneManuale: number;
  /** Reflected: __Dati_Testo042*/ 
  LinguaPrincipale: string;
  /** Reflected: __Dati_Testo043*/ 
  LinguaPrincipale_NoteItem: string;
  /** Reflected: __Dati_Numero049*/ 
  FlagAggiornaValoriDescrittivi: number;
  /** Reflected: __Dati_Testo044*/ 
  LinguaPrincipale_DescrizioneAliquota: string;
  /** Reflected: __Dati_Testo045*/ 
  LinguaPrincipale_DescrizioneItem: string;
  /** Reflected: __Dati_Testo046*/ 
  TxtFornituraItem: string;
  /** Reflected: __Dati_Data002*/ 
  DataDocOperativo: Date;
  /** Reflected: __Dati_Numero050*/ 
  FlagProvvisorio: number;
  /** Reflected: __Dati_Testo047*/ 
  TxtTipoListinoItem: string;
  /** Reflected: __Dati_Testo048*/ 
  TxtAliquota: string;
  /** Reflected: __Dati_Numero051*/ 
  VTotaleSegno: number;
  /** Reflected: __Dati_Numero052*/ 
  FlagNoPagamentoIva: number;
  /** Reflected: __Dati_Numero053*/ 
  VVariazioniTotaleValuta: number;
  /** Reflected: __Dati_Testo049*/ 
  IdOriginiDati: string;
  /** Reflected: __Dati_Testo050*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo051*/ 
  CodiceAliquota: string;
  /** Reflected: __Dati_Testo052*/ 
  LinguaDocumento_DescrizioneFamiglia: string;
  /** Reflected: __Dati_Testo053*/ 
  LinguaDocumento_DescrizioneSottoFamiglia: string;
  /** Reflected: __Dati_Testo054*/ 
  LinguaPrincipale_DescrizioneFamiglia: string;
  /** Reflected: __Dati_Testo055*/ 
  LinguaPrincipale_DescrizioneSottoFamiglia: string;
  /** Reflected: __Dati_Numero054*/ 
  VImponibileValutaSegno: number;
  /** Reflected: __Dati_Numero055*/ 
  VImportoPreVariazioniValutaSegno: number;
  /** Reflected: __Dati_Numero056*/ 
  VIvaValutaSegno: number;
  /** Reflected: __Dati_Numero057*/ 
  VTotaleValutaSegno: number;
  /** Reflected: __Dati_Testo056*/ 
  IdIntermediario: string;
  /** Reflected: __Dati_Numero058*/ 
  FlagReverseCharge: number;
  /** Reflected: __Dati_Testo057*/ 
  IdDichiarazioniIntento: string;
  /** Reflected: __Dati_Testo058*/ 
  CodiceCIG: string;
  /** Reflected: __Dati_Testo059*/ 
  CodiceCUP: string;
  /** Reflected: __Dati_Testo060*/ 
  NumeroOrdine: string;
  /** Reflected: __Dati_Data003*/ 
  DataOrdine: Date;
  /** Reflected: __Dati_Testo061*/ 
  RiferimentoAmministrazione: string;
  /** Reflected: __Dati_Testo062*/ 
  FatturaCollegataCodice: string;
  /** Reflected: __Dati_Testo063*/ 
  IdVoceDocContabilePreDuplicazione: string;
  /** Reflected: __Dati_Data004*/ 
  FatturaCollegataData: Date;
  /** Reflected: __Dati_Data005*/ 
  FE_DataInizioPeriodo: Date;
  /** Reflected: __Dati_Data006*/ 
  FE_DataFinePeriodo: Date;
  /** Reflected: __Dati_Testo064*/ 
  FE_TipoDato: string;
  /** Reflected: __Dati_Testo065*/ 
  FE_RiferimentoTesto: string;
  /** Reflected: __Dati_Numero059*/ 
  AnnoSettimana: number;
  /** Reflected: __Dati_Testo066*/ 
  IdAccountIntermediario: string;
  /** Reflected: __Dati_Testo067*/ 
  IdInstallazione: string
}