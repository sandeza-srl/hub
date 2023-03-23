import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { ITipiDocContabiliPrivate } from './TipiDocContabili.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiDocContabiliSchema = new mongoose.Schema<ITipiDocContabiliPrivate>({

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
    alias: 'IdTipoDocContabile',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoDocContabile',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'FlagIn',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FlagOut',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagTipoFatturaAcquisto',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagTipoGenericoAcquisto',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagTipoGenericoVendita',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'CodiceTipoDocContabile',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'GeneraCodice_FlagTxtPeriodoContabileVisibile',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'GeneraCodice_Testo',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'GeneraCodice_FlagTxtPeriodoContabileVisibileVedi',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'TxtFattore',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'GeneraCodice_Progressivo',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'GeneraCodice_CifreProgressivo',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'GeneraCodice_ProssimoCodice',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'GeneraCodice_IdPeriodoContabileTest',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagCodiceEsterno',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagTipoFatturaVendita',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'GeneraCodice_AltroIdTipoDocPerCodice',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'GeneraCodice_FlagUsaCodiceAltro',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'GeneraCodice_FlagUsaCodiceAltroVedi',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'GeneraCodice_IdTipoDocContabilePerCodice',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'IdTipoDocumento',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdSottoTipoDocumento',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagProvvisorioPossibile',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'FormatoStampa',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'GeneraCodice_OrdineTxtPeriodoContabile',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'GeneraCodice_OrdineProgressivo',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'GeneraCodice_OrdineTesto',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'GeneraCodice_Separatore',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'GeneraCodice_TxtPeriodoContabileTest',

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
  __Dati_Numero017: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagErroriValori',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagErroriValoriTxt',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'FlagNoPagamentoIva',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagGeneraRicaviSpese',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagGeneraStatoPatrimoniale',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'FlagRispettaProgressivo',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'FlagContabilizzabile',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'CodiceCausaleContabile',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'FlagDataContabileRegistrazione',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdCodificaTipoDocContabili',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'CodiceCodifica',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagFatturaElettronica',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'FlagPrevisionale',

  },
  __Dati_Numero028: {
    type: Number,
    alias: 'FlagPrincipale',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdTipoComunicazione',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiDocContabiliSchema;