let library = [];

function Book(title, first, last, publisher, city, year, state) {
    this.Title = title;
    this.First = first;
    this.Last = last;
    this.Publisher = publisher;
    this.City = city;
    this.Year = year;
    this.State = state;
    this.apa_text = function() {
                return (this.Last + ". " + 
                        this.First[0] + ". (" + 
                        this.Year + "). " + 
                        this.Title + ". " + 
                        this.City + ", " + 
                        this.State + ". " + 
                        this.Publisher + ".");
    };
    this.mla_text = function() {
                return (this.Last + ". " + 
                        this.First[0] + ". " + 
                        this.Title + ". " + 
                        this.Publisher + ". " + 
                        this.Year + ". ");
    };
}

function add_book() {
    const newBook = new Book(document.getElementById("Title").value,
                            document.getElementById("First").value, 
                            document.getElementById("Last").value, 
                            document.getElementById("Publisher").value,
                            document.getElementById("City").value, 
                            document.getElementById("Year").value, 
                            document.getElementById("State").value);
                            
    library.push(newBook);
    updateLibOutputAPA();
}

function updateLibOutputAPA() {
    let currBib = "";
    
    var node = document.getElementById("bibliography");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    
    for(let i=0; i<library.length; i++) {
        //currBib += library[i].apa_text();
        //document.getElementById("bibliography").innerText = currBib;
        const para = document.createElement("p");
        var node = document.createTextNode("")
        para.appendChild(node);
        const element = document.getElementById("bibliography");
        element.appendChild(para);
        
        node.nodeValue = library[i].apa_text();
    }
}

function updateLibOutputMLA() {
    let currBib = "";
    
    var node = document.getElementById("bibliography");
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }

    
    for(let i=0; i<library.length; i++) {
        //currBib += library[i].mla_text();
        //document.getElementById("bibliography").innerText = currBib;
        const para = document.createElement("p");
        var node = document.createTextNode("")
        para.appendChild(node);
        const element = document.getElementById("bibliography");
        element.appendChild(para);
        
        node.nodeValue = library[i].mla_text();
    }
}