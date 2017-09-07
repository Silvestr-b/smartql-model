import { entities, restqlModel } from '../interfaces'


class ModelsParser implements entities.IModelsParser {
	constructor(
		private modelFactory: entities.IModelFactory
	){}

	parse(restqlModels: restqlModel.RestqlModel[]){
		const models = restqlModels.map(restqlModel => {
			const name = restqlModel.resource;
			const fields = restqlModel.fields;
			const inclusions = restqlModel.inclusions || {};

			if(!this.isValidName(name)) throw new Error('Uncorrect model declaration')
			if(!this.isValidFields(fields)) throw new Error('Uncorrect model declaration')
			if(!this.isValidInclusions(inclusions)) throw new Error('Uncorrect model declaration')

			return this.modelFactory.create(name, fields, inclusions)
		})

		return models
	}

	isValidName(name: string){
		return name && typeof name === 'string'
	}

	isValidFields(fields: string[]){
		return fields && Array.isArray(fields) && fields.length > 0 && fields.every(field => typeof field === 'string')
	}

	isValidInclusions(inclusions: restqlModel.RestqlModelInclusions){
		if(typeof inclusions !== 'object' || inclusions === null || Array.isArray(inclusions)) return false
			
		for(let inclusionName in inclusions){
			if(typeof inclusions[inclusionName] !== 'string') return false
		}	

		return true
	}

}


export { ModelsParser }