import { expect } from 'chai'
import { stub, spy } from 'sinon'
import { ModelsParser } from '../../implementations/models-parser'
import { entities, restqlModel } from '../../interfaces'
import * as samples from './models'


describe('ModelsParser', () => {
	const model = <entities.IModel>{}
	const factory = <entities.IModelFactory>{create: () => model}
	const factorySpy = spy(factory, 'create');
	const parser = new ModelsParser(factory);
	const correctSmartQlModel = {
		resource: 'User',
		fields: ['id', 'name', 'age'],
		inclusions: {
			post: 'Post',
			friends: 'User'
		}
	}

	describe('parse', () => {

		it('currect', () => {
			const result = parser.parse([correctSmartQlModel])

			expect(result[0]).to.be.equal(model);
		})

		it('uncurrect', () => {
			expect(() => parser.parse([(<restqlModel.RestqlModel>{})])).to.throw(/Uncorrect model declaration/)
		})

	})

})