import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IGerarchiaOffertePrivate } from './GerarchiaOfferte.Types.Private';


/* --------
* Schema Definition
* -------- */
const GerarchiaOfferteSchema = new mongoose.Schema<IGerarchiaOffertePrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Data001: {
type: Date,
alias: 'DataCreazione',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
},
__Dati_Data002: {
type: Date,
alias: 'DataModifica',
set: (value: any) => {
 return DateConverter.convertDate(value);
}
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
__Dati_Testo001: {
type: String,
alias: 'IdOfferta',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo002: {
type: String,
alias: 'IdGerarchiaOfferte',

},
__Dati_Testo003: {
type: String,
alias: 'IdMethod NonUsato',

},
__Dati_Testo004: {
type: String,
alias: 'IdVoceOfferta',

},
__Dati_Testo005: {
type: String,
alias: 'IdVoceOffertaPadre',

},
__Dati_Testo006: {
type: String,
alias: 'IdProcessFamily NonUsato',

},
__Dati_Testo007: {
type: String,
alias: 'IdCapitoloOfferta',

},
__Dati_Numero003: {
type: Number,
alias: 'Linea_Tipo_CapitoloOfferta',

},
__Dati_Numero004: {
type: Number,
alias: 'Linea_Tipo_VoceOfferta',

},
__Dati_Numero005: {
type: Number,
alias: 'Linea_Tipo_VoceOffertaPrimoLivello',

},
__Dati_Numero006: {
type: Number,
alias: 'Linea_Tipo_VoceOffertaSecondoLivello',

},
__Dati_Numero007: {
type: Number,
alias: 'Linea_Ordine',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagAggiornaGerarchiaOfferta',

},
__Dati_Testo008: {
type: String,
alias: 'IdVoceOffertaSecondoLivello',

},
__Dati_Testo009: {
type: String,
alias: 'IdFreeParameter NonUsato',

},
__Dati_Numero009: {
type: Number,
alias: 'LineType_FreeParameter NonUsato',

},
__Dati_Numero010: {
type: Number,
alias: 'FreeParameterNotEmpty NonUsato',

},
__Dati_Testo010: {
type: String,
alias: 'AssetListForLogicalUnitOfUnitProcedure',

},
__Dati_Testo011: {
type: String,
alias: 'AssetListForLogicalUnitOfOperationFromTo',

},
__Dati_Numero011: {
type: Number,
alias: 'Ordine_CapitoloOfferta',

},
__Dati_Numero012: {
type: Number,
alias: 'Ordine_VoceOfferta',

},
__Dati_Numero013: {
type: Number,
alias: 'Ordine_VoceOffertaPrimoLivello',

},
__Dati_Numero014: {
type: Number,
alias: 'Ordine_VoceOffertaSecondoLivello',

},
__Dati_Numero015: {
type: Number,
alias: 'Order_FreeParameterNonUsato',

},
__Dati_Numero016: {
type: Number,
alias: 'LivelloVoceOfferta',

},
__Dati_Testo012: {
type: String,
alias: 'Integrazione_DatiVariAC',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default GerarchiaOfferteSchema;