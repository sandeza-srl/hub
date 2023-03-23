import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import DateConverter from '../../setters/date-converter';

import type { IInformazioniArticoloPrivate } from './InformazioniArticolo.Types.Private';


/* --------
* Schema Definition
* -------- */
const InformazioniArticoloSchema = new mongoose.Schema<IInformazioniArticoloPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdArticolo',

  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno',

  },
  __Dati_Testo002: {
    type: String,
    alias: 'IdInformazioneArticolo',

  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Altezza',

  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Area',

  },
  __Dati_Numero004: {
    type: Number,
    alias: 'ConvMisuraAltezza',

  },
  __Dati_Numero005: {
    type: Number,
    alias: 'ConvMisuraArea',

  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ConvMisuraLarghezza',

  },
  __Dati_Numero007: {
    type: Number,
    alias: 'ConvMisuraLunghezza',

  },
  __Dati_Numero008: {
    type: Number,
    alias: 'ConvMisuraPesoUnitario',

  },
  __Dati_Numero009: {
    type: Number,
    alias: 'ConvMisuraVolume',

  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdClasseMisuraAltezza',

  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdClasseMisuraArea',

  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdClasseMisuraLarghezza',

  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdClasseMisuraLunghezza',

  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdClasseMisuraPeso',

  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdClasseMisuraVolume',

  },
  __Dati_Numero010: {
    type: Number,
    alias: 'Larghezza',

  },
  __Dati_Numero011: {
    type: Number,
    alias: 'Lunghezza',

  },
  __Dati_Numero012: {
    type: Number,
    alias: 'PesoUnitario',

  },
  __Dati_Testo009: {
    type: String,
    alias: 'UnitaMisuraAltezza',

  },
  __Dati_Testo010: {
    type: String,
    alias: 'UnitaMisuraArea',

  },
  __Dati_Testo011: {
    type: String,
    alias: 'UnitaMisuraLarghezza',

  },
  __Dati_Testo012: {
    type: String,
    alias: 'UnitaMisuraLunghezza',

  },
  __Dati_Testo013: {
    type: String,
    alias: 'UnitaMisuraPeso',

  },
  __Dati_Testo014: {
    type: String,
    alias: 'UnitaMisuraVolume',

  },
  __Dati_Numero013: {
    type: Number,
    alias: 'Volume',

  },
  __Dati_Testo015: {
    type: String,
    alias: 'UnitaMisuraAltezzaDefault',

  },
  __Dati_Testo016: {
    type: String,
    alias: 'UnitaMisuraAreaDefault',

  },
  __Dati_Testo017: {
    type: String,
    alias: 'UnitaMisuraLarghezzaDefault',

  },
  __Dati_Testo018: {
    type: String,
    alias: 'UnitaMisuraLunghezzaDefault',

  },
  __Dati_Testo019: {
    type: String,
    alias: 'UnitaMisuraPesoDefault',

  },
  __Dati_Testo020: {
    type: String,
    alias: 'UnitaMisuraVolumeDefault',

  },
  __Dati_Numero014: {
    type: Number,
    alias: 'ConvMisuraAltezzaDefault',

  },
  __Dati_Numero015: {
    type: Number,
    alias: 'ConvMisuraAreaDefault',

  },
  __Dati_Numero016: {
    type: Number,
    alias: 'ConvMisuraLarghezzaDefault',

  },
  __Dati_Numero017: {
    type: Number,
    alias: 'ConvMisuraLunghezzaDefault',

  },
  __Dati_Numero018: {
    type: Number,
    alias: 'ConvMisuraPesoUnitarioDefault',

  },
  __Dati_Numero019: {
    type: Number,
    alias: 'ConvMisuraVolumeDefault',

  },
  __Dati_Numero020: {
    type: Number,
    alias: 'AltezzaDefault',

  },
  __Dati_Numero021: {
    type: Number,
    alias: 'AreaDefault',

  },
  __Dati_Numero022: {
    type: Number,
    alias: 'LarghezzaDefault',

  },
  __Dati_Numero023: {
    type: Number,
    alias: 'LunghezzaDefault',

  },
  __Dati_Numero024: {
    type: Number,
    alias: 'PesoUnitarioDefault',

  },
  __Dati_Numero025: {
    type: Number,
    alias: 'VolumeDefault',

  },
  __Dati_Numero026: {
    type: Number,
    alias: 'FlagAggiornato',

  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdAccountCompagnia',

  },
  __Dati_Numero027: {
    type: Number,
    alias: 'Zero',

  },
  __Dati_Testo022: {
    type: String,
    alias: 'IdItemArticolo',

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
  __Dati_Testo023: {
    type: String,
    alias: 'IdInstallazione',

  },
  __Dati_Testo024: {
    type: String,
    alias: 'IdUtente',

  },
  __Dati_Testo025: {
    type: String,
    alias: 'TxtUtente',

  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdRicorrenzaRecord',

  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InformazioniArticoloSchema;