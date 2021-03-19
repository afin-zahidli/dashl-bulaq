let barcelona = ['afin', 'asgarli', 'etibar','beyleqan', 'ikinci asiqli kendi'];

let mouse = '';

for (let second= 0; second < barcelona.length; second++){
    
    mouse += mouse + barcelona[second] + '<br>';

    document.getElementById('lorem').innerHTML = mouse;
}