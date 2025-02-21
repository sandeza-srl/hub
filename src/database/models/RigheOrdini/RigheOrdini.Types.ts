export interface IRigheOrdini {
_id: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo001*/ 
IdArticolo: string;
/** Reflected: __Dati_Testo002*/ 
IdAccountCliente: string;
/** Reflected: __Dati_Testo003*/ 
CodiceDocOperativoOrigine: string;
/** Reflected: __Dati_Testo004*/ 
IdRigaOrdine: string;
/** Reflected: __Dati_Numero002*/ 
Progressivo: number;
/** Reflected: __Dati_Testo005*/ 
TxtAccountCliente: string;
/** Reflected: __Dati_Testo006*/ 
TxtArticolo: string;
/** Reflected: __Dati_Testo007*/ 
IdSedeDestinazione: string;
/** Reflected: __Dati_Testo008*/ 
NomeSedeDestinazione: string;
/** Reflected: __Dati_Data001*/ 
DataDocOperativoOrigine: Date;
/** Reflected: __Dati_Data002*/ 
DataRegistrazioneDocOperativoOrigine: Date;
/** Reflected: __Dati_Data003*/ 
DataInizioReale: Date;
/** Reflected: __Dati_Data004*/ 
DataFineReale: Date;
/** Reflected: __Dati_Data005*/ 
DataLimiteInizioLavorazioni: Date;
/** Reflected: __Dati_Data006*/ 
DataPrevistaConsegna: Date;
/** Reflected: __Dati_Data007*/ 
DataInizioPianificata: Date;
/** Reflected: __Dati_Data008*/ 
DataFinePianificata: Date;
/** Reflected: __Dati_Testo009*/ 
UmVendita: string;
/** Reflected: __Dati_Numero003*/ 
QtVendita: number;
/** Reflected: __Dati_Numero004*/ 
ConversioneUmVUmF: number;
/** Reflected: __Dati_Numero005*/ 
QP_Tt_Fin: number;
/** Reflected: __Dati_Numero006*/ 
FlagStato01Nuovo: number;
/** Reflected: __Dati_Numero007*/ 
FlagStato03InProduzione: number;
/** Reflected: __Dati_Numero008*/ 
FlagStato04Saldato: number;
/** Reflected: __Dati_Numero009*/ 
FlagStato02InAttesa: number;
/** Reflected: __Dati_Testo010*/ 
Avanzamento_TxtStatoRiga: string;
/** Reflected: __Dati_Testo011*/ 
IdRubricaOperatore: string;
/** Reflected: __Dati_Testo012*/ 
TxtAccountOperatore: string;
/** Reflected: __Dati_Testo013*/ 
IdRubricaCliente: string;
/** Reflected: __Dati_Testo014*/ 
NomeRubricaCliente: string;
/** Reflected: __Dati_Testo015*/ 
UmFinito: string;
/** Reflected: __Dati_Numero010*/ 
VolumeUnitarioUmDefault: number;
/** Reflected: __Dati_Numero011*/ 
PesoUnitarioUmDefault: number;
/** Reflected: __Dati_Numero012*/ 
LunghezzaUnitarioUmDefault: number;
/** Reflected: __Dati_Testo016*/ 
UmPesoDefault: string;
/** Reflected: __Dati_Testo017*/ 
UmLunghezzaDefault: string;
/** Reflected: __Dati_Testo018*/ 
UmVolumeDefault: string;
/** Reflected: __Dati_Numero013*/ 
VolumeTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero014*/ 
Avanzamento_Percentuale: number;
/** Reflected: __Dati_Numero015*/ 
AnnoCreazione: number;
/** Reflected: __Dati_Data009*/ 
DataCreazione: Date;
/** Reflected: __Dati_Numero016*/ 
MeseCreazione: number;
/** Reflected: __Dati_Numero017*/ 
AnnoConsegna: number;
/** Reflected: __Dati_Numero018*/ 
MeseConsegna: number;
/** Reflected: __Dati_Numero019*/ 
SettimanaConsegna: number;
/** Reflected: __Dati_Numero020*/ 
SettimanaLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Numero021*/ 
MeseLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Numero022*/ 
AnnoLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Numero023*/ 
ConvMisuraLunghezzaDefault: number;
/** Reflected: __Dati_Numero024*/ 
ConvMisuraPesoDefault: number;
/** Reflected: __Dati_Numero025*/ 
ConvMisuraVolumeDefault: number;
/** Reflected: __Dati_Testo019*/ 
UmLunghezza: string;
/** Reflected: __Dati_Testo020*/ 
UmPeso: string;
/** Reflected: __Dati_Testo021*/ 
UmVolume: string;
/** Reflected: __Dati_Numero026*/ 
ConvMisuraLunghezza: number;
/** Reflected: __Dati_Numero027*/ 
ConvMisuraPeso: number;
/** Reflected: __Dati_Numero028*/ 
ConvMisuraVolume: number;
/** Reflected: __Dati_Testo022*/ 
IdClasseUmPeso: string;
/** Reflected: __Dati_Testo023*/ 
IdClasseUmLunghezza: string;
/** Reflected: __Dati_Testo024*/ 
IdClasseUmVolume: string;
/** Reflected: __Dati_Numero029*/ 
LTOrdineCreazione: number;
/** Reflected: __Dati_Numero030*/ 
LT1OrdineConferma: number;
/** Reflected: __Dati_Numero031*/ 
LTCreazioneInizioR: number;
/** Reflected: __Dati_Numero032*/ 
LTCreazioneInizioT: number;
/** Reflected: __Dati_Numero033*/ 
LT5InizioFineT: number;
/** Reflected: __Dati_Numero034*/ 
LT5InizioFineR: number;
/** Reflected: __Dati_Numero035*/ 
LTCreazioneLimite: number;
/** Reflected: __Dati_Numero036*/ 
LTConfermaFineR: number;
/** Reflected: __Dati_Numero037*/ 
LT2ConfermaCreazione: number;
/** Reflected: __Dati_Numero038*/ 
LTConfermaLimite: number;
/** Reflected: __Dati_Numero039*/ 
LTConfermaSpedizione: number;
/** Reflected: __Dati_Numero040*/ 
LTCreazioneSpezione: number;
/** Reflected: __Dati_Numero041*/ 
LTConfermaInizioR: number;
/** Reflected: __Dati_Numero042*/ 
LTCreazioneFineT: number;
/** Reflected: __Dati_Numero043*/ 
LTCreazioneFineR: number;
/** Reflected: __Dati_Numero044*/ 
TempoLottiTeorico: number;
/** Reflected: __Dati_Numero045*/ 
VVenditaUnitarioStandard: number;
/** Reflected: __Dati_Numero046*/ 
VVenditaTotale: number;
/** Reflected: __Dati_Numero047*/ 
QP_R_Fin: number;
/** Reflected: __Dati_Numero048*/ 
MargineTotaleTeorico: number;
/** Reflected: __Dati_Numero049*/ 
MargineUnitarioTeorico: number;
/** Reflected: __Dati_Numero050*/ 
MarginePercentualeTeorico: number;
/** Reflected: __Dati_Numero051*/ 
MarginePercentualeReale: number;
/** Reflected: __Dati_Numero052*/ 
MargineTotaleReale: number;
/** Reflected: __Dati_Numero053*/ 
MargineUnitarioReale: number;
/** Reflected: __Dati_Numero054*/ 
DiffPercMargineTeoricoReale: number;
/** Reflected: __Dati_Testo025*/ 
CodiceEsternoDocOperativoOrigine: string;
/** Reflected: __Dati_Data010*/ 
DataStampaCartellinoProduzione: Date;
/** Reflected: __Dati_Numero055*/ 
Priorita: number;
/** Reflected: __Dati_Data011*/ 
DataGenerazioneLotti: Date;
/** Reflected: __Dati_Data012*/ 
DataBenestare: Date;
/** Reflected: __Dati_Testo026*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Testo027*/ 
IdRubricaDestinatario: string;
/** Reflected: __Dati_Testo028*/ 
IdAccountDestinatario: string;
/** Reflected: __Dati_Numero056*/ 
LT3CreazioneBenestare: number;
/** Reflected: __Dati_Numero057*/ 
LT4BenestareInizioT: number;
/** Reflected: __Dati_Numero058*/ 
BenestareProduzione_FlagBenestareDato: number;
/** Reflected: __Dati_Numero059*/ 
LT6FineRSpedizione: number;
/** Reflected: __Dati_Numero060*/ 
LT4BenestareInizioR: number;
/** Reflected: __Dati_Testo029*/ 
NomeRubricaDestinatario: string;
/** Reflected: __Dati_Testo030*/ 
TxtAccountSocieta: string;
/** Reflected: __Dati_Testo031*/ 
TxtAccountDestinatario: string;
/** Reflected: __Dati_Testo032*/ 
IdAccountOperatore: string;
/** Reflected: __Dati_Testo033*/ 
CodiceRigaOrdine: string;
/** Reflected: __Dati_Numero061*/ 
CodiceNumeroRigaOrdine: number;
/** Reflected: __Dati_Testo034*/ 
IdTipoRigaOrdine: string;
/** Reflected: __Dati_Testo035*/ 
CodiceTipoRigaOrdine: string;
/** Reflected: __Dati_Testo036*/ 
TxtTipoRigaOrdine: string;
/** Reflected: __Dati_Numero062*/ 
FlagCodiceEsternoObbligatorio: number;
/** Reflected: __Dati_Numero063*/ 
FlagBloccato: number;
/** Reflected: __Dati_Testo037*/ 
CodiceArticolo: string;
/** Reflected: __Dati_Numero064*/ 
QT_R_Fin: number;
/** Reflected: __Dati_Testo038*/ 
CodiceDisegno: string;
/** Reflected: __Dati_Testo039*/ 
IdDocOperativoOrigine: string;
/** Reflected: __Dati_Testo040*/ 
NoteProduzione: string;
/** Reflected: __Dati_Testo041*/ 
AnnoMeseConsegna: string;
/** Reflected: __Dati_Testo042*/ 
AnnoSettimanaConsegna: string;
/** Reflected: __Dati_Testo043*/ 
AnnoMeseLimiteInizioLavorazioni: string;
/** Reflected: __Dati_Testo044*/ 
AnnoSettimanaLimiteInizioLavorazioni: string;
/** Reflected: __Dati_Testo045*/ 
CodiceCommercialeItem: string;
/** Reflected: __Dati_Testo046*/ 
CodiceTxtArticoloAutomatico: string;
/** Reflected: __Dati_Numero065*/ 
FlagAggiornaDaDocOperativoOrigine: number;
/** Reflected: __Dati_Numero066*/ 
FlagAggiorna01DaLotti: number;
/** Reflected: __Dati_Numero067*/ 
FlagAggiorna02Totali: number;
/** Reflected: __Dati_Numero068*/ 
Zero: number;
/** Reflected: __Dati_Testo047*/ 
IdStatoArticoloCiclo: string;
/** Reflected: __Dati_Testo048*/ 
TxtStatoArticoloCiclo: string;
/** Reflected: __Dati_Testo049*/ 
IdTipoDocOperativoOrigine: string;
/** Reflected: __Dati_Testo050*/ 
IdVoceDocOperativoOrigine: string;
/** Reflected: __Dati_Testo051*/ 
TxtRigaOrdine: string;
/** Reflected: __Dati_Testo052*/ 
CodiceItemCliente: string;
/** Reflected: __Dati_Testo053*/ 
DescrizioneItemCliente: string;
/** Reflected: __Dati_Testo054*/ 
RevisioneDisegno: string;
/** Reflected: __Dati_Testo055*/ 
RevisioneArticolo: string;
/** Reflected: __Dati_Testo056*/ 
IdItemArticolo: string;
/** Reflected: __Dati_Testo057*/ 
NumeroDecimaliValori: string;
/** Reflected: __Dati_Testo058*/ 
NumeroDecimaliQuantita: string;
/** Reflected: __Dati_Numero069*/ 
CTAD_Tt: number;
/** Reflected: __Dati_Numero070*/ 
CTAD_Tp: number;
/** Reflected: __Dati_Numero071*/ 
CTAD_R: number;
/** Reflected: __Dati_Numero072*/ 
CTF_R: number;
/** Reflected: __Dati_Numero073*/ 
CTF_Tt: number;
/** Reflected: __Dati_Numero074*/ 
CTF_Tp: number;
/** Reflected: __Dati_Numero075*/ 
CTL_R: number;
/** Reflected: __Dati_Numero076*/ 
CTL_Tt: number;
/** Reflected: __Dati_Numero077*/ 
CTL_Tp: number;
/** Reflected: __Dati_Numero078*/ 
CTLE_R: number;
/** Reflected: __Dati_Numero079*/ 
CTLE_Tt: number;
/** Reflected: __Dati_Numero080*/ 
CTLE_Tp: number;
/** Reflected: __Dati_Numero081*/ 
CTM_R: number;
/** Reflected: __Dati_Numero082*/ 
CTM_Tt: number;
/** Reflected: __Dati_Numero083*/ 
CTM_Tp: number;
/** Reflected: __Dati_Numero084*/ 
CTP_R: number;
/** Reflected: __Dati_Numero085*/ 
CTP_Tt: number;
/** Reflected: __Dati_Numero086*/ 
CTP_Tp: number;
/** Reflected: __Dati_Numero087*/ 
CTTRA_R: number;
/** Reflected: __Dati_Numero088*/ 
CTTRA_Tt: number;
/** Reflected: __Dati_Numero089*/ 
CTTRA_Tp: number;
/** Reflected: __Dati_Numero090*/ 
CTQ_R: number;
/** Reflected: __Dati_Numero091*/ 
CTQ_Tt: number;
/** Reflected: __Dati_Numero092*/ 
CTQ_Tp: number;
/** Reflected: __Dati_Numero093*/ 
CTUt_R: number;
/** Reflected: __Dati_Numero094*/ 
CTUt_Tt: number;
/** Reflected: __Dati_Numero095*/ 
CTUt_Tp: number;
/** Reflected: __Dati_Numero096*/ 
CTT_R: number;
/** Reflected: __Dati_Numero097*/ 
CTT_Tt: number;
/** Reflected: __Dati_Numero098*/ 
CTT_Tp: number;
/** Reflected: __Dati_Numero099*/ 
PercIncCTAD_R: number;
/** Reflected: __Dati_Numero100*/ 
PercIncCTAD_Tt: number;
/** Reflected: __Dati_Numero101*/ 
PercIncCTAD_Tp: number;
/** Reflected: __Dati_Numero102*/ 
PercIncCTF_R: number;
/** Reflected: __Dati_Numero103*/ 
PercIncCTF_Tt: number;
/** Reflected: __Dati_Numero104*/ 
PercIncCTF_Tp: number;
/** Reflected: __Dati_Numero105*/ 
PercIncCTL_R: number;
/** Reflected: __Dati_Numero106*/ 
PercIncCTL_Tt: number;
/** Reflected: __Dati_Numero107*/ 
PercIncCTL_Tp: number;
/** Reflected: __Dati_Numero108*/ 
PercIncCTLE_R: number;
/** Reflected: __Dati_Numero109*/ 
PercIncCTLE_Tt: number;
/** Reflected: __Dati_Numero110*/ 
PercIncCTLE_Tp: number;
/** Reflected: __Dati_Numero111*/ 
PercIncCTM_R: number;
/** Reflected: __Dati_Numero112*/ 
PercIncCTM_Tt: number;
/** Reflected: __Dati_Numero113*/ 
PercIncCTM_Tp: number;
/** Reflected: __Dati_Numero114*/ 
PercIncCTP_R: number;
/** Reflected: __Dati_Numero115*/ 
PercIncCTP_Tt: number;
/** Reflected: __Dati_Numero116*/ 
PercIncCTP_Tp: number;
/** Reflected: __Dati_Numero117*/ 
PercIncCTQ_Tt: number;
/** Reflected: __Dati_Numero118*/ 
PercIncCTQ_R: number;
/** Reflected: __Dati_Numero119*/ 
PercIncCTQ_Tp: number;
/** Reflected: __Dati_Numero120*/ 
PercIncCTUt_Tp: number;
/** Reflected: __Dati_Numero121*/ 
PercIncCTUt_Tt: number;
/** Reflected: __Dati_Numero122*/ 
PercIncCTUt_R: number;
/** Reflected: __Dati_Numero123*/ 
PercIncCTTRA_R: number;
/** Reflected: __Dati_Numero124*/ 
PercIncCTTRA_Tt: number;
/** Reflected: __Dati_Numero125*/ 
PercIncCTTRA_Tp: number;
/** Reflected: __Dati_Numero126*/ 
QP_Tp_Fin: number;
/** Reflected: __Dati_Testo059*/ 
TxtUtenteBenestare: string;
/** Reflected: __Dati_Testo060*/ 
FormatoCartellinoProduzione: string;
/** Reflected: __Dati_Testo061*/ 
IdTipoDocumentoCartellinoProduzione: string;
/** Reflected: __Dati_Testo062*/ 
IdSottoTipoDocumentoCartellinoProduzione: string;
/** Reflected: __Dati_Numero127*/ 
FlagCartellinoProduzioneStampato: number;
/** Reflected: __Dati_Testo063*/ 
TxtUtenteStampaCartellinoProduzione: string;
/** Reflected: __Dati_Numero128*/ 
CUAD_Tt: number;
/** Reflected: __Dati_Numero129*/ 
CUAD_Tp: number;
/** Reflected: __Dati_Numero130*/ 
CUAD_R: number;
/** Reflected: __Dati_Numero131*/ 
CUF_Tt: number;
/** Reflected: __Dati_Numero132*/ 
CUF_Tp: number;
/** Reflected: __Dati_Numero133*/ 
CUF_R: number;
/** Reflected: __Dati_Numero134*/ 
CUL_Tt: number;
/** Reflected: __Dati_Numero135*/ 
CUL_Tp: number;
/** Reflected: __Dati_Numero136*/ 
CUL_R: number;
/** Reflected: __Dati_Numero137*/ 
CULE_Tt: number;
/** Reflected: __Dati_Numero138*/ 
CULE_Tp: number;
/** Reflected: __Dati_Numero139*/ 
CULE_R: number;
/** Reflected: __Dati_Numero140*/ 
CUM_Tt: number;
/** Reflected: __Dati_Numero141*/ 
CUM_Tp: number;
/** Reflected: __Dati_Numero142*/ 
CUM_R: number;
/** Reflected: __Dati_Numero143*/ 
CUP_Tt: number;
/** Reflected: __Dati_Numero144*/ 
CUP_Tp: number;
/** Reflected: __Dati_Numero145*/ 
CUP_R: number;
/** Reflected: __Dati_Numero146*/ 
CUQ_R: number;
/** Reflected: __Dati_Numero147*/ 
CUQ_Tt: number;
/** Reflected: __Dati_Numero148*/ 
CUQ_Tp: number;
/** Reflected: __Dati_Numero149*/ 
CUTRA_Tt: number;
/** Reflected: __Dati_Numero150*/ 
CUTRA_Tp: number;
/** Reflected: __Dati_Numero151*/ 
CUTRA_R: number;
/** Reflected: __Dati_Numero152*/ 
CUUt_R: number;
/** Reflected: __Dati_Numero153*/ 
CUUt_Tt: number;
/** Reflected: __Dati_Numero154*/ 
CUUt_Tp: number;
/** Reflected: __Dati_Numero155*/ 
CUT_Tt: number;
/** Reflected: __Dati_Numero156*/ 
CUT_Tp: number;
/** Reflected: __Dati_Numero157*/ 
CUT_R: number;
/** Reflected: __Dati_Numero158*/ 
CTS_R: number;
/** Reflected: __Dati_Numero159*/ 
CTS_Tt: number;
/** Reflected: __Dati_Numero160*/ 
CTS_Tp: number;
/** Reflected: __Dati_Numero161*/ 
CTB_R: number;
/** Reflected: __Dati_Numero162*/ 
CTB_Tt: number;
/** Reflected: __Dati_Numero163*/ 
CTB_Tp: number;
/** Reflected: __Dati_Numero164*/ 
QS_R_Fin: number;
/** Reflected: __Dati_Numero165*/ 
QS_Tt_Fin: number;
/** Reflected: __Dati_Numero166*/ 
QS_Tp_Fin: number;
/** Reflected: __Dati_Numero167*/ 
QT_Tt_Fin: number;
/** Reflected: __Dati_Numero168*/ 
QT_Tp_Fin: number;
/** Reflected: __Dati_Numero169*/ 
CUS_R: number;
/** Reflected: __Dati_Numero170*/ 
CUS_Tt: number;
/** Reflected: __Dati_Numero171*/ 
CUS_Tp: number;
/** Reflected: __Dati_Numero172*/ 
CUB_R: number;
/** Reflected: __Dati_Numero173*/ 
CUB_Tt: number;
/** Reflected: __Dati_Numero174*/ 
CUB_Tp: number;
/** Reflected: __Dati_Numero175*/ 
Diff_CUAD_TpR: number;
/** Reflected: __Dati_Numero176*/ 
Diff_CUAD_TtR: number;
/** Reflected: __Dati_Numero177*/ 
Diff_CUF_TtR: number;
/** Reflected: __Dati_Numero178*/ 
Diff_CUF_TpR: number;
/** Reflected: __Dati_Numero179*/ 
Diff_CULE_TtR: number;
/** Reflected: __Dati_Numero180*/ 
Diff_CULE_TpR: number;
/** Reflected: __Dati_Numero181*/ 
Diff_CUM_TpR: number;
/** Reflected: __Dati_Numero182*/ 
Diff_CUM_TtR: number;
/** Reflected: __Dati_Numero183*/ 
Diff_CUP_TtR: number;
/** Reflected: __Dati_Numero184*/ 
Diff_CUP_TpR: number;
/** Reflected: __Dati_Numero185*/ 
Diff_CUS_TtR: number;
/** Reflected: __Dati_Numero186*/ 
Diff_CUS_TpR: number;
/** Reflected: __Dati_Numero187*/ 
Diff_CUT_TpR: number;
/** Reflected: __Dati_Numero188*/ 
Diff_CUT_TtR: number;
/** Reflected: __Dati_Numero189*/ 
Diff_CUUt_TtR: number;
/** Reflected: __Dati_Numero190*/ 
Diff_CUUt_TpR: number;
/** Reflected: __Dati_Numero191*/ 
Diff_CUQ_TpR: number;
/** Reflected: __Dati_Numero192*/ 
Diff_CUQ_TtR: number;
/** Reflected: __Dati_Numero193*/ 
PercDiffCUAD_RTt: number;
/** Reflected: __Dati_Numero194*/ 
PercDiffCUAD_RTp: number;
/** Reflected: __Dati_Numero195*/ 
PercDiffCUF_RTp: number;
/** Reflected: __Dati_Numero196*/ 
PercDiffCUF_RTt: number;
/** Reflected: __Dati_Numero197*/ 
PercDiffCULE_RTt: number;
/** Reflected: __Dati_Numero198*/ 
PercDiffCULE_RTp: number;
/** Reflected: __Dati_Numero199*/ 
PercDiffCUL_RTp: number;
/** Reflected: __Dati_Numero200*/ 
PercDiffCUM_RTt: number;
/** Reflected: __Dati_Numero201*/ 
PercDiffCUM_RTp: number;
/** Reflected: __Dati_Numero202*/ 
PercDiffCUP_RTp: number;
/** Reflected: __Dati_Numero203*/ 
PercDiffCUP_RTt: number;
/** Reflected: __Dati_Numero204*/ 
PercDiffCUQ_RTt: number;
/** Reflected: __Dati_Numero205*/ 
PercDiffCUQ_RTp: number;
/** Reflected: __Dati_Numero206*/ 
PercDiffCUS_RTt: number;
/** Reflected: __Dati_Numero207*/ 
PercDiffCUS_RTp: number;
/** Reflected: __Dati_Numero208*/ 
PercDiffCUT_RTt: number;
/** Reflected: __Dati_Numero209*/ 
PercDiffCUT_RTp: number;
/** Reflected: __Dati_Numero210*/ 
PercDiffCUTRA_RTp: number;
/** Reflected: __Dati_Numero211*/ 
PercDiffCUTRA_RTt: number;
/** Reflected: __Dati_Numero212*/ 
PercDiffCUUt_RTt: number;
/** Reflected: __Dati_Numero213*/ 
PercDiffCUUt_RTp: number;
/** Reflected: __Dati_Numero214*/ 
Diff_CUL_TtR: number;
/** Reflected: __Dati_Numero215*/ 
Diff_CUL_TpR: number;
/** Reflected: __Dati_Numero216*/ 
Diff_CUTRA_TpR: number;
/** Reflected: __Dati_Numero217*/ 
Diff_CUTRA_TtR: number;
/** Reflected: __Dati_Numero218*/ 
LunghezzaTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero219*/ 
LunghezzaTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero220*/ 
LunghezzaTotale_Tt: number;
/** Reflected: __Dati_Numero221*/ 
LunghezzaTotale_R: number;
/** Reflected: __Dati_Numero222*/ 
PesoTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero223*/ 
PesoTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero224*/ 
PesoTotale_Tt: number;
/** Reflected: __Dati_Numero225*/ 
PesoTotale_R: number;
/** Reflected: __Dati_Numero226*/ 
VolumeTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero227*/ 
VolumeTotale_Tt: number;
/** Reflected: __Dati_Numero228*/ 
VolumeTotale_R: number;
/** Reflected: __Dati_Testo064*/ 
TxtMassimoAumentoCosto: string;
/** Reflected: __Dati_Testo065*/ 
TxtMassimoAumentoCostoPerc: string;
/** Reflected: __Dati_Numero229*/ 
PercDiffCUL_RTt: number;
/** Reflected: __Dati_Numero230*/ 
PercIncCTB_Tt: number;
/** Reflected: __Dati_Numero231*/ 
PercIncCTB_Tp: number;
/** Reflected: __Dati_Numero232*/ 
PercIncCTB_R: number;
/** Reflected: __Dati_Numero233*/ 
PercIncCTS_R: number;
/** Reflected: __Dati_Numero234*/ 
PercIncCTS_Tt: number;
/** Reflected: __Dati_Numero235*/ 
PercIncCTS_Tp: number;
/** Reflected: __Dati_Numero236*/ 
PercRicarico: number;
/** Reflected: __Dati_Numero237*/ 
CTT_Tt_Ricarico: number;
/** Reflected: __Dati_Numero238*/ 
CTT_Tp_Ricarico: number;
/** Reflected: __Dati_Numero239*/ 
CTT_R_Ricarico: number;
/** Reflected: __Dati_Numero240*/ 
CUT_R_Ricarico: number;
/** Reflected: __Dati_Numero241*/ 
CUT_Tt_Ricarico: number;
/** Reflected: __Dati_Numero242*/ 
CUT_Tp_Ricarico: number;
/** Reflected: __Dati_Numero243*/ 
PercDiffCUB_RTp: number;
/** Reflected: __Dati_Numero244*/ 
PercDiffCUB_RTt: number;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_DataOra002*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Numero245*/ 
OrdineStatoRiga: number;
/** Reflected: __Dati_Numero246*/ 
Priorita_FlagBloccata: number;
/** Reflected: __Dati_Testo066*/ 
CodiceRevisioneItemClienteAutomatico: string;
/** Reflected: __Dati_Numero247*/ 
FlagPianificazioneInRitardo: number;
/** Reflected: __Dati_Testo067*/ 
IdInstallazione: string;
/** Reflected: __Dati_Testo068*/ 
IdDocumentoPrincipale: string;
/** Reflected: __Dati_Testo069*/ 
TestJs: string;
/** Reflected: __Dati_Testo070*/ 
IdDocImgDisegno: string;
/** Reflected: __Dati_Numero248*/ 
FlagDocumentiDisegnoCopiati: number;
/** Reflected: __Dati_Numero249*/ 
Performance_TriggerAggiornamentoRelazione: number;
/** Reflected: __Dati_Testo071*/ 
Integrazione_DatiVariAC: string;
/** Reflected: __Dati_Numero250*/ 
CTAD_Tf: number;
/** Reflected: __Dati_Numero251*/ 
CTF_Tf: number;
/** Reflected: __Dati_Numero252*/ 
CTL_Tf: number;
/** Reflected: __Dati_Numero253*/ 
CTLE_Tf: number;
/** Reflected: __Dati_Numero254*/ 
CTM_Tf: number;
/** Reflected: __Dati_Numero255*/ 
CTP_Tf: number;
/** Reflected: __Dati_Numero256*/ 
CTQ_Tf: number;
/** Reflected: __Dati_Numero257*/ 
CTS_Tf: number;
/** Reflected: __Dati_Numero258*/ 
CTT_Tf: number;
/** Reflected: __Dati_Numero259*/ 
CTT_Tf_Ricarico: number;
/** Reflected: __Dati_Numero260*/ 
CTTRA_Tf: number;
/** Reflected: __Dati_Numero261*/ 
CTUt_Tf: number;
/** Reflected: __Dati_Numero262*/ 
CTB_Tf: number;
/** Reflected: __Dati_Numero263*/ 
Avanzamento_NumeroLottiTotale: number;
/** Reflected: __Dati_Numero264*/ 
Avanzamento_NumeroLottiSaldati: number;
/** Reflected: __Dati_Testo072*/ 
Avanzamento_TxtAutomatico: string
}