

const User = {
	resource: 'User',
	fields: ['id', 'name', 'age'],
	inclusions: {
		post: 'Post',
		friends: 'User'
	}
}	


export { User }