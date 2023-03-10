export interface IAnalisiCostoArticoli {
  _id: string;
  /** Reflected: __Dati_Testo001*/ 
  IdAnalisiCosto: string;
  /** Reflected: __Dati_Data001*/ 
  DataCreazione: Date;
  /** Reflected: __Dati_Data002*/ 
  DataModifica: Date;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Numero001*/ 
  FlagAggiornaTotali01: number;
  /** Reflected: __Dati_Numero002*/ 
  FlagAggiornaTotali02: number;
  /** Reflected: __Dati_Testo002*/ 
  IdTipoArticolo: string;
  /** Reflected: __Dati_Testo003*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero003*/ 
  Uno: number;
  /** Reflected: __Dati_Numero004*/ 
  Zero: number;
  /** Reflected: __Dati_Numero005*/ 
  PercRicarico: number;
  /** Reflected: __Dati_Testo004*/ 
  CodiceDisegno: string;
  /** Reflected: __Dati_Testo005*/ 
  RevisioneDisegno: string;
  /** Reflected: __Dati_Testo006*/ 
  IdAccountCliente: string;
  /** Reflected: __Dati_Testo007*/ 
  CodiceProgetto: string;
  /** Reflected: __Dati_Testo008*/ 
  Note: string;
  /** Reflected: __Dati_Testo009*/ 
  TxtAnalisiCosto: string;
  /** Reflected: __Dati_Testo010*/ 
  UtenteCreazione: string;
  /** Reflected: __Dati_Testo011*/ 
  UtenteModifica: string;
  /** Reflected: __Dati_Numero006*/ 
  FlagInCorso: number;
  /** Reflected: __Dati_Numero007*/ 
  FlagChiusa: number;
  /** Reflected: __Dati_DataOra003*/ 
  DataOraChiusura: Date;
  /** Reflected: __Dati_Testo012*/ 
  UtenteChiusura: string;
  /** Reflected: __Dati_Numero008*/ 
  Quantita: number;
  /** Reflected: __Dati_Numero009*/ 
  Quantita_TollPiuPerc: number;
  /** Reflected: __Dati_Numero010*/ 
  Quantita_TollMenoPerc: number;
  /** Reflected: __Dati_Numero011*/ 
  Quantita_LimiteInferiore: number;
  /** Reflected: __Dati_Numero012*/ 
  Quantita_LimiteSuperiore: number;
  /** Reflected: __Dati_Numero013*/ 
  CTADT: number;
  /** Reflected: __Dati_Numero014*/ 
  CTIngT: number;
  /** Reflected: __Dati_Numero015*/ 
  CTLET: number;
  /** Reflected: __Dati_Numero016*/ 
  CTLT: number;
  /** Reflected: __Dati_Numero017*/ 
  CTMT: number;
  /** Reflected: __Dati_Numero018*/ 
  CTProgT: number;
  /** Reflected: __Dati_Numero019*/ 
  CTPT: number;
  /** Reflected: __Dati_Numero020*/ 
  CTQT: number;
  /** Reflected: __Dati_Numero021*/ 
  CTST: number;
  /** Reflected: __Dati_Numero022*/ 
  CTT: number;
  /** Reflected: __Dati_Numero023*/ 
  CTT_Ricarico: number;
  /** Reflected: __Dati_Numero024*/ 
  CTT_UnitaBuone: number;
  /** Reflected: __Dati_Numero025*/ 
  CTTRAT: number;
  /** Reflected: __Dati_Numero026*/ 
  CTUtT: number;
  /** Reflected: __Dati_Numero027*/ 
  CUADT: number;
  /** Reflected: __Dati_Numero028*/ 
  CUIngT: number;
  /** Reflected: __Dati_Numero029*/ 
  CULET: number;
  /** Reflected: __Dati_Numero030*/ 
  CULT: number;
  /** Reflected: __Dati_Numero031*/ 
  CUMT: number;
  /** Reflected: __Dati_Numero032*/ 
  CUProgT: number;
  /** Reflected: __Dati_Numero033*/ 
  CUPT: number;
  /** Reflected: __Dati_Numero034*/ 
  CUQT: number;
  /** Reflected: __Dati_Numero035*/ 
  CUST: number;
  /** Reflected: __Dati_Numero036*/ 
  CUT: number;
  /** Reflected: __Dati_Numero037*/ 
  CUT_Ricarico: number;
  /** Reflected: __Dati_Numero038*/ 
  CUT_UnitaBuone: number;
  /** Reflected: __Dati_Numero039*/ 
  CUTRAT: number;
  /** Reflected: __Dati_Numero040*/ 
  CUUtT: number;
  /** Reflected: __Dati_Numero041*/ 
  Risultato_CUADT_Media: number;
  /** Reflected: __Dati_Numero042*/ 
  Risultato_CUADT_Deviazione: number;
  /** Reflected: __Dati_Numero043*/ 
  Risultato_CUPT_Deviazione: number;
  /** Reflected: __Dati_Numero044*/ 
  Risultato_CUPT_Media: number;
  /** Reflected: __Dati_Numero045*/ 
  Risultato_CULET_Media: number;
  /** Reflected: __Dati_Numero046*/ 
  Risultato_CULT_Media: number;
  /** Reflected: __Dati_Numero047*/ 
  Risultato_CUMT_Media: number;
  /** Reflected: __Dati_Numero048*/ 
  Risultato_CUST_Media: number;
  /** Reflected: __Dati_Numero049*/ 
  Risultato_CUTRAT_Media: number;
  /** Reflected: __Dati_Numero050*/ 
  Risultato_CUQT_Media: number;
  /** Reflected: __Dati_Numero051*/ 
  Risultato_CUUtT_Media: number;
  /** Reflected: __Dati_Numero052*/ 
  Risultato_CTIngT_Media: number;
  /** Reflected: __Dati_Numero053*/ 
  Risultato_CTProgT_Media: number;
  /** Reflected: __Dati_Numero054*/ 
  Risultato_CUT_Media: number;
  /** Reflected: __Dati_Numero055*/ 
  Risultato_CTIngT_Deviazione: number;
  /** Reflected: __Dati_Numero056*/ 
  Risultato_CULET_Deviazione: number;
  /** Reflected: __Dati_Numero057*/ 
  Risultato_CULT_Deviazione: number;
  /** Reflected: __Dati_Numero058*/ 
  Risultato_CUMT_Deviazione: number;
  /** Reflected: __Dati_Numero059*/ 
  Risultato_CTProgT_Deviazione: number;
  /** Reflected: __Dati_Numero060*/ 
  Risultato_CUQT_Deviazione: number;
  /** Reflected: __Dati_Numero061*/ 
  Risultato_CUST_Deviazione: number;
  /** Reflected: __Dati_Numero062*/ 
  Risultato_CUT_Deviazione: number;
  /** Reflected: __Dati_Numero063*/ 
  Risultato_CUTRAT_Deviazione: number;
  /** Reflected: __Dati_Numero064*/ 
  Risultato_CUUtT_Deviazione: number;
  /** Reflected: __Dati_Testo013*/ 
  IdAccountOperatore: string;
  /** Reflected: __Dati_Testo014*/ 
  TxtAccountClienteFinale: string;
  /** Reflected: __Dati_Testo015*/ 
  TxtAccountOperatore: string;
  /** Reflected: __Dati_Data003*/ 
  DataScadenza: Date;
  /** Reflected: __Dati_Testo016*/ 
  IdDocumentoDisegno: string;
  /** Reflected: __Dati_Testo017*/ 
  IdDocumentoImmagine: string;
  /** Reflected: __Dati_Numero065*/ 
  CUADT_Deviazione: number;
  /** Reflected: __Dati_Numero066*/ 
  CUIngT_Deviazione: number;
  /** Reflected: __Dati_Numero067*/ 
  CULET_Deviazione: number;
  /** Reflected: __Dati_Numero068*/ 
  CULT_Deviazione: number;
  /** Reflected: __Dati_Numero069*/ 
  CUMT_Deviazione: number;
  /** Reflected: __Dati_Numero070*/ 
  CUProgT_Deviazione: number;
  /** Reflected: __Dati_Numero071*/ 
  CUPT_Deviazione: number;
  /** Reflected: __Dati_Numero072*/ 
  CUQT_Deviazione: number;
  /** Reflected: __Dati_Numero073*/ 
  CUST_Deviazione: number;
  /** Reflected: __Dati_Numero074*/ 
  CUTRAT_Deviazione: number;
  /** Reflected: __Dati_Numero075*/ 
  CUUtT_Deviazione: number;
  /** Reflected: __Dati_Testo018*/ 
  CodificaClienteItem: string;
  /** Reflected: __Dati_Testo019*/ 
  DescrizioneClienteItem: string;
  /** Reflected: __Dati_Testo020*/ 
  TxtTipoArticolo: string;
  /** Reflected: __Dati_Numero076*/ 
  CUT_Deviazione: number;
  /** Reflected: __Dati_Numero077*/ 
  CUT_UnitaBuone_Deviazione: number;
  /** Reflected: __Dati_Numero078*/ 
  CUT_Ricarico_Deviazione: number;
  /** Reflected: __Dati_Testo021*/ 
  IdFamigliaItem: string;
  /** Reflected: __Dati_Testo022*/ 
  IdSottoFamigliaItem: string;
  /** Reflected: __Dati_Testo023*/ 
  CUADT_Id: string;
  /** Reflected: __Dati_Testo024*/ 
  CUIngT_Id: string;
  /** Reflected: __Dati_Testo025*/ 
  CULET_Id: string;
  /** Reflected: __Dati_Testo026*/ 
  CULT_Id: string;
  /** Reflected: __Dati_Testo027*/ 
  CUMT_Id: string;
  /** Reflected: __Dati_Testo028*/ 
  CUProgT_Id: string;
  /** Reflected: __Dati_Testo029*/ 
  CUPT_Id: string;
  /** Reflected: __Dati_Testo030*/ 
  CUQT_Id: string;
  /** Reflected: __Dati_Testo031*/ 
  CUST_Id: string;
  /** Reflected: __Dati_Testo032*/ 
  CUT_Id: string;
  /** Reflected: __Dati_Testo033*/ 
  CUTRAT_Id: string;
  /** Reflected: __Dati_Testo034*/ 
  CUUtT_Id: string;
  /** Reflected: __Dati_Testo035*/ 
  IdTipoCiclo: string;
  /** Reflected: __Dati_Testo036*/ 
  IdInstallazione: string;
  /** Reflected: __Dati_Testo037*/ 
  IdUtente: string;
  /** Reflected: __Dati_Testo038*/ 
  TxtUtente: string;
  /** Reflected: __Dati_Testo039*/ 
  IdRicorrenzaRecord: string
}