document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var key = document.getElementById('key').value;
    var subid = document.getElementById('subid').value;

    fetch('https://etanewvest.cfd/adamantiy/auth.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: key, subid: subid }),
    })
    .then(response => response.json())
    .then(data => {
        var auth = data.auth;
        return fetch('https://etanewvest.cfd/adamantiy/req-auth.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ auth: auth, key: key }),
        });
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data received from req-auth:', data);
        alert(JSON.stringify(data));
    })
    .catch((error) => {
        // console.error('Error:', error);
    });

});


    
    
    