/*
The following declarations are done by using the
HTMLFormControlsCollection API
*/
// Exists on both pages
var form = document.forms[0];
// NodeList of all of the form controls
var ui = form.elements;
// <input> on index.html

//easy assignments
var data = ui.data;
var data2 = ui.data2;
var data3 = ui.data3;
var data4 = ui.data4;
var data5 = ui.data5;
var data6 = ui.data6;
var data7 = ui.data7;
var data8 = ui.data8;
var data9 = ui.data9;
var data10 = ui.data10;
//medium assignments
var data11 = ui.data11;
var data12 = ui.data12;
var data13 = ui.data13;
var data14 = ui.data14;
var data15 = ui.data15;
var data16 = ui.data16;
var data17 = ui.data17;
var data18 = ui.data18;
var data19 = ui.data19;
var data20 = ui.data20;

var data21 = ui.data21;
var data22 = ui.data22;
var data23 = ui.data23;
var data24 = ui.data24;
var data25 = ui.data25;
var data26 = ui.data26;
var data27 = ui.data27;
var data28 = ui.data28;
var data29 = ui.data29;
var data30 = ui.data30;

// Exists on both pages
var out = ui.out;
var out2 = ui.out2;
var out3 = ui.out3;
var out4 = ui.out4;
var out5 = ui.out5;
var out6 = ui.out6;
var out7 = ui.out7;
var out8 = ui.out8;
var out9 = ui.out9;
var out10 = ui.out10;

var out11 = ui.out11;
var out12 = ui.out12;
var out13 = ui.out13;
var out14 = ui.out14;
var out15 = ui.out15;
var out16 = ui.out16;
var out17 = ui.out17;
var out18 = ui.out18;
var out19 = ui.out19;
var out20 = ui.out20;

var out21 = ui.out21;
var out22 = ui.out22;
var out23 = ui.out23;
var out24 = ui.out24;
var out25 = ui.out25;
var out26 = ui.out26;
var out27 = ui.out27;
var out28 = ui.out28;
var out29 = ui.out29;
var out30 = ui.out30;
// Button on page1.html
var btn = ui.btn;

// Register the 'submit' event on the <form>
form.addEventListener('submit', saveData);

// Register the 'click' event on the button on page1.html
btn.addEventListener('click', getData);

// Callback called on submit on index.html
function saveData(e) {

  /*
  Prevent the <form> from sending data to server and
  resetting itself
  */
  e.preventDefault();

  // Get the data from <input> on index.html
  var str = data.value;
  var str2 = data2.value;
  var str3 = data3.value;
  var str4 = data4.value;
  var str5 = data5.value;
  var str6 = data6.value;
  var str7 = data7.value;
  var str8 = data8.value;
  var str9 = data9.value;
  var str10 = data10.value;

  var str11 = data11.value;
  var str12 = data12.value;
  var str13 = data13.value;
  var str14 = data14.value;
  var str15 = data15.value;
  var str16 = data16.value;
  var str17 = data17.value;
  var str18 = data18.value;
  var str19 = data19.value;
  var str20 = data20.value;

  var str21 = data21.value;
  var str22 = data22.value;
  var str23 = data23.value;
  var str24 = data24.value;
  var str25 = data25.value;
  var str26 = data26.value;
  var str27 = data27.value;
  var str28 = data28.value;
  var str29 = data29.value;
  var str30 = data30.value;
  // Save data to localStorage

  localStorage.setItem('data', JSON.stringify(str));
  localStorage.setItem('data2', JSON.stringify(str2));
  localStorage.setItem('data3', JSON.stringify(str3));
  localStorage.setItem('data4', JSON.stringify(str4));
  localStorage.setItem('data5', JSON.stringify(str5));
  localStorage.setItem('data6', JSON.stringify(str6));
  localStorage.setItem('data7', JSON.stringify(str7));
  localStorage.setItem('data8', JSON.stringify(str8));
  localStorage.setItem('data9', JSON.stringify(str9));
  localStorage.setItem('data10', JSON.stringify(str10));

  localStorage.setItem('data11', JSON.stringify(str11));
  localStorage.setItem('data12', JSON.stringify(str12));
  localStorage.setItem('data13', JSON.stringify(str13));
  localStorage.setItem('data14', JSON.stringify(str14));
  localStorage.setItem('data15', JSON.stringify(str15));
  localStorage.setItem('data16', JSON.stringify(str16));
  localStorage.setItem('data17', JSON.stringify(str17));
  localStorage.setItem('data18', JSON.stringify(str18));
  localStorage.setItem('data19', JSON.stringify(str19));
  localStorage.setItem('data20', JSON.stringify(str20));

  localStorage.setItem('data21', JSON.stringify(str21));
  localStorage.setItem('data22', JSON.stringify(str22));
  localStorage.setItem('data23', JSON.stringify(str23));
  localStorage.setItem('data24', JSON.stringify(str24));
  localStorage.setItem('data25', JSON.stringify(str25));
  localStorage.setItem('data26', JSON.stringify(str26));
  localStorage.setItem('data27', JSON.stringify(str27));
  localStorage.setItem('data28', JSON.stringify(str28));
  localStorage.setItem('data29', JSON.stringify(str29));
  localStorage.setItem('data30', JSON.stringify(str30));

  // Notify user
  out.innerHTML = `${str}`;
  out2.innerHTML = `${str2}`;
  out3.innerHTML = `${str3}`;
  out4.innerHTML = `${str4}`;
  out5.innerHTML = `${str5}`;
  out6.innerHTML = `${str6}`;
  out7.innerHTML = `${str7}`;
  out8.innerHTML = `${str8}`;
  out9.innerHTML = `${str9}`;
  out10.innerHTML = `${str10}`;

  out11.innerHTML = `${str11}`;
  out12.innerHTML = `${str12}`;
  out13.innerHTML = `${str13}`;
  out14.innerHTML = `${str14}`;
  out15.innerHTML = `${str15}`;
  out16.innerHTML = `${str16}`;
  out17.innerHTML = `${str17}`;
  out18.innerHTML = `${str18}`;
  out19.innerHTML = `${str19}`;
  out20.innerHTML = `${str20}`;

  out21.innerHTML = `${str21}`;
  out22.innerHTML = `${str22}`;
  out23.innerHTML = `${str23}`;
  out24.innerHTML = `${str24}`;
  out25.innerHTML = `${str25}`;
  out26.innerHTML = `${str26}`;
  out27.innerHTML = `${str27}`;
  out28.innerHTML = `${str28}`;
  out29.innerHTML = `${str29}`;
  out30.innerHTML = `${str30}`;
}

// Callback called when button is clicked on page1.html
function getData(e) {

  // Get data from localStorage
  var stored = JSON.parse(localStorage.getItem('data'));
  var stored2 = JSON.parse(localStorage.getItem('data2'));
  var stored3 = JSON.parse(localStorage.getItem('data3'));
  var stored4 = JSON.parse(localStorage.getItem('data4'));
  var stored5 = JSON.parse(localStorage.getItem('data5'));
  var stored6 = JSON.parse(localStorage.getItem('data6'));
  var stored7 = JSON.parse(localStorage.getItem('data7'));
  var stored8 = JSON.parse(localStorage.getItem('data8'));
  var stored9 = JSON.parse(localStorage.getItem('data9'));
  var stored10 = JSON.parse(localStorage.getItem('data10'));

  var stored11 = JSON.parse(localStorage.getItem('data11'));
  var stored12 = JSON.parse(localStorage.getItem('data12'));
  var stored13 = JSON.parse(localStorage.getItem('data13'));
  var stored14 = JSON.parse(localStorage.getItem('data14'));
  var stored15 = JSON.parse(localStorage.getItem('data15'));
  var stored16 = JSON.parse(localStorage.getItem('data16'));
  var stored17 = JSON.parse(localStorage.getItem('data17'));
  var stored18 = JSON.parse(localStorage.getItem('data18'));
  var stored19 = JSON.parse(localStorage.getItem('data19'));
  var stored20 = JSON.parse(localStorage.getItem('data20'));

  var stored21 = JSON.parse(localStorage.getItem('data21'));
  var stored22 = JSON.parse(localStorage.getItem('data22'));
  var stored23 = JSON.parse(localStorage.getItem('data23'));
  var stored24 = JSON.parse(localStorage.getItem('data24'));
  var stored25 = JSON.parse(localStorage.getItem('data25'));
  var stored26 = JSON.parse(localStorage.getItem('data26'));
  var stored27 = JSON.parse(localStorage.getItem('data27'));
  var stored28 = JSON.parse(localStorage.getItem('data28'));
  var stored29 = JSON.parse(localStorage.getItem('data29'));
  var stored30 = JSON.parse(localStorage.getItem('data30'));
  // Notify user
  out.innerHTML = `${stored}`
  out2.innerHTML = `${stored2}`
  out3.innerHTML = `${stored3}`
  out4.innerHTML = `${stored4}`
  out5.innerHTML = `${stored5}`
  out6.innerHTML = `${stored6}`
  out7.innerHTML = `${stored7}`
  out8.innerHTML = `${stored8}`
  out9.innerHTML = `${stored9}`
  out10.innerHTML = `${stored10}`

  out11.innerHTML = `${stored11}`
  out12.innerHTML = `${stored12}`
  out13.innerHTML = `${stored13}`
  out14.innerHTML = `${stored14}`
  out15.innerHTML = `${stored15}`
  out16.innerHTML = `${stored16}`
  out17.innerHTML = `${stored17}`
  out18.innerHTML = `${stored18}`
  out19.innerHTML = `${stored19}`
  out20.innerHTML = `${stored20}`

  out21.innerHTML = `${stored21}`
  out22.innerHTML = `${stored22}`
  out23.innerHTML = `${stored23}`
  out24.innerHTML = `${stored24}`
  out25.innerHTML = `${stored25}`
  out26.innerHTML = `${stored26}`
  out27.innerHTML = `${stored27}`
  out28.innerHTML = `${stored28}`
  out29.innerHTML = `${stored29}`
  out30.innerHTML = `${stored30}`

  


}
