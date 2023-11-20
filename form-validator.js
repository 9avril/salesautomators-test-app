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
                return true;
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
        event.preventDefault();
        if (checkInputsValidity()) {
            const getVal = id => document.getElementById(id).value;
            const formData = {
                firstName: getVal('firstName'),
                lastName: getVal('lastName'),
                Phone: getVal('phone'),
                email: getVal('email'),
                address: getVal('address'),
                city: getVal('city'),
                state: getVal('state'),
                zipCode: getVal('zip_code'),
                area: getVal('area-select'),
                jobType: getVal('job_type'),
                jobSource: getVal('job_source'),
                jobDesc: getVal('job_description'),
                startDate: getVal('start_date'),
                startTime: getVal('start_time'),
                endTime: getVal('end_time'),
                Technician: getVal('select_tech')
            };
            createPipedriveDeal(formData);
        }
    });

});