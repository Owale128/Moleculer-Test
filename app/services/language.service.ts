import { Context, ServiceSchema } from "moleculer";


const LanguageService: ServiceSchema = {
    name: 'language',
    actions: {
        getText(ctx: Context <{language: 'sv'|'en' |'fr'}>) {
            const {language} = ctx.params

            const translations = {
                sv: 'Hej värld',
                en: 'Hello world',
                fr: 'Bonjour le mond'
            };
        
            return translations[language];

        }
    }
}

export default LanguageService