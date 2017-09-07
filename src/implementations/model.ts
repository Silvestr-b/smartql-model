import { entities } from '../interfaces'


class Model implements entities.IModel {
	constructor(
		private name: string, 
		private fields: string[], 
		private inclusions: entities.ModelInclusions,
		private register: entities.IModelsRegister
	){}

	getName(){
		return this.name
	}

	getRelaitedModelName(relationName: string){
		if(!this.inclusions[relationName]) throw `Relation not found: ${relationName}`

		return this.inclusions[relationName]
	}

}


class ModelFactory {
	constructor(
		private modelsRegister: entities.IModelsRegister
	){}

	create(name: string, fields: string[], inclusions: entities.ModelInclusions){
		return new Model(name, fields, inclusions, this.modelsRegister)
	}

}


export { Model, ModelFactory }









