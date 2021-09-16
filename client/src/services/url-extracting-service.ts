export default class UrlExtractingService {

    static extractUrlFromMetadata = (metaData: string): string => {
        const urlStartIndex = metaData.indexOf("https");
        const unwantedCharacters = ['"', '}'];
        const url = UrlExtractingService.removeUnwantedCharacters(metaData.substring(urlStartIndex), unwantedCharacters);
        return url;
    }

    private static removeUnwantedCharacters = (metaData: string, unwantedCharacters: string[]): string => {
        unwantedCharacters.map((unwantedCharacter) => {
            metaData = metaData.replace(unwantedCharacter, "");
        })
        return metaData;
    }
}