// Actual solution   Note: This solution is very old 

function User() {
  this.rank = -8;
  this.progress = 0;
  this.HUNDRED = 100;
  this.HIGHEST = 8;
}

User.prototype.incProgress = function(rank) {
  if (rank == 0 || rank > this.HIGHEST || rank < -this.HIGHEST) throw new RangeError("rank input out of range");
  if (this.rank == this.HIGHEST) return;

  var diff = (rank > 0 && this.rank < 0) || (rank < 0 && this.rank > 0) ? Math.abs(this.rank) + Math.abs(rank) : rank - this.rank;
  if (rank > 0 && this.rank < 0) diff--;
  if (rank < 0 && this.rank > 0) diff = -diff;
  if (diff > 0) {
    this.progress += (rank == 1 && this.rank == -1) ? 10 : (10 * diff * diff);
  } else {
    this.progress += diff == 0 ? 3 : 1;
  }

  if (this.progress > this.HUNDRED && this.rank < this.HIGHEST) {
    this.rank += Math.floor(this.progress / this.HUNDRED);
    if (this.rank == 0) this.rank++;
    this.progress %= this.HUNDRED;
  }
  if (this.rank == this.HIGHEST) this.progress = 0;

  console.log("current rank = " + this.rank + "; progress = " + this.progress);
  return diff;
};


// My solution      Note: Doesn't work
class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(activityRank) {
    if (activityRank < -8 || activityRank === 0 || activityRank > 8) {
      throw new Error('Invalid activity rank');
    }
    
    const rankDiff = this.getRankDiff(activityRank);
    let earnedProgress;
    
    if (rankDiff === 0) {
      earnedProgress = 3;
    } else if (rankDiff === -1) {
      earnedProgress = 1;
    } else if (rankDiff > 0) {
      earnedProgress = 10 * rankDiff * rankDiff;
    } else {
      earnedProgress = 0;
    }
    
    this.progress += earnedProgress;
    
    if (this.rank === 8) {
      this.progress = 0;
    } else if (this.progress >= 100) {
      this.rank += 1;
      this.progress -= 100;
      if (this.rank === 0) {
        this.rank = 1;
      }
    }
  }

  getRankDiff(activityRank) {
    const rankValues = {
      '-8': 1,
      '-7': 2,
      '-6': 3,
      '-5': 4,
      '-4': 5,
      '-3': 6,
      '-2': 7,
      '-1': 8,
      '1': 9,
      '2': 10,
      '3': 11,
      '4': 12,
      '5': 13,
      '6': 14,
      '7': 15,
      '8': 16,
    };

    return rankValues[activityRank.toString()] - rankValues[this.rank.toString()];
  }
}
