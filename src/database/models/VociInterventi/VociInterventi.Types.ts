export interface IVociInterventi {
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
  DataEsecuzioneReale: Date;
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
  VPercVariazioneUnitario: number;
  /** Reflected: __Dati_Numero016*/ 
  VPercVariazioniTotale: number;
  /** Reflected: __Dati_Numero017*/ 
  VUnitarioDefinitivoItemValuta: number;
  /** Reflected: __Dati_Numero018*/ 
  VUnitarioDefinitivoItem: number;
  /** Reflected: __Dati_Numero019*/ 
  VUnitarioItem: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagIn: number;
  /** Reflected: __Dati_Testo011*/ 
  IdProgetto: string;
  /** Reflected: __Dati_Testo012*/ 
  IdFaseProgetto: string;
  /** Reflected: __Dati_Testo013*/ 
  IdTipoListino: string;
  /** Reflected: __Dati_Numero021*/ 
  FlagVoceLibera: number;
  /** Reflected: __Dati_Testo014*/ 
  CodiceItem: string;
  /** Reflected: __Dati_Testo015*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo016*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo017*/ 
  TxtFamigliaItem: string;
  /** Reflected: __Dati_Testo018*/ 
  TxtSottoFamigliaItem: string;
  /** Reflected: __Dati_Numero022*/ 
  VImportoPreVariazioni: number;
  /** Reflected: __Dati_Numero023*/ 
  VVariazioniTotale: number;
  /** Reflected: __Dati_Testo019*/ 
  IdIntervento: string;
  /** Reflected: __Dati_Testo020*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtAccountOperatore: string;
  /** Reflected: __Dati_Testo022*/ 
  CodiceSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo023*/ 
  CodiceFamigliaItem: string;
  /** Reflected: __Dati_Testo024*/ 
  IdVoceDocOperativoOrigineDiretti: string;
  /** Reflected: __Dati_Testo025*/ 
  IdDocOperativoOrigineDiretti: string;
  /** Reflected: __Dati_Testo026*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Testo027*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Testo028*/ 
  IdTipoDocOperativoOrigine: string;
  /** Reflected: __Dati_Testo029*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo030*/ 
  TxtTipoListinoItem: string;
  /** Reflected: __Dati_Numero024*/ 
  FlagTipoOraLavoro: number;
  /** Reflected: __Dati_Testo031*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Testo032*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo033*/ 
  IdRigaOrdineProduzione: string;
  /** Reflected: __Dati_Numero025*/ 
  FlagControllato: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_Testo034*/ 
  IdDocOperativoOrigineTutti: string;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero026*/ 
  Zero: number;
  /** Reflected: __Dati_Numero027*/ 
  FlagAggiornaValori01_Impostazione: number;
  /** Reflected: __Dati_Numero028*/ 
  FlagAggiornaValori05_Descrittivi: number;
  /** Reflected: __Dati_Numero029*/ 
  ConversioneValutaSuPrincipale: number;
  /** Reflected: __Dati_Numero030*/ 
  FlagAggiornaValori03_Quantita: number;
  /** Reflected: __Dati_Testo035*/ 
  IdAccountDestinatario: string;
  /** Reflected: __Dati_Testo036*/ 
  TxtAccountPagatore: string;
  /** Reflected: __Dati_Testo037*/ 
  TxtAccountDestinatario: string;
  /** Reflected: __Dati_Testo038*/ 
  LinguaDocumento: string;
  /** Reflected: __Dati_Testo039*/ 
  LinguaDocumento_DescrizioneAliquota: string;
  /** Reflected: __Dati_Testo040*/ 
  LinguaDocumento_DescrizioneItem: string;
  /** Reflected: __Dati_Testo041*/ 
  LinguaDocumento_NoteItem: string;
  /** Reflected: __Dati_Testo042*/ 
  LinguaPrincipale_DescrizioneAliquota: string;
  /** Reflected: __Dati_Testo043*/ 
  LinguaPrincipale_DescrizioneItem: string;
  /** Reflected: __Dati_Testo044*/ 
  LinguaPrincipale_NoteItem: string;
  /** Reflected: __Dati_Testo045*/ 
  IdValuta: string;
  /** Reflected: __Dati_Testo046*/ 
  SimboloValutaRidotto: string;
  /** Reflected: __Dati_Numero031*/ 
  VImportoPreVariazioniValuta: number;
  /** Reflected: __Dati_Testo047*/ 
  CodiceTxtItemAutomatico: string;
  /** Reflected: __Dati_Testo048*/ 
  LinguaDocumento_DescrizioneFamiglia: string;
  /** Reflected: __Dati_Testo049*/ 
  LinguaDocumento_DescrizioneSottoFamiglia: string;
  /** Reflected: __Dati_Testo050*/ 
  LinguaPrincipale_DescrizioneFamiglia: string;
  /** Reflected: __Dati_Testo051*/ 
  LinguaPrincipale_DescrizioneSottoFamiglia: string;
  /** Reflected: __Dati_Testo052*/ 
  IdImpianto: string;
  /** Reflected: __Dati_Testo053*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Data002*/ 
  DataEsecuzioneProgrammata: Date;
  /** Reflected: __Dati_Data003*/ 
  DataRichiesta: Date;
  /** Reflected: __Dati_Testo054*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Testo055*/ 
  IdAccountIntermediario: string;
  /** Reflected: __Dati_Testo056*/ 
  IdVoceIntervento: string;
  /** Reflected: __Dati_Testo057*/ 
  IdVoceDocOperativoOrigineTutti: string;
  /** Reflected: __Dati_Testo058*/ 
  TxtAccountIntermediario: string;
  /** Reflected: __Dati_Numero032*/ 
  FlagAggiornaValori02_Riferimenti: number;
  /** Reflected: __Dati_Numero033*/ 
  FlagAggiornaValori04_ValoriEconomici: number;
  /** Reflected: __Dati_Numero034*/ 
  FlagAggiornaValori05_IdRiferimento: number;
  /** Reflected: __Dati_Testo059*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Numero035*/ 
  AnnoSettimanaProgrammata: number;
  /** Reflected: __Dati_Numero036*/ 
  AnnoSettimanaRichiesta: number;
  /** Reflected: __Dati_Numero037*/ 
  AnnoSettimanaEsecuzioneReale: number;
  /** Reflected: __Dati_Testo060*/ 
  IdItemFaseProduzione: string;
  /** Reflected: __Dati_Testo061*/ 
  TxtSettimanaAnnoEsecuzioneProgrammata: string;
  /** Reflected: __Dati_Numero038*/ 
  AnnoMeseEsecuzioneReale: number;
  /** Reflected: __Dati_Numero039*/ 
  AnnoMeseEsecuzioneProgrammata: number;
  /** Reflected: __Dati_Testo062*/ 
  TxtSettimanaAnnoEsecuzioneReale: string;
  /** Reflected: __Dati_Numero040*/ 
  FlagItem: number;
  /** Reflected: __Dati_Numero041*/ 
  FlagVariazioneManuale: number;
  /** Reflected: __Dati_Testo063*/ 
  IdSedeDestinatario: string;
  /** Reflected: __Dati_Numero042*/ 
  QuantitaDefinitivoItemPerVociDestinazione: number;
  /** Reflected: __Dati_Numero043*/ 
  QuantitaDefinitivoItemPerMovimenti: number;
  /** Reflected: __Dati_Testo064*/ 
  CodiceEsterno: string;
  /** Reflected: __Dati_Testo065*/ 
  TxtAutomaticoDocOperativo: string;
  /** Reflected: __Dati_Testo066*/ 
  IdIntermediario: string;
  /** Reflected: __Dati_Testo067*/ 
  Tracciabilita_CodiceLotto: string;
  /** Reflected: __Dati_Testo068*/ 
  Tracciabilita_Colore: string;
  /** Reflected: __Dati_Data004*/ 
  Tracciabilita_DataScadenza: Date;
  /** Reflected: __Dati_Testo069*/ 
  Tracciabilita_InfoExtra: string;
  /** Reflected: __Dati_Testo070*/ 
  Tracciabilita_NumeroSerie: string;
  /** Reflected: __Dati_Testo071*/ 
  Tracciabilita_Taglia: string;
  /** Reflected: __Dati_Testo072*/ 
  IdTipoIntervento: string;
  /** Reflected: __Dati_Testo073*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Numero044*/ 
  GiornoSettimanaIntervento: number;
  /** Reflected: __Dati_Numero045*/ 
  AnnoProgrammata: number
}