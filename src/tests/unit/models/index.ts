
const currect = {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withUncorrectName = {
	resource: 1,
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withoutName = {
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withoutFields = {
	resource: 'User',
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withUncorrectField = {
	resource: 'User',
	fields: [2],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withEmptyFields = {
	resource: 'User',
	fields: [],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}

const withoutInclusions = {
	resource: 'User',
	fields: ['id', 'name', 'age']
}

const withUncorrectnclusion = {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 4
	}
}


export { 
	currect,
	withUncorrectName,
	withoutName,
	withoutFields,
	withUncorrectField,
	withEmptyFields,
	withoutInclusions,
	withUncorrectnclusion 
}