function age(){
    let dob = document.getElementById('dob').value;
    let today = new Date();
    if (!dob) {
        alert('Please enter Date of birth')
        return
    }
    let birthDate = new Date(dob);
    if(birthDate>today){
        alert('Invalid Date of Birth')
        return
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getMonth())){
        age--;
    }
    document.getElementById('display').innerHTML=`Your Age is :${age}`
}