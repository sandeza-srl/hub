import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICostBreakdownScaglionePrivate } from './CostBreakdownScaglione.Types.Private';


/* --------
* Schema Definition
* -------- */
const CostBreakdownScaglioneSchema = new mongoose.Schema<ICostBreakdownScaglionePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo003: {
type: String,
alias: 'IdCiclo',

},
__Dati_Testo004: {
type: String,
alias: 'IdCostBreakdownScaglione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo005: {
type: String,
alias: 'TxtUtenteCreazione',

},
__Dati_Testo006: {
type: String,
alias: 'TxtUtenteModifica',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
type: String,
alias: 'TxtScaglione',

},
__Dati_Testo008: {
type: String,
alias: 'IdFaseOrigineImport',

},
__Dati_Testo009: {
type: String,
alias: 'IdCostBreakdownPerScaglioneOrigine',

},
__Dati_Testo010: {
type: String,
alias: 'IdRigaOrigineImportPerCostBreakdownOrigine',

},
__Dati_Testo011: {
type: String,
alias: 'TxtUtenteInvio',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagImport',

},
__Dati_Numero004: {
type: Number,
alias: 'PercQtEntrataPerFase',

},
__Dati_Numero005: {
type: Number,
alias: 'PercQtEntrataPerScaglione',

},
__Dati_Numero006: {
type: Number,
alias: 'CTM_T_Buy_PerFase_LivelliInferiori',

},
__Dati_Numero007: {
type: Number,
alias: 'CUM_T_Buy_PerFase_LivelliInferiori',

},
__Dati_Numero008: {
type: Number,
alias: 'CUUt_T_Buy_PerFase_LivelliInferiori',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo013: {
type: String,
alias: 'IdUtenteCreazione',

},
__Dati_Testo014: {
type: String,
alias: 'IdUtenteInvio',

},
__Dati_Testo015: {
type: String,
alias: 'IdUtenteModifica',

},
__Dati_Testo016: {
type: String,
alias: 'IdScaglioneCostBreakdown',

},
__Dati_Numero009: {
type: Number,
alias: 'Fornitura_FlagAcquisto',

},
__Dati_Numero010: {
type: Number,
alias: 'Fornitura_Utensili_FlagAcquisto',

},
__Dati_Numero011: {
type: Number,
alias: 'CTM_T_Buy_Fase',

},
__Dati_Numero012: {
type: Number,
alias: 'CTM_T_Make_Fase',

},
__Dati_Numero013: {
type: Number,
alias: 'CUM_T_Buy',

},
__Dati_Numero014: {
type: Number,
alias: 'CUM_T_Make',

},
__Dati_Numero015: {
type: Number,
alias: 'CTUt_T_Buy_Fase',

},
__Dati_Numero016: {
type: Number,
alias: 'CTUt_T_Make_Fase',

},
__Dati_Numero017: {
type: Number,
alias: 'CUUt_T_Buy',

},
__Dati_Numero018: {
type: Number,
alias: 'CUUt_T_Make',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagTipoRiga_Fase',

},
__Dati_Numero020: {
type: Number,
alias: 'FlagTipoRiga_Materiale',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagTipoRiga_Utensile',

},
__Dati_Testo017: {
type: String,
alias: 'IdFase',

},
__Dati_Numero022: {
type: Number,
alias: 'CTADT_Fase',

},
__Dati_Numero023: {
type: Number,
alias: 'CTFT_Fase',

},
__Dati_Numero024: {
type: Number,
alias: 'CTIngT_Fase',

},
__Dati_Numero025: {
type: Number,
alias: 'CTLET_Fase',

},
__Dati_Numero026: {
type: Number,
alias: 'CTLT_Fase',

},
__Dati_Numero027: {
type: Number,
alias: 'CTM_T_Fase',

},
__Dati_Numero028: {
type: Number,
alias: 'CTPnT_Fase',

},
__Dati_Numero029: {
type: Number,
alias: 'CTProgT_Fase',

},
__Dati_Numero030: {
type: Number,
alias: 'CTPT_Fase',

},
__Dati_Numero031: {
type: Number,
alias: 'CTQT_Fase',

},
__Dati_Numero032: {
type: Number,
alias: 'CTST_Fase',

},
__Dati_Numero033: {
type: Number,
alias: 'CTT_Fase',

},
__Dati_Numero034: {
type: Number,
alias: 'CTT_Ricarico_Fase',

},
__Dati_Numero035: {
type: Number,
alias: 'CTT_UnitaBuone_Fase',

},
__Dati_Numero036: {
type: Number,
alias: 'CTTRAT_Fase',

},
__Dati_Numero037: {
type: Number,
alias: 'CTUtT_Fase',

},
__Dati_Numero038: {
type: Number,
alias: 'CUADT',

},
__Dati_Numero039: {
type: Number,
alias: 'CUFT',

},
__Dati_Numero040: {
type: Number,
alias: 'CUIngT',

},
__Dati_Numero041: {
type: Number,
alias: 'CULET',

},
__Dati_Numero042: {
type: Number,
alias: 'CULT',

},
__Dati_Numero043: {
type: Number,
alias: 'CUM_T',

},
__Dati_Numero044: {
type: Number,
alias: 'CUPnT',

},
__Dati_Numero045: {
type: Number,
alias: 'CUProgT',

},
__Dati_Numero046: {
type: Number,
alias: 'CUPT',

},
__Dati_Numero047: {
type: Number,
alias: 'CUQT',

},
__Dati_Numero048: {
type: Number,
alias: 'CUST',

},
__Dati_Numero049: {
type: Number,
alias: 'CUT',

},
__Dati_Numero050: {
type: Number,
alias: 'CUT_Ricarico',

},
__Dati_Numero051: {
type: Number,
alias: 'CUT_UnitaBuone',

},
__Dati_Numero052: {
type: Number,
alias: 'CUTRAT',

},
__Dati_Numero053: {
type: Number,
alias: 'CUUtT',

},
__Dati_Testo018: {
type: String,
alias: 'IdItem',

},
__Dati_Testo019: {
type: String,
alias: 'IdItemOpzioneProd',

},
__Dati_Testo020: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Testo021: {
type: String,
alias: 'IdTipoUtensilePerOpzioneProd',

},
__Dati_Numero054: {
type: Number,
alias: 'QtFase',

},
__Dati_Testo022: {
type: String,
alias: 'IdTipoFornitura',

},
__Dati_Numero055: {
type: Number,
alias: 'Fornitura_Trasporto_FlagAcquisto',

},
__Dati_Numero056: {
type: Number,
alias: 'Fornitura_Lavorazioni_FlagAcquisto',

},
__Dati_Testo023: {
type: String,
alias: 'Fornitura_IdFornituraItem',

},
__Dati_Testo024: {
type: String,
alias: 'Fornitura_TxtFornituraItem',

},
__Dati_Numero057: {
type: Number,
alias: 'VTotalePerFase',

},
__Dati_Numero058: {
type: Number,
alias: 'VUnitarioPerFase',

},
__Dati_Numero059: {
type: Number,
alias: 'Fornitura_VAcquistoUnitario',

},
__Dati_Numero060: {
type: Number,
alias: 'ConvUmLavorazioneUmOpz',

},
__Dati_Numero061: {
type: Number,
alias: 'ConvUmOpzUmFin',

},
__Dati_Numero062: {
type: Number,
alias: 'QtPerUmOpz',

},
__Dati_Numero063: {
type: Number,
alias: 'QtUtensilePerUmOpz',

},
__Dati_Numero064: {
type: Number,
alias: 'QuantitaTotalePerFase',

},
__Dati_Numero065: {
type: Number,
alias: 'Fornitura_FlagAggiornaDaFornitura',

},
__Dati_Testo025: {
type: String,
alias: 'IdScaglionePadre',

},
__Dati_Testo026: {
type: String,
alias: 'IdScaglione',

},
__Dati_Numero066: {
type: Number,
alias: 'GiorniApprovigionamento',

},
__Dati_Numero067: {
type: Number,
alias: 'Livello',

},
__Dati_Testo027: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Numero068: {
type: Number,
alias: 'FlagTipoRiga_LavorazioneEsterna',

},
__Dati_Numero069: {
type: Number,
alias: 'FlagTipoRiga_Trasporto',

},
__Dati_Testo028: {
type: String,
alias: 'CodiceTxtFase',

},
__Dati_Testo029: {
type: String,
alias: 'CodiceTxtItem',

},
__Dati_Testo030: {
type: String,
alias: 'TxtRigaCostBreakdown',

},
__Dati_Testo031: {
type: String,
alias: 'TxtRappresentazioneRiga',

},
__Dati_Numero070: {
type: Number,
alias: 'OrdineRappresentazione',

},
__Dati_Numero071: {
type: Number,
alias: 'NumeroFase',

},
__Dati_Numero072: {
type: Number,
alias: 'OrdineCreazione',

},
__Dati_Numero073: {
type: Number,
alias: 'FlagAggiornaOrdinamento',

},
__Dati_Numero074: {
type: Number,
alias: 'FlagTipoRiga_LavNonPianificabile',

},
__Dati_Testo032: {
type: String,
alias: 'TxtTipoRiga',

},
__Dati_Testo033: {
type: String,
alias: 'CodiceTxtArticoloCostBreakdown',

},
__Dati_Numero075: {
type: Number,
alias: 'QuantitaUnitariaPerScaglioneOrigine',

},
__Dati_Numero076: {
type: Number,
alias: 'QuantitaUnitariaPerScaglione',

},
__Dati_Numero077: {
type: Number,
alias: 'QuantitaTotalePerScaglione',

},
__Dati_Numero078: {
type: Number,
alias: 'QuantitaUnitariaPerMateriale',

},
__Dati_Numero079: {
type: Number,
alias: 'QuantitaScaglionePerCostBreakdown',

},
__Dati_Testo034: {
type: String,
alias: 'IdRigaOrigineImport',

},
__Dati_Numero080: {
type: Number,
alias: 'CTADT_Scaglione',

},
__Dati_Numero081: {
type: Number,
alias: 'CTFT_Scaglione',

},
__Dati_Numero082: {
type: Number,
alias: 'CTIngT_Scaglione',

},
__Dati_Numero083: {
type: Number,
alias: 'CTLET_Scaglione',

},
__Dati_Numero084: {
type: Number,
alias: 'CTLT_Scaglione',

},
__Dati_Numero085: {
type: Number,
alias: 'CTM_T_Buy_Scaglione',

},
__Dati_Numero086: {
type: Number,
alias: 'VTotalePerScaglione',

},
__Dati_Numero087: {
type: Number,
alias: 'CTM_T_Make_Scaglione',

},
__Dati_Numero088: {
type: Number,
alias: 'CTM_T_Scaglione',

},
__Dati_Numero089: {
type: Number,
alias: 'CTPnT_Scaglione',

},
__Dati_Numero090: {
type: Number,
alias: 'CTProgT_Scaglione',

},
__Dati_Numero091: {
type: Number,
alias: 'CTPT_Scaglione',

},
__Dati_Numero092: {
type: Number,
alias: 'CTQT_Scaglione',

},
__Dati_Numero093: {
type: Number,
alias: 'CTST_Scaglione',

},
__Dati_Numero094: {
type: Number,
alias: 'CTT_Scaglione',

},
__Dati_Numero095: {
type: Number,
alias: 'CTT_UnitaBuone_Scaglione',

},
__Dati_Numero096: {
type: Number,
alias: 'CTTRAT_Scaglione',

},
__Dati_Numero097: {
type: Number,
alias: 'CTUt_T_Buy_Scaglione',

},
__Dati_Numero098: {
type: Number,
alias: 'CTUt_T_Make_Scaglione',

},
__Dati_Numero099: {
type: Number,
alias: 'CTUtT_Scaglione',

},
__Dati_Numero100: {
type: Number,
alias: 'CTT_Ricarico_Scaglione',

},
__Dati_Numero101: {
type: Number,
alias: 'FlagAggiornaQuantitaValori',

},
__Dati_Numero102: {
type: Number,
alias: 'VUnitarioPerScaglione',

},
__Dati_Numero103: {
type: Number,
alias: 'QuantitaScaglioneOrigine',

},
__Dati_Numero104: {
type: Number,
alias: 'CTUt_T_Buy_PerFase_LivelliInferiori',

},
__Dati_Testo035: {
type: String,
alias: 'IdUtente',

},
__Dati_Testo036: {
type: String,
alias: 'TxtUtente',

},
__Dati_Testo037: {
type: String,
alias: 'IdRicorrenzaRecord',

},
__Dati_Numero105: {
type: Number,
alias: 'FlagTipoRiga_Sottoprodotto',

},
__Dati_Testo038: {
type: String,
alias: 'Listino_IdListinoItem',

},
__Dati_Numero106: {
type: Number,
alias: 'Listino_FlagAggiornaDaListino',

},
__Dati_Numero107: {
type: Number,
alias: 'Fornitura_FlagProduzione',

},
__Dati_Numero108: {
type: Number,
alias: 'Fornitura_Utensili_FlagProduzione',

},
__Dati_Numero109: {
type: Number,
alias: 'Listino_Materiali_FlagVendita',

},
__Dati_Numero110: {
type: Number,
alias: 'Listino_VVenditaUnitario',

},
__Dati_Numero111: {
type: Number,
alias: 'Fornitura_IdScaglioneFornitura',

},
__Dati_Testo039: {
type: String,
alias: 'Fornitura_TxtFornituraItemDataAutomatico',

},
__Dati_Testo040: {
type: String,
alias: 'Listino_TxtListinoItem',

},
__Dati_Numero112: {
type: Number,
alias: 'ElementiNonProduzione_Costificazione_FlagCosto',

},
__Dati_Numero113: {
type: Number,
alias: 'ElementiNonProduzione_Costificazione_FlagRicavo',

},
__Dati_Numero114: {
type: Number,
alias: 'CTMSp_T_Buy_Fase',

},
__Dati_Numero115: {
type: Number,
alias: 'CTMSp_T_Buy_PerFase_LivelliInferiori',

},
__Dati_Numero116: {
type: Number,
alias: 'CTMSp_T_Buy_Scaglione',

},
__Dati_Numero117: {
type: Number,
alias: 'CTMSp_T_Make_Fase',

},
__Dati_Numero118: {
type: Number,
alias: 'CTMSp_T_Make_Scaglione',

},
__Dati_Numero119: {
type: Number,
alias: 'CTMSp_T_Fase',

},
__Dati_Numero120: {
type: Number,
alias: 'CTMSp_T_Scaglione',

},
__Dati_Numero121: {
type: Number,
alias: 'CUMSp_T_Buy',

},
__Dati_Numero122: {
type: Number,
alias: 'CUMSp_T_Buy_PerFase_LivelliInferiori',

},
__Dati_Numero123: {
type: Number,
alias: 'CUMSp_T_Make',

},
__Dati_Numero124: {
type: Number,
alias: 'CUMSp_T',

},
__Dati_Numero125: {
type: Number,
alias: 'ElementiNonProduzione_Approvvigionamento_FlagBuy',

},
__Dati_Numero126: {
type: Number,
alias: 'ElementiNonProduzione_Approvvigionamento_FlagMake',

},
__Dati_Testo041: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CostBreakdownScaglioneSchema;