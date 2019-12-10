/* eslint-disable linebreak-style */

/* linking service */

const links = document.querySelectorAll('.sidebar__row');
const articles = document.querySelectorAll('.content-container');
const sidebarClassList = document.querySelectorAll('.section-sidebar');
const hamburger = document.querySelector('.topbar-hamburger-wrapper');

for(let link of links) {
  link.classList.remove('row-active');
  link.addEventListener('click', function() {
    const clickedElement = this;
    
    const linkId = link.getAttribute('data-link');
    
    for(let article of articles) {
      const articleId = article.getAttribute('id');
      
      if(linkId == articleId) {
        article.classList.add('content-container--active');
      } else {
        article.classList.remove('content-container--active');
      }
      
    }
    
    if(sidebarClassList[0].classList.contains('sidebar-active') == true) {
      sidebarClassList[0].classList.toggle('sidebar-active');
    }
    for(let link of links) {
      if (link == clickedElement) {
        clickedElement.classList.add('row-active');
      } else {link.classList.remove('row-active');
      }
    }
  });  
}

/* hamburger handling */

hamburger.addEventListener('click', function() {
  document.querySelector('.section-sidebar').classList.toggle('sidebar-active');
});

/* modal script */

function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.querySelector('#modal_chat').addEventListener('click', function(e) {
  if(e.target === this) {
    openModal('#myModal');
  }
});

/* messages */
let txtToSend = '';
function sendTxtFromInput() {
  let txtFromInput = document.querySelector('.modal-chat-input');
  
  let txtHtml = '<div class="modal-chat-new-line-me"> Me: ' + txtFromInput.value + '</div>';
  txtToSend = txtToSend + txtHtml;
  document.querySelector('.modal-chat-inner').innerHTML = txtToSend;
  txtFromInput.value = '';
  
  
}

function sendAnswer() {

  txtToSend = txtToSend + '<div class="modal-chat-new-line-manager">Michael E.:  po spotkaniu ci odpiszę</div>';
  document.querySelector('.modal-chat-inner').innerHTML = txtToSend;
}

document.querySelector('.modal-chat-submit').addEventListener('click', function () {
  sendTxtFromInput();
  setTimeout(sendAnswer, 3000);
});

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 13) {
    sendTxtFromInput();
    setTimeout(sendAnswer, 3000);
  }
});

/* graph */

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});