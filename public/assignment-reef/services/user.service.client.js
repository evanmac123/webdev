/**
 * An IIFE that initializes functions / services for user objects.
 */
(function () {
  angular
  .module("WebAppMaker")
  .factory("UserService", userService);

  /**
   * @returns {{findUserByCredentials: findUserByCredentials}}
   */
  function userService() {

    var users = [
      {
        "_id": "000",
        "username": "rl",
        "password": "rl",
        "firstName": "Reef",
        "lastName": "Loretto",
        "email": "test@test.com"
      },
      {
        "_id": "123",
        "username": "alice",
        "password": "alice",
        "firstName": "Alice",
        "lastName": "Wonder",
        "email": "test@test.com"
      },
      {
        "_id": "234",
        "username": "bob",
        "password": "bob",
        "firstName": "Bob",
        "lastName": "Marley",
        "email": "test@test.com"
      },
      {
        "_id": "345",
        "username": "charly",
        "password": "charly",
        "firstName": "Charly",
        "lastName": "Garcia",
        "email": "test@test.com"
      },
      {
        "_id": "456",
        "username": "jannunzi",
        "password": "jannunzi",
        "firstName": "Jose",
        "lastName": "Annunzi",
        "email": "test@test.com"
      }
    ];

    /**
     * An API providing an interface all the functions contained in this IIFE
     * @type {{createUser: *, findUserById: *, findUserByUsername: *,
     * findUserByCredentials: findUserByCredentials, updateUser: *, deleteUser:
     * *}}
     */
    var api = {
      "createUser": createUser,
      "findUserById": findUserById,
      "findUserByUsername": findUserByUsername,
      "findUserByCredentials": findUserByCredentials,
      "updateUser": updateUser,
      "deleteUser": deleteUser
    };

    var ids = [];
    var usernames = [];

    function init() {
      initIds();
      initUsernames();
    }

    init();

    return api;

    /**
     * Initialize a list of all id values currently associated with users
     */
    function initIds() {
      for (var u in users) {
        ids.push(users[u]._id);
      }
    }

    /** Initialize list of usernames associated with users. */
    function initUsernames() {
      for (var u in users) {
        usernames.push(users[u].username);
      }
    }

    /**
     * Create a new user based on the provided credentials.
     * @param username
     * @param password
     * @param firstName
     * @param lastName
     */
    function createUser(username, password, firstName, lastName) {
      var val = Math.random();
      val = val * 1000;
      var id = val.toString(10).substring(14);

      // check to see if the username is taken
      if (usernames.indexOf(username) != -1) {
        throw "Username is taken."; // null represents a taken user
      }

      // generate new id, if needed
      if (ids.indexOf(id) != -1) {
        createUser(username, password, firstName, lastName);
      }

      var user = {
        "_id": id,
        "username": username,
        "password": password,
        "firstName": firstName,
        "lastName": lastName
      };

      usernames.push(username); // update username array
      ids.push(id); // update ids array

      users.push(user);
      return id;
    }

    /** Find a user by her ID value */
    function findUserById(userId) {
      for (var u in users) {
        if (users[u]._id == userId) {
          return users[u];
        }
      }
      return null;
    }

    /**
     * Get the name of the user, given their id.
     */
    function findNameById(userId) {
      for (var u in users) {
        if (users[u]._id == userId) {
          return users[u].firstName;
        }
      }
    }

    /**
     * Find a user by their username.
     */
    function findUserByUsername(username) {
      for (var u in users) {
        if (users[u].username == username) {
          return users[u];
        }
      }
      return null;
    }

    /**
     * Find a user by her credentials
     * @param username
     * @param password
     * @returns {*}
     */
    function findUserByCredentials(username, password) {

      for (var u in users) {

        if (users[u].username == username &&
            users[u].password == password) {
          return users[u];
        }
      }
      return null;
    }

    /**
     * Find the user by their id, and replace them with the provided user
     */
    function updateUser(userId, user) {
      for (var u in users) {
        if (users[u]._id == userId) {
          users.set(u, user);
          return u;
        }
      }
      return -1;
    }

    /**
     * Delete the user who matches the provided user ID
     */
    function deleteUser(userId) {
      for (var u in users) {
        if (users[u]._id == userId) {
          users.remove(u);
          return u;
        }
      }
      return -1;
    }
  }
})();