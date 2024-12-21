function myFunction(x) {
    x.classList.toggle("change");
  }
  function sendForm() {
    var selectedServices = [];
    var selectedBudget = '';
    var serviceBtns = document.querySelectorAll('.service-btn3.active');
    serviceBtns.forEach(function(btn) {
        selectedServices.push(btn.textContent);
    });
    var budgetBtns = document.querySelectorAll('.budget .service-btn3.active');
    if (budgetBtns.length > 0) {
        selectedBudget = budgetBtns[0].textContent;
    }
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var projectDetails = document.getElementById('project-details').value;
    var formData = {
        name: name,
        email: email,
        selectedServices: selectedServices,
        selectedBudget: selectedBudget,
        projectDetails: projectDetails
    };
    console.log(formData);
    var sentMessage = document.createElement('div');
    sentMessage.textContent = 'Message sent!';
    sentMessage.classList.add('sent-message');
    document.body.appendChild(sentMessage);
    setTimeout(function() {
        document.body.removeChild(sentMessage);
        window.location.href = "";
    }, 3000);
    return false;
}



function filterLogos(category) {
    var logos = document.querySelectorAll('.swiper-slide');

    if (category === 'all') {
        logos.forEach(function(logo) {
            logo.style.display = 'block';
        });
    } else {
        logos.forEach(function(logo) {
            if (logo.classList.contains(category)) {
                logo.style.display = 'block';
            } else {
                logo.style.display = 'none';
            }
        });
    }
    var buttons = document.querySelectorAll('.discuss-btn3');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.querySelector('.discuss-btn3.' + category).classList.add('active');
}