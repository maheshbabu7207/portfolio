function aboutUs()
{
    document.getElementById('aboutContainer').style.display = 'flex';
    document.getElementById('educateContainer').style.display = 'none';
    document.getElementById('skillsContainer').style.display = 'none';
    document.getElementById('experienceContainer').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'none';
}
function educate()
{
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('educateContainer').style.display = 'flex';
    document.getElementById('skillsContainer').style.display = 'none';
    document.getElementById('experienceContainer').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'none';
}
function skillss()
{
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('educateContainer').style.display = 'none';
    document.getElementById('skillsContainer').style.display = 'flex';
    document.getElementById('experienceContainer').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'none';
}
function experin()
{
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('educateContainer').style.display = 'none';
    document.getElementById('skillsContainer').style.display = 'none';
    document.getElementById('experienceContainer').style.display = 'flex';
    document.getElementById('projectContainer').style.display = 'none';
}
function project()
{
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('educateContainer').style.display = 'none';
    document.getElementById('skillsContainer').style.display = 'none';
    document.getElementById('experienceContainer').style.display = 'none';
    document.getElementById('projectContainer').style.display = 'flex';
}

function widowCodeJPV()
{
    document.getElementById('widowCodeJP').style.display = 'block';
}
function widowCodeJPU()
{
    document.getElementById('widowCodeJP').style.display = 'none';
}

function widowCodeSQV()
{
    document.getElementById('widowCodeSQ').style.display = 'block';
}
function widowCodeSQU()
{
    document.getElementById('widowCodeSQ').style.display = 'none';
}

function widowCodeHTV()
{
    document.getElementById('widowCodeHT').style.display = 'block';
}
function widowCodeHTU()
{
    document.getElementById('widowCodeHT').style.display = 'none';
}

function widowCodeCSV()
{
    document.getElementById('widowCodeCS').style.display = 'block';
}
function widowCodeCSU()
{
    document.getElementById('widowCodeCS').style.display = 'none';
}

function widowCodeJSV()
{
    document.getElementById('widowCodeJS').style.display = 'block';
}
function widowCodeJSU()
{
    document.getElementById('widowCodeJS').style.display = 'none';
}

function textShadowV()
{
    document.getElementById('textShadow').style.top = '18vh';
    document.getElementById('textShadow').style.opacity = '1';
}
function textShadowU()
{
    document.getElementById('textShadow').style.top = '26vh';
    document.getElementById('textShadow').style.opacity = '0';
}
var menuOpen = document.getElementsByClassName("navi");
function menu()
{
    var val = document.getElementById('menu').value;
    if (val=='open')
    {
        menuOpen[0].style.display = 'flex';
        document.getElementById('menu').style.backgroundImage = "url(../assests/images/close.png)";
        document.getElementById('menu').setAttribute('value', 'close');
    }
    else
    {
        menuOpen[0].style.display = 'none';
        document.getElementById('menu').style.backgroundImage = "url(../assests/images/menu.png)";
        document.getElementById('menu').setAttribute('value', 'open');
    }
}