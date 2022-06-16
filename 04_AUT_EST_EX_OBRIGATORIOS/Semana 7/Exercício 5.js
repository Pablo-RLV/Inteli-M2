var needCreateForm = 1;
$('#createForm').on('click', () =>{
    var averageStudent = '';
    var wholeAverage = 0; 
    var examAverage = 0;
    var jobAverage = 0;
    var arrayNumbersExam = [];
    var arrayNumbersJob = [];

    if(needCreateForm == 1){
        var qtdStudents = $('#students').val();
        var output = '<br>';

        for(var i = 0; i < qtdStudents; i++){
            output += `Aluno ${i + 1} - Nota Prova: <input type="number" class="exam"> Nota trabalho: <input type="number" class="job"><br><br>`;
        }
        output += '<input type="submit" value="Calcular" id="doCalc">'; 
        $('#form').append(`${output}`);

        var notesExam = document.querySelectorAll('input.exam');
        var notesJob = document.querySelectorAll('input.job');
    }

    $('#doCalc').on('click', () =>{
        for(var i = 0; i < qtdStudents; i++){
            averageStudent += `<br> Média do estudante ${i + 1}: ${(parseInt(notesExam[i].value) + parseInt(notesJob[i].value)) / 2}<br>`;
            wholeAverage += parseInt(notesExam[i].value) + parseInt(notesJob[i].value);
            examAverage += parseInt(notesExam[i].value);
            jobAverage += parseInt(notesJob[i].value);
            arrayNumbersExam.push(notesExam[i].value);
            arrayNumbersJob.push(notesJob[i].value);
        }
        $('#form').append(`<hr> ${averageStudent}`);
        wholeAverage = wholeAverage / qtdStudents;
        $('#form').append(`<br><br> Média geral: ${wholeAverage}<br>`);
        examAverage = examAverage / qtdStudents;
        $('#form').append(`<br><br> Média aritimética prova: ${examAverage}<br>`);
        jobAverage = jobAverage / qtdStudents;
        $('#form').append(`<br><br> Média aritimética trabalho: ${jobAverage}<br>`)
        arrayNumbersExam = arrayNumbersExam.sort((a, b) => a - b);
        $('#form').append(`<br><br> Menor nota prova: ${arrayNumbersExam[0]} <br><br> Maior nota prova: ${arrayNumbersExam[arrayNumbersExam.length - 1]}<br>`);
        arrayNumbersJob = arrayNumbersJob.sort((a, b) => a - b);
        $('#form').append(`<br> Menor nota trabalho: ${arrayNumbersJob[0]} <br><br> Maior nota trabalho: ${arrayNumbersJob[arrayNumbersJob.length - 1]}<br>`);
    });

    needCreateForm = 0;
});




///////////////////////////////////////////////
////////////////////////////
/////////////////////////