import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiUtensiliPerOpzioneProdPrivate } from './TipiUtensiliPerOpzioneProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiUtensiliPerOpzioneProdSchema = new mongoose.Schema<ITipiUtensiliPerOpzioneProdPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo001: {
type: String,
alias: 'TxtTipoUtensile',

},
__Dati_Testo002: {
type: String,
alias: 'TxtTipoUtensileEsteso',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoUtensile',

},
__Dati_Testo004: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Testo005: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo006: {
type: String,
alias: 'IdCiclo',

},
__Dati_Testo007: {
type: String,
alias: 'TxtArticolo',

},
__Dati_Testo008: {
type: String,
alias: 'TxtCiclo',

},
__Dati_Testo009: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Numero002: {
type: Number,
alias: 'QuantitaPerUmOpz',

},
__Dati_Testo010: {
type: String,
alias: 'CodiceTipoUtensile',

},
__Dati_Testo011: {
type: String,
alias: 'IdAccountCompagnia',

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
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Numero004: {
type: Number,
alias: 'CostoPerUmOpzione',

},
__Dati_Numero005: {
type: Number,
alias: 'CostoUnitarioTipoUtensile',

},
__Dati_Testo012: {
type: String,
alias: 'IdTipoUtensilePerOpzioneProd',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagUtensileUtilizzato',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceTxtTipoUtensileAutomatico',

},
__Dati_Testo014: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo015: {
type: String,
alias: 'IdMontaggioUtensiliAttrezzature',

},
__Dati_Testo016: {
type: String,
alias: 'IdItem',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagAggiornaContenutiDaTipiUtensili',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaContenutiDaOpzioneProd',

},
__Dati_Testo017: {
type: String,
alias: 'IdTipoFase',

},
__Dati_Testo018: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiUtensiliPerOpzioneProdSchema;