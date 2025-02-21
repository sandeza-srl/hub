import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IGerarchiaOrderPrivate } from './GerarchiaOrder.Types.Private';


/* --------
* Schema Definition
* -------- */
const GerarchiaOrderSchema = new mongoose.Schema<IGerarchiaOrderPrivate>({

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
__Dati_Data002: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo001: {
type: String,
alias: 'IdControlloFaseProduzione',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo002: {
type: String,
alias: 'IdGerarchiaOrder',

},
__Dati_Testo003: {
type: String,
alias: 'IdLottoProduzione',

},
__Dati_Testo004: {
type: String,
alias: 'IdFaseProduzione',

},
__Dati_Testo005: {
type: String,
alias: 'IdVoceDocOperativo_ScaricoMateriale',

},
__Dati_Testo006: {
type: String,
alias: 'IdRegistrazioneFaseProduzione',

},
__Dati_Testo007: {
type: String,
alias: 'IdControlloRegistrazione',

},
__Dati_Numero003: {
type: Number,
alias: 'Record_Tipo03_ControlloFaseProduzione',

},
__Dati_Numero004: {
type: Number,
alias: 'Record_Tipo02_FaseProduzione',

},
__Dati_Numero005: {
type: Number,
alias: 'Record_Tipo04_ControlloRegistrazione',

},
__Dati_Numero006: {
type: Number,
alias: 'Record_Tipo05_VoceFabbisognoMateriali',

},
__Dati_Numero007: {
type: Number,
alias: 'Record_Ordine',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaRecordGerarchia',

},
__Dati_Testo008: {
type: String,
alias: 'IdVoceDocOperativo_FabbisognoMateriali',

},
__Dati_Testo009: {
type: String,
alias: 'IdRigaOrdine',

},
__Dati_Numero009: {
type: Number,
alias: 'Record_Tipo01_LottoProduzione',

},
__Dati_Testo010: {
type: String,
alias: 'IdVoceDocOperativo_CaricoFiniti',

},
__Dati_Numero010: {
type: Number,
alias: 'Record_Tipo09_VoceScaricoMateriali',

},
__Dati_Numero011: {
type: Number,
alias: 'Record_Tipo11_VoceCaricoFiniti',

},
__Dati_Numero012: {
type: Number,
alias: 'Record_Tipo13_RegistrazioneFaseProduzione',

},
__Dati_Testo011: {
type: String,
alias: 'IdVoceDocOperativo_FabbisognoLavorazioniEsterne',

},
__Dati_Numero013: {
type: Number,
alias: 'Record_Tipo07_VoceFabbisognoLavorazioniEsterne',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo013: {
type: String,
alias: 'IdTipoUtensilePerFaseProduzione',

},
__Dati_Numero014: {
type: Number,
alias: 'Record_Tipo14_TipoUtensilePerFaseProduzione',

},
__Dati_Testo014: {
type: String,
alias: 'DocOperativi_IdVoceDocOperativo',

},
__Dati_Testo015: {
type: String,
alias: 'DocOperativi_IdDocOperativo',

},
__Dati_Testo016: {
type: String,
alias: 'DocOperativi_IdItemVoceDocOperativo',

},
__Dati_Numero015: {
type: Number,
alias: 'Record_Tipo00_RigaOrdine',

},
__Dati_Numero016: {
type: Number,
alias: 'Record_Tipo15_NumeroDiSerieLottiProduzione',

},
__Dati_Testo017: {
type: String,
alias: 'IdNumeroSerieLottoProduzione',

},
__Dati_Numero017: {
type: Number,
alias: 'Record_Tipo06_DocOperativoFabbisognoMateriali',

},
__Dati_Numero018: {
type: Number,
alias: 'Record_Tipo08_DocOperativoFabbisognoLavorazioniEsterne',

},
__Dati_Numero019: {
type: Number,
alias: 'Record_Tipo10_DocOperativoScaricoMateriali',

},
__Dati_Numero020: {
type: Number,
alias: 'Record_Tipo12_DocOperativoCaricoFiniti',

},
__Dati_Testo018: {
type: String,
alias: 'IdDocOperativo_CaricoFiniti',

},
__Dati_Testo019: {
type: String,
alias: 'IdDocOperativo_FabbisognoLavorazioniEsterne',

},
__Dati_Testo020: {
type: String,
alias: 'IdDocOperativo_FabbisognoMateriali',

},
__Dati_Testo021: {
type: String,
alias: 'IdDocOperativo_ScaricoMateriale',

},
__Dati_Numero021: {
type: Number,
alias: 'Record_Tipo16_DocOperativiAltri',

},
__Dati_Testo022: {
type: String,
alias: 'IdDocOperativo_Altri',

},
__Dati_Numero022: {
type: Number,
alias: 'Record_Tipo17_ComunicazioniProduzione',

},
__Dati_Testo023: {
type: String,
alias: 'IdComunicazioneProduzione',

},
__Dati_Testo024: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero023: {
type: Number,
alias: 'Record_Tipo18_MontaggioUtensiliFaseProduzione',

},
__Dati_Testo025: {
type: String,
alias: 'IdMontaggioUtensiliFaseProduzione',

},
__Dati_Testo026: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default GerarchiaOrderSchema;