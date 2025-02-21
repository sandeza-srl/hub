export interface ISedi {
_id: string;
/** Reflected: __Dati_Testo001*/ 
IdAccount: string;
/** Reflected: __Dati_Testo002*/ 
IdSede: string;
/** Reflected: __Dati_Testo003*/ 
TxtAccount: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo004*/ 
Cap: string;
/** Reflected: __Dati_Testo005*/ 
Citta: string;
/** Reflected: __Dati_Testo006*/ 
Fax: string;
/** Reflected: __Dati_Testo007*/ 
NomeSede: string;
/** Reflected: __Dati_Testo008*/ 
NomeNazione: string;
/** Reflected: __Dati_Testo009*/ 
Via: string;
/** Reflected: __Dati_Testo010*/ 
TxtLiberoIndirizzo: string;
/** Reflected: __Dati_Testo011*/ 
NomeNazioneIng: string;
/** Reflected: __Dati_Testo012*/ 
IdNazione: string;
/** Reflected: __Dati_Testo013*/ 
DescrizioneStampabile: string;
/** Reflected: __Dati_Testo014*/ 
TxtZona: string;
/** Reflected: __Dati_Testo015*/ 
NoteTrasporti: string;
/** Reflected: __Dati_Data001*/ 
DataModificaNoteTrasporti: Date;
/** Reflected: __Dati_Testo016*/ 
UtenteModificaNoteTrasporti: string;
/** Reflected: __Dati_Data002*/ 
DataModificaNoteAlloggio: Date;
/** Reflected: __Dati_Testo017*/ 
NoteAlloggio: string;
/** Reflected: __Dati_Testo018*/ 
UtenteModificaNoteAlloggio: string;
/** Reflected: __Dati_Testo019*/ 
NoteVitto: string;
/** Reflected: __Dati_Testo020*/ 
UtenteModificaNoteVitto: string;
/** Reflected: __Dati_Data003*/ 
DataModificaNoteVitto: Date;
/** Reflected: __Dati_Testo021*/ 
NoteVarie: string;
/** Reflected: __Dati_Data004*/ 
DataModificaNoteVarie: Date;
/** Reflected: __Dati_Testo022*/ 
UtenteModificaNoteVarie: string;
/** Reflected: __Dati_Numero002*/ 
KmDaSede: number;
/** Reflected: __Dati_Numero003*/ 
OreViaggioDaSede: number;
/** Reflected: __Dati_Numero004*/ 
Priorita: number;
/** Reflected: __Dati_Numero005*/ 
FlagLegale: number;
/** Reflected: __Dati_Testo023*/ 
FlagLegaleVedi: string;
/** Reflected: __Dati_Numero006*/ 
FlagSpedizione: number;
/** Reflected: __Dati_Testo024*/ 
FlagSpedizioneVedi: string;
/** Reflected: __Dati_Numero007*/ 
GiorniTrasporto: number;
/** Reflected: __Dati_Testo025*/ 
ChiusureSettimanali: string;
/** Reflected: __Dati_Testo026*/ 
IdZona: string;
/** Reflected: __Dati_Testo027*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_DataOra001*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Numero008*/ 
FlagImpiantoCreato: number;
/** Reflected: __Dati_Numero009*/ 
Latitudine: number;
/** Reflected: __Dati_Numero010*/ 
Longitudine: number;
/** Reflected: __Dati_Testo028*/ 
IdPeriodoChiusura: string;
/** Reflected: __Dati_Numero011*/ 
GiorniProduzione: number;
/** Reflected: __Dati_Numero012*/ 
GiorniApprovvigionamento: number;
/** Reflected: __Dati_Testo029*/ 
IndirizzoCompleto: string;
/** Reflected: __Dati_Testo030*/ 
Latitudine_Longitudine_JSON: string;
/** Reflected: __Dati_Testo031*/ 
CodiceSede: string;
/** Reflected: __Dati_Numero013*/ 
Zero: number;
/** Reflected: __Dati_Testo032*/ 
IdInstallazione: string;
/** Reflected: __Dati_Numero014*/ 
FlagAggiornaSede: number;
/** Reflected: __Dati_Testo033*/ 
Tel: string;
/** Reflected: __Dati_Numero015*/ 
FlagGestioneGiorniRitiroConsengaAttiva: number;
/** Reflected: __Dati_Numero016*/ 
Consegna_Lunedi_Attivo: number;
/** Reflected: __Dati_Numero017*/ 
Consegna_Martedi_Attivo: number;
/** Reflected: __Dati_Numero018*/ 
Consegna_Mercoledi_Attivo: number;
/** Reflected: __Dati_Numero019*/ 
Consegna_Giovedi_Attivo: number;
/** Reflected: __Dati_Numero020*/ 
Consegna_Venerdi_Attivo: number;
/** Reflected: __Dati_Numero021*/ 
Consegna_Sabato_Attivo: number;
/** Reflected: __Dati_Numero022*/ 
Consegna_Domenica_Attivo: number;
/** Reflected: __Dati_Ora001*/ 
Consegna_Lunedi_OraInizio: string;
/** Reflected: __Dati_Ora002*/ 
Consegna_Martedi_OraInizio: string;
/** Reflected: __Dati_Ora003*/ 
Consegna_Mercoledi_OraInizio: string;
/** Reflected: __Dati_Ora004*/ 
Consegna_Giovedi_OraInizio: string;
/** Reflected: __Dati_Ora005*/ 
Consegna_Venerdi_OraInizio: string;
/** Reflected: __Dati_Ora006*/ 
Consegna_Sabato_OraInizio: string;
/** Reflected: __Dati_Ora007*/ 
Consegna_Domenica_OraInizio: string;
/** Reflected: __Dati_Ora008*/ 
Consegna_Lunedi_OraFine: string;
/** Reflected: __Dati_Ora009*/ 
Consegna_Martedi_OraFine: string;
/** Reflected: __Dati_Ora010*/ 
Consegna_Mercoledi_OraFine: string;
/** Reflected: __Dati_Ora011*/ 
Consegna_Giovedi_OraFine: string;
/** Reflected: __Dati_Ora012*/ 
Consegna_Venerdi_OraFine: string;
/** Reflected: __Dati_Ora013*/ 
Consegna_Sabato_OraFine: string;
/** Reflected: __Dati_Ora014*/ 
Consegna_Domenica_OraFine: string;
/** Reflected: __Dati_Numero023*/ 
Consegna_Lunedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero024*/ 
Consegna_Martedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero025*/ 
Consegna_Mercoledi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero026*/ 
Consegna_Giovedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero027*/ 
Consegna_Venerdi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero028*/ 
Consegna_Sabato_GiorniPreparazione: number;
/** Reflected: __Dati_Numero029*/ 
Consegna_Domenica_GiorniPreparazione: number;
/** Reflected: __Dati_Numero030*/ 
Ritiro_Lunedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero031*/ 
Ritiro_Martedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero032*/ 
Ritiro_Mercoledi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero033*/ 
Ritiro_Giovedi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero034*/ 
Ritiro_Venerdi_GiorniPreparazione: number;
/** Reflected: __Dati_Numero035*/ 
Ritiro_Sabato_GiorniPreparazione: number;
/** Reflected: __Dati_Numero036*/ 
Ritiro_Domenica_GiorniPreparazione: number;
/** Reflected: __Dati_Numero037*/ 
Ritiro_Lunedi_Attivo: number;
/** Reflected: __Dati_Numero038*/ 
Ritiro_Martedi_Attivo: number;
/** Reflected: __Dati_Numero039*/ 
Ritiro_Mercoledi_Attivo: number;
/** Reflected: __Dati_Numero040*/ 
Ritiro_Giovedi_Attivo: number;
/** Reflected: __Dati_Numero041*/ 
Ritiro_Venerdi_Attivo: number;
/** Reflected: __Dati_Numero042*/ 
Ritiro_Sabato_Attivo: number;
/** Reflected: __Dati_Numero043*/ 
Ritiro_Domenica_Attivo: number;
/** Reflected: __Dati_Ora015*/ 
Ritiro_Lunedi_OraInizio: string;
/** Reflected: __Dati_Ora016*/ 
Ritiro_Martedi_OraInizio: string;
/** Reflected: __Dati_Ora017*/ 
Ritiro_Mercoledi_OraInizio: string;
/** Reflected: __Dati_Ora018*/ 
Ritiro_Giovedi_OraInizio: string;
/** Reflected: __Dati_Ora019*/ 
Ritiro_Venerdi_OraInizio: string;
/** Reflected: __Dati_Ora020*/ 
Ritiro_Sabato_OraInizio: string;
/** Reflected: __Dati_Ora021*/ 
Ritiro_Domenica_OraInizio: string;
/** Reflected: __Dati_Ora022*/ 
Ritiro_Lunedi_OraFine: string;
/** Reflected: __Dati_Ora023*/ 
Ritiro_Martedi_OraFine: string;
/** Reflected: __Dati_Ora024*/ 
Ritiro_Mercoledi_OraFine: string;
/** Reflected: __Dati_Ora025*/ 
Ritiro_Giovedi_OraFine: string;
/** Reflected: __Dati_Ora026*/ 
Ritiro_Venerdi_OraFine: string;
/** Reflected: __Dati_Ora027*/ 
Ritiro_Sabato_OraFine: string;
/** Reflected: __Dati_Ora028*/ 
Ritiro_Domenica_OraFine: string;
/** Reflected: __Dati_Testo034*/ 
Consegna_IdVettore: string;
/** Reflected: __Dati_Testo035*/ 
Ritiro_IdVettore: string;
/** Reflected: __Dati_Numero044*/ 
FlagAggiornaDaTipiZone: number;
/** Reflected: __Dati_Testo036*/ 
IdDocumentoPrincipaleSede: string;
/** Reflected: __Dati_Testo037*/ 
Integrazione_DatiVariAC: string
}