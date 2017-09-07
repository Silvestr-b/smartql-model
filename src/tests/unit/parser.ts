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

	describe('parse', () => {

		describe('currect', () => {
			afterEach(() => {
				factorySpy.reset();
			})

			it('full', () => {
				const result = parser.parse([samples.currect])

				expect(result[0]).to.be.equal(model);
				expect(factorySpy.calledWith(
					samples.currect.resource,
					samples.currect.fields,
					samples.currect.inclusions
				)).to.be.true;			
			})

			it('withoutInclusions', () => {
				parser.parse([samples.withoutInclusions]);

				expect(factorySpy.calledWith(
					samples.withoutInclusions.resource,
					samples.withoutInclusions.fields,
					{}
				)).to.be.true;
			})

			it('withEmptyInclusions', () => {
				parser.parse([samples.withEmptyInclusions]);

				expect(factorySpy.calledWith(
					samples.withEmptyInclusions.resource,
					samples.withEmptyInclusions.fields,
					samples.withEmptyInclusions.inclusions
				)).to.be.true;
			})

		})

		describe('uncurrect', () => {

			it('withoutName', () => {
				expect(() => parser.parse([samples.withoutName])).to.throw(/Uncorrect model declaration/)
			})

			it('withUncorrectName', () => {
				expect(() => parser.parse([samples.withUncorrectName])).to.throw(/Uncorrect model declaration/)
			})

			it('withoutFields', () => {
				expect(() => parser.parse([samples.withoutFields])).to.throw(/Uncorrect model declaration/)
			})

			it('withEmptyFields', () => {
				expect(() => parser.parse([samples.withEmptyFields])).to.throw(/Uncorrect model declaration/)
			})

			it('withUncorrectnclusions', () => {
				expect(() => parser.parse([samples.withUncorrectInclusions])).to.throw(/Uncorrect model declaration/)
			})

			it('withUncorrectInclusion', () => {
				expect(() => parser.parse([samples.withUncorrectInclusion])).to.throw(/Uncorrect model declaration/)
			})

			
		})

	})

})