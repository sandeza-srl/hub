import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IRicaviSpesePeriodoPrivate } from './RicaviSpesePeriodo.Types.Private';


/* --------
* Schema Definition
* -------- */
const RicaviSpesePeriodoSchema = new mongoose.Schema<IRicaviSpesePeriodoPrivate>({

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
alias: 'IdRicavoSpesaPeriodo',

},
__Dati_Numero002: {
type: Number,
alias: 'AnnoFineCompetenza',

},
__Dati_Data001: {
type: Date,
alias: 'DataFineCompetenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero003: {
type: Number,
alias: 'MeseFineCompetenza',

},
__Dati_Numero004: {
type: Number,
alias: 'SettimanaFineCompetenza',

},
__Dati_Testo002: {
type: String,
alias: 'IdAccountEmittente',

},
__Dati_Testo003: {
type: String,
alias: 'IdAccountPagatore',

},
__Dati_Numero005: {
type: Number,
alias: 'VImponibile',

},
__Dati_Numero006: {
type: Number,
alias: 'VTotale',

},
__Dati_Numero007: {
type: Number,
alias: 'VIva',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagIn',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagOut',

},
__Dati_Testo004: {
type: String,
alias: 'IdTipoRicavoSpesa',

},
__Dati_Testo005: {
type: String,
alias: 'TxtTipoRicavoSpesa',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Testo007: {
type: String,
alias: 'TxtFattore',

},
__Dati_Data002: {
type: Date,
alias: 'DataInizioCompetenza',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero010: {
type: Number,
alias: 'VIvaSegno',

},
__Dati_Testo008: {
type: String,
alias: 'IdAccountTutti',

},
__Dati_Numero011: {
type: Number,
alias: 'VImponibileSegno',

},
__Dati_Testo009: {
type: String,
alias: 'ClasseTipoRicavoSpesa',

},
__Dati_Testo010: {
type: String,
alias: 'AnnoMeseFineCompetenza',

},
__Dati_Numero012: {
type: Number,
alias: 'AnnoInizioCompetenza',

},
__Dati_Testo011: {
type: String,
alias: 'AnnoMeseInizioCompetenza',

},
__Dati_Numero013: {
type: Number,
alias: 'MeseInizioCompetenza',

},
__Dati_Numero014: {
type: Number,
alias: 'SettimanaInizioCompetenza',

},
__Dati_Testo012: {
type: String,
alias: 'SottoClasseTipoRicavoSpesa',

},
__Dati_Numero015: {
type: Number,
alias: 'VEntrataTotale',

},
__Dati_Numero016: {
type: Number,
alias: 'VUscitaTotale',

},
__Dati_Numero017: {
type: Number,
alias: 'VEntrataImponibile',

},
__Dati_Numero018: {
type: Number,
alias: 'VUscitaImponibile',

},
__Dati_Numero019: {
type: Number,
alias: 'VTotaleSegno',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceTipoRicavoSpesa',

},
__Dati_Testo014: {
type: String,
alias: 'IdDocContabile',

},
__Dati_Testo015: {
type: String,
alias: 'CodiceDocContabile',

},
__Dati_Testo016: {
type: String,
alias: 'CodiceEsterno',

},
__Dati_Testo017: {
type: String,
alias: 'CodiceVisualizza',

},
__Dati_Data003: {
type: Date,
alias: 'DataDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data004: {
type: Date,
alias: 'DataRegistrazioneDocContabile',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Numero020: {
type: Number,
alias: 'FlagProvvisorio',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagNonConteggiare',

},
__Dati_Numero022: {
type: Number,
alias: 'FlagFisco',

},
__Dati_Testo018: {
type: String,
alias: 'IdPeriodoContabile',

},
__Dati_Testo019: {
type: String,
alias: 'TxtPeriodoContabile',

},
__Dati_Numero023: {
type: Number,
alias: 'GiorniCompetenza_Numero',

},
__Dati_Numero024: {
type: Number,
alias: 'GiorniCompetenza_Imponibile',

},
__Dati_Numero025: {
type: Number,
alias: 'GiorniCompetenza_Iva',

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
__Dati_Numero026: {
type: Number,
alias: 'Zero',

},
__Dati_Testo020: {
type: String,
alias: 'IdAccountDocContabile',

},
__Dati_Testo021: {
type: String,
alias: 'TxtAccountDocContabile',

},
__Dati_Numero027: {
type: Number,
alias: 'FlagFisso',

},
__Dati_Numero028: {
type: Number,
alias: 'FlagVariabile',

},
__Dati_Testo022: {
type: String,
alias: 'IdAliquota',

},
__Dati_Numero029: {
type: Number,
alias: 'PercentualeIVA',

},
__Dati_Numero030: {
type: Number,
alias: 'PercentualeIVADetraibile',

},
__Dati_Numero031: {
type: Number,
alias: 'PercentualeIVAIndetraibile',

},
__Dati_Numero032: {
type: Number,
alias: 'VIvaDetraibile',

},
__Dati_Numero033: {
type: Number,
alias: 'VIvaIndetraibile',

},
__Dati_Numero034: {
type: Number,
alias: 'VImponibileDefinitivo',

},
__Dati_Numero035: {
type: Number,
alias: 'VImponibileDefinitivoSegno',

},
__Dati_Numero036: {
type: Number,
alias: 'GiorniCompetenza_IvaDetraibile',

},
__Dati_Numero037: {
type: Number,
alias: 'FlagReverseCharge',

},
__Dati_Numero038: {
type: Number,
alias: 'VImponibileReverseCharge',

},
__Dati_Testo023: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo024: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo025: {
type: String,
alias: 'IdVoceDocContabile',

},
__Dati_Testo026: {
type: String,
alias: 'CodiceContabileTipoRicavoSpesa',

},
__Dati_Testo027: {
type: String,
alias: 'TxtAutomaticoDocContabile',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default RicaviSpesePeriodoSchema;