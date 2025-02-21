import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITraduzioniEtichettePrivate } from './TraduzioniEtichette.Types.Private';


/* --------
* Schema Definition
* -------- */
const TraduzioniEtichetteSchema = new mongoose.Schema<ITraduzioniEtichettePrivate>({

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
alias: 'Lingua',

},
__Dati_Testo002: {
type: String,
alias: 'PrezzoUnitario',

},
__Dati_Testo003: {
type: String,
alias: 'Sconto',

},
__Dati_Testo004: {
type: String,
alias: 'Quantita',

},
__Dati_Testo005: {
type: String,
alias: 'Prezzo',

},
__Dati_Testo006: {
type: String,
alias: 'PrezzoFinale',

},
__Dati_Testo007: {
type: String,
alias: 'Iva',

},
__Dati_Testo008: {
type: String,
alias: 'Offerta',

},
__Dati_Testo009: {
type: String,
alias: 'TerminiDiPagamento',

},
__Dati_Testo010: {
type: String,
alias: 'NoteIniziali',

},
__Dati_Testo011: {
type: String,
alias: 'NoteFinali',

},
__Dati_Testo012: {
type: String,
alias: 'Firma',

},
__Dati_Testo013: {
type: String,
alias: 'Totale',

},
__Dati_Testo014: {
type: String,
alias: 'Capitoli',

},
__Dati_Testo015: {
type: String,
alias: 'ValiditaOfferta',

},
__Dati_Testo016: {
type: String,
alias: 'Imponibile',

},
__Dati_Testo017: {
type: String,
alias: 'NonImponibile',

},
__Dati_Testo018: {
type: String,
alias: 'APagare',

},
__Dati_Testo019: {
type: String,
alias: 'PerAccettazione',

},
__Dati_Testo020: {
type: String,
alias: 'PrezzoListino',

},
__Dati_Testo021: {
type: String,
alias: 'IlCliente',

},
__Dati_Testo022: {
type: String,
alias: 'PrezzoUnitarioScontato',

},
__Dati_Testo023: {
type: String,
alias: 'ScontoQuantita',

},
__Dati_Testo024: {
type: String,
alias: 'ScontoPrezzo',

},
__Dati_Testo025: {
type: String,
alias: 'Incluso',

},
__Dati_Testo026: {
type: String,
alias: 'Opzionale',

},
__Dati_Testo027: {
type: String,
alias: 'Descrizione',

},
__Dati_Testo028: {
type: String,
alias: 'Scadenza',

},
__Dati_Testo029: {
type: String,
alias: 'Valuta',

},
__Dati_Testo030: {
type: String,
alias: 'Codice',

},
__Dati_Testo031: {
type: String,
alias: 'Data',

},
__Dati_Testo032: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo033: {
type: String,
alias: 'Pagina',

},
__Dati_Testo034: {
type: String,
alias: 'Spettabile',

},
__Dati_Testo035: {
type: String,
alias: 'Qt√†',

},
__Dati_Testo036: {
type: String,
alias: 'Um',

},
__Dati_Testo037: {
type: String,
alias: 'Note',

},
__Dati_Testo038: {
type: String,
alias: 'IvaEsclusa',

},
__Dati_Testo039: {
type: String,
alias: 'Validita',

},
__Dati_Testo040: {
type: String,
alias: 'Lofferta',

},
__Dati_Testo041: {
type: String,
alias: 'Comprende',

},
__Dati_Testo042: {
type: String,
alias: 'Omaggi',

},
__Dati_Testo043: {
type: String,
alias: 'TotaleProdotti',

},
__Dati_Testo044: {
type: String,
alias: 'Imballo',

},
__Dati_Testo045: {
type: String,
alias: 'Trasporto',

},
__Dati_Testo046: {
type: String,
alias: 'Porto',

},
__Dati_Testo047: {
type: String,
alias: 'Banca',

},
__Dati_Testo048: {
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
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo049: {
type: String,
alias: 'IdTraduzioneEtichette',

},
__Dati_Testo050: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TraduzioniEtichetteSchema;