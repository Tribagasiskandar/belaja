//buat handle submit//
function handleSubmit(event) {

    //prevent reload page
    event.preventDefault()
    

//DEFAULT USERNAME 
var def_email = "ade@gmail.com"
var def_pass = "1234"

//kita akan nangkap value user
var email = document.getElementById('email').value
var password = document.getElementById('password').value


if (def_email === email && def_pass === password) {
    alert('login berhasil')
    window.location.href = 'home.html'
}else {
    alert('login gagal')
}



}