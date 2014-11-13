// JavaScript Document

window.rider = 1000;
window.fare = 1;
window.share = 5;
window.people = 2;


var p = {

    0: "1K",
    1: "2K",
    2: "3K",
    3: "4K",
    4: "5K",
    5: "6K",
    6: "7K",
    7: "8K",
    8: "9K",
    9: "10K",
    10: "11K",
    11: "12K",
    12: "13K",
    13: "14K",
    14: "15K",
    15: "16K",
    16: "17K",
    17: "18K",
    18: "19K",
    19: "20K",
    20: "21K",
    21: "22K",
    22: "23K",
    23: "24K",
    24: "25K",
    25: "26K",
    26: "27K",
    27: "28K",
    28: "29K",
    29: "30K",

};

var p2 = {

    0: "$1.00",
    1: "$2.00",
    2: "$3.00",
    3: "$4.00",
    4: "$5.00",
    5: "$6.00",
    6: "$7.00",
    7: "$8.00",
    8: "$9.00",
    9: "$10.00",
    10: "$11.00",
    11: "$12.00",
    12: "$13.00",
    13: "$14.00",
    14: "$15.00",
    15: "$16.00",
    16: "$17.00",
    17: "$18.00",
    18: "$19.00",
    19: "$20.00",
    20: "$21.00",
    21: "$22.00",
    22: "$23.00",
    23: "$24.00",
    24: "$25.00",
    25: "$26.00",
    26: "$27.00",
    27: "$28.00",
    28: "$29.00",
    29: "$30.00",

};

var p3 = {

    0: "5%",
    1: "10%",
    2: "15%",
    3: "20%",
    4: "25%",
    5: "30%",
    6: "35%",
    7: "40%",
    8: "45%",
    9: "50%",
    10: "55%",
    11: "60%",
    12: "65%",
    13: "70%",
    14: "75%",
    15: "80%",
    16: "85%",
    17: "90%",
    18: "95%",
    19: "100%",
};


var t = {

    0: "1000",
    1: "2000",
    2: "3000",
    3: "4000",
    4: "5000",
    5: "6000",
    6: "7000",
    7: "8000",
    8: "9000",
    9: "10000",
    10: "11000",
    11: "12000",
    12: "13000",
    13: "14000",
    14: "15000",
    15: "16000",
    16: "17000",
    17: "18000",
    18: "19000",
    19: "20000",
    20: "21000",
    21: "22000",
    22: "23000",
    23: "24000",
    24: "25000",
    25: "26000",
    26: "27000",
    27: "28000",
    28: "29000",
    29: "30000",
}

var t2 = {

    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "10",
    10: "11",
    11: "12",
    12: "13",
    13: "14",
    14: "15",
    15: "16",
    16: "17",
    17: "18",
    18: "19",
    19: "20",
    20: "21",
    21: "22",
    22: "23",
    23: "24",
    24: "25",
    25: "26",
    26: "27",
    27: "28",
    28: "29",
    29: "30",
}

var t3 = {

    0: "5",
    1: "10",
    2: "15",
    3: "20",
    4: "25",
    5: "30",
    6: "35",
    7: "40",
    8: "45",
    9: "50",
    10: "55",
    11: "60",
    12: "65",
    13: "70",
    14: "75",
    15: "80",
    16: "85",
    17: "90",
    18: "95",
    19: "100",
};

$(document).ready(function() {

    $("#cashTotal").val("0");
    $("#carbonTotal").val("0");
    $("#treeTotal").val("0");
    

    $("#riderSlider").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 29,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $("#fareSlider").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 29,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(2,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $("#shareSlider").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 19,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(3,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $('.term').on('click',function(event) {
        var id = $(this).attr('id');

        $('.term').removeClass('selected-term');
        $(this).addClass('selected-term');
        $(".term").removeClass("active-term");
        $(this).addClass("active-term");
        $('#term').val(id);

        calcualtePrice()
    });

    update();
    calcualtePrice();
});
        

        
function update(slider,val) {

    if(undefined === val) val = 0;
     var amount = p[val];
     var amount2 = p2[val];
     var amount3 = p3[val];
    //console.log("VAL: "+ $('#sliderVal').val(val));
    //$('#sliderVal').val(val);

    if(slider == 1){
        amount = p[val];
        window.rider = parseInt(t[val]);
        $('#riderSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    }
    else if (slider == 2){
        amount2 = p2[val];
        window.fare = parseInt(t2[val]);
        $('#fareSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount2+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
        }
    else if (slider == 3){
        amount3 = p3[val];
        window.share = parseInt(t3[val]);
        $('#shareSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount3+' <span class="glyphicon glyphicon-chevron-right"></span></label>');    
    }
    else
    {

     $('#riderSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    $('#fareSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount2+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
    $('#shareSlider a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount3+' <span class="glyphicon glyphicon-chevron-right"></span></label>');

    }
}

function calcualtePrice(val){
    
    window.people= parseInt($('#term').val());

    // console.log("-"+window.rider+"-"+window.fare+"-"+window.share+"-"+window.people);


    var cash = window.rider * window.fare * (window.share) /100 * (window.people-1);


    $("#cashTotal").val(numberWithCommas(cash.toFixed(0)));
    $("#carbonTotal").val(numberWithCommas((cash/5*.26).toFixed(0)));
    $("#treeTotal").val(numberWithCommas((cash/5*.26/11).toFixed(0)));
   // $("#total12").val(Math.round((totalPrice)/12).toFixed(2));
    //$("#total52").val(Math.round((totalPrice)/52).toFixed(2));
}

function numberWithCommas(x) {

return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}