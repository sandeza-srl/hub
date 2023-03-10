export interface IDettagliDocOperativiAnagrafica {
  _id: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraModifica: Date;
  /** Reflected: __Dati_Numero001*/ 
  Uno: number;
  /** Reflected: __Dati_Numero002*/ 
  Zero: number;
  /** Reflected: __Dati_Testo001*/ 
  IdDettagliDocOperativiAnagrafica: string;
  /** Reflected: __Dati_Testo002*/ 
  IdAccount: string;
  /** Reflected: __Dati_Testo003*/ 
  IdTipoDocOperativo: string;
  /** Reflected: __Dati_Numero003*/ 
  FlagAggiorna: number;
  /** Reflected: __Dati_Testo004*/ 
  TxtAccount: string;
  /** Reflected: __Dati_Testo005*/ 
  TxtTipoDocOperativo: string;
  /** Reflected: __Dati_Testo006*/ 
  CodiceTipoDocOperativo: string;
  /** Reflected: __Dati_Testo007*/ 
  CodiceAccount: string;
  /** Reflected: __Dati_Numero004*/ 
  Banca_FlagProponi: number;
  /** Reflected: __Dati_Numero005*/ 
  Economici_FlagProponi: number;
  /** Reflected: __Dati_Numero006*/ 
  Resa_FlagProponi: number;
  /** Reflected: __Dati_Numero007*/ 
  Pagamento_FlagProponi: number;
  /** Reflected: __Dati_Numero008*/ 
  Vettore_FlagProponi: number;
  /** Reflected: __Dati_Testo008*/ 
  Banca_IdCassaBancaAppoggio: string;
  /** Reflected: __Dati_Testo009*/ 
  Banca_IdCassaBancaRiferimento: string;
  /** Reflected: __Dati_Testo010*/ 
  Economici_IdAccountIntermediario: string;
  /** Reflected: __Dati_Testo011*/ 
  Pagamento_IdMetodoPagamento: string;
  /** Reflected: __Dati_Testo012*/ 
  Pagamento_IdRegolaScadenza: string;
  /** Reflected: __Dati_Testo013*/ 
  Pagamento_NoteCondizioni: string;
  /** Reflected: __Dati_Testo014*/ 
  Pagamento_NotePagamento: string;
  /** Reflected: __Dati_Testo015*/ 
  Resa_AspettoEsteriore: string;
  /** Reflected: __Dati_Testo016*/ 
  Resa_CausaleTrasporto: string;
  /** Reflected: __Dati_Testo017*/ 
  Resa_Porto: string;
  /** Reflected: __Dati_Testo018*/ 
  Resa_IdIncoterm: string;
  /** Reflected: __Dati_Testo019*/ 
  Vettore_IdAccountVettore: string;
  /** Reflected: __Dati_Testo020*/ 
  Vettore_IdAccountSecondoVettore: string;
  /** Reflected: __Dati_Testo021*/ 
  Vettore_TipoVettore: string;
  /** Reflected: __Dati_Testo022*/ 
  Pagamento_TerminiDiPagamento: string
}