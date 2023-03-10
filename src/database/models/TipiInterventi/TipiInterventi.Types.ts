export interface ITipiInterventi {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo002*/ 
  IdTipoIntervento: string;
  /** Reflected: __Dati_Testo003*/ 
  TxtTipoIntervento: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo004*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Testo005*/ 
  TipoDocumento: string;
  /** Reflected: __Dati_Testo006*/ 
  SottoTipoDocumento: string;
  /** Reflected: __Dati_Numero002*/ 
  FlagDocOperativoUnico: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagDdtCreabile: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagPagamentoAbilitato: number;
  /** Reflected: __Dati_Testo007*/ 
  IdTipoDocOperativoDdt: string;
  /** Reflected: __Dati_Testo008*/ 
  NomeFormatoStampa: string;
  /** Reflected: __Dati_Testo009*/ 
  IdTipoDocumento: string;
  /** Reflected: __Dati_Testo010*/ 
  IdSottoTipoDocumento: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero005*/ 
  Zero: number;
  /** Reflected: __Dati_Testo011*/ 
  IdCassaBanca: string;
  /** Reflected: __Dati_Numero006*/ 
  FlagErroriValori: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagErroriValoriTxt: number;
  /** Reflected: __Dati_Numero008*/ 
  FlagEreditaScontoOrigine: number;
  /** Reflected: __Dati_Numero009*/ 
  FlagFeedbackRichiesto: number;
  /** Reflected: __Dati_Testo012*/ 
  ContenutoMailFeedback: string;
  /** Reflected: __Dati_Testo013*/ 
  MailServerNome: string;
  /** Reflected: __Dati_Testo014*/ 
  MailServerIndirizzo: string;
  /** Reflected: __Dati_Testo015*/ 
  MailServerSMTP: string;
  /** Reflected: __Dati_Testo016*/ 
  MailServerPorta: string;
  /** Reflected: __Dati_Testo017*/ 
  MailServerUsername: string;
  /** Reflected: __Dati_Testo018*/ 
  MailServerPassword: string;
  /** Reflected: __Dati_Testo019*/ 
  IdTipoDocOperativoOrigineAutomatica: string;
  /** Reflected: __Dati_Numero010*/ 
  FlagChiusuraAutomatica: number;
  /** Reflected: __Dati_Testo020*/ 
  IdAccountPagatore: string;
  /** Reflected: __Dati_Testo021*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo022*/ 
  IdSottoFamiglieAbilitate: string;
  /** Reflected: __Dati_Testo023*/ 
  IdFamiglieAbilitate: string;
  /** Reflected: __Dati_Numero011*/ 
  FlagMostraInfoAggiuntive: number;
  /** Reflected: __Dati_Testo024*/ 
  FlagTipo_TipoLista: string;
  /** Reflected: __Dati_Testo025*/ 
  IdClasseInterventi: string
}