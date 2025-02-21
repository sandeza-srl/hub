import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IFattureDaSDIPrivate } from './FattureDaSDI.Types.Private';


/* --------
* Schema Definition
* -------- */
const FattureDaSDISchema = new mongoose.Schema<IFattureDaSDIPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdFatturaDaSDI',

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
alias: 'DataOraModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo002: {
type: String,
alias: 'IdTipoDocContabile',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountPagatore',

},
__Dati_Testo004: {
type: String,
alias: 'IdAccountEmittente',

},
__Dati_Testo005: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero001: {
type: Number,
alias: 'FlagAggiornaDatiDaAnagrafica',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagAggiornaDatiFatEl',

},
__Dati_Testo006: {
type: String,
alias: 'TxtAccountPagatore',

},
__Dati_Testo007: {
type: String,
alias: 'TxtAccountEmittente',

},
__Dati_Testo008: {
type: String,
alias: 'IdAccountDocContabile',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagIn',

},
__Dati_Numero004: {
type: Number,
alias: 'FlagOut',

},
__Dati_Testo009: {
type: String,
alias: 'SDI_TipoDocumento',

},
__Dati_Testo010: {
type: String,
alias: 'SDI_Pk_Id',

},
__Dati_Testo011: {
type: String,
alias: 'SDI_Numero',

},
__Dati_Data001: {
type: Date,
alias: 'SDI_DataDocumento',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'SDI_PartitaIvaCedente',

},
__Dati_Testo013: {
type: String,
alias: 'SDI_CodiceFiscaleCedente',

},
__Dati_Numero005: {
type: Number,
alias: 'Uno',

},
__Dati_Numero006: {
type: Number,
alias: 'Zero',

},
__Dati_DataOra003: {
type: Date,
alias: 'SDI_DataOraRicezioneDocumento',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo014: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Data002: {
type: Date,
alias: 'DataRicezione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero007: {
type: Number,
alias: 'AnnoDocContabile',

},
__Dati_Testo015: {
type: String,
alias: 'AnnoMeseDocContabile',

},
__Dati_Testo016: {
type: String,
alias: 'AnnoMeseRicezioneDocContabile',

},
__Dati_Numero008: {
type: Number,
alias: 'AnnoRicezioneDocContabile',

},
__Dati_Numero009: {
type: Number,
alias: 'MeseDocContabile',

},
__Dati_Numero010: {
type: Number,
alias: 'MeseRicezioneDocContabile',

},
__Dati_Numero011: {
type: Number,
alias: 'SDI_VImponibile',

},
__Dati_Numero012: {
type: Number,
alias: 'SDI_VIva',

},
__Dati_Numero013: {
type: Number,
alias: 'SDI_VTotale',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagStatoRegistrazione',

},
__Dati_Numero015: {
type: Number,
alias: 'FlagAggiornaDatiDocContabile',

},
__Dati_Testo017: {
type: String,
alias: 'TxtTipoDocContabile',

},
__Dati_Testo018: {
type: String,
alias: 'CodiceTipoDocContabile',

},
__Dati_Testo019: {
type: String,
alias: 'IdImportazione',

},
__Dati_Testo020: {
type: String,
alias: 'TxtAccountDocContabile',

},
__Dati_Testo021: {
type: String,
alias: 'PartitaIvaCedenteConIT',

},
__Dati_Testo022: {
type: String,
alias: 'SDI_DenominazioneCedente',

},
__Dati_Contenitore001: {
type: String,
alias: 'SDI_XML',

},
__Dati_Testo024: {
type: String,
alias: 'SDI_XML_NomeFile',

},
__Dati_Testo025: {
type: String,
alias: 'SDI_IndirizzoSedeCedente',

},
__Dati_Testo026: {
type: String,
alias: 'SDI_NumeroCivicoSedeCedente',

},
__Dati_Testo027: {
type: String,
alias: 'SDI_CapSedeCedente',

},
__Dati_Testo028: {
type: String,
alias: 'SDI_ProvinciaSedeCedente',

},
__Dati_Testo029: {
type: String,
alias: 'SDI_NazioneSedeCedente',

},
__Dati_Testo030: {
type: String,
alias: 'SDI_TelefonoCedente',

},
__Dati_Testo031: {
type: String,
alias: 'SDI_EmailCedente',

},
__Dati_Testo032: {
type: String,
alias: 'SDI_ComuneSedeCedente',

},
__Dati_Testo033: {
type: String,
alias: 'FatturaHTML',

},
__Dati_Testo034: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default FattureDaSDISchema;