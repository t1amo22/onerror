console.log("a")

window.onerror = (message, source, lineno, colno, error) => {
    console.log(message)
    console.log(source)
    console.log(lineno)
    console.log(colno)
    console.log(error)
}