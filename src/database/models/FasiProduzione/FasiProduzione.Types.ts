export interface IFasiProduzione {
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
  FlagLavEsterna: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagImballoFinale: number;
  /** Reflected: __Dati_Numero004*/ 
  FlagImballoParziale: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagLavInternaPianificabile: number;
  /** Reflected: __Dati_Testo005*/ 
  FlagSelezione: string;
  /** Reflected: __Dati_Numero006*/ 
  FrequenzaControllo: number;
  /** Reflected: __Dati_Numero007*/ 
  GgLavorazione_T: number;
  /** Reflected: __Dati_Ora001*/ 
  TA_Tt: string;
  /** Reflected: __Dati_Ora002*/ 
  TD_Tt: string;
  /** Reflected: __Dati_Testo006*/ 
  IdFamigliaRisorsa: string;
  /** Reflected: __Dati_Testo007*/ 
  IdTipoFase: string;
  /** Reflected: __Dati_Testo008*/ 
  IdItemLavorazione: string;
  /** Reflected: __Dati_Testo009*/ 
  IdTipoImballo: string;
  /** Reflected: __Dati_Testo010*/ 
  IdOpzioneProd: string;
  /** Reflected: __Dati_Testo011*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Numero008*/ 
  IncidenzaScarto: number;
  /** Reflected: __Dati_Testo012*/ 
  NoteAttrezzaggio: string;
  /** Reflected: __Dati_Testo013*/ 
  NoteImballo: string;
  /** Reflected: __Dati_Testo014*/ 
  NoteMovimentazione: string;
  /** Reflected: __Dati_Testo015*/ 
  NoteProduzione: string;
  /** Reflected: __Dati_Testo016*/ 
  NoteUtensili: string;
  /** Reflected: __Dati_Numero009*/ 
  NumeroAddetti: number;
  /** Reflected: __Dati_Numero010*/ 
  ProdUmOpzHPF_T: number;
  /** Reflected: __Dati_Numero011*/ 
  ProdUmOpzHP_T: number;
  /** Reflected: __Dati_Numero012*/ 
  ProdUmFinHPF_T: number;
  /** Reflected: __Dati_Numero013*/ 
  ProdUmFinHP_T: number;
  /** Reflected: __Dati_Numero014*/ 
  Resa_T: number;
  /** Reflected: __Dati_Testo017*/ 
  TxtArticolo: string;
  /** Reflected: __Dati_Testo018*/ 
  TxtCiclo: string;
  /** Reflected: __Dati_Testo019*/ 
  TxtFase: string;
  /** Reflected: __Dati_Testo020*/ 
  TxtTipoImballo: string;
  /** Reflected: __Dati_Testo021*/ 
  TxtRisorsa: string;
  /** Reflected: __Dati_Testo022*/ 
  UmOpzione: string;
  /** Reflected: __Dati_Numero015*/ 
  Uno: number;
  /** Reflected: __Dati_Numero016*/ 
  PercIncremento: number;
  /** Reflected: __Dati_Testo023*/ 
  IdRigaOrdine: string;
  /** Reflected: __Dati_Testo024*/ 
  IdLottoProduzione: string;
  /** Reflected: __Dati_Testo025*/ 
  IdAccountCliente: string;
  /** Reflected: __Dati_Testo026*/ 
  IdFaseProduzione: string;
  /** Reflected: __Dati_Numero017*/ 
  FlagStato02AttesaInizio: number;
  /** Reflected: __Dati_Numero018*/ 
  FlagStato03InProduzione: number;
  /** Reflected: __Dati_Numero019*/ 
  FlagStato04Saldato: number;
  /** Reflected: __Dati_Testo027*/ 
  TxtStatoFaseProduzione: string;
  /** Reflected: __Dati_Numero020*/ 
  PercAvanzamento: number;
  /** Reflected: __Dati_Numero021*/ 
  QT_Tt_Fin: number;
  /** Reflected: __Dati_Numero022*/ 
  QT_Tp_Opz: number;
  /** Reflected: __Dati_Numero023*/ 
  QP_R_Opz: number;
  /** Reflected: __Dati_Numero024*/ 
  QP_R_Fin: number;
  /** Reflected: __Dati_Numero025*/ 
  QDaProdurre_Opz: number;
  /** Reflected: __Dati_Numero026*/ 
  QDaProdurre_Fin: number;
  /** Reflected: __Dati_Ora003*/ 
  TT_Tp: string;
  /** Reflected: __Dati_Ora004*/ 
  TT_Tt_Restante: string;
  /** Reflected: __Dati_Numero027*/ 
  AltezzaImballo: number;
  /** Reflected: __Dati_Numero028*/ 
  AreaImballo: number;
  /** Reflected: __Dati_Numero029*/ 
  LarghezzaImballo: number;
  /** Reflected: __Dati_Numero030*/ 
  LunghezzaImballo: number;
  /** Reflected: __Dati_Numero031*/ 
  UmOpzPerImballo: number;
  /** Reflected: __Dati_Numero032*/ 
  VolumeImballo: number;
  /** Reflected: __Dati_Testo028*/ 
  IdFornituraLavorazione: string;
  /** Reflected: __Dati_Data001*/ 
  DataInizioPianificato: Date;
  /** Reflected: __Dati_Data002*/ 
  DataFinePianificato: Date;
  /** Reflected: __Dati_Data003*/ 
  DataInizioReale: Date;
  /** Reflected: __Dati_Data004*/ 
  DataFineReale: Date;
  /** Reflected: __Dati_Numero033*/ 
  GgLavorazione_R: number;
  /** Reflected: __Dati_Testo029*/ 
  IdDocOperativoOrigine: string;
  /** Reflected: __Dati_Numero034*/ 
  QPronta_Opz: number;
  /** Reflected: __Dati_Numero035*/ 
  QPronta_Fin: number;
  /** Reflected: __Dati_Numero036*/ 
  PercScartoSingolaFase_R: number;
  /** Reflected: __Dati_Numero037*/ 
  QS_R_Opz: number;
  /** Reflected: __Dati_Numero038*/ 
  Resa_R: number;
  /** Reflected: __Dati_Ora005*/ 
  TA_R: string;
  /** Reflected: __Dati_Ora006*/ 
  TD_R: string;
  /** Reflected: __Dati_Ora007*/ 
  TF_R: string;
  /** Reflected: __Dati_Ora008*/ 
  TPausaTurno: string;
  /** Reflected: __Dati_Ora009*/ 
  TP_R: string;
  /** Reflected: __Dati_Ora010*/ 
  TT_R: string;
  /** Reflected: __Dati_Ora011*/ 
  TP_Tp: string;
  /** Reflected: __Dati_Ora012*/ 
  TF_Tp: string;
  /** Reflected: __Dati_Numero039*/ 
  DeviazionePercProduttivitaNetta: number;
  /** Reflected: __Dati_Numero040*/ 
  DeviazionePercProduttivitaLorda: number;
  /** Reflected: __Dati_Numero041*/ 
  QP_Tp_Opz: number;
  /** Reflected: __Dati_Numero042*/ 
  QS_Tp_Opz: number;
  /** Reflected: __Dati_Numero043*/ 
  QP_Tp_Fin: number;
  /** Reflected: __Dati_Numero044*/ 
  ProdUmOpzHP_QP_R: number;
  /** Reflected: __Dati_Numero045*/ 
  ProdUmOpzHPF_QP_R: number;
  /** Reflected: __Dati_Numero046*/ 
  ProdUmOpzHP_QT_R: number;
  /** Reflected: __Dati_Numero047*/ 
  ProdUmOpzHPF_QT_R: number;
  /** Reflected: __Dati_Ora013*/ 
  TT_R_ConPausa: string;
  /** Reflected: __Dati_Numero048*/ 
  QT_R_Opz: number;
  /** Reflected: __Dati_Numero049*/ 
  QT_R_Fin: number;
  /** Reflected: __Dati_Numero050*/ 
  PercScartoSingolaFase_T: number;
  /** Reflected: __Dati_Ora014*/ 
  TF_R_QP: string;
  /** Reflected: __Dati_Ora015*/ 
  TF_Tp_QP: string;
  /** Reflected: __Dati_Ora016*/ 
  TF_R_QS: string;
  /** Reflected: __Dati_Ora017*/ 
  TF_Tp_QS: string;
  /** Reflected: __Dati_Ora018*/ 
  TP_R_QP: string;
  /** Reflected: __Dati_Ora019*/ 
  TP_Tp_QP: string;
  /** Reflected: __Dati_Ora020*/ 
  TP_R_QS: string;
  /** Reflected: __Dati_Ora021*/ 
  TP_Tp_QS: string;
  /** Reflected: __Dati_Ora022*/ 
  TT_R_QP: string;
  /** Reflected: __Dati_Ora023*/ 
  TT_Tp_QP: string;
  /** Reflected: __Dati_Ora024*/ 
  TT_R_QS: string;
  /** Reflected: __Dati_Ora025*/ 
  TT_Tp_QS: string;
  /** Reflected: __Dati_Ora026*/ 
  TA_Tp: string;
  /** Reflected: __Dati_Ora027*/ 
  TD_Tp: string;
  /** Reflected: __Dati_Numero051*/ 
  PercDiffProdHPFTeoReale_QT: number;
  /** Reflected: __Dati_Numero052*/ 
  PercDiffProdHPTeoReale_QT: number;
  /** Reflected: __Dati_Numero053*/ 
  CHAD_T: number;
  /** Reflected: __Dati_Numero054*/ 
  CHAddettoAggiuntivo_T: number;
  /** Reflected: __Dati_Numero055*/ 
  CHF_T: number;
  /** Reflected: __Dati_Numero056*/ 
  CHP_T: number;
  /** Reflected: __Dati_Numero057*/ 
  CTAD_R: number;
  /** Reflected: __Dati_Numero058*/ 
  CTAD_Tp: number;
  /** Reflected: __Dati_Numero059*/ 
  CTF_R: number;
  /** Reflected: __Dati_Numero060*/ 
  CTF_Tp: number;
  /** Reflected: __Dati_Numero061*/ 
  CTLE_R: number;
  /** Reflected: __Dati_Numero062*/ 
  CTLE_Tp: number;
  /** Reflected: __Dati_Numero063*/ 
  CTM_R: number;
  /** Reflected: __Dati_Numero064*/ 
  CTM_Tp: number;
  /** Reflected: __Dati_Numero065*/ 
  CTP_R: number;
  /** Reflected: __Dati_Numero066*/ 
  CTP_Tp: number;
  /** Reflected: __Dati_Numero067*/ 
  CTT_R: number;
  /** Reflected: __Dati_Numero068*/ 
  CTT_Tp: number;
  /** Reflected: __Dati_Numero069*/ 
  CTTRA_R: number;
  /** Reflected: __Dati_Numero070*/ 
  CTTRA_Tp: number;
  /** Reflected: __Dati_Numero071*/ 
  CUAD_R_Fin: number;
  /** Reflected: __Dati_Numero072*/ 
  CUAD_Tp_Fin: number;
  /** Reflected: __Dati_Numero073*/ 
  CUF_R_Fin: number;
  /** Reflected: __Dati_Numero074*/ 
  CUF_Tp_Fin: number;
  /** Reflected: __Dati_Numero075*/ 
  CULE_R_Fin: number;
  /** Reflected: __Dati_Numero076*/ 
  CULE_Tp_Fin: number;
  /** Reflected: __Dati_Numero077*/ 
  CUM_R_Fin: number;
  /** Reflected: __Dati_Numero078*/ 
  CUM_Tp_Fin: number;
  /** Reflected: __Dati_Numero079*/ 
  CUP_R_Fin: number;
  /** Reflected: __Dati_Numero080*/ 
  CUP_Tp_Fin: number;
  /** Reflected: __Dati_Numero081*/ 
  CTSFc_Tp: number;
  /** Reflected: __Dati_Numero082*/ 
  CTSFc_R: number;
  /** Reflected: __Dati_Numero083*/ 
  CUT_R_Opz: number;
  /** Reflected: __Dati_Numero084*/ 
  CUT_Tp_Opz: number;
  /** Reflected: __Dati_Numero085*/ 
  CUTRA_R_Opz: number;
  /** Reflected: __Dati_Numero086*/ 
  CUTRA_Tp_Opz: number;
  /** Reflected: __Dati_Testo030*/ 
  TxtMassimoAumentoCosto: string;
  /** Reflected: __Dati_Numero087*/ 
  PercDiffCUSFc_RTt: number;
  /** Reflected: __Dati_Numero088*/ 
  QS_R_Fin: number;
  /** Reflected: __Dati_Numero089*/ 
  CTSFc_Tt: number;
  /** Reflected: __Dati_Numero090*/ 
  CTSFp_R: number;
  /** Reflected: __Dati_Numero091*/ 
  Priorita: number;
  /** Reflected: __Dati_Numero092*/ 
  HAttesa: number;
  /** Reflected: __Dati_Numero093*/ 
  FlagAttesaTotale: number;
  /** Reflected: __Dati_Testo031*/ 
  IdOperatoreProduzioneDesignato: string;
  /** Reflected: __Dati_Testo032*/ 
  TxtOperatoreDesignato: string;
  /** Reflected: __Dati_Testo033*/ 
  IdAccountDestinatario: string;
  /** Reflected: __Dati_Testo034*/ 
  CodiceFaseProduzione: string;
  /** Reflected: __Dati_Testo035*/ 
  CodiceArticolo: string;
  /** Reflected: __Dati_Testo036*/ 
  CodiceCiclo: string;
  /** Reflected: __Dati_Testo037*/ 
  CodiceLottoProduzione: string;
  /** Reflected: __Dati_Testo038*/ 
  CodiceRigaOrdine: string;
  /** Reflected: __Dati_Testo039*/ 
  CodiceFase: string;
  /** Reflected: __Dati_Testo040*/ 
  CodiceRisorsa: string;
  /** Reflected: __Dati_Testo041*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero094*/ 
  PrioritaCapoTurno: number;
  /** Reflected: __Dati_Numero095*/ 
  Diff_CUAD_TpR: number;
  /** Reflected: __Dati_Numero096*/ 
  Diff_CUF_TpR: number;
  /** Reflected: __Dati_Numero097*/ 
  Diff_CULE_TpR: number;
  /** Reflected: __Dati_Numero098*/ 
  Diff_CUM_TpR: number;
  /** Reflected: __Dati_Numero099*/ 
  Diff_CUP_TpR: number;
  /** Reflected: __Dati_Numero100*/ 
  Diff_CUSFc_TpR: number;
  /** Reflected: __Dati_Numero101*/ 
  Diff_CUT_TpR: number;
  /** Reflected: __Dati_Numero102*/ 
  FlagStato01AttesaBenestare: number;
  /** Reflected: __Dati_Numero103*/ 
  QS_Tp_Fin: number;
  /** Reflected: __Dati_Numero104*/ 
  FlagNestedPossibile: number;
  /** Reflected: __Dati_Testo042*/ 
  IdFasiProduzioneInNesting: string;
  /** Reflected: __Dati_Numero105*/ 
  QDaLavorareSuPronta_Opz: number;
  /** Reflected: __Dati_Numero106*/ 
  QDaLavorareSuPronta_Fin: number;
  /** Reflected: __Dati_Testo043*/ 
  CodiceDisegno: string;
  /** Reflected: __Dati_Numero107*/ 
  FlagTempoManualePossibile: number;
  /** Reflected: __Dati_Numero108*/ 
  NumeroFase: number;
  /** Reflected: __Dati_Numero109*/ 
  NumeroAlternativa: number;
  /** Reflected: __Dati_Numero110*/ 
  FlagAggiornaDaOpzione: number;
  /** Reflected: __Dati_Numero111*/ 
  FlagAggiorna01DaRegistrazioni: number;
  /** Reflected: __Dati_Numero112*/ 
  FlagAggiorna02Totali: number;
  /** Reflected: __Dati_Testo044*/ 
  CodiceTxtArticoloAutomatico: string;
  /** Reflected: __Dati_Numero113*/ 
  FlagLavInternaNonPianificabile: number;
  /** Reflected: __Dati_Testo045*/ 
  IdTipoDocOperativoOrigine: string;
  /** Reflected: __Dati_Testo046*/ 
  IdDocOperativoCaricoFiniti: string;
  /** Reflected: __Dati_Testo047*/ 
  IdDocOperativoFabbisognoLavorazioni: string;
  /** Reflected: __Dati_Testo048*/ 
  IdDocOperativoFabbisognoMateriali: string;
  /** Reflected: __Dati_Testo049*/ 
  IdDocOperativoOrdineLavorazioni: string;
  /** Reflected: __Dati_Testo050*/ 
  IdDocOperativoRientroLavorazioni: string;
  /** Reflected: __Dati_Testo051*/ 
  IdDocOperativoScaricoMateriali: string;
  /** Reflected: __Dati_Testo052*/ 
  IdDocOperativoUscitaLavorazioni: string;
  /** Reflected: __Dati_Testo053*/ 
  IdFornituraTrasporto: string;
  /** Reflected: __Dati_Numero114*/ 
  NumeroAddettiStandardRisorsa: number;
  /** Reflected: __Dati_Testo054*/ 
  TxtFaseRisorsaAutomatico: string;
  /** Reflected: __Dati_Numero115*/ 
  Zero: number;
  /** Reflected: __Dati_Testo055*/ 
  IdFaseProduzioneOrigine: string;
  /** Reflected: __Dati_Numero116*/ 
  CostoResiduo_Opz: number;
  /** Reflected: __Dati_Numero117*/ 
  CostoResiduo_Fin: number;
  /** Reflected: __Dati_Testo056*/ 
  AnnoMesePianificato: string;
  /** Reflected: __Dati_Numero118*/ 
  SettimanaPianificato: number;
  /** Reflected: __Dati_Testo057*/ 
  CodiceTxtRisorsa: string;
  /** Reflected: __Dati_Data005*/ 
  DataPrevistaConsegna: Date;
  /** Reflected: __Dati_Ora028*/ 
  TPF_R: string;
  /** Reflected: __Dati_Numero119*/ 
  SettimanaFineReale: number;
  /** Reflected: __Dati_Testo058*/ 
  AnnoFineReale: string;
  /** Reflected: __Dati_Data006*/ 
  AnnoMeseReale: Date;
  /** Reflected: __Dati_Testo059*/ 
  CodiceTxtFaseAutomatico: string;
  /** Reflected: __Dati_Testo060*/ 
  CodiceTxtFaseRisorsaAutomatico: string;
  /** Reflected: __Dati_Numero120*/ 
  CTL_R: number;
  /** Reflected: __Dati_Numero121*/ 
  CTL_Tp: number;
  /** Reflected: __Dati_Numero122*/ 
  FlagDaBenestariare: number;
  /** Reflected: __Dati_Testo061*/ 
  IdDocImballo: string;
  /** Reflected: __Dati_Testo062*/ 
  IdDocImgImballo: string;
  /** Reflected: __Dati_Testo063*/ 
  IdDocImgNoteAttrezzaggio: string;
  /** Reflected: __Dati_Testo064*/ 
  IdDocImgNoteMovimentazione: string;
  /** Reflected: __Dati_Testo065*/ 
  IdDocImgNoteProduzione: string;
  /** Reflected: __Dati_Testo066*/ 
  IdDocImgNoteQualita: string;
  /** Reflected: __Dati_Testo067*/ 
  IdDocImgNoteUtensili: string;
  /** Reflected: __Dati_Testo068*/ 
  NoteQualita: string;
  /** Reflected: __Dati_Testo069*/ 
  TxtItemLavorazione: string;
  /** Reflected: __Dati_Numero123*/ 
  PercQtEntrataFase: number;
  /** Reflected: __Dati_Testo070*/ 
  RevisioneArticolo: string;
  /** Reflected: __Dati_Testo071*/ 
  RevisioneDisegno: string;
  /** Reflected: __Dati_Testo072*/ 
  CodiceRevisioneDisegnoAutomatica: string;
  /** Reflected: __Dati_Testo073*/ 
  IdVoceDocOperativoOrigine: string;
  /** Reflected: __Dati_Testo074*/ 
  NumeroDecimaliValori: string;
  /** Reflected: __Dati_Testo075*/ 
  NumeroDecimaliQuantita: string;
  /** Reflected: __Dati_Numero124*/ 
  CHPF_T: number;
  /** Reflected: __Dati_Numero125*/ 
  ConvUmFinUmOpz: number;
  /** Reflected: __Dati_Numero126*/ 
  ConvUmLavorazioneUmOpz: number;
  /** Reflected: __Dati_Numero127*/ 
  ConvUmOpzUmLavorazione: number;
  /** Reflected: __Dati_Ora029*/ 
  TT_Tt: string;
  /** Reflected: __Dati_Ora030*/ 
  TAttraversamentoLinea_T: string;
  /** Reflected: __Dati_Ora031*/ 
  TPF_Tt_Restante: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraInizioPianificato: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraFinePianificato: Date;
  /** Reflected: __Dati_Numero128*/ 
  CUT_R_Opz_Cumulato: number;
  /** Reflected: __Dati_Testo076*/ 
  CodiceTxtDisegnoArticoloAutomatico: string;
  /** Reflected: __Dati_Numero129*/ 
  CostoOrarioMacchinaAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero130*/ 
  CostoOrarioAddettoAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero131*/ 
  QuotaAddettoAttrezzaggio_T: number;
  /** Reflected: __Dati_Numero132*/ 
  CostoOrarioMacchinaProduzione_T: number;
  /** Reflected: __Dati_Numero133*/ 
  CostoOrarioAddettoProduzione_T: number;
  /** Reflected: __Dati_Numero134*/ 
  QuotaAddettoProduzione_T: number;
  /** Reflected: __Dati_Numero135*/ 
  CostoOrarioMacchinaFermoMacchina_T: number;
  /** Reflected: __Dati_Numero136*/ 
  CostoOrarioAddettoFermoMacchina_T: number;
  /** Reflected: __Dati_Numero137*/ 
  QuotaAddettoFermoMacchina_T: number;
  /** Reflected: __Dati_Numero138*/ 
  CUT_Tp_Opz_Cumulato: number;
  /** Reflected: __Dati_Numero139*/ 
  ConvUmOpzUmTrasporto: number;
  /** Reflected: __Dati_Numero140*/ 
  ConvUmTrasportoUmOpz: number;
  /** Reflected: __Dati_Numero141*/ 
  FlagAlternativaPianificabile: number;
  /** Reflected: __Dati_Numero142*/ 
  FlagRegistraContenitore: number;
  /** Reflected: __Dati_Testo077*/ 
  IdTipoContenitore: string;
  /** Reflected: __Dati_Testo078*/ 
  IdItemTrasporto: string;
  /** Reflected: __Dati_Numero143*/ 
  NumeroControlliFase: number;
  /** Reflected: __Dati_Numero144*/ 
  ProdUmFinHP_QP_R: number;
  /** Reflected: __Dati_Numero145*/ 
  ProdUmFinHP_QT_R: number;
  /** Reflected: __Dati_Numero146*/ 
  ProdUmFinHPF_QP_R: number;
  /** Reflected: __Dati_Numero147*/ 
  ProdUmFinHPF_QT_R: number;
  /** Reflected: __Dati_Testo079*/ 
  TxtItemTrasporto: string;
  /** Reflected: __Dati_Testo080*/ 
  TxtTipoContenitore: string;
  /** Reflected: __Dati_Numero148*/ 
  FlagBenestareDato: number;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraBenestare: Date;
  /** Reflected: __Dati_Testo081*/ 
  IdAccountOperatoreBenestare: string;
  /** Reflected: __Dati_Testo082*/ 
  TxtAccountOperatoreBenestare: string;
  /** Reflected: __Dati_Numero149*/ 
  FlagSaldoManuale: number;
  /** Reflected: __Dati_Numero150*/ 
  CTAD_Tt: number;
  /** Reflected: __Dati_Ora032*/ 
  TP_Tt: string;
  /** Reflected: __Dati_Ora033*/ 
  TF_Tt: string;
  /** Reflected: __Dati_Numero151*/ 
  CTF_Tt: number;
  /** Reflected: __Dati_Numero152*/ 
  CUL_Tt_Opz: number;
  /** Reflected: __Dati_Numero153*/ 
  CUL_Tt_Fin: number;
  /** Reflected: __Dati_Numero154*/ 
  CTL_Tt: number;
  /** Reflected: __Dati_Numero155*/ 
  CULE_Tt_Opz: number;
  /** Reflected: __Dati_Numero156*/ 
  CTLE_Tt: number;
  /** Reflected: __Dati_Numero157*/ 
  CULE_Tt_Fin: number;
  /** Reflected: __Dati_Numero158*/ 
  CTM_Tt: number;
  /** Reflected: __Dati_Numero159*/ 
  CUAD_Tp_Opz: number;
  /** Reflected: __Dati_Numero160*/ 
  CUAD_R_Opz: number;
  /** Reflected: __Dati_Numero161*/ 
  CUAD_Tt_Opz: number;
  /** Reflected: __Dati_Numero162*/ 
  CUAD_Tt_Fin: number;
  /** Reflected: __Dati_Numero163*/ 
  CUF_R_Opz: number;
  /** Reflected: __Dati_Numero164*/ 
  CUF_Tp_Opz: number;
  /** Reflected: __Dati_Numero165*/ 
  CUF_Tt_Opz: number;
  /** Reflected: __Dati_Numero166*/ 
  CUF_Tt_Fin: number;
  /** Reflected: __Dati_Numero167*/ 
  CUL_R_Opz: number;
  /** Reflected: __Dati_Numero168*/ 
  CUL_R_Fin: number;
  /** Reflected: __Dati_Numero169*/ 
  CUL_Tp_Opz: number;
  /** Reflected: __Dati_Numero170*/ 
  CUL_Tp_Fin: number;
  /** Reflected: __Dati_Numero171*/ 
  CULE_R_Opz: number;
  /** Reflected: __Dati_Numero172*/ 
  CULE_Tp_Opz: number;
  /** Reflected: __Dati_Numero173*/ 
  CUM_R_Opz: number;
  /** Reflected: __Dati_Numero174*/ 
  CUM_Tp_Opz: number;
  /** Reflected: __Dati_Numero175*/ 
  CUM_Tt_Fin: number;
  /** Reflected: __Dati_Numero176*/ 
  CUM_Tt_Opz: number;
  /** Reflected: __Dati_Numero177*/ 
  CUP_R_Opz: number;
  /** Reflected: __Dati_Numero178*/ 
  CUP_Tp_Opz: number;
  /** Reflected: __Dati_Numero179*/ 
  CUP_Tt_Fin: number;
  /** Reflected: __Dati_Numero180*/ 
  CTP_Tt: number;
  /** Reflected: __Dati_Numero181*/ 
  CUP_Tt_Opz: number;
  /** Reflected: __Dati_Numero182*/ 
  CUQ_Tt_Opz: number;
  /** Reflected: __Dati_Numero183*/ 
  CUQ_Tt_Fin: number;
  /** Reflected: __Dati_Numero184*/ 
  CTQ_Tt: number;
  /** Reflected: __Dati_Numero185*/ 
  CTQ_R: number;
  /** Reflected: __Dati_Numero186*/ 
  CTQ_Tp: number;
  /** Reflected: __Dati_Numero187*/ 
  CUT_R_Fin: number;
  /** Reflected: __Dati_Numero188*/ 
  CUT_Tp_Fin: number;
  /** Reflected: __Dati_Numero189*/ 
  CUT_R_Fin_Cumulato: number;
  /** Reflected: __Dati_Numero190*/ 
  CUT_Tp_Fin_Cumulato: number;
  /** Reflected: __Dati_Numero191*/ 
  CUT_Tt_Fin: number;
  /** Reflected: __Dati_Numero192*/ 
  CTTRA_Tt: number;
  /** Reflected: __Dati_Numero193*/ 
  CTUt_R: number;
  /** Reflected: __Dati_Numero194*/ 
  CTUt_Tp: number;
  /** Reflected: __Dati_Numero195*/ 
  CTUt_Tt: number;
  /** Reflected: __Dati_Numero196*/ 
  CTT_Tt: number;
  /** Reflected: __Dati_Numero197*/ 
  CUT_Tt_Opz: number;
  /** Reflected: __Dati_Numero198*/ 
  CUT_Tt_Fin_Cumulato: number;
  /** Reflected: __Dati_Numero199*/ 
  CUT_Tt_Opz_Cumulato: number;
  /** Reflected: __Dati_Numero200*/ 
  CUQ_R_Fin: number;
  /** Reflected: __Dati_Numero201*/ 
  CUQ_R_Opz: number;
  /** Reflected: __Dati_Numero202*/ 
  CUQ_Tp_Fin: number;
  /** Reflected: __Dati_Numero203*/ 
  CUQ_Tp_Opz: number;
  /** Reflected: __Dati_Numero204*/ 
  CUTRA_R_Fin: number;
  /** Reflected: __Dati_Numero205*/ 
  CUTRA_Tp_Fin: number;
  /** Reflected: __Dati_Numero206*/ 
  CUTRA_Tt_Fin: number;
  /** Reflected: __Dati_Numero207*/ 
  CUTRA_Tt_Opz: number;
  /** Reflected: __Dati_Numero208*/ 
  CUUt_R_Fin: number;
  /** Reflected: __Dati_Numero209*/ 
  CUUt_R_Opz: number;
  /** Reflected: __Dati_Numero210*/ 
  CUUt_Tp_Fin: number;
  /** Reflected: __Dati_Numero211*/ 
  CUUt_Tp_Opz: number;
  /** Reflected: __Dati_Numero212*/ 
  CUUt_Tt_Fin: number;
  /** Reflected: __Dati_Numero213*/ 
  CUUt_Tt_Opz: number;
  /** Reflected: __Dati_Numero214*/ 
  CTSFp_Tp: number;
  /** Reflected: __Dati_Numero215*/ 
  QS_Tt_Opz: number;
  /** Reflected: __Dati_Numero216*/ 
  QS_Tt_Fin: number;
  /** Reflected: __Dati_Numero217*/ 
  QT_Tp_Fin: number;
  /** Reflected: __Dati_Numero218*/ 
  QT_Tt_Opz: number;
  /** Reflected: __Dati_Numero219*/ 
  QP_Tt_Opz: number;
  /** Reflected: __Dati_Numero220*/ 
  QP_Tt_Fin: number;
  /** Reflected: __Dati_Numero221*/ 
  CTSFp_Tt: number;
  /** Reflected: __Dati_Numero222*/ 
  CTBFc_R: number;
  /** Reflected: __Dati_Numero223*/ 
  CTBFc_Tp: number;
  /** Reflected: __Dati_Numero224*/ 
  CTBFc_Tt: number;
  /** Reflected: __Dati_Numero225*/ 
  CTS_R: number;
  /** Reflected: __Dati_Numero226*/ 
  CTS_Tp: number;
  /** Reflected: __Dati_Numero227*/ 
  CTS_Tt: number;
  /** Reflected: __Dati_Numero228*/ 
  CTT_Tt_Totale: number;
  /** Reflected: __Dati_Numero229*/ 
  CTT_R_Totale: number;
  /** Reflected: __Dati_Numero230*/ 
  CTT_Tp_Totale: number;
  /** Reflected: __Dati_Numero231*/ 
  CUSFc_Tt_Opz: number;
  /** Reflected: __Dati_Numero232*/ 
  CUSFc_Tt_Fin: number;
  /** Reflected: __Dati_Numero233*/ 
  CUSFc_Tp_Fin: number;
  /** Reflected: __Dati_Numero234*/ 
  CUSFc_Tp_Opz: number;
  /** Reflected: __Dati_Numero235*/ 
  CUSFc_R_Opz: number;
  /** Reflected: __Dati_Numero236*/ 
  CUSFc_R_Fin: number;
  /** Reflected: __Dati_Numero237*/ 
  CUBFc_Tt_Opz: number;
  /** Reflected: __Dati_Numero238*/ 
  CUBFc_Tt_Fin: number;
  /** Reflected: __Dati_Numero239*/ 
  CUBFc_Tp_Fin: number;
  /** Reflected: __Dati_Numero240*/ 
  CUBFc_Tp_Opz: number;
  /** Reflected: __Dati_Numero241*/ 
  CUBFc_R_Opz: number;
  /** Reflected: __Dati_Numero242*/ 
  CUBFc_R_Fin: number;
  /** Reflected: __Dati_Numero243*/ 
  CUT_Tt_Totale_Opz: number;
  /** Reflected: __Dati_Numero244*/ 
  CUT_Tt_Totale_Fin: number;
  /** Reflected: __Dati_Numero245*/ 
  CUT_Tp_Totale_Opz: number;
  /** Reflected: __Dati_Numero246*/ 
  CUT_Tp_Totale_Fin: number;
  /** Reflected: __Dati_Numero247*/ 
  CUT_R_Totale_Opz: number;
  /** Reflected: __Dati_Numero248*/ 
  CUT_R_Totale_Fin: number;
  /** Reflected: __Dati_Numero249*/ 
  PercIncCTAD_Tt: number;
  /** Reflected: __Dati_Numero250*/ 
  PercIncCTF_Tt: number;
  /** Reflected: __Dati_Numero251*/ 
  PercIncCTL_Tt: number;
  /** Reflected: __Dati_Numero252*/ 
  PercIncCTLE_Tt: number;
  /** Reflected: __Dati_Numero253*/ 
  PercIncCTM_Tt: number;
  /** Reflected: __Dati_Numero254*/ 
  PercIncCTP_Tt: number;
  /** Reflected: __Dati_Numero255*/ 
  PercIncCTQ_Tt: number;
  /** Reflected: __Dati_Numero256*/ 
  PercIncCTTRA_Tt: number;
  /** Reflected: __Dati_Numero257*/ 
  PercIncCTUt_Tt: number;
  /** Reflected: __Dati_Numero258*/ 
  PercIncCTSFc_Tt: number;
  /** Reflected: __Dati_Numero259*/ 
  PercIncCTBFc_Tt: number;
  /** Reflected: __Dati_Numero260*/ 
  PercIncCTAD_R: number;
  /** Reflected: __Dati_Numero261*/ 
  PercIncCTBFc_R: number;
  /** Reflected: __Dati_Numero262*/ 
  PercIncCTF_R: number;
  /** Reflected: __Dati_Numero263*/ 
  PercIncCTL_R: number;
  /** Reflected: __Dati_Numero264*/ 
  PercIncCTLE_R: number;
  /** Reflected: __Dati_Numero265*/ 
  PercIncCTM_R: number;
  /** Reflected: __Dati_Numero266*/ 
  PercIncCTP_R: number;
  /** Reflected: __Dati_Numero267*/ 
  PercIncCTQ_R: number;
  /** Reflected: __Dati_Numero268*/ 
  PercIncCTSFc_R: number;
  /** Reflected: __Dati_Numero269*/ 
  PercIncCTTRA_R: number;
  /** Reflected: __Dati_Numero270*/ 
  PercIncCTUt_R: number;
  /** Reflected: __Dati_Numero271*/ 
  PercIncCTAD_Tp: number;
  /** Reflected: __Dati_Numero272*/ 
  PercIncCTBFc_Tp: number;
  /** Reflected: __Dati_Numero273*/ 
  PercIncCTF_Tp: number;
  /** Reflected: __Dati_Numero274*/ 
  PercIncCTL_Tp: number;
  /** Reflected: __Dati_Numero275*/ 
  PercIncCTLE_Tp: number;
  /** Reflected: __Dati_Numero276*/ 
  PercIncCTM_Tp: number;
  /** Reflected: __Dati_Numero277*/ 
  PercIncCTP_Tp: number;
  /** Reflected: __Dati_Numero278*/ 
  PercIncCTQ_Tp: number;
  /** Reflected: __Dati_Numero279*/ 
  PercIncCTSFc_Tp: number;
  /** Reflected: __Dati_Numero280*/ 
  PercIncCTTRA_Tp: number;
  /** Reflected: __Dati_Numero281*/ 
  PercIncCTUt_Tp: number;
  /** Reflected: __Dati_Numero282*/ 
  Diff_CUAD_TtR: number;
  /** Reflected: __Dati_Numero283*/ 
  Diff_CUF_TtR: number;
  /** Reflected: __Dati_Numero284*/ 
  Diff_CULE_TtR: number;
  /** Reflected: __Dati_Numero285*/ 
  Diff_CUM_TtR: number;
  /** Reflected: __Dati_Numero286*/ 
  Diff_CUP_TtR: number;
  /** Reflected: __Dati_Numero287*/ 
  Diff_CUSFc_TtR: number;
  /** Reflected: __Dati_Numero288*/ 
  Diff_CUT_TtR: number;
  /** Reflected: __Dati_Numero289*/ 
  PercDiffCUAD_RTp: number;
  /** Reflected: __Dati_Numero290*/ 
  PercDiffCUF_RTp: number;
  /** Reflected: __Dati_Numero291*/ 
  PercDiffCULE_RTp: number;
  /** Reflected: __Dati_Numero292*/ 
  PercDiffCUM_RTp: number;
  /** Reflected: __Dati_Numero293*/ 
  PercDiffCUP_RTp: number;
  /** Reflected: __Dati_Numero294*/ 
  PercDiffCUTRA_RTp: number;
  /** Reflected: __Dati_Numero295*/ 
  PercDiffCUT_RTp: number;
  /** Reflected: __Dati_Numero296*/ 
  PercDiffCUUt_RTp: number;
  /** Reflected: __Dati_Numero297*/ 
  PercDiffCUQ_RTp: number;
  /** Reflected: __Dati_Numero298*/ 
  Diff_CUUt_TpR: number;
  /** Reflected: __Dati_Numero299*/ 
  Diff_CUUt_TtR: number;
  /** Reflected: __Dati_Numero300*/ 
  Diff_CUQ_TpR: number;
  /** Reflected: __Dati_Numero301*/ 
  Diff_CUQ_TtR: number;
  /** Reflected: __Dati_Numero302*/ 
  PercDiffCUAD_RTt: number;
  /** Reflected: __Dati_Numero303*/ 
  PercDiffCUF_RTt: number;
  /** Reflected: __Dati_Numero304*/ 
  PercDiffCULE_RTt: number;
  /** Reflected: __Dati_Numero305*/ 
  PercDiffCUM_RTt: number;
  /** Reflected: __Dati_Numero306*/ 
  PercDiffCUP_RTt: number;
  /** Reflected: __Dati_Numero307*/ 
  PercDiffCUQ_RTt: number;
  /** Reflected: __Dati_Numero308*/ 
  PercDiffCUT_RTt: number;
  /** Reflected: __Dati_Numero309*/ 
  PercDiffCUTRA_RTt: number;
  /** Reflected: __Dati_Numero310*/ 
  PercDiffCUUt_RTt: number;
  /** Reflected: __Dati_Numero311*/ 
  PercDiffCUSFc_RTp: number;
  /** Reflected: __Dati_Numero312*/ 
  PercDiffCUL_RTp: number;
  /** Reflected: __Dati_Numero313*/ 
  PercDiffCUL_RTt: number;
  /** Reflected: __Dati_Numero314*/ 
  FlagScartoRilavorabile: number;
  /** Reflected: __Dati_Numero315*/ 
  PercDiffCUBFc_RTp: number;
  /** Reflected: __Dati_Numero316*/ 
  PercDiffCUBFc_RTt: number;
  /** Reflected: __Dati_Numero317*/ 
  Diff_CUL_TtR: number;
  /** Reflected: __Dati_Numero318*/ 
  Diff_CUL_TpR: number;
  /** Reflected: __Dati_Ora034*/ 
  TEffettivoLavoroMacchina: string;
  /** Reflected: __Dati_Testo083*/ 
  IdDocOperativoScartoMateriali: string;
  /** Reflected: __Dati_Numero319*/ 
  Diff_CUTRA_TtR: number;
  /** Reflected: __Dati_Numero320*/ 
  Diff_CUTRA_TpR: number;
  /** Reflected: __Dati_Numero321*/ 
  TT_Tt_Restante_Num: number;
  /** Reflected: __Dati_Numero322*/ 
  TA_Tt_Num: number;
  /** Reflected: __Dati_Numero323*/ 
  TD_Tt_Num: number;
  /** Reflected: __Dati_Numero324*/ 
  QDaSpedire_Fin: number;
  /** Reflected: __Dati_Numero325*/ 
  QDaSpedire_Opz: number;
  /** Reflected: __Dati_Numero326*/ 
  PercTEffettivoLavoroMacchina: number;
  /** Reflected: __Dati_Numero327*/ 
  FlagPianificata: number;
  /** Reflected: __Dati_Numero328*/ 
  NumeroAddettiReale: number;
  /** Reflected: __Dati_DataOra004*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra005*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero329*/ 
  OrdineStatoFaseProduzione: number;
  /** Reflected: __Dati_Data007*/ 
  DataLimiteInizioLavorazioni: Date;
  /** Reflected: __Dati_Numero330*/ 
  AnnoLimiteInizioLavorazioni: number;
  /** Reflected: __Dati_Testo084*/ 
  AnnoMeseLimiteInizioLavorazioni: string;
  /** Reflected: __Dati_Testo085*/ 
  AnnoSettimanaLimiteInizioLavorazioni: string;
  /** Reflected: __Dati_Numero331*/ 
  SettimanaLimiteInizioLavorazioni: number;
  /** Reflected: __Dati_Testo086*/ 
  IdDocOperativoChiusuraPrenotazioneContoTrasformazione: string;
  /** Reflected: __Dati_Testo087*/ 
  IdDocOperativoFabbisognoContoTrasformazione: string;
  /** Reflected: __Dati_Testo088*/ 
  IdDocOperativoFabbisognoTrasporto: string;
  /** Reflected: __Dati_Testo089*/ 
  IdDocOperativoFabbisognoUtensili: string;
  /** Reflected: __Dati_Testo090*/ 
  IdDocOperativoOrdineFornitoreContoTrasformazione: string;
  /** Reflected: __Dati_Testo091*/ 
  IdDocOperativoOrdineFornitoreTrasporto: string;
  /** Reflected: __Dati_Testo092*/ 
  IdDocOperativoPreparazioneMateriali: string;
  /** Reflected: __Dati_Testo093*/ 
  IdDocOperativoPreparazioneMaterialiContoTrasformazione: string;
  /** Reflected: __Dati_Testo094*/ 
  IdDocOperativoRientroContoTrasformazione: string;
  /** Reflected: __Dati_Testo095*/ 
  IdDocOperativoSpedizioneMaterialeContoTrasformazione: string;
  /** Reflected: __Dati_Testo096*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Numero332*/ 
  QtPerBenestare: number;
  /** Reflected: __Dati_Numero333*/ 
  CUT_R_Fin_Cumulato_Ricarico: number;
  /** Reflected: __Dati_Numero334*/ 
  CUT_Tp_Fin_Cumulato_Ricarico: number;
  /** Reflected: __Dati_Numero335*/ 
  CUT_Tt_Fin_Cumulato_Ricarico: number;
  /** Reflected: __Dati_Numero336*/ 
  ProgrammaMacchina_FlagInviato: number;
  /** Reflected: __Dati_DataOra006*/ 
  ProgrammaMacchina_DataOraInvio: Date;
  /** Reflected: __Dati_Testo097*/ 
  ProgrammaMacchina_IdUtenteInvio: string;
  /** Reflected: __Dati_Testo098*/ 
  ProgrammaMacchina_TxtUtenteInvio: string;
  /** Reflected: __Dati_Contenitore001*/ 
  ProgrammaMacchina_FileZip: string;
  /** Reflected: __Dati_Testo099*/ 
  ProgrammaMacchina_IdProgrammaMacchina: string;
  /** Reflected: __Dati_Testo100*/ 
  ProgrammaMacchina_PathZip: string;
  /** Reflected: __Dati_Testo101*/ 
  ProgrammaMacchina_IdOperatoreInvio: string;
  /** Reflected: __Dati_Testo102*/ 
  ProgrammaMacchina_TxtOperatoreInvio: string;
  /** Reflected: __Dati_Numero337*/ 
  FlagAggiornaContenutiDaRisorsa: number;
  /** Reflected: __Dati_Testo103*/ 
  ControlliQualita_TxtAvvisoFisso: string;
  /** Reflected: __Dati_Numero338*/ 
  ControlliQualita_FlagAvvisoFisso: number
}