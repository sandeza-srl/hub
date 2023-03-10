export interface ICostBreakdownScaglione {
  _id: string;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Testo001*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Testo002*/ 
  IdArticolo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdCiclo: string;
  /** Reflected: __Dati_Testo004*/ 
  IdCostBreakdownScaglione: string;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Testo005*/ 
  TxtUtenteCreazione: string;
  /** Reflected: __Dati_Testo006*/ 
  TxtUtenteModifica: string;
  /** Reflected: __Dati_Numero002*/ 
  Zero: number;
  /** Reflected: __Dati_Testo007*/ 
  TxtScaglione: string;
  /** Reflected: __Dati_Testo008*/ 
  IdFaseOrigineImport: string;
  /** Reflected: __Dati_Testo009*/ 
  IdCostBreakdownPerScaglioneOrigine: string;
  /** Reflected: __Dati_Testo010*/ 
  IdRigaOrigineImportPerCostBreakdownOrigine: string;
  /** Reflected: __Dati_Testo011*/ 
  TxtUtenteInvio: string;
  /** Reflected: __Dati_Numero003*/ 
  FlagImport: number;
  /** Reflected: __Dati_Numero004*/ 
  PercQtEntrataPerFase: number;
  /** Reflected: __Dati_Numero005*/ 
  PercQtEntrataPerScaglione: number;
  /** Reflected: __Dati_Numero006*/ 
  CTM_T_Buy_PerFase_LivelliInferiori: number;
  /** Reflected: __Dati_Numero007*/ 
  CUM_T_Buy_PerFase_LivelliInferiori: number;
  /** Reflected: __Dati_Numero008*/ 
  CUUt_T_Buy_PerFase_LivelliInferiori: number;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo012*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo013*/ 
  IdUtenteCreazione: string;
  /** Reflected: __Dati_Testo014*/ 
  IdUtenteInvio: string;
  /** Reflected: __Dati_Testo015*/ 
  IdUtenteModifica: string;
  /** Reflected: __Dati_Testo016*/ 
  IdScaglioneCostBreakdown: string;
  /** Reflected: __Dati_Numero009*/ 
  FlagFornituraAcquisto_Materiali: number;
  /** Reflected: __Dati_Numero010*/ 
  FlagFornituraAcquisto_Utensili: number;
  /** Reflected: __Dati_Numero011*/ 
  CTM_T_Buy_Fase: number;
  /** Reflected: __Dati_Numero012*/ 
  CTM_T_Make_Fase: number;
  /** Reflected: __Dati_Numero013*/ 
  CUM_T_Buy: number;
  /** Reflected: __Dati_Numero014*/ 
  CUM_T_Make: number;
  /** Reflected: __Dati_Numero015*/ 
  CTUt_T_Buy_Fase: number;
  /** Reflected: __Dati_Numero016*/ 
  CTUt_T_Make_Fase: number;
  /** Reflected: __Dati_Numero017*/ 
  CUUt_T_Buy: number;
  /** Reflected: __Dati_Numero018*/ 
  CUUt_T_Make: number;
  /** Reflected: __Dati_Numero019*/ 
  FlagTipoRiga_Fase: number;
  /** Reflected: __Dati_Numero020*/ 
  FlagTipoRiga_Materiale: number;
  /** Reflected: __Dati_Numero021*/ 
  FlagTipoRiga_Utensile: number;
  /** Reflected: __Dati_Testo017*/ 
  IdFase: string;
  /** Reflected: __Dati_Numero022*/ 
  CTADT_Fase: number;
  /** Reflected: __Dati_Numero023*/ 
  CTFT_Fase: number;
  /** Reflected: __Dati_Numero024*/ 
  CTIngT_Fase: number;
  /** Reflected: __Dati_Numero025*/ 
  CTLET_Fase: number;
  /** Reflected: __Dati_Numero026*/ 
  CTLT_Fase: number;
  /** Reflected: __Dati_Numero027*/ 
  CTMT_Fase: number;
  /** Reflected: __Dati_Numero028*/ 
  CTPnT_Fase: number;
  /** Reflected: __Dati_Numero029*/ 
  CTProgT_Fase: number;
  /** Reflected: __Dati_Numero030*/ 
  CTPT_Fase: number;
  /** Reflected: __Dati_Numero031*/ 
  CTQT_Fase: number;
  /** Reflected: __Dati_Numero032*/ 
  CTST_Fase: number;
  /** Reflected: __Dati_Numero033*/ 
  CTT_Fase: number;
  /** Reflected: __Dati_Numero034*/ 
  CTT_Ricarico_Fase: number;
  /** Reflected: __Dati_Numero035*/ 
  CTT_UnitaBuone_Fase: number;
  /** Reflected: __Dati_Numero036*/ 
  CTTRAT_Fase: number;
  /** Reflected: __Dati_Numero037*/ 
  CTUtT_Fase: number;
  /** Reflected: __Dati_Numero038*/ 
  CUADT: number;
  /** Reflected: __Dati_Numero039*/ 
  CUFT: number;
  /** Reflected: __Dati_Numero040*/ 
  CUIngT: number;
  /** Reflected: __Dati_Numero041*/ 
  CULET: number;
  /** Reflected: __Dati_Numero042*/ 
  CULT: number;
  /** Reflected: __Dati_Numero043*/ 
  CUMT: number;
  /** Reflected: __Dati_Numero044*/ 
  CUPnT: number;
  /** Reflected: __Dati_Numero045*/ 
  CUProgT: number;
  /** Reflected: __Dati_Numero046*/ 
  CUPT: number;
  /** Reflected: __Dati_Numero047*/ 
  CUQT: number;
  /** Reflected: __Dati_Numero048*/ 
  CUST: number;
  /** Reflected: __Dati_Numero049*/ 
  CUT: number;
  /** Reflected: __Dati_Numero050*/ 
  CUT_Ricarico: number;
  /** Reflected: __Dati_Numero051*/ 
  CUT_UnitaBuone: number;
  /** Reflected: __Dati_Numero052*/ 
  CUTRAT: number;
  /** Reflected: __Dati_Numero053*/ 
  CUUtT: number;
  /** Reflected: __Dati_Testo018*/ 
  IdItem: string;
  /** Reflected: __Dati_Testo019*/ 
  IdItemOpzioneProd: string;
  /** Reflected: __Dati_Testo020*/ 
  IdOpzioneProd: string;
  /** Reflected: __Dati_Testo021*/ 
  IdTipoUtensilePerOpzioneProd: string;
  /** Reflected: __Dati_Numero054*/ 
  QtFase: number;
  /** Reflected: __Dati_Testo022*/ 
  IdTipoFornitura: string;
  /** Reflected: __Dati_Numero055*/ 
  FlagFornituraAcquisto_Trasporto: number;
  /** Reflected: __Dati_Numero056*/ 
  FlagFornitura_Lavorazioni: number;
  /** Reflected: __Dati_Testo023*/ 
  IdFornituraItem: string;
  /** Reflected: __Dati_Testo024*/ 
  TxtFornituraItem: string;
  /** Reflected: __Dati_Numero057*/ 
  VTotalePerFase: number;
  /** Reflected: __Dati_Numero058*/ 
  VUnitarioPerFase: number;
  /** Reflected: __Dati_Numero059*/ 
  VUnitarioFornitura: number;
  /** Reflected: __Dati_Numero060*/ 
  ConvUmLavorazioneUmOpz: number;
  /** Reflected: __Dati_Numero061*/ 
  ConvUmOpzUmFin: number;
  /** Reflected: __Dati_Numero062*/ 
  QtPerUmOpz: number;
  /** Reflected: __Dati_Numero063*/ 
  QtUtensilePerUmOpz: number;
  /** Reflected: __Dati_Numero064*/ 
  QuantitaTotalePerFase: number;
  /** Reflected: __Dati_Numero065*/ 
  FlagAggiornaDaFornitura: number;
  /** Reflected: __Dati_Testo025*/ 
  IdScaglionePadre: string;
  /** Reflected: __Dati_Testo026*/ 
  IdScaglione: string;
  /** Reflected: __Dati_Numero066*/ 
  GiorniApprovigionamento: number;
  /** Reflected: __Dati_Numero067*/ 
  Livello: number;
  /** Reflected: __Dati_Testo027*/ 
  IdRisorsa: string;
  /** Reflected: __Dati_Numero068*/ 
  FlagTipoRiga_LavorazioneEsterna: number;
  /** Reflected: __Dati_Numero069*/ 
  FlagTipoRiga_Trasporto: number;
  /** Reflected: __Dati_Testo028*/ 
  CodiceTxtFase: string;
  /** Reflected: __Dati_Testo029*/ 
  CodiceTxtItem: string;
  /** Reflected: __Dati_Testo030*/ 
  TxtRigaCostBreakdown: string;
  /** Reflected: __Dati_Testo031*/ 
  TxtRappresentazioneRiga: string;
  /** Reflected: __Dati_Numero070*/ 
  OrdineRappresentazione: number;
  /** Reflected: __Dati_Numero071*/ 
  NumeroFase: number;
  /** Reflected: __Dati_Numero072*/ 
  OrdineCreazione: number;
  /** Reflected: __Dati_Numero073*/ 
  FlagAggiornaOrdinamento: number;
  /** Reflected: __Dati_Numero074*/ 
  FlagTipoRiga_LavNonPianificabile: number;
  /** Reflected: __Dati_Testo032*/ 
  TxtTipoRiga: string;
  /** Reflected: __Dati_Testo033*/ 
  CodiceTxtArticoloCostBreakdown: string;
  /** Reflected: __Dati_Numero075*/ 
  QuantitaUnitariaPerScaglioneOrigine: number;
  /** Reflected: __Dati_Numero076*/ 
  QuantitaUnitariaPerScaglione: number;
  /** Reflected: __Dati_Numero077*/ 
  QuantitaTotalePerScaglione: number;
  /** Reflected: __Dati_Numero078*/ 
  QuantitaUnitariaPerMateriale: number;
  /** Reflected: __Dati_Numero079*/ 
  QuantitaScaglionePerCostBreakdown: number;
  /** Reflected: __Dati_Testo034*/ 
  IdRigaOrigineImport: string;
  /** Reflected: __Dati_Numero080*/ 
  CTADT_Scaglione: number;
  /** Reflected: __Dati_Numero081*/ 
  CTFT_Scaglione: number;
  /** Reflected: __Dati_Numero082*/ 
  CTIngT_Scaglione: number;
  /** Reflected: __Dati_Numero083*/ 
  CTLET_Scaglione: number;
  /** Reflected: __Dati_Numero084*/ 
  CTLT_Scaglione: number;
  /** Reflected: __Dati_Numero085*/ 
  CTM_T_Buy_Scaglione: number;
  /** Reflected: __Dati_Numero086*/ 
  VTotalePerScaglione: number;
  /** Reflected: __Dati_Numero087*/ 
  CTM_T_Make_Scaglione: number;
  /** Reflected: __Dati_Numero088*/ 
  CTMT_Scaglione: number;
  /** Reflected: __Dati_Numero089*/ 
  CTPnT_Scaglione: number;
  /** Reflected: __Dati_Numero090*/ 
  CTProgT_Scaglione: number;
  /** Reflected: __Dati_Numero091*/ 
  CTPT_Scaglione: number;
  /** Reflected: __Dati_Numero092*/ 
  CTQT_Scaglione: number;
  /** Reflected: __Dati_Numero093*/ 
  CTST_Scaglione: number;
  /** Reflected: __Dati_Numero094*/ 
  CTT_Scaglione: number;
  /** Reflected: __Dati_Numero095*/ 
  CTT_UnitaBuone_Scaglione: number;
  /** Reflected: __Dati_Numero096*/ 
  CTTRAT_Scaglione: number;
  /** Reflected: __Dati_Numero097*/ 
  CTUt_T_Buy_Scaglione: number;
  /** Reflected: __Dati_Numero098*/ 
  CTUt_T_Make_Scaglione: number;
  /** Reflected: __Dati_Numero099*/ 
  CTUtT_Scaglione: number;
  /** Reflected: __Dati_Numero100*/ 
  CTT_Ricarico_Scaglione: number;
  /** Reflected: __Dati_Numero101*/ 
  FlagAggiornaQuantitaValori: number;
  /** Reflected: __Dati_Numero102*/ 
  VUnitarioPerScaglione: number;
  /** Reflected: __Dati_Numero103*/ 
  QuantitaScaglioneOrigine: number;
  /** Reflected: __Dati_Numero104*/ 
  CTUt_T_Buy_PerFase_LivelliInferiori: number;
  /** Reflected: __Dati_Testo035*/ 
  IdUtente: string;
  /** Reflected: __Dati_Testo036*/ 
  TxtUtente: string;
  /** Reflected: __Dati_Testo037*/ 
  IdRicorrenzaRecord: string
}