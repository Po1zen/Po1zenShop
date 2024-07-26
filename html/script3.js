document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceName = this.getAttribute('data-service');
            alert(`Ви обрали послугу: ${serviceName}. Зв'яжіться з нами для уточнення деталей.`);
        });
    });
});