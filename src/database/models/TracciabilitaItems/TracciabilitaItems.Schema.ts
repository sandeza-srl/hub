import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITracciabilitaItemsPrivate } from './TracciabilitaItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const TracciabilitaItemsSchema = new mongoose.Schema<ITracciabilitaItemsPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo002: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo003: {
type: String,
alias: 'IdItem',

},
__Dati_Testo004: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Numero001: {
type: Number,
alias: 'QuantitaResidua',

},
__Dati_Numero002: {
type: Number,
alias: 'Uno',

},
__Dati_Numero003: {
type: Number,
alias: 'Zero',

},
__Dati_Testo005: {
type: String,
alias: 'Tracciabilita_Taglia',

},
__Dati_Testo006: {
type: String,
alias: 'Tracciabilita_Colore',

},
__Dati_Testo007: {
type: String,
alias: 'Tracciabilita_InfoExtra',

},
__Dati_Testo008: {
type: String,
alias: 'IdScarto',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagSerialeUtilizzato',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagTracciabilitaAutomatica',

},
__Dati_Testo009: {
type: String,
alias: 'Tracciabilita_CodiceLotto',

},
__Dati_Data001: {
type: Date,
alias: 'Tracciabilita_DataScadenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo010: {
type: String,
alias: 'Tracciabilita_NumeroSerie',

},
__Dati_Data002: {
type: Date,
alias: 'DataMinEntrata',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data003: {
type: Date,
alias: 'DataMaxUscita',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero006: {
type: Number,
alias: 'QuantitaEntrata',

},
__Dati_Numero007: {
type: Number,
alias: 'AnnoMeseEntrata',

},
__Dati_Numero008: {
type: Number,
alias: 'AnnoSettimanaEntrata',

},
__Dati_Numero009: {
type: Number,
alias: 'AnnoMeseScadenza',

},
__Dati_Numero010: {
type: Number,
alias: 'AnnoSettimanaScadenza',

},
__Dati_Numero011: {
type: Number,
alias: 'AnnoMeseUscita',

},
__Dati_Numero012: {
type: Number,
alias: 'AnnoSettimanaUscita',

},
__Dati_Numero013: {
type: Number,
alias: 'GiorniPermanenza',

},
__Dati_Data004: {
type: Date,
alias: 'DataCorrente',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero014: {
type: Number,
alias: 'FlagScaduto',

},
__Dati_Testo011: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo012: {
type: String,
alias: 'IdTracciabilitaItem',

},
__Dati_Numero015: {
type: Number,
alias: 'QuantitaUscita',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagAggiornaDaMovimenti',

},
__Dati_Testo013: {
type: String,
alias: 'Entrata_IdRegistrazioneFaseProduzione',

},
__Dati_Testo014: {
type: String,
alias: 'Entrata_IdFaseProduzione',

},
__Dati_Testo015: {
type: String,
alias: 'Entrata_IdLottoProduzione',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagEsaurito',

},
__Dati_Testo016: {
type: String,
alias: 'Tracciabilita_TxtAutomatico',

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
__Dati_Testo017: {
type: String,
alias: 'Tracciabilita_CodiceAutomatico',

},
__Dati_Testo018: {
type: String,
alias: 'StringaControllo',

},
__Dati_Numero018: {
type: Number,
alias: 'Progressivo',

},
__Dati_Testo019: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo020: {
type: String,
alias: 'IdDocumentoTracciabilita',

},
__Dati_Testo021: {
type: String,
alias: 'Tracciabilita_CodiceTxtAutomatico',

},
__Dati_Numero019: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Testo022: {
type: String,
alias: 'IdDocumentoRiferimento',

},
__Dati_Testo023: {
type: String,
alias: 'CodiceItem',

},
__Dati_Testo024: {
type: String,
alias: 'TxtItem',

},
__Dati_Testo025: {
type: String,
alias: 'TxtFamigliaItem',

},
__Dati_Testo026: {
type: String,
alias: 'TxtSottoFamigliaItem',

},
__Dati_Testo027: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo028: {
type: String,
alias: 'Uscita_IdLottoProduzione',

},
__Dati_Testo029: {
type: String,
alias: 'Uscita_IdFaseProduzione',

},
__Dati_Testo030: {
type: String,
alias: 'Uscita_IdRigaOrdine',

},
__Dati_Testo031: {
type: String,
alias: 'Entrata_IdRigaOrdine',

},
__Dati_Testo032: {
type: String,
alias: 'Uscita_IdRegistrazioneFaseProduzione',

},
__Dati_Testo033: {
type: String,
alias: 'IdRegistrazioneFaseProduzioneOrigine',

},
__Dati_Testo034: {
type: String,
alias: 'Tracciabilita_CodiceRegistrazioneFaseProduzioneOrigine',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TracciabilitaItemsSchema;