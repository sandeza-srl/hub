import * as mongoose from 'mongoose';
import * as uuid from 'uuid';

import type { ITipiFasiPrivate } from './TipiFasi.Types.Private';


/* --------
* Schema Definition
* -------- */
const TipiFasiSchema = new mongoose.Schema<ITipiFasiPrivate>({

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
    alias: 'IdTipoFase'
  },
  __Dati_Testo002: {
    type: String,
    alias: 'TxtTipoFase'
  },
  __Dati_Testo003: {
    type: String,
    alias: 'IdRisorsa'
  },
  __Dati_Numero002: {
    type: Number,
    alias: 'GgLavorazione'
  },
  __Dati_Testo004: {
    type: String,
    alias: 'TxtRisorsa'
  },
  __Dati_Numero003: {
    type: Number,
    alias: 'FrequenzaControllo'
  },
  __Dati_Testo005: {
    type: String,
    alias: 'UnitaMisura'
  },
  __Dati_Numero004: {
    type: Number,
    alias: 'IncidenzaScarto'
  },
  __Dati_Testo006: {
    type: String,
    alias: 'CodiceTipoFase'
  },
  __Dati_Testo007: {
    type: String,
    alias: 'CodiceRisorsa'
  },
  __Dati_Testo008: {
    type: String,
    alias: 'IdAccountCompagnia'
  },
  __Dati_Testo009: {
    type: String,
    alias: 'IdTipiControlli'
  },
  __Dati_Ora001: {
    type: String,
    alias: 'TA_T'
  },
  __Dati_Ora002: {
    type: String,
    alias: 'TD_T'
  },
  __Dati_Ora003: {
    type: String,
    alias: 'TAttraversamentoLinea_T'
  },
  __Dati_Numero005: {
    type: Number,
    alias: 'NUmOpzColpo_T'
  },
  __Dati_Numero006: {
    type: Number,
    alias: 'ProdUmOpzHP_T'
  },
  __Dati_Numero007: {
    type: Number,
    alias: 'Zero'
  },
  __Dati_Data001: {
    type: Date,
    alias: 'DataCreazione'
  },
  __Dati_Data002: {
    type: Date,
    alias: 'DataModifica'
  },
  __Dati_DataOra001: {
    type: Date,
    alias: 'DataOraCreazione'
  },
  __Dati_DataOra002: {
    type: Date,
    alias: 'DataOraUltimaModifica'
  },
  __Dati_Testo010: {
    type: String,
    alias: 'UtenteCreazione'
  },
  __Dati_Testo011: {
    type: String,
    alias: 'UtenteModifica'
  },
  __Dati_Testo012: {
    type: String,
    alias: 'CodiceTxtTipoFaseAutomatico'
  },
  __Dati_Testo013: {
    type: String,
    alias: 'CodiceTxtTipoFaseRisorsaAutomatico'
  },
  __Dati_Testo014: {
    type: String,
    alias: 'IdItemLavorazione'
  },
  __Dati_Numero008: {
    type: Number,
    alias: 'FlagImballoFinale'
  },
  __Dati_Numero009: {
    type: Number,
    alias: 'FlagImballoParziale'
  },
  __Dati_Numero010: {
    type: Number,
    alias: 'FlagLavEsterna'
  },
  __Dati_Numero011: {
    type: Number,
    alias: 'FlagNestedPossibile'
  },
  __Dati_Numero012: {
    type: Number,
    alias: 'FlagLavInternaPianificabile'
  },
  __Dati_Numero013: {
    type: Number,
    alias: 'FlagTempoManualePossibile'
  },
  __Dati_Testo015: {
    type: String,
    alias: 'TxtItemLavorazione'
  },
  __Dati_Testo016: {
    type: String,
    alias: 'IdTipiImballo'
  },
  __Dati_Testo017: {
    type: String,
    alias: 'TxtTipoImballo'
  },
  __Dati_Numero014: {
    type: Number,
    alias: 'CUL_T'
  },
  __Dati_Numero015: {
    type: Number,
    alias: 'FlagLavInternaNonPianificabile'
  },
  __Dati_Testo018: {
    type: String,
    alias: 'FlagSelezione'
  },
  __Dati_Numero016: {
    type: Number,
    alias: 'FlagDaBenestariare'
  },
  __Dati_Numero017: {
    type: Number,
    alias: 'PercScartoImpostata'
  },
  __Dati_Testo019: {
    type: String,
    alias: 'IdItemTrasporto'
  },
  __Dati_Testo020: {
    type: String,
    alias: 'TxtItemTrasporto'
  },
  __Dati_Numero018: {
    type: Number,
    alias: 'FlagRegistraContenitore'
  },
  __Dati_Testo021: {
    type: String,
    alias: 'IdTipoContenitore'
  },
  __Dati_Testo022: {
    type: String,
    alias: 'TxtTipoContenitore'
  },
  __Dati_Numero019: {
    type: Number,
    alias: 'FlagScartoRilavorabile'
  },
  __Dati_Numero020: {
    type: Number,
    alias: 'QtPerBenestare'
  },
  __Dati_Numero021: {
    type: Number,
    alias: 'FlagRisorseAssociate'
  },
  __Dati_Testo023: {
    type: String,
    alias: 'IdInstallazione'
  },
  __Dati_Numero022: {
    type: Number,
    alias: 'FlagVerificaControlli'
  },
  __Dati_Numero023: {
    type: Number,
    alias: 'ControlliQualita_FlagAvvisoFisso'
  },
  __Dati_Testo024: {
    type: String,
    alias: 'ControlliQualita_TxtAvvisoFisso'
  },
  __Dati_Testo025: {
    type: String,
    alias: 'IdRicorrenzaRecord'
  },
  __Dati_Testo026: {
    type: String,
    alias: 'IdUtente'
  },
  __Dati_Testo027: {
    type: String,
    alias: 'TxtUtente'
  }
}, {
  timestamps: true
});

/* --------
* Module Exports
* -------- */
export default TipiFasiSchema;