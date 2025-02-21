export interface IDocContabili {
_id: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo001*/ 
CodiceTipoDocContabile: string;
/** Reflected: __Dati_Testo002*/ 
IdTipoDocContabile: string;
/** Reflected: __Dati_Testo003*/ 
TxtTipoDocContabile: string;
/** Reflected: __Dati_Testo004*/ 
IdDocContabile: string;
/** Reflected: __Dati_Testo005*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Testo006*/ 
IdAccountOperatore: string;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_Testo007*/ 
CodiceDocContabile: string;
/** Reflected: __Dati_Data001*/ 
DataDocContabile: Date;
/** Reflected: __Dati_Testo008*/ 
IdAccountEmittente: string;
/** Reflected: __Dati_Testo009*/ 
IdAccountPagatore: string;
/** Reflected: __Dati_Testo010*/ 
IdAccountTutti: string;
/** Reflected: __Dati_Testo011*/ 
IdCassaBancaEmittente: string;
/** Reflected: __Dati_Testo012*/ 
IdCassaBancaPagatore: string;
/** Reflected: __Dati_Testo013*/ 
IdCassaBancaTutti: string;
/** Reflected: __Dati_Testo014*/ 
IdDocumentoCollegato: string;
/** Reflected: __Dati_Testo015*/ 
IdRubricaDocContabile: string;
/** Reflected: __Dati_Testo016*/ 
IdSedeInvioDocContabile: string;
/** Reflected: __Dati_Numero002*/ 
MeseDocContabile: number;
/** Reflected: __Dati_Testo017*/ 
AnnoMeseDocContabile: string;
/** Reflected: __Dati_Testo018*/ 
Note: string;
/** Reflected: __Dati_Numero003*/ 
SettimanaDocContabile: number;
/** Reflected: __Dati_Testo019*/ 
TxtAccountEmittente: string;
/** Reflected: __Dati_Testo020*/ 
TxtAccountDocContabile: string;
/** Reflected: __Dati_Testo021*/ 
TxtAccountPagatore: string;
/** Reflected: __Dati_Testo022*/ 
TxtFattore: string;
/** Reflected: __Dati_Numero004*/ 
FlagIn: number;
/** Reflected: __Dati_Numero005*/ 
FlagOut: number;
/** Reflected: __Dati_Numero006*/ 
Progressivo: number;
/** Reflected: __Dati_Numero007*/ 
AnnoDocContabile: number;
/** Reflected: __Dati_Numero008*/ 
FlagBloccato: number;
/** Reflected: __Dati_Testo023*/ 
CodiceEsterno: string;
/** Reflected: __Dati_Numero009*/ 
FlagCodiceEsterno: number;
/** Reflected: __Dati_Testo024*/ 
SimboloValuta: string;
/** Reflected: __Dati_Numero010*/ 
ConversioneValutaSuPrincipale: number;
/** Reflected: __Dati_Testo025*/ 
LinguaDocumento: string;
/** Reflected: __Dati_Numero011*/ 
VDaPagare_02: number;
/** Reflected: __Dati_Numero012*/ 
VDaPagareSegno_02: number;
/** Reflected: __Dati_Numero013*/ 
VDaPagareValuta_02: number;
/** Reflected: __Dati_Numero014*/ 
VEntrataImponibile_01: number;
/** Reflected: __Dati_Numero015*/ 
VEntrataTotale_01: number;
/** Reflected: __Dati_Numero016*/ 
VEntrataTotaleDaPagare_02: number;
/** Reflected: __Dati_Numero017*/ 
VImponibile_01: number;
/** Reflected: __Dati_Numero018*/ 
VImponibileSegno_01: number;
/** Reflected: __Dati_Numero019*/ 
VImponibileValuta_01: number;
/** Reflected: __Dati_Numero020*/ 
VImportoPreVariazioni_01: number;
/** Reflected: __Dati_Numero021*/ 
VImportoPreVariazioniSegno_01: number;
/** Reflected: __Dati_Numero022*/ 
VImportoPreVariazioniValuta_01: number;
/** Reflected: __Dati_Numero023*/ 
VIva_01: number;
/** Reflected: __Dati_Numero024*/ 
VIvaSegno_01: number;
/** Reflected: __Dati_Numero025*/ 
VIvaValuta_01: number;
/** Reflected: __Dati_Numero026*/ 
VPagato_01: number;
/** Reflected: __Dati_Numero027*/ 
VPagatoSegno_01: number;
/** Reflected: __Dati_Numero028*/ 
VPagatoValuta_01: number;
/** Reflected: __Dati_Numero029*/ 
VSconto_02: number;
/** Reflected: __Dati_Numero030*/ 
VScontoSegno_02: number;
/** Reflected: __Dati_Numero031*/ 
VScontoValuta_02: number;
/** Reflected: __Dati_Numero032*/ 
VTotale_01: number;
/** Reflected: __Dati_Numero033*/ 
VTotaleSegno_01: number;
/** Reflected: __Dati_Numero034*/ 
VTotaleValuta_01: number;
/** Reflected: __Dati_Numero035*/ 
VUscitaImponibile_01: number;
/** Reflected: __Dati_Numero036*/ 
VUscitaTotale_01: number;
/** Reflected: __Dati_Numero037*/ 
VUscitaResiduoDaPagare_02: number;
/** Reflected: __Dati_Numero038*/ 
VUscitaTotaleSegno_01: number;
/** Reflected: __Dati_Numero039*/ 
FlagPagatoParziale: number;
/** Reflected: __Dati_Numero040*/ 
FlagPagatoTutto: number;
/** Reflected: __Dati_Testo026*/ 
TxtDocContabile: string;
/** Reflected: __Dati_Data002*/ 
DataSaldoPagamento: Date;
/** Reflected: __Dati_Testo027*/ 
NoteTerminiPagamento: string;
/** Reflected: __Dati_Testo028*/ 
IdTipoDocContabilePerCodice: string;
/** Reflected: __Dati_Testo029*/ 
CodiceVisualizza: string;
/** Reflected: __Dati_Data003*/ 
DataRegistrazioneDocContabile: Date;
/** Reflected: __Dati_Numero041*/ 
FlagControlloNonCompleto_01: number;
/** Reflected: __Dati_Numero042*/ 
FlagProvvisorioPossibile: number;
/** Reflected: __Dati_Numero043*/ 
FlagProvvisorio: number;
/** Reflected: __Dati_Numero044*/ 
AnnoRegistrazioneDocContabile: number;
/** Reflected: __Dati_Testo030*/ 
AnnoMeseRegistrazioneDocContabile: string;
/** Reflected: __Dati_Numero045*/ 
MeseRegistrazioneDocContabile: number;
/** Reflected: __Dati_Numero046*/ 
SettimanaRegistrazioneDocContabile: number;
/** Reflected: __Dati_Testo031*/ 
TxtAutomaticoDocContabile: string;
/** Reflected: __Dati_Numero047*/ 
ConversioneValutaAPrincipale: number;
/** Reflected: __Dati_Numero048*/ 
FlagAggiornaValori_01: number;
/** Reflected: __Dati_Numero049*/ 
FlagAggiornaValori_02: number;
/** Reflected: __Dati_Numero050*/ 
FlagAggiornaValori_03: number;
/** Reflected: __Dati_Numero051*/ 
FlagControlloValori_02: number;
/** Reflected: __Dati_Testo032*/ 
IdValuta: string;
/** Reflected: __Dati_DataOra002*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Testo033*/ 
IdPeriodoContabile: string;
/** Reflected: __Dati_Testo034*/ 
TxtPeriodoContabile: string;
/** Reflected: __Dati_Testo035*/ 
SimboloValutaRidotto: string;
/** Reflected: __Dati_Testo036*/ 
TxtValuta: string;
/** Reflected: __Dati_Numero052*/ 
Zero: number;
/** Reflected: __Dati_Testo037*/ 
TxtAccountOperatore: string;
/** Reflected: __Dati_DataOra003*/ 
DataOraGenerazioneCodice: Date;
/** Reflected: __Dati_Testo038*/ 
LinguaPrincipale: string;
/** Reflected: __Dati_Testo039*/ 
IdAccountDocContabile: string;
/** Reflected: __Dati_Numero053*/ 
SettimanaAnnoDocContabile: number;
/** Reflected: __Dati_Numero054*/ 
SettimanaAnnoRegistrazioneDocContabile: number;
/** Reflected: __Dati_Numero055*/ 
FlagTipoFatturaVendita: number;
/** Reflected: __Dati_Numero056*/ 
FlagTipoFatturaAcquisto: number;
/** Reflected: __Dati_Numero057*/ 
FlagTipoGenericoAcquisto: number;
/** Reflected: __Dati_Numero058*/ 
FlagTipoGenericoVendita: number;
/** Reflected: __Dati_Testo040*/ 
IdTipologiaAccountDocContabile: string;
/** Reflected: __Dati_Testo041*/ 
CodiceRegistrazioneContabile: string;
/** Reflected: __Dati_Data004*/ 
DataValoreValuta: Date;
/** Reflected: __Dati_Numero059*/ 
FlagNoPagamentoIva: number;
/** Reflected: __Dati_Testo042*/ 
IdAliquotaAnagrafica: string;
/** Reflected: __Dati_Numero060*/ 
VTotaleDefinitivo_01: number;
/** Reflected: __Dati_Numero061*/ 
VTotaleDefinitivoValuta_01: number;
/** Reflected: __Dati_Numero062*/ 
FlagInviato: number;
/** Reflected: __Dati_Testo043*/ 
CodiceCodificaProtocollo: string;
/** Reflected: __Dati_DataOra004*/ 
DataOraInvio: Date;
/** Reflected: __Dati_Testo044*/ 
FlagResoconto: string;
/** Reflected: __Dati_Numero063*/ 
VTotaleDefinitivoSegno_01: number;
/** Reflected: __Dati_Testo045*/ 
IdOriginiDati: string;
/** Reflected: __Dati_Testo046*/ 
IdUtenteInvioFattura: string;
/** Reflected: __Dati_Testo047*/ 
TxtUtenteInvioFattura: string;
/** Reflected: __Dati_Numero064*/ 
FlagGeneraRicaviSpese: number;
/** Reflected: __Dati_Numero065*/ 
FlagGeneraStatoPatrimoniale: number;
/** Reflected: __Dati_Numero066*/ 
FlagRispettaProgressivo: number;
/** Reflected: __Dati_Numero067*/ 
VImponibileValutaSegno_01: number;
/** Reflected: __Dati_Numero068*/ 
VImportoPreVariazioniValutaSegno_01: number;
/** Reflected: __Dati_Numero069*/ 
VIvaValutaSegno_01: number;
/** Reflected: __Dati_Numero070*/ 
VPagatoValutaSegno_01: number;
/** Reflected: __Dati_Numero071*/ 
VScontoValutaSegno_02: number;
/** Reflected: __Dati_Numero072*/ 
VTotaleDefinitivoValutaSegno_01: number;
/** Reflected: __Dati_Numero073*/ 
VTotaleValutaSegno_01: number;
/** Reflected: __Dati_Numero074*/ 
VDaPagareValutaSegno_02: number;
/** Reflected: __Dati_Numero075*/ 
Contabilizzazione_Contabilizzabile: number;
/** Reflected: __Dati_Numero076*/ 
Contabilizzazione_DaContabilizzare: number;
/** Reflected: __Dati_Numero077*/ 
Contabilizzazione_Contabilizzato: number;
/** Reflected: __Dati_Testo048*/ 
IdUtenteContabilizzazione: string;
/** Reflected: __Dati_DataOra005*/ 
DataOraDaContabilizzare: Date;
/** Reflected: __Dati_DataOra006*/ 
DataOraContabilizzato: Date;
/** Reflected: __Dati_Testo049*/ 
IdIntermediario: string;
/** Reflected: __Dati_Testo050*/ 
IdAccountDestinatario: string;
/** Reflected: __Dati_Numero078*/ 
FlagFatturaElettronica: number;
/** Reflected: __Dati_Testo051*/ 
CodiceCIG: string;
/** Reflected: __Dati_Testo052*/ 
CodiceCUP: string;
/** Reflected: __Dati_Testo053*/ 
TipoTrasmissioneFattura: string;
/** Reflected: __Dati_Numero079*/ 
FlagGeneraFE: number;
/** Reflected: __Dati_Numero080*/ 
FlagGenerataFE: number;
/** Reflected: __Dati_Numero081*/ 
FlagInviataFE: number;
/** Reflected: __Dati_Numero082*/ 
IdDocFatEl: number;
/** Reflected: __Dati_Numero083*/ 
FlagPrevisionale: number;
/** Reflected: __Dati_DataOra007*/ 
DataOraPreparazioneFE: Date;
/** Reflected: __Dati_Numero084*/ 
FlagMarcaDaBollo: number;
/** Reflected: __Dati_Numero085*/ 
VMarcaDaBollo: number;
/** Reflected: __Dati_Numero086*/ 
FlagAllegaPDF: number;
/** Reflected: __Dati_Numero087*/ 
PesoLordo: number;
/** Reflected: __Dati_Numero088*/ 
PesoNetto: number;
/** Reflected: __Dati_Data005*/ 
DataCompetenzaIva: Date;
/** Reflected: __Dati_Testo054*/ 
CodiceCommessa: string;
/** Reflected: __Dati_Testo055*/ 
Causale: string;
/** Reflected: __Dati_Testo056*/ 
CodiceContratto: string;
/** Reflected: __Dati_Data006*/ 
DataContratto: Date;
/** Reflected: __Dati_Testo057*/ 
RiferimentoAmministrazione: string;
/** Reflected: __Dati_Numero089*/ 
VBonusFiscaleValuta: number;
/** Reflected: __Dati_Numero090*/ 
VBonusFiscale: number;
/** Reflected: __Dati_Testo058*/ 
CodiceCodifica: string;
/** Reflected: __Dati_Numero091*/ 
ProtocolloIntegrazione: number;
/** Reflected: __Dati_Numero092*/ 
FlagModificaAcquistoChiuso: number;
/** Reflected: __Dati_Testo059*/ 
IdAccountIntermediario: string;
/** Reflected: __Dati_Testo060*/ 
IdInstallazione: string;
/** Reflected: __Dati_Testo061*/ 
CodiceUnivocoSDI: string;
/** Reflected: __Dati_Testo062*/ 
IdContabilizzazione: string;
/** Reflected: __Dati_Numero093*/ 
FlagFatturaElettronicaIndispensabile: number;
/** Reflected: __Dati_Testo063*/ 
Integrazione_DatiVariAC: string;
/** Reflected: __Dati_Numero094*/ 
Contabilizzazione_DaContabilizzareAutomatico: number;
/** Reflected: __Dati_Numero095*/ 
Contabilizzazione_DaContabilizzare_SistemaEsterno: number;
/** Reflected: __Dati_Numero096*/ 
FlagNascondiScontoInXml: number
}