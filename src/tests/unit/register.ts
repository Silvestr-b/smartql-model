import { expect } from 'chai'
import { stub, spy } from 'sinon'
import { ModelsRegister } from '../../implementations/models-register'
import { entities } from '../../interfaces'



describe('ModelsRegister', () => {

	describe('addModel/getModel', () => {

		it('currect', () => {
			const register = new ModelsRegister();
			const model = <entities.IModel>{ getName: () => 'User' };

			register.addModel(model);

			expect(register.getModel('User')).to.be.equal(model)
		})

		it('has`t model with such name', () => {
			const register = new ModelsRegister();

			expect(() => register.getModel('User')).to.throw(/model not found/)
		})

	})

	describe('addModels', () => {

		it('currect', () => {
			const register = new ModelsRegister();
			const model1 = <entities.IModel>{ getName: () => 'User' };
			const model2 = <entities.IModel>{ getName: () => 'Post' };

			register.addModels([model1, model2]);

			expect(register.getModel('User')).to.be.equal(model1);
			expect(register.getModel('Post')).to.be.equal(model2);
		})

	})

	describe('getRelaitedModelName', () => {

		it('currect', () => {
			const register = new ModelsRegister();
			const model = <entities.IModel>{ getName: () => 'User', getRelaitedModelName: () => 'Post' };
			const modelSpy = spy(model, 'getRelaitedModelName');  

			register.addModel(model);

			expect(register.getRelaitedModelName('User', 'posts')).to.be.equal('Post');
			expect(modelSpy.calledWith('posts')).to.be.true;
		})

	})

})