import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ICalendarioStoricoRisorsePrivate } from './CalendarioStoricoRisorse.Types.Private';


/* --------
* Schema Definition
* -------- */
const CalendarioStoricoRisorseSchema = new mongoose.Schema<ICalendarioStoricoRisorsePrivate>({

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
alias: 'IdRisorsa',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo003: {
type: String,
alias: 'FlagSelezione',

},
__Dati_Numero003: {
type: Number,
alias: 'CostoOrarioTotaleAttrezzaggio',

},
__Dati_Numero004: {
type: Number,
alias: 'CostoOrarioTotaleFermoMacchina',

},
__Dati_Numero005: {
type: Number,
alias: 'CostoOrarioTotaleProduzione',

},
__Dati_Ora001: {
type: String,
alias: 'TTotalePeriodo',

},
__Dati_Testo004: {
type: String,
alias: 'AnnoMese',

},
__Dati_Testo005: {
type: String,
alias: 'AnnoSettimana',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraFine',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraInizio',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Ora002: {
type: String,
alias: 'TT',

},
__Dati_Numero006: {
type: Number,
alias: 'CTP',

},
__Dati_Numero007: {
type: Number,
alias: 'CTS',

},
__Dati_Numero008: {
type: Number,
alias: 'CTT',

},
__Dati_Testo006: {
type: String,
alias: 'IdReparto',

},
__Dati_Testo007: {
type: String,
alias: 'IdTipoTurno',

},
__Dati_Ora003: {
type: String,
alias: 'TD',

},
__Dati_Ora004: {
type: String,
alias: 'TA',

},
__Dati_Ora005: {
type: String,
alias: 'TF',

},
__Dati_Ora006: {
type: String,
alias: 'TP',

},
__Dati_Ora007: {
type: String,
alias: 'TPausa',

},
__Dati_Ora008: {
type: String,
alias: 'TInattiva',

},
__Dati_Numero009: {
type: Number,
alias: 'CTA',

},
__Dati_Numero010: {
type: Number,
alias: 'CTD',

},
__Dati_Numero011: {
type: Number,
alias: 'CTF',

},
__Dati_Numero012: {
type: Number,
alias: 'CTInattiva',

},
__Dati_Numero013: {
type: Number,
alias: 'Anno',

},
__Dati_Ora009: {
type: String,
alias: 'TEffettivoLavoroMacchina',

},
__Dati_Ora010: {
type: String,
alias: 'OraInizio',

},
__Dati_Ora011: {
type: String,
alias: 'OraFine',

},
__Dati_Data001: {
type: Date,
alias: 'DataCalendario',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo008: {
type: String,
alias: 'TxtTipoTurno',

},
__Dati_Numero014: {
type: Number,
alias: 'QP_R',

},
__Dati_Numero015: {
type: Number,
alias: 'QS_R',

},
__Dati_Numero016: {
type: Number,
alias: 'QT_R',

},
__Dati_Testo009: {
type: String,
alias: 'IdCalendarioStoricoRisorse',

},
__Dati_Ora012: {
type: String,
alias: 'TP_QS',

},
__Dati_Ora013: {
type: String,
alias: 'TF_QS',

},
__Dati_Numero017: {
type: Number,
alias: 'PercTA',

},
__Dati_Numero018: {
type: Number,
alias: 'PercTD',

},
__Dati_Numero019: {
type: Number,
alias: 'PercTEffettivoLavoroMacchina',

},
__Dati_Numero020: {
type: Number,
alias: 'PercTF',

},
__Dati_Numero021: {
type: Number,
alias: 'PercTF_QS',

},
__Dati_Numero022: {
type: Number,
alias: 'PercTInattiva',

},
__Dati_Numero023: {
type: Number,
alias: 'PercTP',

},
__Dati_Numero024: {
type: Number,
alias: 'PercTP_QS',

},
__Dati_Numero025: {
type: Number,
alias: 'PercTPausa',

},
__Dati_Numero026: {
type: Number,
alias: 'PercTT',

},
__Dati_Numero027: {
type: Number,
alias: 'CTP_QS',

},
__Dati_Numero028: {
type: Number,
alias: 'CTF_QS',

},
__Dati_Numero029: {
type: Number,
alias: 'CTTotalePeriodo',

},
__Dati_Numero030: {
type: Number,
alias: 'CTPausa',

},
__Dati_Testo010: {
type: String,
alias: 'TxtRisorsa',

},
__Dati_Testo011: {
type: String,
alias: 'CodiceTxtRisorsa',

},
__Dati_Testo012: {
type: String,
alias: 'CodiceRisorsa',

},
__Dati_Numero031: {
type: Number,
alias: 'ValoreFrazionamentoTempo',

},
__Dati_Ora014: {
type: String,
alias: 'TTotalePeriodoEffettivo',

},
__Dati_Testo013: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero032: {
type: Number,
alias: 'PercQP_R',

},
__Dati_Numero033: {
type: Number,
alias: 'PercQS_R',

},
__Dati_Numero034: {
type: Number,
alias: 'rPercQP_R',

},
__Dati_Numero035: {
type: Number,
alias: 'rPercQS_R',

},
__Dati_Testo014: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default CalendarioStoricoRisorseSchema;