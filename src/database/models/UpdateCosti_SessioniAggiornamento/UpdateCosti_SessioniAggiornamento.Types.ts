export interface IUpdateCosti_SessioniAggiornamento {
_id: string;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_DataOra002*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Testo001*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Testo002*/ 
IdInstallazione: string;
/** Reflected: __Dati_Testo003*/ 
IdSessioneUpdateCosti: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Numero002*/ 
Zero: number;
/** Reflected: __Dati_Testo004*/ 
TxtUtenteCreazione: string;
/** Reflected: __Dati_DataOra003*/ 
DataOraInizioEsecuzione: Date;
/** Reflected: __Dati_DataOra004*/ 
DataOraFineEsecuzione: Date;
/** Reflected: __Dati_Data001*/ 
DataInizioPeriodoAggiornamento: Date;
/** Reflected: __Dati_Data002*/ 
DataFinePeriodoAggiornamento: Date;
/** Reflected: __Dati_Numero003*/ 
FlagAggiornaCostiRisorsa: number;
/** Reflected: __Dati_Numero004*/ 
FlagIgnoraConsolidamentoMagazzino: number;
/** Reflected: __Dati_Numero005*/ 
NumLottiPeriodo: number;
/** Reflected: __Dati_Numero006*/ 
CTT_Ricarico_PreEsecuzione: number;
/** Reflected: __Dati_Numero007*/ 
CTT_Ricarico_PostEsecuzione: number;
/** Reflected: __Dati_Numero008*/ 
DiffCTT_PrePostEsecuzione: number;
/** Reflected: __Dati_Numero009*/ 
FlagAggiornaDaVariazioniLotti: number;
/** Reflected: __Dati_Numero010*/ 
FlagEscludiCicliRilavorazione: number;
/** Reflected: __Dati_Testo005*/ 
Integrazione_DatiVariAC: string
}