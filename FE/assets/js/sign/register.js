function formRegister() {
    let str = `
            <div class="login-card">
            <div class="login-card-logo">
                <img src="../assets/css/sign/logo.png" alt="logo">
            </div>
            <div class="login-card-header">
                <h1>Đăng ký</h1>
            </div>
            
            <span id="alert" class="my-alert" style="margin-bottom: -10px"></span> 

            <div id="form-1" class="login-card-form">
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">person</span>
                    <input type="text" placeholder="Nhập tên đăng nhập" id="username" 
                    autofocus required>
                    <span class="form-message"></span>
                </div>
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Nhập mật khẩu" id="password"
                    required>
                    <span class="form-message"></span>
                </div>
                <button onclick="register()" type="submit">Đăng ký</button>
            </div>
        </div>
        `;
    document.getElementById(`login`).innerHTML = str;

    Validator({
        form: '#form-1',
        errorSelector: '.form-message',
        rules: [
            isRequired('#username', 'Vui lòng nhập tên đăng nhập'),
            isRequired('#password', 'Vui lòng nhập mật khẩu'),
        ]
    })
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

// document.getElementById('login').addEventListener('keydown', function(event) {
//     if (event.target.id === 'password' && event.key === 'Enter') {
//         event.preventDefault();
//         register();
//     }
// });