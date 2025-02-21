import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IPreparazioneFasiPrivate } from './PreparazioneFasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const PreparazioneFasiSchema = new mongoose.Schema<IPreparazioneFasiPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdPreparazioneFasi',

},
__Dati_Testo003: {
type: String,
alias: 'IdFaseProduzione',

},
__Dati_Testo004: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Testo005: {
type: String,
alias: 'Richiesta_IdOperatoreProduzione',

},
__Dati_Testo006: {
type: String,
alias: 'IdTipoUtensileFaseProduzione',

},
__Dati_Testo007: {
type: String,
alias: 'IdItemOpzioneProd',

},
__Dati_Testo008: {
type: String,
alias: 'IdVoceDocOperativo',

},
__Dati_Testo009: {
type: String,
alias: 'IdRegistrazioneRisorsa',

},
__Dati_Testo010: {
type: String,
alias: 'IdRegistrazioneFaseProduzione',

},
__Dati_Numero001: {
type: Number,
alias: 'Richiesta_FlagTipoRichiesta',

},
__Dati_Numero002: {
type: Number,
alias: 'Preparazione_FlagTipoPreparazione',

},
__Dati_Numero003: {
type: Number,
alias: 'Richiesta_Quantita',

},
__Dati_Numero004: {
type: Number,
alias: 'Richiesta_FlagChiusa',

},
__Dati_Numero005: {
type: Number,
alias: 'Preparazione_FlagChiusa',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Numero006: {
type: Number,
alias: 'Uno',

},
__Dati_Numero007: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'IdTipoUtensile',

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
__Dati_Numero008: {
type: Number,
alias: 'Preparazione_QuantitaPreparata',

},
__Dati_Testo013: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo014: {
type: String,
alias: 'TxtTipoRecord',

},
__Dati_Testo015: {
type: String,
alias: 'TxtStatoRecord',

},
__Dati_Testo016: {
type: String,
alias: 'TxtTipoStatoRecordAutomatico',

},
__Dati_Testo017: {
type: String,
alias: 'Preparazione_IdOperatoreProduzione',

},
__Dati_DataOra003: {
type: Date,
alias: 'Preparazione_DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra004: {
type: Date,
alias: 'Richiesta_DataOra',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo018: {
type: String,
alias: 'CodiceTxtTipoUtensileAutomatico',

},
__Dati_Testo019: {
type: String,
alias: 'CodiceTxtFaseAutomatico',

},
__Dati_Testo020: {
type: String,
alias: 'CodiceTxtDisegnoArticoloAutomatico',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default PreparazioneFasiSchema;