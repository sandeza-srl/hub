export interface IOfferte {
  _id: string;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Data002*/ 
  DataOfferta: Date;
  /** Reflected: __Dati_Data003*/ 
  DataInvio: Date;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountClienteFinale: string;
  /** Reflected: __Dati_Testo002*/ 
  NoteFinali: string;
  /** Reflected: __Dati_Numero001*/ 
  Progressivo: number;
  /** Reflected: __Dati_Testo003*/ 
  TxtAccountClienteFinale: string;
  /** Reflected: __Dati_Numero002*/ 
  Uno: number;
  /** Reflected: __Dati_Testo004*/ 
  IdOfferta: string;
  /** Reflected: __Dati_Testo005*/ 
  TitoloOfferta: string;
  /** Reflected: __Dati_Numero003*/ 
  PercentualeIva: number;
  /** Reflected: __Dati_Testo006*/ 
  CondizioniPagamento: string;
  /** Reflected: __Dati_Numero004*/ 
  VImponibile: number;
  /** Reflected: __Dati_Testo007*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo008*/ 
  TxtAccountCompagnia: string;
  /** Reflected: __Dati_Testo009*/ 
  AnnoMeseOfferta: string;
  /** Reflected: __Dati_Numero005*/ 
  GiornoOfferta: number;
  /** Reflected: __Dati_Numero006*/ 
  Mese: number;
  /** Reflected: __Dati_Numero007*/ 
  Settimana: number;
  /** Reflected: __Dati_Testo010*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Testo011*/ 
  IdAccountIntestazione: string;
  /** Reflected: __Dati_Testo012*/ 
  TxtAccountIntestazione: string;
  /** Reflected: __Dati_Testo013*/ 
  IdRubricaCompagnia: string;
  /** Reflected: __Dati_Testo014*/ 
  NomeRubricaCompagnia: string;
  /** Reflected: __Dati_Testo015*/ 
  IdRubricaIntestazione: string;
  /** Reflected: __Dati_Testo016*/ 
  IdRubricaClienteFinale: string;
  /** Reflected: __Dati_Testo017*/ 
  NomeRubricaClienteFinale: string;
  /** Reflected: __Dati_Testo018*/ 
  NomeRubricaIntestazione: string;
  /** Reflected: __Dati_Numero008*/ 
  VIva: number;
  /** Reflected: __Dati_Numero009*/ 
  VTotale: number;
  /** Reflected: __Dati_Numero010*/ 
  ConversioneValuta: number;
  /** Reflected: __Dati_Testo019*/ 
  IdValuta: string;
  /** Reflected: __Dati_Testo020*/ 
  SimboloValuta: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtValuta: string;
  /** Reflected: __Dati_Numero011*/ 
  VTotaleConvertito: number;
  /** Reflected: __Dati_Numero012*/ 
  VImponibileConvertito: number;
  /** Reflected: __Dati_Numero013*/ 
  VIvaConvertito: number;
  /** Reflected: __Dati_Numero014*/ 
  VPreVariazioniConvertito: number;
  /** Reflected: __Dati_Testo022*/ 
  IdAccountTutti: string;
  /** Reflected: __Dati_Numero015*/ 
  ValiditaGg: number;
  /** Reflected: __Dati_Data004*/ 
  DataScadenza: Date;
  /** Reflected: __Dati_Numero016*/ 
  FlagAccettata: number;
  /** Reflected: __Dati_Numero017*/ 
  FlagRifiutata: number;
  /** Reflected: __Dati_Numero018*/ 
  FlagChiusa: number;
  /** Reflected: __Dati_Numero019*/ 
  FlagScaduta: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagInScadenza: number;
  /** Reflected: __Dati_Data005*/ 
  DataCorrente: Date;
  /** Reflected: __Dati_Data006*/ 
  DataRisposta: Date;
  /** Reflected: __Dati_Testo023*/ 
  TxtStatoAutomaticoLinguaPrincipale: string;
  /** Reflected: __Dati_Testo024*/ 
  Lingua: string;
  /** Reflected: __Dati_Testo025*/ 
  NoteIniziali: string;
  /** Reflected: __Dati_Testo026*/ 
  SottoTitoloOfferta: string;
  /** Reflected: __Dati_Testo027*/ 
  IdAccountDistributore: string;
  /** Reflected: __Dati_Testo028*/ 
  TxtAccountDistributore: string;
  /** Reflected: __Dati_Testo029*/ 
  IdRubricaDistributore: string;
  /** Reflected: __Dati_Testo030*/ 
  NomeRubricaDistributore: string;
  /** Reflected: __Dati_Numero021*/ 
  VCostoMateriale: number;
  /** Reflected: __Dati_Numero022*/ 
  VPreVariazioni: number;
  /** Reflected: __Dati_Numero023*/ 
  VVariazioni: number;
  /** Reflected: __Dati_Numero024*/ 
  VVariazioniConvertito: number;
  /** Reflected: __Dati_Numero025*/ 
  VMargine: number;
  /** Reflected: __Dati_Numero026*/ 
  VMarginePercentuale: number;
  /** Reflected: __Dati_Testo031*/ 
  IdFirma: string;
  /** Reflected: __Dati_Testo032*/ 
  TxtUtenteModifica: string;
  /** Reflected: __Dati_Testo033*/ 
  IdStatoOfferta: string;
  /** Reflected: __Dati_Testo034*/ 
  TxtStatoOfferta: string;
  /** Reflected: __Dati_Numero027*/ 
  FlagStandard: number;
  /** Reflected: __Dati_Testo035*/ 
  IdAliquota: string;
  /** Reflected: __Dati_Testo036*/ 
  TxtAliquota: string;
  /** Reflected: __Dati_Testo037*/ 
  FlagBloccato: string;
  /** Reflected: __Dati_Testo038*/ 
  IdSedeClienteFinale: string;
  /** Reflected: __Dati_Testo039*/ 
  IdDocumentoAssociato: string;
  /** Reflected: __Dati_Testo040*/ 
  AnnoOfferta: string;
  /** Reflected: __Dati_Testo041*/ 
  CodiceOfferta: string;
  /** Reflected: __Dati_Testo042*/ 
  IdTipoOfferta: string;
  /** Reflected: __Dati_Numero028*/ 
  ProssimoProgressivo: number;
  /** Reflected: __Dati_Numero029*/ 
  VVariazioniPercentuale: number;
  /** Reflected: __Dati_Numero030*/ 
  OrdineStatoOfferta: number;
  /** Reflected: __Dati_Numero031*/ 
  PercProbabilitaSuccesso: number;
  /** Reflected: __Dati_Numero032*/ 
  VImponibilePonderato: number;
  /** Reflected: __Dati_Testo043*/ 
  IdTipiDocOperativoCreabili: string;
  /** Reflected: __Dati_Numero033*/ 
  FlagInviaSollecito: number;
  /** Reflected: __Dati_Testo044*/ 
  IdComunicazione01: string;
  /** Reflected: __Dati_Testo045*/ 
  IdComunicazione02: string;
  /** Reflected: __Dati_Testo046*/ 
  IdComunicazione03: string;
  /** Reflected: __Dati_Numero034*/ 
  AnnoMeseScadenzaOfferta: number;
  /** Reflected: __Dati_Numero035*/ 
  AnnoScadenzaOfferta: number;
  /** Reflected: __Dati_Numero036*/ 
  VVariazioneIncondizionata: number;
  /** Reflected: __Dati_Numero037*/ 
  VVariazioneIncondizionataConvertito: number;
  /** Reflected: __Dati_Numero038*/ 
  VVariazioneIncondizionataPercentuale: number;
  /** Reflected: __Dati_Numero039*/ 
  VProvvigioni: number;
  /** Reflected: __Dati_Numero040*/ 
  VProvvigioniConvertito: number;
  /** Reflected: __Dati_Numero041*/ 
  VProvvigioniStimate: number;
  /** Reflected: __Dati_Numero042*/ 
  VProvvigioniStimateConvertito: number;
  /** Reflected: __Dati_Numero043*/ 
  VimponibileDefinitivo: number;
  /** Reflected: __Dati_Numero044*/ 
  VimponibileDefinitivoConvertito: number;
  /** Reflected: __Dati_Numero045*/ 
  VivaDefinitiva: number;
  /** Reflected: __Dati_Numero046*/ 
  VivaDefinitivaConvertito: number;
  /** Reflected: __Dati_Numero047*/ 
  VTotaleDefinitivo: number;
  /** Reflected: __Dati_Numero048*/ 
  VTotaleDefinitivoConvertito: number;
  /** Reflected: __Dati_Numero049*/ 
  VProvvigioniPercentuale: number;
  /** Reflected: __Dati_Numero050*/ 
  FlagEscludiProvvigioni: number;
  /** Reflected: __Dati_Numero051*/ 
  VCostoTotale: number;
  /** Reflected: __Dati_Testo047*/ 
  NoteInterne: string;
  /** Reflected: __Dati_Testo048*/ 
  Porto: string;
  /** Reflected: __Dati_Testo049*/ 
  Spedizione: string;
  /** Reflected: __Dati_Testo050*/ 
  CodiceRichiestaCliente: string;
  /** Reflected: __Dati_Data007*/ 
  DataRichiestaCliente: Date;
  /** Reflected: __Dati_Testo051*/ 
  MezzoRichiestaCliente: string;
  /** Reflected: __Dati_Testo052*/ 
  IdTipoOffertaPerCodice: string;
  /** Reflected: __Dati_Testo053*/ 
  IdUtenteRevisioneOfferta: string;
  /** Reflected: __Dati_Testo054*/ 
  TxtUtenteRevisioneOfferta: string;
  /** Reflected: __Dati_Testo055*/ 
  IdRevisione: string;
  /** Reflected: __Dati_Testo056*/ 
  IdIncoterm: string;
  /** Reflected: __Dati_Numero052*/ 
  RevisioneOfferta: number;
  /** Reflected: __Dati_Data008*/ 
  DataRevisioneOfferta: Date;
  /** Reflected: __Dati_Testo057*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo058*/ 
  TxtIncoterm: string;
  /** Reflected: __Dati_Testo059*/ 
  AspettoEsteriore: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero053*/ 
  Zero: number;
  /** Reflected: __Dati_Numero054*/ 
  FlagAggiornaDaCapitoli: number;
  /** Reflected: __Dati_Numero055*/ 
  InformazioniAggiuntive_FlagRicalcolaLista: number;
  /** Reflected: __Dati_Testo060*/ 
  InformazioniAggiuntive_Lista: string;
  /** Reflected: __Dati_Numero056*/ 
  VImponibileAccettato: number;
  /** Reflected: __Dati_Numero057*/ 
  VimponibileAccettatoConvertito: number;
  /** Reflected: __Dati_Numero058*/ 
  VivaAccettata: number;
  /** Reflected: __Dati_Numero059*/ 
  VivaAccettataConvertita: number;
  /** Reflected: __Dati_Numero060*/ 
  VMargineAccettato: number;
  /** Reflected: __Dati_Numero061*/ 
  VMargineAccettatoPercentuale: number;
  /** Reflected: __Dati_Numero062*/ 
  VTotaleAccettato: number;
  /** Reflected: __Dati_Numero063*/ 
  VTotaleAccettatoConvertito: number;
  /** Reflected: __Dati_Numero064*/ 
  VVariazioniAccettato: number;
  /** Reflected: __Dati_Numero065*/ 
  VVariazioniAccettatoConvertito: number;
  /** Reflected: __Dati_Numero066*/ 
  VVariazioniAccettatoPercentuale: number
}