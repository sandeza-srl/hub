import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IItemsPerOpzioneProdPrivate } from './ItemsPerOpzioneProd.Types.Private';


/* --------
* Schema Definition
* -------- */
const ItemsPerOpzioneProdSchema = new mongoose.Schema<IItemsPerOpzioneProdPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdItem',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdArticolo',

},
__Dati_Testo003: {
type: String,
alias: 'IdCiclo',

},
__Dati_Testo004: {
type: String,
alias: 'CodiceFase',

},
__Dati_Testo005: {
type: String,
alias: 'IdRisorsa',

},
__Dati_Testo006: {
type: String,
alias: 'IdOpzioneProd',

},
__Dati_Numero002: {
type: Number,
alias: 'Costificazione_CUMT',

},
__Dati_Numero003: {
type: Number,
alias: 'QtPerUmOpzione',

},
__Dati_Testo008: {
type: String,
alias: 'CodiceItem',

},
__Dati_Testo009: {
type: String,
alias: 'IdItemOpzioneProd',

},
__Dati_Testo010: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_Numero004: {
type: Number,
alias: 'Costificazione_CTMT',

},
__Dati_Testo011: {
type: String,
alias: 'TxtItem',

},
__Dati_Numero005: {
type: Number,
alias: 'Posizione',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagScaricoProduzione_QtProposta',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagScaricoProduzione_DeduzioneAutomatica',

},
__Dati_Numero014: {
type: Number,
alias: 'Zero',

},
__Dati_Testo012: {
type: String,
alias: 'UMAlternativa',

},
__Dati_Numero015: {
type: Number,
alias: 'QtPerUmAlternativa',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceItemAlternativo',

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
__Dati_Testo014: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Testo015: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Numero016: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Testo016: {
type: String,
alias: 'IdFamigliaItem',

},
__Dati_Testo017: {
type: String,
alias: 'IdSottoFamigliaItem',

},
__Dati_Numero017: {
type: Number,
alias: 'Pianificazione_FlagItemVincolante',

},
__Dati_Numero018: {
type: Number,
alias: 'Sottoprodotto_FlagSottoprodotto',

},
__Dati_Testo018: {
type: String,
alias: 'Sottoprodotto_Origine_IdItemOpzioneProd',

},
__Dati_Numero019: {
type: Number,
alias: 'Costificazione_FlagRicavo',

},
__Dati_Numero020: {
type: Number,
alias: 'Costificazione_FlagCosto',

},
__Dati_Testo019: {
type: String,
alias: 'IdItemArticolo',

},
__Dati_Numero021: {
type: Number,
alias: 'FlagAggiornaContenutiDaOpzioneProd',

},
__Dati_Testo020: {
type: String,
alias: 'IdTipoFase',

},
__Dati_Testo021: {
type: String,
alias: 'TxtItemArticolo',

},
__Dati_Testo022: {
type: String,
alias: 'IdSottoFamigliaItemArticolo',

},
__Dati_Testo023: {
type: String,
alias: 'IdFamigliaItemArticolo',

},
__Dati_Testo024: {
type: String,
alias: 'CodiceTxtItemArticoloAutomatico',

},
__Dati_Testo025: {
type: String,
alias: 'CodiceItemArticolo',

},
__Dati_Testo026: {
type: String,
alias: 'TxtFase',

},
__Dati_Testo027: {
type: String,
alias: 'TxtFaseRisorsaAutomatico',

},
__Dati_Numero022: {
type: Number,
alias: 'Costificazione_VUMT',

},
__Dati_Numero023: {
type: Number,
alias: 'Costificazione_VTMT',

},
__Dati_Numero024: {
type: Number,
alias: 'DocOperativi_FlagItemFabbisogno',

},
__Dati_Numero025: {
type: Number,
alias: 'DocOperativi_FlagItemOrdinato',

},
__Dati_Numero026: {
type: Number,
alias: 'DocOperativi_FlagEscludiDaDocOperativi',

},
__Dati_Numero027: {
type: Number,
alias: 'Item_FlagLinkArticoloProduzione',

},
__Dati_Testo028: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo029: {
type: String,
alias: 'IdItemDistintaPerTipiFase',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default ItemsPerOpzioneProdSchema;