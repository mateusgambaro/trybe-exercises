// const uppercase = require('./script');
// const findUserById = require('./script');
const { getUserName }= require('./script');

// it('should be uppercase "test" to equal "TEST"', (done) => {
//     uppercase('test', (str) => {
//       try {
//         expect(str).toBe('TEST');
//         done();
//       } catch (error) {
//         done(error);
//       }
//     });
//   });

  describe('Find a username from a object with id number', () => {
      describe('When user id exists', () => {
          it('Return the username', () => (
              getUserName(1).then((data) => expect(data).toEqual('Mark'))
          ))
      });

  describe('when the user id does not exists', () => {
    it('returns an error', () => {
      expect.assertions(1);
      return getUserName(3).catch((error) =>
        expect(error.message).toMatch('User with 3 not found.'));
    });
  });
});