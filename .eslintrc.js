module.exports = {

  root: true,

  extends: [ 'proedis/base' ],

  parserOptions: {
    ecmaVersion: 7,
    project    : [ './tsconfig.eslint.json' ]
  },

  rules: {
    // Add here your custom rules
    // ...

    /**
     * By defaults the eslint-config-proedis plugin won't allow importing
     * an object used only as a type without the 'type' identifier.
     * NestJS will use the type declaration to dynamically inject dependencies
     * on controllers/services/modules: if a type has been imported with the 'type' it could not do it
     */
    '@typescript-eslint/consistent-type-imports': [ 'off' ]

  }

};
