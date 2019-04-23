let changeColor = document.getElementById('changeColor');
let changeColor2 = document.getElementById('changeColor2');
let changeColor3 = document.getElementById('changeColor3');
let changeColor4 = document.getElementById('changeColor4');
let Text = document.getElementById('Text');

changeColor.style.backgroundColor = '#3aa757';
changeColor2.style.backgroundColor = '#e8453c';
changeColor3.style.backgroundColor = '#f9bb2d';
changeColor4.style.backgroundColor = '#4688f1';


chrome.storage.sync.get('text', function(){
	Text.setAttribute('value', 'Courier');
});

chrome.storage.sync.get('color', function() {


	changeColor.setAttribute('value', '#3aa757');
	changeColor2.setAttribute('value','#e8453c');
	changeColor3.setAttribute('value','#f9bb2d');
	changeColor4.setAttribute('value','#4688f1');
	
	


  //changeColor.style.backgroundColor = data.color;
  //changeColor.setAttribute('value', data.color);
});




changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "'+ color + '";'});
  });
};

changeColor2.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "'+ color + '";'});
  });
};
 
changeColor3.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "'+ color + '";'});
  });
};

changeColor4.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "'+ color + '";'});
  });
};

//Disappear Text (experimental)

Text.onclick = function(element) {
  let text = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById("myP").style.visibility = "hidden";'});

  });
};
