import { expect } from 'chai'
import { stub, spy } from 'sinon'
import { Model, ModelFactory } from '../../implementations/model'
import { entities } from '../../interfaces'


describe('SmartQL-Model', () => {
	const name = 'User';
	const fields = ['id', 'name'];
	const inclusions = {
		posts: 'Post',
		comments: 'Comment'
	}
	const register = <entities.IModelsRegister>{};
	const model = new Model(name, fields, inclusions, register);

	describe('getName', () => {

		it('currect', () => {
			expect(model.getName()).to.be.equal('User');
		})

	})

	describe('getRelaitedModelName', () => {

		it('currect', () => {
			expect(model.getRelaitedModelName('posts')).to.be.equal('Post');
		})

		it('no such relation', () => {
			expect(() => model.getRelaitedModelName('friends')).to.throw(/Relation not found/);
		})

	})

	describe('ModelFactory', () => {
		const factory = new ModelFactory(register);

		it('create', () => {
			const sampleModel = new Model(name, fields, inclusions, register);
			const factoredModel = factory.create(name, fields, inclusions);

			expect(sampleModel).to.be.deep.equal(factoredModel);
		})

	})

})