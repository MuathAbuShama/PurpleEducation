/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///         vertical  tabs
function Vocabularyvertical_tabs()
{
    if ($('.Vocabularyux-vertical-tabs').length > 0)
    {
        $('.Vocabularyux-vertical-tabs .tabs button').on("click", function ()
        {
            var temp_tab = $(this).data('tab');
            var temp_tab_js = this.getAttribute('data-tab');
            var temp_content = $('.Vocabularyux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
            var temp_content_js = document.querySelector('.Vocabularyux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
            var temp_content_active_js = document.querySelector('.Vocabularyux-vertical-tabs .maincontent .tabcontent.active');

            $('.Vocabularyux-vertical-tabs .tabs button').removeClass('active');
            $('.Vocabularyux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

            var animation_start = anime({
                duration: 400, targets: temp_content_active_js, opacity: [1, 0], translateX: [0, '100%'], easing: 'easeInOutCubic',
                complete: function ()
                {
                    $('.Vocabularyux-vertical-tabs .maincontent .tabcontent').removeClass('active');
                    temp_content.addClass('active');
                    var animation_end = anime({ duration: 400, targets: temp_content_js, opacity: [0, 1], translateX: ['100%', '0'], easing: 'easeInOutCubic' });
                }
            });
        });
    }
}
function Grammarvertical_tabs()
{
    if ($('.Grammarux-vertical-tabs').length > 0)
    {
        $('.Grammarux-vertical-tabs .tabs button').on("click", function ()
        {
            var temp_tab = $(this).data('tab');
            var temp_tab_js = this.getAttribute('data-tab');
            var temp_content = $('.Grammarux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
            var temp_content_js = document.querySelector('.Grammarux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
            var temp_content_active_js = document.querySelector('.Grammarux-vertical-tabs .maincontent .tabcontent.active');

            $('.Grammarux-vertical-tabs .tabs button').removeClass('active');
            $('.Grammarux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

            var animation_start = anime({
                duration: 400, targets: temp_content_active_js, opacity: [1, 0], translateX: [0, '100%'], easing: 'easeInOutCubic',
                complete: function ()
                {
                    $('.Grammarux-vertical-tabs .maincontent .tabcontent').removeClass('active');
                    temp_content.addClass('active');
                    var animation_end = anime({ duration: 400, targets: temp_content_js, opacity: [0, 1], translateX: ['100%', '0'], easing: 'easeInOutCubic' });
                }
            });
        });
    }
}
function Listeningvertical_tabs()
{
    if ($('.Listeningux-vertical-tabs').length > 0)
    {
        $('.Listeningux-vertical-tabs .tabs button').on("click", function ()
        {
            var temp_tab = $(this).data('tab');
            var temp_tab_js = this.getAttribute('data-tab');
            var temp_content = $('.Listeningux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
            var temp_content_js = document.querySelector('.Listeningux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
            var temp_content_active_js = document.querySelector('.Listeningux-vertical-tabs .maincontent .tabcontent.active');

            $('.Listeningux-vertical-tabs .tabs button').removeClass('active');
            $('.Listeningux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

            var animation_start = anime({
                duration: 400, targets: temp_content_active_js, opacity: [1, 0], translateX: [0, '100%'], easing: 'easeInOutCubic',
                complete: function ()
                {
                    $('.Listeningux-vertical-tabs .maincontent .tabcontent').removeClass('active');
                    temp_content.addClass('active');
                    var animation_end = anime({ duration: 400, targets: temp_content_js, opacity: [0, 1], translateX: ['100%', '0'], easing: 'easeInOutCubic' });
                }
            });
        });
    }
}
$(function ()
{
    Listeningvertical_tabs();
    Vocabularyvertical_tabs();
    Grammarvertical_tabs();

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///         Get All Questions  
var VocabularyArabicToEnglishWordArray = [];
var ListeningArabicToEnglishWordArray = [];

var VocabularyDragAndDropArray = [];
var ListeningDragAndDropArray = [];

var VocabularyCorrectCompleteSpaceArray = [];
var ListeningCorrectCompleteSpaceArray = [];

var SubmittingToServer = false;


var GrammarCompleteSpaceArray = [];
var GrammarLinkingWordsArray = [];

var VocabularyLettersArray = [];



if (typeof ListeningArabicToEnglishOrderNo == "undefined")
{
    var ListeningArabicToEnglishOrderNo = -1;
}
else
{
    ListeningArabicToEnglishOrderNo = -1;
}


if (typeof VocabularyLettersOrderNo == "undefined")
{
    var VocabularyLettersOrderNo = -1;
}
else
{
    VocabularyLettersOrderNo = -1;
}



if (typeof ListeningDragAndDropOrderNo == "undefined")
{
    var ListeningDragAndDropOrderNo = -1;
}
else
{
    ListeningDragAndDropOrderNo = -1;
}
if (typeof ListeningCompleteSpaceOrderNo == "undefined")
{
    var ListeningCompleteSpaceOrderNo = -1;
}
else { ListeningCompleteSpaceOrderNo = -1; }


if (typeof LastQuestionListeningArabicToEnglishWord == "undefined")
{
    var LastQuestionListeningArabicToEnglishWord = false;
}

else
{
    LastQuestionListeningArabicToEnglishWord = false;
}



if (typeof LastQuestionListeningDragAndDrop == "undefined")
{
    var LastQuestionListeningDragAndDrop = false;
}
else { LastQuestionListeningDragAndDrop = false; }


if (typeof LastListeningQuestionCompleteSpace == "undefined")
{
    var LastListeningQuestionCompleteSpace = false;
}
else
{
    LastListeningQuestionCompleteSpace = false;
}

if (typeof VocabularyArabicToEnglishOrderNo == "undefined")
{
    var VocabularyArabicToEnglishOrderNo = -1;
}
else
{
    VocabularyArabicToEnglishOrderNo = -1;
}


if (typeof VocabularyDragAndDropOrderNo == "undefined")
{
    var VocabularyDragAndDropOrderNo = -1;
}
else
{
    VocabularyDragAndDropOrderNo = -1;
}


if (typeof VocabularyCompleteSpaceOrderNo == "undefined")
{
    var VocabularyCompleteSpaceOrderNo = -1;
}
else
{
    VocabularyCompleteSpaceOrderNo = -1;
}


if (typeof GrammarCompleteSpaceOrderNo == "undefined")
{
    var GrammarCompleteSpaceOrderNo = -1;
}
else
{
    GrammarCompleteSpaceOrderNo = -1;
}




if (typeof LastQuestionVocabularyArabicToEnglishWord == "undefined")
{
    var LastQuestionVocabularyArabicToEnglishWord = false;
}
else
{
    LastQuestionVocabularyArabicToEnglishWord = false;
}


if (typeof LastQuestionVocabularyDragAndDrop == "undefined")
{
    var LastQuestionVocabularyDragAndDrop = false;
}
else
{
    LastQuestionVocabularyDragAndDrop = false;
}


if (typeof LastVocabularyQuestionCompleteSpace == "undefined")
{
    var LastVocabularyQuestionCompleteSpace = false;
}
else
{
    LastVocabularyQuestionCompleteSpace = false;
}

if (typeof LastGrammarQuestionCompleteSpace == "undefined")
{
    var LastGrammarQuestionCompleteSpace = false;
}
else
{
    LastGrammarQuestionCompleteSpace = false;
}


if (typeof LastVocabularyLettersQuestion == "undefined")
{
    var LastVocabularyLettersQuestion = false;
}
else
{
    LastVocabularyLettersQuestion = false;
}


function SubmitStudentAnswer(OnlineExerciseSubTypeID, ExerciseID, IsCorrect)
{
    if (SubmittingToServer == false)
    {
        SubmittingToServer = true;
        var OnlineStudentCourseUnitID = $("#ContentPlaceHolder1_hfOnlineStudentCourseUnitId").val();

        if (OnlineExerciseSubTypeID == 7 && ExerciseID == -1)
        {
            $.each(GrammarLinkingWordsArray, function (i, vali)
            {
                $.ajax({
                    type: "POST",
                    url: "https://exeiws.pcdotnet.com.jo/Service.svc/SubmitStudentAnswer",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: JSON.stringify({
                        OnlineExerciseSubTypeID: OnlineExerciseSubTypeID, ExerciseID: vali.ID, IsCorrect: IsCorrect, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
                    }),
                    success: function (n)
                    {
                        var dataObject = jQuery.parseJSON(n.d);
                        console.log(dataObject)
                        SubmittingToServer = false;

                    }
                });
            });
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "https://exeiws.pcdotnet.com.jo/Service.svc/SubmitStudentAnswer",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: JSON.stringify({
                    OnlineExerciseSubTypeID: OnlineExerciseSubTypeID, ExerciseID: ExerciseID, IsCorrect: IsCorrect, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
                }),
                success: function (n)
                {
                    var dataObject = jQuery.parseJSON(n.d);
                    console.log(dataObject)
                    SubmittingToServer = false;

                }
            });
        }
    }

}
function BuildAnswerTables()
{
	console.log("BuildAnswerTables Called");

    //////////////////////////////////////////////////////////////////////////
    var container = $("#NotFoundVocabularyArabicToEnglishWord").parent();
    var table = $('<table/>')
        .attr("id", "tblVocabularyArabicToEnglishWord")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < VocabularyArabicToEnglishWordArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < VocabularyArabicToEnglishWordArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }
    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundListeningArabicToEnglishWord").parent();
    var table = $('<table/>')
        .attr("id", "tblListeningArabicToEnglishWord")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < ListeningArabicToEnglishWordArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < ListeningArabicToEnglishWordArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }
    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundVocabularyDragAndDrop").parent();
    var table = $('<table/>')
        .attr("id", "tblVocabularyDragAndDrop")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < VocabularyDragAndDropArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < VocabularyDragAndDropArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }
    //////////////////////////////////////////////////////////////////////////
    var container = $("#NotFoundListeningDragAndDrop").parent();
    var table = $('<table/>')
        .attr("id", "tblListeningDragAndDrop")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < ListeningDragAndDropArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < ListeningDragAndDropArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }

    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundVocabularyCompleteSpace").parent();
    var table = $('<table/>')
        .attr("id", "tblVocabularyCorrectCompleteSpace")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < VocabularyCorrectCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < VocabularyCorrectCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }

    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundListeningCompleteSpace").parent();
    var table = $('<table/>')
        .attr("id", "tblListeningCorrectCompleteSpace")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < ListeningCorrectCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < ListeningCorrectCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }
    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundGrammarCompleteSpace").parent();
    var table = $('<table/>')
        .attr("id", "tblGrammarCompleteSpace")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < GrammarCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < GrammarCompleteSpaceArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }

    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundGrammarLinkingWords").parent();
    var table = $('<table/>')
        .attr("id", "tblGrammarLinkingWords")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);

    var td = $('<td/>')
        .text(1)
        .appendTo(tr);

    var tr = $('<tr/>')
        .appendTo(table);

    var td = $('<td/>')
        .html("&nbsp;")
        .addClass("tblVal")
        .appendTo(tr);

    //////////////////////////////////////////////////////////////////////////

    var container = $("#NotFoundVocabularyLetters").parent();
    var table = $('<table/>')
        .attr("id", "tblVocabularyLetters")
        .attr("style", "margin-top:10px;")
        .addClass("table")

        .addClass("table-bordered")
        .appendTo(container);
    var tr = $('<tr/>')
        .appendTo(table);
    var i;
    for (i = 0; i < VocabularyLettersArray.length; i++)
    {
        var td = $('<td/>')
            .text(i + 1)
            .appendTo(tr);
    }
    var tr = $('<tr/>')
        .appendTo(table);
    for (i = 0; i < VocabularyLettersArray.length; i++)
    {
        var td = $('<td/>')
            .html("&nbsp;")
            .addClass("tblVal")
            .appendTo(tr);
    }

}
function GetAllQuestions(BuildAnswerTablesCallBack)
{

    var CourseID = $("#ContentPlaceHolder1_hfCourseID").val();
    var OnlineStudentCourseUnitID = $("#ContentPlaceHolder1_hfOnlineStudentCourseUnitId").val();

    $.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetArabicToEnglishWordQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            console.log(dataObject)
            VocabularyArabicToEnglishWordArray = dataObject.VocabularyQuestionsList;
            ListeningArabicToEnglishWordArray = dataObject.ListeningQuestionsList;

            GetVocabularyNextArabicToEnglishWord();
            GetListeningNextArabicToEnglishWord();
        },
		complete:function()
		{
				 $.ajax({
						type: "POST",
						url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetDragAndDropQuestions",
						contentType: "application/json; charset=utf-8",
						dataType: "json",
						data: JSON.stringify({
						CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
						}),
						success: function (n)
						{
							var dataObject = jQuery.parseJSON(n.d);

							VocabularyDragAndDropArray = dataObject.VocabularyQuestionsList;
							ListeningDragAndDropArray = dataObject.ListeningQuestionsList;

							GetNextVocabularyDragAndDrop();
							GetNextListeningDragAndDrop();
						},
						complete:function()
						{
							 $.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetVocabularyCompleteSpaceQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            VocabularyCorrectCompleteSpaceArray = dataObject.VocabularyQuestionsList;
            ListeningCorrectCompleteSpaceArray = dataObject.ListeningQuestionsList;

            GetNextVocabularyCompleteSpace();
            GetNextListeningCompleteSpace();
        },
		complete:function()
		{
			$.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetGrammarCompleteSpaceQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            GrammarCompleteSpaceArray = dataObject;

            GetNextGrammarCompleteSpace();
        },
		complete:function()
		{
			 $.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetGrammarLinkingWordsQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            GrammarLinkingWordsArray = dataObject;

            GetNextGrammarLinkingWords();

        },
		complete:function()
		{
			 $.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetLettersQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            VocabularyLettersArray = dataObject;

            GetNextVocabularyLetters();
            
        }
		,
		complete: function(){
			BuildAnswerTables();
			//setTimeout(function(){ BuildAnswerTables(); }, 5000);
			}
    });

		}
    });
		}
    });
		}
    });

						}
						});
		}
		
    });

   

   
    

   

   

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///  Vocabulary    Arabic To English Word Functions

function NewVocabularyArabicToEnglishWordExercise()
{
    VocabularyArabicToEnglishOrderNo = -1;
    LastQuestionVocabularyArabicToEnglishWord = false;
    VocabularyArabicToEnglishOrderNo = -1;
    GetVocabularyNextArabicToEnglishWord();
    $("#tblVocabularyArabicToEnglishWord .tblVal").removeClass("TableCorrectcell")
    $("#tblVocabularyArabicToEnglishWord .tblVal").removeClass("TableWrongcell")

}
function FillVocabularyCorrectAnswerArabicToEnglishWord()
{
    SubmitStudentAnswer(1, VocabularyArabicToEnglishWordArray[VocabularyArabicToEnglishOrderNo].ID, false)
    var elm = $("#tblVocabularyArabicToEnglishWord .tblVal")[VocabularyArabicToEnglishOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")

    $("#txtVocabularyArabicToEnglishWord").val($("#CorrectWordVocabulary").val());
    $("#txtVocabularyArabicToEnglishWord").attr("class", " text-center Correct")
    $("#txtVocabularyArabicToEnglishWord").attr("disabled", "disabled");
    $("#btnIDontKnowVocabularyArabicToEnglishWord").hide();
    if (!(typeof LastQuestionVocabularyArabicToEnglishWord == "undefined"))
    {
        if (LastQuestionVocabularyArabicToEnglishWord == true)
        {
            $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
            $("#btnNewVocabularyArabicToEnglishWord").show();

            $("#alertHeader").addClass("bg-success")
            $("#AlertClosebtn").addClass("btn-success")
            $("#alertHeader").removeClass("bg-danger")
            $("#AlertClosebtn").removeClass("btn-danger")
            $("#ShowMsg").click();
        }
    }
}
function GetVocabularyNextArabicToEnglishWord()
{
    console.log("GetVocabularyNextArabicToEnglishWord")

    if ($("#txtVocabularyArabicToEnglishWord").val().length == 0 && VocabularyArabicToEnglishOrderNo > -1)
    {
        $("#AlertText").text("يجب كتابة الاجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }
    if ($("#txtVocabularyArabicToEnglishWord").hasClass("Wrong") && VocabularyArabicToEnglishOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof VocabularyArabicToEnglishOrderNo == "undefined")
    {
        VocabularyArabicToEnglishOrderNo = -1;
    } else
    {
        VocabularyArabicToEnglishOrderNo = VocabularyArabicToEnglishOrderNo + 1;
    }
    if (VocabularyArabicToEnglishWordArray.length == 0)
    {
        $("#txtVocabularyArabicWord").hide();
        $("#txtVocabularyArabicToEnglishWord").hide();
        $("#btnIDontKnowVocabularyArabicToEnglishWord").hide();
        $("#btnNewVocabularyArabicToEnglishWord").hide();
        $("#btnNextVocabularyArabicToEnglishWord").hide();
        $("#NotFoundVocabularyArabicToEnglishWord").show();
    }
    else if (VocabularyArabicToEnglishOrderNo >= VocabularyArabicToEnglishWordArray.length)
    {
        $("#txtVocabularyArabicWord").hide();
        $("#txtVocabularyArabicToEnglishWord").hide();
        $("#btnIDontKnowVocabularyArabicToEnglishWord").hide();
        $("#btnNewVocabularyArabicToEnglishWord").hide();
        $("#btnNextVocabularyArabicToEnglishWord").hide();
        $("#NotFoundVocabularyArabicToEnglishWord").show();
    }
    else
    {
        $("#imgVocabularyArabicToEnglish").attr("src", "")

        var Question = VocabularyArabicToEnglishWordArray[VocabularyArabicToEnglishOrderNo];
        $("#NotFoundVocabularyArabicToEnglishWord").hide();
        $("#txtVocabularyArabicWord").attr("value", Question.WordAr)
        $("#CorrectWordVocabulary").attr("value", Question.WordEn)
        $("#txtVocabularyArabicToEnglishWord").val("");
        $("#txtVocabularyArabicToEnglishWord").attr("class", "text-center ")
        $("#btnIDontKnowVocabularyArabicToEnglishWord").show();
        $("#txtVocabularyArabicToEnglishWord").removeAttr("disabled");

        if (Question.WordImg.length > 0)
        {
            $("#imgVocabularyArabicToEnglish").attr("src", "https://exe.pcdotnet.com.jo/files/Images/" + Question.WordImg);

            $("#imgVocabularyArabicToEnglish").show();
        }
        else
        {
            $("#imgVocabularyArabicToEnglish").hide();

            $("#imgVocabularyArabicToEnglish").attr("src", "");

        }



        var Next = VocabularyArabicToEnglishOrderNo + 1;
        if (Next >= VocabularyArabicToEnglishWordArray.length)
        {
            $("#btnNextVocabularyArabicToEnglishWord").hide();
            if (!(typeof LastQuestionVocabularyArabicToEnglishWord == "undefined"))
            {
                LastQuestionVocabularyArabicToEnglishWord = true;
            }

        }
        else
        {
            $("#btnNextVocabularyArabicToEnglishWord").show();
            $("#btnNewVocabularyArabicToEnglishWord").hide();

        }

    }

}
$("#txtVocabularyArabicToEnglishWord").on("change paste keyup", function ()
{
    if ($("#txtVocabularyArabicToEnglishWord").val().toLowerCase() == $("#CorrectWordVocabulary").attr("value").toLowerCase())
    {

        var elm = $("#tblVocabularyArabicToEnglishWord .tblVal")[VocabularyArabicToEnglishOrderNo];
        $(elm).removeClass("TableWrongcell")

        $(elm).addClass("TableCorrectcell")

        SubmitStudentAnswer(1, VocabularyArabicToEnglishWordArray[VocabularyArabicToEnglishOrderNo].ID, true)
        $("#txtVocabularyArabicToEnglishWord").attr("class", " text-center Correct");
        $("#btnIDontKnowVocabularyArabicToEnglishWord").hide();
        $("#txtVocabularyArabicToEnglishWord").attr("disabled", "disabled");
        if (!(typeof LastQuestionVocabularyArabicToEnglishWord == "undefined"))
        {
            if (LastQuestionVocabularyArabicToEnglishWord == true)
            {
                $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                $("#btnNewVocabularyArabicToEnglishWord").show();
                $("#alertHeader").addClass("bg-success")
                $("#AlertClosebtn").addClass("btn-success")
                $("#alertHeader").removeClass("bg-danger")
                $("#AlertClosebtn").removeClass("btn-danger")
                $("#ShowMsg").click();
            }
        }
    }

    else
    {
        $("#txtVocabularyArabicToEnglishWord").attr("class", "text-center Wrong")
        //var elm = $("#tblVocabularyArabicToEnglishWord .tblVal")[VocabularyArabicToEnglishOrderNo];
        //$(elm).removeClass("TableCorrectcell")

        //$(elm).addClass("TableWrongcell")

    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///     Vocabulary   Drag and drop  functions

function NewVocabularyDragAndDropExercise()
{

    LastQuestionVocabularyDragAndDrop = false;
    VocabularyDragAndDropOrderNo = -1;
    GetNextVocabularyDragAndDrop();

    $("#tblVocabularyDragAndDrop .tblVal").removeClass("TableCorrectcell")
    $("#tblVocabularyDragAndDrop .tblVal").removeClass("TableWrongcell")

}
function CheckVocabularySentenceCorrect()
{
    if ($("#VocabularydropIt").text().trim().length > 0)
    {
        $("#DragHereMsgVocabulary").remove();
    }
    else
    {
        var divprepend = $('<span/>')
            .attr("id", "DragHereMsgVocabulary")
            .text("اسحب هنا")
            .appendTo($("#VocabularydropIt"));
    }
    if ($("#holderVocabulary").text().length == 0)
    {
        if ($("#VocabularyCorrectSentence").val() == $("#VocabularydropIt").text().trim())
        {
            $("#VocabularydropIt").removeClass("WrongSentence")
            $("#imgVocabularyWrongDragAndDrop").addClass("d-none");

            $("#imgVocabularySuccessDragAndDrop").removeClass("d-none");

            $("#VocabularydropIt").addClass("VocabularyCorrectSentence")
            SubmitStudentAnswer(2, VocabularyDragAndDropArray[VocabularyDragAndDropOrderNo].ID, true)
            var elm = $("#tblVocabularyDragAndDrop .tblVal")[VocabularyDragAndDropOrderNo];
            $(elm).removeClass("TableWrongcell")
            $(elm).addClass("TableCorrectcell")

            $("#VocabularydropIt").removeAttr("ondragEnter")
            $("#VocabularydropIt").removeAttr("ondrop")
            $("#VocabularydropIt").removeAttr("ondragOver")
            $("#VocabularydropIt").removeAttr("ondragStart")

            $("#VocabularydropIt").attr("ondragStart", "return false;")
            $("#VocabularydropIt").attr("ondrop", "return false;")
            $("#btnIDontKnowVocabularyDragAndDrop").hide();
            if (!(typeof LastQuestionVocabularyDragAndDrop == "undefined"))
            {
                if (LastQuestionVocabularyDragAndDrop == true)
                {
                    $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                    $("#btnNewVocabularyDragAndDrop").show();
                    $("#alertHeader").addClass("bg-success")
                    $("#AlertClosebtn").addClass("btn-success")
                    $("#alertHeader").removeClass("bg-danger")
                    $("#AlertClosebtn").removeClass("btn-danger")
                    $("#ShowMsg").click();

                }
            }

        }
        else
        {
            $("#imgVocabularySuccessDragAndDrop").addClass("d-none");

            $("#VocabularydropIt").removeClass("VocabularyCorrectSentence")

            $("#VocabularydropIt").addClass("WrongSentence")
            $("#imgVocabularyWrongDragAndDrop").removeClass("d-none");
        }
    }
    else
    {
        $("#VocabularydropIt").removeClass("WrongSentence")
        $("#imgVocabularyWrongDragAndDrop").addClass("d-none");
        $("#imgVocabularySuccessDragAndDrop").addClass("d-none");
        $("#VocabularydropIt").removeClass("VocabularyCorrectSentence")
    }
}
function GetNextVocabularyDragAndDrop()
{

    if ($("#holderVocabulary div").text().length > 0 && VocabularyDragAndDropOrderNo > -1)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (!$("#VocabularydropIt").hasClass("VocabularyCorrectSentence") && VocabularyDragAndDropOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }


    if (typeof VocabularyDragAndDropOrderNo == "undefined")
    {
        VocabularyDragAndDropOrderNo = -1;
    } else
    {
        VocabularyDragAndDropOrderNo = VocabularyDragAndDropOrderNo + 1;
    }

    $("#holderVocabulary").html("");
    $("#VocabularydropIt div").remove();
    $("#VocabularydropIt").removeClass("VocabularyCorrectSentence")
    $("#imgVocabularySuccessDragAndDrop").addClass("d-none");

    $("#imgVocabularyWrongDragAndDrop").addClass("d-none");


    var Question = VocabularyDragAndDropArray[VocabularyDragAndDropOrderNo];

    if (VocabularyDragAndDropArray.length == 0)
    {
        $("#holderVocabulary").hide();
        $("#VocabularydropIt").hide();
        $("#btnNewVocabularyDragAndDrop").hide();
        $("#btnIDontKnowVocabularyDragAndDrop").hide();
        $("#NotFoundVocabularyDragAndDrop").show();
        $("#btnNextVocabularyDragAndDrop").hide();
    }
    else if (VocabularyDragAndDropOrderNo >= VocabularyDragAndDropArray.length)
    {
        $("#holderVocabulary").hide();
        $("#VocabularydropIt").hide();
        $("#btnNewVocabularyDragAndDrop").hide();
        $("#btnIDontKnowVocabularyDragAndDrop").hide();
        $("#NotFoundVocabularyDragAndDrop").show();
        $("#btnNextVocabularyDragAndDrop").hide();
    }
    else
    {
        $("#NotFoundVocabularyDragAndDrop").hide();
        $("#VocabularydropIt").removeAttr("ondragEnter")
        $("#VocabularydropIt").removeAttr("ondrop")
        $("#VocabularydropIt").removeAttr("ondragOver")
        $("#VocabularydropIt").removeAttr("ondragStart")

        $("#VocabularydropIt").attr("ondragEnter", "return VocabularydragEnter(event)")
        $("#VocabularydropIt").attr("ondrop", "return VocabularydragDrop(event)")
        $("#VocabularydropIt").attr("ondragOver", "return VocabularydragOver(event)")
        $("#btnIDontKnowVocabularyDragAndDrop").show();


        var str = Question.Sentence;
        $("#VocabularyCorrectSentenceVal").val(str);

        var res = str.split(" ");
        var holderVocabulary = $("#holderVocabulary");

        var arr = [];
        while (arr.length < res.length)
        {
            var r = Math.floor(Math.random() * res.length);
            if (arr.indexOf(r) === -1) arr.push(r);
        }



        $("#VocabularyCorrectSentence").val(str.split(/\s/).join(''));

        $.each(arr, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxVocabularyDragAndDrop" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "VocabularydragClick(this)")
                .attr("ondragStart", "return VocabularydragStart(event)")
                .text(res[vali])
                .appendTo(holderVocabulary);
        });

        var Next = VocabularyDragAndDropOrderNo + 1;

        if (Next >= VocabularyDragAndDropArray.length)
        {

            if (!(typeof LastQuestionVocabularyDragAndDrop == "undefined"))
            {
                LastQuestionVocabularyDragAndDrop = true;
            }
            $("#btnNextVocabularyDragAndDrop").hide();

        }
        else
        {
            $("#btnNextVocabularyDragAndDrop").show();

            $("#btnNewVocabularyDragAndDrop").hide();
        }

    }
}
function FillCorrectVocabularyAnswerDragAndDrop()
{

    var str = $("#VocabularyCorrectSentenceVal").val();
    $("#holderVocabulary div").remove()
    $("#VocabularydropIt div").remove()
    var res = str.split(" ");
    var holderVocabulary = $("#VocabularydropIt");

    $.each(res, function (i, vali)
    {
        var divinputgroup = $('<div/>')
            .attr("id", "BoxVocabularyDragAndDrop" + i)
            .addClass("drag")
            .attr("draggable", "true")
            .attr("ondragStart", "return VocabularydragStart(event)")
            .text(vali)
            .appendTo(holderVocabulary);
    });
    SubmitStudentAnswer(2, VocabularyDragAndDropArray[VocabularyDragAndDropOrderNo].ID, false)

    CheckVocabularySentenceCorrect();
    var elm = $("#tblVocabularyDragAndDrop .tblVal")[VocabularyDragAndDropOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")
}
function VocabularydragStart(ev)
{
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function VocabularydragEnter(ev)
{
    event.preventDefault();
    return true;
}
function VocabularydragOver(ev)
{
    event.preventDefault();
}
function VocabularydragDrop(ev)
{
    var t = $(ev.target);
    if ($(t).is("article"))
    {
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        ev.stopPropagation();

        CheckVocabularySentenceCorrect();
    }



    return false;
}
function VocabularydragClick(obj)
{
    console.log($(obj).parent().attr("id"))
    if ($(obj).parent().attr("id") == "holderVocabulary")
    {
        document.getElementById("VocabularydropIt").appendChild(obj);
        CheckVocabularySentenceCorrect();
    }
    else
    {

        document.getElementById("holderVocabulary").appendChild(obj);
        CheckVocabularySentenceCorrect();
    }


}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Vocabulary    Complete Space


function CheckVocabularyCorrectCompleteSpace()
{
    $("#VocabularydropItCompleteSpace").removeClass("correctCompleteSpace");
    $("#VocabularydropItCompleteSpace").removeClass("wrongCompleteSpace");


    if ($("#CorrectVocabularyCompleteSpaceVal").val() == $("#VocabularydropItCompleteSpace div").text())
    {
        SubmitStudentAnswer(3, VocabularyCorrectCompleteSpaceArray[VocabularyCompleteSpaceOrderNo].ID, true)
        var elm = $("#tblVocabularyCorrectCompleteSpace .tblVal")[VocabularyCompleteSpaceOrderNo];
        $(elm).removeClass("TableWrongcell")
        $(elm).addClass("TableCorrectcell")

        $("#VocabularydropItCompleteSpace").addClass("correctCompleteSpace")
        $("#btnIDontKnowVocabularyCompleteSpace").hide();
        $("#VocabularydropItCompleteSpace").removeAttr("ondragEnter")
        $("#VocabularydropItCompleteSpace").removeAttr("ondrop")
        $("#VocabularydropItCompleteSpace").removeAttr("ondragOver")
        $("#VocabularydropItCompleteSpace").removeAttr("ondragStart")
        $('div[id^="BoxVocabularyCompleteSpace"]').removeAttr("draggable")   // matches those that begin with 'tcol'


        if (!(typeof LastVocabularyQuestionCompleteSpace == "undefined"))
        {
            if (LastVocabularyQuestionCompleteSpace == true)
            {
                $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                $("#btnNewVocabularyCompleteSpace").show();

                $("#alertHeader").addClass("bg-success")
                $("#AlertClosebtn").addClass("btn-success")
                $("#alertHeader").removeClass("bg-danger")
                $("#AlertClosebtn").removeClass("btn-danger")
                $("#ShowMsg").click();
            }
        }


    }
    else
    {

        $("#VocabularydropItCompleteSpace").addClass("wrongCompleteSpace")

    }


}
function FillCorrectVocabularyAnswerCompleteSpace()
{

    $("#VocabularydropItCompleteSpace div").remove();

    var correctid = "BoxVocabularyCompleteSpace" + $("#CorrectVocabularyCompleteSpaceValID").val();
    $("#" + correctid).remove();
    var correct = $("#CorrectVocabularyCompleteSpaceVal").val();
    var holderVocabulary = $("#VocabularydropItCompleteSpace");
    var divinputgroup = $('<div/>')
        .attr("id", "BoxVocabularyCompleteSpace")
        .addClass("drag")
        .attr("draggable", "true")
        .attr("ondragStart", "return VocabularydragStartCompleteSpace(event)")
        .text(correct)
        .appendTo(holderVocabulary);
    SubmitStudentAnswer(3, VocabularyCorrectCompleteSpaceArray[VocabularyCompleteSpaceOrderNo].ID, false)


    CheckVocabularyCorrectCompleteSpace();
    var elm = $("#tblVocabularyCorrectCompleteSpace .tblVal")[VocabularyCompleteSpaceOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")

}
function NewVocabularyCompleteSpaceExercise()
{
    if ($("#VocabularydropItCompleteSpace div").text().length == 0 && VocabularyCompleteSpaceOrderNo > 0)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    VocabularyCompleteSpaceOrderNo = -1;
    if ((typeof LastVocabularyQuestionCompleteSpace == "undefined"))
    {
        LastVocabularyQuestionCompleteSpace = false;
    } else
    {
        var LastVocabularyQuestionCompleteSpace = false;
    }
    GetNextVocabularyCompleteSpace();
    $("#tblVocabularyCorrectCompleteSpace .tblVal").removeClass("TableCorrectcell")
    $("#tblVocabularyCorrectCompleteSpace .tblVal").removeClass("TableWrongcell")

}
function GetNextVocabularyCompleteSpace()
{

    if ($("#VocabularydropItCompleteSpace div").text().length == 0 && VocabularyCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (!$("#VocabularydropItCompleteSpace").hasClass("correctCompleteSpace") && VocabularyCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof VocabularyCompleteSpaceOrderNo == "undefined")
    {
        VocabularyCompleteSpaceOrderNo = -1;
    }
    else
    {
        VocabularyCompleteSpaceOrderNo = VocabularyCompleteSpaceOrderNo + 1;
    }

    if (VocabularyCorrectCompleteSpaceArray.length == 0)
    {
        $("#NotFoundVocabularyCompleteSpace").show();
        $("#btnIDontKnowVocabularyCompleteSpace").hide();
        $("#btnNextVocabularyCompleteSpace").hide();
        $("#holderVocabularyCompleteSpace").hide();
        $("#divQuestionAreaVocabularyCompleteSpace").hide();

    }
    else if (VocabularyCompleteSpaceOrderNo >= VocabularyCorrectCompleteSpaceArray.length)
    {
        $("#NotFoundVocabularyCompleteSpace").show();
        $("#btnIDontKnowVocabularyCompleteSpace").hide();
        $("#btnNextVocabularyCompleteSpace").hide();
        $("#holderVocabularyCompleteSpace").hide();
        $("#divQuestionAreaVocabularyCompleteSpace").hide();

    }
    else
    {
        var Question = VocabularyCorrectCompleteSpaceArray[VocabularyCompleteSpaceOrderNo];
        $("#NotFoundVocabularyCompleteSpace").hide();
        $("#btnIDontKnowVocabularyCompleteSpace").show();
        $("#btnNextVocabularyCompleteSpace").show();
        $("#holderVocabularyCompleteSpace").show();
        $("#divQuestionAreaVocabularyCompleteSpace").show();
        $("#VocabularydropItCompleteSpace div").remove();
        $("#VocabularydropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#VocabularydropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderVocabularyCompleteSpace div").remove();

        $("#VocabularydropItCompleteSpace").removeAttr("ondragEnter")
        $("#VocabularydropItCompleteSpace").removeAttr("ondrop")
        $("#VocabularydropItCompleteSpace").removeAttr("ondragOver")

        $("#VocabularydropItCompleteSpace").attr("ondragEnter", "return VocabularydragEnterCompleteSpace(event)")
        $("#VocabularydropItCompleteSpace").attr("ondrop", "return VocabularydragDropCompleteSpace(event)")
        $("#VocabularydropItCompleteSpace").attr("ondragOver", "return VocabularydragOverCompleteSpace(event)")
        $("#btnIDontKnowVocabularyCompleteSpace").show();


        var str = Question.Question;

        var res = str.split("@");

        $("#txtVocabularyCompleteSpacePart1").text(res[0])
        $("#txtVocabularyCompleteSpacePart2").text(res[1])


        var holderVocabulary = $("#holderVocabularyCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxVocabularyCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "VocabularydragClickCompleteSpace(this);")
                .attr("ondragStart", "return VocabularydragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderVocabulary);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectVocabularyCompleteSpaceVal").val(vali.Name);
                $("#CorrectVocabularyCompleteSpaceValID").val(i);
            }
        });

        var Next = VocabularyCompleteSpaceOrderNo + 1;
        if (Next >= VocabularyCorrectCompleteSpaceArray.length)
        {

            $("#btnNextVocabularyCompleteSpace").hide();


            if (!(typeof LastVocabularyQuestionCompleteSpace == "undefined"))
            {
                LastVocabularyQuestionCompleteSpace = true;
            }
        }
        else
        {

            $("#btnNextVocabularyCompleteSpace").show();

            $("#btnNewVocabularyCompleteSpace").hide();

            if (!(typeof LastVocabularyQuestionCompleteSpace == "undefined"))
            {
                LastVocabularyQuestionCompleteSpace = false;
            }

        }
    }

}
function VocabularydragClickCompleteSpace(obj)
{
    if ($("#VocabularydropItCompleteSpace").text().length > 0)
    {
        return;
    }

    document.getElementById("VocabularydropItCompleteSpace").appendChild(obj);
    setTimeout(function ()
    {
        CheckVocabularyCorrectCompleteSpace();
    }, 500);
}
function VocabularydragStartCompleteSpace(ev)
{

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));

    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function VocabularydragEnterCompleteSpace(ev)
{
    event.preventDefault();
    return true;
}
function VocabularydragOverCompleteSpace(ev)
{
    event.preventDefault();
}
function VocabularydragDropCompleteSpace(ev)
{

    var t = $(ev.target);
    if ($(t).is("article"))
    {
        if ($(t).text().length == 0)
        {
            var data = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(data));
            ev.stopPropagation();
            CheckVocabularyCorrectCompleteSpace();
        }

    }



    return false;
}
$(document).on("click", "#VocabularydropItCompleteSpace", function (event)
{
    if ($("#VocabularydropItCompleteSpace").hasClass("wrongCompleteSpace"))
    {
        var Question = VocabularyCorrectCompleteSpaceArray[VocabularyCompleteSpaceOrderNo];
        $("#NotFoundVocabularyCompleteSpace").hide();
        $("#btnIDontKnowVocabularyCompleteSpace").show();
        $("#btnNextVocabularyCompleteSpace").show();
        $("#holderVocabularyCompleteSpace").show();
        $("#divQuestionAreaVocabularyCompleteSpace").show();
        $("#VocabularydropItCompleteSpace div").remove();
        $("#VocabularydropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#VocabularydropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderVocabularyCompleteSpace div").remove();

        $("#VocabularydropItCompleteSpace").removeAttr("ondragEnter")
        $("#VocabularydropItCompleteSpace").removeAttr("ondrop")
        $("#VocabularydropItCompleteSpace").removeAttr("ondragOver")

        $("#VocabularydropItCompleteSpace").attr("ondragEnter", "return VocabularydragEnterCompleteSpace(event)")
        $("#VocabularydropItCompleteSpace").attr("ondrop", "return VocabularydragDropCompleteSpace(event)")
        $("#VocabularydropItCompleteSpace").attr("ondragOver", "return VocabularydragOverCompleteSpace(event)")
        $("#btnIDontKnowVocabularyCompleteSpace").show();


        var str = Question.Question;

        var res = str.split("@");

        $("#txtVocabularyCompleteSpacePart1").text(res[0])
        $("#txtVocabularyCompleteSpacePart2").text(res[1])


        var holderVocabulary = $("#holderVocabularyCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxVocabularyCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "VocabularydragClickCompleteSpace(this);")
                .attr("ondragStart", "return VocabularydragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderVocabulary);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectVocabularyCompleteSpaceVal").val(vali.Name);
                $("#CorrectVocabularyCompleteSpaceValID").val(i);
            }
        });

        var Next = VocabularyCompleteSpaceOrderNo + 1;
        if (Next >= VocabularyCorrectCompleteSpaceArray.length)
        {

            $("#btnNextVocabularyCompleteSpace").hide();


            if (!(typeof LastVocabularyQuestionCompleteSpace == "undefined"))
            {
                LastVocabularyQuestionCompleteSpace = true;
            }
        }
        else
        {

            $("#btnNextVocabularyCompleteSpace").show();

            $("#btnNewVocabularyCompleteSpace").hide();

            if (!(typeof LastVocabularyQuestionCompleteSpace == "undefined"))
            {
                LastVocabularyQuestionCompleteSpace = false;
            }

        }
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///   Listening  Arabic To English Word Functions

function NewListeningArabicToEnglishWordExercise()
{
    LastQuestionListeningArabicToEnglishWord = false;
    ListeningArabicToEnglishOrderNo = -1;
    GetListeningNextArabicToEnglishWord();
    $("#tblListeningArabicToEnglishWord .tblVal").removeClass("TableCorrectcell")
    $("#tblListeningArabicToEnglishWord .tblVal").removeClass("TableWrongcell")

}
function FillListeningCorrectAnswerArabicToEnglishWord()
{
    SubmitStudentAnswer(4, ListeningArabicToEnglishWordArray[ListeningArabicToEnglishOrderNo].ID, false)
    var elm = $("#tblListeningArabicToEnglishWord .tblVal")[ListeningArabicToEnglishOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")


    $("#txtListeningArabicToEnglishWord").val($("#CorrectWordListening").val());
    $("#txtListeningArabicToEnglishWord").attr("class", " text-center Correct")
    $("#txtListeningArabicToEnglishWord").attr("disabled", "disabled");
    $("#btnIDontKnowListeningArabicToEnglishWord").hide();
    if (!(typeof LastQuestionListeningArabicToEnglishWord == "undefined"))
    {
        if (LastQuestionListeningArabicToEnglishWord == true)
        {
            $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
            $("#btnNewListeningArabicToEnglishWord").show();

            $("#alertHeader").addClass("bg-success")
            $("#AlertClosebtn").addClass("btn-success")
            $("#alertHeader").removeClass("bg-danger")
            $("#AlertClosebtn").removeClass("btn-danger")
            $("#ShowMsg").click();
        }
    }
}
function GetListeningNextArabicToEnglishWord()
{
    if ($("#txtListeningArabicToEnglishWord").val().length == 0 && ListeningArabicToEnglishOrderNo > -1)
    {
        $("#AlertText").text("يجب كتابة الاجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if ($("#txtListeningArabicToEnglishWord").hasClass("Wrong") && ListeningArabicToEnglishOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof ListeningArabicToEnglishOrderNo == "undefined")
    {
        ListeningArabicToEnglishOrderNo = -1;
    } else
    {
        ListeningArabicToEnglishOrderNo = ListeningArabicToEnglishOrderNo + 1;
    }

    if (ListeningArabicToEnglishWordArray.length == 0)
    {
        // $("#txtListeningArabicWord").hide();
        $("#txtListeningArabicToEnglishWord").hide();
        $("#btnIDontKnowListeningArabicToEnglishWord").hide();
        $("#btnNewListeningArabicToEnglishWord").hide();
        $("#btnNextListeningArabicToEnglishWord").hide();
        $("#NotFoundListeningArabicToEnglishWord").show();
    }
    else if (ListeningArabicToEnglishOrderNo >= ListeningArabicToEnglishWordArray.length)
    {
        // $("#txtListeningArabicWord").hide();
        $("#txtListeningArabicToEnglishWord").hide();
        $("#btnIDontKnowListeningArabicToEnglishWord").hide();
        $("#btnNewListeningArabicToEnglishWord").hide();
        $("#btnNextListeningArabicToEnglishWord").hide();
        $("#NotFoundListeningArabicToEnglishWord").show();
    }

    else
    {
        $("#divAudioListeningArabicToEnglish audio").remove();
        $("#imgListeningArabicToEnglish").attr("src", "");

        var Question = ListeningArabicToEnglishWordArray[ListeningArabicToEnglishOrderNo];

        $("#NotFoundListeningArabicToEnglishWord").hide();

        // $("#txtListeningArabicWord").attr("value", Question.WordAr)
        $("#CorrectWordListening").attr("value", Question.WordEn)
        $("#txtListeningArabicToEnglishWord").val("");
        $("#txtListeningArabicToEnglishWord").attr("class", "text-center ")
        $("#btnIDontKnowListeningArabicToEnglishWord").show();
        $("#txtListeningArabicToEnglishWord").removeAttr("disabled");

        if (Question.WordImg.length > 0)
        {
            $("#imgListeningArabicToEnglish").attr("src", "https://exe.pcdotnet.com.jo/files/Images/" + Question.WordImg);

            $("#imgListeningArabicToEnglish").show();
        }
        else
        {
            $("#imgListeningArabicToEnglish").hide();

            $("#imgListeningArabicToEnglish").attr("src", "");

        }


        if (Question.WordMp3.length > 0)
        {
            var audiodiv = $("#divAudioListeningArabicToEnglish");

            var audio = $('<audio/>')
                .attr("controls", "")
                .appendTo(audiodiv);
            var audiosource = $('<source/>')
                .attr("type", "audio/mpeg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.WordMp3)
                .appendTo(audio);
            var audiosource2 = $('<source/>')
                .attr("type", "audio/ogg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.WordMp3)
                .appendTo(audio);
            $("#divAudioListeningArabicToEnglish").show();
        }
        else
        {
            $("#divAudioListeningArabicToEnglish").hide();

            $("#divAudioListeningArabicToEnglish").html("");

        }

        var Next = ListeningArabicToEnglishOrderNo + 1;

        if (Next >= ListeningArabicToEnglishWordArray.length)
        {

            $("#btnNextListeningArabicToEnglishWord").hide();


            if (!(typeof LastQuestionListeningArabicToEnglishWord == "undefined"))
            {
                LastQuestionListeningArabicToEnglishWord = true;
            }
        }
        else
        {
            $("#btnNextListeningArabicToEnglishWord").show();
            $("#btnNewListeningArabicToEnglishWord").hide();
            if (!(typeof LastQuestionListeningArabicToEnglishWord == "undefined"))
            {
                LastQuestionListeningArabicToEnglishWord = false;
            }



        }
    }


}
$("#txtListeningArabicToEnglishWord").on("change paste keyup", function ()
{
    if ($("#txtListeningArabicToEnglishWord").val().toLowerCase() == $("#CorrectWordListening").attr("value").toLowerCase())
    {
        SubmitStudentAnswer(4, ListeningArabicToEnglishWordArray[ListeningArabicToEnglishOrderNo].ID, true)
        var elm = $("#tblListeningArabicToEnglishWord .tblVal")[ListeningArabicToEnglishOrderNo];
        $(elm).removeClass("TableWrongcell")
        $(elm).addClass("TableCorrectcell")
        $("#txtListeningArabicToEnglishWord").attr("class", " text-center Correct");
        $("#btnIDontKnowListeningArabicToEnglishWord").hide();
        $("#txtListeningArabicToEnglishWord").attr("disabled", "disabled");
        if (!(typeof LastQuestionListeningArabicToEnglishWord == "undefined"))
        {
            if (LastQuestionListeningArabicToEnglishWord == true)
            {
                $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                $("#btnNewListeningArabicToEnglishWord").show();

                $("#alertHeader").addClass("bg-success")
                $("#AlertClosebtn").addClass("btn-success")
                $("#alertHeader").removeClass("bg-danger")
                $("#AlertClosebtn").removeClass("btn-danger")
                $("#ShowMsg").click();
            }
        }
    }
    //else if ($("#txtListeningArabicToEnglishWord").val().length >= 2) {

    //}
    else
    {
        $("#txtListeningArabicToEnglishWord").attr("class", "text-center Wrong")

    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///    Listening    Drag and drop  functions

function NewListeningDragAndDropExercise()
{
    $("#ListeningDragAndDropOrderNo").hide();
    LastQuestionListeningDragAndDrop = false;
    ListeningDragAndDropOrderNo = -1;
    GetNextListeningDragAndDrop();
    $("#tblListeningDragAndDrop .tblVal").removeClass("TableCorrectcell")
    $("#tblListeningDragAndDrop .tblVal").removeClass("TableWrongcell")


}
function CheckListeningSentenceCorrect()
{
    if ($("#ListeningdropIt").text().trim().length > 0)
    {
        $("#DragHereMsgListening").remove();
    }
    else
    {
        var divprepend = $('<span/>')
            .attr("id", "DragHereMsgListening")
            .text("اسحب هنا")
            .appendTo($("#ListeningdropIt"));
    }
    if ($("#holderListening").text().length == 0)
    {
        if ($("#ListeningCorrectSentence").val() == $("#ListeningdropIt").text().trim())
        {
            SubmitStudentAnswer(5, ListeningDragAndDropArray[ListeningDragAndDropOrderNo].ID, true);
            var elm = $("#tblListeningDragAndDrop .tblVal")[ListeningDragAndDropOrderNo];
            $(elm).removeClass("TableWrongcell")
            $(elm).addClass("TableCorrectcell")


            $("#ListeningdropIt").removeClass("WrongSentence")
            $("#imgListeningWrongDragAndDrop").addClass("d-none");

            $("#imgListeningSuccessDragAndDrop").removeClass("d-none");

            $("#ListeningdropIt").addClass("ListeningCorrectSentence")

            $("#ListeningdropIt").removeAttr("ondragEnter")
            $("#ListeningdropIt").removeAttr("ondrop")
            $("#ListeningdropIt").removeAttr("ondragOver")
            $("#ListeningdropIt").removeAttr("ondragStart")

            $("#ListeningdropIt").attr("ondragStart", "return false;")
            $("#ListeningdropIt").attr("ondrop", "return false;")
            $("#btnIDontKnowListeningDragAndDrop").hide();
            if (!(typeof LastQuestionListeningDragAndDrop == "undefined"))
            {
                if (LastQuestionListeningDragAndDrop == true)
                {
                    $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                    $("#btnNewListeningDragAndDrop").show();
                    $("#alertHeader").addClass("bg-success")
                    $("#AlertClosebtn").addClass("btn-success")
                    $("#alertHeader").removeClass("bg-danger")
                    $("#AlertClosebtn").removeClass("btn-danger")
                    $("#ShowMsg").click();
                }
            }

        }
        else
        {
            $("#imgListeningSuccessDragAndDrop").addClass("d-none");

            $("#ListeningdropIt").removeClass("ListeningCorrectSentence")

            $("#ListeningdropIt").addClass("WrongSentence")
            $("#imgListeningWrongDragAndDrop").removeClass("d-none");
        }
    }
    else
    {
        $("#ListeningdropIt").removeClass("WrongSentence")
        $("#imgListeningWrongDragAndDrop").addClass("d-none");
        $("#imgListeningSuccessDragAndDrop").addClass("d-none");
        $("#ListeningdropIt").removeClass("ListeningCorrectSentence")
    }
}
function GetNextListeningDragAndDrop()
{

    if ($("#holderListening div").text().length > 0 && ListeningDragAndDropOrderNo > -1)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (!$("#ListeningdropIt").hasClass("ListeningCorrectSentence") && ListeningDragAndDropOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof ListeningDragAndDropOrderNo == "undefined")
    {
        ListeningDragAndDropOrderNo = -1;
    } else
    {
        ListeningDragAndDropOrderNo = ListeningDragAndDropOrderNo + 1;
    }


    $("#holderListening").html("");
    $("#ListeningdropIt div").remove();
    $("#ListeningdropIt").removeClass("ListeningCorrectSentence")
    $("#imgListeningSuccessDragAndDrop").addClass("d-none");

    $("#imgListeningWrongDragAndDrop").addClass("d-none");

    if (ListeningDragAndDropArray.length == 0)
    {
        $("#holderListening").hide();
        $("#ListeningdropIt").hide();
        $("#btnNewListeningDragAndDrop").hide();
        $("#btnIDontKnowListeningDragAndDrop").hide();
        $("#NotFoundListeningDragAndDrop").show();
        $("#btnNextListeningDragAndDrop").hide();
    }

    else if (ListeningDragAndDropOrderNo >= ListeningDragAndDropArray.length)
    {
        $("#holderListening").hide();
        $("#ListeningdropIt").hide();
        $("#btnNewListeningDragAndDrop").hide();
        $("#btnIDontKnowListeningDragAndDrop").hide();
        $("#NotFoundListeningDragAndDrop").show();
        $("#btnNextListeningDragAndDrop").hide();
    }

    else
    {
        var Question = ListeningDragAndDropArray[ListeningDragAndDropOrderNo];
        $("#divAudioListeningDragAndDrop audio").remove();
        $("#NotFoundListeningDragAndDrop").hide();
        $("#ListeningdropIt").removeAttr("ondragEnter")
        $("#ListeningdropIt").removeAttr("ondrop")
        $("#ListeningdropIt").removeAttr("ondragOver")
        $("#ListeningdropIt").removeAttr("ondragStart")

        $("#ListeningdropIt").attr("ondragEnter", "return ListeningdragEnter(event)")
        $("#ListeningdropIt").attr("ondrop", "return ListeningdragDrop(event)")
        $("#ListeningdropIt").attr("ondragOver", "return ListeningdragOver(event)")
        $("#btnIDontKnowListeningDragAndDrop").show();


        var str = Question.Sentence;
        $("#ListeningCorrectSentenceVal").val(str);

        var res = str.split(" ");
        var holderListening = $("#holderListening");

        var arr = [];
        while (arr.length < res.length)
        {
            var r = Math.floor(Math.random() * res.length);
            if (arr.indexOf(r) === -1) arr.push(r);
        }



        $("#ListeningCorrectSentence").val(str.split(/\s/).join(''));

        $.each(arr, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "Box" + i)
                .addClass("drag")
                .attr("onclick", "ListeningdragClick(this)")
                .attr("draggable", "true")
                .attr("ondragStart", "return ListeningdragStart(event)")
                .text(res[vali])
                .appendTo(holderListening);
        });


        if (Question.Sentencemp3.length > 0)
        {
            var audiodiv = $("#divAudioListeningDragAndDrop");

            var audio = $('<audio/>')
                .attr("controls", "")
                .appendTo(audiodiv);
            var audiosource = $('<source/>')
                .attr("type", "audio/mpeg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.Sentencemp3)
                .appendTo(audio);
            var audiosource2 = $('<source/>')
                .attr("type", "audio/ogg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.Sentencemp3)
                .appendTo(audio);
            $("#divAudioListeningDragAndDrop").show();
        }
        else
        {
            $("#divAudioListeningDragAndDrop").hide();

            $("#divAudioListeningDragAndDrop").html("");

        }
        var Next = ListeningDragAndDropOrderNo + 1;
        if (Next >= ListeningDragAndDropArray.length)
        {

            $("#btnNextListeningDragAndDrop").hide();


            if (!(typeof LastQuestionListeningDragAndDrop == "undefined"))
            {
                LastQuestionListeningDragAndDrop = true;
            }
        }
        else
        {

            $("#btnNextListeningDragAndDrop").show();

            $("#btnNewListeningDragAndDrop").hide();
        }

    }


}
function FillCorrectListeningAnswerDragAndDrop()
{
    var str = $("#ListeningCorrectSentenceVal").val();
    $("#holderListening div").remove()
    $("#ListeningdropIt div").remove()
    var res = str.split(" ");
    var holderListening = $("#ListeningdropIt");

    $.each(res, function (i, vali)
    {
        var divinputgroup = $('<div/>')
            .attr("id", "Box" + i)
            .addClass("drag")
            .attr("draggable", "true")
            .attr("ondragStart", "return ListeningdragStart(event)")
            .text(vali)
            .appendTo(holderListening);
    });
    SubmitStudentAnswer(5, ListeningDragAndDropArray[ListeningDragAndDropOrderNo].ID, false);
    CheckListeningSentenceCorrect();
    var elm = $("#tblListeningDragAndDrop .tblVal")[ListeningDragAndDropOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")


}
function ListeningdragStart(ev)
{
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function ListeningdragClick(obj)
{
    if ($(obj).parent().attr("id") == "holderListening")
    {
        document.getElementById("ListeningdropIt").appendChild(obj);
        CheckListeningSentenceCorrect();
    }
    else
    {
        document.getElementById("holderListening").appendChild(obj);
        CheckListeningSentenceCorrect();
    }
}

function ListeningdragEnter(ev)
{
    event.preventDefault();
    return true;
}
function ListeningdragOver(ev)
{
    event.preventDefault();
}
function ListeningdragDrop(ev)
{
    var t = $(ev.target);
    if ($(t).is("article"))
    {
        var data = ev.dataTransfer.getData("Text");
        console.log(ev.target)
        ev.target.appendChild(document.getElementById(data));
        ev.stopPropagation();
        CheckListeningSentenceCorrect();
        //  ListeningdragClick(document.getElementById(data));
    }



    return false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Listening    Complete Space
function CheckListeningCorrectCompleteSpace()
{
    $("#ListeningdropItCompleteSpace").removeClass("correctCompleteSpace");
    $("#ListeningdropItCompleteSpace").removeClass("wrongCompleteSpace");


    if ($("#CorrectListeningCompleteSpaceVal").val() == $("#ListeningdropItCompleteSpace div").text())
    {
        SubmitStudentAnswer(6, ListeningCorrectCompleteSpaceArray[ListeningCompleteSpaceOrderNo].ID, true)
        var elm = $("#tblListeningCorrectCompleteSpace .tblVal")[ListeningCompleteSpaceOrderNo];
        $(elm).removeClass("TableWrongcell")
        $(elm).addClass("TableCorrectcell")

        $("#ListeningdropItCompleteSpace").addClass("correctCompleteSpace")
        $("#btnIDontKnowListeningCompleteSpace").hide();
        $("#ListeningdropItCompleteSpace").removeAttr("ondragEnter")
        $("#ListeningdropItCompleteSpace").removeAttr("ondrop")
        $("#ListeningdropItCompleteSpace").removeAttr("ondragOver")
        $("#ListeningdropItCompleteSpace").removeAttr("ondragStart")
        $('div[id^="BoxListeningCompleteSpace"]').removeAttr("draggable")   // matches those that begin with 'tcol'


        if (!(typeof LastListeningQuestionCompleteSpace == "undefined"))
        {
            if (LastListeningQuestionCompleteSpace == true)
            {
                $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                $("#btnNewListeningCompleteSpace").show();

                $("#alertHeader").addClass("bg-success")
                $("#AlertClosebtn").addClass("btn-success")
                $("#alertHeader").removeClass("bg-danger")
                $("#AlertClosebtn").removeClass("btn-danger")
                $("#ShowMsg").click();
            }
        }


    }
    else
    {

        $("#ListeningdropItCompleteSpace").addClass("wrongCompleteSpace")

    }


}
function FillCorrectListeningAnswerCompleteSpace()
{

    $("#ListeningdropItCompleteSpace div").remove();

    var correctid = "BoxListeningCompleteSpace" + $("#CorrectListeningCompleteSpaceValID").val();
    $("#" + correctid).remove();
    var correct = $("#CorrectListeningCompleteSpaceVal").val();
    var holderListening = $("#ListeningdropItCompleteSpace");
    var divinputgroup = $('<div/>')
        .attr("id", "BoxListeningCompleteSpace")
        .addClass("drag")
        .attr("draggable", "true")
        .attr("ondragStart", "return ListeningdragStartCompleteSpace(event)")
        .text(correct)
        .appendTo(holderListening);
    SubmitStudentAnswer(6, ListeningCorrectCompleteSpaceArray[ListeningCompleteSpaceOrderNo].ID, false)

    CheckListeningCorrectCompleteSpace();
    var elm = $("#tblListeningCorrectCompleteSpace .tblVal")[ListeningCompleteSpaceOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")

}
function NewListeningCompleteSpaceExercise()
{
    if ($("#ListeningdropItCompleteSpace div").text().length == 0 && ListeningCompleteSpaceOrderNo > 0)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    ListeningCompleteSpaceOrderNo = -1;
    LastListeningQuestionCompleteSpace = false;

    GetNextListeningCompleteSpace();
    $("#tblListeningCorrectCompleteSpace .tblVal").removeClass("TableCorrectcell")
    $("#tblListeningCorrectCompleteSpace .tblVal").removeClass("TableWrongcell")
}
function GetNextListeningCompleteSpace()
{
    if ($("#ListeningdropItCompleteSpace div").text().length == 0 && ListeningCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (!$("#ListeningdropItCompleteSpace").hasClass("correctCompleteSpace") && ListeningCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof ListeningCompleteSpaceOrderNo == "undefined")
    {
        ListeningCompleteSpaceOrderNo = -1;
    } else
    {
        ListeningCompleteSpaceOrderNo = ListeningCompleteSpaceOrderNo + 1;
    }



    if (ListeningCorrectCompleteSpaceArray.length == 0)
    {
        $("#NotFoundListeningCompleteSpace").show();
        $("#btnIDontKnowListeningCompleteSpace").hide();
        $("#btnNextListeningCompleteSpace").hide();
        $("#holderListeningCompleteSpace").hide();
        $("#divQuestionAreaListeningCompleteSpace").hide();

    }
    else if (ListeningCompleteSpaceOrderNo >= ListeningCorrectCompleteSpaceArray.length)
    {
        $("#NotFoundListeningCompleteSpace").show();
        $("#btnIDontKnowListeningCompleteSpace").hide();
        $("#btnNextListeningCompleteSpace").hide();
        $("#holderListeningCompleteSpace").hide();
        $("#divQuestionAreaListeningCompleteSpace").hide();

    }
    else
    {
        $("#NotFoundListeningCompleteSpace").hide();
        $("#divQuestionAreaListeningCompleteSpace").show();
        $("#divAudioListeningCompleteSpace Audio").remove(); /// remove audio
        var Question = ListeningCorrectCompleteSpaceArray[ListeningCompleteSpaceOrderNo];
        $("#holderListeningCompleteSpace").show();

        $("#btnIDontKnowListeningCompleteSpace").show();
        $("#btnNextListeningCompleteSpace").show();
        $("#ListeningdropItCompleteSpace div").remove();
        $("#ListeningdropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#ListeningdropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderListeningCompleteSpace div").remove();

        $("#ListeningdropItCompleteSpace").removeAttr("ondragEnter")
        $("#ListeningdropItCompleteSpace").removeAttr("ondrop")
        $("#ListeningdropItCompleteSpace").removeAttr("ondragOver")

        $("#ListeningdropItCompleteSpace").attr("ondragEnter", "return ListeningdragEnterCompleteSpace(event)")
        $("#ListeningdropItCompleteSpace").attr("ondrop", "return ListeningdragDropCompleteSpace(event)")
        $("#ListeningdropItCompleteSpace").attr("ondragOver", "return ListeningdragOverCompleteSpace(event)")


        var str = Question.Question;

        var res = str.split("@");

        $("#txtListeningCompleteSpacePart1").text(res[0])
        $("#txtListeningCompleteSpacePart2").text(res[1])


        var holderListening = $("#holderListeningCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxListeningCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "ListeningdragClickCompleteSpace(this)")
                .attr("ondragStart", "return ListeningdragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderListening);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectListeningCompleteSpaceVal").val(vali.Name);
                $("#CorrectListeningCompleteSpaceValID").val(i);

            }
        });

        if (Question.QuestionMp3.length > 0)
        {
            var audiodiv = $("#divAudioListeningCompleteSpace");

            var audio = $('<audio/>')
                .attr("controls", "")
                .appendTo(audiodiv);
            var audiosource = $('<source/>')
                .attr("type", "audio/mpeg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.QuestionMp3)
                .appendTo(audio);
            var audiosource2 = $('<source/>')
                .attr("type", "audio/ogg")
                .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.QuestionMp3)
                .appendTo(audio);
            $("#divAudioListeningCompleteSpace").show();
        }
        else
        {
            $("#divAudioListeningCompleteSpace").hide();

            $("#divAudioListeningCompleteSpace").html("");

        }
        var Next = ListeningCompleteSpaceOrderNo + 1;
        if (Next >= ListeningCorrectCompleteSpaceArray.length)
        {

            $("#btnNextListeningCompleteSpace").hide();


            if (!(typeof LastListeningQuestionCompleteSpace == "undefined"))
            {
                LastListeningQuestionCompleteSpace = true;
            }
        }
        else
        {
            $("#btnNextListeningCompleteSpace").show();

            $("#btnNewListeningCompleteSpace").hide();
        }
    }
}
function ListeningdragStartCompleteSpace(ev)
{

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));

    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function ListeningdragEnterCompleteSpace(ev)
{
    event.preventDefault();
    return true;
}
function ListeningdragOverCompleteSpace(ev)
{
    event.preventDefault();
}
function ListeningdragDropCompleteSpace(ev)
{

    var t = $(ev.target);
    if ($(t).is("article"))
    {
        if ($(t).text().length == 0)
        {
            var data = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(data));
            ev.stopPropagation();
            CheckListeningCorrectCompleteSpace();
        }

    }



    return false;
}
function ListeningdragClickCompleteSpace(obj)
{
    if ($("#ListeningdropItCompleteSpace").text().length > 0)
    {
        return;
    }

    document.getElementById("ListeningdropItCompleteSpace").appendChild(obj);
    setTimeout(function ()
    {
        CheckListeningCorrectCompleteSpace();
    }, 500);
}
$(document).on("click", "#ListeningdropItCompleteSpace", function (event)
{
    if ($("#ListeningdropItCompleteSpace").hasClass("wrongCompleteSpace"))
    {
        var Question = ListeningCorrectCompleteSpaceArray[ListeningCompleteSpaceOrderNo];
        $("#holderListeningCompleteSpace").show();

        $("#btnIDontKnowListeningCompleteSpace").show();
        $("#btnNextListeningCompleteSpace").show();
        $("#ListeningdropItCompleteSpace div").remove();
        $("#ListeningdropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#ListeningdropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderListeningCompleteSpace div").remove();

        $("#ListeningdropItCompleteSpace").removeAttr("ondragEnter")
        $("#ListeningdropItCompleteSpace").removeAttr("ondrop")
        $("#ListeningdropItCompleteSpace").removeAttr("ondragOver")

        $("#ListeningdropItCompleteSpace").attr("ondragEnter", "return ListeningdragEnterCompleteSpace(event)")
        $("#ListeningdropItCompleteSpace").attr("ondrop", "return ListeningdragDropCompleteSpace(event)")
        $("#ListeningdropItCompleteSpace").attr("ondragOver", "return ListeningdragOverCompleteSpace(event)")


        var str = Question.Question;

        var res = str.split("@");

        $("#txtListeningCompleteSpacePart1").text(res[0])
        $("#txtListeningCompleteSpacePart2").text(res[1])


        var holderListening = $("#holderListeningCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxListeningCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "ListeningdragClickCompleteSpace(this)")
                .attr("ondragStart", "return ListeningdragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderListening);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectListeningCompleteSpaceVal").val(vali.Name);
                $("#CorrectListeningCompleteSpaceValID").val(i);

            }
        });

        //if (Question.QuestionMp3.length > 0) {
        //    var audiodiv = $("#divAudioListeningCompleteSpace");

        //    var audio = $('<audio/>')
        //        .attr("controls", "")
        //        .appendTo(audiodiv);
        //    var audiosource = $('<source/>')
        //        .attr("type", "audio/mpeg")
        //        .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.QuestionMp3)
        //        .appendTo(audio);
        //    var audiosource2 = $('<source/>')
        //        .attr("type", "audio/ogg")
        //        .attr("src", "https://exe.pcdotnet.com.jo/files/Mp3/" + Question.QuestionMp3)
        //        .appendTo(audio);
        //    $("#divAudioListeningCompleteSpace").show();
        //}
        //else {
        //    $("#divAudioListeningCompleteSpace").hide();

        //    $("#divAudioListeningCompleteSpace").html("");

        //}
        var Next = ListeningCompleteSpaceOrderNo + 1;
        if (Next >= ListeningCorrectCompleteSpaceArray.length)
        {

            $("#btnNextListeningCompleteSpace").hide();


            if (!(typeof LastListeningQuestionCompleteSpace == "undefined"))
            {
                LastListeningQuestionCompleteSpace = true;
            }
        }
        else
        {
            $("#btnNextListeningCompleteSpace").show();

            $("#btnNewListeningCompleteSpace").hide();
        }
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Grammar    Complete Space


function CheckGrammarCorrectCompleteSpace()
{
    $("#GrammardropItCompleteSpace").removeClass("correctCompleteSpace");
    $("#GrammardropItCompleteSpace").removeClass("wrongCompleteSpace");


    if ($("#CorrectGrammarCompleteSpaceVal").val() == $("#GrammardropItCompleteSpace div").text())
    {
        SubmitStudentAnswer(8, GrammarCompleteSpaceArray[GrammarCompleteSpaceOrderNo].ID, true);
        var elm = $("#tblGrammarCompleteSpace .tblVal")[GrammarCompleteSpaceOrderNo];
        $(elm).removeClass("TableWrongcell")
        $(elm).addClass("TableCorrectcell")

        $("#GrammardropItCompleteSpace").addClass("correctCompleteSpace")
        $("#btnIDontKnowGrammarCompleteSpace").hide();
        $("#GrammardropItCompleteSpace").removeAttr("ondragEnter")
        $("#GrammardropItCompleteSpace").removeAttr("ondrop")
        $("#GrammardropItCompleteSpace").removeAttr("ondragOver")
        $("#GrammardropItCompleteSpace").removeAttr("ondragStart")
        $('div[id^="BoxGrammarCompleteSpace"]').removeAttr("draggable")   // matches those that begin with 'tcol'


        if (!(typeof LastGrammarQuestionCompleteSpace == "undefined"))
        {
            if (LastGrammarQuestionCompleteSpace == true)
            {
                $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
                $("#btnNewGrammarCompleteSpace").show();

                $("#alertHeader").addClass("bg-success")
                $("#AlertClosebtn").addClass("btn-success")
                $("#alertHeader").removeClass("bg-danger")
                $("#AlertClosebtn").removeClass("btn-danger")
                $("#ShowMsg").click();
            }
        }


    }
    else
    {

        $("#GrammardropItCompleteSpace").addClass("wrongCompleteSpace")

    }


}
function FillCorrectGrammarAnswerCompleteSpace()
{
    $("#GrammardropItCompleteSpace div").remove();

    var correctid = "BoxGrammarCompleteSpace" + $("#CorrectGrammarCompleteSpaceValID").val();
    $("#" + correctid).remove();
    var correct = $("#CorrectGrammarCompleteSpaceVal").val();
    var holderGrammar = $("#GrammardropItCompleteSpace");
    var divinputgroup = $('<div/>')
        .attr("id", "BoxGrammarCompleteSpace")
        .addClass("drag")
        .attr("draggable", "true")
        .attr("ondragStart", "return GrammardragStartCompleteSpace(event)")
        .text(correct)
        .appendTo(holderGrammar);
    SubmitStudentAnswer(8, GrammarCompleteSpaceArray[GrammarCompleteSpaceOrderNo].ID, false);

    CheckGrammarCorrectCompleteSpace();
    var elm = $("#tblGrammarCompleteSpace .tblVal")[GrammarCompleteSpaceOrderNo];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")

}
function NewGrammarCompleteSpaceExercise()
{
    if ($("#GrammardropItCompleteSpace div").text().length == 0 && GrammarCompleteSpaceOrderNo > 0)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    GrammarCompleteSpaceOrderNo = -1;

    LastGrammarQuestionCompleteSpace = false;

    GetNextGrammarCompleteSpace();
    $("#tblGrammarCompleteSpace .tblVal").removeClass("TableCorrectcell")
    $("#tblGrammarCompleteSpace .tblVal").removeClass("TableWrongcell")

}
function GetNextGrammarCompleteSpace()
{
    if ($("#GrammardropItCompleteSpace div").text().length == 0 && GrammarCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text("يجب اختيار اجابة")
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (!$("#GrammardropItCompleteSpace").hasClass("correctCompleteSpace") && GrammarCompleteSpaceOrderNo > -1)
    {
        $("#AlertText").text('اضغط على زر "لا اعلم" لمعرفة الاجابة الصحيحة')
        $("#alertHeader").removeClass("bg-success")
        $("#AlertClosebtn").removeClass("btn-success")
        $("#alertHeader").addClass("bg-danger")
        $("#AlertClosebtn").addClass("btn-danger")
        $("#ShowMsg").click();
        return;
    }

    if (typeof GrammarCompleteSpaceOrderNo == "undefined")
    {
        GrammarCompleteSpaceOrderNo = -1;
    } else
    {
        GrammarCompleteSpaceOrderNo = GrammarCompleteSpaceOrderNo + 1;
    }

    if (GrammarCompleteSpaceArray.length == 0)
    {
        $("#NotFoundGrammarCompleteSpace").show();
        $("#btnIDontKnowGrammarCompleteSpace").hide();
        $("#btnNextGrammarCompleteSpace").hide();
        $("#divQuestionAreaGrammarCompleteSpace").hide();
    }

    else if (GrammarCompleteSpaceOrderNo >= GrammarCompleteSpaceArray.length)
    {
        $("#NotFoundGrammarCompleteSpace").show();
        $("#btnIDontKnowGrammarCompleteSpace").hide();
        $("#btnNextGrammarCompleteSpace").hide();
        $("#divQuestionAreaGrammarCompleteSpace").hide();

    }
    else
    {
        var Question = GrammarCompleteSpaceArray[GrammarCompleteSpaceOrderNo];
        $("#NotFoundGrammarCompleteSpace").hide();
        $("#GrammardropItCompleteSpace div").remove();
        $("#GrammardropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#GrammardropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderGrammarCompleteSpace div").remove();
        $("#btnIDontKnowGrammarCompleteSpace").show();
        $("#btnNextGrammarCompleteSpace").show();
        $("#divQuestionAreaGrammarCompleteSpace").show();

        $("#GrammardropItCompleteSpace").removeAttr("ondragEnter")
        $("#GrammardropItCompleteSpace").removeAttr("ondrop")
        $("#GrammardropItCompleteSpace").removeAttr("ondragOver")

        $("#GrammardropItCompleteSpace").attr("ondragEnter", "return GrammardragEnterCompleteSpace(event)")
        $("#GrammardropItCompleteSpace").attr("ondrop", "return GrammardragDropCompleteSpace(event)")
        $("#GrammardropItCompleteSpace").attr("ondragOver", "return GrammardragOverCompleteSpace(event)")
        $("#btnIDontKnowGrammarCompleteSpace").show();


        var str = Question.Question;

        var res = str.split("@");

        $("#txtGrammarCompleteSpacePart1").text(res[0])
        $("#txtGrammarCompleteSpacePart2").text(res[1])


        var holderGrammar = $("#holderGrammarCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxGrammarCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "GrammardragClickCompleteSpace(this)")
                .attr("ondragStart", "return GrammardragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderGrammar);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectGrammarCompleteSpaceVal").val(vali.Name);
                $("#CorrectGrammarCompleteSpaceValID").val(i);

            }
        });

        var Next = GrammarCompleteSpaceOrderNo + 1;
        if (Next >= GrammarCompleteSpaceArray.length)
        {

            $("#btnNextGrammarCompleteSpace").hide();


            if (!(typeof LastGrammarQuestionCompleteSpace == "undefined"))
            {
                LastGrammarQuestionCompleteSpace = true;
            }
        }
        else
        {

            $("#btnNextGrammarCompleteSpace").show();

            $("#btnNewGrammarCompleteSpace").hide();

            if (!(typeof LastGrammarQuestionCompleteSpace == "undefined"))
            {
                LastGrammarQuestionCompleteSpace = false;
            }

        }
    }
}
function GrammardragStartCompleteSpace(ev)
{

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));

    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function GrammardragEnterCompleteSpace(ev)
{
    event.preventDefault();
    return true;
}
function GrammardragOverCompleteSpace(ev)
{
    event.preventDefault();
}
function GrammardragDropCompleteSpace(ev)
{

    var t = $(ev.target);
    if ($(t).is("article"))
    {
        if ($(t).text().length == 0)
        {
            var data = ev.dataTransfer.getData("Text");
            ev.target.appendChild(document.getElementById(data));
            ev.stopPropagation();
            CheckGrammarCorrectCompleteSpace();
        }

    }



    return false;
}
function GrammardragClickCompleteSpace(obj)
{
    if ($("#GrammardropItCompleteSpace").text().length > 0)
    {
        return;
    }
    document.getElementById("GrammardropItCompleteSpace").appendChild(obj);
    setTimeout(function ()
    {
        CheckGrammarCorrectCompleteSpace();
    }, 500);
}
$(document).on("click", "#GrammardropItCompleteSpace", function (event)
{
    if ($("#GrammardropItCompleteSpace").hasClass("wrongCompleteSpace"))
    {
        var Question = GrammarCompleteSpaceArray[GrammarCompleteSpaceOrderNo];
        $("#NotFoundGrammarCompleteSpace").hide();
        $("#GrammardropItCompleteSpace div").remove();
        $("#GrammardropItCompleteSpace").removeClass("wrongCompleteSpace")
        $("#GrammardropItCompleteSpace").removeClass("correctCompleteSpace")
        $("#holderGrammarCompleteSpace div").remove();
        $("#btnIDontKnowGrammarCompleteSpace").show();
        $("#btnNextGrammarCompleteSpace").show();
        $("#divQuestionAreaGrammarCompleteSpace").show();

        $("#GrammardropItCompleteSpace").removeAttr("ondragEnter")
        $("#GrammardropItCompleteSpace").removeAttr("ondrop")
        $("#GrammardropItCompleteSpace").removeAttr("ondragOver")

        $("#GrammardropItCompleteSpace").attr("ondragEnter", "return GrammardragEnterCompleteSpace(event)")
        $("#GrammardropItCompleteSpace").attr("ondrop", "return GrammardragDropCompleteSpace(event)")
        $("#GrammardropItCompleteSpace").attr("ondragOver", "return GrammardragOverCompleteSpace(event)")
        $("#btnIDontKnowGrammarCompleteSpace").show();


        var str = Question.Question;

        var res = str.split("@");

        $("#txtGrammarCompleteSpacePart1").text(res[0])
        $("#txtGrammarCompleteSpacePart2").text(res[1])


        var holderGrammar = $("#holderGrammarCompleteSpace");
        $.each(Question.ChoicesList, function (i, vali)
        {
            var divinputgroup = $('<div/>')
                .attr("id", "BoxGrammarCompleteSpace" + i)
                .addClass("drag")
                .attr("draggable", "true")
                .attr("onclick", "GrammardragClickCompleteSpace(this)")
                .attr("ondragStart", "return GrammardragStartCompleteSpace(event)")
                .text(vali.Name)
                .appendTo(holderGrammar);
            if (Boolean(vali.IsCorrect))
            {
                $("#CorrectGrammarCompleteSpaceVal").val(vali.Name);
                $("#CorrectGrammarCompleteSpaceValID").val(i);

            }
        });

        var Next = GrammarCompleteSpaceOrderNo + 1;
        if (Next >= GrammarCompleteSpaceArray.length)
        {

            $("#btnNextGrammarCompleteSpace").hide();


            if (!(typeof LastGrammarQuestionCompleteSpace == "undefined"))
            {
                LastGrammarQuestionCompleteSpace = true;
            }
        }
        else
        {

            $("#btnNextGrammarCompleteSpace").show();

            $("#btnNewGrammarCompleteSpace").hide();

            if (!(typeof LastGrammarQuestionCompleteSpace == "undefined"))
            {
                LastGrammarQuestionCompleteSpace = false;
            }

        }
    }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////      Grammar    Linking Words
function FillCorrectGrammarLinkingWords()
{
    $("#btnNewGrammarLinkingWords").show();
    $("#btnIDontKnowGrammarLinkingWords").hide();
    var Holder = $("#HoldersGrammarLinkingWords");
    var DropIt = $("#DropItGrammarLinkingWords");
    $("#DropItGrammarLinkingWords article").remove();
    $("#HoldersGrammarLinkingWords article").remove();

    $.each(GrammarLinkingWordsArray, function (i, vali)
    {

        var articleSentence2 = $('<article/>')
            .attr("id", "articleGrammarLinkingWordPart2" + i)
            .attr("articleNo", "articleGrammarLinkingWord" + i)
            .attr("ondrop", "return GrammarLinkingWordsdragDrop(event)")
            .attr("ondragenter", "return GrammarLinkingWordsdragEnter(event)")
            .attr("ondragover", "return GrammarLinkingWordsdragOver(event)")
            .attr("style", "width:100%;margin-top:20px;direction:ltr;position:relative")
            .appendTo(DropIt);

        var divSentence2 = $('<div/>')
            .attr("id", "BoxGrammarLinkingWordPart1" + i)
            .attr("SID", vali.ID)
            .addClass("dragLeftPiece")
            .text(vali.Sentence2)
            .attr("articleNo", "articleGrammarLinkingWord" + i)
            .attr("ondrop", "return GrammarLinkingWordsdragDrop(event)")
            .attr("ondragenter", "return GrammarLinkingWordsdragEnter(event)")
            .attr("ondragover", "return GrammarLinkingWordsdragOver(event)")
            .attr("articleNo", "articleGrammarLinkingWord" + i)
            .appendTo(articleSentence2);
        var divSentence1 = $('<div/>')
            .text(vali.Sentence1)
            .attr("id", "BoxGrammarLinkingWordPart2" + i)
            .addClass("dragRightPiece")
            .addClass("correctLinkingWords")

            .attr("ondragstart", "return GrammarLinkingWordsdragStart(event)")
            .appendTo(articleSentence2);
    });

    SubmitStudentAnswer(7, -1, false);
    var elm = $("#tblGrammarLinkingWords .tblVal")[0];
    $(elm).removeClass("TableCorrectcell")
    $(elm).addClass("TableWrongcell")

}

function NewGrammarLinkingWords()
{
    GetNextGrammarLinkingWords();
    $("#tblGrammarLinkingWords .tblVal").removeClass("TableCorrectcell")
    $("#tblGrammarLinkingWords .tblVal").removeClass("TableWrongcell")
}
function CheckGrammarLinkingWordsIsFinished()
{
    if (GrammarLinkingWordsArray.length == $(".correctLinkingWords").length)
    {
        $("#btnNewGrammarLinkingWords").show();
        $("#btnIDontKnowGrammarLinkingWords").hide();
        $("#AlertText").text("تهانينا لقد انهيت التمارين بنجاح")
        $("#alertHeader").addClass("bg-success")
        $("#AlertClosebtn").addClass("btn-success")
        $("#alertHeader").removeClass("bg-danger")
        $("#AlertClosebtn").removeClass("btn-danger")
        $("#ShowMsg").click();


    }

}

function CheckGrammarLinkingWords(elementid)
{
    var Box = $("#" + elementid);
    var Box1txt = $("#" + elementid).text();
    var Box2txt = $("#" + elementid).prev().text();
    var iscorrect = false;

    $.each(GrammarLinkingWordsArray, function (i, vali)
    {
        if ((vali.Sentence1 == Box1txt) && (vali.Sentence2 == Box2txt))
        {
            iscorrect = true;
        }
    });
    if (iscorrect == true)
    {
        Box.addClass("correctLinkingWords")
        Box.removeAttr("draggable")
        Box.removeAttr("ondragstart")

    }
    else
    {
        Box.addClass("wrongLinkingWords")
        //   SubmitStudentAnswer(7, sid, false);



    }
    iscorrect = false;
}
function GetNextGrammarLinkingWords()
{


    $("#DropItGrammarLinkingWords article").remove();
    $("#HoldersGrammarLinkingWords article").remove();


    if (GrammarLinkingWordsArray.length == 0)
    {
        $("#NotFoundGrammarLinkingWords").show();
        $("#divQuestionAreaGrammarLinkingWords").hide();
        $("#btnIDontKnowGrammarLinkingWords").hide();
        $("#btnNewGrammarLinkingWords").hide();
    }
    else
    {
        $("#NotFoundGrammarLinkingWords").hide();
        $("#divQuestionAreaGrammarLinkingWords").show();
        $("#btnNewGrammarLinkingWords").hide();
        $("#btnIDontKnowGrammarLinkingWords").show();

        var Holder = $("#HoldersGrammarLinkingWords");
        var DropIt = $("#DropItGrammarLinkingWords");


        $.each(GrammarLinkingWordsArray, function (i, vali)
        {
            var articleSentence1 = $('<article/>')
                .attr("id", "articleGrammarLinkingWordPart1" + i)
                .attr("ondrop", "return GrammarLinkingWordsdragDrop(event)")
                .attr("ondragenter", "return GrammarLinkingWordsdragEnter(event)")
                .attr("style", "width:100%;margin-top:20px;direction:ltr;position:relative")
                .attr("ondragover", "return GrammarLinkingWordsdragOver(event)")
                .addClass("articleGrammarLinkingWord" + i)
                .attr("articleNo", "articleGrammarLinkingWord" + i)
                .appendTo(Holder);

            var divSentence1 = $('<div/>')
                .text(vali.Sentence1)
                .attr("id", "BoxGrammarLinkingWordPart2" + i)
                .attr("draggable", "true")
                .attr("parentarticleNo", "articleGrammarLinkingWord" + i)
                .addClass("dragRightPiece")
                .attr("ondragstart", "return GrammarLinkingWordsdragStart(event)")
                .appendTo(articleSentence1);

            var articleSentence2 = $('<article/>')
                .attr("id", "articleGrammarLinkingWordPart2" + i)
                .attr("ondrop", "return GrammarLinkingWordsdragDrop(event)")
                .attr("ondragenter", "return GrammarLinkingWordsdragEnter(event)")
                .attr("ondragover", "return GrammarLinkingWordsdragOver(event)")

                .attr("style", "width:100%;margin-top:20px;direction:ltr;position:relative")
                .appendTo(DropIt);


            var divSentence2 = $('<div/>')
                .attr("id", "BoxGrammarLinkingWordPart1" + i)
                .attr("SID", vali.ID)
                .addClass("dragLeftPiece")
                .attr("parentarticleNo", "articleGrammarLinkingWord" + i)
                .text(vali.Sentence2)
                .attr("articleNo", "articleGrammarLinkingWord" + i)
                .attr("ondrop", "return GrammarLinkingWordsdragDrop(event)")
                .attr("ondragenter", "return GrammarLinkingWordsdragEnter(event)")
                .attr("ondragover", "return GrammarLinkingWordsdragOver(event)")
                .appendTo(articleSentence2);
        });

        var cards = $("#HoldersGrammarLinkingWords article ");
        for (var i = 0; i < cards.length; i++)
        {
            var target = Math.floor(Math.random() * cards.length - 1) + 1;
            var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
            cards.eq(target).before(cards.eq(target2));
        }
    }
}
function GrammarLinkingWordsdragStart(ev)
{
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function GrammarLinkingWordsdragEnter(ev)
{
    event.preventDefault();
    return true;
}
function GrammarLinkingWordsdragOver(ev)
{
    event.preventDefault();
}
function GrammarLinkingWordsdragDrop(ev)
{
    console.log("GrammarLinkingWordsdragDrop")
    var t = $(ev.target);
    if ($(t).is("article"))
    {

        if ($(t).attr("id").includes("articleGrammarLinkingWordPart1"))
        {
            return;
        }
        var artid = $(t).attr("id");
        var articleNo = $(t).attr("articleNo");
        if ($("#" + artid + " div").length > 1)
        {
            return false;
        }



        var data = ev.dataTransfer.getData("Text");
        var targetarticleNo = $("#" + data).parent().attr("articleNo");
        //if (targetarticleNo != articleNo) {
        //    return false;
        //}

        ev.target.appendChild(document.getElementById(data));
        ev.stopPropagation();
        CheckGrammarLinkingWords(data);
        CheckGrammarLinkingWordsIsFinished();
        if ($("#DropItGrammarLinkingWords .correctLinkingWords").length == GrammarLinkingWordsArray.length)
        {
            var sid = $("#" + data).prev().attr("sid");

            var elm = $("#tblGrammarLinkingWords .tblVal")[0];
            $(elm).removeClass("TableWrongcell")
            $(elm).addClass("TableCorrectcell")
            SubmitStudentAnswer(7, sid, true);

        }
    }
    else if ($(t).attr("id").includes("BoxGrammarLinkingWordPart1"))
    {
        console.log()
        if ($("#" + $(ev.target.parentElement).attr("id") + " .dragRightPiece").length > 0)
        {
            console.log(" has dragRightPiece")
            return;
        }
        console.log("am here")
        if ($(t).attr("id").includes("articleGrammarLinkingWordPart1"))
        {
            return;
        }
        var artid = $(t).attr("id");
        var articleNo = $(t).attr("articleNo");
        if ($("#" + artid + " div").length > 1)
        {
            return false;
        }

        var data = ev.dataTransfer.getData("Text");
        var targetarticleNo = $("#" + data).parent().attr("articleNo");
        //if (targetarticleNo != articleNo) {
        //    return false;
        //}

        ev.target.parentElement.appendChild(document.getElementById(data));
        ev.stopPropagation();
        CheckGrammarLinkingWords(data);
        CheckGrammarLinkingWordsIsFinished();
        if ($("#DropItGrammarLinkingWords .correctLinkingWords").length == GrammarLinkingWordsArray.length)
        {
            var elm = $("#tblGrammarLinkingWords .tblVal")[0];
            $(elm).removeClass("TableWrongcell")
            $(elm).addClass("TableCorrectcell")
            SubmitStudentAnswer(7, data, true);

        }
    }
    return false;
}

$(document).on("click", $('div[id^="BoxGrammarLinkingWordPart2"]'), function (e)
{

    if ($(e.target).hasClass("wrongLinkingWords"))
    {
        $(e.target).removeClass("wrongLinkingWords")
        console.log($('article[articleno^="' + $(e.target).attr("parentarticleNo") + '"]'))
        $(e.target).appendTo($('article[articleno^="' + $(e.target).attr("parentarticleNo") + '"]')[0]);
    }

});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////   
///        Vocabulary Letters 
///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function NewVocabularyLettersExercise()
{
    var CourseID = $("#ContentPlaceHolder1_hfCourseID").val();
    var OnlineStudentCourseUnitID = $("#ContentPlaceHolder1_hfOnlineStudentCourseUnitId").val();
    $.ajax({
        type: "POST",
        url: "https://exeiws.pcdotnet.com.jo/Service.svc/GetLettersQuestions",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            CourseID: CourseID, OnlineStudentCourseUnitID: OnlineStudentCourseUnitID
        }),
        success: function (n)
        {
            var dataObject = jQuery.parseJSON(n.d);
            VocabularyLettersArray = dataObject;

            LastVocabularyLettersQuestion = false;
            VocabularyLettersOrderNo = -1;
            GetNextVocabularyLetters();

            $("#tblVocabularyLetters .tblVal").removeClass("TableCorrectcell")
            $("#tblVocabularyLetters .tblVal").removeClass("TableWrongcell")

        }
    });



}


function GetNextVocabularyLetters()
{
    if (VocabularyLettersOrderNo > -1 && $(".correctVocaLetter").length != 3)
    {
        return false;
    }
    $(".VocaLetterAnswerArea span").remove();
    $(".VocaLetterAnswerArea").removeClass("correctVocaLetter");
    $(".VocaLetterAnswerArea").removeClass("wrongVocaLetter");

    if (typeof VocabularyLettersOrderNo == "undefined")
    {
        VocabularyLettersOrderNo = -1;
    } else
    {
        VocabularyLettersOrderNo = VocabularyLettersOrderNo + 1;
    }

    if (VocabularyLettersArray.length == 0)
    {
        //$("#holderVocabulary").hide();
        //$("#VocabularydropIt").hide();
        $("#btnNewVocabularyLetters").hide();
        $("#btnIDontKnowVocabularyLetters").hide();
        $("#NotFoundVocabularyLetters").show();
        $("#btnNextVocabularyLetters").hide();
        $("#VocabularyLetters").hide();
        $(".correctVocaLetter").hide();

    }
    else if (VocabularyLettersOrderNo >= VocabularyLettersArray.length)
    {
        //$("#holderVocabulary").hide();
        //$("#VocabularydropIt").hide();
        $("#btnNewVocabularyLetters").hide();
        $("#btnIDontKnowVocabularyLetters").hide();
        $("#NotFoundVocabularyLetters").show();
        $("#btnNextVocabularyLetters").hide();
        $(".correctVocaLetter").hide();
        $("#VocabularyLetters").hide();
    }
    else
    {
        $("#NotFoundVocabularyLetters").hide();
        $("#VocabularyLetters").show();
        $(".correctVocaLetter").show();
        $("#btnIDontKnowVocabularyLetters").show();
        $("#btnNewVocabularyLetters").hide();

        GetVocabularyLettersWord();


        var Next = VocabularyLettersOrderNo + 1;

        if (Next >= VocabularyLettersArray.length)
        {

            if (!(typeof LastVocabularyLettersQuestion == "undefined"))
            {
                LastVocabularyLettersQuestion = true;
            }
            $("#btnNextVocabularyLetters").hide();

        }
        else
        {
            $("#btnNextVocabularyLetters").show();

            $("#NewVocabularyLettersExercise").hide();
        }

    }

}
function generateRan(max)
{
    var random = [];
    for (var i = 0; i < max; i++)
    {
        var temp = Math.floor(Math.random() * max);
        if (random.indexOf(temp) == -1)
        {
            random.push(temp);
        }
        else
            i--;
    }
    return random;
}










function GetVocabularyLettersWord()
{
    console.log("VocabularyLettersOrderNo : " + VocabularyLettersOrderNo)
    $(".VocaLetterAnswerArea").addClass("disabled");
    $("#VocabularyLetters").html("");
    if ($('.VocaLetterAnswerArea').not(".correctVocaLetter").length > 0)
    {
	VocabularyLettersArray[VocabularyLettersOrderNo].Words=VocabularyLettersArray[VocabularyLettersOrderNo].Words.replace(",,",",");
        var Question = VocabularyLettersArray[VocabularyLettersOrderNo];

        var txtboxanswer = $('.VocaLetterAnswerArea').not(".correctVocaLetter").first();
        $(txtboxanswer).removeClass("disabled")
        var txtboxletters = $('#VocabularyLetters');

        var res = Question.Letters.split(",");

        $.each(res, function (i, vali)
        {
            var divSentence1 = $('<span/>')
                .text(vali)
                .addClass("VocaLetter")
                .attr("id", "BoxVocabularyLettersWord" + i)
                .attr("draggable", "true")
                .attr("onclick", "VocabularyLettersdragClick(this);")
                .attr("ondragstart", "return VocabularyLettersdragStart(event)")
                .appendTo(txtboxletters);
        });

        var words = Question.Words.split(",");
        var No = parseInt($(txtboxanswer).attr("VocaLetterAnswerAreaNo"));
if(No>words.length-1){
No=words.length-1;
}
console.log("words.length="+words.length)
console.log("No="+No)
        var s = words[No - 1];
if(s==''){
s= words[0];
}
if(s==''){
s= words[1];
}
if(words.length==1){
s= words[0];
}
        var wordlength = s.length;

        var perc = 0.60;
        var spacecount = Math.round((wordlength * perc));

	console.log("No="+No)
	console.log("wordlength="+wordlength)
	console.log("s="+s)
	console.log("perc="+perc)
	console.log("spacecount="+spacecount)

        var ar2 = generateRan(wordlength).slice(0, spacecount);
        for (var i = 0; i < s.length; i++)
        {
            if (ar2.indexOf(i) !== -1)
            {
                var divSentence1 = $('<span/>')
                    .addClass("VocaLetter")
                    .addClass("Updatable")
                    .attr("draggable", "true")
                    .attr("ondragenter", "return VocabularyLettersdragEnter(event)")
                    .attr("ondrop", "return VocabularyLettersdragDrop(event)")
                    .attr("ondragover", "return VocabularyLettersdragOver(event)")
                    .attr("onclick", "VocabularyLettersdragClick(this);")
                    .attr("ondragstart", "return VocabularyLettersdragStart(event)")
                    .appendTo(txtboxanswer);
            } else
            {
                var divSentence1 = $('<span/>')
                    .text(s.charAt(i))
                    .addClass("VocaLetter")
                    .attr("draggable", "true")
                    .attr("onclick", "VocabularyLettersdragClick(this);")
                    .attr("ondragstart", "return VocabularyLettersdragStart(event)")
                    .appendTo(txtboxanswer);
            }

        }

    }



}










function CheckVocabularyLettersCorrect()
{
    if ($(".VocaLetterAnswerArea span:empty").length == 0)
    {
	VocabularyLettersArray[VocabularyLettersOrderNo].Words=VocabularyLettersArray[VocabularyLettersOrderNo].Words.replace(",,",",");
        var Answer = $('.VocaLetterAnswerArea').not(".correctVocaLetter").first().find("span").text();
        var iscorrect = false;
        var Question = VocabularyLettersArray[VocabularyLettersOrderNo];
        console.log(VocabularyLettersArray[VocabularyLettersOrderNo])
        var res = Question.Words.split(",");
        $.each(res, function (i, vali)
        {
            if (Answer == vali)
            {
                console.log(vali)
				
				let rex = new RegExp(`\\b${vali}\\b`, 'gi');
				
				console.log("rex=" + rex);
				
                VocabularyLettersArray[VocabularyLettersOrderNo].Words = VocabularyLettersArray[VocabularyLettersOrderNo].Words.replace(rex, "");
                //VocabularyLettersArray[VocabularyLettersOrderNo].Words = VocabularyLettersArray[VocabularyLettersOrderNo].Words.replace(vali, "");
                console.log(VocabularyLettersArray[VocabularyLettersOrderNo])

                iscorrect = true;
            }
        });

        var txtbox = $('.VocaLetterAnswerArea').not(".correctVocaLetter").first();
        if (iscorrect == true)
        {
            SubmitStudentAnswer(9, VocabularyLettersArray[VocabularyLettersOrderNo].ID, true);
            var elm = $("#tblVocabularyLetters .tblVal")[VocabularyLettersOrderNo];
            $(elm).removeClass("TableWrongcell")
            $(elm).addClass("TableCorrectcell")

            txtbox.addClass("correctVocaLetter")
            GetVocabularyLettersWord();
            $(txtbox).find("span").removeAttr("ondragenter").removeAttr("ondragover").removeAttr("ondragstart").removeAttr("draggable").removeClass("Updatable").removeAttr("ondrop").removeAttr("onclick")

            //$(txtbox).find("span").removeClass('VocaLetter')
            if ($(".correctVocaLetter").length == 3 && LastVocabularyLettersQuestion)
            {
                $("#btnNewVocabularyLetters").show();
            }
            if ($(".correctVocaLetter").length == 3)
            {
                $("#btnIDontKnowVocabularyLetters").hide();
            }
        }
        else
        {
            txtbox.addClass("wrongVocaLetter")
            SubmitStudentAnswer(9, VocabularyLettersArray[VocabularyLettersOrderNo].ID, false);

        }

    }

}

function FillVocabularyLettersCorrectAnswer()
{
    if ($('.VocaLetterAnswerArea').not(".correctVocaLetter").length == 0)
    {
        $("#btnIDontKnowVocabularyLetters").hide();
    }
    else
    {
        var Question = VocabularyLettersArray[VocabularyLettersOrderNo];
        var txtboxanswer = $('.VocaLetterAnswerArea').not(".correctVocaLetter").first();
        $(txtboxanswer).find("span").remove();

        var words = Question.Words.split(",");
        var No = parseInt($(txtboxanswer).attr("VocaLetterAnswerAreaNo"));
        var s = words[No - 1];
        for (var i = 0; i < s.length; i++)
        {
            var divSentence1 = $('<span/>')
                .text(s.charAt(i))
                .addClass("VocaLetter")
                .appendTo(txtboxanswer);
        }

        CheckVocabularyLettersCorrect();
        var elm = $("#tblVocabularyLetters .tblVal")[VocabularyLettersOrderNo];
        $(elm).removeClass("TableCorrectcell")
        $(elm).addClass("TableWrongcell")
        SubmitStudentAnswer(9, VocabularyLettersArray[VocabularyLettersOrderNo].ID, false);

    }

}
function VocabularyLettersdragClick(obj)
{
    if ($(obj).parent().attr("id") == "VocabularyLetters")
    {
        if ($(".VocaLetterAnswerArea span:empty").length > 0)
        {
            $(".VocaLetterAnswerArea span:empty").first().text($(obj).text())
            CheckVocabularyLettersCorrect();
        }
    }
    else
    {
        if ($(obj).hasClass("Updatable"))
        {
            $(obj).text("")
        }
    }

}
function VocabularyLettersdragStart(ev)
{

    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 15, 10);
    return true;
}
function VocabularyLettersdragEnter(ev)
{
    event.preventDefault();
    return true;
}
function VocabularyLettersdragDrop(ev)
{
    var t = $(ev.target);
    var data = ev.dataTransfer.getData("Text");
    $(t).text($($("#" + data)).text())
    CheckVocabularyLettersCorrect();
    return false;
}
function VocabularyLettersdragOver(ev)
{
    event.preventDefault();


}
//function emptyVocaLetterAnswer(obj) {
//    console.log(obj)
//    if ($(obj).hasClass("wrongVocaLetter")) {
//        $(obj).find(".Updatable").text("");
//    }
//}


