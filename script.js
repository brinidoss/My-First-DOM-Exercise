function main () {
    //TASK ONE
    const growMe = document.getElementById("grow-me");
    growMe.classList.add('big');

    //TASK TWO
    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');

    //TASK THREE
    const listItems = document.querySelectorAll('li');
    listItems.forEach((listItems) => {
        console.log(listItems);
    })

    //TASK FOUR
    const link = document.querySelector('.link');
    link.setAttribute('href', 'http://example.com');
    link.innerText = 'somewhere';
    
    //TASK FIVE
    const hideMe = document.getElementById('hide-me');
    hideMe.style.display = 'none';

    //TASK SIX
    const showMe = document.getElementById('show-me');
    showMe.style.display = 'block';

    //TASK SEVEN
    const userName = document.querySelector('input').value;
    const welcome = document.querySelector('h1');
    welcome.innerText = `Welcome, ${userName}`;
   

    
};

//main();

