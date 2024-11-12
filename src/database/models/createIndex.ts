/**
 * Import all Schemas
 */
import ItemsSchema from './Items/Items.Schema';
import FornitureItemsSchema from './FornitureItems/FornitureItems.Schema';
import InformazioniItemsSchema from './InformazioniItems/InformazioniItems.Schema';
import ItemsUnitaMisuraAlternativeSchema from './ItemsUnitaMisuraAlternative/ItemsUnitaMisuraAlternative.Schema';
import VariazioniListinoSchema from './VariazioniListino/VariazioniListino.Schema';

/**
 * Create index
 */

/** Items */
ItemsSchema.index({
  __Dati_Testo002: 1
});
ItemsSchema.index({
  __Dati_Testo034: 1
});
ItemsSchema.index({
  __Dati_Testo003: 1
});
ItemsSchema.index({
  __Dati_Testo026: 1
});
ItemsSchema.index({
  __Dati_Testo005: 1
});
ItemsSchema.index({
  __Dati_Numero116: 1
});
ItemsSchema.index({
  __Dati_Numero046: 1
});

/** FornitureItems */
FornitureItemsSchema.index({
  __Dati_Testo001: 1
});
FornitureItemsSchema.index({
  __Dati_Testo006: 1
});

/** InformazioniItems */
InformazioniItemsSchema.index({
  __Dati_Testo001: 1
});

/** ItemsUnitaMisuraAlternative */
ItemsUnitaMisuraAlternativeSchema.index({
  __Dati_Testo004: 1
});

/** VariazioniListino */
VariazioniListinoSchema.index({
  __Dati_Testo001: 1
});
VariazioniListinoSchema.index({
  __Dati_Testo004: 1
});
