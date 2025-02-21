export interface ILottiProduzione {
_id: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo001*/ 
IdArticolo: string;
/** Reflected: __Dati_Testo002*/ 
IdAccountCliente: string;
/** Reflected: __Dati_Testo003*/ 
CodiceRigaOrdine: string;
/** Reflected: __Dati_Testo004*/ 
IdRigaOrdine: string;
/** Reflected: __Dati_Testo005*/ 
TxtAccountCliente: string;
/** Reflected: __Dati_Testo006*/ 
TxtArticolo: string;
/** Reflected: __Dati_Data001*/ 
DataInizioReale: Date;
/** Reflected: __Dati_Data002*/ 
DataFineReale: Date;
/** Reflected: __Dati_Data003*/ 
DataLimiteInizioLavorazioni: Date;
/** Reflected: __Dati_Data004*/ 
DataPrevistaConsegna: Date;
/** Reflected: __Dati_Data005*/ 
DataInizioPianificata: Date;
/** Reflected: __Dati_Data006*/ 
DataFinePianificata: Date;
/** Reflected: __Dati_Numero002*/ 
QP_Tt_Fin: number;
/** Reflected: __Dati_Numero003*/ 
FlagStato01Nuovo: number;
/** Reflected: __Dati_Numero004*/ 
FlagStato02AttesaInizio: number;
/** Reflected: __Dati_Numero005*/ 
FlagStato03InProduzione: number;
/** Reflected: __Dati_Numero006*/ 
FlagStato04Saldato: number;
/** Reflected: __Dati_Testo007*/ 
Avanzamento_TxtStatoLottoProduzione: string;
/** Reflected: __Dati_Testo008*/ 
UmFinito: string;
/** Reflected: __Dati_Numero007*/ 
Avanzamento_Percentuale: number;
/** Reflected: __Dati_Testo009*/ 
IdLottoProduzione: string;
/** Reflected: __Dati_Testo010*/ 
IdCiclo: string;
/** Reflected: __Dati_Testo011*/ 
Ciclo_TxtCiclo: string;
/** Reflected: __Dati_Numero008*/ 
PercQtIniziale: number;
/** Reflected: __Dati_Numero009*/ 
QT_Tt_Fin: number;
/** Reflected: __Dati_Numero010*/ 
ProgLotto: number;
/** Reflected: __Dati_Numero011*/ 
SubPrioritaLotti: number;
/** Reflected: __Dati_Testo012*/ 
TxtTipoLotto: string;
/** Reflected: __Dati_Data007*/ 
DataCreazione: Date;
/** Reflected: __Dati_Numero012*/ 
AnnoCreazione: number;
/** Reflected: __Dati_Numero013*/ 
MeseCreazione: number;
/** Reflected: __Dati_Numero014*/ 
AnnoConsegna: number;
/** Reflected: __Dati_Numero015*/ 
AnnoLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Numero016*/ 
MeseConsegna: number;
/** Reflected: __Dati_Numero017*/ 
MeseLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Numero018*/ 
SettimanaConsegna: number;
/** Reflected: __Dati_Numero019*/ 
SettimanaLimiteInizioLavorazioni: number;
/** Reflected: __Dati_Testo013*/ 
FlagSelezione: string;
/** Reflected: __Dati_Numero020*/ 
QP_R_Fin: number;
/** Reflected: __Dati_Numero021*/ 
Priorita: number;
/** Reflected: __Dati_Testo014*/ 
CodiceLottoProduzione: string;
/** Reflected: __Dati_Testo015*/ 
CodiceArticolo: string;
/** Reflected: __Dati_Testo016*/ 
Ciclo_CodiceTipoCiclo: string;
/** Reflected: __Dati_Testo017*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Numero022*/ 
QT_R_Fin: number;
/** Reflected: __Dati_Testo018*/ 
CodiceDisegno: string;
/** Reflected: __Dati_Testo019*/ 
CodiceTxtArticoloAutomatico: string;
/** Reflected: __Dati_Testo020*/ 
IdAccountDestinatario: string;
/** Reflected: __Dati_Testo021*/ 
IdDocOperativoOrigine: string;
/** Reflected: __Dati_Testo022*/ 
IdTipoDocOperativoOrigine: string;
/** Reflected: __Dati_Testo023*/ 
IdSedeDestinazione: string;
/** Reflected: __Dati_Numero023*/ 
Zero: number;
/** Reflected: __Dati_Testo024*/ 
IdTipoRigaOrdine: string;
/** Reflected: __Dati_Testo025*/ 
IdTipoRigaOrdinePerCodice: string;
/** Reflected: __Dati_Testo026*/ 
IdStatoArticoloCiclo: string;
/** Reflected: __Dati_Testo027*/ 
TxtStatoArticoloCiclo: string;
/** Reflected: __Dati_Testo028*/ 
IdLottoProduzioneOrigine: string;
/** Reflected: __Dati_Testo029*/ 
TxtAccountDestinatario: string;
/** Reflected: __Dati_Testo030*/ 
Ciclo_CodiceRevisione: string;
/** Reflected: __Dati_Testo031*/ 
Note: string;
/** Reflected: __Dati_Testo032*/ 
ProssimoLotto_TxtAvviso: string;
/** Reflected: __Dati_Testo033*/ 
AnnoMeseConsegna: string;
/** Reflected: __Dati_Testo034*/ 
AnnoSettimanaConsegna: string;
/** Reflected: __Dati_Testo035*/ 
AnnoMeseLimiteInizioLavorazioni: string;
/** Reflected: __Dati_Testo036*/ 
AnnoSettimanaLimiteInizioLavorazioni: string;
/** Reflected: __Dati_Testo037*/ 
CodiceTxtDisegnoArticoloAutomatico: string;
/** Reflected: __Dati_Numero024*/ 
FlagAggiorna01DaFasi: number;
/** Reflected: __Dati_Numero025*/ 
FlagAggiorna02Totali: number;
/** Reflected: __Dati_Testo038*/ 
RevisioneArticolo: string;
/** Reflected: __Dati_Testo039*/ 
RevisioneDisegno: string;
/** Reflected: __Dati_Testo040*/ 
IdVoceDocOperativoOrigine: string;
/** Reflected: __Dati_Testo041*/ 
IdItemArticolo: string;
/** Reflected: __Dati_Testo042*/ 
CodiceItemCliente: string;
/** Reflected: __Dati_Testo043*/ 
DescrizioneItemCliente: string;
/** Reflected: __Dati_Testo044*/ 
NumeroDecimaliValori: string;
/** Reflected: __Dati_Testo045*/ 
NumeroDecimaliQuantita: string;
/** Reflected: __Dati_Numero026*/ 
PercScartoPrevista: number;
/** Reflected: __Dati_Numero027*/ 
CTAD_R: number;
/** Reflected: __Dati_Numero028*/ 
CTAD_Tt: number;
/** Reflected: __Dati_Numero029*/ 
CTAD_Tp: number;
/** Reflected: __Dati_Numero030*/ 
CTF_R: number;
/** Reflected: __Dati_Numero031*/ 
CTF_Tt: number;
/** Reflected: __Dati_Numero032*/ 
CTF_Tp: number;
/** Reflected: __Dati_Numero033*/ 
CTL_R: number;
/** Reflected: __Dati_Numero034*/ 
CTL_Tt: number;
/** Reflected: __Dati_Numero035*/ 
CTL_Tp: number;
/** Reflected: __Dati_Numero036*/ 
CTLE_R: number;
/** Reflected: __Dati_Numero037*/ 
CTLE_Tt: number;
/** Reflected: __Dati_Numero038*/ 
CTLE_Tp: number;
/** Reflected: __Dati_Numero039*/ 
CTM_R: number;
/** Reflected: __Dati_Numero040*/ 
CTM_Tt: number;
/** Reflected: __Dati_Numero041*/ 
CTM_Tp: number;
/** Reflected: __Dati_Numero042*/ 
CTP_R: number;
/** Reflected: __Dati_Numero043*/ 
CTP_Tt: number;
/** Reflected: __Dati_Numero044*/ 
CTP_Tp: number;
/** Reflected: __Dati_Numero045*/ 
CTT_R: number;
/** Reflected: __Dati_Numero046*/ 
CTT_Tt: number;
/** Reflected: __Dati_Numero047*/ 
CTT_Tp: number;
/** Reflected: __Dati_Numero048*/ 
CTTRA_R: number;
/** Reflected: __Dati_Numero049*/ 
CTTRA_Tt: number;
/** Reflected: __Dati_Numero050*/ 
CTTRA_Tp: number;
/** Reflected: __Dati_Numero051*/ 
CTQ_R: number;
/** Reflected: __Dati_Numero052*/ 
CTQ_Tt: number;
/** Reflected: __Dati_Numero053*/ 
CTQ_Tp: number;
/** Reflected: __Dati_Numero054*/ 
CTUt_R: number;
/** Reflected: __Dati_Numero055*/ 
CTUt_Tt: number;
/** Reflected: __Dati_Numero056*/ 
CTUt_Tp: number;
/** Reflected: __Dati_Numero057*/ 
PercIncCTAD_R: number;
/** Reflected: __Dati_Numero058*/ 
PercIncCTF_R: number;
/** Reflected: __Dati_Numero059*/ 
PercIncCTAD_Tt: number;
/** Reflected: __Dati_Numero060*/ 
PercIncCTAD_Tp: number;
/** Reflected: __Dati_Numero061*/ 
PercIncCTF_Tt: number;
/** Reflected: __Dati_Numero062*/ 
PercIncCTF_Tp: number;
/** Reflected: __Dati_Numero063*/ 
PercIncCTL_R: number;
/** Reflected: __Dati_Numero064*/ 
PercIncCTL_Tt: number;
/** Reflected: __Dati_Numero065*/ 
PercIncCTL_Tp: number;
/** Reflected: __Dati_Numero066*/ 
PercIncCTLE_R: number;
/** Reflected: __Dati_Numero067*/ 
PercIncCTLE_Tt: number;
/** Reflected: __Dati_Numero068*/ 
PercIncCTLE_Tp: number;
/** Reflected: __Dati_Numero069*/ 
PercIncCTM_R: number;
/** Reflected: __Dati_Numero070*/ 
PercIncCTM_Tt: number;
/** Reflected: __Dati_Numero071*/ 
PercIncCTM_Tp: number;
/** Reflected: __Dati_Numero072*/ 
PercIncCTP_R: number;
/** Reflected: __Dati_Numero073*/ 
PercIncCTP_Tt: number;
/** Reflected: __Dati_Numero074*/ 
PercIncCTP_Tp: number;
/** Reflected: __Dati_Numero075*/ 
PercIncCTTRA_R: number;
/** Reflected: __Dati_Numero076*/ 
PercIncCTTRA_Tt: number;
/** Reflected: __Dati_Numero077*/ 
PercIncCTTRA_Tp: number;
/** Reflected: __Dati_Numero078*/ 
PercIncCTQ_R: number;
/** Reflected: __Dati_Numero079*/ 
PercIncCTQ_Tt: number;
/** Reflected: __Dati_Numero080*/ 
PercIncCTQ_Tp: number;
/** Reflected: __Dati_Numero081*/ 
PercIncCTUt_R: number;
/** Reflected: __Dati_Numero082*/ 
PercIncCTUt_Tt: number;
/** Reflected: __Dati_Numero083*/ 
PercIncCTUt_Tp: number;
/** Reflected: __Dati_Numero084*/ 
QS_R_Fin: number;
/** Reflected: __Dati_Numero085*/ 
CUAD_R: number;
/** Reflected: __Dati_Numero086*/ 
CUAD_Tt: number;
/** Reflected: __Dati_Numero087*/ 
CUF_R: number;
/** Reflected: __Dati_Numero088*/ 
CUF_Tt: number;
/** Reflected: __Dati_Numero089*/ 
CUL_R: number;
/** Reflected: __Dati_Numero090*/ 
CUL_Tt: number;
/** Reflected: __Dati_Numero091*/ 
CULE_R: number;
/** Reflected: __Dati_Numero092*/ 
CULE_Tt: number;
/** Reflected: __Dati_Numero093*/ 
CUM_R: number;
/** Reflected: __Dati_Numero094*/ 
CUM_Tt: number;
/** Reflected: __Dati_Numero095*/ 
CUP_Tt: number;
/** Reflected: __Dati_Numero096*/ 
CUP_R: number;
/** Reflected: __Dati_Numero097*/ 
CUQ_R: number;
/** Reflected: __Dati_Numero098*/ 
CUQ_Tt: number;
/** Reflected: __Dati_Numero099*/ 
CUUt_R: number;
/** Reflected: __Dati_Numero100*/ 
CUUt_Tt: number;
/** Reflected: __Dati_Numero101*/ 
CUT_R: number;
/** Reflected: __Dati_Numero102*/ 
CUT_Tt: number;
/** Reflected: __Dati_Numero103*/ 
CUTRA_R: number;
/** Reflected: __Dati_Numero104*/ 
CUTRA_Tt: number;
/** Reflected: __Dati_Numero105*/ 
QS_Tt_Fin: number;
/** Reflected: __Dati_Numero106*/ 
PercScartoReale: number;
/** Reflected: __Dati_Numero107*/ 
QT_Tp_Fin: number;
/** Reflected: __Dati_Numero108*/ 
QP_Tp_Fin: number;
/** Reflected: __Dati_Numero109*/ 
QS_Tp_Fin: number;
/** Reflected: __Dati_Numero110*/ 
CUAD_Tp: number;
/** Reflected: __Dati_Numero111*/ 
CUF_Tp: number;
/** Reflected: __Dati_Numero112*/ 
CUL_Tp: number;
/** Reflected: __Dati_Numero113*/ 
CULE_Tp: number;
/** Reflected: __Dati_Numero114*/ 
CUM_Tp: number;
/** Reflected: __Dati_Numero115*/ 
CUP_Tp: number;
/** Reflected: __Dati_Numero116*/ 
CUQ_Tp: number;
/** Reflected: __Dati_Numero117*/ 
CUT_Tp: number;
/** Reflected: __Dati_Numero118*/ 
CUTRA_Tp: number;
/** Reflected: __Dati_Numero119*/ 
CUUt_Tp: number;
/** Reflected: __Dati_Numero120*/ 
CTS_R: number;
/** Reflected: __Dati_Numero121*/ 
CTS_Tt: number;
/** Reflected: __Dati_Numero122*/ 
CTS_Tp: number;
/** Reflected: __Dati_Numero123*/ 
CTB_R: number;
/** Reflected: __Dati_Numero124*/ 
CTB_Tt: number;
/** Reflected: __Dati_Numero125*/ 
CTB_Tp: number;
/** Reflected: __Dati_Numero126*/ 
CUS_R: number;
/** Reflected: __Dati_Numero127*/ 
CUS_Tt: number;
/** Reflected: __Dati_Numero128*/ 
CUS_Tp: number;
/** Reflected: __Dati_Numero129*/ 
CUB_R: number;
/** Reflected: __Dati_Numero130*/ 
CUB_Tt: number;
/** Reflected: __Dati_Numero131*/ 
CUB_Tp: number;
/** Reflected: __Dati_Numero132*/ 
Diff_CUAD_TpR: number;
/** Reflected: __Dati_Numero133*/ 
Diff_CUF_TpR: number;
/** Reflected: __Dati_Numero134*/ 
Diff_CULE_TpR: number;
/** Reflected: __Dati_Numero135*/ 
Diff_CUM_TpR: number;
/** Reflected: __Dati_Numero136*/ 
Diff_CUP_TpR: number;
/** Reflected: __Dati_Numero137*/ 
Diff_CUS_TpR: number;
/** Reflected: __Dati_Numero138*/ 
Diff_CUT_TpR: number;
/** Reflected: __Dati_Numero139*/ 
Diff_CUUt_TpR: number;
/** Reflected: __Dati_Numero140*/ 
Diff_CUQ_TpR: number;
/** Reflected: __Dati_Numero141*/ 
Diff_CUAD_TtR: number;
/** Reflected: __Dati_Numero142*/ 
Diff_CULE_TtR: number;
/** Reflected: __Dati_Numero143*/ 
Diff_CUM_TtR: number;
/** Reflected: __Dati_Numero144*/ 
Diff_CUP_TtR: number;
/** Reflected: __Dati_Numero145*/ 
Diff_CUQ_TtR: number;
/** Reflected: __Dati_Numero146*/ 
Diff_CUS_TtR: number;
/** Reflected: __Dati_Numero147*/ 
Diff_CUT_TtR: number;
/** Reflected: __Dati_Numero148*/ 
Diff_CUUt_TtR: number;
/** Reflected: __Dati_Numero149*/ 
Diff_CUF_TtR: number;
/** Reflected: __Dati_Numero150*/ 
FlagSaldoManuale: number;
/** Reflected: __Dati_Testo046*/ 
CodiceAmministrativo: string;
/** Reflected: __Dati_Testo047*/ 
CodiceCommercialeItem: string;
/** Reflected: __Dati_Testo048*/ 
TxtAccountOperatore: string;
/** Reflected: __Dati_Numero151*/ 
PercDiffCUAD_RTp: number;
/** Reflected: __Dati_Numero152*/ 
PercDiffCUAD_RTt: number;
/** Reflected: __Dati_Numero153*/ 
PercDiffCUF_RTp: number;
/** Reflected: __Dati_Numero154*/ 
PercDiffCUF_RTt: number;
/** Reflected: __Dati_Numero155*/ 
PercDiffCULE_RTp: number;
/** Reflected: __Dati_Numero156*/ 
PercDiffCULE_RTt: number;
/** Reflected: __Dati_Numero157*/ 
PercDiffCUL_RTp: number;
/** Reflected: __Dati_Numero158*/ 
PercDiffCUL_RTt: number;
/** Reflected: __Dati_Numero159*/ 
PercDiffCUM_RTp: number;
/** Reflected: __Dati_Numero160*/ 
PercDiffCUM_RTt: number;
/** Reflected: __Dati_Numero161*/ 
PercDiffCUP_RTp: number;
/** Reflected: __Dati_Numero162*/ 
PercDiffCUP_RTt: number;
/** Reflected: __Dati_Numero163*/ 
PercDiffCUQ_RTp: number;
/** Reflected: __Dati_Numero164*/ 
PercDiffCUQ_RTt: number;
/** Reflected: __Dati_Numero165*/ 
PercDiffCUS_RTp: number;
/** Reflected: __Dati_Numero166*/ 
PercDiffCUS_RTt: number;
/** Reflected: __Dati_Numero167*/ 
PercDiffCUT_RTp: number;
/** Reflected: __Dati_Numero168*/ 
PercDiffCUT_RTt: number;
/** Reflected: __Dati_Numero169*/ 
PercDiffCUTRA_RTp: number;
/** Reflected: __Dati_Numero170*/ 
PercDiffCUTRA_RTt: number;
/** Reflected: __Dati_Numero171*/ 
PercDiffCUUt_RTp: number;
/** Reflected: __Dati_Numero172*/ 
PercDiffCUUt_RTt: number;
/** Reflected: __Dati_Testo049*/ 
TxtMassimoAumentoCostoPerc: string;
/** Reflected: __Dati_Testo050*/ 
IdClasseUmLunghezza: string;
/** Reflected: __Dati_Testo051*/ 
IdClasseUmPeso: string;
/** Reflected: __Dati_Testo052*/ 
IdClasseUmVolume: string;
/** Reflected: __Dati_Testo053*/ 
UmLunghezza: string;
/** Reflected: __Dati_Testo054*/ 
UmLunghezzaDefault: string;
/** Reflected: __Dati_Testo055*/ 
UmPeso: string;
/** Reflected: __Dati_Testo056*/ 
UmPesoDefault: string;
/** Reflected: __Dati_Testo057*/ 
UmVolume: string;
/** Reflected: __Dati_Testo058*/ 
UmVolumeDefault: string;
/** Reflected: __Dati_Numero173*/ 
VolumeTotale_Tt: number;
/** Reflected: __Dati_Numero174*/ 
VolumeTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero175*/ 
VolumeUnitarioUmDefault: number;
/** Reflected: __Dati_Numero176*/ 
VolumeTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero177*/ 
ConvMisuraLunghezza: number;
/** Reflected: __Dati_Numero178*/ 
ConvMisuraLunghezzaDefault: number;
/** Reflected: __Dati_Numero179*/ 
ConvMisuraPeso: number;
/** Reflected: __Dati_Numero180*/ 
ConvMisuraPesoDefault: number;
/** Reflected: __Dati_Numero181*/ 
ConvMisuraVolume: number;
/** Reflected: __Dati_Numero182*/ 
ConvMisuraVolumeDefault: number;
/** Reflected: __Dati_Numero183*/ 
VolumeTotale_R: number;
/** Reflected: __Dati_Numero184*/ 
PesoTotale_Tt: number;
/** Reflected: __Dati_Numero185*/ 
PesoTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero186*/ 
PesoUnitarioUmDefault: number;
/** Reflected: __Dati_Numero187*/ 
PesoTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero188*/ 
PesoTotale_R: number;
/** Reflected: __Dati_Numero189*/ 
LunghezzaTotale_R: number;
/** Reflected: __Dati_Numero190*/ 
LunghezzaTotale_Tt: number;
/** Reflected: __Dati_Numero191*/ 
LunghezzaTotaleUmDefault_R: number;
/** Reflected: __Dati_Numero192*/ 
LunghezzaTotaleUmDefault_Tt: number;
/** Reflected: __Dati_Numero193*/ 
LunghezzaUnitarioUmDefault: number;
/** Reflected: __Dati_Numero194*/ 
Diff_CUL_TpR: number;
/** Reflected: __Dati_Numero195*/ 
Diff_CUL_TtR: number;
/** Reflected: __Dati_Numero196*/ 
Diff_CUTRA_TtR: number;
/** Reflected: __Dati_Numero197*/ 
Diff_CUTRA_TpR: number;
/** Reflected: __Dati_Testo059*/ 
TxtMassimoAumentoCosto: string;
/** Reflected: __Dati_Numero198*/ 
PercRicarico: number;
/** Reflected: __Dati_Numero199*/ 
CUT_R_Ricarico: number;
/** Reflected: __Dati_Numero200*/ 
CUT_Tt_Ricarico: number;
/** Reflected: __Dati_Numero201*/ 
CUT_Tp_Ricarico: number;
/** Reflected: __Dati_Numero202*/ 
CTT_R_Ricarico: number;
/** Reflected: __Dati_Numero203*/ 
CTT_Tt_Ricarico: number;
/** Reflected: __Dati_Numero204*/ 
CTT_Tp_Ricarico: number;
/** Reflected: __Dati_Numero205*/ 
PercDiffCUB_RTp: number;
/** Reflected: __Dati_Numero206*/ 
PercDiffCUB_RTt: number;
/** Reflected: __Dati_Numero207*/ 
TempoLottoTeorico: number;
/** Reflected: __Dati_Numero208*/ 
ProssimoLotto_FlagAvviso: number;
/** Reflected: __Dati_Data008*/ 
DataBenestare: Date;
/** Reflected: __Dati_Data009*/ 
StampaCartellinoProduzione_DataStampa: Date;
/** Reflected: __Dati_Testo060*/ 
TxtUtenteBenestare: string;
/** Reflected: __Dati_Testo061*/ 
StampaCartellinoProduzione_TxtUtente: string;
/** Reflected: __Dati_Numero209*/ 
BenestareProduzione_FlagBenestareDato: number;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_DataOra002*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Numero210*/ 
OrdineStatoLottoProduzione: number;
/** Reflected: __Dati_Testo062*/ 
IdDocOperativiFasiTutti: string;
/** Reflected: __Dati_Testo063*/ 
CodiceRevisioneItemClienteAutomatico: string;
/** Reflected: __Dati_Numero211*/ 
FlagPianificazioneInRitardo: number;
/** Reflected: __Dati_Testo064*/ 
IdInstallazione: string;
/** Reflected: __Dati_Numero212*/ 
FlagRegistraNumeroSerie: number;
/** Reflected: __Dati_Numero213*/ 
NumeroDiSerialiCreati: number;
/** Reflected: __Dati_Numero214*/ 
LivelloMassimoDistinta: number;
/** Reflected: __Dati_Numero215*/ 
Priorita_FlagBloccata: number;
/** Reflected: __Dati_Testo065*/ 
IdDocumentoPrincipale: string;
/** Reflected: __Dati_Testo066*/ 
IdAccountOperatore: string;
/** Reflected: __Dati_Testo067*/ 
IdDocImgDisegno: string;
/** Reflected: __Dati_Numero216*/ 
FlagDocumentiDisegnoCopiati: number;
/** Reflected: __Dati_Numero217*/ 
FlagDocumentiNoteCopiati: number;
/** Reflected: __Dati_Numero218*/ 
FlagDocumentiQualitaCopiati: number;
/** Reflected: __Dati_Numero219*/ 
FlagDocumentiProgrammiMacchinaCopiati: number;
/** Reflected: __Dati_DataOra003*/ 
StampaCartellinoProduzione_DataOraStampa: Date;
/** Reflected: __Dati_Testo068*/ 
StampaCartellinoProduzione_IdUtente: string;
/** Reflected: __Dati_Data010*/ 
Pianificazione_DataMinimaInizioPianificazione: Date;
/** Reflected: __Dati_Testo069*/ 
Ciclo_IdTipoCiclo: string;
/** Reflected: __Dati_DataOra004*/ 
ModificaQuantita_DataOraModifica: Date;
/** Reflected: __Dati_Testo070*/ 
ModificaQuantita_IdUtenteModifica: string;
/** Reflected: __Dati_Testo071*/ 
ModificaQuantita_TxtUtenteModifica: string;
/** Reflected: __Dati_Numero220*/ 
ModificaQuantita_FlagQtModificataPosteriori: number;
/** Reflected: __Dati_Numero221*/ 
ModificaQuantita_QP_TT_Precedente: number;
/** Reflected: __Dati_Testo072*/ 
Ciclo_TxtTipoCiclo: string;
/** Reflected: __Dati_Testo073*/ 
Ciclo_CodiceTxtCicloRevisioneOrdineAutomatico: string;
/** Reflected: __Dati_Testo074*/ 
Ciclo_VerificaSequenza_NumeroVersioneSequenza: string;
/** Reflected: __Dati_Testo075*/ 
Integrazione_DatiVariAC: string;
/** Reflected: __Dati_Numero222*/ 
CTAD_Tf: number;
/** Reflected: __Dati_Numero223*/ 
CTF_Tf: number;
/** Reflected: __Dati_Numero224*/ 
CTL_Tf: number;
/** Reflected: __Dati_Numero225*/ 
CTLE_Tf: number;
/** Reflected: __Dati_Numero226*/ 
CTM_Tf: number;
/** Reflected: __Dati_Numero227*/ 
CTP_Tf: number;
/** Reflected: __Dati_Numero228*/ 
CTQ_Tf: number;
/** Reflected: __Dati_Numero229*/ 
CTS_Tf: number;
/** Reflected: __Dati_Numero230*/ 
CTT_Tf: number;
/** Reflected: __Dati_Numero231*/ 
CTT_Tf_Ricarico: number;
/** Reflected: __Dati_Numero232*/ 
CTTRA_Tf: number;
/** Reflected: __Dati_Numero233*/ 
CTUt_Tf: number;
/** Reflected: __Dati_Numero234*/ 
CTB_Tf: number;
/** Reflected: __Dati_Numero235*/ 
QT_Tf_Fin: number;
/** Reflected: __Dati_Numero236*/ 
CUAD_Tf: number;
/** Reflected: __Dati_Numero237*/ 
CUB_Tf: number;
/** Reflected: __Dati_Numero238*/ 
CUF_Tf: number;
/** Reflected: __Dati_Numero239*/ 
CUL_Tf: number;
/** Reflected: __Dati_Numero240*/ 
CULE_Tf: number;
/** Reflected: __Dati_Numero241*/ 
CUM_Tf: number;
/** Reflected: __Dati_Numero242*/ 
CUP_Tf: number;
/** Reflected: __Dati_Numero243*/ 
CUQ_Tf: number;
/** Reflected: __Dati_Numero244*/ 
CUS_Tf: number;
/** Reflected: __Dati_Numero245*/ 
CUT_Tf: number;
/** Reflected: __Dati_Numero246*/ 
CUT_Tf_Ricarico: number;
/** Reflected: __Dati_Numero247*/ 
CUTRA_Tf: number;
/** Reflected: __Dati_Numero248*/ 
CUUt_Tf: number;
/** Reflected: __Dati_Numero249*/ 
Avanzamento_NumeroFasiSaldate: number;
/** Reflected: __Dati_Numero250*/ 
Avanzamento_NumeroFasiTotale: number;
/** Reflected: __Dati_Testo077*/ 
Avanzamento_ProssimaFaseDaSaldare: string;
/** Reflected: __Dati_Testo076*/ 
Avanzamento_TxtAutomatico: string;
/** Reflected: __Dati_Numero251*/ 
Priorita_FlagAggiornaDaRisorsaPrimaFase: number;
/** Reflected: __Dati_Testo078*/ 
Priorita_Gruppo: string;
/** Reflected: __Dati_Numero252*/ 
Priorita_UnitaDelGruppo: number;
/** Reflected: __Dati_Testo079*/ 
Priorita_IdRisorsaPrimaFaseProduzione: string
}