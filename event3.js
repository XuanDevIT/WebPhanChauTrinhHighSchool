//! Toogle navbar
document.addEventListener('click', e => {
    const dropdownBtn = e.target.matches('[data-dropdown-button]');

//* Nếu bấm vào nội dung bên trong dropdown thì return
    if(!dropdownBtn && e.target.closest('[data-dropdown]')) return

//* Nếu bấm vô nút dropdown thì toggle class active
    let openDropdown
    if(dropdownBtn){
        openDropdown = e.target.closest('[data-dropdown]');
        openDropdown.classList.toggle('active');
    }

//* Remove class active của các dropdown nếu nó đang không active
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === openDropdown) return
        else{
            dropdown.classList.remove('active');
        }
    });
});


//! Search
const content = document.getElementById('content')
const searchBlock = document.getElementById('search-block');
const searchBtn = document.getElementById('search-btn');

//* Bấm vào nút search
searchBtn.addEventListener('click', function(){
    searchBlock.classList.add('show');
    content.style.filter = 'blur(7px)';
    console.log(content)
});
searchBlock.addEventListener('click', e => {

//* Nếu khác phần đen bên ngoài và bấm vào nội dung bên trong thì return
    if(!searchBlock && e.target.matches('[data-search-content]')){
        return
    }

//* Nếu bấm vào phần đen thì remove class show
    if(e.target.matches('[data-search]')){
        searchBlock.classList.remove('show');
        content.style.filter = 'blur(0)';
    }
});


//! Form
const eye = document.getElementById('eyeclose');
const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('password');
//* Toggle hiển thị mật khẩu
eye.onclick = function(){
    if (pass.type == 'password'){
        pass.type = 'text';
        eye.src = 'images/eye.png';
    }
    else{
        pass.type = 'password';
        eye.src = 'images/visibility-off.png';
    };
};


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput(); //*Validate form
});

//* Không thỏa mãn form
const setError = (element, message) => {
    const box = element.parentElement;
    const errordisplay = box.querySelector('.error');

    errordisplay.innerText = message;
    box.classList.add('error');
};

//* Thỏa mãn form
const setSuccess = element => {
    const box = element.parentElement;
    const errordisplay = box.querySelector('.error');

    errordisplay.innerText = '';
    box.classList.remove('error');
};


const validateInput = () => {
    if (email.value === ''){
        setError(email, '*Vui lòng nhập Email');
    }
    else{
        setSuccess(email);
    }

    if (pass.value === ''){
        setError(pass, '*Vui lòng nhập mật khẩu');
    }
    else if (pass.value.length < 6){
        setError(pass, '*Mật khẩu phải chứa tối thiểu 6 kí tự')
    }
    else{
        setSuccess(pass);
    }
};







