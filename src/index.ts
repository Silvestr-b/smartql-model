import { restqlModel } from './interfaces'
import { ModelFactory } from './implementations/model'
import { ModelsParser } from './implementations/models-parser'
import { ModelsRegister } from './implementations/models-register'


function ModelsRegisterFactory(restqlModels: restqlModel.RestqlModel[]){
	const modelsRegister = new ModelsRegister();
	const modelFactory = new ModelFactory(modelsRegister);
	const modelsParser = new ModelsParser(modelFactory);
	const models = modelsParser.parse(restqlModels);

	return modelsRegister.addModels(models)
}


export { ModelsRegisterFactory as ModelsRegister }