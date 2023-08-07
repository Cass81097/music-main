document.addEventListener('DOMContentLoaded', () => {
    formLogin();
});

function formLogin() {
    let str = `
                <div class="login-card">
                <div class="login-card-logo">
                    <img src="../assets/css/sign/logo.png" alt="logo">
                </div>
                <div class="login-card-header">
                    <h1>Đăng nhập</h1>
                </div>
                <div class="login-card-form">
                    <div class="form-item">
                        <span class="form-item-icon material-symbols-rounded">person</span>
                        <input type="text" placeholder="Nhập Username" id="username" 
                        autofocus required>
                    </div>
                    <div class="form-item">
                        <span class="form-item-icon material-symbols-rounded">lock</span>
                        <input type="password" placeholder="Nhập mật khẩu" id="password"
                        required>
                    </div>
                    <div class="form-item-other">
                        <div class="checkbox">
                            <input type="checkbox" id="rememberMeCheckbox" checked>
                            <label for="rememberMeCheckbox">Ghi nhớ đăng nhập</label>
                        </div>
                        <a href="#">Quên mật khẩu!</a>
                    </div>
                    <button onclick="login()" type="submit">Đăng nhập</button>
                </div>
                <div class="login-card-footer">
                    Bạn không có tài khoản? <a href="#" onclick="formRegister()">Đăng ký ngay.</a>
                </div>
            </div>
        `;

    document.getElementById(`login`).innerHTML = str;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

async function login() {
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    try {
        const res = await axios.post('http://localhost:3000/login', data);
        const token = res.data;
        
        if (token == 'User does not exist') {
            alert('Sai tên đăng nhập hoặc mật khẩu!')
        } else {
            alert('Đăng nhập thành công!')
            setCookie('userId', token, 7);
            window.location.href = './home.html'; 
        }

    } catch (error) {
        console.error(error);

    }
}
