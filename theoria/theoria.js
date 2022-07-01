/* 
THEORIA MEDICAL SOFTWARE ENGINEER CODING EXAM
*/

// Left Rotation
/* 
  Given an integer, rotate the array elements 
  that many steps left and return the result.
 */

/* 
EXAMPLE
  Given d = 2 and arr = [1,2,3,4,5]
  After 2 rotations, result is [3,4,5,1,2] 
*/

const leftRotation = (d, arr) => {
	// Write your code here

	const rotator = (integer, i, array) => {
		const lastIteration = i === array.length - 1;

		if (lastIteration) {
			return array[0];
		}

		return array[i + 1];
	};

	let mappedArray = arr.map(rotator);

	for (let i = 1; i < d; i++) {
		mappedArray = mappedArray.map(rotator);
	}

	return mappedArray;
};

module.exports = leftRotation;

/*Tongue Twister Word Counter

Given a string (str) and an array of words (arr). 
Return an array of numbers representing how many 
the words in the array are repeated in the string in the order 
of how the array is arranged. 
The function should ignore letter case.

Example
str = "Peter Piper picked a peck of pickled peppers A peck of pickled peppers Peter Piper picked"
arr = ["peter", "a", "pepper", "piper", "The"]
Expected Output = [2, 2, 0, 2, 0]
*/

const countInstances = (str, arr) => {
	// Write your code here

	const splitStr = str.split(" ");

	let wordCountArray = arr.map((word) => {
		let wordCounter = 0;
		splitStr.forEach((strWord) => {
			const found = strWord.toLowerCase() === word.toLowerCase();
			if (found) {
				wordCounter++;
			}
		});

		return wordCounter;
	});

	return wordCountArray;
};

module.exports = countInstances;

// Find intersection

// Imagine a coordinate system where an array of length 2
// [x, y] represents a point

// A line segment will then be represented by a pair of points
// L1: [[2, 4], [2, 8]] is a vertical line
// L2: [[0, 4], [8, 4]] is a horizontal line
// L3: [[0, 1], [5, 1]] is a horizontal line

// If two lines intersect, return the sum of the coordinates
// of the point of intersection. Otherwise, return -1

// EXAMPLE
// L1 and L2 intersect at [2, 4], result is 6
// L1 and L3 do not intersect, result is -1

// Assume you will be given a vertical and a horizontal line
// so there is at most one point of intersection only

const findIntersection = (l1, l2) => {
	// Write your code here

	/* 
  find all points each line has
  check if any points in the line match
  if match, return the sum of points
  else, return -1
  */

	console.log(`
    Line1 point1: ${l1[0]}
    Line1 point2: ${l1[1]}

    Line2 point1: ${l2[0]}
    Line2 point2: ${l2[1]}
  `);

	// line 1 coordinates storage
	const lineOneCoordinates = [];

	// finding coordinates of line 1
	const lineOne = l1;
	const lineOnePointOne = lineOne[0];
	const lineOnePointTwo = lineOne[1];
	const lineOnePointOneY = lineOne[0][1];
	const lineOnePointTwoY = lineOne[1][1];
	const lineOnePointOneX = lineOne[0][0];
	const lineOnePointTwoX = lineOne[1][0];

	// find out if line is vertical / horizontal
	const lineOneVertical = lineOnePointOne[0] === lineOnePointTwo[0];

	// if line one is vertical
	if (lineOneVertical) {
		// check if line one point one y is greater
		const lineOnePointOneYIsGreater = lineOnePointOne[1] > lineOnePointTwo[1];

		// if line one's point one's y coordinate is greater
		if (lineOnePointOneYIsGreater) {
			// loop from line one's point one's y coordinate to line one's point two's y coordinate
			for (let y2 = lineOnePointOneY; y2 >= lineOnePointTwoY; y2--) {
				lineOneCoordinates.push([lineOnePointOneX, y2]);
			}
		} else {
			// if line one point two Y is greater
			// loop from line one's point two's y coordinate to line one's point one's y coordinate
			for (let y2 = lineOnePointTwoY; y2 >= lineOnePointOneY; y2--) {
				lineOneCoordinates.push([lineOnePointOneX, y2]);
			}
		}
	} else {
		// if line one is horizontal

		const lineOnePointOneXIsGreater = lineOnePointOne[0] > lineOnePointTwo[0];

		// if line one's point one's x coordinate is greater
		if (lineOnePointOneXIsGreater) {
			// loop from line one's point one's x coordinate to line one's point two's x coordinate
			for (let x2 = lineOnePointOneX; x2 >= lineOnePointTwoX; x2--) {
				lineOneCoordinates.push([x2, lineOnePointOneY]);
			}
		} else {
			// if line one point two x coordinate is greater

			// loop from line one point two x coordinate to line one point one x coordinate
			for (let x2 = lineOnePointTwoX; x2 >= lineOnePointOneX; x2--) {
				lineOneCoordinates.push([x2, lineOnePointOneY]);
			}
		}
	}

	console.log("line one coordinates");
	console.log(lineOneCoordinates);

	// line 2 coordinates storage
	const lineTwoCoordinates = [];

	// finding coordinates of line 2
	const lineTwo = l2;
	const lineTwoPointOne = lineTwo[0];
	const lineTwoPointTwo = lineTwo[1];
	const lineTwoPointOneY = lineTwo[0][1];
	const lineTwoPointTwoY = lineTwo[1][1];
	const lineTwoPointOneX = lineTwo[0][0];
	const lineTwoPointTwoX = lineTwo[1][0];

	// find out if line is vertical / horizontal
	const lineTwoVertical = lineTwoPointOne[0] === lineTwoPointTwo[0];

	// if line two is vertical
	if (lineTwoVertical) {
		const lineTwoPointOneYIsGreater = lineTwoPointOne[1] > lineTwoPointTwo[1];

		// if line two's point one's y coordinate is greater
		if (lineTwoPointOneYIsGreater) {
			// loop from line two's point one's y coordinate to line two's point two's y coordinate
			for (let y2 = lineTwoPointOneY; y2 >= lineTwoPointTwoY; y2--) {
				lineTwoCoordinates.push([lineTwoPointOneX, y2]);
			}
		} else {
			// if line two point two y coordinate is greater

			// loop from line two point two y coordinate to line two point one y coordinate
			for (let y2 = lineTwoPointTwoY; y2 >= lineTwoPointOneY; y2--) {
				lineTwoCoordinates.push([lineTwoPointOneX, y2]);
			}
		}
	} else {
		// if line two is horizontal

		const lineTwoPointOneXIsGreater = lineTwoPointOne[0] > lineTwoPointTwo[0];

		// if line two's point one's x coordinate is greater
		if (lineTwoPointOneXIsGreater) {
			// loop from line two's point one's x coordinate to line two's point two's x coordinate
			for (let x2 = lineTwoPointOneX; x2 >= lineTwoPointTwoX; x2--) {
				lineTwoCoordinates.push([x2, lineTwoPointOneY]);
			}
		} else {
			// if line two point two x coordinate is greater

			// loop from line two point two x coordinate to line two point one x coordinate
			for (let x2 = lineTwoPointTwoX; x2 >= lineTwoPointOneX; x2--) {
				lineTwoCoordinates.push([x2, lineTwoPointOneY]);
			}
		}
	}

	console.log("line two coordinates");
	console.log(lineTwoCoordinates);

	let result = 0;

	for (let i = 0; i < lineOneCoordinates.length; i++) {
		const lineOneCoordinate = lineOneCoordinates[i];

		result = lineTwoCoordinates.filter((lineTwoCoordinate) => {
			return lineTwoCoordinate.join(", ") === lineOneCoordinate.join(", ");
		});

		if (result.length !== 0) {
			break;
		}

		result = -1;
	}

	if (result !== -1) {
		result = result[0].reduce((prev, curr) => prev + curr, 0);
	}

	console.log("Result:");
	console.log(result);
	return result;
};

module.exports = findIntersection;
