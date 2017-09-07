import { entities, restqlModel } from '../../../interfaces'


// Correct

const currect = {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withoutInclusions = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: ['id', 'name', 'age']
})

const withEmptyInclusions = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {}
})


// Uncorrect

const withoutName = Object.assign(<restqlModel.RestqlModel>{}, {
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
})

const withUncorrectName = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 1,
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
})

const withoutFields = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
})

const withUncorrectField = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: [2],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
})

const withEmptyFields = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: [],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
})

const withUncorrectInclusions = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: []
})

const withUncorrectInclusion = Object.assign(<restqlModel.RestqlModel>{}, {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 4
	}
})


export { 
	currect,
	withoutInclusions,
	withEmptyInclusions,
	withUncorrectName,
	withoutName,
	withoutFields,
	withUncorrectField,
	withEmptyFields,
	withUncorrectInclusions,
	withUncorrectInclusion 
}