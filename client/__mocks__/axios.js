const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {

}

axiosMock.get.mockImplementation(req);

function req() {
    return new Promise((resolve) => {
        axiosMock.delayTimer = setTimeout({
            resolve(mockResponse);
        }, 1000);
    })
}

module.exports = axiosMock;