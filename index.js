const itemInput = document.getElementById("item-input");
const addItemButton = document.getElementById("add-item");
const sectionsContainer = document.getElementById("sections-container");

const sections = {
  Stationery: [],
  "Bath & Body": [],
  Grocery: [],
};

addItemButton.addEventListener("click", addItem);

function addItem() {
  const itemValue = itemInput.value.trim();
  if (!itemValue) return;
  const items = itemValue.split(",");
  for (const item of items) {
    const trimmedItem = item.trim().toLowerCase();
    let section;
    if (
      trimmedItem.includes("book") ||
      trimmedItem.includes("pen") ||
      trimmedItem.includes("sticky notes") ||
      trimmedItem.includes("paper")
    ) {
      section = "Stationery";
    } else if (trimmedItem.includes("wash") || trimmedItem.includes("soap")) {
      section = "Bath & Body";
    } else {
      section = "Grocery";
    }

    sections[section].push(trimmedItem);
  }
  // Logic to determine section based on item (can be customized)
  itemInput.value = ""; // Clear input field

  displaySections();
}

function displaySections() {
  sectionsContainer.innerHTML = ""; // Clear previous content

  for (const sectionName in sections) {
    if (sections[sectionName].length === 0) continue; // Skip empty sections

    const sectionElement = document.createElement("div");
    sectionElement.classList.add("section");
    sectionElement.textContent = sectionName;
    sectionsContainer.appendChild(sectionElement);

    const itemsList = document.createElement("ul");
    itemsList.classList.add("items-list");
    sections[sectionName].forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.textContent = item;
      itemsList.appendChild(itemElement);
    });
    sectionsContainer.appendChild(itemsList);
  }
}
