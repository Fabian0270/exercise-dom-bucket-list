// Reference to the bucket list container
const bucketList = document.querySelector(".list");

// 1. Create a <p> using createElement and append it
const newItem1 = document.createElement("p");
newItem1.innerText = "Learn to surf in Hawaii";
bucketList.appendChild(newItem1);

// 2. Create another <p> and add it using insertAdjacentElement
const newItem2 = document.createElement("p");
newItem2.innerText = "Climb Mount Everest";
newItem1.insertAdjacentElement("afterend", newItem2); // Adds after the existing <p>

// 3. Get the innerHTML of the bucket list and log it to the console
console.log("Current innerHTML:", bucketList.innerHTML);

// 4. Create a string for a new item and set it as innerHTML
// (Commented out to keep previous items intact)
/*
const newInnerHTML = "<p>Go skydiving</p>";
bucketList.innerHTML = newInnerHTML;
*/

// 5. Use insertAdjacentHTML to add a new item without overwriting
bucketList.insertAdjacentHTML("afterbegin", "<p>Travel to Japan</p>");

// 6. Add three more items to the end of the list using a loop
const newItems = ["Scuba dive in the Maldives", "See the Northern Lights", "Write a book"];
newItems.forEach(item => {
  const p = document.createElement("p");
  p.innerText = item;
  bucketList.appendChild(p);
});

// 7. Log the total number of items in the bucket list
console.log("Number of items:", bucketList.children.length);

// 8. Change the content of the <h2> to your name
document.querySelector("h2").innerText = "Fabians Bucket List";

// 9. Replace the first item in the list
const firstItem = bucketList.children[0];
const newFirstItem = document.createElement("p");
newFirstItem.innerText = "Run a marathon";
bucketList.replaceChild(newFirstItem, firstItem);

// 10. Replace a middle item in the list
const middleIndex = Math.floor(bucketList.children.length / 2);
const middleItem = bucketList.children[middleIndex];
const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "Visit all 7 continents";
bucketList.replaceChild(newMiddleItem, middleItem);

// 11. Remove the last item in the list
const lastItem = bucketList.lastElementChild;
bucketList.removeChild(lastItem);
