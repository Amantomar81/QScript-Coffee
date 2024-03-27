document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
 
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
    alert('Thank you for your message! We will get back to you soon.');
  });
  