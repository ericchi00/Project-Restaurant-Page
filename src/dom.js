const dom = (() => {
    const contentWrapper = document.querySelector('#contentWrapper');
    const header = document.createElement('header');
    const content = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const footer = document.createElement('footer');


    homeButton.classList.add('home');
    menuButton.classList.add('menu');
    contactButton.classList.add('contact');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    footer.innerHTML = 'Built by <a href="https://github.com/ericchi00">Eric Chi</a>';

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);


    content.classList.add('content');
    contentWrapper.appendChild(header);
    contentWrapper.appendChild(content);
    contentWrapper.appendChild(footer);
    return { content }
})()


import Beer from '/src/images/beer.jpeg';
import Water from '/src/images/water.jpeg';
import Fries from '/src/images/fries.jpeg';
import Banchan from '/src/images/banchan.jpeg';
import Sushi from '/src/images/sushi.jpeg';
import Curry from '/src/images/curry.jpeg';
import SpringRoll from '/src/images/springroll.jpeg';
import { appendChild } from 'domutils';

const homePage = (() => {

    function createHomePage() {
        const title = document.createElement('div');
        const summary = document.createElement('div');
        const hours = document.createElement('div');
        const hoursTitle = document.createElement('h2');
        const location = document.createElement('div');
        const locationTitle = document.createElement('h2');
        const locationContent = document.createElement('p');

        const unorderedList = document.createElement('ul');
        const list1 = document.createElement('li');
        list1.textContent = 'Monday: 12pm - 8pm';
        const list2 = document.createElement('li');
        list2.textContent = 'Tuesday: 12pm - 8pm';
        const list3 = document.createElement('li');
        list3.textContent = 'Wednesday: 12pm - 8pm';
        const list4 = document.createElement('li');
        list4.textContent = 'Thursday: 12pm - 8pm';
        const list5 = document.createElement('li');
        list5.textContent = 'Friday: 12pm - 8pm';
        const list6 = document.createElement('li');
        list6.textContent = 'Saturday: 3pm - 3am';
        const list7 = document.createElement('li');
        list7.textContent = 'Sunday: 3pm - 3am';


        title.classList.add('title');
        summary.classList.add('summary');
        hours.classList.add('hours');
        location.classList.add('location');


        title.textContent = 'Fictional Restaurant Page';
        summary.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Pellentesque sit amet porttitor eget. Phasellus vestibulum lorem sed risus ultricies tristique. Lectus nulla at volutpat diam ut venenatis tellus. Vitae tempus quam pellentesque nec nam aliquam. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Donec ac odio tempor orci dapibus ultrices in. Ultrices mi tempus imperdiet nulla. Etiam dignissim diam quis enim lobortis scelerisque. Nunc non blandit massa enim nec dui nunc mattis. Dignissim convallis aenean et tortor. Fusce ut placerat orci nulla.";
        hoursTitle.textContent = 'Hours';
        locationTitle.textContent = 'Location';
        locationContent.textContent = 'P. Sherman 42 Wallaby Way, Sydney, Australia'

        unorderedList.appendChild(list1);
        unorderedList.appendChild(list2);
        unorderedList.appendChild(list3);
        unorderedList.appendChild(list4);
        unorderedList.appendChild(list5);
        unorderedList.appendChild(list6);
        unorderedList.appendChild(list7);


        hours.prepend(hoursTitle);
        hours.appendChild(unorderedList);
        location.prepend(locationTitle);
        location.appendChild(locationContent);
        dom.content.appendChild(title);
        dom.content.appendChild(summary);
        dom.content.appendChild(hours);
        dom.content.appendChild(location);
    }
    return {createHomePage}
})()

const menuPage = (() => {

    function createMenuPage() {
        const template = document.querySelector('#menuCard');
        const beverage1 = template.content.cloneNode(true);
        beverage1.querySelector('h3').textContent = 'Water';
        beverage1.querySelector('#summary').textContent = 'Ice cold and refreshing, favorite drink.';
        beverage1.querySelector('#price').textContent = 'Free';
        beverage1.querySelector('#image').src = Water;


        const beverage2 = template.content.cloneNode(true);
        beverage2.querySelector('h3').textContent = 'Flavored Taiwanese Beer';
        beverage2.querySelector('#summary').textContent = "Picture is not the actual image but I really like the Lychee flavor and the pineapple flavor. Don't know the actual brand but a Google search can bring it up.";
        beverage2.querySelector('#price').textContent = '$10 for a pack of 6';
        beverage2.querySelector('#image').src = Beer;

        const sides1 = template.content.cloneNode(true);
        sides1.querySelector('h3').textContent = 'Fries';
        sides1.querySelector('#summary').textContent = "I really like fries. McDonald fries are probably my favorite.";
        sides1.querySelector('#price').textContent = '$1 through app';
        sides1.querySelector('#image').src = Fries;

        const sides2 = template.content.cloneNode(true);
        sides2.querySelector('h3').textContent = 'Korean Banchan';
        sides2.querySelector('#summary').textContent = 'I love eating the banchan when you eat at a Korean restaurant. So tasty.';
        sides2.querySelector('#price').textContent = 'Free usually or included in meal';
        sides2.querySelector('#image').src = Banchan;

        const main1 = template.content.cloneNode(true);
        main1.querySelector('h3').textContent = 'Sushi';
        main1.querySelector('#summary').textContent = "I love eating all and every kind of sushi. Sashimi is my favorite.";
        main1.querySelector('#price').textContent = '$30+';
        main1.querySelector('#image').src = Sushi;

        const main2 = template.content.cloneNode(true);
        main2.querySelector('h3').textContent = 'Curry';
        main2.querySelector('#summary').textContent = "I love all kinds of curry.";
        main2.querySelector('#price').textContent = '$10';
        main2.querySelector('#image').src = Curry;

        const main3 = template.content.cloneNode(true);
        main3.querySelector('h3').textContent = 'Spring Roll';
        main3.querySelector('#summary').textContent = "These are really good with peanut sauce.";
        main3.querySelector('#price').textContent = '$10';
        main3.querySelector('#image').src = SpringRoll;





        const menu = document.createElement('div');
        menu.classList.add('menu');
        const menuTitle = document.createElement('h1');
        menuTitle.textContent = "Menu";
        menu.prepend(menuTitle);

        const beverages = document.createElement('div');
        beverages.classList.add('beverages');
        const beveragesTitle = document.createElement('h2');
        beveragesTitle.textContent = 'Beverages'
        beverages.prepend(beveragesTitle);

        const sides = document.createElement('div');
        sides.classList.add('sides');
        const sidesTitle = document.createElement('h2');
        sidesTitle.textContent = 'Sides';
        sides.prepend(sidesTitle);

        const mains = document.createElement('div');
        mains.classList.add('mains');
        const mainsTitle = document.createElement('h2');
        mainsTitle.textContent = 'Main Dish';
        mains.prepend(mainsTitle);



        beverages.appendChild(beverage1);
        beverages.appendChild(beverage2);
        sides.appendChild(sides1);
        sides.appendChild(sides2);
        mains.appendChild(main1);
        mains.appendChild(main2);
        mains.appendChild(main3);
        dom.content.appendChild(menu);
        dom.content.appendChild(beverages);
        dom.content.appendChild(sides);
        dom.content.appendChild(mains);
    }
    return {createMenuPage}
})()

const contactPage = (() => {
    function createContactPage() {
        const contact = document.createElement('div');
        const contactTitle = document.createElement('h3');
        contactTitle.textContent = 'Contact Us';
        contact.classList.add('contact');

        const contactBody = document.createElement('div');
        const ul = document.createElement('ul');
        const list1 = document.createElement('li');
        list1.textContent = 'Owner';
        const list2 = document.createElement('li');
        list2.textContent = 'Eric Chi';
        const list3 = document.createElement('li');
        list3.textContent = 'fakeEmail@fakeEmail.com';


        ul.appendChild(list1);
        ul.appendChild(list2);
        ul.appendChild(list3);
        contact.appendChild(ul);
        contact.prepend(contactTitle);
        dom.content.appendChild(contact);
    }
        return {createContactPage}
})()

export { dom, homePage, menuPage, contactPage }