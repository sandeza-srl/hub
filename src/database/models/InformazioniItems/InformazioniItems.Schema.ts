import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInformazioniItemsPrivate } from './InformazioniItems.Types.Private';


/* --------
* Schema Definition
* -------- */
const InformazioniItemsSchema = new mongoose.Schema<IInformazioniItemsPrivate>({

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
alias: 'IdInformazioneItem',

},
__Dati_Testo003: {
type: String,
alias: 'EtichettaInformazione',

},
__Dati_Testo004: {
type: String,
alias: 'TestoInformazione',

},
__Dati_Testo005: {
type: String,
alias: 'IdTipoInformazioneItem',

},
__Dati_Testo006: {
type: String,
alias: 'IdAccountCompagnia',

},
__Dati_DataOra001: {
type: Date,
alias: 'DataOraUltimaModifica',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo007: {
type: String,
alias: 'IdInformazioneItemOrigine',

},
__Dati_Testo008: {
type: String,
alias: 'IdTipoEtichettaOrigine',

},
__Dati_Testo009: {
type: String,
alias: 'IdItemOrigine',

},
__Dati_Testo010: {
type: String,
alias: 'TestoInformazioneOrigine',

},
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo011: {
type: String,
alias: 'IdTipoEtichetta',

},
__Dati_DataOra002: {
type: Date,
alias: 'DataOraCreazione',
set: (value: any) => {
 return DateConverter.convertDateHour(value);
}
},
__Dati_Testo012: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo013: {
type: String,
alias: 'CodiceTxtItemAutomatico',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaContenutiDaItems',

},
__Dati_Numero004: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo014: {
type: String,
alias: 'TxtOrdineEtichettaAutomatico',

},
__Dati_Numero005: {
type: Number,
alias: 'FlagVincoli_InformazioneVincolante',

},
__Dati_Numero006: {
type: Number,
alias: 'FlagVincoli_InformazioneVincolata',

},
__Dati_Numero007: {
type: Number,
alias: 'FlagVincoli_ControlloInserimento',

},
__Dati_Numero008: {
type: Number,
alias: 'FlagVincoli_InformazioneVincolataBloccata',

},
__Dati_Testo015: {
type: String,
alias: 'RiassuntoEtichetta_EtichettaContenuto',

},
__Dati_Testo016: {
type: String,
alias: 'RiassuntoEtichetta_EtichettaContenutoJson',

},
__Dati_Testo017: {
type: String,
alias: 'RiassuntoEtichetta_SoloContenuto',

},
__Dati_Testo018: {
type: String,
alias: 'TxtTipoEtichetta',

},
__Dati_Testo019: {
type: String,
alias: 'TxtValoreInformazioniItems',

},
__Dati_Testo020: {
type: String,
alias: 'Formula_Calcolo',

},
__Dati_Testo021: {
type: String,
alias: 'IdTipiEtichettePerCalcolo',

},
__Dati_Numero009: {
type: Number,
alias: 'FlagAggiornaContenutiDaTipiEtichette',

},
__Dati_Testo022: {
type: String,
alias: 'Master_IdItemMaster',

},
__Dati_Testo023: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo024: {
type: String,
alias: 'GruppoTipoEtichetta',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InformazioniItemsSchema;