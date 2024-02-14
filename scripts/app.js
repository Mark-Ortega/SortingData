const getData = async () =>{
    const promise = await fetch('data/data.json');
    const data = await promise.json();
    return data.People
}
getData();

// Sort By First Name

const nameSort1 = async () => {
    const peopleData = await getData();
    
    function compareValues(a, b) {
        if (a.FirstName < b.FirstName) {
            return -1
        }else if (a.FirstName > b.FirstName) {
            return 1
        }else{
            return 0
        }
    }
    let sortedNames = peopleData.sort(compareValues);
    console.log(sortedNames);




    
}
nameSort1();

// Sort by Last Name
const nameSort2 = async () => {
    const peopleData = await getData();
    
    function compareValues(a, b) {
        if (a.LastName < b.LastName) {
            return -1
        }else if (a.LastName > b.LastName) {
            return 1
        }else{
            return 0
        }
    }
    let sortedNames = peopleData.sort(compareValues);
    console.log(sortedNames);
}
nameSort2();

// Sort by ID
const idSort = async () => {
    const peopleData = await getData();
    
    peopleData.sort((a, b) => {
        return a.Id - b.Id
    })

    let sortedID = peopleData.sort()
    console.log(sortedID)
    
}
idSort();

// Sort by Height
const heightSort = async () => {
    const peopleData = await getData();
    
    function compareValues(a, b) {
        if (a.Height < b.Height) {
            return -1
        }else if (a.Height > b.Height) {
            return 1
        }else{
            return 0
        }
    }
    let sortedNames = peopleData.sort(compareValues);
    console.log(sortedNames);
    
}
heightSort();

// Sort by Age
const ageSort = async () => {
    const peopleData = await getData();
    
    peopleData.sort((a, b) => {
        return a.Age - b.Age
    })

    let sortedAge = peopleData.sort()
    console.log(sortedAge)
    
}
ageSort();


const tableData = [
    {
        "Id": 1,
        "FirstName": "Tina",
        "LastName": "Ahlering",
        "Email": "tahlering94@outlook.com",
        "Height": "50 inches",
        "Age": 26
    },
    {
        "Id": 2,
        "FirstName": "Roy",
        "LastName": "Blanco",
        "Email": "rblanco630@hotmail.com",
        "Height": "50 inches",
        "Age": 54
    },
    {
        "Id": 3,
        "FirstName": "Taylor",
        "LastName": "Adams",
        "Email": "tadams89@gmail.com",
        "Height": "50 inches",
        "Age": 57
    },
    {
        "Id": 4,
        "FirstName": "Victor",
        "LastName": "Berg",
        "Email": "vberg70@msn.com",
        "Height": "51 inches",
        "Age": 57
    },
    {
        "Id": 5,
        "FirstName": "Jada",
        "LastName": "Agcaoili",
        "Email": "jagcaoili94@outlook.com",
        "Height": "50 inches",
        "Age": 22
    },
    {
        "Id": 6,
        "FirstName": "Willie",
        "LastName": "Ault",
        "Email": "wault@outlook.com",
        "Height": "46 inches",
        "Age": 32
    },
    {
        "Id": 7,
        "FirstName": "Greg",
        "LastName": "Anand",
        "Email": "ganand94@outlook.com",
        "Height": "50 inches",
        "Age": 32
    },
    {
        "Id": 8,
        "FirstName": "Grace",
        "LastName": "Andersen",
        "Email": "gandersen89@gmail.com",
        "Height": "50 inches",
        "Age": 26
    },
    {
        "Id": 9,
        "FirstName": "Yolanda",
        "LastName": "Aguilar",
        "Email": "yaguilar@outlook.com",
        "Height": "47 inches",
        "Age": 28
    },
    {
        "Id": 10,
        "FirstName": "Victoria",
        "LastName": "Bent",
        "Email": "vbent820@bhaktaverse.com",
        "Height": "46 inches",
        "Age": 52
    },
    {
        "Id": 11,
        "FirstName": "Taylor",
        "LastName": "Archer",
        "Email": "tarcher94@outlook.com",
        "Height": "50 inches",
        "Age": 44
    },
    {
        "Id": 12,
        "FirstName": "Felicia",
        "LastName": "Benson",
        "Email": "fbenson545@yahoo.com",
        "Height": "50 inches",
        "Age": 51
    },
    {
        "Id": 13,
        "FirstName": "Zheng",
        "LastName": "Amland",
        "Email": "zamland@outlook.com",
        "Height": "57 inches",
        "Age": 27
    },
    {
        "Id": 14,
        "FirstName": "Yuhong",
        "LastName": "Baker",
        "Email": "ybaker630@hotmail.com",
        "Height": "50 inches",
        "Age": 54
    },
    {
        "Id": 15,
        "FirstName": "Paige",
        "LastName": "Bendixen",
        "Email": "pbendixen94@outlook.com",
        "Height": "50 inches",
        "Age": 21
    },
    {
        "Id": 16,
        "FirstName": "Karla",
        "LastName": "Barker",
        "Email": "kbarker70@msn.com",
        "Height": "50 inches",
        "Age": 40
    },
    {
        "Id": 17,
        "FirstName": "Jordan",
        "LastName": "Benson",
        "Email": "jbenson630@hotmail.com",
        "Height": "50 inches",
        "Age": 38
    },
    {
        "Id": 18,
        "FirstName": "Craig",
        "LastName": "Bhat",
        "Email": "cbhat70@msn.com",
        "Height": "50 inches",
        "Age": 47
    },
    {
        "Id": 19,
        "FirstName": "Xavier",
        "LastName": "Bell",
        "Email": "xbell@hotmail.com",
        "Height": "50 inches",
        "Age": 47
    },
    {
        "Id": 20,
        "FirstName": "Kelli",
        "LastName": "Becker",
        "Email": "kbecker@hotmail.com",
        "Height": "50 inches",
        "Age": 30
    },
    {
        "Id": 21,
        "FirstName": "Carol",
        "LastName": "Beck",
        "Email": "cbeck@hotmail.com",
        "Height": "50 inches",
        "Age": 50
    },
    {
        "Id": 22,
        "FirstName": "Tabitha",
        "LastName": "Albrecht",
        "Email": "talbrecht@bhaktaverse.com",
        "Height": "46 inches",
        "Age": 55
    },
    {
        "Id": 23,
        "FirstName": "Qiang",
        "LastName": "Bell",
        "Email": "qbell@outlook.com",
        "Height": "47 inches",
        "Age": 28
    },
    {
        "Id": 24,
        "FirstName": "Olivia",
        "LastName": "Beebe",
        "Email": "obeebe94@outlook.com",
        "Height": "50 inches",
        "Age": 42
    },
    {
        "Id": 25,
        "FirstName": "Maciej",
        "LastName": "Abel",
        "Email": "mabel545@yahoo.com",
        "Height": "50 inches",
        "Age": 31
    },
    {
        "Id": 26,
        "FirstName": "Steven",
        "LastName": "Bernacchi",
        "Email": "sbernacchi@msn.com",
        "Height": "50 inches",
        "Age": 38
    },
    {
        "Id": 27,
        "FirstName": "Timothy",
        "LastName": "Appelbaum",
        "Email": "tappelbaum@outlook.com",
        "Height": "50 inches",
        "Age": 34
    },
    {
        "Id": 28,
        "FirstName": "Jamie",
        "LastName": "Barnes",
        "Email": "jbarnes545@yahoo.com",
        "Height": "50 inches",
        "Age": 22
    },
    {
        "Id": 29,
        "FirstName": "Gina",
        "LastName": "Andersen",
        "Email": "gandersen@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 55
    },
    {
        "Id": 30,
        "FirstName": "Brad",
        "LastName": "Beck",
        "Email": "bbeck@hotmail.com",
        "Height": "50 inches",
        "Age": 49
    },
    {
        "Id": 31,
        "FirstName": "Clayton",
        "LastName": "Alexander",
        "Email": "calexander820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 55
    },
    {
        "Id": 32,
        "FirstName": "Ivan",
        "LastName": "Alpuerto",
        "Email": "ialpuerto@msn.com",
        "Height": "45 inches",
        "Age": 59
    },
    {
        "Id": 33,
        "FirstName": "Barbara",
        "LastName": "Akers",
        "Email": "bakers@yahoo.com",
        "Height": "50 inches",
        "Age": 38
    },
    {
        "Id": 34,
        "FirstName": "Eric",
        "LastName": "Beebe",
        "Email": "ebeebe@outlook.com",
        "Height": "50 inches",
        "Age": 59
    },
    {
        "Id": 35,
        "FirstName": "Barry",
        "LastName": "Adams",
        "Email": "badams@gmail.com",
        "Height": "50 inches",
        "Age": 23
    },
    {
        "Id": 36,
        "FirstName": "Omar",
        "LastName": "Berg",
        "Email": "oberg70@msn.com",
        "Height": "47 inches",
        "Age": 57
    },
    {
        "Id": 37,
        "FirstName": "Olivia",
        "LastName": "Adams",
        "Email": "oadams820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 29
    },
    {
        "Id": 38,
        "FirstName": "Matthew",
        "LastName": "Bailey",
        "Email": "mbailey820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 47
    },
    {
        "Id": 39,
        "FirstName": "Hunter",
        "LastName": "Berge",
        "Email": "hberge70@msn.com",
        "Height": "50 inches",
        "Age": 47
    },
    {
        "Id": 40,
        "FirstName": "Xavier",
        "LastName": "Albrecht",
        "Email": "xalbrecht@msn.com",
        "Height": "56 inches",
        "Age": 52
    },
    {
        "Id": 41,
        "FirstName": "Virginia",
        "LastName": "Baker",
        "Email": "vbaker545@yahoo.com",
        "Height": "50 inches",
        "Age": 35
    },
    {
        "Id": 42,
        "FirstName": "Xavier",
        "LastName": "Ayers",
        "Email": "xayers630@hotmail.com",
        "Height": "54 inches",
        "Age": 28
    },
    {
        "Id": 43,
        "FirstName": "Logan",
        "LastName": "Bernacchi",
        "Email": "lbernacchi@gmail.com",
        "Height": "50 inches",
        "Age": 49
    },
    {
        "Id": 44,
        "FirstName": "Ethan",
        "LastName": "Akers",
        "Email": "eakers70@msn.com",
        "Height": "50 inches",
        "Age": 22
    },
    {
        "Id": 45,
        "FirstName": "Zachary",
        "LastName": "Bennetts",
        "Email": "zbennetts@bhaktaverse.com",
        "Height": "53 inches",
        "Age": 36
    },
    {
        "Id": 46,
        "FirstName": "Victoria",
        "LastName": "Baldwin",
        "Email": "vbaldwin@yahoo.com",
        "Height": "50 inches",
        "Age": 53
    },
    {
        "Id": 47,
        "FirstName": "Vamsi",
        "LastName": "Ben-Sachar",
        "Email": "vben-sachar@yahoo.com",
        "Height": "48 inches",
        "Age": 56
    },
    {
        "Id": 48,
        "FirstName": "Clarence",
        "LastName": "Allen",
        "Email": "callen@yahoo.com",
        "Height": "50 inches",
        "Age": 41
    },
    {
        "Id": 49,
        "FirstName": "Gabrielle",
        "LastName": "Avalos",
        "Email": "gavalos545@yahoo.com",
        "Height": "50 inches",
        "Age": 31
    },
    {
        "Id": 50,
        "FirstName": "Shannon",
        "LastName": "Berg",
        "Email": "sberg630@hotmail.com",
        "Height": "50 inches",
        "Age": 18
    },
    {
        "Id": 51,
        "FirstName": "Krista",
        "LastName": "Atkinson",
        "Email": "katkinson@gmail.com",
        "Height": "47 inches",
        "Age": 58
    },
    {
        "Id": 52,
        "FirstName": "Kaylee",
        "LastName": "Bacon",
        "Email": "kbacon@yahoo.com",
        "Height": "50 inches",
        "Age": 51
    },
    {
        "Id": 53,
        "FirstName": "Zachary",
        "LastName": "Bendixen",
        "Email": "zbendixen545@yahoo.com",
        "Height": "50 inches",
        "Age": 39
    },
    {
        "Id": 54,
        "FirstName": "Franklin",
        "LastName": "Antrim",
        "Email": "fantrim545@yahoo.com",
        "Height": "46 inches",
        "Age": 31
    },
    {
        "Id": 55,
        "FirstName": "Jose",
        "LastName": "Bankert",
        "Email": "jbankert820@bhaktaverse.com",
        "Height": "46 inches",
        "Age": 27
    },
    {
        "Id": 56,
        "FirstName": "Gabrielle",
        "LastName": "Acevedo",
        "Email": "gacevedo@gmail.com",
        "Height": "50 inches",
        "Age": 34
    },
    {
        "Id": 57,
        "FirstName": "Bianca",
        "LastName": "Alonso",
        "Email": "balonso@outlook.com",
        "Height": "50 inches",
        "Age": 31
    },
    {
        "Id": 58,
        "FirstName": "Olivia",
        "LastName": "Bates",
        "Email": "obates820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 30
    },
    {
        "Id": 59,
        "FirstName": "Greg",
        "LastName": "Ault",
        "Email": "gault@gmail.com",
        "Height": "50 inches",
        "Age": 50
    },
    {
        "Id": 60,
        "FirstName": "Peter",
        "LastName": "Alvarado",
        "Email": "palvarado@hotmail.com",
        "Height": "47 inches",
        "Age": 39
    },
    {
        "Id": 61,
        "FirstName": "Hector",
        "LastName": "Barlow",
        "Email": "hbarlow545@yahoo.com",
        "Height": "50 inches",
        "Age": 50
    },
    {
        "Id": 62,
        "FirstName": "Haley",
        "LastName": "Anderson",
        "Email": "handerson@outlook.com",
        "Height": "50 inches",
        "Age": 53
    },
    {
        "Id": 63,
        "FirstName": "Sheena",
        "LastName": "Belson",
        "Email": "sbelson94@outlook.com",
        "Height": "50 inches",
        "Age": 33
    },
    {
        "Id": 64,
        "FirstName": "Kelsey",
        "LastName": "Albury",
        "Email": "kalbury94@outlook.com",
        "Height": "50 inches",
        "Age": 18
    },
    {
        "Id": 65,
        "FirstName": "Carson",
        "LastName": "Bebbington",
        "Email": "cbebbington820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 43
    },
    {
        "Id": 66,
        "FirstName": "Spencer",
        "LastName": "Beebe",
        "Email": "sbeebe@hotmail.com",
        "Height": "50 inches",
        "Age": 45
    },
    {
        "Id": 67,
        "FirstName": "Zoe",
        "LastName": "Beasley",
        "Email": "zbeasley@hotmail.com",
        "Height": "46 inches",
        "Age": 32
    },
    {
        "Id": 68,
        "FirstName": "Wayne",
        "LastName": "Arifin",
        "Email": "warifin94@outlook.com",
        "Height": "48 inches",
        "Age": 55
    },
    {
        "Id": 69,
        "FirstName": "Yolanda",
        "LastName": "Anderson",
        "Email": "yanderson@msn.com",
        "Height": "50 inches",
        "Age": 58
    },
    {
        "Id": 70,
        "FirstName": "Peter",
        "LastName": "Alvaro",
        "Email": "palvaro@bhaktaverse.com",
        "Height": "47 inches",
        "Age": 30
    },
    {
        "Id": 71,
        "FirstName": "Pamala",
        "LastName": "Arbelaez",
        "Email": "parbelaez@gmail.com",
        "Height": "51 inches",
        "Age": 37
    },
    {
        "Id": 72,
        "FirstName": "Lance",
        "LastName": "Abercrombie",
        "Email": "labercrombie@outlook.com",
        "Height": "50 inches",
        "Age": 22
    },
    {
        "Id": 73,
        "FirstName": "Justin",
        "LastName": "Abel",
        "Email": "jabel@yahoo.com",
        "Height": "50 inches",
        "Age": 54
    },
    {
        "Id": 74,
        "FirstName": "Fernando",
        "LastName": "Bischoff",
        "Email": "fbischoff@yahoo.com",
        "Height": "50 inches",
        "Age": 52
    },
    {
        "Id": 75,
        "FirstName": "Jeremiah",
        "LastName": "Appelbaum",
        "Email": "jappelbaum545@yahoo.com",
        "Height": "46 inches",
        "Age": 48
    },
    {
        "Id": 76,
        "FirstName": "Victor",
        "LastName": "Berndt",
        "Email": "vberndt@outlook.com",
        "Height": "48 inches",
        "Age": 48
    },
    {
        "Id": 77,
        "FirstName": "Paula",
        "LastName": "Albrecht",
        "Email": "palbrecht545@yahoo.com",
        "Height": "50 inches",
        "Age": 40
    },
    {
        "Id": 78,
        "FirstName": "Levi",
        "LastName": "Bartness",
        "Email": "lbartness@yahoo.com",
        "Height": "46 inches",
        "Age": 34
    },
    {
        "Id": 79,
        "FirstName": "Daniel",
        "LastName": "Bentley",
        "Email": "dbentley@hotmail.com",
        "Height": "50 inches",
        "Age": 23
    },
    {
        "Id": 80,
        "FirstName": "Erin",
        "LastName": "Barker",
        "Email": "ebarker630@hotmail.com",
        "Height": "50 inches",
        "Age": 40
    },
    {
        "Id": 81,
        "FirstName": "Zachary",
        "LastName": "Berger",
        "Email": "zberger@bhaktaverse.com",
        "Height": "47 inches",
        "Age": 32
    },
    {
        "Id": 82,
        "FirstName": "Bryant",
        "LastName": "Ashton",
        "Email": "bashton89@gmail.com",
        "Height": "50 inches",
        "Age": 34
    },
    {
        "Id": 83,
        "FirstName": "Madeline",
        "LastName": "Atkinson",
        "Email": "matkinson820@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 47
    },
    {
        "Id": 84,
        "FirstName": "Alyssa",
        "LastName": "Abbas",
        "Email": "aabbas@yahoo.com",
        "Height": "50 inches",
        "Age": 51
    },
    {
        "Id": 85,
        "FirstName": "Teresa",
        "LastName": "Appelbaum",
        "Email": "tappelbaum@msn.com",
        "Height": "47 inches",
        "Age": 51
    },
    {
        "Id": 86,
        "FirstName": "Isabella",
        "LastName": "Alvarez",
        "Email": "ialvarez70@msn.com",
        "Height": "45 inches",
        "Age": 29
    },
    {
        "Id": 87,
        "FirstName": "Tommy",
        "LastName": "Alvarez",
        "Email": "talvarez@bhaktaverse.com",
        "Height": "50 inches",
        "Age": 54
    },
    {
        "Id": 88,
        "FirstName": "Brian",
        "LastName": "Ault",
        "Email": "bault@yahoo.com",
        "Height": "46 inches",
        "Age": 56
    },
    {
        "Id": 89,
        "FirstName": "Ebony",
        "LastName": "Ajenstat",
        "Email": "eajenstat@msn.com",
        "Height": "50 inches",
        "Age": 57
    },
    {
        "Id": 90,
        "FirstName": "Justin",
        "LastName": "Bales",
        "Email": "jbales70@msn.com",
        "Height": "50 inches",
        "Age": 26
    },
    {
        "Id": 91,
        "FirstName": "Zoe",
        "LastName": "Berry",
        "Email": "zberry630@hotmail.com",
        "Height": "50 inches",
        "Age": 42
    },
    {
        "Id": 92,
        "FirstName": "Tara",
        "LastName": "Avalos",
        "Email": "tavalos630@hotmail.com",
        "Height": "46 inches",
        "Age": 35
    },
    {
        "Id": 93,
        "FirstName": "Cynthia",
        "LastName": "Ajenstat",
        "Email": "cajenstat89@gmail.com",
        "Height": "50 inches",
        "Age": 52
    },
    {
        "Id": 94,
        "FirstName": "Alison",
        "LastName": "Bacalzo",
        "Email": "abacalzo545@yahoo.com",
        "Height": "45 inches",
        "Age": 18
    },
    {
        "Id": 95,
        "FirstName": "Veronica",
        "LastName": "Bailey",
        "Email": "vbailey545@yahoo.com",
        "Height": "50 inches",
        "Age": 54
    },
    {
        "Id": 96,
        "FirstName": "Victoria",
        "LastName": "Banack",
        "Email": "vbanack@yahoo.com",
        "Height": "50 inches",
        "Age": 56
    },
    {
        "Id": 97,
        "FirstName": "Francis",
        "LastName": "Barnhill",
        "Email": "fbarnhill@yahoo.com",
        "Height": "46 inches",
        "Age": 48
    },
    {
        "Id": 98,
        "FirstName": "Haley",
        "LastName": "Beck",
        "Email": "hbeck@outlook.com",
        "Height": "50 inches",
        "Age": 30
    },
    {
        "Id": 99,
        "FirstName": "Richard",
        "LastName": "Bent",
        "Email": "rbent@yahoo.com",
        "Height": "50 inches",
        "Age": 55
    },
    {
        "Id": 100,
        "FirstName": "Paula",
        "LastName": "Alderson",
        "Email": "palderson94@outlook.com",
        "Height": "45 inches",
        "Age": 51
    }
]













// Found this on  https://www.raymondcamden.com/2022/03/14/building-table-sorting-and-pagination-in-javascript but could didn't know how to get data.filter() to work
// document.addEventListener('DOMContentLoaded', init, false);

// let data, table, sortCol;
// let sortAsc = false;
// const pageSize = 3;
// let curPage = 1;

// async function init() {
  
//   // Select the table (well, tbody)
//   table = document.querySelector('#dataTable tbody');
//   // get the cats
//   let resp = await fetch('data/data.json');
//   data = await resp.json();
//   renderTable();
  
//   // listen for sort clicks
//   document.querySelectorAll('#dataTable thead tr th').forEach(t => {
//      t.addEventListener('click', sort, false);
//   });
  
//   document.querySelector('#nextBtn').addEventListener('click', nextPage, false);
//   document.querySelector('#prevBtn').addEventListener('click', previousPage, false);
// }

// function renderTable() {
//   // create html
//   let result = '';
//   data.filter((row, index) => {
//         let start = (curPage-1)*pageSize;
//         let end =curPage*pageSize;
//         if(index >= start && index < end) return true;
//   }).forEach(c => {
//      result += `<tr>
//      <td>${c.name}</td>
//      <td>${c.age}</td>
//      <td>${c.breed}</td>
//      <td>${c.gender}</td>
//      </tr>`;
//   });
//   table.innerHTML = result;
// }

// function sort(e) {
//   let thisSort = e.target.dataset.sort;
//   if(sortCol === thisSort) sortAsc = !sortAsc;
//   sortCol = thisSort;
//   console.log('sort dir is ', sortAsc);
//   data.sort((a, b) => {
//     if(a[sortCol] < b[sortCol]) return sortAsc?1:-1;
//     if(a[sortCol] > b[sortCol]) return sortAsc?-1:1;
//     return 0;
//   });
//   renderTable();
// }

// function previousPage() {
//   if(curPage > 1) curPage--;
//   renderTable();
// }

// function nextPage() {
//   if((curPage * pageSize) < data.length) curPage++;
//   renderTable();
// }







