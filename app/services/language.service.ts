
module.exports = {
    name: 'language',
    actions: {
        getText(ctx: {params: {language: 'sv'|'en' |'fr'} }) {

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
