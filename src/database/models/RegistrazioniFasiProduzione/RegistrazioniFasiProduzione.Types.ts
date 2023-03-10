export interface IRegistrazioniFasiProduzione {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdFase: string;
  /** Reflected: __Dati_Testo002*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo004*/ 
  UmFinito: string;
  /** Reflected: __Dati_Numero001*/ 
  ConvUmOpzUmFin: number;
  /** Reflected: __Dati_Numero002*/ 
  FlagImballoFinale: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagImballoParziale: number;
  /** Reflected: __Dati_Testo005*/ 
  FlagSelezione: string;
  /** Reflected: __Dati_Numero004*/ 
  FrequenzaControllo: number;
  /** Reflected: __Dati_Numero005*/ 
  GgLavorazione_T: number;
  /** Reflected: __Dati_Ora001*/ 
  TA_T_Fase: string;
  /** Reflected: __Dati_Ora002*/ 
  TD_T_Fase: string;
  /** Reflected: __Dati_Testo006*/ 
  IdFamigliaRisorsa: string;
  /** Reflected: __Dati_Testo007*/ 
  IdTipoFase: string;
  /** Reflected: __Dati_Testo008*/ 
  IdOpzioneProd: string;
  /** Reflected: __Dati_Testo009*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Numero006*/ 
  NumeroAddetti_T: number;
  /** Reflected: __Dati_Numero007*/ 
  ProdUmOpzHPF_T: number;
  /** Reflected: __Dati_Numero008*/ 
  ProdUmOpzHP_T: number;
  /** Reflected: __Dati_Numero009*/ 
  ProdUmFinHPF_T: number;
  /** Reflected: __Dati_Numero010*/ 
  ProdUmFinHP_T: number;
  /** Reflected: __Dati_Numero011*/ 
  Resa_T: number;
  /** Reflected: __Dati_Testo010*/ 
  TxtArticolo: string;
  /** Reflected: __Dati_Testo011*/ 
  TxtCiclo: string;
  /** Reflected: __Dati_Testo012*/ 
  TxtFase: string;
  /** Reflected: __Dati_Testo013*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Testo014*/ 
  UmOpzione: string;
  /** Reflected: __Dati_Numero012*/ 
  Uno: number;
  /** Reflected: __Dati_Testo015*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo016*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo017*/ 
  IdAccountCliente: string;
  /** Reflected: __Dati_Testo018*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Numero013*/ 
  FlagSaldoFaseProduzione: number;
  /** Reflected: __Dati_Numero014*/ 
  QP_R_Opz: number;
  /** Reflected: __Dati_Numero015*/ 
  QP_R_Fin: number;
  /** Reflected: __Dati_Numero016*/ 
  AltezzaImballo_T: number;
  /** Reflected: __Dati_Numero017*/ 
  AreaImballo_T: number;
  /** Reflected: __Dati_Data001*/ 
  DataInizio: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFine: Date;
  /** Reflected: __Dati_Numero018*/ 
  GgLavorazione_R: number;
  /** Reflected: __Dati_Testo019*/ 
  IdDocOperativoOrigine: string;
  /** Reflected: __Dati_Numero019*/ 
  CHAD_T: number;
  /** Reflected: __Dati_Numero020*/ 
  CHAddettoAggiuntivo_T: number;
  /** Reflected: __Dati_Numero021*/ 
  CHP_T: number;
  /** Reflected: __Dati_Numero022*/ 
  CHF_T: number;
  /** Reflected: __Dati_Ora003*/ 
  TA_R: string;
  /** Reflected: __Dati_Ora004*/ 
  TD_R: string;
  /** Reflected: __Dati_Ora005*/ 
  TF_R: string;
  /** Reflected: __Dati_Ora006*/ 
  TP_R: string;
  /** Reflected: __Dati_Ora007*/ 
  TT_R: string;
  /** Reflected: __Dati_Numero023*/ 
  QS_R_Opz: number;
  /** Reflected: __Dati_Numero024*/ 
  QS_R_Fin: number;
  /** Reflected: __Dati_Numero025*/ 
  Resa_R: number;
  /** Reflected: __Dati_Numero026*/ 
  QT_R_Fin: number;
  /** Reflected: __Dati_Numero027*/ 
  QT_R_Opz: number;
  /** Reflected: __Dati_Testo020*/ 
  IdRegistrazioneFaseProduzione: string;
  /** Reflected: __Dati_Testo021*/ 
  IdReparto: string;
  /** Reflected: __Dati_Testo022*/ 
  IdStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Numero028*/ 
  ProdUmOpzHP_R_QP: number;
  /** Reflected: __Dati_Numero029*/ 
  CTAD_R: number;
  /** Reflected: __Dati_Numero030*/ 
  CTF_R: number;
  /** Reflected: __Dati_Numero031*/ 
  CTP_R: number;
  /** Reflected: __Dati_Numero032*/ 
  CTT_R: number;
  /** Reflected: __Dati_Numero033*/ 
  NumeroAddetti_R: number;
  /** Reflected: __Dati_Numero034*/ 
  PercIncCTTRA_R: number;
  /** Reflected: __Dati_Numero035*/ 
  PercScartoFase_R: number;
  /** Reflected: __Dati_Numero036*/ 
  Anno: number;
  /** Reflected: __Dati_Numero037*/ 
  GiornoSettimana: number;
  /** Reflected: __Dati_Testo023*/ 
  IdOperatore: string;
  /** Reflected: __Dati_Numero038*/ 
  Mese: number;
  /** Reflected: __Dati_Testo024*/ 
  TxtTurnoData: string;
  /** Reflected: __Dati_Testo025*/ 
  TxtOperatoreProduzione: string;
  /** Reflected: __Dati_Ora008*/ 
  OraFine: string;
  /** Reflected: __Dati_Ora009*/ 
  OraInizio: string;
  /** Reflected: __Dati_Testo026*/ 
  TxtMassimoAumentoCosto: string;
  /** Reflected: __Dati_Numero039*/ 
  PercDiffProdHPFTeoReale_QT: number;
  /** Reflected: __Dati_Numero040*/ 
  PercDiffProdHPTeoReale_QT: number;
  /** Reflected: __Dati_Numero041*/ 
  PercDiffCUMR_CUMT: number;
  /** Reflected: __Dati_Numero042*/ 
  PercDiffCUFR_CUFT: number;
  /** Reflected: __Dati_Numero043*/ 
  CTM_R: number;
  /** Reflected: __Dati_Numero044*/ 
  PercDiffCUPR_CUPT: number;
  /** Reflected: __Dati_Numero045*/ 
  CUP_R_Opz: number;
  /** Reflected: __Dati_Numero046*/ 
  CUM_R_Opz: number;
  /** Reflected: __Dati_Numero047*/ 
  PercIncCTAD_R: number;
  /** Reflected: __Dati_Numero048*/ 
  PercDiffCUTT_CUTR: number;
  /** Reflected: __Dati_Numero049*/ 
  PercDiffCUADR_CUADT: number;
  /** Reflected: __Dati_Numero050*/ 
  ProdUmOpzHP_R: number;
  /** Reflected: __Dati_Numero051*/ 
  ProdUmOpzHPF_R_QP: number;
  /** Reflected: __Dati_Numero052*/ 
  ProdUmOpzHPF_R: number;
  /** Reflected: __Dati_Numero053*/ 
  PercIncCTSFc_R: number;
  /** Reflected: __Dati_Numero054*/ 
  CTBFc_T: number;
  /** Reflected: __Dati_Numero055*/ 
  PercIncCTP_R: number;
  /** Reflected: __Dati_Numero056*/ 
  CUF_R_Opz: number;
  /** Reflected: __Dati_Numero057*/ 
  CUT_R_Opz: number;
  /** Reflected: __Dati_Ora010*/ 
  TT_R_ConPausa: string;
  /** Reflected: __Dati_Numero058*/ 
  CUAD_R_Opz: number;
  /** Reflected: __Dati_Numero059*/ 
  PercIncCTF_R: number;
  /** Reflected: __Dati_Numero060*/ 
  CTLE_R: number;
  /** Reflected: __Dati_Numero061*/ 
  FlagLavInternaPianificabile: number;
  /** Reflected: __Dati_Numero062*/ 
  CULE_T_Opz: number;
  /** Reflected: __Dati_Numero063*/ 
  PercIncCTM_R: number;
  /** Reflected: __Dati_Numero064*/ 
  CULE_R_Opz: number;
  /** Reflected: __Dati_Numero065*/ 
  CUTRA_R_Opz: number;
  /** Reflected: __Dati_Numero066*/ 
  CTTRA_R: number;
  /** Reflected: __Dati_Ora011*/ 
  TF_R_QS: string;
  /** Reflected: __Dati_Ora012*/ 
  TP_R_QS: string;
  /** Reflected: __Dati_Ora013*/ 
  TT_R_QS: string;
  /** Reflected: __Dati_Ora014*/ 
  TF_R_QP: string;
  /** Reflected: __Dati_Ora015*/ 
  TP_R_QP: string;
  /** Reflected: __Dati_Ora016*/ 
  TT_R_QP: string;
  /** Reflected: __Dati_Numero067*/ 
  PercScartoFase_T: number;
  /** Reflected: __Dati_Numero068*/ 
  QS_T_Opz: number;
  /** Reflected: __Dati_Numero069*/ 
  QP_T_Opz: number;
  /** Reflected: __Dati_Ora017*/ 
  TF_T_QP: string;
  /** Reflected: __Dati_Ora018*/ 
  TF_T_QS: string;
  /** Reflected: __Dati_Ora019*/ 
  TF_T: string;
  /** Reflected: __Dati_Ora020*/ 
  TP_T_QP: string;
  /** Reflected: __Dati_Ora021*/ 
  TP_T_QS: string;
  /** Reflected: __Dati_Ora022*/ 
  TP_T: string;
  /** Reflected: __Dati_Ora023*/ 
  TT_T_QP: string;
  /** Reflected: __Dati_Ora024*/ 
  TT_T_QS: string;
  /** Reflected: __Dati_Ora025*/ 
  TT_T: string;
  /** Reflected: __Dati_Numero070*/ 
  CTAD_T: number;
  /** Reflected: __Dati_Numero071*/ 
  CTF_T: number;
  /** Reflected: __Dati_Numero072*/ 
  CTLE_T: number;
  /** Reflected: __Dati_Numero073*/ 
  CTM_T: number;
  /** Reflected: __Dati_Numero074*/ 
  CTP_T: number;
  /** Reflected: __Dati_Numero075*/ 
  CTT_T: number;
  /** Reflected: __Dati_Numero076*/ 
  CTTRA_T: number;
  /** Reflected: __Dati_Numero077*/ 
  CUAD_T_Opz: number;
  /** Reflected: __Dati_Numero078*/ 
  CUF_T_Opz: number;
  /** Reflected: __Dati_Numero079*/ 
  CUM_T_Opz: number;
  /** Reflected: __Dati_Numero080*/ 
  CUP_T_Opz: number;
  /** Reflected: __Dati_Numero081*/ 
  CTBFc_R: number;
  /** Reflected: __Dati_Numero082*/ 
  CUT_T_Opz: number;
  /** Reflected: __Dati_Numero083*/ 
  CUTRA_T_Opz: number;
  /** Reflected: __Dati_Ora026*/ 
  TA_T: string;
  /** Reflected: __Dati_Ora027*/ 
  TD_T: string;
  /** Reflected: __Dati_Numero084*/ 
  PercIncCTAD_T: number;
  /** Reflected: __Dati_Numero085*/ 
  PercIncCTF_T: number;
  /** Reflected: __Dati_Numero086*/ 
  PercIncCTM_T: number;
  /** Reflected: __Dati_Numero087*/ 
  PercIncCTP_T: number;
  /** Reflected: __Dati_Numero088*/ 
  PercIncCTSFc_T: number;
  /** Reflected: __Dati_Numero089*/ 
  PercIncCTTRA_T: number;
  /** Reflected: __Dati_Numero090*/ 
  PercDiffCUSR_CUST: number;
  /** Reflected: __Dati_Numero091*/ 
  PercDiffCUTRAR_CUTRAT: number;
  /** Reflected: __Dati_Ora028*/ 
  TPausa: string;
  /** Reflected: __Dati_Testo027*/ 
  TxtReparto: string;
  /** Reflected: __Dati_Testo028*/ 
  TxtStazioneRaccoltaDati: string;
  /** Reflected: __Dati_Testo029*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraFine: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraInizio: Date;
  /** Reflected: __Dati_Numero092*/ 
  FlagStatoRegistrazione: number;
  /** Reflected: __Dati_Testo030*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo031*/ 
  CodiceFase: string;
  /** Reflected: __Dati_Testo032*/ 
  CodiceArticolo: string;
  /** Reflected: __Dati_Testo033*/ 
  CodiceCiclo: string;
  /** Reflected: __Dati_Testo034*/ 
  CodiceRigaOrdine: string;
  /** Reflected: __Dati_Testo035*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Testo036*/ 
  CodiceLottoProduzione: string;
  /** Reflected: __Dati_Testo037*/ 
  CodiceFaseProduzione: string;
  /** Reflected: __Dati_Numero093*/ 
  FlagRegistrazioneAperta: number;
  /** Reflected: __Dati_Testo038*/ 
  TxtStatoRegistrazione: string;
  /** Reflected: __Dati_Testo039*/ 
  AnnoMese: string;
  /** Reflected: __Dati_Numero094*/ 
  OEE: number;
  /** Reflected: __Dati_Testo040*/ 
  IdTipoTurno: string;
  /** Reflected: __Dati_Testo041*/ 
  CodiceDisegno: string;
  /** Reflected: __Dati_Testo042*/ 
  CodiceTipoTurno: string;
  /** Reflected: __Dati_Testo043*/ 
  IdRegistrazioneRisorsa: string;
  /** Reflected: __Dati_Ora029*/ 
  TAttraversamentoLinea_T: string;
  /** Reflected: __Dati_Testo044*/ 
  IdDocOperativoCaricoFiniti: string;
  /** Reflected: __Dati_Testo045*/ 
  IdDocOperativoFabbisognoLavorazioni: string;
  /** Reflected: __Dati_Testo046*/ 
  IdDocOperativoFabbisognoMateriali: string;
  /** Reflected: __Dati_Testo047*/ 
  IdDocOperativoOrdineLavorazioni: string;
  /** Reflected: __Dati_Testo048*/ 
  IdDocOperativoRientroLavorazioni: string;
  /** Reflected: __Dati_Testo049*/ 
  IdDocOperativoUscitaLavorazioni: string;
  /** Reflected: __Dati_Ora030*/ 
  TEffettivoLavoroMacchina: string;
  /** Reflected: __Dati_Numero095*/ 
  SecondiUnitaRegistrazione: number;
  /** Reflected: __Dati_Numero096*/ 
  DistrTempi_SecondiTeoriciQT_R: number;
  /** Reflected: __Dati_Testo050*/ 
  FlagErrore: string;
  /** Reflected: __Dati_Testo051*/ 
  TxtErrore: string;
  /** Reflected: __Dati_Numero097*/ 
  AltezzaImballo_R: number;
  /** Reflected: __Dati_Testo052*/ 
  AnnoSettimana: string;
  /** Reflected: __Dati_Numero098*/ 
  AreaImballo_R: number;
  /** Reflected: __Dati_Testo053*/ 
  CodiceTxtRisorsaAutomatico: string;
  /** Reflected: __Dati_Testo054*/ 
  CodiceTxtArticoloAutomatico: string;
  /** Reflected: __Dati_Numero099*/ 
  FlagAggiornaDaRegistrazioneRisorsa: number;
  /** Reflected: __Dati_Numero100*/ 
  FlagAggiornaTotali: number;
  /** Reflected: __Dati_Numero101*/ 
  FlagLavInternaNonPianificabile: number;
  /** Reflected: __Dati_Numero102*/ 
  FlagLavEsterna: number;
  /** Reflected: __Dati_Numero103*/ 
  FlagProduzioneNested: number;
  /** Reflected: __Dati_Numero104*/ 
  DistrTempi_PercTempiPerRegistrazioneFase: number;
  /** Reflected: __Dati_Testo055*/ 
  TxtTipoTurno: string;
  /** Reflected: __Dati_Numero105*/ 
  Zero: number;
  /** Reflected: __Dati_Numero106*/ 
  FlagAggiornaDaCorrelate: number;
  /** Reflected: __Dati_Numero107*/ 
  NumeroFase: number;
  /** Reflected: __Dati_Numero108*/ 
  CTL_R: number;
  /** Reflected: __Dati_Numero109*/ 
  CTL_T: number;
  /** Reflected: __Dati_Testo056*/ 
  IdDispositivoRaccoltaDati: string;
  /** Reflected: __Dati_Testo057*/ 
  CodiceTxtFaseAutomatico: string;
  /** Reflected: __Dati_Testo058*/ 
  RevisioneArticolo: string;
  /** Reflected: __Dati_Testo059*/ 
  RevisioneDisegno: string;
  /** Reflected: __Dati_Testo060*/ 
  CodiceRevisioneDisegnoAutomatica: string;
  /** Reflected: __Dati_Testo061*/ 
  CodiceContenitore: string;
  /** Reflected: __Dati_Testo062*/ 
  IdUtensiliUtilizzati: string;
  /** Reflected: __Dati_Testo063*/ 
  IdDocOperativoScartoMateriali: string;
  /** Reflected: __Dati_Testo064*/ 
  IdDocOperativoScaricoMateriali: string;
  /** Reflected: __Dati_Numero110*/ 
  DistrTempi_PercTAPerRegistrazioneFase: number;
  /** Reflected: __Dati_Numero111*/ 
  DistrTempi_PercTDPerRegistrazioneFase: number;
  /** Reflected: __Dati_Numero112*/ 
  CUSFc_T_Opz: number;
  /** Reflected: __Dati_Numero113*/ 
  CTSFc_R: number;
  /** Reflected: __Dati_Numero114*/ 
  NumeroDecimaliQuantita: number;
  /** Reflected: __Dati_Numero115*/ 
  NumeroDecimaliValori: number;
  /** Reflected: __Dati_Numero116*/ 
  CostoOrarioAddettoAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero117*/ 
  CostoOrarioMacchinaAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero118*/ 
  QuotaAddettoAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero119*/ 
  QuotaAddettoAttrezzaggio_R: number;
  /** Reflected: __Dati_Numero120*/ 
  CHAD_R: number;
  /** Reflected: __Dati_Numero121*/ 
  CostoOrarioAddettoProduzione_T: number;
  /** Reflected: __Dati_Numero122*/ 
  CostoOrarioMacchinaProduzione_T: number;
  /** Reflected: __Dati_Numero123*/ 
  QuotaAddettoProduzione_T: number;
  /** Reflected: __Dati_Numero124*/ 
  QuotaAddettoProduzione_R: number;
  /** Reflected: __Dati_Numero125*/ 
  CHP_R: number;
  /** Reflected: __Dati_Numero126*/ 
  CostoOrarioAddettoFermoMacchina_T: number;
  /** Reflected: __Dati_Numero127*/ 
  CostoOrarioMacchinaFermoMacchina_T: number;
  /** Reflected: __Dati_Numero128*/ 
  QuotaAddettoFermoMacchina_T: number;
  /** Reflected: __Dati_Numero129*/ 
  QuotaAddettoFermoMacchina_R: number;
  /** Reflected: __Dati_Numero130*/ 
  CHF_R: number;
  /** Reflected: __Dati_Numero131*/ 
  CUUt_T_Opz: number;
  /** Reflected: __Dati_Numero132*/ 
  CTQ_T: number;
  /** Reflected: __Dati_Numero133*/ 
  CUQ_T_Opz: number;
  /** Reflected: __Dati_Numero134*/ 
  CTUt_T: number;
  /** Reflected: __Dati_Numero135*/ 
  CUUt_R_Opz: number;
  /** Reflected: __Dati_Numero136*/ 
  CTUt_R: number;
  /** Reflected: __Dati_Numero137*/ 
  CUQ_R_Opz: number;
  /** Reflected: __Dati_Numero138*/ 
  CTQ_R: number;
  /** Reflected: __Dati_Numero139*/ 
  CTSFc_T: number;
  /** Reflected: __Dati_Testo065*/ 
  CodiceTxtDisegnoArticoloAutomatico: string;
  /** Reflected: __Dati_Testo066*/ 
  CodiceTxtFaseRisorsaAutomatico: string;
  /** Reflected: __Dati_Numero140*/ 
  ConvUmFinUmOpz: number;
  /** Reflected: __Dati_Numero141*/ 
  ConvUmLavorazioneUmOpz: number;
  /** Reflected: __Dati_Numero142*/ 
  ConvUmOpzUmLavorazione: number;
  /** Reflected: __Dati_Numero143*/ 
  ConvUmOpzUmTrasporto: number;
  /** Reflected: __Dati_Numero144*/ 
  ConvUmTrasportoUmOpz: number;
  /** Reflected: __Dati_Testo067*/ 
  UmOpzPerImballo: string;
  /** Reflected: __Dati_Numero145*/ 
  QT_T_Opz: number;
  /** Reflected: __Dati_Numero146*/ 
  CUL_T_Opz: number;
  /** Reflected: __Dati_Numero147*/ 
  CUL_R_Opz: number;
  /** Reflected: __Dati_Numero148*/ 
  CUP_R_Fin: number;
  /** Reflected: __Dati_Numero149*/ 
  CUP_T_Fin: number;
  /** Reflected: __Dati_Numero150*/ 
  CUAD_T_Fin: number;
  /** Reflected: __Dati_Numero151*/ 
  CUAD_R_Fin: number;
  /** Reflected: __Dati_Numero152*/ 
  CUF_R_Fin: number;
  /** Reflected: __Dati_Numero153*/ 
  CUF_T_Fin: number;
  /** Reflected: __Dati_Numero154*/ 
  CUL_R_Fin: number;
  /** Reflected: __Dati_Numero155*/ 
  CUL_T_Fin: number;
  /** Reflected: __Dati_Numero156*/ 
  CULE_T_Fin: number;
  /** Reflected: __Dati_Numero157*/ 
  QT_T_Fin: number;
  /** Reflected: __Dati_Numero158*/ 
  QS_T_Fin: number;
  /** Reflected: __Dati_Numero159*/ 
  QP_T_Fin: number;
  /** Reflected: __Dati_Numero160*/ 
  CULE_R_Fin: number;
  /** Reflected: __Dati_Numero161*/ 
  CUM_R_Fin: number;
  /** Reflected: __Dati_Numero162*/ 
  CUM_T_Fin: number;
  /** Reflected: __Dati_Numero163*/ 
  CUQ_T_Fin: number;
  /** Reflected: __Dati_Numero164*/ 
  CUQ_R_Fin: number;
  /** Reflected: __Dati_Numero165*/ 
  CUT_T_Fin: number;
  /** Reflected: __Dati_Numero166*/ 
  CUT_R_Fin: number;
  /** Reflected: __Dati_Numero167*/ 
  CUSFc_R_Fin: number;
  /** Reflected: __Dati_Numero168*/ 
  FlagRegistraContenitore: number;
  /** Reflected: __Dati_Numero169*/ 
  CUTRA_R_Fin: number;
  /** Reflected: __Dati_Numero170*/ 
  CUTRA_T_Fin: number;
  /** Reflected: __Dati_Numero171*/ 
  CUUt_R_Fin: number;
  /** Reflected: __Dati_Numero172*/ 
  CUUt_T_Fin: number;
  /** Reflected: __Dati_Numero173*/ 
  CUSFc_T_Fin: number;
  /** Reflected: __Dati_Numero174*/ 
  CUSFc_R_Opz: number;
  /** Reflected: __Dati_Numero175*/ 
  PercDiffCULR_CULT: number;
  /** Reflected: __Dati_Numero176*/ 
  PercDiffCULER_CULET: number;
  /** Reflected: __Dati_Numero177*/ 
  PercDiffCUQR_CUQT: number;
  /** Reflected: __Dati_Numero178*/ 
  PercDiffCUUtR_CUUtT: number;
  /** Reflected: __Dati_Numero179*/ 
  CTSFp_T: number;
  /** Reflected: __Dati_Numero180*/ 
  CTSFp_R: number;
  /** Reflected: __Dati_Numero181*/ 
  CTS_R: number;
  /** Reflected: __Dati_Numero182*/ 
  CTS_T: number;
  /** Reflected: __Dati_Numero183*/ 
  CTT_R_Totale: number;
  /** Reflected: __Dati_Numero184*/ 
  CTT_T_Totale: number;
  /** Reflected: __Dati_Numero185*/ 
  CUT_R_Totale_Fin: number;
  /** Reflected: __Dati_Numero186*/ 
  CUT_R_Totale_Opz: number;
  /** Reflected: __Dati_Numero187*/ 
  CUT_T_Totale_Fin: number;
  /** Reflected: __Dati_Numero188*/ 
  CUT_T_Totale_Opz: number;
  /** Reflected: __Dati_Numero189*/ 
  CUBFc_R_Fin: number;
  /** Reflected: __Dati_Numero190*/ 
  CUBFc_R_Opz: number;
  /** Reflected: __Dati_Numero191*/ 
  CUBFc_T_Fin: number;
  /** Reflected: __Dati_Numero192*/ 
  CUBFc_T_Opz: number;
  /** Reflected: __Dati_Numero193*/ 
  PercIncCTBFc_R: number;
  /** Reflected: __Dati_Numero194*/ 
  PercIncCTBFc_T: number;
  /** Reflected: __Dati_Numero195*/ 
  PercIncCTL_T: number;
  /** Reflected: __Dati_Numero196*/ 
  PercIncCTL_R: number;
  /** Reflected: __Dati_Numero197*/ 
  PercIncCTLE_T: number;
  /** Reflected: __Dati_Numero198*/ 
  PercIncCTLE_R: number;
  /** Reflected: __Dati_Numero199*/ 
  PercIncCTQ_T: number;
  /** Reflected: __Dati_Numero200*/ 
  PercIncCTQ_R: number;
  /** Reflected: __Dati_Numero201*/ 
  PercIncCTUt_R: number;
  /** Reflected: __Dati_Numero202*/ 
  PercIncCTUt_T: number;
  /** Reflected: __Dati_Numero203*/ 
  FlagScartoRilavorabile: number;
  /** Reflected: __Dati_Numero204*/ 
  PercTEffettivoLavoroMacchina: number;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo068*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo069*/ 
  IdNumeroSerieLottoProduzione: string;
  /** Reflected: __Dati_Numero205*/ 
  FlagQtScaricoNonCoerente: number;
  /** Reflected: __Dati_Numero206*/ 
  FlagEliminazioneInEsecuzione: number;
  /** Reflected: __Dati_Numero207*/ 
  FlagAggiornaContenutiDaRisorsa: number
}