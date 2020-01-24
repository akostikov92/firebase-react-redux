/** @format */

/**
 * async will enforce waiting for a response from
 * any line of code which is preceded by await before
 * the next lineof code is executed.
 *
 * it must be wrapped in a try / catch block in order to handle errors
 **/

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
    );
    const posts = await postResponse.json();

    console.log(posts);
  } catch (err) {
    console.log('There was an error');
  }
};
