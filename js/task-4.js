const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault(); 
    
  const elements = form.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
      }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  form.reset();
});

