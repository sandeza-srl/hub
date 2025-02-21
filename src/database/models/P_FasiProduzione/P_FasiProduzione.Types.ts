export interface IP_FasiProduzione {
_id: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo001*/ 
IdLottoProduzione: string;
/** Reflected: __Dati_Testo002*/ 
IdFaseProduzione: string;
/** Reflected: __Dati_Testo003*/ 
IdRigaOrdine: string;
/** Reflected: __Dati_DataOra001*/ 
FaseCompleta_DataOraFine: Date;
/** Reflected: __Dati_DataOra002*/ 
FaseCompleta_DataOraInizio: Date;
/** Reflected: __Dati_Numero002*/ 
Priorita: number;
/** Reflected: __Dati_Numero003*/ 
GgLavorazione_T: number;
/** Reflected: __Dati_Numero004*/ 
FlagLavInternaPianificabile: number;
/** Reflected: __Dati_Numero005*/ 
FlagAttesaTotale: number;
/** Reflected: __Dati_Numero006*/ 
HAttesa: number;
/** Reflected: __Dati_Numero007*/ 
PrioritaLotto: number;
/** Reflected: __Dati_Testo004*/ 
IdRisorsa: string;
/** Reflected: __Dati_Ora001*/ 
TT_Tt_Restante: string;
/** Reflected: __Dati_Testo005*/ 
CodiceFaseProduzione: string;
/** Reflected: __Dati_Testo006*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Numero008*/ 
Zero: number;
/** Reflected: __Dati_Numero009*/ 
NumeroFase: number;
/** Reflected: __Dati_Ora002*/ 
TD_Tt: string;
/** Reflected: __Dati_Ora003*/ 
TA_Tt: string;
/** Reflected: __Dati_Testo007*/ 
IdArticolo: string;
/** Reflected: __Dati_Testo008*/ 
IdOpzioneProd: string;
/** Reflected: __Dati_Testo009*/ 
IdOperatoreProduzioneDesignato: string;
/** Reflected: __Dati_Numero010*/ 
PercAvanzamento: number;
/** Reflected: __Dati_Numero011*/ 
NumeroAddetti: number;
/** Reflected: __Dati_Numero012*/ 
QuotaAddettoAttrezzaggio_T: number;
/** Reflected: __Dati_Numero013*/ 
QuotaAddettoProduzione_T: number;
/** Reflected: __Dati_Numero014*/ 
Regole_FlagTempoDivisibile: number;
/** Reflected: __Dati_Numero015*/ 
Regole_QtSlotMinimiDaPianificare: number;
/** Reflected: __Dati_Ora004*/ 
Produzione_TempoDaPianificare: string;
/** Reflected: __Dati_Ora005*/ 
Attrezzaggio_TempoDaPianificare: string;
/** Reflected: __Dati_Ora006*/ 
Disattrezzaggio_TempoDaPianificare: string;
/** Reflected: __Dati_Ora007*/ 
FaseCompleta_TempoDaPianificare: string;
/** Reflected: __Dati_Ora008*/ 
Regole_IntervalloMinimoPianificazione: string;
/** Reflected: __Dati_Numero016*/ 
FaseCompleta_QtSlotDaPianificare: number;
/** Reflected: __Dati_Numero017*/ 
Attrezzaggio_QtSlotDaPianificare: number;
/** Reflected: __Dati_Numero018*/ 
Disattrezzaggio_QtSlotDaPianificare: number;
/** Reflected: __Dati_Numero019*/ 
Produzione_QtSlotDaPianificare: number;
/** Reflected: __Dati_Numero020*/ 
Regole_PercMinimaDiProduzioneDaPianificare: number;
/** Reflected: __Dati_Ora009*/ 
Regole_TempoMassimoAttrezzaggioRipetibile: string;
/** Reflected: __Dati_Numero021*/ 
Regole_QtSlotTempoMassimoAttrezzaggioRipetibile: number;
/** Reflected: __Dati_Numero022*/ 
FaseCompleta_NumeroSlotFine: number;
/** Reflected: __Dati_Numero023*/ 
FaseCompleta_NumeroSlotInizio: number;
/** Reflected: __Dati_Numero024*/ 
Risultati_FlagTempoDiviso: number;
/** Reflected: __Dati_Numero025*/ 
Attrezzaggio_NumeroSlotFine: number;
/** Reflected: __Dati_Numero026*/ 
Produzione_NumeroSlotInizio: number;
/** Reflected: __Dati_Numero027*/ 
Produzione_NumeroSlotFine: number;
/** Reflected: __Dati_Numero028*/ 
Disattrezzaggio_NumeroSlotInizio: number;
/** Reflected: __Dati_DataOra003*/ 
Attrezzaggio_DataOraInizio: Date;
/** Reflected: __Dati_DataOra004*/ 
Attrezzaggio_DataOraFine: Date;
/** Reflected: __Dati_DataOra005*/ 
Produzione_DataOraFine: Date;
/** Reflected: __Dati_DataOra006*/ 
Produzione_DataOraInizio: Date;
/** Reflected: __Dati_DataOra007*/ 
Disattrezzaggio_DataOraFine: Date;
/** Reflected: __Dati_DataOra008*/ 
Disattrezzaggio_DataOraInizio: Date;
/** Reflected: __Dati_Testo010*/ 
IdRigaPianificazione: string;
/** Reflected: __Dati_Numero029*/ 
Regole_QtSlotMinimiDiProduzioneDaPianificare: number;
/** Reflected: __Dati_Numero030*/ 
Risultati_FlagLottoPianificato: number;
/** Reflected: __Dati_Numero031*/ 
Regole_ValoreFrazionamentoTempo: number;
/** Reflected: __Dati_Numero032*/ 
Calcolo_PrimaFinePossibileSuTutto: number;
/** Reflected: __Dati_Numero033*/ 
Calcolo_PrimaFinePossibileSuMinimo: number;
/** Reflected: __Dati_Numero034*/ 
FlagProduzioneInCorsoAdesso: number;
/** Reflected: __Dati_DataOra009*/ 
Calcolo_DataOraPartenzaCalcolo: Date;
/** Reflected: __Dati_Numero035*/ 
Calcolo_NumeroSlotPartenzaCalcolo: number;
/** Reflected: __Dati_DataOra010*/ 
Regole_DataOraPrimoSlotElaborazionePianificazione: Date;
/** Reflected: __Dati_Numero036*/ 
Calcolo_FlagAggiorna: number;
/** Reflected: __Dati_Numero037*/ 
Regole_QtSlotDeltaMinimoPianificabileTutto: number;
/** Reflected: __Dati_Testo011*/ 
Calcolo_SlotOccupati: string;
/** Reflected: __Dati_Testo012*/ 
CodiceTxtFaseAutomatico: string;
/** Reflected: __Dati_Testo013*/ 
CodiceTxtArticoloAutomatico: string;
/** Reflected: __Dati_Numero038*/ 
Risultati_FlagFasePianificata: number;
/** Reflected: __Dati_Testo014*/ 
IdInstallazione: string;
/** Reflected: __Dati_Testo015*/ 
IdP_FasiProduzione: string;
/** Reflected: __Dati_Data001*/ 
Pianificazione_DataMinimaInizioPianificazione: Date;
/** Reflected: __Dati_DataOra011*/ 
Pianificazione_DataOraMinimaInizioPianificazione: Date
}