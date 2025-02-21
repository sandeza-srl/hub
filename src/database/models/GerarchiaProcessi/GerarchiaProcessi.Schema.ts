import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IGerarchiaProcessiPrivate } from './GerarchiaProcessi.Types.Private';


/* --------
* Schema Definition
* -------- */
const GerarchiaProcessiSchema = new mongoose.Schema<IGerarchiaProcessiPrivate>({

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
alias: 'IdRegistrazioneFaseProduzione',

},
__Dati_Testo006: {
type: String,
alias: 'IdControlloRegistrazione',

},
__Dati_Numero003: {
type: Number,
alias: 'Record_Tipo03_DocOperativo',

},
__Dati_Numero004: {
type: Number,
alias: 'Record_Tipo02_AttivitaControllo',

},
__Dati_Numero005: {
type: Number,
alias: 'Record_Tipo04_VoceOfferta',

},
__Dati_Numero006: {
type: Number,
alias: 'Record_Tipo05_ChecklistSchedaAttivitaControllo',

},
__Dati_Numero007: {
type: Number,
alias: 'Record_Ordine',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaRecordGerarchia',

},
__Dati_Testo007: {
type: String,
alias: 'IdRigaOrdine',

},
__Dati_Numero009: {
type: Number,
alias: 'Record_Tipo01_Offerta',

},
__Dati_Testo008: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Testo009: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero010: {
type: Number,
alias: 'Record_Tipo00_StepProcesso',

},
__Dati_Numero011: {
type: Number,
alias: 'Record_Tipo06_VoceDocOperativo',

},
__Dati_Testo010: {
type: String,
alias: 'IdDocOperativo',

},
__Dati_Testo011: {
type: String,
alias: 'IdComunicazioneProduzione',

},
__Dati_Testo012: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo013: {
type: String,
alias: 'IdProcesso',

},
__Dati_Testo014: {
type: String,
alias: 'IdStepProcesso',

},
__Dati_Testo015: {
type: String,
alias: 'IdOfferta',

},
__Dati_Testo016: {
type: String,
alias: 'IdVoceOfferta',

},
__Dati_Testo017: {
type: String,
alias: 'IdAttivitaControllo',

},
__Dati_Testo018: {
type: String,
alias: 'IdCheckSchedaAttivitaControllo',

},
__Dati_Numero012: {
type: Number,
alias: 'Record_Tipo07_ProcessoCollegato',

},
__Dati_Numero013: {
type: Number,
alias: 'Record_Tipo08_StepProcessoDaProcesso',

},
__Dati_Testo019: {
type: String,
alias: 'IdItem',

},
__Dati_Testo020: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo021: {
type: String,
alias: 'IdScarto',

},
__Dati_Numero014: {
type: Number,
alias: 'Record_Tipo09_Item',

},
__Dati_Numero015: {
type: Number,
alias: 'Record_Tipo11_TipoAttivitaControllo',

},
__Dati_Numero016: {
type: Number,
alias: 'Record_Tipo10_Articolo',

},
__Dati_Testo022: {
type: String,
alias: 'IdTipoAttivitaControllo',

},
__Dati_Testo023: {
type: String,
alias: 'IdSchedaAttivitaControllo',

},
__Dati_Numero017: {
type: Number,
alias: 'Record_Tipo12_SchedaAttivitaControllo',

},
__Dati_Testo024: {
type: String,
alias: 'IdRegistrazioneOreStepProcesso',

},
__Dati_Numero018: {
type: Number,
alias: 'Record_Tipo13_RegistrazioneOreStepProcesso',

},
__Dati_Testo025: {
type: String,
alias: 'IdDocumento',

},
__Dati_Numero019: {
type: Number,
alias: 'Record_Tipo14_DocumentoStepProcesso',

},
__Dati_Testo026: {
type: String,
alias: 'IdCollegamentoStepProcesso',

},
__Dati_Testo027: {
type: String,
alias: 'IdProcessoCollegato',

},
__Dati_Testo028: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default GerarchiaProcessiSchema;