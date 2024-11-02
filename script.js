const testData = {
    '265627': {
      name: "Hasnain Ali",
      html: { marks: '22/30', percentage: '73%', remarks: 'Passed' },
      css: { marks: "34/44", percentage: '85%', remarks: 'Good' },
      js: { marks: "26/35", percentage: '74%', remarks: 'Passed' },
    },
    '271965': {
      name: "Adeem Amir",
      css: { marks: '37/44', percentage: '93%', remarks: 'Excellent' },
      js: { marks: '32/35', percentage: '91%', remarks: 'Excellent' },
    },
    '258317': {
        name: "Syed Anas",
        js: { marks: '31/35', percentage: '89%', remarks: 'Excellent' },
      },
      '260679': {
        name: "Abdul Muizz",
        html: { marks: '25/30', percentage: '83%', remarks: 'Passed' },
        css: { marks: '35 / 44 ', percentage: '88%', remarks: 'Good' },
        js: { marks: '31 / 35', percentage: '89%', remarks: 'Excellent' },
      },
      '260682': {
        name: "Affan Ali",
        html: { marks: '24/30', percentage: '80%', remarks: 'Passed' },
        css: { marks: '34 / 44 ', percentage: '85%', remarks: 'Good' },
        js: { marks: '31 / 35', percentage: '89%', remarks: 'Excellent' },
      },
      '266865': {
        name: "Abdul Hadi",
        html: { marks: '20/30', percentage: '67%', remarks: 'Promote' },
        css: { marks: '33 / 44', percentage: '83%', remarks: 'Good' },
        js: { marks: '28/35', percentage: '80%', remarks: 'Good' },
      },
      '299695': {
        name: "Mustafa Pervez",
        css: { marks: '31/44', percentage: '78%', remarks: 'Passed' },
        js: { marks: '27 / 35', percentage: '77%', remarks: 'Passed' },
      },
      '267832': {
        name: "Muhammad",
        js: { marks: '27/35', percentage: '77%', remarks: 'Passed' },
      },
      '267133 ': {
        name: "Muhammad Mustafa Hussain",
        html: { marks: '23/30', percentage: '77%', remarks: 'Passed' },
        css: { marks: '32/44', percentage: '80%', remarks: 'Good' },
        js: { marks: '27/35', percentage: '77%', remarks: 'Passed' },
      },
      '259144': {
        name: "Abdul Moiz",
        html: { marks: '25/30', percentage: '83%', remarks: 'Passed' },
        css: { marks: '31/44', percentage: '78%', remarks: 'Passed' },
        js: { marks: '27/35', percentage: '77%', remarks: 'Passed' },
      },
      '263630': {
        name: "Muhammad Wasif",
        html: { marks: '19/30', percentage: '63%', remarks: 'Fail' },
        css: { marks: '31/44', percentage: '78%', remarks: 'Passed' },
        js: { marks: '26/35', percentage: '74%', remarks: 'Passed' },
      },
      '262365': {
        name: "Muhammad Faizan Khan",
        js: { marks: '25/35', percentage: '71%', remarks: 'Passed' },
      },
      '252944': {
        name: "Muhammad Faizan",
        html: { marks: '24/30', percentage: '80%', remarks: 'Passed' },
        css: { marks: '29/44', percentage: '73%', remarks: 'Passed' },
        js: { marks: '25/35', percentage: '71%', remarks: 'Passed' },
      },
      '269662': {
        name: "Huzaifa Ahmed",
        html: { marks: '21/30', percentage: '70%', remarks: 'Passed' },
        css: { marks: '27/44', percentage: '68%', remarks: 'Need Improvement' },
        js: { marks: '25/35', percentage: '71%', remarks: 'Passed' },
      },
      '258032': {
        name: "Noor ul Hassan Siddique",
         js: { marks: '24/35', percentage: '69%', remarks: 'Passed' },
      },
      '265599': {
        name: "Musab bin Ahsan",
        html: { marks: '23/30', percentage: '77%', remarks: 'Passed' },
        css: { marks: '26/44', percentage: '65%', remarks: 'Need Improvement' },
        js: { marks: '23/35', percentage: '66%', remarks: 'Passed' },
      },
      '258595': {
        name: "Ather Junaid Siddique",
        js: { marks: '23/35', percentage: '66%', remarks: 'Passed' },
      },
      '286820': {
        name: "Mohsnain Raza",
        html: { marks: '23/30', percentage: '77%', remarks: 'Passed' },
        css: { marks: '26/44', percentage: '65%', remarks: 'Need Improvement' },
        js: { marks: '23/35', percentage: '66%', remarks: 'Passed' },
      },
      '265416': {
        name: "Abdullah",
        html: { marks: '24/30', percentage: '80%', remarks: 'Passed' },
        css: { marks: '27/44', percentage: '68%', remarks: 'Need Improvement' },
        js: { marks: '22/35', percentage: '63%', remarks: 'Passed' },
      },
      '265887': {
        name: "Azeem Shahid",
        html: { marks: '25/30', percentage: '83%', remarks: 'Passed' },
        css: { marks: '22/44', percentage: '55%', remarks: 'Fail' },
        js: { marks: '22/35', percentage: '63%', remarks: 'Passed' },
      },
      '272187': {
        name: "Hafiz Sharim Sohail",
        html: { marks: '23/30', percentage: '77%', remarks: 'Passed' },
        css: { marks: '27/44', percentage: '68%', remarks: 'Need Improvement' },
        js: { marks: '21/35', percentage: '60%', remarks: 'Need Improvement' },
      },
      '265811': {
        name: "Syed Saad Zaidi",
        js: { marks: '21/35', percentage: '60%', remarks: 'Need Improvement' },
      },
      '261523': {
        name: "Aman ul Haq",
        html: { marks: '21/30', percentage: '70%', remarks: 'Passed' },
        css: { marks: '31/44', percentage: '78%', remarks: 'Passed' },
        js: { marks: '20/35', percentage: '57%', remarks: 'Need Improvement' },
      },
      '255275': {
        name: "Muhammad Moosa",
        html: { marks: '23/30', percentage: '77%', remarks: 'Passed' },
        css: { marks: '35/44', percentage: '88%', remarks: 'Good' },
        js: { marks: '19/35', percentage: '54%', remarks: 'Need Improvement' },
      },
      '265812': {
        name: "Syed Anas Zaidi",
        js: { marks: '19/35', percentage: '54%', remarks: 'Need Improvement' },
      },
      '284822': {
        name: "Hamdan",
        js: { marks: '18/35', percentage: '51%', remarks: 'Need Improvement' },
      },
      '265584': {
        name: "Saleh Raza",
        html: { marks: '16/30', percentage: '53%', remarks: 'Fail' },
        js: { marks: '16/35', percentage: '46%', remarks: 'Fail' },
      },
      '271752': {
        name: "Syed Shariq Ahmed",
        html: { marks: '21/30', percentage: '70%', remarks: 'Passed' },
        css: { marks: '27/44', percentage: '68%', remarks: 'Need Imrovement' },
        js: { marks: '17/35', percentage: '37%', remarks: 'Fail' },
      }
                                                    
  };
  
  function fetchResults() {
    const rollNo = document.getElementById('rollNo').value;
    const testType = document.getElementById('testType').value;
    const testNames = { html: "HTML", css: "CSS", js: "JavaScript (1)" };
  
    if (testData[rollNo] && testData[rollNo][testType]) {
      const student = testData[rollNo];
      const result = student[testType];
      
      document.getElementById('studentName').value = student.name;
      
      document.getElementById('testMarks').value = result.marks;
      document.getElementById('testPercentage').value = result.percentage;
      document.getElementById('testRemarks').value = result.remarks;
  
      document.getElementById('testName').innerText = `${testNames[testType]} Result`;
      document.getElementById('resultSection').style.display = 'block';
    } else {
      alert("No data found for the entered Roll No or selected Test.");
      document.getElementById('resultSection').style.display = 'none';
    }
  }