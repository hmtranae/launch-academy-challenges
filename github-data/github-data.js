// Make sure to `console.log()` every answer!
const data = require('./data');

// How many repositories does LaunchAcademy own?
console.log(`LaunchAcademy owns ${data.length} repos`);

// Return the name of the repository that has the largest size.
let { size } = data[0];
data.forEach((repo) => {
  if (repo.size > size) {
    // eslint-disable-next-line prefer-destructuring
    size = repo.size;
  }
});

const repoWithBiggestSize = data.filter(repo => (repo.size === size))[0].name;

console.log(`The ${repoWithBiggestSize} repo has the largest size`);

// Return the name of the most recently created repository.
let smallestEpochTime = new Date(data[0].created_at).getTime();

data.forEach((repo) => {
  if (new Date(repo.created_at).getTime() > smallestEpochTime) {
    smallestEpochTime = new Date(repo.created_at).getTime();
  }
});

const mostRecentRepo = data.filter(repo =>
  // eslint-disable-next-line no-unused-expressions
  new Date(repo.created_at).getTime() === smallestEpochTime);

const mostRecentRepoName = mostRecentRepo[0].name;

console.log(`The ${mostRecentRepoName} repo is the most recently created repo`);

// How many repos have 0 stargazers?
console.log(`${data.filter(repo => repo.stargazers_count === 0).length} repos have 0 stargazers`);

// Return the name of the repo that has the largest number of stargazers.
const starGazers = data.map(repo => repo.stargazers_count);
const maxStarGazers = Math.max(...starGazers);
const repoWithLargestStarGazers = data.filter(repo => repo.stargazers_count === maxStarGazers)[0].name;

console.log(`Repo with the largest number of stargazers is ${repoWithLargestStarGazers}`);

// Return the names of the repos that have a description that is not null.
const reposWithDescription = data.filter(repo => repo.description !== null);

reposWithDescription.forEach((repo) => {
  console.log(repo.name);
});

// Use map to create an array of repository descriptions
// Print each line of the array
// If the repo has no description, return the string 'No Description Provided'.
const repoDescriptions = data.map(repo => repo.description);
repoDescriptions.forEach((description) => {
  if (description) {
    console.log(description);
  } else {
    console.log('No Description Provided');
  }
});

// Use map to create an array containing each repository's most important information
// name of the repository, who created it (the owner), and how many watchers there are
// Print each string in the array to your console
const repoImportantInfo = data.map(repo => [repo.name, repo.owner, repo.watchers_count]);
repoImportantInfo.forEach((repo) => {
  console.log(`Name: ${repo[0]}, Owner: ${repo[1]}, Number of Watchers: ${repo[2]}`);
});

// What 2 keys are inside monkey_party's license object?
console.log(Object.keys(data[0].license));

// What is the value of monkey_party's license url?
console.log(data[0].license.url);

// What's the current value of the booster repo's owner permissions object?
console.log(data[1].owner.permissions.admin);
