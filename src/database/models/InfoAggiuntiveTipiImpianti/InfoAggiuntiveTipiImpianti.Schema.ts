import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IInfoAggiuntiveTipiImpiantiPrivate } from './InfoAggiuntiveTipiImpianti.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveTipiImpiantiSchema = new mongoose.Schema<IInfoAggiuntiveTipiImpiantiPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo001: {
    type: String,
    alias: 'EtichettaInformazione'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TestoInformazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdTipoImpianto'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'IdInfoAggiuntiveTipiImpianti'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveTipiImpiantiSchema;