import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiInformazioniOffertePrivate } from './TipiInformazioniOfferte.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiInformazioniOfferteSchema = new mongoose.Schema<ITipiInformazioniOffertePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'EtichettaInformazione',

},
__Dati_Testo002: {
type: String,
alias: 'IdTipoInformazioneOfferta',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo003: {
type: String,
alias: 'IdTipoOfferta',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo005: {
type: String,
alias: 'CodiceTipoOfferta',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoEtichetta',

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
__Dati_Testo007: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero003: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo008: {
type: String,
alias: 'TxtOrdineEtichettaAutomatico',

},
__Dati_Testo009: {
type: String,
alias: 'TxtTipoOfferta',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagVincoli_InformazioneObbligatoria',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagVincoli_InformazioneNonModificabile',

},
__Dati_Testo010: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiInformazioniOfferteSchema;