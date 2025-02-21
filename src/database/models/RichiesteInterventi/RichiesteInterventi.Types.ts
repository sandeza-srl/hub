export interface IRichiesteInterventi {
_id: string;
/** Reflected: __Dati_Testo001*/ 
TipoRichiesta: string;
/** Reflected: __Dati_Data001*/ 
DataRichiesta: Date;
/** Reflected: __Dati_Ora001*/ 
OraRichiesta: string;
/** Reflected: __Dati_Data002*/ 
DataRisoluzione: Date;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_DataOra002*/ 
DataOraPresaInCarico: Date;
/** Reflected: __Dati_DataOra003*/ 
DataOraRichiesta: Date;
/** Reflected: __Dati_DataOra004*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Numero001*/ 
FlagAggiornaValori: number;
/** Reflected: __Dati_Numero002*/ 
FlagUrgente: number;
/** Reflected: __Dati_Testo002*/ 
FlagUrgenteVedi: string;
/** Reflected: __Dati_Numero003*/ 
FlagBloccoProduzione: number;
/** Reflected: __Dati_Testo003*/ 
FlagBloccoProduzioneVedi: string;
/** Reflected: __Dati_Numero004*/ 
FlagPresaInCarico: number;
/** Reflected: __Dati_Testo004*/ 
FlagPresaInCaricoVedi: string;
/** Reflected: __Dati_Testo005*/ 
IdAccount: string;
/** Reflected: __Dati_Testo006*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Testo007*/ 
IdAccountOperatore: string;
/** Reflected: __Dati_Testo008*/ 
IdAreaRisorsa: string;
/** Reflected: __Dati_Testo009*/ 
IdAttivitaControllo: string;
/** Reflected: __Dati_Testo010*/ 
IdImpianto: string;
/** Reflected: __Dati_Testo011*/ 
IdRisorsa: string;
/** Reflected: __Dati_Testo012*/ 
IdRubricaDestinatariReport: string;
/** Reflected: __Dati_Testo013*/ 
IdRubricaReferente: string;
/** Reflected: __Dati_Testo014*/ 
IdSchedaAttivitaControllo: string;
/** Reflected: __Dati_Testo015*/ 
IdSede: string;
/** Reflected: __Dati_Testo016*/ 
IdStrumento: string;
/** Reflected: __Dati_Testo017*/ 
IdTipoAttivitaControllo: string;
/** Reflected: __Dati_Testo018*/ 
IdTipoImpianto: string;
/** Reflected: __Dati_Testo019*/ 
IdTipologiaAccount: string;
/** Reflected: __Dati_Testo020*/ 
IdTipoStrumento: string;
/** Reflected: __Dati_Testo021*/ 
IdTipoUtensile: string;
/** Reflected: __Dati_Testo022*/ 
IdUtensile: string;
/** Reflected: __Dati_Testo023*/ 
NoteRichiesta: string;
/** Reflected: __Dati_Ora002*/ 
OraRisoluzione: string;
/** Reflected: __Dati_Ora003*/ 
OraPresaInCarico: string;
/** Reflected: __Dati_Ora004*/ 
TempoPresaInCarico: string;
/** Reflected: __Dati_Testo024*/ 
TxtAccountOperatore: string;
/** Reflected: __Dati_Testo025*/ 
TxtAttivitaControllo: string;
/** Reflected: __Dati_Testo026*/ 
TxtStatoRichiesta: string;
/** Reflected: __Dati_Testo027*/ 
TxtTipoAttivitaControllo: string;
/** Reflected: __Dati_Testo028*/ 
TxtTipoOggettoAttivitaAutomatico: string;
/** Reflected: __Dati_Testo029*/ 
TxtUtenteCreazione: string;
/** Reflected: __Dati_Testo030*/ 
TxtUtenteUltimaModifica: string;
/** Reflected: __Dati_Numero005*/ 
Uno: number;
/** Reflected: __Dati_Numero006*/ 
Zero: number;
/** Reflected: __Dati_Data003*/ 
DataPresaInCarico: Date;
/** Reflected: __Dati_DataOra005*/ 
DataOraRisoluzione: Date;
/** Reflected: __Dati_Numero007*/ 
FlagRisolta: number;
/** Reflected: __Dati_Testo031*/ 
FlagRisoltaVedi: string;
/** Reflected: __Dati_Ora005*/ 
TempoRisoluzione: string;
/** Reflected: __Dati_Testo032*/ 
IdRichiestaIntervento: string;
/** Reflected: __Dati_Testo033*/ 
CodiceAccount: string;
/** Reflected: __Dati_Testo034*/ 
CodiceImpianto: string;
/** Reflected: __Dati_Testo035*/ 
CodiceOggettoAttivitaAutomatico: string;
/** Reflected: __Dati_Testo036*/ 
CodiceRisorsa: string;
/** Reflected: __Dati_Testo037*/ 
CodiceStrumento: string;
/** Reflected: __Dati_Testo038*/ 
CodiceTipoAttivita: string;
/** Reflected: __Dati_Testo039*/ 
CodiceUtensile: string;
/** Reflected: __Dati_Testo040*/ 
TxtAccount: string;
/** Reflected: __Dati_Testo041*/ 
TxtAreaRisorsa: string;
/** Reflected: __Dati_Testo042*/ 
TxtImpianto: string;
/** Reflected: __Dati_Testo043*/ 
TxtOggettoAttivitaAutomatico: string;
/** Reflected: __Dati_Testo044*/ 
TxtRisorsa: string;
/** Reflected: __Dati_Testo045*/ 
TxtRubricaReferente: string;
/** Reflected: __Dati_Testo046*/ 
TxtSede: string;
/** Reflected: __Dati_Testo047*/ 
TxtStrumento: string;
/** Reflected: __Dati_Testo048*/ 
TxtUtensile: string;
/** Reflected: __Dati_Testo049*/ 
IdArticolo: string;
/** Reflected: __Dati_Testo050*/ 
IdDocOperativo: string;
/** Reflected: __Dati_Testo051*/ 
IdContenitore: string;
/** Reflected: __Dati_Testo052*/ 
IdItem: string;
/** Reflected: __Dati_Testo053*/ 
TxtContenitore: string;
/** Reflected: __Dati_Testo054*/ 
TxtDocOperativo: string;
/** Reflected: __Dati_Testo055*/ 
TxtItem: string;
/** Reflected: __Dati_Testo056*/ 
TxtArticolo: string;
/** Reflected: __Dati_Testo057*/ 
IdInstallazione: string
}