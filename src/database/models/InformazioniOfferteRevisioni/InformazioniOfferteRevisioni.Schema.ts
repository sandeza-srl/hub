import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInformazioniOfferteRevisioniPrivate } from './InformazioniOfferteRevisioni.Types.Private';


/* --------
* Schema Definition
* -------- */
const InformazioniOfferteRevisioniSchema = new mongoose.Schema<IInformazioniOfferteRevisioniPrivate>({

_id: {
type: String,
default: uuid.v4
},
__Dati_Testo001: {
type: String,
alias: 'IdOfferta',

},
__Dati_Numero001: {
type: Number,
alias: 'Uno',

},
__Dati_Testo002: {
type: String,
alias: 'IdInformazioneOfferte',

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
alias: 'IdTipoInformazioneOfferta',

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
__Dati_Numero002: {
type: Number,
alias: 'Zero',

},
__Dati_Testo007: {
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
__Dati_Testo008: {
type: String,
alias: 'IdInstallazione',

},
__Dati_Testo009: {
type: String,
alias: 'CodiceOfferta',

},
__Dati_Numero003: {
type: Number,
alias: 'FlagAggiornaContenutiDaOfferte',

},
__Dati_Numero004: {
type: Number,
alias: 'Ordine',

},
__Dati_Testo010: {
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
__Dati_Testo011: {
type: String,
alias: 'IdRevisione',

},
__Dati_Testo012: {
type: String,
alias: 'IdInformazioneOfferteRevisione',

},
__Dati_Testo013: {
type: String,
alias: 'Integrazione_DatiVariAC',

},
__Dati_Testo014: {
type: String,
alias: 'TxtValoreInformazioniOffertaRevisione_LinguaPredefinita',

},
__Dati_Testo015: {
type: String,
alias: 'LinguaOfferta',

},
__Dati_Testo016: {
type: String,
alias: 'TxtValoreInformazioniOffertaRevisione_InLinguaOfferta',

}
}, {
timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InformazioniOfferteRevisioniSchema;