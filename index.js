// code your solution here
function superbowlWin(record) {
    const win = record.find(item => item.result === "W");
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }