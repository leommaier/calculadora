function insert(num) {
    document.getElementById('res').innerHTML += num;
}

function clean() {
    document.getElementById('res').innerHTML = '';
}

function back() {
    let result = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = result.substring(0, result.length -1);
    
}

function calculate() {
    let result = document.getElementById('res').innerHTML;
    if(result) {
        document.getElementById('res').innerHTML = eval(result)
    }
}



