const BinaryConverter = () => {
  const convertBinary = (bin) => {
    // parseInt
    console.log(parseInt(bin, 3))
    bin = bin.toString()
    // for loop
    // let sum = 0
    // for (let i = bin.length - 1; i >= 0; i--) {
    //   sum += bin.charAt(i) * 2 ** i
    // }

    // reduce
    console.log(
      bin
        .split('')
        .reverse()
        .reduce((curr, binDig, binDigIdx) => curr + parseInt(binDig) * 2 ** parseInt(binDigIdx), 0),
    )
  }

  return (
    <div>
      <button onClick={() => convertBinary(10)}>binary C</button>
    </div>
  )
}

export default BinaryConverter
