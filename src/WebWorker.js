export function fibonacci(number) {
    
	let newNum = fibo(number)
	let saver
	if (number == 0 ) {
	 	saver = [0]
	} else if (number >= 1){
	 	saver = saveSequence
	}
	return [newNum, saver]
}

let saveSequence = [0, 1]

function fibo(n, sequence = [0, 1]){
    sequence = sequence

    if (n <= 1) {
        return n
    }

    if (!sequence[n]) {
        sequence[n] = fibo(n-1, sequence) + fibo(n-2, sequence)
    }
    
    saveSequence = sequence
    return sequence[n]
}
