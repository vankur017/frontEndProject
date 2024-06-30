const guest_detail_page = document.getElementById('main');

const guest_screen_login = document.getElementById('guest-login-btn');

guest_screen_login.addEventListener('click', function(){
    guest_detail_page.remove();
    window.location.href = 'c.html'
})
