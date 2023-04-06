export default {
  ct: {
    auth: {
      host: process.env.VUE_APP_CT_AUTH_HOST,
      projectKey: process.env.VUE_APP_CT_PROJECT_KEY,
      credentials: {
        clientId: process.env.VUE_APP_CT_CLIENT_ID,
        clientSecret: process.env.VUE_APP_CT_CLIENT_SECRET,
      },
      scope: [process.env.VUE_APP_CT_SCOPE],
    },
    api: process.env.VUE_APP_CT_API_HOST,
  },
  languages: {
    en: 'English',
    de: 'Deutsch',
  },
  countries: {
    DE: 'Deutschland',
    US: 'United States',
  },
  formats: {
    number: {
      DE: {
        currency: {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'symbol',
        },
      },
      US: {
        currency: {
          style: 'currency',
          currency: 'USD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
      DE: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  detailAttributes: [
    {
      name: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
    {
      name: 'colorFreeDefinition',
      label: {
        it: 'Color',
        de: 'Farbe',
        en: 'Color',
      },
    },
    {
      name: 'size',
      label: {
        it: 'Size',
        de: 'Grösse',
        en: 'Size',
      },
    },
    {
      name: 'style',
      label: {
        it: 'Style',
        de: 'Stil',
        en: 'Style',
      },
    },
    {
      name: 'gender',
      label: {
        it: 'Gender',
        de: 'Zielgruppe',
        en: 'Gender',
      },
    },
    {
      name: 'articleNumberManufacturer',
      label: {
        it: 'Manufacturer AID',
        de: 'Herstellernummer',
        en: 'Manufacturer AID',
      },
    },
  ],
  variantSelector: ['color', 'size'],
  variantInProductName: ['size'],
};
