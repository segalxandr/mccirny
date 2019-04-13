import { sidenavObjects } from "../data/dataObjects.js";

function getParentTitle(childId) {
  let result = processGetParent(childId);
  return result[0].title;
}
function processGetParent(childId) {
  return sidenavObjects.filter(i => {
    let innerItem = i.itemChildren.filter(ich => {
      return ich.id === childId;
    });
    return innerItem.length > 0;
  });
}

export default getParentTitle;
