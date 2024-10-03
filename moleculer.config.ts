import { ServiceBroker } from "moleculer";
import MathService from "./app/services/math.service";
import LanguageService from "./app/services/language.service";

const broker = new ServiceBroker()

broker.createService(MathService)
broker.createService(LanguageService)

broker.start()


export default broker