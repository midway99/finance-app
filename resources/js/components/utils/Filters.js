import store from "../../store";
import ru from "../locales/ru.json";
import en from "../locales/en.json";

export default {
    install: (app, options) => {
        app.config.globalProperties.$message = function (html) {
            M.toast({html});
        };
        app.config.globalProperties.$error = function (html) {
            window.M.toast({html: `Error: ${html}`});
        };
        app.config.globalProperties.$filters = function (value, currency = "UAH") {
            return new Intl.NumberFormat("ua-UA", {
                style: "currency",
                currency,
            }).format(value);
        };
        app.config.globalProperties.$date = function (value, format = "date") {
            const options = {};
            const locale = store.getters.info.locale || "ru-RU";
            if (format.includes("date")) {
                options.day = "2-digit";
                options.month = "long";
                options.year = "numeric";
            }
            if (format.includes("time")) {
                options.hour = "2-digit";
                options.minute = "2-digit";
                options.second = "2-digit";
            }
            return new Intl.DateTimeFormat(locale, options).format(new Date(value));
        };
        app.config.globalProperties.$locale = function (key) {
            const locale = store.getters.info.locale || "ru-RU";
            const locales = {
                "ru-RU": ru,
                "en-US": en,
            };
            return locales[locale][key] || "Localize error, key non found";
        };
    },
};
