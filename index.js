function get_inductance_ip(){
    const inductance_ip_str = document.getElementById("indactance_ip").value;
    const inductance_ip_value = Number(inductance_ip_str);
    console.log(inductance_ip_value);
    return inductance_ip_value;
}

function get_frequency_ip(){
    const frequency_ip_str = document.getElementById('freaqency_ip').value;
    const frequency_ip_value = Number(frequency_ip_str);
    console.log(frequency_ip_value);
    return frequency_ip_value;
}

function get_capacitance_ip(){
    const capacitance_ip_str = document.getElementById('capacitance_ip').value;
    const capacitance_ip_value = Number(capacitance_ip_str);
    console.log(capacitance_ip_value);
    return capacitance_ip_value;
}

// 計算用関数
function calc(inductance,frequency){
    const inductance_ip_value = get_inductance_ip();
    const frequency_ip_value = get_frequency_ip();
    const capacitance_ip_value = get_capacitance_ip();

    const inductance_value = inductance * Math.pow(10,inductance_ip_value);
    console.log(inductance_value);
    const frequency_value = frequency*Math.pow(10,frequency_ip_value);
    console.log(frequency_value);
    const capacitance_calc = 1/(4*Math.pow(Math.PI,2)*Math.pow(frequency_value,2)*inductance_value);
    console.log(capacitance_calc);
    const capacitance_value = document.getElementById('capacitance').value =capacitance_calc/Math.pow(10,capacitance_ip_value);
    console.log(capacitance_value.toPrecision(3));
}