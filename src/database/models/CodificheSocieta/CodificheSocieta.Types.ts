export interface ICodificheSocieta {
  _id: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo001*/ 
  FatTesto: string;
  /** Reflected: __Dati_Numero002*/ 
  FatCifreProgressivo: number;
  /** Reflected: __Dati_Numero003*/ 
  FatFlagAnno: number;
  /** Reflected: __Dati_Numero004*/ 
  FatFlagMese: number;
  /** Reflected: __Dati_Testo002*/ 
  FatFlagAnnoVedi: string;
  /** Reflected: __Dati_Testo003*/ 
  FatFlagMeseVedi: string;
  /** Reflected: __Dati_Numero005*/ 
  FatCodiceTest: number;
  /** Reflected: __Dati_Numero006*/ 
  FatRitenuta: number;
  /** Reflected: __Dati_Testo004*/ 
  IdAccount: string;
  /** Reflected: __Dati_Testo005*/ 
  IdCodifica: string;
  /** Reflected: __Dati_Numero007*/ 
  OffCifreProgressivo: number;
  /** Reflected: __Dati_Numero008*/ 
  OffCodiceTest: number;
  /** Reflected: __Dati_Numero009*/ 
  OffFlagAnno: number;
  /** Reflected: __Dati_Testo006*/ 
  OffFlagAnnoVedi: string;
  /** Reflected: __Dati_Numero010*/ 
  OffFlagMese: number;
  /** Reflected: __Dati_Testo007*/ 
  OffFlagMeseVedi: string;
  /** Reflected: __Dati_Testo008*/ 
  OffTesto: string;
  /** Reflected: __Dati_Numero011*/ 
  PjCodiceTest: number;
  /** Reflected: __Dati_Numero012*/ 
  PjFlagAnno: number;
  /** Reflected: __Dati_Testo009*/ 
  PjFlagAnnoVedi: string;
  /** Reflected: __Dati_Numero013*/ 
  PjFlagMese: number;
  /** Reflected: __Dati_Testo010*/ 
  PjFlagMeseVedi: string;
  /** Reflected: __Dati_Testo011*/ 
  PjTesto: string;
  /** Reflected: __Dati_Numero014*/ 
  OrfCodiceTest: number;
  /** Reflected: __Dati_Numero015*/ 
  OrfFlagAnno: number;
  /** Reflected: __Dati_Testo012*/ 
  OrfFlagAnnoVedi: string;
  /** Reflected: __Dati_Numero016*/ 
  OrfFlagMese: number;
  /** Reflected: __Dati_Testo013*/ 
  OrfFlagMeseVedi: string;
  /** Reflected: __Dati_Testo014*/ 
  OrfTesto: string;
  /** Reflected: __Dati_Testo015*/ 
  FatTerminiPagamento: string;
  /** Reflected: __Dati_Numero017*/ 
  FatIdFirma: number;
  /** Reflected: __Dati_Testo016*/ 
  FatIdAccountIntestazione: string;
  /** Reflected: __Dati_Numero018*/ 
  PjCifreProgressivo: number;
  /** Reflected: __Dati_Numero019*/ 
  OrfCifreProgressivo: number;
  /** Reflected: __Dati_Testo017*/ 
  PjTipoPagamento: string;
  /** Reflected: __Dati_Numero020*/ 
  PjGiorniPagamento: number;
  /** Reflected: __Dati_Numero021*/ 
  PagFlagConfermato: number;
  /** Reflected: __Dati_Contenitore001*/ 
  ImgBloccato: string;
  /** Reflected: __Dati_Contenitore002*/ 
  ImgSbloccato: string;
  /** Reflected: __Dati_Testo018*/ 
  PasswordBlocco: string;
  /** Reflected: __Dati_Testo019*/ 
  PasswordBloccoVisualizza: string;
  /** Reflected: __Dati_Numero022*/ 
  FatFlagPdfAuto: number;
  /** Reflected: __Dati_Testo020*/ 
  FatFlagPdfAutoVedi: string;
  /** Reflected: __Dati_Testo021*/ 
  PagFlagConfermatoVedi: string;
  /** Reflected: __Dati_Numero023*/ 
  FatFlagMailAuto: number;
  /** Reflected: __Dati_Testo022*/ 
  FatFlagMailAutoVedi: string;
  /** Reflected: __Dati_Numero024*/ 
  DdtCifreProgressivo: number;
  /** Reflected: __Dati_Numero025*/ 
  DdtCodiceTest: number;
  /** Reflected: __Dati_Numero026*/ 
  DdtFlagAnno: number;
  /** Reflected: __Dati_Testo023*/ 
  DdtFlagAnnoVedi: string;
  /** Reflected: __Dati_Numero027*/ 
  DdtFlagMese: number;
  /** Reflected: __Dati_Testo024*/ 
  DdtFlagMeseVedi: string;
  /** Reflected: __Dati_Testo025*/ 
  DdtIdAccountIntestazione: string;
  /** Reflected: __Dati_Testo026*/ 
  DdtPorto: string;
  /** Reflected: __Dati_Numero028*/ 
  DdtDaMagazzino: number;
  /** Reflected: __Dati_Testo027*/ 
  DdtDaMagazzinoVedi: string;
  /** Reflected: __Dati_Testo028*/ 
  DdtIdTipoPagamento: string;
  /** Reflected: __Dati_Testo029*/ 
  DdtTesto: string;
  /** Reflected: __Dati_Testo030*/ 
  DdtIdTipoFatturazione: string;
  /** Reflected: __Dati_Testo031*/ 
  DdtNote: string;
  /** Reflected: __Dati_Numero029*/ 
  PagIdAliquota: number;
  /** Reflected: __Dati_Testo032*/ 
  PagTxtAliquota: string;
  /** Reflected: __Dati_Numero030*/ 
  FatFlagRecCrediti: number;
  /** Reflected: __Dati_Testo033*/ 
  FatFlagRecCreditiVedi: string;
  /** Reflected: __Dati_Numero031*/ 
  FatFlagRitenuta: number;
  /** Reflected: __Dati_Testo034*/ 
  FatFlagRitenutaVedi: string;
  /** Reflected: __Dati_Testo035*/ 
  FatTitoloRitenuta: string;
  /** Reflected: __Dati_Testo036*/ 
  FatTitoloRecuperoCrediti: string;
  /** Reflected: __Dati_Numero032*/ 
  FatPercRitenuta: number;
  /** Reflected: __Dati_Numero033*/ 
  FatValorePrimoRecuperoCrediti: number;
  /** Reflected: __Dati_Numero034*/ 
  FatIdAliquotaRecuperoCrediti: number;
  /** Reflected: __Dati_Numero035*/ 
  FatValoreSecondoRecuperoCrediti: number;
  /** Reflected: __Dati_Numero036*/ 
  FatGgPrimoRecuperoCrediti: number;
  /** Reflected: __Dati_Numero037*/ 
  FatGgSecondoRecuperoCrediti: number;
  /** Reflected: __Dati_Numero038*/ 
  DdtFlagEtichettaStock: number;
  /** Reflected: __Dati_Testo037*/ 
  DdtFlagEtichettaStockVedi: string;
  /** Reflected: __Dati_Numero039*/ 
  DdtFlagEtichettaSped: number;
  /** Reflected: __Dati_Testo038*/ 
  DdtFlagEtichettaSpedVedi: string;
  /** Reflected: __Dati_Numero040*/ 
  RiPCifreProgressivo: number;
  /** Reflected: __Dati_Numero041*/ 
  RiPCodiceTest: number;
  /** Reflected: __Dati_Numero042*/ 
  RiPFlagAnno: number;
  /** Reflected: __Dati_Testo039*/ 
  RiPFlagAnnoVedi: string;
  /** Reflected: __Dati_Numero043*/ 
  RiPFlagMese: number;
  /** Reflected: __Dati_Testo040*/ 
  RiPFlagMeseVedi: string;
  /** Reflected: __Dati_Testo041*/ 
  RiPTesto: string;
  /** Reflected: __Dati_Testo042*/ 
  CodiceSIAperRiba: string;
  /** Reflected: __Dati_Numero044*/ 
  FlagContabilizzabile: number;
  /** Reflected: __Dati_Numero045*/ 
  ValoreMinimoAlertScaduto: number;
  /** Reflected: __Dati_Testo043*/ 
  ConservazioneSostitutivaUser: string;
  /** Reflected: __Dati_Testo044*/ 
  ConservazioneSostitutivaPassword: string;
  /** Reflected: __Dati_Testo045*/ 
  ConservazioneSostitutivaWeb: string;
  /** Reflected: __Dati_Numero046*/ 
  FlagFattElettAutomatica: number;
  /** Reflected: __Dati_Numero047*/ 
  FlagFattElettPEC: number;
  /** Reflected: __Dati_Numero048*/ 
  FlagFatEl: number;
  /** Reflected: __Dati_Numero049*/ 
  FlagEsportaItem: number;
  /** Reflected: __Dati_Numero050*/ 
  FlagImportaItem: number;
  /** Reflected: __Dati_Numero051*/ 
  FlagPartenzaMappadaIntervento: number;
  /** Reflected: __Dati_Numero052*/ 
  FlagArrivoMappadaIntervento: number;
  /** Reflected: __Dati_Numero053*/ 
  FlagGestioneRipartitori: number;
  /** Reflected: __Dati_Numero054*/ 
  FlagGestioneFiltri: number;
  /** Reflected: __Dati_Testo046*/ 
  NomeFileFatturaElettronica: string;
  /** Reflected: __Dati_Testo047*/ 
  NomeFileConnettoreContabilita: string;
  /** Reflected: __Dati_Numero055*/ 
  Zero: number;
  /** Reflected: __Dati_Testo048*/ 
  IdInstallazione: string
}