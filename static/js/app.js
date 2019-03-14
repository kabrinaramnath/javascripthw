//set variables and link data from table 

var tableData = data;
var tbody = d3.select("tbody");

// create function to append data into table 

function table(data) {
  tbody.html("");
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var ufosightings = row.append("td");
        ufosightings.text(val);
      }
    );
  });
}

// function to filter by date-time 

function buttonClick() {

//stop page from refreshing

 d3.event.preventDefault();

 //display table data which matches inputted filter 

  var date = d3.select("#datetime").property("value");
  var filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);
