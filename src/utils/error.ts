export const errors = [
	// HTTP errors
	{code: 400, message: 'Bad Request'},
	{code: 401, message: 'Unauthorized'},
	{code: 403, message: 'Forbidden'},
	{code: 404, message: 'Not Found'},
	{code: 429, message: 'Too Many Requests'},
	{code: 500, message: 'Internal Server Error'},
	{code: 503, message: 'Service Unavailable'},
	{code: 504, message: 'Gateway Timeout'},
	{code: 1000, message: 'Network Error, please check your internet connection'},

	{code: 5000, message: 'Unknown Error'},

	// Errors in function calls
	{code: 1001, message: 'Invalid filter type. Please check available types'},
	{code: 1002, message: 'No results found for the given query'},
	{code: 1003, message: 'Format not supported. Please check available formats'},
	{code: 1004, message: 'The quality chosen is not available. Please check available qualities'},
	{code: 1005, message: 'Invalid URL or ID'},
	{
		code: 1006,
		message: 'The query provided looks unvalid. Please provide a valid query or URL (If is a mistake, please report it)'
	},
	{code: 1007, message: 'Invalid country code. Please check available countries'},
	{code: 1008, message: 'the data you request is not available for this type and artist'},

	// Errors in ytmusic response
	{code: 2001, message: 'No response from YouTube Music'},
	{code: 2002, message: 'No results found for the id:'},
	{code: 2003, message: 'Lyrics not available for the music'},
	{code: 2004, message: 'Song is not streamable, please check the unplayable reason'},
	{code: 2005, message: 'The download link returned is not valid, please retry or report the error'},
	{code: 2006, message: 'No download link found for the music with the given format and quality'},

]

export const error = (code: number, details: any) => {
	const err = errors.find(e => e.code === code)
	if (!err) return {code, details, message: 'Unknown Error'}
	return Object.assign(err, {details})
}
