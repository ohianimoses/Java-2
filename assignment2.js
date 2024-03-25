let items = [
  {
    Username: 'DaGuy',
    Passcode: '27300',
    id: 2015,
    img: './austine.jpg',
  },
  {
    Username: 'Viet',
    Passcode: '99577',
    id: 2073,
    img: './ohiani.jpg',
  },
  {
    Username: 'Estelle',
    Passcode: '70434',
    id: 1033,
    img: './austine.jpg',
  },
  {
    Username: 'Jay',
    Passcode: '69377',
    id: 5008,
    img: './austine.jpg',
  },
  {
    Username: 'Kelly',
    Passcode: '63000',
    id: 7139,
    img: './ohiani.jpg',
  },
  {
    Username: 'Doradons',
    Passcode: '68377',
    id: 3936,
    img: './austine.jpg',
  },
  {
    Username: 'VickkyVal',
    Passcode: '94245',
    id: 3717,
    img: './ohiani.jpg',
  },
  {
    Username: 'Chiddyfyne',
    Passcode: '00006',
    id: 3078,
    img: './austine.jpg',
  },
  {
    Username: 'VictorSam',
    Passcode: '68377',
    id: 8013,
    img: './ohiani.jpg',
  },
  {
    Username: 'Prince',
    Passcode: '70610',
    id: 1201,
    img: './austine.jpg',
  },
  {
    Username: 'AdornJP',
    Passcode: '12911',
    id: 1411,
    img: './ohiani.jpg',
  },
  {
    Username: 'ID_Man',
    Passcode: '37497',
    id: 1491,
    img: './austine.jpg',
  },
  {
    Username: 'James',
    Passcode: '70434',
    id: 1551,
    img: './ohiani.jpg',
  },
  {
    Username: 'Wisdom',
    Passcode: '02587',
    id: 1731,
    img: './austine.jpg',
  },
  {
    Username: 'Skyline',
    Passcode: '00001',
    id: 1091,
    img: './ohiani.jpg',
  },
  {
    Username: 'SkyHigh',
    Passcode: '99577',
    id: 1244,
    img: './austine.jpg',
  },
];

function renderList() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  items.forEach((student, index) => {
    const studentDiv = document.createElement('div');
    studentDiv.innerHTML = `
      <div class="card mt-4">
        <div class="index">${index + 1}</div>
        <div class="card-body">
          <img src=${student.img} alt=${student.Username}/>
          <h3 class="card-title" id="name">Username: ${student.Username}</h3>
          <p class="card-text">Passcode: ${student.Passcode}</p>
          <p class="card-text" id="userId">User ID: ${student.id}</p>
        </div>
    </div>`;
    itemList.appendChild(studentDiv);
  });
}

// Function to remove object by ID
function removeObjectById(array, idToRemove) {
  return items.filter((obj) => obj.id !== idToRemove);
}

// Function to handle button click
document.getElementById('rmvbtn').addEventListener('click', function () {
  let idToRemove = Number(prompt('Enter User ID')); // ID of the object to remove
  items = removeObjectById(items, idToRemove);
  renderList(items);
});

renderList();
