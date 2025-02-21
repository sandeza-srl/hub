export interface ITipiFasi {
_id: string;
/** Reflected: __Dati_Numero001*/ 
Uno: number;
/** Reflected: __Dati_Testo001*/ 
IdTipoFase: string;
/** Reflected: __Dati_Testo002*/ 
TxtTipoFase: string;
/** Reflected: __Dati_Testo003*/ 
IdRisorsa: string;
/** Reflected: __Dati_Numero002*/ 
GgLavorazione: number;
/** Reflected: __Dati_Testo004*/ 
TxtRisorsa: string;
/** Reflected: __Dati_Numero003*/ 
ControlliQualita_FrequenzaControllo: number;
/** Reflected: __Dati_Testo005*/ 
UnitaMisura: string;
/** Reflected: __Dati_Numero004*/ 
IncidenzaScarto: number;
/** Reflected: __Dati_Testo006*/ 
CodiceTipoFase: string;
/** Reflected: __Dati_Testo007*/ 
CodiceRisorsa: string;
/** Reflected: __Dati_Testo008*/ 
IdAccountCompagnia: string;
/** Reflected: __Dati_Testo009*/ 
IdTipiControlli: string;
/** Reflected: __Dati_Ora001*/ 
TA_T: string;
/** Reflected: __Dati_Ora002*/ 
TD_T: string;
/** Reflected: __Dati_Ora003*/ 
TAttraversamentoLinea_T: string;
/** Reflected: __Dati_Numero005*/ 
NUmOpzColpo_T: number;
/** Reflected: __Dati_Numero006*/ 
ProdUmOpzHP_T: number;
/** Reflected: __Dati_Numero007*/ 
Zero: number;
/** Reflected: __Dati_Data001*/ 
DataCreazione: Date;
/** Reflected: __Dati_Data002*/ 
DataModifica: Date;
/** Reflected: __Dati_DataOra001*/ 
DataOraCreazione: Date;
/** Reflected: __Dati_DataOra002*/ 
DataOraUltimaModifica: Date;
/** Reflected: __Dati_Testo010*/ 
UtenteCreazione: string;
/** Reflected: __Dati_Testo011*/ 
UtenteModifica: string;
/** Reflected: __Dati_Testo012*/ 
CodiceTxtTipoFaseAutomatico: string;
/** Reflected: __Dati_Testo013*/ 
CodiceTxtTipoFaseRisorsaAutomatico: string;
/** Reflected: __Dati_Testo014*/ 
IdItemLavorazione: string;
/** Reflected: __Dati_Numero008*/ 
FlagImballoFinale: number;
/** Reflected: __Dati_Numero009*/ 
FlagImballoParziale: number;
/** Reflected: __Dati_Numero010*/ 
FlagLavEsterna: number;
/** Reflected: __Dati_Numero011*/ 
FlagNestedPossibile: number;
/** Reflected: __Dati_Numero012*/ 
FlagLavInternaPianificabile: number;
/** Reflected: __Dati_Numero013*/ 
FlagTempoManualePossibile: number;
/** Reflected: __Dati_Testo015*/ 
TxtItemLavorazione: string;
/** Reflected: __Dati_Testo016*/ 
IdTipiImballo: string;
/** Reflected: __Dati_Testo017*/ 
TxtTipoImballo: string;
/** Reflected: __Dati_Numero014*/ 
CUL_T: number;
/** Reflected: __Dati_Numero015*/ 
FlagLavInternaNonPianificabile: number;
/** Reflected: __Dati_Testo018*/ 
FlagSelezione: string;
/** Reflected: __Dati_Numero016*/ 
ControlliQualita_FlagDaBenestariareQualita: number;
/** Reflected: __Dati_Numero017*/ 
PercScartoImpostata: number;
/** Reflected: __Dati_Testo019*/ 
IdItemTrasporto: string;
/** Reflected: __Dati_Testo020*/ 
TxtItemTrasporto: string;
/** Reflected: __Dati_Numero018*/ 
FlagRegistraContenitore: number;
/** Reflected: __Dati_Testo021*/ 
IdTipoContenitore: string;
/** Reflected: __Dati_Testo022*/ 
TxtTipoContenitore: string;
/** Reflected: __Dati_Numero019*/ 
FlagScartoRilavorabile: number;
/** Reflected: __Dati_Numero020*/ 
QtPerBenestare: number;
/** Reflected: __Dati_Numero021*/ 
FlagRisorseAssociate: number;
/** Reflected: __Dati_Testo023*/ 
IdInstallazione: string;
/** Reflected: __Dati_Numero022*/ 
FlagVerificaControlli: number;
/** Reflected: __Dati_Numero023*/ 
ControlliQualita_FlagAvvisoFisso: number;
/** Reflected: __Dati_Testo024*/ 
ControlliQualita_TxtAvvisoFisso: string;
/** Reflected: __Dati_Testo025*/ 
IdRicorrenzaRecord: string;
/** Reflected: __Dati_Testo026*/ 
IdUtente: string;
/** Reflected: __Dati_Testo027*/ 
TxtUtente: string;
/** Reflected: __Dati_Numero024*/ 
CambioRisorsa_FaseProduzione_FlagAttivo: number;
/** Reflected: __Dati_Numero025*/ 
CambioRisorsa_Registrazione_FlagAttivo: number;
/** Reflected: __Dati_Numero026*/ 
ControlliQualita_FlagCaricamentoAutomatico: number;
/** Reflected: __Dati_Numero027*/ 
ControlliQualita_FlagControlliAutomaticiPresenti: number;
/** Reflected: __Dati_Testo028*/ 
Integrazione_DatiVariAC: string;
/** Reflected: __Dati_Numero028*/ 
Materiale_QuantitaProposta_FlagAttivo: number;
/** Reflected: __Dati_Numero029*/ 
Materiale_QuantitaProposta_FlagCalcoloGenerico: number;
/** Reflected: __Dati_Numero030*/ 
Materiale_QuantitaProposta_FlagCalcoloSpecifico: number;
/** Reflected: __Dati_Testo029*/ 
Materiale_Algoritmo: string;
/** Reflected: __Dati_Numero031*/ 
Materiale_Algoritmo_FlagValido: number;
/** Reflected: __Dati_Numero032*/ 
ControlliQualita_FlagCreazioneDaiPad: number;
/** Reflected: __Dati_Numero033*/ 
Contenitori_FlagRegistrazioneAbilitata: number;
/** Reflected: __Dati_Numero034*/ 
Contenitori_FlagRegistrazioneObbligatoria: number;
/** Reflected: __Dati_Numero035*/ 
TracciabilitaRegistrazione_FlagFaseDiPartenza: number;
/** Reflected: __Dati_Numero036*/ 
ImportTempiDaConsuntivo_FlagSoloProduzione: number;
/** Reflected: __Dati_Numero037*/ 
ImportTempiDaConsuntivo_FlagTipo_UltimaFaseProdSaldata: number;
/** Reflected: __Dati_Numero038*/ 
ImportTempiDaConsuntivo_FlagTipo_MediaFasiProdSaldate: number;
/** Reflected: __Dati_Numero039*/ 
ImportTempiDaConsuntivo_FlagTipo_MediaSuDistribuzioniCentrali: number;
/** Reflected: __Dati_Numero040*/ 
ImportTempiDaConsuntivo_MediaSuDistribuzioniCentrali_Soglia: number;
/** Reflected: __Dati_Numero041*/ 
ImportTempiDaConsuntivo_MediaFasiProdSaldate_NumeroMinimo: number;
/** Reflected: __Dati_Numero042*/ 
ImportTempiDaConsuntivo_FlagEscludiConfermati: number
}