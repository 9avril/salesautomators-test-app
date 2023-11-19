function createPipedriveDeal(data) {
    const url = 'https://gsu.pipedrive.com/api/v1/deals?api_token=fe126f783a0fd7a124c9c8f251d6cc53dc075fb0';

    if (!data.firstName || !data.lastName || !data.Phone || !data.address) {
        console.error("All required fields must be filled.");
        return;
    }

    let pipedriveData = {
        title: data.firstName + ' ' + data.lastName,
        '02b8b3b7a075f5b2a2963ddcb87aa246f3e45968': data.Phone,
        '8989215c6233c68d9cb1728da8ed09118e7239b3': data.email || '',
        'b2b8b515f5d44ff026cdc23fbc0c3d0d5ea855fe': data.address,
        '29b614ab2fd1bb8261ded10303c29ecb9ffdc1e4': data.city || '',
        '65d370a7e6254e9e0b358cf452109795b89b5f55': data.state || '',
        '250bfc4428b8d8951935bc11fcd7ebb326cc8c9b': data.zipCode || '',
        'ad16b56dce95a5fdfed75b584ddf14232b7c160e': data.area || '',
        '11330bd1d12c38f08107bfa9e6aacdf92ea1f173': data.jobType || '',
        '5a16ec07db616b9182aeb8203496df77215f4015': data.jobSource || '',
        '85007edc35a88e2d4292728ffc0d39e7ba5c6522': data.jobDesc || '',
        'd1e5b04f0f27df004afb05339cc0e6abfe2b0ae9': data.startDate || '',
        'e27a4e58d6b3bcf7a93e9ad999c2fad696e0c049': data.startTime || '',
        'c89d9135c7a8d2a2949c8630e86373fa7cf7d60d': data.endTime || '',
        '7e97081e237f455418b2a2c0baaf101c18656d79': data.Technician || ''
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
            if (data.success && data.data.id) {
                updateModalWithSuccessMessage(data.data.id);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function updateModalWithSuccessMessage(dealId) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="success-message" style="font-family: 'Inter', sans-serif">
            <p>Job is created!</p>
            <a href="https://gsu.pipedrive.com/deal/${dealId}" target="_blank">View</a>
        </div>
        
    `;
}
