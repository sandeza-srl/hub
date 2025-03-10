import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRegistroImponibiliPrivate } from './RegistroImponibili.Types.Private';


/* --------
* Schema Definition
* -------- */
const RegistroImponibiliSchema = new mongoose.Schema<IRegistroImponibiliPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdRegistro',

},
__Dati_Testo003: {
type: String,
alias: 'CodiceDocContabile',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceEsterno',

},
__Dati_Numero002: {
type: Number,
alias: 'FlagImponibile',

},
__Dati_Testo005: {
type: String,
alias: 'IdAliquota',

},
__Dati_Numero003: {
type: Number,
alias: 'PercentualeIva',

},
__Dati_Numero004: {
type: Number,
alias: 'VImponibile',

},
__Dati_Numero005: {
type: Number,
alias: 'VIva',

},
__Dati_Numero006: {
type: Number,
alias: 'AnnoDocContabile',

},
__Dati_Testo006: {
type: String,
alias: 'AnnoMeseDocContabile',

},
__Dati_Data001: {
type: Date,
alias: 'DataDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero007: {
type: Number,
alias: 'MeseDocContabile',

},
__Dati_Testo007: {
type: String,
alias: 'TxtAliquota',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceVisualizza',

},
__Dati_Testo009: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Data002: {
type: Date,
alias: 'DataRegistrazioneDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero008: {
type: Number,
alias: 'Zero',

},
__Dati_Numero009: {
type: Number,
alias: 'PercentualeIVADetraibile',

},
__Dati_Testo010: {
type: String,
alias: 'LinguaDocumento',

},
__Dati_Testo011: {
type: String,
alias: 'LinguaPrincipale',

},
__Dati_Testo012: {
type: String,
alias: 'DescrizioneAliquota_LinguaDocumento',

},
__Dati_Testo013: {
type: String,
alias: 'DescrizioneAliquota_LinguaPrincipale',

},
__Dati_Numero010: {
type: Number,
alias: 'FlagNoPagamentoIva',

},
__Dati_Numero011: {
type: Number,
alias: 'VImponibileValuta',

},
__Dati_Numero012: {
type: Number,
alias: 'VIvaValuta',

},
__Dati_Testo014: {
type: String,
alias: 'TxtAliquotaAutomatico',

},
__Dati_Numero013: {
type: Number,
alias: 'FlagIn',

},
__Dati_Numero014: {
type: Number,
alias: 'FlagOut',

},
__Dati_Numero015: {
type: Number,
alias: 'AnnoRegistrazioneDocContabile',

},
__Dati_Testo015: {
type: String,
alias: 'AnnoMeseRegistrazioneDocContabile',

},
__Dati_Numero016: {
type: Number,
alias: 'MeseRegistrazioneDocContabile',

},
__Dati_Numero017: {
type: Number,
alias: 'FlagCorrezioneRegistro',

},
__Dati_Numero018: {
type: Number,
alias: 'PercentualeIVAIndetraibile',

},
__Dati_Numero019: {
type: Number,
alias: 'VIvaDetraibile',

},
__Dati_Numero020: {
type: Number,
alias: 'VIvaIndetraibile',

},
__Dati_Numero021: {
type: Number,
alias: 'VIvaDetraibileValuta',

},
__Dati_Numero022: {
type: Number,
alias: 'VIvaIndetraibileValuta',

},
__Dati_Numero023: {
type: Number,
alias: 'VImponibileDefinitivo',

},
__Dati_Numero024: {
type: Number,
alias: 'VImponibileDefinitivoValuta',

},
__Dati_Numero025: {
type: Number,
alias: 'VTotaleDefinitivoValuta',

},
__Dati_Testo016: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero026: {
type: Number,
alias: 'VTotaleDefinitivo',

},
__Dati_Numero027: {
type: Number,
alias: 'FlagReverseCharge',

},
__Dati_Testo017: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RegistroImponibiliSchema;