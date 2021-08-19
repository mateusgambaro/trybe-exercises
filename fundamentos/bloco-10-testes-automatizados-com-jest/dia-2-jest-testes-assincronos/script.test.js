// const uppercase = require('./script');
// const findUserById = require('./script');
const { describe, it, expect } = require('@jest/globals');
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

//   describe('Find a username from a object with id number', () => {
//       describe('When user id exists', () => {
//           it('Return the username', () => (
//               getUserName(1).then((data) => expect(data).toEqual('Mark'))
//           ))
//       });

//   describe('when the user id does not exists', () => {
//     it('returns an error', () => {
//       expect.assertions(1);
//       return getUserName(3).catch((error) =>
//         expect(error.message).toMatch('User with 3 not found.'));
//     });
//   });
// });

describe('Find a username from a object with id number', () => {
    describe('When user id exists', () => {
        it('return the user name', async () => {
            const data = await getUserName(1);
            expect(data).toEqual('Mark')
        });
    });

    describe('when the user id does not exists', () => {
        it('returns an error', async () => {
          expect.assertions(1);
          try {
            await getUserName(3);
          } catch (error) {
            expect(error.message).toEqual('User with 3 not found.');
          }
        });
      });
});