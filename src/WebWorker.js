export function fibonacci(number) {

 	let newNum = fibo(number-1)
 	console.log(newNum)
 	console.log(saveSequence)
 	if (number === 0) {
 		saveSequence = [0]
 	}
    return [newNum, saveSequence]
}

let saveSequence = [0, 1]

function fibo(n, sequence = [0, 1]){
	sequence = sequence

	if (n <= 1) {
		return 1
	}

	if (!sequence[n]) {
		sequence[n] = fibo(n-1, sequence) + fibo(n-2, sequence)
	}
	saveSequence = sequence
	return sequence[n]
}