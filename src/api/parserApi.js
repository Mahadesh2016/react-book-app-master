// parse string xml received from goodreads api
export function parseXMLResponse(response) {
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(response, "application/xml");
  const parseError = XMLResponse.getElementsByTagName("parsererror");

  if (parseError.length) {
    this.setState({
      error: "There was an error fetching results.",
      fetchingData: false
    });
  } else {
    const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
    const searchResults = XMLresults.map(result => XMLToJson(result));
    return searchResults;
  }
}

export function getDescription(data) {
  const parser = new DOMParser();
  const XMLResponse = parser.parseFromString(data, "application/xml");
  debugger;
  const parseError = XMLResponse.getElementsByTagName("parsererror");
  let description = "";
  if (parseError.length) {
    this.setState({
      error: "There was an error fetching results."
    });
  } else {
    description = XMLResponse.getElementsByTagName("description")[0].innerHTML;

    description = description.replace("<![CDATA[", "").replace("]]>", "");

    if (!description) {
      description = "No description found.";
    }
  }

  return description;
}

// Function to convert simple XML document into JSON.
// Loops through each child and saves it as key, value pair
// if there are sub-children, call the same function recursively on its children.
export function XMLToJson(XML) {
  const allNodes = new Array(...XML.children);
  const jsonResult = {};
  allNodes.forEach(node => {
    if (node.children.length) {
      jsonResult[node.nodeName] = XMLToJson(node);
    } else {
      jsonResult[node.nodeName] = node.innerHTML;
    }
  });
  return jsonResult;
}
