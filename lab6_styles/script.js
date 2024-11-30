document.getElementById('loadData').addEventListener('click', () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const users = data.results;
            const userContainer = document.getElementById('userContainer');
            userContainer.innerHTML = ''; // Очищаємо контейнер перед новими даними

            users.forEach(user => {
                // Створюємо картку користувача
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                // Додаємо дані до картки
                userCard.innerHTML = `
                    <img src="${user.picture.large}" alt="User Picture">
                    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                    <p><strong>Country:</strong> ${user.location.country}</p>
                    <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
});
