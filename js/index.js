var contactIg = document.getElementsByTagName("img");
function funFstCall()
{
    contactIg[0].src='./assests/images/callW.png';
}
function funFstMail()
{
    contactIg[1].src='./assests/images/mailW.png';
}
function funFstWtpp()
{
    contactIg[2].src='./assests/images/wtppW.png';
}
function funFstIngm()
{
    contactIg[3].src='./assests/images/ingmW.png';
}
function funFstFsbk()
{
    contactIg[4].src='./assests/images/fsbkW.png';
}
function funSnd()
{
    contactIg[0].src='./assests/images/call.png';
    contactIg[1].src='./assests/images/mail.png';
    contactIg[2].src='./assests/images/wtpp.png';
    contactIg[3].src='./assests/images/ingm.png';
    contactIg[4].src='./assests/images/fsbk.png';
}

var cvPlace = document.getElementsByClassName('resumeView');
var cvClose = document.getElementsByTagName('cvClose');
var cvButton = document.getElementsByTagName('input');
function cvView()
{
    cvPlace[0].style.display = 'flex';
    document.querySelector('p').style.display = 'flex';
}
function cvUiew()
{
    cvPlace[0].style.display = 'none';
    document.querySelector('p').style.display = 'none';
}

var portMain = document.getElementsByTagName('b');
var portLine = document.getElementsByTagName('line');
function headColorIn()
{
    portMain[0].style.color = 'white';
    portLine[0].style.background = 'linear-gradient(90deg, rgb(255, 0, 123), white)';
    document.getElementById('siva').style.color = 'rgb(255, 0, 123)';
}
function headColorOt()
{
    portMain[0].style.color = 'rgb(255, 0, 123)';
    portLine[0].style.background = 'linear-gradient(90deg, white, rgb(255, 0, 123))';
    document.getElementById('siva').style.color = 'white';
}