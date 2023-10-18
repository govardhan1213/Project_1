const pro = document.querySelector('.My-Profile');
const profileIcon = document.getElementById('profile');

profileIcon.addEventListener('click', function () {
    if (pro.style.display === 'none' || pro.style.display === '') {
        pro.style.display = 'block';
    } else {
        pro.style.display = 'none';
    }
});