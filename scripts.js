document.body.addEventListener('change', function (e) {
    let target = e.target;
    switch (target.id) {
        case 'noConsent':
            document.getElementById('response').classList.add('passed');
            document.getElementById('consent').parentNode.classList.remove('active');
            document.getElementById('noConsent').parentNode.classList.add('active');
            document.getElementById('method').classList.add('disabled');
            document.getElementById('method').classList.remove('passed');
            document.getElementById('voice').parentNode.classList.remove('active');
            document.getElementById('email').parentNode.classList.remove('active');
            document.getElementById('sms').parentNode.classList.remove('active');
            document.getElementById('code').classList.add('disabled');
            document.getElementById('btnVerify').disabled = false;
            break;

        case 'consent':
            document.getElementById('response').classList.add('passed');
            document.getElementById('method').classList.remove('disabled');
            document.getElementById('noConsent').parentNode.classList.remove('active');
            document.getElementById('consent').parentNode.classList.add('active');
            break;

        case 'sms':
            document.getElementById('method').classList.add('passed');
            document.getElementById('code').classList.remove('disabled');
            document.getElementById('voice').parentNode.classList.remove('active');
            document.getElementById('email').parentNode.classList.remove('active');
            document.getElementById('sms').parentNode.classList.add('active');
            //document.getElementById('btnVerify').disabled = false;
            break;
        
        case 'voice':
            document.getElementById('method').classList.add('passed');
            document.getElementById('code').classList.remove('disabled');
            document.getElementById('sms').parentNode.classList.remove('active');
            document.getElementById('email').parentNode.classList.remove('active');
            document.getElementById('voice').parentNode.classList.add('active');
            //document.getElementById('btnVerify').disabled = false;
            break;

        case 'email':
            document.getElementById('method').classList.add('passed');
            document.getElementById('code').classList.remove('disabled');
            document.getElementById('voice').parentNode.classList.remove('active');
            document.getElementById('sms').parentNode.classList.remove('active');
            document.getElementById('email').parentNode.classList.add('active');
            //document.getElementById('btnVerify').disabled = false;
            break;
    }
});

function checkLetters(inputValue) { 
    var numbers = /^\d+$/;
    if(inputValue.match(numbers)) {
        document.getElementById('code').classList.remove('error-val');
        document.getElementById('btnVerify').disabled = false;
        return true;
    }
    else {
        document.getElementById('code').classList.add('error-val');
        document.getElementById('btnVerify').disabled = true;
        return false;
    }
}

function verifyBtn() {
    document.getElementById('btnVerify').disabled = false;
}