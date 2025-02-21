import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITraduzioniTipiProtocolliPrivate } from './TraduzioniTipiProtocolli.Types.Private';


/* --------
* Schema Definition
* -------- */
const TraduzioniTipiProtocolliSchema = new mongoose.Schema<ITraduzioniTipiProtocolliPrivate>({

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
alias: 'IdTipoProtocollo',

},
__Dati_Testo002: {
type: String,
alias: 'Lingua',

},
__Dati_Testo003: {
type: String,
alias: 'TestoCompleto',

},
__Dati_Testo004: {
type: String,
alias: 'IdTraduzioneTipoProtocollo',

},
__Dati_Testo005: {
type: String,
alias: 'TitoloTipoProtocollo',

},
__Dati_Testo006: {
type: String,
alias: 'Sottotitolo',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
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
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TraduzioniTipiProtocolliSchema;