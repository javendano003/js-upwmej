// Import stylesheets
import './style.css';

let docs = [];

// There is the function to get data.
async function getData() {
  return await fetch('https://api.plos.org/search?q=title:DNA')
    .then((response) => response.json())
    .then((json) => {
      docs = json.response.docs;
    });
}
async function get() {
  await getData();
  console.log(docs);
}
get()
{
}



//*Develop a function that prints by console the data filtering by "article_type" and get all
//the data that are different from "Research Article".
//- Extra points, receive the value to filter by parameters.

let articleType = "Research Article"

async function exercise1 (articleTypePa){
  await getData();

  console.log('Exercise 1')

  let printExercise1 = [];

  printExercise1 =  docs.filter(document => document.article_type !== articleTypePa)

  console.log(printExercise1);
}

exercise1(articleType)
{
}

//Develop a function that prints by console all "author_display" with "score" greater
//than "6.0".
//○ Extra point, receive the value to be filtered by parameters.

let scoreSearch = 6

async function exercise2 (scoreSearchPa){
  await getData();

  console.log('Exercise 2')

  let printExercise2 = [];

  printExercise2 =  docs.filter(document => document.score > scoreSearchPa).map(document => document.author_display)

  console.log(printExercise2);
}

exercise2(scoreSearch)
{
}

//Develop a function that gets the record with id "10.1371/journal.pgen.1006605"
//update "article_type" to "Newspaper" and print this by console.

async function exercise3 (){
  await getData();
  console.log('Exercise 3')

  let filterId = [];
  
  filterId =  docs.filter(document => document.id === "10.1371/journal.pgen.1006605")
  
  filterId[0].article_type = "Newspaper";
   
  console.log(filterId);
  
}

exercise3()
{
}

//Develop a function that gets all the "article_type" without repeating and print it by console.

async function exercise4 (){
  await getData();

  console.log('Exercise 4')
  
  console.log(articleType =  docs.map(document => document.article_type).reduce((a, e) => {
    if (!a.find(d => d == e)) {
      a.push(e)
    }

    return a;
  }, []))
      
}

exercise4()
{
}

//Develop a function that concatenates all the "journal" and prints them by console.
//○ Extra point, print all the "journal" without repeating.

async function exercise5 (){
  await getData();
  
  console.log('Exercise 5')

  articleType =  docs.map(document => document.journal).reduce((a, e) => {
    if (!a.find(d => d == e)) {
      a.push(e)
    }

    return a;
  }, [])

  console.log(articleType.concat())
      
}

exercise5()
{
}

//Develop a function that removes a property of the array "docs" and prints the new
//array by console. Extra point, receive the property to be removed by parameter.

let attribute = "journal"

async function exercise6(attributePa){
  await getData(); 

  console.log('Exercise 6')

  docs.map(document => delete document[attributePa])
  console.log(docs)

}

exercise6(attribute);{
}

//Develop a function that prints by console only the records from id
//"10.1371/journal.pone.0047101" to "10.1371/journal.pgen.1000047".

let start;
let end;

async function exercise7(){
  await getData(); 

  console.log('Exercise 7')

  start = docs.findIndex(document => document.id === "10.1371/journal.pone.0047101")
  end = docs.findIndex(document => document.id === "10.1371/annotation/254cef67-ab0e-43f6-af62-8f7df7c3677c")
 
  console.log(docs.slice(start, end))
}

exercise7();{
}


//Develop a function that creates an array from the given "docs" and add the following
//array to it and print it to the console.

let docTwo = [
  {
    id: "10.1371/journal.pone.0177149",
    journal: "Wall Street",
    eissn: "1932-6203",
    publication_date:"2017-05-03T00:00:00Z",
    article_type:"Newspaper",
    author_display: ["Irina Bruck",
    "Nalini Dhingra",
    "Matthew P. Martinez",
    "Daniel L. Kaplan"],
    abstract:["\nDpb11 is required for the initiation of DNA replication in budding yeast. We found that Dpb11 binds tightly to single-stranded DNA (ssDNA) or branched DNA structures, while its human homolog, TopBP1, binds tightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, wherein Dpb11-DNA interaction is required for some other function in DNA replication initiation, such as helicase activation.\n"],
    title_display:"Dpb11 may function with RPA and DNA to initiate DNA replication",
    score:7.018296},
  {
    id :"10.1371/journal.pgen.1006699",
    journal:"Wall Street",
    eissn:"1553-7404",
    publication_date:"2017-02-10T00:00:00Z",
    article_type:"Newspaper",
    author_display:["Concetta Cuozzo",
      "Antonio Porcellini",
      "Tiziana Angrisano",
      "Annalisa Morano",
      "Bongyong Lee",
      "Alba Di Pardo",
      "Samantha Messina",
      "Rodolfo Iuliano",
      "Alfredo Fusco",
      "Maria R. Santillo",
      "Mark T. Muller",
      "Lorenzo Chiariotti",
      "Max E. Gottesman",
      "Enrico V. Avvedimento"],
    abstract:[""],
    title_display:"Correction: DNA Damage, Homology-Directed Repair, and DNA Methylation",
    score:7.018296}
  ];

    
 
async function exercise8(){
  await getData(); 
  console.log('Exercise 8')

  console.log(docTwo)

  let newDocs = docs.concat(docTwo)
      
  console.log(newDocs)
    
}
  
exercise8();{
}

//Develop a function that takes the odd positions of the given array "docs" then with the new
//array obtained it must be modified so that the list of objects has the following format.
//a) "title" must be equal to concatenate "journal" and "title_display".
//b) "score" must be equal to "score".
//c) "article_type" must be equal to "article_type".
//d) "authors" must be equal to concatenate the array "author_display" separated by "-".
//e) “id” must be equal to “id”.
//Create a function to sort in descending order that receives the array to be sorted and the
//property to be sorted as parameters and print the new sorted array in the console.
//Call this new function to organize the new array obtained.


async function exercise9(){
  await getData(); 
  
  console.log("Exercise 9")

  var newDocument = []
    
  docs.forEach(function(document, index) {
    
    if (index % 2 !== 0){
      
      newDocument.push({title: document.journal + ':' + document.title_display, score: document.score, article_type: document.article_type, authors: document.author_display.join("-"), id: document.id})    

    }
  })
  console.log(newDocument);
   
  function OrderByParameter(newDocumentPa, parameterPa){
    
    return newDocumentPa.sort((a, b) => {
      if (a[parameterPa] > b[parameterPa]) {
        return 1;
      }
      if (a[parameterPa] < b[parameterPa]) {
        return -1;
      }
      return 0;
    }) 

  }  
  
  console.log(OrderByParameter(newDocument, "score"))
}
  
exercise9();{
}



