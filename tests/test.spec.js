/* eslint-disable */

const expect = require('chai').expect;

describe('Array', () => {
    describe('#sort', () => {
        it('should sorting array by name', () => {
            const names = ['Anthony', 'Stav', 'Adar', 'Ido', 'Maor', 'Neoray'];
            expect(names.sort()).to.be.eql(['Adar', 'Anthony', 'Ido', 'Maor', 'Neoray', 'Stav']);
        });
    });
});
