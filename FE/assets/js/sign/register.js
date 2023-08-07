function formRegister() {
    let str = `
            <div class="login-card">
            <div class="login-card-logo">
                <img src="../assets/css/sign/logo.png" alt="logo">
            </div>
            <div class="login-card-header">
                <h1>Đăng ký</h1>
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
                <button onclick="register()" type="submit">Đăng ký</button>
            </div>
        </div>
        `;
    document.getElementById(`login`).innerHTML = str;
}

async function register() {
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    try {
        const res = await axios.post('http://localhost:3000/register', data);
        const token = res.data;
        console.log(token);

        if (token) {
            formLogin(); 
            alert('Đăng ký thành công!')
        }

    } catch (error) {
        console.error(error);
    }
}

