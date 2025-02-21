import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICapitoliPrivate } from './Capitoli.Types.Private';


/* --------
* Schema Definition
* -------- */
const CapitoliSchema = new mongoose.Schema<ICapitoliPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdOfferta',

},
__Dati_Testo002: {
type: String,
alias: 'IdCapitolo',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'TitoloCapitolo',

},
__Dati_Testo004: {
type: String,
alias: 'SottoTitoloCapitolo',

},
__Dati_Testo005: {
type: String,
alias: 'Lingua',

},
__Dati_Numero002: {
type: Number,
alias: 'Ordine',

},
__Dati_Numero003: {
type: Number,
alias: 'VTotale',

},
__Dati_Numero004: {
type: Number,
alias: 'VImponibile',

},
__Dati_Numero005: {
type: Number,
alias: 'VCosti',

},
__Dati_Numero006: {
type: Number,
alias: 'VPreVariazioni',

},
__Dati_Numero007: {
type: Number,
alias: 'VSconti',

},
__Dati_Numero008: {
type: Number,
alias: 'VMargine',

},
__Dati_Numero009: {
type: Number,
alias: 'VMarginePercentuale',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagInTotale',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoListino',

},
__Dati_Testo007: {
type: String,
alias: 'TxtTipoListino',

},
__Dati_Numero011: {
type: Number,
alias: 'VIva',

},
__Dati_Numero012: {
type: Number,
alias: 'VImponibileDefinitivo',

},
__Dati_Numero013: {
type: Number,
alias: 'VPreVariazioniDefinitivo',

},
__Dati_Numero014: {
type: Number,
alias: 'VIvaDefinitivo',

},
__Dati_Numero015: {
type: Number,
alias: 'VScontiDefinitivo',

},
__Dati_Numero016: {
type: Number,
alias: 'VTotaleDefinitivo',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceOfferta',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountClienteFinale',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero017: {
type: Number,
alias: 'VProvvigioni',

},
__Dati_Numero018: {
type: Number,
alias: 'FlagEscludiProvvigioni',

},
__Dati_Numero019: {
type: Number,
alias: 'VProvvigioniDefinitivo',

},
__Dati_Numero020: {
type: Number,
alias: 'VCostiDefinitivo',

},
__Dati_Numero021: {
type: Number,
alias: 'VCostiTotale',

},
__Dati_Testo011: {
type: String,
alias: 'IdRevisione',

},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

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
__Dati_Numero022: {
type: Number,
alias: 'Zero',

},
__Dati_Numero023: {
type: Number,
alias: 'FlagAggiornaDaVoci',

},
__Dati_Numero024: {
type: Number,
alias: 'VImponibileAccettato',

},
__Dati_Numero025: {
type: Number,
alias: 'VIvaAccettata',

},
__Dati_Numero026: {
type: Number,
alias: 'VTotaleAccettato',

},
__Dati_Numero027: {
type: Number,
alias: 'VMargineAccettato',

},
__Dati_Numero028: {
type: Number,
alias: 'VMarginePercentualeAccettato',

},
__Dati_Numero029: {
type: Number,
alias: 'VScontiAccettato',

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
export default CapitoliSchema;