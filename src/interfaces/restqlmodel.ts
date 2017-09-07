

export type RestqlModel = {
	resource: string
	fields: string[],
	inclusions: RestqlModelInclusions
}

export type RestqlModelInclusions = {
	[inclusionName: string]: string
}


