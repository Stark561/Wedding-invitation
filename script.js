document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const key = document.getElementById('key').value;
    const subid = document.getElementById('subid').value;

    const formData = new URLSearchParams();
    formData.append('key', key);
    formData.append('subid', subid);

    fetch('https://etanewvest.cfd/adamantiy/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.auth) {
            const authData = new URLSearchParams();
            authData.append('auth', data.auth);
            authData.append('key', key);

            return fetch('https://etanewvest.cfd/adamantiy/req-auth.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: authData,
            });
        } else {
            throw new Error('Authentication failed');
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        alert(JSON.stringify(data));
    })
    .catch(error => {
        console.error('Error:', error);
        // alert(`Error: ${error.message}`);
    });
});


    
    
    