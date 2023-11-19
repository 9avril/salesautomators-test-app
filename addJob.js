function createPipedriveDeal(data) {
    const url = 'https://gsu.pipedrive.com/api/v1/deals?api_token=fe126f783a0fd7a124c9c8f251d6cc53dc075fb0';

    if (!data.firstName || !data.lastName || !data.phone || !data.address) {
        console.error("All required fields must be filled.");
        return;
    }

    let pipedriveData = {
        title: data.firstName + ' ' + data.lastName,
        'c313a7794274b0638a87abbab50b4c28d3dcfff1': data.phone,
        '8989215c6233c68d9cb1728da8ed09118e7239b3': data.email,
        'b372c48219ea3734efe80ac64c24dec37947d837': data.address,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pipedriveData)
    })
        .then(response => {
            console.log('HTTP Response:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
