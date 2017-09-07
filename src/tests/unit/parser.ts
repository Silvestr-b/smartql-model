import { expect } from 'chai'
import { stub, spy } from 'sinon'
import { ModelsParser } from '../../implementations/models-parser'
import { entities, restqlModel } from '../../interfaces'


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

		describe('uncurrect', () => {

			it('hasn`t name', () => {
				expect(() => parser.parse([
					Object.assign({}, correctSmartQlModel, {resource: undefined})
				])).to.throw(/Uncorrect model declaration/)
			})

			it('hasn`t fields', () => {
				expect(() => parser.parse([
					Object.assign({}, correctSmartQlModel, {fields: undefined})
				])).to.throw(/Uncorrect model declaration/)
			})

			it('hasn`t inclusions', () => {
				expect(() => parser.parse([
					Object.assign({}, correctSmartQlModel, {inclusions: undefined})
				])).to.throw(/Uncorrect model declaration/)
			})
			
		})

	})

})