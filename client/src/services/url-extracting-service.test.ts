import UrlExtractingService from "./url-extracting-service";

describe('UrlExtractingService', () => {
    describe('extractUrlFromMetadata', () => {
        describe('given a metaData string containing an url', () => {
            const dummyMetadata = "{imageUrl:https://cdn.chefcookit.com/cloudinary/image/upload//w_500,q_auto,c_fit/recipes/poulet_huli_huli/1Fb4W6Fml0aBwCXyNhRUH48E9S-oNUAXm}";
            const expectedURL = "https://cdn.chefcookit.com/cloudinary/image/upload//w_500,q_auto,c_fit/recipes/poulet_huli_huli/1Fb4W6Fml0aBwCXyNhRUH48E9S-oNUAXm";

            it('should only return url', () => {
                const url = UrlExtractingService.extractUrlFromMetadata(dummyMetadata)
                expect(url).toEqual(expectedURL);

            })
        })
    });
});



