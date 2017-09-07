import * as restqlModel from './restqlmodel'


export interface IModel {
	getName: () => string
	getRelaitedModelName: (relationName: string) => string
}

export interface IModelFactory {
	create: (name: string, fields: string[], inclusions: ModelInclusions) => IModel
}

export interface IModelsRegister {
	addModel: (model: IModel) => void
	addModels: (models: IModel[]) => void
	getModel: (modelName: string) => IModel
	getRelaitedModelName: (modelName: string, relationName: string) => string
}

export interface IModelsParser {
	parse: (model: restqlModel.RestqlModel[]) => IModel[]
}

export type ModelInclusions = {
	[inclusionName: string]: string
}


