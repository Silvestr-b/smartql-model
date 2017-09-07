import { entities, restqlModel } from '../interfaces'


class ModelsParser implements entities.IModelsParser {
	constructor(
		private modelFactory: entities.IModelFactory
	){}

	parse(restqlModels: restqlModel.RestqlModel[]){
		const models = restqlModels.map(restqlModel => {
			const name = restqlModel.resource;
			const fields = restqlModel.fields;
			const inclusions = restqlModel.inclusions;

			if(!name || !fields || !inclusions) throw new Error('Uncorrect model declaration')

			return this.modelFactory.create(name, fields, inclusions)
		})

		return models
	}

}


export { ModelsParser }