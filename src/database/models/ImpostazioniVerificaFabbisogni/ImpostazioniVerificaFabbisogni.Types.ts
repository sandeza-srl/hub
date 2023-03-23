export interface IImpostazioniVerificaFabbisogni {
  _id: string;
  /** Reflected: __Dati_DataOra001*/ 
  DataOraCreazione: Date;
  /** Reflected: __Dati_DataOra002*/ 
  DataOraUltimaModifica: Date;
  /** Reflected: __Dati_Testo001*/ 
  IdImpostazioniVerificaFabbisogni: string;
  /** Reflected: __Dati_Numero001*/ 
  PercMinimaRealizzabileDelTotale: number;
  /** Reflected: __Dati_Numero002*/ 
  PercMinimaRealizzabileDelResiduo: number;
  /** Reflected: __Dati_Numero003*/ 
  FlagOrdinamentoPerPriorita: number;
  /** Reflected: __Dati_Numero004*/ 
  GiacenzaRiferimentoFinoASettimana: number;
  /** Reflected: __Dati_Numero005*/ 
  FlagConsideraGiacenzaInRitardo: number;
  /** Reflected: __Dati_Numero006*/ 
  FlagOrdinamentoPerDataPianificata: number;
  /** Reflected: __Dati_Testo002*/ 
  IdAccountCompagnia: string;
  /** Reflected: __Dati_Numero007*/ 
  FlagEsecuzioneInCorso: number;
  /** Reflected: __Dati_Testo003*/ 
  IdUtenteEsecuzioneInCorso: string;
  /** Reflected: __Dati_Numero008*/ 
  Uno: number;
  /** Reflected: __Dati_Numero009*/ 
  Zero: number;
  /** Reflected: __Dati_Testo004*/ 
  IdInstallazione: string
}