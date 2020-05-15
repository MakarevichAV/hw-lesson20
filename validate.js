let baseOfLogins = ['beeline', 'beeinterns', 'bee'];

function validate(data) {
    const { login, 
            password, 
            confirmPassword, 
            license, 
            firstName,
            gender } = data;

    baseOfLogins.forEach((value) => {
        if (login === value) {
            alert('Логин занят');
        }
    });

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!firstName) {
        alert('Укажите Ваше Имя');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        let intro = 'Уважаемая';
        if (gender === 'male') {
            intro = 'Уважаемый'
        }
        alert(`${intro} ${firstName}, заявка создана`);
    }
}
