import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IElementiCostoRisorsaPrivate } from './ElementiCostoRisorsa.Types.Private';


/* --------
* Schema Definition
* -------- */
const ElementiCostoRisorsaSchema = new mongoose.Schema<IElementiCostoRisorsaPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'CodiceVoceImpostazioneCosti',

},
__Dati_Testo002: {
type: String,
alias: 'CodiceTxtVoceImpostazioneCosti',

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
__Dati_Numero001: {
type: Number,
alias: 'FlagValoreDiretto',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagValoreFisso',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagValorePercentuale',

},
__Dati_Testo003: {
type: String,
alias: 'IdImpostazioneCosti',

},
__Dati_Testo004: {
type: String,
alias: 'TxtVoceImpostazioneCosti',

},
__Dati_Testo005: {
type: String,
alias: 'IdVoceImpostazioneCosti',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoElementoCostoGenerale',

},
__Dati_Testo007: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagAttrezzaggio',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagFermo',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagProduzione',

},
__Dati_Testo008: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero007: {
type: Number,
alias: 'Valore',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagInCompilazione',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAttivo',

},
__Dati_Numero010: {
type: Number,
alias: 'Percentuale',

},
__Dati_Testo010: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Testo011: {
type: String,
alias: 'TxtPeriodoContabile',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero011: {
type: Number,
alias: 'Uno',

},
__Dati_Numero012: {
type: Number,
alias: 'Zero',

},
__Dati_Testo013: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ElementiCostoRisorsaSchema;