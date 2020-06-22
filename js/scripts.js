$('.news').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '.next_news',
  prevArrow: '.previous_news',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.teacher').slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '.next_teacher',
  prevArrow: '.previous_teacher',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.burger-menu').click (function(){
  $('.navbar__menu-mobile').toggleClass('open');
});

/* код для стилилизации селекта */
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
/* код для стилилизации селекта */
/* условия по калькулятору */
$('.calc').click(function(){
  var selectedForm = $('#forma option:selected').val();
  var selectedSpec = $('#spec option:selected').val();
  var selectedLevel = $('#level option:selected').val();
  var selectedYear = $('#year option:selected').val();
  var selectedYearCount = $('#year option:selected').text();
  var result;
  var summ;
  var summYear = selectedSpec * selectedYearCount;

  function removeClass() {
    $('.cost-form .select-selected').removeClass('warning');
  }
  $('.cost-result').fadeIn(500);

  if(selectedLevel == 1 && selectedForm == 1){
    selectedSpec = 174000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else if (selectedLevel == 2 && selectedForm == 1){

    selectedSpec = 186000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else if (selectedLevel == 1 && selectedForm == 2){

    selectedSpec = 60000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else if (selectedLevel == 2 && selectedForm == 2){

    selectedSpec = 80000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else if (selectedLevel == 3 && selectedForm == 1){

    selectedSpec = 205000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else if (selectedLevel == 3 && selectedForm == 2){
    selectedSpec = 70000;
    result = selectedSpec - selectedSpec / 100 * selectedYear;
    cost = selectedSpec / 100 * selectedYear;
    summ = selectedSpec * selectedYearCount - selectedSpec / 100 * selectedYear;
    summCost = cost * selectedYearCount;
    $('#summ').empty().text(summ);
    $('#result').empty().text(result);
    $('#cost').empty().text(cost);
    $('#summCost').empty().text(summCost);
  } else {
    $('.cost-form select').siblings('.select-selected').addClass('warning');
    setTimeout(removeClass, 1000);
  }
});
/* условия по калькулятору */

$('.feedback-btn').click(function(){
  $('body input').val("");
  $('.feedback-overlay').fadeIn(500);
});

$('.close-btn').click(function(){
  $(this).parent().parent().fadeOut(500);
});

$('.question-btn').click(function(){
  $('.form-question__wrapper').toggle(500);
})
document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


