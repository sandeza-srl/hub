import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { IInfoAggiuntiveDistintaImpiantoPrivate } from './InfoAggiuntiveDistintaImpianto.Types.Private';


/* --------
* Schema Definition
* -------- */
const InfoAggiuntiveDistintaImpiantoSchema = new mongoose.Schema<IInfoAggiuntiveDistintaImpiantoPrivate>({

  _id: {
    type: String,
    default: uuid.v4
  },
  __Dati_Testo001: {
    type: String,
    alias: 'IdItem'
  },
  __Dati_Numero001: {
    type: Number,
    alias: 'Uno'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'EtichettaInformazione'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'TestoInformazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'IdImpianto'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'TestoInformazioneAutomatico'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdTipoEtichetta'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'Ordine'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'TxtOrdineEtichettaAutomatico'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'IdInfoAggiuntiveDistintaImpianto'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'FlagVincoli_ControlloInserimento'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'FlagVincoli_InformazioneVincolante'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'FlagVincoli_InformazioneVincolata'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'FlagVincoli_InformazioneVincolataBloccata'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'IdRigaDistintaImpianto'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'IdRigaDistintaImpiantoAttiva'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagAttivo'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'TxtTipoEtichetta'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default InfoAggiuntiveDistintaImpiantoSchema;