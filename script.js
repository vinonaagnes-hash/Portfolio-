document.getElementById('learn-more').addEventListener('click', () => {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    const responseDiv = document.getElementById('form-response');
    responseDiv.innerText = `Thank you, ${name}! Your message has been sent.`;
    e.target.reset();
});
