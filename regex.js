/**
 * Matches a time string like "12:30 AM"
 */
/^((1[0-2])|(0?[0-9]))\:[0-5][0-9] ((AM)|(PM))$/

/**
 * Matches a dd/mm/yyyy date string
 * makes sure 00 < dd <= 31
 * makes sure 00 < mm <= 12
 * makes sure yyyy consists of 4 numbers
 * allows for single digits and double digits ex. 06 or 6
 * does no validation for months with less than 31 days
 */
/^((0?[1-9])|([1-2][0-9])|(3[0-1]))\/((1[0-2])|(0?[1-9]))\/[0-9]{4}$/
