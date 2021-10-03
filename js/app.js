$(document).ready(function () {
    $('#addbtn').click(function () {
        var todotext = $('#todotext').val()
        if (todotext == '') {
            alert("Please Enter SomeThing")
        }
        else {
            // create todo div
            var tododiv = document.createElement('div');
            tododiv.setAttribute('class', 'tododiv')
            //create paragraph
            var para = document.createElement('p');
            para.append(todotext)
            para.setAttribute('class', 'para')

            //create checkBox

            var check = document.createElement('input')
            $(check).attr({
                type : 'checkbox',
                class : 'checkbox'
            })
            
$(check).click(function(){
$(para).toggleClass("underline")
});

            //create delete btn
            var dltbtn = document.createElement('button');
            dltbtn.append("X")
            dltbtn.setAttribute('class', 'dltbtn')
            $(tododiv).on('click', '.dltbtn', function () {
                var myconfirm = confirm("Are You Shure You Want To Delete")
                if (myconfirm == true) {
                    $(this).parent().fadeOut(1000, function(){ $(this).remove();});
                }

            })
            tododiv.append(para)
            tododiv.append(check)
            tododiv.append(dltbtn)
            $('.showtodo').append(tododiv)
        }
    });
});

