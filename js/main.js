const menuBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const aside = document.querySelector('.aside');

const showMoreCardsBtn = document.querySelector('button.show-more');
const hiddenCards = document.querySelectorAll('.item-link--hidden');

const widgets = document.querySelectorAll('.widget');

const checkboxAny = document.querySelector('#loc-5');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param');

const showMoreOptionsBtn = document.querySelector('.widget__show-hidden');
const hiddenOptions = document.querySelectorAll('.checkbox--hidden');


// NodeList.prototype.forEach() polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// show-hide aside
menuBtn.onclick = function() {
    menuIcon.classList.toggle('menu-icon-active');
    aside.classList.toggle('aside--mobile-active');
}

// add opacity on menu icon when scrolling
window.addEventListener('scroll', function() {
    if (this.pageYOffset > 20) {
        menuBtn.classList.add('scroll');
    } else {
        menuBtn.classList.remove('scroll');
    }
});

// show hidden cards and hide show more button
showMoreCardsBtn.onclick = function() {
    showMoreCardsBtn.classList.add('show-more--hide');
    hiddenCards.forEach(function(card) {
        card.classList.remove('item-link--hidden');
    })
}

// hide-show widgets
widgets.forEach(function (widget) {
    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

// metro widget if click on 'any' button other buttons reset
checkboxAny.addEventListener('change', function() {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
    }
})

// metro widget if click on 'other' buttons 'any' button reset
topLocationCheckboxes.forEach(function(item) {
    item.addEventListener('change', function() {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
})

// show 3 more options
showMoreOptionsBtn.onclick = function() {
    if (showMoreOptionsBtn.dataset.options == 'hidden') {
        hiddenOptions.forEach(function(option) {
            option.style.display = 'block';
        })
        showMoreOptionsBtn.innerText = 'Скрыть';
        showMoreOptionsBtn.dataset.options = 'visible'
    } 
    else if (showMoreOptionsBtn.dataset.options == 'visible') {
        hiddenOptions.forEach(function(option) {
            option.style.display = 'none';
        })
        showMoreOptionsBtn.innerText = 'Показать еще';
        showMoreOptionsBtn.dataset.options = 'hidden'
    }
}