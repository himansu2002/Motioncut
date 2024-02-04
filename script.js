document.addEventListener('DOMContentLoaded', function () {
    const plans = document.querySelectorAll('.plan');
    const paymentDetails = document.getElementById('payment-details');
  
    plans.forEach(plan => {
      plan.addEventListener('click', () => {
        alert(`You selected the ${plan.dataset.plan} plan.`);
        paymentDetails.style.display = 'block';
      });
    });
  });
  