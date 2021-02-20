function showDiv() {

    var x = document.querySelectorAll(".info-div");
    x.forEach(item => {
       item.style.display = 'none';
    });
    event.target.nextElementSibling.style.display = 'block';
  }