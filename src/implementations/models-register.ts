import { entities, restqlModel } from '../interfaces'


class ModelsRegister implements entities.IModelsRegister {
	models: {[modelName: string]: entities.IModel} = {};

	addModel(model: entities.IModel){
		const modelName = model.getName();

		this.models[modelName] = model;

		return this
	}

	addModels(models: entities.IModel[]){
		models.forEach(model => this.addModel(model))
		
		return this
	}

	getModel(modelName: string){
		if(!this.models[modelName]) throw `Resource model not found: ${modelName}`;

		return this.models[modelName] 
	}

	getRelaitedModelName(modelName: string, relationName: string){
		const model = this.getModel(modelName)

		return model.getRelaitedModelName(relationName)
	}

}


export { ModelsRegister }