export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  load: ["server", "client"],
  i18nextServer: {
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json",
    },
  },
  i18nextClient: {
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  },
};
