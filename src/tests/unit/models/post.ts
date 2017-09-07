

const Post = {
	resource: 'Post',
	fields: ['id', 'title', 'text'],
	inclusions: {
		author: 'User'
	}
}	


export { Post }