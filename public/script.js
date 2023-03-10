const value = document.querySelector("#value-select")
const input = document.querySelector("#range-value")

value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})
//Evento para atualizar o bd
$(".refresh-bd").click(function() {
    $(".refresh-bd").toggleClass("active");
});

//Evento de ativação do modal
$(".search-pescados button").click(function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    $(".modal-pescados").addClass("active");
    unloadScrollBars('hidden', 'no');
})

$(".modal-pescados").click(function(e) {
    if(e.target == this){

        $(".modal-pescados").toggleClass("active");
        unloadScrollBars('auto', 'yes');
    }
})
$(".button-confirm button").click(function(e) {
        $(".modal-pescados").toggleClass("active");
        unloadScrollBars('auto', 'yes');
})
function unloadScrollBars(block, option) {
    document.documentElement.style.overflow = block;
    document.body.scroll = option; // IE
}

$.ajax({
    url:"https://pescarte.onrender.com/cotPescados/date",
    dataType: "json",
    type: "GET",
    header: {}
    }).done(function (res) {
        $('.date-refresh-bd').html(res[0].data);
});