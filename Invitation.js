  function showForm() {
            // При кліку на кнопку відображаємо форму
            document.getElementById('confirmationForm').style.display = 'block';
        }

        function submitForm(event) {
            // Зупиняємо стандартну подію відправки форми, щоб сторінка не перезавантажувалася
            event.preventDefault();

            // Отримуємо дані з форми
            var fullName = document.getElementById('fullName').value;
            var address = document.getElementById('address').value;


            // Очищаємо форму та ховаємо її
            document.getElementById('userDataForm').reset();
            document.getElementById('confirmationForm').style.display = 'none';
        }