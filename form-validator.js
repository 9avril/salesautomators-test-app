document.addEventListener('DOMContentLoaded', () => {
    const createJobButton = document.querySelector('#create-job');
    const clientDetailsInputs = document.querySelectorAll('.client-details input:not([optional])');
    const addressInput = document.querySelector('.service-location input[placeholder="Address"]');

    const addHighlight = input => input.classList.add('highlight');
    const removeHighlight = input => input.classList.remove('highlight');
    const setCustomValidityMessage = (input, message) => input.setCustomValidity(message);

    const isInputValid = input => {
        if (input.value.trim() === '') {
            if (input.hasAttribute('optional')) {
                return true; // Пропускаем проверку для необязательных полей
            }
            addHighlight(input);
            setCustomValidityMessage(input, 'Please fill out this field');
            return false;
        } else {
            removeHighlight(input);
            setCustomValidityMessage(input, '');
            return true;
        }
    };

    const checkInputsValidity = () => {
        const allInputs = [...clientDetailsInputs, addressInput];
        return allInputs.every(isInputValid);
    };

    createJobButton.addEventListener('click', (event) => {
        event.preventDefault()
        if (checkInputsValidity()) {
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                Phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zipCode: document.getElementById('zip_code').value,
                area: document.getElementById('area-select').value,
                jobType: document.getElementById('job_type').value,
                jobSource: document.getElementById('job_source').value,
                jobDesc: document.getElementById('job_description').value,
                startDate: document.getElementById('start_date').value,
                startTime: document.getElementById('start_time').value,
                endTime: document.getElementById('end_time').value,
                Technician: document.getElementById('select_tech').value
            };

            createPipedriveDeal(formData);
        }
    });
});
